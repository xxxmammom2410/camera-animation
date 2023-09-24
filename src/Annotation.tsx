import { Html } from '@react-three/drei';
import './Annotation.css'
import * as THREE from "three";
function Annotation({ children, setCameraDist, distPos, ...props }) {
  const onClick = () => {
    console.log("click!!");
    setCameraDist(new THREE.Vector3(distPos[0], distPos[1], distPos[2]));
  }

  return (
    <Html
      {...props}
      transform
      occlude="blending"
    >
      <div className="annotation" onClick={onClick}>
        {children}
      </div>
    </Html>
  )
}

export default Annotation