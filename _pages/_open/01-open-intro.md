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

## Our robots

Our robots are built with a variety of materials and manufacturing techniques. It has two dribblers, with one solenoid for kicking in the front. Printed Circuit Boards (PCBs) make up most of our robot's plates for a highly efficient design. A Raspberry Pi running a Pi camera with a hyperbolic mirror gives us a 360 degree view of the field, while a Teensy 3.6 coupled with assorted STM32 microcontrollers runs the robot itself. Bluetooth modules allow the robot to communicate within themselves as well as to our app for debugging.

## Our history

Soccer Open has always been the main Robocup league for us. Our school, [Hwa Chong Robotics Club (HCRC)](https://robo.infocommsociety.com), has participated in Soccer Open every single year since Robocup's inception in Singapore in 2009. Despite achieving somewhat stellar results in the initial years, our school's performance severely deteriorated. Year on year, we had robots with incomplete construction and programs that were barely working; landing a podium spot would have been nothing short of a miracle. Alas, all hope seemed lost...

In 2018, things finally took a turn for the better for HCRC. Clinching 1st in Soccer Lightweight and Rescue Line, as well as 2nd and 3rd in Soccer Open, it was our best performance yet. The spark of a new beginning was ignited and Transcendence was born. We had a very simple goal: not to win, not to be the best, but simply to create a pair of Soccer Open robots we could truly be proud of.

# INCLUDE IMAGE OF 2018 here

Despite our simple dreams, 2019 was not meant to be for us from the start. We started work really late, some of us participated in other competitions, like the First Lego League, which clashed with the preparation schedule, we neglected many things, and everything was done in a rush. The entire night before the competition, all 8 hours of it, was spent fervently trying to calibrate our IMU, which for some reason just stopped working and never did again throughout the whole competition. To call it a *total disaster* is an understatement. This failure hit especially hard since it was the final year for Benjamin, the most senior member of our team. He was one of the most talented mechanical designers in our club's history and the first person who actually tried really hard to put our failing club back together.

# INCLUDE BEN HERE?

With such a major setback, we vowed to never commit the same mistakes again; the same mistakes which has plauged our club for the past 10 years. With the dawn of the new decade, we promised to finish what we started, to accomplish the one simple goal which we could never seem to reach. Work commenced early, with the new robots' design completed before 2020 even began. Yet, as we ramped up into overdrive, finally feeling like we were on track for the first time, the world slowed down. Before we knew it, everything stopped. The world was brought to its knees with the Covid-19 pandemic and with it, our goals and aspirations.

For majority of the Soccer Open 2020 team members, where this is their last year, it was definitely not how they envisioned it to go... But life must go on. Although they might never witness the fruits of their labour in action, the least they can do is to record down every last detail of it, hopefully helping the future generation in some way with their Robocup journey. 

And well, that is what we have done. On this page, we have written about every single detail about the robot we could think of. If you have any further questions, feel free to reach out to us via any of our socials on the [Contact](/contact/) page!

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