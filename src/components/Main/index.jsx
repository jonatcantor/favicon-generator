import { Wrapper } from './styles';
import Canvas from '../Canvas';
import Button from '../Button';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';

const Main = () => {
  const [drawCanvas, setDrawCanvas] = useState('BLANK');
  const [canvasData, setCanvasData] = useState('');

  const handleClickRandom = () => {
    setDrawCanvas(true);
  }

  const handleClickSave = async () => {
    const response = await fetch(process.env.REACT_APP_API, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ 'image': canvasData }),
    });

    const jsonData = await response.json();
    const imageData = URL.createObjectURL(await (await fetch(jsonData.image)).blob());

    const downloadImage = document.createElement('a');
    downloadImage.href = imageData;
    downloadImage.download = 'favicon.ico';
    downloadImage.click();
    downloadImage.remove();
  }

  return (
    <Wrapper>
      <Canvas isDraw={ drawCanvas } setDrawCanvas={ setDrawCanvas } setCanvasData={ setCanvasData } width='300' height='300' />
      <Button handleClick={ handleClickRandom } icon={ <GiPerspectiveDiceSixFacesRandom size='3rem' fill='#F05454' /> } />
      <Button handleClick={ handleClickSave } icon={ <FaSave size='2.5rem' fill='#325288' /> } />
    </Wrapper>
  );
}

export default Main;
