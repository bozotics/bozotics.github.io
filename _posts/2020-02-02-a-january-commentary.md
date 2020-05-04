---
author: Kai Cong
title: A January Commentary
tags: [Electronics, Mechanical, Monthly, Programming]
categories: [Soccer Lightweight, Soccer Open]
toc: true
toc_sticky: true
toc_icon: "calendar-alt"
toc_label: "A January Commentary"
---
>January is here, with eyes that keenly glow,
>A frost-mailed warrior
>striding a shadowy steed of snow.
>
>**Edgar Fawcett**

## *Opening thoughts...*

January is ironic. As the first month of the year, it is supposed to represent a new beginning, another reset button to try it all over again and thus, a hope for a better future. Yet, when one takes a step outside, it reflects a completely different message. Being right in the middle of the winter season, a thick blanket of snow covers every part of nature, creating a blindingly white landscape. The air is frigid, biting any exposed skin even in the slightest breeze. Trees sway slowly in the cold wind with their thin, naked branches, as if they are crying for help. Silence permeates the still, lifeless environment as most animals remain hunkered down in hibernation.

![Winter Landscape](/assets/images/3007px-Winter_Landscape_by_Caspar_David_Friedrich-1024x736.jpg "Winter Landscape by Caspar David Fredrich (1811)")
<p class="caption"><i>Winter Landscape</i> by Caspar David Fredrich (1811)</p>

However, despite this bleak scenery, we can still appreciate the significance of January if we look through the lens of ancient Roman mythology. January is named after the Roman god Janus, whom was the god of beginnings and endings, i.e. transitions. January itself is a time of transition from the old year to the new one, and times will always get tough during transitions, but the most important thing is to learn from the past and look forward to the future, no matter how dismal it may seem. In fact, Janus is usually depicted as having two faces since he looks to the past and the future, which is why he is also responsible for change and <strong><em>time</em></strong> itself.

Time (or more precisely, the race against it), was a key part of our journey in January, especially with the school term starting again. Despite an increased workload, we still kept to our schedules and made great progress. This is our lengthiest consolidation post yet, but oh well, here are some of our major accomplishments this month.

---

## Dribbler

The previous design faced a problem of the ball "repelling" from the dribbler when it entered the catchment area. This was due to the fact that when the ball was dribbled, it would move backwards with a lot of force (especially considering how our dribbler spins the ball at 2000 RPM). The ball would hit the back wall which produces an equal reaction force that pushes the ball directly out of the dribbler. We did not face this problem in previous years because we never made our dribbler spin the ball so quickly before... 🙃

<iframe width="560" height="315" src="https://www.youtube.com/embed/nKezmaD2Zs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="video-caption">This dribbler has an auto-kick function 🤔</p>

To fix this, a ramp was created on the bottom part of the catchment area, thus redirecting most of the backwards force of the ball diagonally upwards. This not only stopped the ball from bouncing out of the dribbler, but it also improved the dribbler's performance since most of the backwards force of the ball was used to push itself up into the dribbler, which increased the rollers' grip on the ball.

<iframe width="560" height="315" src="https://www.youtube.com/embed/At1M0b0S7Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="video-caption">Oddly satisfying...</p>

## Mirror (Lightweight)

Very little has been revealed of our Soccer Lightweight robot's actual design so far because we are experimenting with many new mechanics right now. We will definitely go into more detail when it gets closer to the competition after everything is finalised. However, all that needs to be known for now is that there will be a dribbler, a kicker, 4 motors and a 360 degree camera all somehow within that pesky 1.1kg limit 😉.

For the mirror, we cannot simply use the metal mirror of our Open robot due to weight constraints. Hence, we will be using the old method of molding mirror sheets instead, using the metal mirror as a mold. However, a big problem we faced with this method in the past was the mirror not being centralised since there was much room for error, be it during molding, cutting or gluing of the mirror sheet.

