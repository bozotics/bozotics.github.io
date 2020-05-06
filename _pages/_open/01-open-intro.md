---
layout: single
title: Introduction
permalink: /open/intro/
sidebar:
  nav: "side-open"
---
>In the Soccer Open league, two fully autonomous robots go head to head in a soccer match.
> 
>The robots must detect a passive, brightly coloured orange ball and score into a color-coded goal on a special field that resembles a human soccer field. 

## Our robot

<div style="position:relative;padding-bottom:100%;margin:15px auto!important;">
<iframe src="https://myhub.autodesk360.com/ue2d4b949/shares/public/SH56a43QTfd62c1cd968d240b070679b9ffd?mode=embed" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
</div>

Controls: Left click + drag to orbit, Middle click + drag to pan, Scroll to zoom

## Overview

Our robots are built with a variety of materials and manufacturing techniques. It has two dribblers, with one solenoid for kicking in the front. Printed Circuit Boards (PCBs) make up most of our robot's plates for a highly efficient design. A Raspberry Pi running a Pi camera with a hyperbolic mirror gives us a 360 degree view of the field, while a Teensy 3.6 coupled with assorted STM32 microcontrollers runs the robot itself. Bluetooth modules allow the robot to communicate within themselves as well as to our app for debugging.

You can read about our Soccer Open history on our [About](/about/#soccer-open) page.

If you have any further questions, feel free to reach out to us via any of our socials on the [Contact](/contact/) page!

<!-- Including pagination manually since these are pages so page layout MUST be changed under navigation.yml -->
<nav class="pagination">
{% assign arrsize = site.data.navigation.side-open|size |minus:1 %}
{% for i in (0..arrsize) %}
    {% if site.data.navigation.side-open[i].url == page.url %}
        {% assign down = i|minus:1 %}
        {% assign up = i|plus:1 %}
        <a href="{% if i == 0 %}#{% elsif site.data.navigation.side-open[down].children %}{% assign arrsize2 = site.data.navigation.side-open[down].children|size |minus:1 %}{{ site.data.navigation.side-open[down].children[arrsize2].url }}{% else %}{{ site.data.navigation.side-open[down].url }}{% endif %}" class="pagination--pager {% if i == 0 %}disabled{% endif %}" title="{% unless i == 0 %}{% if site.data.navigation.side-open[down].children %}{{site.data.navigation.side-open[down].children[arrsize2].title}}{% else %}{{site.data.navigation.side-open[down].title}}{% endif %}{% endunless %}">Previous</a>
        <a href="{% if i >= arrsize %}#{% elsif site.data.navigation.side-open[i].children %}{{ site.data.navigation.side-open[i].children[0].url }}{% elsif site.data.navigation.side-open[up].url %}{{ site.data.navigation.side-open[up].url }}{% else %}{{ site.data.navigation.side-open[up].children[0].url }}{% endif %}" class="pagination--pager {% if i >= arrsize %}disabled{% endif %}" title="{% unless i >= arrsize %}{% if site.data.navigation.side-open[i].children %}{{ site.data.navigation.side-open[i].children[0].title }}{% elsif site.data.navigation.side-open[up].url %}{{ site.data.navigation.side-open[up].title }}{% else %}{{ site.data.navigation.side-open[up].children[0].title }}{% endif %}{% endunless %}">Next</a>
    {% elsif site.data.navigation.side-open[i].children %}
        {% assign arrsize2 = site.data.navigation.side-open[i].children|size |minus:1 %}
        {% for j in (0..arrsize2) %}
            {% if site.data.navigation.side-open[i].children[j].url == page.url %}
                <a href="{% if j == 0 %}{{site.data.navigation.side-open[i].url}}{% else %}{% assign down = j|minus:1 %}{{ site.data.navigation.side-open[i].children[down].url }}{% endif %}" class="pagination--pager" title="{{site.data.navigation.side-open[down].title}}">Previous</a>
                <a href="{% if j >= arrsize2 %}{% assign up = i|plus:1 %}{{site.data.navigation.side-open[up].url}}{% else %}{% assign up = j|plus:1 %}{{ site.data.navigation.side-open[i].children[up].url }}{% endif %}" class="pagination--pager" title="{% if j >= arrsize2 %}{{site.data.navigation.side-open[up].title}}{% else %}{{ site.data.navigation.side-open[i].children[up].title }}{% endif %}">Next</a>
            {% endif %}
        {% endfor %}
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