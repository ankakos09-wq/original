import * as THREE from 'three';
import mertextura from './imatges/mercuri.jpg';
import ventextura from './imatges/venus.jpg';
import tertextura from './imatges/terra.jpg';
import marstextura from './imatges/mars.jpg';
import juptextura from './imatges/jupiter.jpg';
import sattextura from './imatges/saturn.jpg';
import uratextura from './imatges/uranus.jpg';
import neptextura from './imatges/neptu.jpg';
import plutextura from './imatges/pluto.jpg';

export function crearplaneta(textura, mida ){
const Texture= new THREE.TextureLoader().load(textura);
const planeta= new THREE.Mesh(
  new THREE.SphereGeometry(mida, 32, 32),
  new THREE.MeshStandardMaterial({map: Texture})
);
return planeta;}

export function crearmer() {
 return crearplaneta(mertextura,0.3);}

 export function crearven() {
 return crearplaneta(ventextura,0.45);}

 export function crearter() {
 return crearplaneta(tertextura,0.5);}

 export function crearmars() {
 return crearplaneta(marstextura,0.35);}

 export function crearjup() {
 return crearplaneta(juptextura,1.5);}

export function crearsat() {
 return crearplaneta(sattextura,1.3);}

export function crearura() {
 return crearplaneta(uratextura,0.9);}

export function crearnep() {
 return crearplaneta(neptextura,0.9);}

export function crearplu() {
 return crearplaneta(plutextura,0.25);}