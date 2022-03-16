import { NodeConfig } from "konva/lib/Node";
import React from "react";
import { Stage, Layer } from "react-konva"
import { Rails, Parachute, Robot } from "./Elements"

type RobotState = {
  getCurrLineCode: number;
  setCurrLineCode: React.Dispatch<React.SetStateAction<number>>
}

interface RobotActions {
  getPos: number;
  turnLeft: React.Dispatch<React.SetStateAction<number>>
  state: RobotState
}

interface VisualizerProps extends NodeConfig {
  width: number;
  height: number;
  appState: {
    initPos: [number, number];
    robotsState: {
      left: {
        getCurrLineCode: number;
        setCurrLineCode: React.Dispatch<React.SetStateAction<number>>;
      };
      right: {
        getCurrLineCode: number;
        setCurrLineCode: React.Dispatch<React.SetStateAction<number>>;
      };
    };
    setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
    isPlaying: boolean;
  }
}

const Visualizer = ({ appState: { initPos, robotsState, setIsFinished, isPlaying }, ...props }: VisualizerProps) => {
  const [leftPos, setLeftPos] = React.useState(initPos[0]);
  const [rightPos, setRightPos] = React.useState(initPos[1]);

  const space = 120; // adjusts the space between the rail vertical lines
  const adjustPos = -65; // adjusts the position of the robots to place on the rails

  const lRobot: RobotActions = React.useMemo(() => ({
    getPos: leftPos,
    turnLeft: setLeftPos,
    state: robotsState.left
  }), [leftPos, robotsState.left])

  const rRobot: RobotActions = React.useMemo(() => ({
    getPos: rightPos,
    turnLeft: setRightPos,
    state: robotsState.right
  }), [rightPos, robotsState.right])

  // follows the line numbers in the simulated code
  const robotRoutine = React.useCallback(async (me: RobotActions) => {
    switch (me.state.getCurrLineCode) {
      case 0:
        me.state.setCurrLineCode(1);
        break;
      case 1:
        me.state.setCurrLineCode(2);
        me.turnLeft(curr => curr - 1);
        break;
      case 2:
        me.state.setCurrLineCode(3);
        break;
      case 3:
        me.state.setCurrLineCode(initPos.some(val => me.getPos === val) ? 5 : 1);
        break;
      case 5:
        me.state.setCurrLineCode(6);
        me.turnLeft(curr => curr - 1);
        break;
      case 6:
        me.state.setCurrLineCode(5);
        break;
      default:
        throw new Error("invalid line number");
    }
  }, [initPos])


  React.useEffect(() => {
    if (isPlaying) {
      if (lRobot.getPos === rRobot.getPos) {
        setIsFinished(true);
      } else {
        const interval = setTimeout(() => {
          robotRoutine(lRobot);
          robotRoutine(rRobot);
        }, 500);
        return () => {
          clearTimeout(interval)
        }
      }
    }
  }, [isPlaying, lRobot, rRobot, robotRoutine, setIsFinished])

  const calcPos = (pos: number) => props.width + pos * space + adjustPos

  return (
    <Stage {...props}>
      <Layer scale={{ x: 0.5, y: 0.5 }}>
        <Rails x={props.width} y={380} height={100} numOfRails={25} space={space} />

        <Parachute x={calcPos(initPos[0])} y={90} />
        <Robot x={calcPos(leftPos)} baseColor="#1078FF" shadeColor="#CCE7FF" y={250} rotation={0} />

        <Parachute x={calcPos(initPos[1])} y={90} />
        <Robot x={calcPos(rightPos)} baseColor="#FF0500" shadeColor="#FFCCCE" y={250} />
      </Layer>
    </Stage>
  )
}

export default Visualizer;