---
layout: default
title: Blog archive
permalink: /blog/
---
<div class="page-content wc-container">
  <h1 class="tc">Blog Archive</h1>
  <!-- site.categories.blog or site.posts? --> 
  {% for post in site.categories.blog %}
  <ul class="posts">
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}" class="link black woggle">{{ post.title }}</a>
    </li>
  </ul>
  {% endfor %}
  
</div>