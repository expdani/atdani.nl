"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Environment, OrbitControls } from "@react-three/drei";
import { Cube } from "./components/Cube";

const Scene: React.FC = () => (
  <Canvas style={{ height: "100%", width: "100%" }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Cube />
    <Environment preset="warehouse" />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

const BannerScene = motion(Scene);

export default BannerScene;
