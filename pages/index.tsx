import { Container, Row } from 'reactstrap';
import Rows from './rows';

const createBox = (color: string) => (
  <div style={{
    height: '50px',
    width: '50px',
    backgroundColor: color,
    border: 'white 1px solid',
  }}>
  </div>
);

function SameGame() {

  const colorArrayByRows = [
    ['green', 'green','blue', 'red','green'],
    ['red', 'blue','red','blue','red'],
    ['blue','green','red','blue','green'],
    ['blue','green','red','blue','red'],
    ['green','green','blue','blue','green']
  ]

  return (
    <Container>
      { /* This is just a sample row, feel free to run with this visual system, or leverage your own */ }

      <Rows colors={colorArrayByRows} />

    </Container>
  );
}

export default SameGame;