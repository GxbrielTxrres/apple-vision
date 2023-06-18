import {
	Box,
	Center,
	Environment,
	Float,
	Sky,
	Stars,
	TransformControls,
	useScroll,
} from "@react-three/drei";
import AppleVisionPro from "./AppleVisionPro";
import Background from "./Background";
import { useLayoutEffect, useRef, useState } from "react";
import { useControls } from "leva";
import Effects from "./Effects";
import Camera from "./Camera";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import VisionPro from "./html/VisionPro";
import AppleLogo from "./Apple_logo";
import Card from "./Card";

export default function Experience() {
	const [tl, setTl] = useState();
	const scroll = useScroll();
	const timeline = useRef();
	const c = useRef();
	const d = useRef();

	useLayoutEffect(() => {
		timeline.current = gsap.timeline();
		const ctx = gsap.context(() => {
			setTl(timeline.current);
		});

		return () => {
			ctx.revert();
		};
	}, []);

	useFrame(() => {
		if (timeline.current) {
			timeline.current.seek(scroll.offset * timeline.current.duration());
		}
	});

	return (
		<>
			<Camera tl={tl} />
			<Background tl={tl} />
			<Effects tl={tl} />
			<AppleVisionPro tl={tl} rotationY={Math.PI / 2.01} />
			<AppleLogo centered tl={tl} />
			<VisionPro tl={tl} />
			{/* <TransformControls
				object={c}
				position={[15, -21, 1]}
				onObjectChange={(e) => {
					console.log(c.current.position);
				}}
			/> */}
			<Center ref={c} position={[14.81, -20.41, -0.62]}>
				<Card
					color="blue"
					position={[15, -21, 1]}
					rotationY={Math.PI / 2}
				>
					<Environment
						files="studio_small_09_1k.hdr"
						background
						blur
					/>
					<Float>
						<AppleVisionPro rotationY={-Math.PI / 4} scale={0.1} />
					</Float>
				</Card>
				<Card
					position={[15, -21, -2.25]}
					color="hotpink"
					rotationY={Math.PI / 2.5}
				>
					<Box material-color="yellow" />
					<Sky turbidity={50} rayleigh={1.5} inclination={0} />
				</Card>

				<Card
					position={[15, -21, 4.25]}
					color="black"
					rotationY={-Math.PI / 2.5}
				>
					<Box material-color="yellow" />
					<Stars />
				</Card>
			</Center>
		</>
	);
}
