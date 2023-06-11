import { OrbitControls, useScroll } from "@react-three/drei";
import AppleVisionPro from "./AppleVisionPro";
import Background from "./Background";
import { useLayoutEffect, useRef, useState } from "react";
import Effects from "./Effects";
import Camera from "./Camera";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function Experience() {
	const [tl, setTl] = useState();
	const scroll = useScroll();
	const timeline = useRef();
	const controls = useRef();

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
			<Perf />
			<Camera tl={tl} />
			<Background tl={tl} />
			<Effects tl={tl} />
			<AppleVisionPro />
		</>
	);
}
