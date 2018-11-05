'use strict';

define([
  'require',
  'three'
], function(require, THREE) {
  var selfObj = {
    'camera': null
  };

  var createCamera = function() {
    selfObj.camera = new THREE.PerspectiveCamera(75, 
      window.innerWidth/window.innerHeight, 0.1, 1000);
    return selfObj.camera;
  };

  return {
    selfObj: selfObj,
    createCamera: createCamera
  };
  
});