import { MeshPortalMaterial, OrbitControls, Text } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { gsap } from "gsap";
import { geometry } from "maath";
import {
	forwardRef,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { DoubleSide } from "three";
extend(geometry);

const Card = forwardRef(
	(
		{ position, color, children, rotationY, goldenRatio = 1.61803398875 },
		jef,
	) => {
		const ref = useRef();
		const portal = useRef();
		const text = useRef();

		const [active, setActive] = useState(false);

		useEffect(() => {
			//blend the portal
			active
				? gsap.to(portal.current.uniforms.blend, {
						value: 1,
						duration: 1,
						ease: "power3.inOut",
				  })
				: gsap.to(portal.current.uniforms.blend, {
						value: 0,
						duration: 1,
						ease: "power3.inOut",
				  });

			//animate the text opacity
			active
				? gsap.to(text.current.material, {
						opacity: 1,
						duration: 1,
						ease: "power2.inOut",
				  })
				: gsap.to(text.current.material, {
						opacity: 0,
						duration: 1,
						ease: "power2.inOut",
				  });

			//correct scene
			if (active === false) {
				gsap.to(ref.current.position, {
					x: position[0],
					y: position[1],
					z: position[2],
					duration: 1,
				});
				gsap.to(ref.current.rotation, {
					y: rotationY,
					duration: 1,
				});
			} else {
				gsap.to(ref.current.position, {
					x: 16,
					z: 1,
					duration: 1,
				});

				gsap.to(ref.current.rotation, {
					y: Math.PI / 2,
					duration: 1,
				});
			}
		}, [active]);
		return (
			<group>
				<mesh
					ref={ref}
					onClick={() => {
						setActive(true);
					}}
					rotation-y={rotationY}
					position={position}
				>
					<roundedPlaneGeometry args={[3, goldenRatio * 3, 0.1]} />
					<MeshPortalMaterial
						ref={portal}
						blend={0}
						side={DoubleSide}
					>
						<color attach="background" args={[color]} />
						{children}
						<Text
							ref={text}
							material-transparent={true}
							material-opacity={0}
							onClick={() => {
								setActive(false);
							}}
							position={[0, -2, 2]}
						>
							Back
						</Text>
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

Card.displayName = "Card";
export default Card;
