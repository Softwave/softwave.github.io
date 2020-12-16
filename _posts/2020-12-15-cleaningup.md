---
layout: post
title: Cleaning up the blog
tags: random demo p5
---

{% include p5.html %}

<style>
body {
    background-color: #E6E6E6;
}
</style>

<script>
function setup() {
  createCanvas(600, 800);
}

function draw() {
  colorMode(HSB, 100);
  background(90);
  stroke("#08101D");
  
  noFill();
  ellipseMode(CENTER);
  strokeWeight(2);
  translate(width/2.5, height/2);
  for (var i = 0; i < 60; i++) {
    translate(20, -24);
    angleMode(DEGREES);
    rotate(-8 * sin(millis() / 32.0));
    scale(0.95, 0.95);
    ellipse(0, 0, 400, 400);
  }
    
}

</script>

I've been meaning to clean up this blog for a while. I want to increase the quality of the things I post here and keep things looking clean.

You can still get my older blog content if you must at the [archive](http://s0ftwave.com/Archive/). In the meantime I'll keep writing and posting personal projects both big and small here.
