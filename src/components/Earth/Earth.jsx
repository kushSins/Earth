import React from "react";
import { Stars } from "@react-three/drei";

import EarthDayMap from "../../assets/texture/8k_earth.jpg";
import EarthCloudsMap from "../../assets/texture/8k_earth_clouds.jpg";
import EarthNormalMap from "../../assets/texture/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/texture/8k_earth_specular_map.jpg";

import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Earth = () => {
  const [dayMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);
  return (
    <>
      <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
      <directionalLight
        color="#fdfaf3"
        position={[0.5, 0.7, -2]}
        intensity={1.2}
      />
      <ambientLight intensity={0.2}></ambientLight>
      <mesh>
        <sphereGeometry radius={1.05} widthSegments={64} heightSegments={64} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh>
        <sphereGeometry radius={1} widthSegments={64} heightSegments={64} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
