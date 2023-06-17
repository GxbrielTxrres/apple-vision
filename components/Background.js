import { Environment } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";

export default function Background({ tl }) {
	const background = useRef();
	const light = useRef();

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				background.current,
				{
					r: 0.8,
					g: 0.8,
					b: 0.8,
					duration: 1,
					ease: "power3.inOut",
				},
				0.1,
			);
			tl.to(
				light.current,
				{
					intensity: 3,
					duration: 1,
					ease: "power3.inOut",
				},
				0.1,
			);

			tl.to(
				light.current.position,
				{
					y: 150,
					duration: 1,
					ease: "power3.inOut",
				},
				0.1,
			);
		}
	}, [tl]);

	return (
		<>
			<Environment files="studio_small_09_1k.hdr" resolution={128} />

			<pointLight
				ref={light}
				position={[-3.5, 97, 16]}
				intensity={50}
				distance={0}
			/>
			<color ref={background} attach="background" args={["black"]} />
		</>
	);
}
