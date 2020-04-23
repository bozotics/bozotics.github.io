---
layout: single
title: Strategy
permalink: /open/strat/
sidebar:
  nav: "side-open"
---

{{page.title}}

# COMING NOT SO SOON

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