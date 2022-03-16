import { LineConfig } from "konva/lib/shapes/Line";
import { times } from "lodash";
import React from "react";
import { Group, Line } from "react-konva"
import { useObjectSize } from "../hooks";
import Base, { BaseProps } from "./Base";

const L = ({ points, ...props }: LineConfig) => <Line {...props} points={points} stroke="#000" strokeWidth={6} />

const SingleRail = ({ length, ...props }: { length: number } & LineConfig) => <L points={[0, 0, length, 0]} {...props} />

interface RailsBase extends BaseProps {
  numOfRails: number;
  height: number;
  space?: number;
  skew?: number;
}

export const Rails = ({ numOfRails, height, space = 80, skew = 30, ...props }: RailsBase) => {

  // used to force Rails' bounding-box recalculation when ether values below change
  const memoizedProps = React.useMemo(() => ({ numOfRails, height, space, skew }), [height, numOfRails, skew, space]);

  const { refBase, baseSize } = useObjectSize(memoizedProps);
  const middleRailLength = height / Math.cos(skew * Math.PI / 180);
  const lowerRailStartPos = Math.sqrt(middleRailLength ** 2 - height ** 2) * (skew > 0 ? -1 : 1);

  return (
    <Base {...props} mRef={refBase} offsetX={baseSize.width / 2} name="Rails">
      <Group x={-lowerRailStartPos}>
        <SingleRail length={space * numOfRails} />
        <Group x={space / 2}>
          {times(numOfRails, (index) => <L key={index} points={[0, 0, 0, middleRailLength]} rotation={skew} x={index * space} />)}
        </Group>
        <SingleRail length={space * numOfRails} x={lowerRailStartPos} y={height} />
      </Group>
    </Base>
  )
};
