import Card from "./Card";
import AppleVisionPro from "./AppleVisionPro";
import { Environment, Box, Sky, Stars, Center, Float } from "@react-three/drei";
import CardBg from "./CardBg";
import GradientShader from "./GradientShader";
export default function Cards() {
	return (
		<Center position={[14.81, -20.41, -0.62]}>
			<Card color="blue" position={[15, -21, 1]} rotationY={Math.PI / 2}>
				<Environment
					files="studio_small_09_1k.hdr"
					resolution={128}
					background
					blur
				/>
				<Float>
					<AppleVisionPro
						rotationY={-Math.PI / 4}
						scale={0.1}
						position-z={-3}
					/>
				</Float>
			</Card>
			<Card position={[15, -21, -2.25]} rotationY={Math.PI / 2.5}>
				<Box material-color="yellow" />
				<CardBg sinScalar={0.7} />
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
