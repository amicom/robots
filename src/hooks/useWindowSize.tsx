import React from "react";

export function useWindowSize() {
  const getWindowSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [windowSize, setWindowSize] = React.useState(getWindowSize);

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
