/* eslint-disable require-await */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent */

import * as React from 'react';
import { GLView, ExpoWebGLRenderingContext } from 'expo-gl';
import { Renderer, THREE } from 'expo-three';
import { PixelRatio } from 'react-native';

export const Map: React.FC = () => {
	return(
		<GLView
			style={{ flex: 1 }}
			onContextCreate={ async (gl: ExpoWebGLRenderingContext) => {
				const scale = PixelRatio.get();

				const renderer = new Renderer({
					gl,
					pixelRatio: scale,
					antialias: true
				});

				const width = gl.drawingBufferWidth / scale;
				const height = gl.drawingBufferHeight / scale;

				renderer.setSize(width, height);

				const scene = new THREE.Scene();
				scene.background = new THREE.Color(0xa0a0a0);

				const camera = new THREE.OrthographicCamera(
					-width / 4,
					width / 4,
					height / 4,
					-height / 4
				);

				camera.position.set(0, 0, 100);

				const hemLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.3);
				hemLight.position.set(0, 100, 0);
				hemLight.matrixAutoUpdate = false;
				hemLight.updateMatrix();

				const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
				dirLight.position.set(3, 10, 1000);
				dirLight.castShadow = true;

				scene.add(hemLight);
				scene.add(dirLight);

				const animate = () => {
					requestAnimationFrame(() => {
						animate();
					});

					renderer.render(scene, camera);
				}

				animate();
			} }
		/>
	);
}

Map.displayName = 'Map';
