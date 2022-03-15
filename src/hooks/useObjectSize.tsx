import Konva from "konva";
import React from "react";

export function useObjectSize(props?: any) {
  const refBase = React.useRef<Konva.Group>(null);
  const [baseSize, setBaseSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const size = (refBase.current?.getClientRect({ skipTransform: true }));
    if (size) {
      setBaseSize({ width: size.width, height: size.height });
    }
  }, [props])

  return { refBase, baseSize };
}