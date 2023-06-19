import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
export default function Effects({ tl }) {
	const bloom = useRef();
	const ao = useRef();

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				bloom.current.blendMode.opacity,
				{
					value: 0.1,
					duration: 1,
					ease: "power2.out",
				},
				0.5,
			);

			tl.to(
				ao.current.configuration,
				{
					intensity: 10,
					duration: 1,
					repeat: 1,
					repeatDelay: 0.4,
					yoyo: true,
					ease: "power2.out",
				},
				0.75,
			);

			tl.to(
				bloom.current.blendMode.opacity,
				{
					value: 0.3,
					duration: 1,
					ease: "power2.out",
				},
				1.5,
			);
		}
	}, [tl]);

	return (
		<EffectComposer multisampling={0} disableNormalPass>
			<Bloom
				ref={bloom}
				mipmapBlur
				intensity={1}
				radius={0.2}
				levels={3}
				luminanceThreshold={0}
				opacity={0.75}
			/>

			<N8AO
				ref={ao}
				quality="performance"
				intensity={0}
				aoRadius={0.1}
				denoiseRadius={1.5}
			/>
			<SMAA />
		</EffectComposer>
	);
}
