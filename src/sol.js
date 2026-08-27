import * as THREE from 'three';
import soltextura from './imatges/sol.jpg';

export function crearsol(){
const solTexture= new THREE.TextureLoader().load(soltextura);
const sol= new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshBasicMaterial({map: solTexture})
);
return sol;}
