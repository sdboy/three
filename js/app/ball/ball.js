'use strict';

define([
  'require',
  'jquery',
  'three'
], function(require, $) {
  var selfObj = {
    '':
  };
  var createBall = function() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
  };
  
  return {
    createBall: createBall
  };

});