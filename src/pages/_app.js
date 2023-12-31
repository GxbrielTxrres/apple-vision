import "@/styles/globals.css";
import { styles } from "@/styles/styles";
import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience";
import { ScrollControls } from "@react-three/drei";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Canvas gl={{ antialias: false }} style={{ ...styles }}>
				<ScrollControls pages={3} damping={0.15} distance={1.5}>
					<Experience />
				</ScrollControls>
			</Canvas>
		</>
	);
}
