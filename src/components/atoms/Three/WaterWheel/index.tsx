"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const WaterWheel: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Canvas
      className={`transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionProperty: "opacity" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color={"#ffffff"} />
      <directionalLight
        position={[10, 5, 10]}
        intensity={1}
        color={"#FDB813"}
      />
      <Model onLoaded={() => setLoaded(true)} />
    </Canvas>
  );
};

export default WaterWheel;

const Model: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  const { scene } = useGLTF("/models/waterwheel.glb");

  const texturePaths = {
    axis: "/textures/waterwheel/axis.png",
    axis_top: "/textures/waterwheel/axis_top.png",
    waterwheel_log: "/textures/waterwheel/oak_log.png",
    waterwheel_metal: "/textures/waterwheel/waterwheel_metal.png",
    waterwheel_plank: "/textures/block/spruce_planks.png",
    waterwheel_stripped_log: "/textures/block/stripped_spruce_log_top.png",
  };

  const textures = useLoader(THREE.TextureLoader, Object.values(texturePaths));

  textures.forEach((texture) => {
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
  });

  const textureMap = useMemo(
    () => ({
      axis: textures[0],
      axis_top: textures[1],
      waterwheel_log: textures[2],
      waterwheel_metal: textures[3],
      waterwheel_plank: textures[4],
      waterwheel_stripped_log: textures[5],
    }),
    [textures]
  );

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          const material = mesh.material;
          switch (material.name) {
            case "axis":
              material.map = textureMap.axis || null;
              break;
            case "axis_top":
              material.map = textureMap.axis_top || null;
              break;
            case "waterwheel_log":
              material.map = textureMap.waterwheel_log || null;
              break;
            case "waterwheel_metal":
              material.map = textureMap.waterwheel_metal || null;
              break;
            case "waterwheel_plank":
              material.map = textureMap.waterwheel_plank || null;
              break;
            case "waterwheel_stripped_log":
              material.map = textureMap.waterwheel_stripped_log || null;
              break;
            default:
              break;
          }
          material.needsUpdate = true;
        }
      }
    });

    // Indicate that the model is fully loaded
    onLoaded();
  }, [scene, textureMap, onLoaded]);

  const ref = useRef<THREE.Group>(null);
  let time = 0;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      time += delta;
      ref.current.rotation.z = 0.025 * Math.sin(time);
    }
  });

  const rotation = [Math.PI / 2, 0, 0];
  const scale = [0.9, 0.9, 0.9];

  return (
    <primitive object={scene} ref={ref} rotation={rotation} scale={scale} />
  );
};
