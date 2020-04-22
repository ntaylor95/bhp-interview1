import { Container, Row } from 'reactstrap';
import Block from './block';
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
  const colorsCol1 = ['green', 'red', 'blue', 'blue', 'green'];
  const colorsCol2 = ['green', 'blue', 'green', 'green', 'green'];
  const colorsCol3 = ['blue', 'red', 'red', 'red', 'blue'];
  const colorsCol4 = ['red', 'blue', 'blue', 'blue', 'blue'];
  const colorsCol5 = ['green', 'red', 'green', 'red', 'green'];

  const colorArray = [
      ['green', 'red', 'blue', 'blue', 'green'],
      ['green', 'blue', 'green', 'green', 'green'],
      ['blue', 'red', 'red', 'red', 'blue'],
      ['red', 'blue', 'blue', 'blue', 'blue'],
      ['green', 'red', 'green', 'red', 'green']
  ]

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

      <Block colors={colorArray} />

      <div style={{clear: "both", height: "50px"}}></div>

      <Rows colors={colorArrayByRows} />

    </Container>
  );
}

export default SameGame;