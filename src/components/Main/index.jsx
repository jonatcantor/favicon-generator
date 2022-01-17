import { Wrapper } from './styles';
import Canvas from '../Canvas';
import Button from '../Button';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { FaSave } from 'react-icons/fa';

const Main = () => {


  return (
    <Wrapper>
      <Canvas />
      <Button icon={ <GiPerspectiveDiceSixFacesRandom size='3rem' fill='#F05454' /> } />
      <Button icon={ <FaSave size='2.5rem' fill='#325288' /> } />
    </Wrapper>
  );
}

export default Main;
