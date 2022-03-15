import { NodeConfig } from "konva/lib/Node";
import { Group } from "react-konva";

export interface BaseProps extends Omit<NodeConfig, "scale"> {
  scale?: number
}

const Base: React.FC<BaseProps> = ({ children, scale, ...props }) => <Group {...props} scale={{ x: scale ?? 1, y: scale ?? 1 }} children={children} />

export default Base;