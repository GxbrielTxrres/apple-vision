import { MeshPortalMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { gsap } from "gsap";
import { geometry } from "maath";
import { forwardRef, useEffect, useRef, useState } from "react";
import { DoubleSide } from "three";
extend(geometry);

const Card = forwardRef(
	(
		{ position, color, children, rotationY, goldenRatio = 1.61803398875 },
		ref,
	) => {
		const portal = useRef();
		const [active, setActive] = useState(false);

		function handleClick() {
			setActive((state) => !state.active);

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
		}
		return (
			<group>
				<mesh
					ref={ref}
					onClick={handleClick}
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
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

Card.displayName = "Card";
export default Card;
