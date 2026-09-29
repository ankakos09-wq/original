import './style.css'
import * as THREE from 'three';
import {crearsol} from "./sol.js";
import {crearmer, crearven, crearter, crearmars, crearjup, crearsat, crearura, crearnep, crearplu} from "./planets.js";
import {crearring} from "./ring.js";
import {rotacio, translacio} from "./moviments.js"
import { crearOrbita } from './orbita.js';
import {translaciosenseT} from './moviment.sense.periode.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg"),});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize (window.innerWidth, window.innerHeight);
camera.position.set(0, 50, 80);
renderer.render (scene, camera);

//elements del sistema solar
const sol= crearsol();
scene.add(sol);


const mer= crearmer();
 //. les dimencions son realitat =10.000.000km --> aqui= 1
scene.add(mer);
const merOrbita = crearOrbita(5.79, 0.2056, 0xda70d6);
scene.add(merOrbita);

const ven= crearven();
scene.add(ven);
const venOrbita = crearOrbita(10.82, 0.0068, 0xff9500);
scene.add(venOrbita);

const terra= crearter();
scene.add(terra);
const terraOrbita = crearOrbita(14.96, 0.0167, 0x50c878);
scene.add(terraOrbita);

const mars= crearmars();
scene.add(mars);
const marsOrbita = crearOrbita(22.79, 0.0934, 0xfa5053);
scene.add(marsOrbita);

const jup= crearjup();
scene.add(jup);
const jupOrbita = crearOrbita(77.85, 0.0489, 0x069494);
scene.add(jupOrbita);

const sat= crearsat();
const ring= crearring();
sat.add(ring);
scene.add(sat)
const satOrbita = crearOrbita(143.4, 0.0565, 0xffef00);
scene.add(satOrbita);

const ura= crearura();
scene.add(ura);
const uraOrbita = crearOrbita(287.1, 0.0472, 0x50c878);
scene.add(uraOrbita);

const nep= crearnep();
scene.add(nep);
const nepOrbita = crearOrbita(449.5, 0.0086, 0x9966cc);
scene.add(nepOrbita);

const plu= crearplu();
scene.add(plu);
const pluOrbita= crearOrbita(590.6 , 0.2488, 0xffd3ac);
scene.add(pluOrbita);

const pointLight = new THREE.PointLight(0xFC9601, 1000, 0)
pointLight.position.set(0,0,0)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper= new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(1200,120);
scene.add(lightHelper, )

const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.MeshStandardMaterial(0x000000);
scene.background= spaceTexture;

const clock= new THREE.Clock();

function animate() 
{requestAnimationFrame(animate); 
     const dia= clock.getElapsedTime();
     const any= dia/365;
    translacio(0.2408, mer, 5.79, 0.2056, any);
    translacio(0.6152, ven, 10.82, 0.0068 , any);
    translacio(1, terra, 14.96, 0.0167, any);
    translacio(1.8808, mars, 22.79, 0.0934, any);
    translacio(11.862, jup, 77.85, 0.0489, any);
    translacio(29.457, sat, 143.4, 0.0565, any);
    translacio(84.017, ura, 287.1, 0.0472, any);
    translacio(164.79, nep, 449.5, 0.0086, any);
    translaciosenseT(plu, 590.6, 0.2488, any);
    rotacio(sol, 25.4, dia); 
    rotacio(mer, 58.6, dia);
    rotacio(ven, -243, dia);
    rotacio(terra, 0.997, dia);
    rotacio(mars, 1.026, dia);
    rotacio(jup, 0.414, dia);
    rotacio(sat, 0.444, dia);
    rotacio(ura, -0.718, dia);
    rotacio(nep, 0.671, dia);
    rotacio(plu, 6.39, dia);
    controls.update(); 
    renderer.render (scene, camera);}

animate()