---
layout: post
title: EVEN MORE three.js fun
tags: demo threejs
---

{% include three.html %}

Vertex shaders are fun. 

<style>
body {
  color: #ffffff;
}
a {
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}
.post__content a {
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}
a:visited {
  color: #ffffff;
}
.post__title h1 {
  border-bottom: 3px solid #ffffff;
}
</style>

<script>
var loader = new THREE.FileLoader();
      loader.load( '../junk/hyper.json', function ( text ) {

        var player = new APP.Player();
        player.load( JSON.parse( text ) );
        player.setSize( window.innerWidth, window.innerHeight );
        player.play();

        document.body.appendChild( player.dom );

        window.addEventListener( 'resize', function () {
          player.setSize( window.innerWidth, window.innerHeight );
        } );

        if ( location.search === '?edit' ) {
          var button = document.createElement( 'a' );
          button.id = 'edit';
          button.href = 'https://threejs.org/editor/#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/app.json';
          button.target = '_blank';
          button.textContent = 'EDIT';
          document.body.appendChild( button );
        }

      } );
</script>



