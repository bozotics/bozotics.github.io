---
layout: single
title: Mechanical Deisgn
permalink: /open/mech/
sidebar:
  nav: "side-open"
toc: true
toc_sticky: true
toc_icon: "cog"
toc_label: "Mechanical Design"
---
This page contains all the information regarding design, fabrication and construction of the Soccer Open robots. If you would like to know more about our building process, you can read our (crudely written) [building log](#sike).

## CAD Software

The CAD software used to design our robots was [AutoCAD](https://www.autodesk.com/education/free-software/autocad). The reasons why we chose AutoCAD over the more commonly used [Fusion 360](https://www.autodesk.com/products/fusion-360/students-teachers-educators) is because:

- AutoCAD has always traditionally been our go-to CAD software since we used it to create the 2D profiles for our layer plates, and naturally, when extending from there onto a full 3D model of our robot, we simply continued within AutoCAD itself
- AutoCAD has much more versatile camera placements and rendering options, needed for making our mirror
- AutoCAD is a more "bare bones/stripped down" CAD software, using a command line and direct modelling workflow, which made it easier to learn

Nonetheless, the parametric workflow and added features like simulation analysis that Fusion 360 has can certainly offer some benefits and will be integrated into our designing process in subsequent years.

## Robot Size

Our robot's dimensions fit within a cylinder of diameter 200 mm and height 210 mm. The diameter of the robot was intentionally made to comply with the 2021 rules such that it did not have to be redesigned again then. To fully fit within the 200 mm height limit for 2021, the mirror simply has to be lowered slightly with no major changes required. The robot was not designed to fit the 2022 rules (180mm diameter) directly since we felt the size disadvantage of 40mm would have been too much. 

The process of adapting our 2019 robot to a smaller size actually quite straightforward, albeit more tedious than what we initially expected. Instinctively, we considered simply offsetting the original 2D layer profiles, but that would not work since the catchment area sizes and screw hole positions would be completely off. Besides, there were a few fixes to the layer designs that we wanted to implement anyway. Thus, the new layers were constructed from scratch by redrawing over the original layers, using the orginals' angles and distances between objects as a guage to keep the new design somewhat similar.

INSERT IMAGES OF OLD VS NEW LAYERS

## Robot Identities

We decided to build both our robot's to be exactly the same instead of having a separate striker and goalie design. Here are the benefits of having identical vs different robots we considered:

| Identical Robots  | Separate Robots   |
|:-----------------:| :----------------:|
|Gay Gay Gay Gay Gay Gay Gay Gay Gay Gay Gay Gay | Gay Gay Gay Gay Gay Gay Gay Gay Gay Gay Gay Gay |

Software used, why AutoCAD
Robot size, how shrinking done, identical robots
Overarching concepts: low cg, stable use copper stands
Layers?
Monetary costs

Drive system: 
motors used, placement angle
wheel design

Dribbler: design details (gear, bearing, plate, motor, roller, ski ramp)
Solenoid: why only 1, design (solenoid plate, placement)

Battery slot

Switch

Large microprocessor placements (raspi, teensy)

TOF holder

Camera module: camera cone cover, camera position (height)
Mirror: design process, manufacturing process
Mirror plate, mirror plate supporter (trapezium stands)

Handle

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