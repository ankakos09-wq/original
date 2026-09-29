import * as THREE from 'three';
export function translaciosenseT (nom,semieixM, exentri, any){
    const k= 0.0003
    const angle= (any/(-Math.sqrt(k*(semieixM**3))))* Math.PI* 2;
    const r = (semieixM * (1 - exentri * exentri)) / (1 + exentri * Math.cos(angle));
    nom.position.x= Math.cos(angle)*r;
    nom.position.z= Math.sin(angle)*r;
};