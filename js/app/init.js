'use strict';

define([
  'require',
  'jquery',
  'three'
], function(require, $, THREE) {

  var selfObj = {
    'scene': null,
    'renderer': null
  };

  var initScene = function() {
    selfObj.scene = new THREE.Scene();
    selfObj.renderer = new THREE.WebGLRenderer();
    selfObj.renderer.setSize(window.innerWidth, window.innerHeight);
    $('body').append(selfObj.renderer.domElement);
    return selfObj.scene;
  };

  return {
    selfObj: selfObj,
    initScene: initScene
  };
});