/* eslint-disable require-await */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent */

import * as React from 'react';
import { PixelRatio } from 'react-native';
import { GLView, ExpoWebGLRenderingContext } from 'expo-gl';
import { Renderer } from 'expo-three';
import OrbitControlsView from 'expo-three-orbit-controls';

import {
	Camera,
	Color,
	Fog,
	GridHelper,
	Mesh,
	PerspectiveCamera,
	Scene,
	HemisphereLight,
	DirectionalLight,
	SphereGeometry,
	MeshPhongMaterial,
	CanvasTexture,
} from 'three';

export const Map: React.FC = () => {
	const [camera, setCamera] = React.useState<Camera | null>();
	let timeout: number;

	React.useEffect(() => {
		return () => clearTimeout(timeout);
	}, []);

	return (
		<OrbitControlsView style={{ flex: 1 }} camera={camera}>
			<GLView
				style={{ flex: 1 }}
				onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
					const scale = PixelRatio.get();

					const renderer = new Renderer({
						gl,
						pixelRatio: scale,
						antialias: true
					});

					const width = gl.drawingBufferWidth / scale;
					const height = gl.drawingBufferHeight / scale;

					renderer.setSize(width, height);
					renderer.setClearColor(0x6ad6f0);

					// const scene = new Scene();
					// scene.fog = new Fog(0x6ad6f0, 1, 10000);
					// scene.add(new GridHelper(10, 10));

					// const camera = new OrthographicCamera(
					// 	-width / 4,
					// 	width / 4,
					// 	height / 4,
					// 	-height / 4
					// );

					// const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
					// camera.position.set(0, 3, 8);

					// camera.position.set(0, 4, 10);

					// const globe = new Mesh(
					// 	new SphereGeometry(90, 64, 64),
					// 	new MeshPhongMaterial
					// );

					// scene.add(globe);
					// globe.position.set(0, 0, 0);

					// camera.lookAt(globe.position);

					// const render = () => {
					// 	timeout = requestAnimationFrame(render);
					// 	renderer.render(scene, camera);
					// 	gl.endFrameEXP();
					// };

					// render();

					const sceneColor = 0x6ad6f0;

					renderer.setClearColor(sceneColor);

					let viewCamera = new PerspectiveCamera(70, width / height, 0.01, 1000);
					viewCamera.position.set(2, 5, 5);

					setCamera(viewCamera);

					const scene = new Scene();
					scene.fog = new Fog(sceneColor, 1, 10000);
					scene.add(new GridHelper(15, 15));

					// const ambientLight = new AmbientLight(0x101010);
					// scene.add(ambientLight);

					// const pointLight = new PointLight(0xffffff, 2, 1000, 1);
					// pointLight.position.set(0, 200, 200);
					// scene.add(pointLight);

					// const spotLight = new SpotLight(0xffffff, 0.5);
					// spotLight.position.set(0, 500, 100);
					// spotLight.lookAt(scene.position);
					// scene.add(spotLight);

					const hemLight = new HemisphereLight(0xffffff, 0x444444, 0.3);
					hemLight.position.set(0, 100, 0);
					hemLight.matrixAutoUpdate = false;
					hemLight.updateMatrix();

					const dirLight = new DirectionalLight(0xffffff, 0.8);
					dirLight.position.set(3, 10, 1000);
					dirLight.castShadow = true;

					scene.add(hemLight);
					scene.add(dirLight);

					const globe = new Mesh(
						new SphereGeometry(2, 64, 64),
						new MeshPhongMaterial({ color: 0xffff00 })
					);

					scene.add(globe);

					viewCamera.lookAt(globe.position);

					function update() {
						globe.rotation.y += 0.05;
						globe.rotation.x += 0.025;
					}

					// Setup an animation loop
					const render = () => {
						timeout = requestAnimationFrame(render);
						update();
						renderer.render(scene, viewCamera);
						gl.endFrameEXP();
					};
					render();
				}}
			/>
		</OrbitControlsView>
	);
}

Map.displayName = 'Map';

