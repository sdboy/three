'use strict';

require.config({
  baseUrl : './js',
  paths : {
    init : 'app/init',
    async : 'lib/require/async',
    domReady : 'lib/require/domReady',
    text : 'lib/require/text',
    jquery : 'lib/jquery/jquery-3.3.1',
    underscore : 'lib/underscore/underscore',
    three: 'lib/three/three',
    camera: 'app/ball/camera',
    ball: 'app/ball/ball'
  },
  shim: {
  }
    
});

require([
  'jquery',
  'require',
  'domReady!'
], function($, require, doc) {
  require([
    'init',
    'camera',
    'ball'
  ], function(init, camera, ball) {
    init.initScene();
    camera.createCamera();
    ball.createBall(init.selfObj.scene, camera.selfObj.camera);
    ball.animate();
  });
});