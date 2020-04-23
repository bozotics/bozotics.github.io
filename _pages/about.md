---
layout: single
title: About Us
permalink: /about/
sidebar:
  nav: "side-about"
---
## Philosophy

>To be at the forefront of innovation is a prerequisite; to continually forge new frontiers is a habit. Why strive to be the best, when you can strive to go beyond?
>
>**Transcendence 2020**


### Who we are

We are Team Transcendence, a group of students from Hwa Chong Institution whom are participating across three categories of Robocup, namely Soccer Open, Soccer Lightweight, and Rescue Line.

### Our Vision

To be transcendent is to exist beyond what is considered a “normal” level, in other words, to exceed usual limits. It can also mean to be universally significant. This is exactly what Team Transcendence strives to be: to exceed expectations of what is possible through constant innovation, to leave an imprint in everything we do through our revolutionary works, and, hopefully, inspire others to do the same through striving to go beyond what they previously thought they were capable of.

### Our Values

>What sets our team apart is that on top of the typical values of innovation and perseverance, we closely live by our own three core values: self-directedness, interdisciplinarity and versatility

#### *Self-directedness*
We pride ourselves in being the ONLY team in Singapore, who have never had a coach since the beginning. Every step of the robot's construction process, from the first line of our robot’s design to the last line of code in our program, is completely done by us without any external help. Our unwavering insistence on self-directedness has definitely not made our journey easy and has even caused us to fail spectacularly on multiple occasions. However, we have always remained firm about doing everything ourselves because we believe that we should take full responsibility of our learning and thus hold ourselves fully accountable for the results we get, be it good or bad.

#### *Interdisciplinarity*
Every member of our team are expert generalists; we each specialise in multiple areas while keeping up a certain level of understanding in all other areas because we recognise and embrace the interdisciplinary nature of robotics. We utilise our naturally curious minds to learn as much as we can while maintaining a high level of focus into becoming the best we can be in our areas of specialisation. We understand the importance of investing in ourselves through knowledge as it allows us to parallelise our workflow much more efficiently, since every member will always be able to make progress in different areas at all times.

#### *Versatility*
Versatility connotates both adaptability and agility. On top of maintaining a wide range of skills, we see great significance in having as many opportunities as possible to apply our skills across a wide variety of scenarios. The importance of versatility extends far beyond the present; in an increasingly volatile future, the ability to adapt quickly will be a necessary skill to survive. To remain versatile is to maintain relevance. This is why most of us are involved in multiple categories of Robocup, so as to train ourselves in putting our skills to use in multiple situations.

To us, Transcendence symbolises more than just a team; it is a way of life. It is a set of principles to live life to the fullest, a motivation to push ourselves to exceed our expectations and an inspiration for a better future.

---

## Our Team

<style>
    .person-pic {
        max-width: 25%;
        margin-right: 1em;
    }
    .person-info {
        max-width: 70%;
        margin: 0;
    }
    @media only screen and (max-width: 500px) {
        .person-pic {
            max-width: 40%;
            min-width: 100px;
            margin: 0 0 0.5em 0 !important;
        }
        .person-info {
            max-width: 100%;
            margin: 0;
        }
    }
    .person-desc {
        margin: 0 !important;
    }
    .person-name {
        margin-top: 0 !important;
    }
    .person {
        vertical-align: middle;
        margin-bottom: 2em;
        display: block;  
    }
    .person-info, .person-pic {
        display: inline-block;
        vertical-align: middle;
    }
</style>

<div class="info">
{% for author in site.data.authors %}
    <div class="person">
        <img src="{{ author[1].avatar }}" alt="Profile" class="person-pic">
        <div class="person-info">
            <h3 class="person-name">{{ author[1].full-name }}</h3>
            <p class="person-desc">{{ author[1].desc }}</p>
        </div>
    </div>
{% endfor %}
</div>