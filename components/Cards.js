import Card from "./Card";
import AppleVisionPro from "./AppleVisionPro";
import { Environment, Box, Sky, Stars, Center, Float } from "@react-three/drei";
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
	);
}
