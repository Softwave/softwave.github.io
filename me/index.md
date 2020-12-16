---
layout: page
title: About me
---

{% include p5.html %}

<style>
body {
  color: #ffffff;
  background-color: #08101D;
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
function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  noFill();
  background("#08101D");
  stroke("#CECCFF");
  ellipseMode(CENTER);
  strokeWeight(2);
  translate(width/3.5, height/2);
  for (var i = 0; i < 60; i++) {
    translate(80, -24);
    angleMode(DEGREES);
    rotate(8);
    scale(0.80, 0.80);
    ellipse(0, 0, 400, 400);
  }
}
    
</script>

My name is Jessica Leyba and I'm a computer programmer from New Mexico. I love computers and am deeply interested in the notion of software as art.

This website serves as my blog and also an archive of my personal projects. Within my blog posts you'll often find a small sketch, basically, a small, quickly-made JavaScript program embedded in the page.

I hope you find the whole thing interesting. :)
