---
title: 'Karla Walker'
layout: 'base.pug'
---

This is a homepage.

## Projects

<ul>
{% for project in collections.projects %}
  <li><a href="{{ project.url }}">{{ project.data.title }}</a></li>
{% endfor %}
</ul>
