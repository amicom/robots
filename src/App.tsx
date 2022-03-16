import { Box, Button, Container, Stack, Typography } from '@mui/material';
import useSize from '@react-hook/size'
import React from 'react';
import CodeBlock from './CodeBlock';
import Visualizer from './Visualizer';

export const App = () => {

  const ref = React.useRef(null)
  const [width] = useSize(ref)

  const [lRobotState, setLRobotState] = React.useState(0);
  const [rRobotState, setRRobotState] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const initPos: [number, number] = [4, 8];

  const robotsState = {
    left: {
      getCurrLineCode: lRobotState,
      setCurrLineCode: setLRobotState
    },
    right: {
      getCurrLineCode: rRobotState,
      setCurrLineCode: setRRobotState
    }
  }

  const appState = {
    initPos,
    robotsState,
    setIsFinished,
    isPlaying
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant="h2" align='center' >Robots Puzzle</Typography>
      <Box textAlign="center">
        <Button variant="contained" disabled={isFinished} onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"} Simulation</Button>
      </Box>
      <Typography variant="h3" align='center' sx={{ visibility: isFinished ? "visible" : "hidden" }}>FINISHED!</Typography>
      <Box ref={ref} sx={{ width: 1, backgroundColor: "#ccc", my: 1 }}>
        <Visualizer appState={appState} width={width} height={300} />
      </Box>

      <Stack direction="row" spacing={1} >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" align='center'>Left Robot</Typography>
          <CodeBlock highlightLineNo={lRobotState} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" align='center'>Right Robot</Typography>
          <CodeBlock highlightLineNo={rRobotState} />
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
