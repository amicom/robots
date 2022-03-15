import React from 'react';
import { Stage, Layer, Group } from 'react-konva';
import { Parachute, Rails, Robot } from './Elements';

export const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Group scale={{ x: 0.5, y: 0.5 }}>
          <Parachute />
          <Robot x={16} y={160} />
        </Group>
        <Rails x={300} y={25} height={75} numOfRails={15}  />
      </Layer>
    </Stage>
  );
}

export default App;
