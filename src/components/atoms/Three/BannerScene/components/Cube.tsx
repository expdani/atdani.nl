/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { type Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMotionValue, useTransform } from "framer-motion";

// Define the type for the ref
type MeshRef = React.MutableRefObject<any>;

export const Cube: React.FC = () => {
  const cubeRef: MeshRef = useRef<Mesh<any> | null>(null);

  const rotationX = useMotionValue(0);
  const rotationY = useMotionValue(0);

  const scale = useMotionValue(1);
  const scaleX = useTransform(scale, (s) => s);
  const scaleY = useTransform(scale, (s) => s);
  const scaleZ = useTransform(scale, (s) => s);

  const handleClick = () => {
    rotationX.set(Math.random() * Math.PI * 2);
    rotationY.set(Math.random() * Math.PI * 2);
  };

  const handlePointerOver = () => {
    scale.set(1.1); // Slight zoom in on hover
  };

  const handlePointerOut = () => {
    scale.set(1); // Revert to original scale when not hovering
  };

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = rotationX.get();
      cubeRef.current.rotation.y = rotationY.get();
      cubeRef.current.scale.set(scaleX.get(), scaleY.get(), scaleZ.get());
    }
  });

  return (
    <motion.mesh
      ref={cubeRef}
      position={[0, 1, 0]}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#61dafb" metalness={0.4} roughness={0.4} />
    </motion.mesh>
  );
};
