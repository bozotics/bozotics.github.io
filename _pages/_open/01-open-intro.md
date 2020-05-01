---
layout: single
title: Introduction
permalink: /open/intro/
sidebar:
  nav: "side-open"
---

## Our robots

Our robots are built with a variety of materials and manufacturing techniques. It has two dribblers, one in each catchment area. with a solenoid for kicking in the front. Printed Circuit Boards (PCBs) make up most of our robot's plates, allowing us to save space. A Raspberry Pi running a Pi camera with a hyperbolic mirror gives us a 360 degree view of the field to detect the ball and goals, while a Teensy 3.5/3.6 coupled with assorted STM32 microcontrollers runs the robot itself. Bluetooth modules allow the robot to communicate within themselves as well as to our app for debugging.

## Our history



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