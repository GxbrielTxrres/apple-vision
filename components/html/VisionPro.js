import { Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";

export default function VisionPro({ tl }) {
	const texts = useRef([]);
	const introText = useRef();

	const { camera } = useThree();

	//make the texts face the camera, and animate the timeline
	useLayoutEffect(() => {
		//
		introText.current.lookAt(camera.position);

		if (texts.current) {
			texts.current.forEach((text, i) => {
				//
				text.lookAt(camera.position);
				if (tl) {
					tl.to(
						text.position,
						{
							y: -0.4 * (i + 1),
							z: (i + 1) * -0.2,
							duration: 0.2,
							ease: "power2.inOut",
						},
						0.1,
					);

					tl.to(
						text.material,
						{
							opacity: 0,
							duration: 0.25,
							ease: "power3.inOut",
						},
						0.1,
					);
				}
			});
		}

		if (tl) {
			tl.to(
				introText.current.material,
				{
					opacity: 0,
					duration: 0.175,
					ease: "power0.in",
				},
				0,
			);
		}
	}, [tl]);

	// useFrame(() => {
	// 	if (texts.current) {
	// 		texts.current.forEach((text) => {
	// 			if (text.material.opacity < 0.05) {
	// 				text.visible = false;
	// 			} else {
	// 				text.visible = true;
	// 			}
	// 		});
	// 	}
	// });

	return (
		<group position={[-0.1, -6, -15]}>
			<Text
				ref={introText}
				color="#6e6e73"
				fontSize={1.05}
				position-y={1.45}
				rotation-y={Math.PI}
			>
				Introducing
			</Text>

			{/* <Text rotation-y={Math.PI}>Vision Pro</Text> */}
			{[...Array(3)].map((value, i) => (
				<Text
					ref={(el) => {
						texts.current[i] = el;
					}}
					key={i}
					rotation-y={Math.PI}
					position={[0, -1.25, 0]}
					fontSize={2.45}
				>
					Vision Pro
				</Text>
			))}
		</group>
	);
}