To fix this, an enclosure was made using scrap Vex channels to keep the mirror sheet aligned with the mirror mold. An M3 hole is drilled into the centre of the mirror sheet using a Vex channel for alignment before being heated and molded. This 3mm hole is used to screw the molded mirror in to our 3D printed mirror stand, which connects directly to the mirror plate. By screwing the mirror in place, instead of gluing it like we did in the past, the mirror is guaranteed to be in the centre of the robot, plus the screw head acts as a "crosshair" for the mirror's centre when calibrating the image's centre point!

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B8BhnuYHzYD/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B8BhnuYHzYD/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B8BhnuYHzYD/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Mirror making process!! Today we tried molding a mirror sheet with our new method for the first time and while there were many problems with the final product, at least the surface itself looked better than last time... 🙃 ⠀ 1: Random timelapse of cutting and screwing in the mirror sheet 2: Drilling a hole through the centre of the mirror sheet 3: Molding the mirror! 4: Molded mirror; hole at the tip warped slightly, mirror foil torn 😨 5, 6: Mirror attached to our mirror mount 7: Short clip from an OpenMV colour tracking program ⠀ More details about this mirror and many many other stuff coming up in our monthly consolidation blog post tommorow!! 😜 ~kfc [Soccer Lightweight] ⠀ #robocup #robocupjunior #robot #mirror #bozotics</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/bozotics/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> ¡ßöZø 🗽 SqûãD!</a> (@bozotics) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-02-01T12:12:55+00:00">Feb 1, 2020 at 4:12am PST</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

However, during our first try, the M3 hole was enlarged and warped slightly after molding. To fix this, we will try drilling the hole after making the mirror by using a 3D printed mold of the mirror as an alignment tool. The mirror sheet also tore, likely due to too much stretching during molding. Hence, we will try giving the sheet a little slack when screwing it on next time. We will also try using an actual heat gun, which heats up a larger area, so that the heating will be more even.

Despite these problems, the mirror surface itself produced a higher quality image as compared to our past molded mirrors since now the mirror mold is metal instead of 3D printed plastic, which meant the mirror sheet could be heated to a much higher temperature before molding.

## PCBs (Lightweight)

There are 4 main layers in our Soccer Lightweight robot. The first layer is at the base and is the most complex plate since it has to hold many large components while having very limited space. Hence, all the components are placed in an extremely compact layout, even the battery slots in perfectly from the back to connect directly to the first layer.

![EAGLE 1st layer top](/assets/images/pcb-1-1024x962.jpg "EAGLE 1st layer top")
<p class="caption">Top view of 1st layer as seen from EAGLE</p>

