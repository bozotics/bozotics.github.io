---
layout: single
title: Introduction
permalink: /open/intro/
sidebar:
  nav: "side-open"
---

{{page.title}}

## Header 1 Level 2

Text 1

---

## Header 2 Level 2

Text 2

### Header 3 Level 3

Text 3

### Header 4 Level 3

Text 4

#### Header 5 Level 4

Text 5

## Header 6 Level 2

Text 6

<!-- Including pagination manually since these are pages -->
<nav class="pagination">
{% assign arrsize = site.data.navigation.side-open|size |minus:1 %}
{% for i in (0..arrsize) %}
    {% if site.data.navigation.side-open[i].url == page.url %}
        <a href="{% if i == 0 %}#{% else %}{% assign down = i|minus:1 %}{{ site.data.navigation.side-open[down].url }}{% endif %}" class="pagination--pager {% if i == 0 %}disabled{% endif %}">Previous</a>
        <a href="{% if i >= arrsize %}#{% else %}{% assign up = i|plus:1 %}{{ site.data.navigation.side-open[up].url }}{% endif %}" class="pagination--pager {% if i >= arrsize %}disabled{% endif %}" title="Rescue Line - March Update">Next</a>
    {% endif %}
{% endfor %}  
</nav>



