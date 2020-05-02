---
layout: single
title: Areas For Improvement
permalink: /open/afi/
sidebar:
  nav: "side-open"
---

## Mechanical
Dribbler make it ultra vacuum suck

Make mirror plate the 4th layer pcb, move all TOF and neopixel to top layer so they can actually be used

Do above then make camera cover screwable

<!-- Including pagination manually since these are pages so page layout MUST be changed under navigation.yml -->
<nav class="pagination">
{% assign arrsize = site.data.navigation.side-open|size |minus:1 %}
{% for i in (0..arrsize) %}
    {% if site.data.navigation.side-open[i].url == page.url %}
        <a href="{% if i == 0 %}#{% else %}{% assign down = i|minus:1 %}{{ site.data.navigation.side-open[down].url }}{% endif %}" class="pagination--pager {% if i == 0 %}disabled{% endif %}" {% unless i == 0 %}title="{{site.data.navigation.side-open[down].title}}"{% endunless %}>Previous</a>
        <a href="{% if i >= arrsize %}#{% else %}{% assign up = i|plus:1 %}{{ site.data.navigation.side-open[up].url }}{% endif %}" class="pagination--pager {% if i >= arrsize %}disabled{% endif %}" {% unless i >= arrsize %}title="{{site.data.navigation.side-open[up].title}}"{% endunless %}>Next</a>
    {% endif %}
{% endfor %}  
</nav>

<style>
    ul.visible-links li.masthead__menu-item a[href="/open/intro/"]:before {
        transform: scaleX(1);
    }
    ul.hidden-links li.masthead__menu-item a[href="/open/intro/"] {
        color: #fff;
        background: #0092ca;
    }
</style>