'use strict';

define([
  'require',
  'three'
], function(require) {
  var selfObj = {
    'camera': null
  };

  var createCamera = function() {
    selfObj.camera = new THREE.PerspectiveCamera(75, 
      window.innerWidth/window.innerHeight, 0.1, 1000);
    return selfObj.camera;
  };

  var return {
    createCamera: createCamera
  };
  
});