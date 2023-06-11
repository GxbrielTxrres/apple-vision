import {
	Environment,
	Lightformer,
	MeshDiscardMaterial,
} from "@react-three/drei";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";

export default function Background({ tl }) {
	const background = useRef();

	useLayoutEffect(() => {
		console.log(background.current);
		if (tl) {
			tl.to(
				background.current,
				{
					r: 1,
					g: 1,
					b: 1,
					duration: 1,
					ease: "power3.inOut",
				},
				0.1,
			);
		}
	}, [tl]);
	// const { target, position, scale } = useControls({
	// 	target: { value: { x: 0, y: 0, z: 0 }, min: -10, max: 10, step: 0.01 },
	// 	position: {
	// 		value: { x: 0, y: 0, z: 0 },
	// 		min: -10,
	// 		max: 10,
	// 		step: 0.01,
	// 	},
	// 	scale: { value: { x: 0, y: 0 }, min: 0, max: 20, step: 0.5 },
	// });
	return (
		<>
			<Environment
				files="studio_small_09_1k.hdr"
				// resolution={128}
			>
				{/* <Lightformer
					form="ring"
					position={[position.x, position.y, position.z]}
					target={[target.x, target.y, target.z]}
					scale={[scale.x, scale.y]}
					intensity={30}
				/> */}
			</Environment>
			<pointLight position={[-3.5, 97, 16]} intensity={30} distance={0} />
			<color ref={background} attach="background" args={["black"]} />
		</>
	);
}