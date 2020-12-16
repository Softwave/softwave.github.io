---
layout: post
title: Becoming the woman I need to be
tags: demo threejs
---

{% include threeads.html %}

<script>
// Who I need to be program 

var camera, scene, renderer, clock, mesh;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.z = 80;
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("blog-threejs").appendChild(renderer.domElement);
    renderer.setClearColor(0xffffff);

    // Create geometry 
    var geometry = new THREE.OctahedronGeometry(10, 2);
    //var material = new THREE.MeshBasicMaterial({color:0xff00aa, wireframe:false});
    var material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.y = -10;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
}

init();
animate();
</script>

I'm working at making changes in my life. I've already come out as a transgender woman to a good number of people. I have been on hormone replacement therapy for a good many months now. But this is a continual process and I am not satisfied with how I've been living my life of late. I do not live my life as my full and real self. I hold back - barr myself from expression and don't allow myself to be who I really am. Even to people I am out to I keep my full self hidden away. 

TLDR: I am embarassed to be trans so I tone down my transness in front of others so as to protect myself from potential condemnation or negative appraisal by others. This even in front of people who are accepting or are trans themselves. This is a behavior I have to stop. 

My health is also a thing I have neglected - after a year of weight loss and being more relatively helathy, the past months have seen me gain weight, ditch healthy eating and lifestype choices, and fall into an abyss of apathy caused by poor self-esteem. I will 'never compare, never be seen as a woman, never be seen as pretty or worthwhile, so why even try to keep my body healthy?' - so says my brain in times of despair. Then the cycle repeats. 

Just, like, what I mean to say is that I have decided to make the following changes to my life: 

* I will actively work on my voice - try to find an affirming voice that makes me happy. 
* I will work to lose weight and get healthy. This means counting calories, eating healthy and getting frequent excercise. 
* I will spend more time dedicated to programming, painting, personal projects and that sort of creative fulfillment. 
* I'll allow myself to be feminine and not make appologies for who I am. 

We'll see how this goes. I am transgender and this cannot be changed~. 