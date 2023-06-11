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
				<ScrollControls pages={2}>
					<Experience />
				</ScrollControls>
			</Canvas>
		</>
	);
}
