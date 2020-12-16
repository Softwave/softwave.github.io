---
layout: post
title: More three.js fun
tags: demo threejs
---

{% include three.html %}

Playing with [three.js](https://threejs.org/) some more. :)

<script>
var loader = new THREE.FileLoader();
      loader.load( '../junk/shadTest.json', function ( text ) {

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



