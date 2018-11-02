'use strict';

define([
  'require',
  'jquery',
  'three'
], function(require, $) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 
    window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSzie(window.innerWidth, window.innerHeight);
  $('body').append(renderer.domElement);
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  
});