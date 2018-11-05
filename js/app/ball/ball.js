'use strict';

define([
  'require',
  'jquery',
  'three',
  'init',
  'camera'
], function(require, $, THREE, init, camera) {
  var selfObj = {
    'cube': null
  };
  var createBall = function(scene, camera) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    selfObj.cube = new THREE.Mesh(geometry, material);
    scene.add(selfObj.cube);
    camera.position.z = 5;
  };

  var animate = function() {
    requestAnimationFrame(animate);
    selfObj.cube.rotation.x += 0.01;
    selfObj.cube.rotation.y += 0.01;
    init.selfObj.renderer.render(init.selfObj.scene, camera.selfObj.camera);
  };
  
  return {
    selfObj: selfObj,
    createBall: createBall,
    animate: animate
  };

});