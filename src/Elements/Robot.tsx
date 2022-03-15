import { NodeConfig } from "konva/lib/Node";
import { LineConfig } from "konva/lib/shapes/Line";
import { PathConfig } from "konva/lib/shapes/Path";
import { Group, Path, Line } from "react-konva"
import Base, { BaseProps } from "./Base";

const HeadShape = (props: PathConfig) => <Path {...props} data="M132,84l32-32L132,20H60L28,52,60,84Z" x={-4} />
const EyeShape = (props: LineConfig) => <Line points={[28, 24, 16, 32, 4, 24, 4, 12, 16, 4, 28, 12, 28, 24]} {...props} fill="#cce7ff" closed stroke="#1078ff" strokeWidth={8} lineJoin="round" />
const HandShape = (props: NodeConfig) => (
  <Group {...props} offsetX={55.2 / 2}>
    <Line points={[20, 32, 24, 56, 51.2, 48]} stroke="#1078ff" strokeWidth={8} lineCap="round" />
    <Line points={[4, 4, 4, 16, 20, 32, 36, 16, 36, 4]} stroke="#1078ff" strokeWidth={8} lineCap="round" />
  </Group>
)
const BodyShape = (props: LineConfig) => <Line points={[124, 188, 60, 188, 48, 128, 68, 108, 116, 108, 136, 128, 124, 188]} {...props} closed lineJoin="round" />

export const Robot = (props: BaseProps) => (
  <Base {...props} name="Robot">
    <Group name="Head">
      <HeadShape fill="#fff" />
      <Line points={[24, 52, 56, 84, 128, 84, 160, 52, 144, 52, 124, 72, 60, 72, 40, 52, 24, 52]} closed fill="#cce7ff" />
      <HeadShape stroke="#1078ff" strokeWidth={8} lineJoin="round" />
      <EyeShape x={56} y={32} />
      <EyeShape x={94} y={32} />
      <Line points={[92, 4, 92, 20]} stroke="#1078ff" strokeWidth={8} lineCap="round" />
      <Line points={[92, 84, 92, 108]} stroke="#1078ff" strokeWidth={8} lineCap="round" />
    </Group>
    <HandShape name="LeftHand" x={28} y={96} />
    <HandShape name="RightHand" x={156} y={96} scaleX={-1} />
    <Group name="Body">
      <BodyShape fill="#fff" closed lineJoin="round" />
      <Line x={58} y={175} points={[0, 5, 66, 5]} stroke="#cce7ff" strokeWidth={10} />
      <BodyShape closed stroke="#1078ff" strokeWidth={8} lineJoin="round" />
      <Line points={[56.8, 172, 127.2, 172]} stroke="#1078ff" strokeWidth={8} />
    </Group>
  </Base>
);
