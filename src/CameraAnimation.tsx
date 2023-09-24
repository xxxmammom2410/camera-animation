import { useState,useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraAnimation = ({cameraDist, lookatDist=new THREE.Vector3(0,2,0)}) => {
  const [started, setStarted] = useState(false)
  useEffect(() => {
    setStarted(true);
  },[]);

  useFrame(state => {
    if (started) {
      state.camera.position.lerp(cameraDist, .008);
      state.camera.lookAt(0,2,0);
      // lookAtの位置を変更するとメッシュのみ位置がずれる
      // state.camera.lookAt(lookatDist.x, lookatDist.y, lookatDist.z);
      state.camera.updateProjectionMatrix();
    } return null
  })
   return null;
}

export default CameraAnimation;