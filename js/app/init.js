'use strict';

define([
  'require',
  'jquery',
  'three'
], function(require, $) {

  var selfObj = {
    'scene': null
  };

  var initScene = function() {
    selfObj.scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer();
    renderer.setSzie(window.innerWidth, window.innerHeight);
    $('body').append(renderer.domElement);
    return selfObj.scene;
  };

  return {
    initScene: initScene
  };
});