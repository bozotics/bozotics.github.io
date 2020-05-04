---
layout: single
title: Strategy
permalink: /lightweight/strat/
sidebar:
  nav: "side-lw"
---

{{page.title}}

# COMING SOON

<!-- Including pagination manually since these are pages so page layout MUST be changed under navigation.yml -->
<nav class="pagination">
{% assign arrsize = site.data.navigation.side-lw|size |minus:1 %}
{% for i in (0..arrsize) %}
    {% if site.data.navigation.side-lw[i].url == page.url %}
        {% assign down = i|minus:1 %}
        {% assign up = i|plus:1 %}
        <a href="{% if i == 0 %}#{% elsif site.data.navigation.side-lw[down].children %}{% assign arrsize2 = site.data.navigation.side-lw[down].children|size |minus:1 %}{{ site.data.navigation.side-lw[down].children[arrsize2].url }}{% else %}{{ site.data.navigation.side-lw[down].url }}{% endif %}" class="pagination--pager {% if i == 0 %}disabled{% endif %}" title="{% unless i == 0 %}{% if site.data.navigation.side-lw[down].children %}{{site.data.navigation.side-lw[down].children[arrsize2].title}}{% else %}{{site.data.navigation.side-lw[down].title}}{% endif %}{% endunless %}">Previous</a>
        <a href="{% if i >= arrsize %}#{% elsif site.data.navigation.side-lw[i].children %}{{ site.data.navigation.side-lw[i].children[0].url }}{% elsif site.data.navigation.side-lw[up].url %}{{ site.data.navigation.side-lw[up].url }}{% else %}{{ site.data.navigation.side-lw[up].children[0].url }}{% endif %}" class="pagination--pager {% if i >= arrsize %}disabled{% endif %}" title="{% unless i >= arrsize %}{% if site.data.navigation.side-lw[i].children %}{{ site.data.navigation.side-lw[i].children[0].title }}{% elsif site.data.navigation.side-lw[up].url %}{{ site.data.navigation.side-lw[up].title }}{% else %}{{ site.data.navigation.side-lw[up].children[0].title }}{% endif %}{% endunless %}">Next</a>
    {% elsif site.data.navigation.side-lw[i].children %}
        {% assign arrsize2 = site.data.navigation.side-lw[i].children|size |minus:1 %}
        {% for j in (0..arrsize2) %}
            {% if site.data.navigation.side-lw[i].children[j].url == page.url %}
                <a href="{% if j == 0 %}{{site.data.navigation.side-lw[i].url}}{% else %}{% assign down = j|minus:1 %}{{ site.data.navigation.side-lw[i].children[down].url }}{% endif %}" class="pagination--pager" title="{{site.data.navigation.side-lw[down].title}}">Previous</a>
                <a href="{% if j >= arrsize2 %}{% assign up = i|plus:1 %}{{site.data.navigation.side-lw[up].url}}{% else %}{% assign up = j|plus:1 %}{{ site.data.navigation.side-lw[i].children[up].url }}{% endif %}" class="pagination--pager" title="{% if j >= arrsize2 %}{{site.data.navigation.side-lw[up].title}}{% else %}{{ site.data.navigation.side-lw[i].children[up].title }}{% endif %}">Next</a>
            {% endif %}
        {% endfor %}
    {% endif %}
{% endfor %}  
</nav>

<style>
    ul.visible-links li.masthead__menu-item a[href="/lightweight/intro/"]:before {
        transform: scaleX(1);
    }
    ul.hidden-links li.masthead__menu-item a[href="/lightweight/intro/"] {
        color: #fff;
        background: #0092ca;
    }
</style>