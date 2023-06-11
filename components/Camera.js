import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Camera({ tl }) {
	const { camera } = useThree();
	const controls = useRef();

	function onEnd() {
		console.log({
			position: controls.current.object.position,
			rotation: controls.current.object.rotation,
			target: controls.current.target,
		});
	}
	// {
	//     "position": {
	//         "x": 20.050627320506333,
	//         "y": 1.1223015764789918,
	//         "z": -0.614410067640789
	//     },
	//     "rotation": {
	//         "isEuler": true,
	//         "_x": -1.4985549143567292,
	//         "_y": 1.5046244291150441,
	//         "_z": 1.4983970153369177,
	//         "_order": "XYZ"
	//     },
	//     "target": {
	//         "x": -0.3527393477399825,
	//         "y": -0.222850143775976,
	//         "z": -0.7207020677824643
	//     }
	// }
	useLayoutEffect(() => {
		camera.position.set(0.67, 2.79, -26.99);
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
				1.1,
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
				1.1,
			);

			tl.to(
				controls.current.target,
				{
					x: -0.35,
					y: -0.22,
					z: -0.72,
					duration: 1,
					ease: "power3.in",
				},
				0.9,
			);
		}
	}, [tl, camera]);

	return (
		<OrbitControls
			ref={controls}
			onEnd={onEnd}
			enabled={false}
			target={[-0.21, -3.55, -0.068]}
		/>
	);
}
