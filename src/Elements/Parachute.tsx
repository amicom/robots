import { PathConfig } from "konva/lib/shapes/Path";
import { Path, Line } from "react-konva"
import { useObjectSize } from "../hooks";
import Base, { BaseProps } from "./Base";

const P = ({ data, ...props }: PathConfig) => <Path {...props} data={data} fill="#90d1f1" />

export const Parachute = (props: BaseProps) => {
  const { refBase, baseSize } = useObjectSize();

  return (
    <Base {...props} mRef={refBase} offsetX={baseSize.width / 2} name="Parachute">
      <Line points={[208.788, 108.045, 108.144, 187.242, 7.5, 108.045]} stroke="#6d6eab" strokeWidth={15} lineCap="round" />
      <Path data="M108.144,0A108.127,108.127,0,0,0,.017,108.127a7.208,7.208,0,0,0,7.208,7.209H209.063a7.209,7.209,0,0,0,7.209-7.209A108.128,108.128,0,0,0,108.144,0Z" fill="#6d6eab" />
      <P data="M151.4,100.919a199.663,199.663,0,0,0-15.786-77.563C156.225,37.34,171,66.606,172.8,100.919Z" />
      <P data="M136.978,100.919H79.31c1.37-53.055,17.517-86.5,28.834-86.5S135.536,47.864,136.978,100.919Z" />
      <P data="M80.68,23.356a199.664,199.664,0,0,0-15.787,77.563H43.268C45.286,66.534,60.064,37.34,80.68,23.356Z" />
      <P data="M201.855,100.919H187.438A129.749,129.749,0,0,0,165.812,34.6,93.712,93.712,0,0,1,201.855,100.919Z" />
      <P data="M50.476,34.6a129.748,129.748,0,0,0-21.625,66.318H14.434A93.708,93.708,0,0,1,50.476,34.6Z" />
    </Base>
  )
};