On the underside of this plate, we have our 48 light sensors, 36 of which are arranged in a ring of a 64mm radius (a huge improvement compared to our ring's radius last year of only 40+mm), while the remaining 12 are placed in a 2x3 grid on the left and right. No other components are placed on the underside to prevent cases of accidental damage when the robot is moved around.

![Fusion 1st layer bottom](/assets/images/layer1-v2-1024x955.jpg "Fusion 1st layer bottom")
<p class="caption">Bottom view of 1st layer as seen from Fusion 360</p>

The second layer is much emptier since its main job is just to support the dribbler and kicker, and hence large holes are also cut where possible in order to save weight. The main component it holds is the 5V buck converter.

![EAGLE 2nd layer top](/assets/images/pcb1-1-1024x897.jpg "EAGLE 2nd layer top")
<p class="caption">Does this 2nd layer even exist?</p>

Meanwhile, the third layer (which is still a work in progress), will contain sensors such as the IR ring, Bluetooth module, camera, as well as our micro-controllers like the Teensy and STM32. The final layer is placed very high, above the mirror, and it holds the TOF sensors and compass. This allows the TOF sensors to sense over the goals, while keeping the compass as far away from the motors as possible.

## PCBs (Open)

Our Soccer Open robot has 4 main layers, of which 3 are PCBs. The first PCB is the base layer and will be slightly similar to our Lightweight robot's first layer since they have similar outlines, motor driver placements and light sensor positions. However, there are additional components such as the boost converter for our solenoid and other all-round different arrangements of parts to fit our robot's design.

The second PCB is actually on the third layer (the second layer is just a carbon fibre plate since all its space is occupied) and is the main PCB holding all the microcontrollers including the Raspberry Pi, Teensy, STM32s and also the remaining sensors like the compass and Bluetooth module. The battery (which lies on the second layer) is also plugged in to this layer.

![EAGLE 3rd layer top](/assets/images/Layer42-982x1024.jpg "EAGLE 3rd layer top")
<p class="caption">3rd layer; a work in progress</p>

The final PCB is just above the third layer and it holds the Pi camera as well as the TOF sensors. It has an STM32 to process the TOF sensor readings as well as to control the 16 Neopixel LEDs on it that are used for debugging purposes.

![EAGLE 4th layer top](/assets/images/Layer4-1024x1024.jpg "EAGLE 4th layer top")
<p class="caption">Top view of 4th layer as seen from EAGLE</p>

In all, we should be able to finish designing our Open and Lightweight PCBs and sending them to be fabricated by the first week of February.

## GUI

We made the <em>amazing</em> discovery that, for the whole of December working on the GUI for our Pi camera, when we were connecting to the Raspberry Pi from the laptop via SSH, it was connecting over WiFi instead of through a direct Ethernet connection 😂😂😂, which explained why the GUI's video feed had such a low FPS.

However, the Raspberry Pi needed to act as a server and assign an IP address to the laptop in order for the laptop to connect through Ethernet, which we faced problems doing. Luckily, with help from the Arch Linux ARM forum, we were able to figure that out and can now connect to the Raspberry Pi directly over Ethernet.

![Forum Screenshot](/assets/images/test1-1024x512.jpg "Forum screenshot")

## Camera

In previous years, we have been using Python OpenCV to program our Pi camera, which came at the cost of speed. Due to Python's Global Interpreter Lock (GIL), multi threading was not possible, and all the Python threading library was doing was simply switching between different threads rapidly instead of actually running tasks in parallel. Moreover, many basic functions like loops are significantly slower in Python than C++. Hence, we have decided to switch to programming both our camera and GUI on C++.

We initially created a program to simply capture frames from the camera to push it to its limits and we realised it was able to capture 640 by 480 images at 120 FPS! However, after adding a few basic OpenCV functions such as `cvtColor` (converting the image's colour space), `inRange` and `clone`, we were surprised at how slow they were running. `cvtColor` itself took around 10ms, so one can just imagine how much longer more complicated functions like `findContours` would take.

That was when we realised our installation of OpenCV was not optimised. We enabled NEON (optimisation for ARM devices) and VFPV3 (floating point optimisation) in our CMake config before rebuilding and reinstalling OpenCV on our Raspberry Pi. With our new, optimised OpenCV library, the speed of the functions improved by a large margin; the `cvtColor` function can now run below 2.5ms. Our target will be to process the frames at 50 FPS, which gives us about 20ms to process each frame. 

Also, to finally stop our rampant spaghetti coding practices and start going "professional", we will use classes to make our code more readable... 🙃

---

## Conclusion

To be honest, January was a solid "meh"; we have definitely made progress but things seem like they can go much faster than this. Maybe its just the low after the New Year's high I'm feeling here, or maybe our gears need time to be oiled up before going into overdrive... who knows? Personally, I would say I am entering February with a feeling of optimistic apprehension; optimism stemming from the hope that these robots could very well be the best robots in the history of our team, but apprehension stemming from the cognizance of the multitude of ways we could all fail spectacularly, especially when considering past experiences. But then again, maybe I worry too much... 🤷

What I do know for sure is that February is going to be our make-it-or-break-it month. As long as we finish construction of our robots by the end of February, all should be well... 🤞

<style>
    ul.visible-links li.masthead__menu-item a[href="/blog/"]:before {
        transform: scaleX(1);
    }
    ul.hidden-links li.masthead__menu-item a[href="/blog/"] {
        color: #fff;
        background: #0092ca;
    }
</style>