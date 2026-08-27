import * as THREE from 'three';
import ringtextura from './imatges/ring.jpg';

export function crearring(){
const ringTexture = new THREE.TextureLoader().load(ringtextura);
const ring= new THREE.Mesh(
  new THREE.RingGeometry(2, 4.4, 64),
  new THREE.MeshStandardMaterial({map: ringTexture, side: THREE.DoubleSide})
);
ring.rotation.x = -0.5*Math.PI;
return ring};

