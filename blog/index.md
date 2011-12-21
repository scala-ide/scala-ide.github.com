---
layout: blog-index
title: Blog
---

## [{{ site.posts.first.title }}]({{ site.posts.first.url }})
###### {% if site.posts.first.author %}By {{ site.posts.first.author}} on {% endif %}{{ site.posts.first.date | date: "%b %d %Y" }}
{{ site.posts.first.content }}