import Card from "./Card";
import AppleVisionPro from "./AppleVisionPro";
import {
	Environment,
	Box,
	Sky,
	Stars,
	Center,
	Float,
	RoundedBox,
	MeshWobbleMaterial,
	Sphere,
	MeshDistortMaterial,
} from "@react-three/drei";
import CardBg from "./CardBg";
import GradientShader from "./GradientShader";
import { useMemo } from "react";
export default function Cards() {
	const Env = useMemo(() => {
		return (
			<Environment
				files="studio_small_09_1k.hdr"
				resolution={128}
				background
				blur
			/>
		);
	}, []);
	return (
		<Center position={[14.81, -20.41, -0.62]}>
			<Card position={[15, -21, 1]} rotationY={Math.PI / 2}>
				{Env}
				<Float>
					<AppleVisionPro
						rotationY={-Math.PI / 4}
						scale={0.1}
						position-z={-3}
					/>
				</Float>
			</Card>
			<Card position={[15, -21, -2.25]} rotationY={Math.PI / 2.5}>
				<Sphere>
					<MeshDistortMaterial />
				</Sphere>
				<CardBg sinScalar={0.7} positionZ={-4} />
			</Card>

			<Card
				position={[15, -21, 4.25]}
				color="black"
				rotationY={-Math.PI / 2.5}
			>
				<Box>
					<GradientShader sinScalar={2.0} />
				</Box>
				<Stars />
			</Card>
		</Center>
	);
}
