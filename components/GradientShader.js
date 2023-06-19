import { shaderMaterial } from "@react-three/drei";
import { shaders } from "../shaders/Shaders";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { ImprovedNoise } from "three-stdlib";
export default function GradientShader({ sinScalar }) {
	const material = useRef();
	//uniforms
	const uniforms = {
		time: 0,
		sinScalar: 2,
	};

	//update uniforms
	useFrame(({ clock }) => {
		material.current.uniforms.time.value = clock.elapsedTime * 0.5;
	});
	//width and height for mesh
	const { width, height } = useThree((state) => state.viewport);

	//shader
	const CardBackground = shaderMaterial(
		uniforms,
		shaders.vertexShader,
		shaders.fragmentShader,
	);
	extend({ CardBackground });
	return <cardBackground ref={material} sinScalar={sinScalar} />;
}
