import { Stage, Layer } from 'react-konva';
import { Base, Parachute, Rails, Robot } from './Elements';
import { useWindowSize } from './hooks';

export const App = () => {
  const size = useWindowSize();
  const innerWidth = size.width;
  const space = 120;
  const lRobotPos = 5;
  const rRobotPos = 11;
  const adjustPos = -65

  return (
    <Stage width={innerWidth} height={size.height} style={{ backgroundColor: "#ccc"}}>
      <Layer scale={{x:0.5, y: 0.5}}>
        <Rails x={innerWidth/2} y={380} height={100} numOfRails={15} space={space} />
        <Base x={lRobotPos * space + adjustPos} y={180}>
          <Parachute y={-90} />
          <Robot y={70} rotation={0} />
        </Base>
        <Base x={rRobotPos * space + adjustPos} y={180}>
          <Parachute y={-90} />
          <Robot y={70} />
        </Base>
      </Layer>
    </Stage>
  );
}

export default App;
