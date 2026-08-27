import * as THREE from 'three';

export function crearOrbita(a, e, color) {
    const punts = [];

    for (let i = 0; i <= 100; i++) {
        const angle = (i / 100) * Math.PI * 2;

        const r = (a * (1 - e * e)) /
                  (1 + e * Math.cos(angle));

        punts.push(new THREE.Vector3(
            r * Math.cos(angle),
            0,
            r * Math.sin(angle)
        ));
    }

    const geometria = new THREE.BufferGeometry().setFromPoints(punts);

    const material = new THREE.LineBasicMaterial({
        color: color
    });

    return new THREE.LineLoop(geometria, material);
}