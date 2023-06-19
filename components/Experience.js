import Effects from "./Effects";
import Camera from "./Camera";
import AppleVisionPro from "./AppleVisionPro";
import VisionPro from "./html/VisionPro";
import AppleLogo from "./Apple_logo";
import Cards from "./Cards";
import Background from "./Background";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { Perf } from "r3f-perf";
import { gsap } from "gsap";

export default function Experience() {
	//create gsap timeline
	const timeline = useRef();
	const [tl, setTl] = useState();
	const scroll = useScroll();

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
			<Cards />
		</>
	);
}
