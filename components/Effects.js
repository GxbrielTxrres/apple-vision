import { Bloom, EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import { useLayoutEffect, useRef } from "react";
export default function Effects({ tl }) {
	const bloom = useRef();
	useLayoutEffect(() => {
		console.log(bloom.current.blendMode.opacity.value);
		if (tl) {
			tl.to(
				bloom.current.blendMode.opacity,
				{
					value: 0,
					duration: 1,
					ease: "power2.out",
				},
				0.5,
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
				quality="performance"
				intensity={5}
				aoRadius={0.15}
				denoiseRadius={1}
			/>
			<SMAA />
		</EffectComposer>
	);
}
