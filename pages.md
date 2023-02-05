---
title: PAGES
layout: layouts/page.njk
date: Last Modified
eleventyImport:
  collections: ["page"]
templateEngineOverride: njk
---

<div class="blog2">
<br>
A haphazard list of pages and blog posts on this website. 
<h2 class="nontitle">Pages & Posts</h2>

    <ul>
        {%- for page in collections.page -%}
        <li class="date"><span>{{page.date | dateformat}}</span> - <a href={{ page.url }}>{{page.data.title}}</a></li>
        {%- endfor -%}
    </ul>
</div>