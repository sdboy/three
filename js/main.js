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
    three: 'lib/three/three'
  },
  shim: {
  }
    
});

require([
  'jquery',
  'require',
  'domReady!'
], function($, require, doc) {
  
});