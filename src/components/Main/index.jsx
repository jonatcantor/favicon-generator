import { Wrapper } from './styles';
import Canvas from '../Canvas';
import Button from '../Button';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';

const Main = () => {
  const [drawCanvas, setDrawCanvas] = useState(false);

  const handleClickRandom = () => {
    setDrawCanvas(true);
  }

  const handleClickSave = () => {
    console.log('click!');
  }

  return (
    <Wrapper>
      <Canvas isDraw={ drawCanvas } setDrawCanvas={ setDrawCanvas } width='300' height='300' />
      <Button handleClick={ handleClickRandom } icon={ <GiPerspectiveDiceSixFacesRandom size='3rem' fill='#F05454' /> } />
      <Button handleClick={ handleClickSave } icon={ <FaSave size='2.5rem' fill='#325288' /> } />
    </Wrapper>
  );
}

export default Main;
