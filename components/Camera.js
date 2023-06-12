import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";

export default function Camera({ tl }) {
	const { camera } = useThree();
	const [width] = useState(window.innerWidth);

	//detect mobile/desktop for proper field of view + animations
	useLayoutEffect(() => {
		console.log(width);
		if (width < 750) {
			camera.fov = 100;
			camera.updateProjectionMatrix();
			if (tl) {
				tl.to(
					camera,
					{
						fov: 130,
						duration: 1,
						ease: "power3.out",
					},
					0.1,
				);
			}
		}
	}, [tl]);
	//timeline animations
	useLayoutEffect(() => {
		camera.position.set(0.65, 2.79, -26.99);
		camera.rotation.set(-2.82, 0.044, 3.12);
		if (tl) {
			tl.to(
				camera.position,
				{
					x: 20.05,
					y: 1.12,
					z: -0.61,
					duration: 1,
					ease: "power3.inOut",
				},
				0.1,
			);
			tl.to(
				camera.rotation,
				{
					x: -1.49,
					y: 1.504,
					z: 1.49,
					duration: 1,
					ease: "power3.inOut",
				},
				0.1,
			);
		}
	}, [tl]);

	useFrame(() => {
		if (camera.fov < 130) {
			camera.updateProjectionMatrix();
		}
	});

	return;
}
