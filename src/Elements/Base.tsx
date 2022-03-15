import Konva from "konva";
import { NodeConfig } from "konva/lib/Node";
import React, { LegacyRef } from "react";
import { Group } from "react-konva";

export interface BaseProps extends Omit<NodeConfig, "scale"> {
  scale?: number
  mRef?: React.Ref<Konva.Group>;
}

// const Base: React.FC<BaseProps> = ({ children, scale, ...props }) => <Group {...props} scale={{ x: scale ?? 1, y: scale ?? 1 }} children={children} />


const Base: React.FC<BaseProps> = ({ children, scale, mRef, ...props }) =>
  <Group {...props} scale={{ x: scale ?? 1, y: scale ?? 1 }} children={children} ref={mRef} />


export default Base;