/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/apple_vision_pro.glb --transform --simplify
Author: morchen (https://sketchfab.com/morchen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-vision-pro-44be571fa80143e0bc588586ed7cb99f
Title: Apple Vision Pro
*/

import React, { useLayoutEffect, useRef } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { Color, MeshPhysicalMaterial } from "three";
import { useThree } from "@react-three/fiber";

export default function AppleVisionPro({ tl, rotationY, ...otherProps }) {
	const { nodes, materials } = useGLTF("/apple_vision_pro-transformed.glb");
	const outerLayer = useRef();
	const ref = useRef();

	//make the vision pro invisible
	useLayoutEffect(() => {
		outerLayer.current.material = new MeshPhysicalMaterial({
			transparent: true,
			opacity: 0,
			reflectivity: 1,

			transmission: 1,
			roughness: 0,
			metalness: 1,
			specularIntensity: 0.5,
			ior: 1.5,
			color: new Color(0, 0, 0),
		});

		Object.values(materials).forEach((material) => {
			material.transparent = true;
			material.opacity = 0;
		});
	}, []);

	//animate the vision pro to visible
	useLayoutEffect(() => {
		if (tl) {
			Object.values(materials).forEach((material) => {
				tl.to(
					material,
					{
						opacity: 1,
						duration: 1,
						ease: "power3.out",
					},
					0.25,
				);
			});

			tl.to(
				outerLayer.current.material,
				{
					opacity: 0.86,
					duration: 1,
					ease: "power3.out",
				},
				0.25,
			);

			tl.to(
				ref.current.position,
				{
					y: 100,
					duration: 0.5,
					ease: "power2.in",
				},
				1.25,
			);
		}
	}, [tl]);

	return (
		<Center position-x={-0.15}>
			<group
				ref={ref}
				{...otherProps}
				rotation-y={rotationY}
				dispose={null}
			>
				<mesh
					geometry={nodes.Object_9.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_10.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_11.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_12.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_13.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_14.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_15.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_16.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_17.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_18.geometry}
					material={materials.jXaGRaRNFlyjRHn}
				/>
				<mesh
					geometry={nodes.Object_20.geometry}
					material={materials.jXaGRaRNFlyjRHn_0}
				/>
				<mesh
					geometry={nodes.Object_21.geometry}
					material={materials.jXaGRaRNFlyjRHn_1}
				/>
				<mesh
					geometry={nodes.Object_22.geometry}
					material={materials.jXaGRaRNFlyjRHn_2}
				/>
				<mesh
					geometry={nodes.Object_23.geometry}
					material={materials.jXaGRaRNFlyjRHn_3}
				/>
				<mesh
					geometry={nodes.Object_25.geometry}
					material={materials.jXaGRaRNFlyjRHn_4}
				/>
				<mesh
					geometry={nodes.Object_26.geometry}
					material={materials.jXaGRaRNFlyjRHn_5}
				/>
				<mesh
					geometry={nodes.Object_27.geometry}
					material={materials.jXaGRaRNFlyjRHn_6}
				/>
				<mesh
					geometry={nodes.Object_28.geometry}
					material={materials.jXaGRaRNFlyjRHn_7}
				/>
				<mesh
					geometry={nodes.Object_29.geometry}
					material={materials.jXaGRaRNFlyjRHn_6}
				/>
				<mesh
					geometry={nodes.Object_30.geometry}
					material={materials.jXaGRaRNFlyjRHn_4}
				/>
				<mesh
					geometry={nodes.Object_32.geometry}
					material={materials.jXaGRaRNFlyjRHn_8}
				/>
				<mesh
					geometry={nodes.Object_33.geometry}
					material={materials.jXaGRaRNFlyjRHn_9}
				/>
				<mesh
					geometry={nodes.Object_35.geometry}
					material={materials.aNufoLPSlXpHYnK}
				/>
				<mesh
					geometry={nodes.Object_36.geometry}
					material={materials.OoBOjVVfLatyjvf}
				/>
				<mesh
					geometry={nodes.Object_37.geometry}
					material={materials.ODyLhPZZuAmUwFw}
				/>
				<mesh
					geometry={nodes.Object_38.geometry}
					material={materials.jXaGRaRNFlyjRHn_10}
				/>
				<mesh
					geometry={nodes.Object_39.geometry}
					material={materials.aNufoLPSlXpHYnK}
				/>
				<mesh
					geometry={nodes.Object_40.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_42.geometry}
					material={materials.ODyLhPZZuAmUwFw}
				/>
				<mesh
					geometry={nodes.Object_43.geometry}
					material={materials.eoRPGCJmzEkvshY}
				/>
				<mesh
					geometry={nodes.Object_44.geometry}
					material={materials.ODyLhPZZuAmUwFw}
				/>
				<mesh
					geometry={nodes.Object_46.geometry}
					material={materials.aNufoLPSlXpHYnK}
				/>
				<mesh
					geometry={nodes.Object_47.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_48.geometry}
					material={materials.OoBOjVVfLatyjvf}
				/>
				<mesh
					geometry={nodes.Object_49.geometry}
					material={materials.ODyLhPZZuAmUwFw}
				/>
				<mesh
					geometry={nodes.Object_50.geometry}
					material={materials.jXaGRaRNFlyjRHn_10}
				/>
				<mesh
					geometry={nodes.Object_51.geometry}
					material={materials.aNufoLPSlXpHYnK}
				/>
				<mesh
					geometry={nodes.Object_54.geometry}
					material={materials.AuLUvjKzrAufLZb}
				/>
				<mesh
					geometry={nodes.Object_55.geometry}
					material={materials.AuLUvjKzrAufLZb}
				/>
				<mesh
					geometry={nodes.Object_56.geometry}
					material={materials.jXaGRaRNFlyjRHn_11}
				/>
				<mesh
					geometry={nodes.Object_57.geometry}
					material={materials.AuLUvjKzrAufLZb}
				/>
				<mesh
					geometry={nodes.Object_58.geometry}
					material={materials.SQMufwPqPCzZcED}
				/>
				<mesh
					geometry={nodes.Object_59.geometry}
					material={materials.hvCvQKqjCUqnKXn}
				/>
				<mesh
					geometry={nodes.Object_60.geometry}
					material={materials.LfTJxfhwgwSrgMB}
				/>
				<mesh
					geometry={nodes.Object_61.geometry}
					material={materials.KFjlkFtJpORujtn}
				/>
				<mesh
					geometry={nodes.Object_62.geometry}
					material={materials.RLRaQvfroYGxBfd_0}
				/>
				<mesh
					geometry={nodes.Object_64.geometry}
					material={materials.XrUkKndgaNesBlM}
				/>
				<mesh
					geometry={nodes.Object_66.geometry}
					material={materials.hvCvQKqjCUqnKXn}
				/>
				<mesh
					geometry={nodes.Object_67.geometry}
					material={materials.hvCvQKqjCUqnKXn}
				/>
				<mesh
					geometry={nodes.Object_68.geometry}
					material={materials.jXaGRaRNFlyjRHn_11}
				/>
				<mesh
					geometry={nodes.Object_69.geometry}
					material={materials.AuLUvjKzrAufLZb}
				/>
				<mesh
					geometry={nodes.Object_70.geometry}
					material={materials.SQMufwPqPCzZcED}
				/>
				<mesh
					geometry={nodes.Object_71.geometry}
					material={materials.LfTJxfhwgwSrgMB}
				/>
				<mesh
					geometry={nodes.Object_72.geometry}
					material={materials.KFjlkFtJpORujtn}
				/>
				<mesh
					geometry={nodes.Object_73.geometry}
					material={materials.RLRaQvfroYGxBfd_0}
				/>
				<mesh
					geometry={nodes.Object_75.geometry}
					material={materials.BLvlHlhrYfICBWH}
				/>
				<mesh
					geometry={nodes.Object_76.geometry}
					material={materials.zeOYUYoxmqYjjxm}
				/>
				<mesh
					geometry={nodes.Object_77.geometry}
					material={materials.QNxIvmIIdBvKkfL}
				/>
				<mesh
					geometry={nodes.Object_78.geometry}
					material={materials.BLvlHlhrYfICBWH}
				/>
				<mesh
					geometry={nodes.Object_79.geometry}
					material={materials.jXaGRaRNFlyjRHn_12}
				/>
				<mesh
					geometry={nodes.Object_82.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_84.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_85.geometry}
					material={materials.RLRaQvfroYGxBfd_0}
				/>
				<mesh
					geometry={nodes.Object_87.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_88.geometry}
					material={materials.RLRaQvfroYGxBfd_0}
				/>
				<mesh
					geometry={nodes.Object_90.geometry}
					material={materials.DejKZIOJlLkDHeC}
				/>
				<mesh
					geometry={nodes.Object_92.geometry}
					material={materials.guTAJfblFJATcdy}
				/>
				<mesh
					geometry={nodes.Object_93.geometry}
					material={materials.RLRaQvfroYGxBfd_2}
				/>
				<mesh
					ref={outerLayer}
					geometry={nodes.Object_94.geometry}
					material={materials.TGFKnDVoYgQpwoz}
				/>
				<mesh
					geometry={nodes.Object_96.geometry}
					material={materials.MxkvgeKzCcxzyCq}
				/>
				<mesh
					geometry={nodes.Object_97.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_98.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_99.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_100.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_101.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_103.geometry}
					material={materials.GsXCMfaPqsYsjoR}
				/>
				<mesh
					geometry={nodes.Object_104.geometry}
					material={materials.MxkvgeKzCcxzyCq}
				/>
				<mesh
					geometry={nodes.Object_106.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_107.geometry}
					material={materials.RLRaQvfroYGxBfd_3}
				/>
				<mesh
					geometry={nodes.Object_108.geometry}
					material={materials.UbpuUjMBkwjeuOX}
				/>
				<mesh
					geometry={nodes.Object_110.geometry}
					material={materials.LzRkeMvlHxswAoI}
				/>
				<mesh
					geometry={nodes.Object_111.geometry}
					material={materials.IxjKatRQmKhcndn}
				/>
				<mesh
					geometry={nodes.Object_112.geometry}
					material={materials.JuKvRaHxVjuKDTA}
				/>
				<mesh
					geometry={nodes.Object_114.geometry}
					material={materials.LzRkeMvlHxswAoI}
				/>
				<mesh
					geometry={nodes.Object_115.geometry}
					material={materials.IxjKatRQmKhcndn}
				/>
				<mesh
					geometry={nodes.Object_116.geometry}
					material={materials.JuKvRaHxVjuKDTA}
				/>
				<mesh
					geometry={nodes.Object_118.geometry}
					material={materials.guTAJfblFJATcdy}
				/>
				<mesh
					geometry={nodes.Object_120.geometry}
					material={materials.guTAJfblFJATcdy}
				/>
				<mesh
					geometry={nodes.Object_121.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_122.geometry}
					material={materials.RLRaQvfroYGxBfd_2}
				/>
				<mesh
					geometry={nodes.Object_124.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_125.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_126.geometry}
					material={materials.RLRaQvfroYGxBfd_2}
				/>
				<mesh
					geometry={nodes.Object_128.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_129.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_130.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_131.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_132.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_133.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_134.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_135.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_136.geometry}
					material={materials.YEzQljGsVIntmdY}
				/>
				<mesh
					geometry={nodes.Object_138.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_139.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_140.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_141.geometry}
					material={materials.jXaGRaRNFlyjRHn_13}
				/>
				<mesh
					geometry={nodes.Object_142.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_143.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_144.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_145.geometry}
					material={materials.jXaGRaRNFlyjRHn_14}
				/>
				<mesh
					geometry={nodes.Object_146.geometry}
					material={materials.YEzQljGsVIntmdY}
				/>
				<mesh
					geometry={nodes.Object_148.geometry}
					material={materials.uoSWePiCZJBkFIc}
				/>
				<mesh
					geometry={nodes.Object_149.geometry}
					material={materials.uoSWePiCZJBkFIc}
				/>
				<mesh
					geometry={nodes.Object_150.geometry}
					material={materials.uoSWePiCZJBkFIc}
				/>
				<mesh
					geometry={nodes.Object_151.geometry}
					material={materials.uoSWePiCZJBkFIc}
				/>
				<mesh
					geometry={nodes.Object_152.geometry}
					material={materials.RLRaQvfroYGxBfd}
				/>
				<mesh
					geometry={nodes.Object_154.geometry}
					material={materials.jXaGRaRNFlyjRHn_15}
				/>
			</group>
		</Center>
	);
}

useGLTF.preload("/apple_vision_pro-transformed.glb");
