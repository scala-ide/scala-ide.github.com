---
layout: blog-index
title: Blog
---

## {{ site.posts.first.title }}
###### {% if site.posts.first.author %}By {{ site.posts.first.author}} on {% endif %}{{ site.posts.first.date | date: "%b %d %Y" }}
{{ site.posts.first.content }}

### Previous Entries
<ul class="post-list">
  {% for post in site.posts %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> <span class="date">( {{ post.date | date: "%b %d %Y" }} )</span></li>
  {% endfor %}      
</ul>