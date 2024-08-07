---
author: Kai Cong
title: February Worries
tags: [Electronics, Mechanical, Monthly, Programming, Simulation]
categories: [Soccer Lightweight, Soccer Open]
toc: true
toc_sticky: true
toc_icon: "calendar-alt"
toc_label: "February Worries"
---
>February is the uncertain month, neither black nor white but all shades between by turns. Nothing is sure.
>
>**Gladys Hasty Carroll**

## *A (not so) few thoughts...*

February has a very special day: the 29th, i.e. the *leap day*. It occurs once every 4 years to compensate for the drifting inaccuracies of our calendar. For many people, leap days would evoke nothing short of apathy and disinterest; most people probably wouldn't even realise it until it is much closer. However, I feel leap days serve as a subtle reminder for two interesting things.

One, is just how small and insignificant we all seem. The days, months and years that we all so closely abide by every moment of our lives are, at the end of the day, just another one of humanity's feeble constructs to help us find a sense of control amidst the chaos of the universe. This reminds me of Existentialism, a philosophical school of thought from which my greatest positive takeaway for life is that the universe is inherently irrational, chaotic and meaningless, and thus it is solely up to the individual to instill meaning into his own life by taking personal responsibility of his own actions and decisions, i.e. embracing one's existence.

Two, is *our lack of awareness*. This refers to anything from the vast amount of knowledge we will never learn, to the many experiences we will never get to experience in our lifetime and even to the sheer number of people we see everyday, but will never get to know. At face value, leap days are simply a quirky addition to our calendars, but digging deeper, these extra days are required because our calendar is merely a simplification of a whole complex field of astronomy and celestial mechanics that most of us will never understand. I find it humbling and even somewhat overwhelming when considering that everything, be it the littlest of things we know, the smallest of events we encounter, or the most insignificant of people we meet; all of them have an incredibly complex backstory, a series of interconnected events, that brought them to us. Every moment of our lives, countless of immeasurably unique things happen to us, yet we can never truly appreciate them because we are not even aware those moments exist. And even if we were aware of them, what could we possibly do about it? When taking into account the sheer size of the universe, it is simply impossible to fully appreciate the significance of our whole lives. In a twisted way, we try so hard to instill meaning into our lives, but ultimately, we end up knowing so little about the world and our life itself that it begs the question of whether we have truly *lived* in this world...

![Milky Way](/assets/images/milky-way-1023340-1024x683.jpg "Milky Way")

Personally, I like to do a self-reflection every 29th of February as it only occurs every 4 years. When asked to picture themselves in a decade's time, most people would give an honest "I don't know" for it seems so far away. Yet, when asked to picture themselves in a year's time, most people would only think of themselves in the same, unchanging routine of their lives. However, 4 years is just the perfect timing where it is close enough that most can still roughly picture what kind of path they would be on and what kind of life they would be leading, yet far enough that much of the details would still be murky enough to keep new possibilities open. When reflecting, I will take stock of my long term growth as a person over the past 4 years, while setting an overarching "macro" theme for my life (on top of the more detailed yearly, monthly and daily goals), for the long but conceivable span of the next 4 years.

February has been a rather chaotic month, to say the least, especially with the corona virus outbreak in China, affecting our main source of electronic parts. Nonetheless, we still made as much progress as we could, and here are some of our important breakthroughs.

---

## Mirror (Lightweight)

Following up from the problems with our first mirror molding process, we made some improvements such as using a bigger heat gun for more even heating and pre-heating the mirror mold to a higher temperature. However, the final mirror still came out rather warped, creating a highly distorted image.

Hence we decided to experiment with another method: folding a mirror sheet into a cone. First, we drew a 2D net of our conical mirror and printed it out. Next, we pasted this net outline over a 0.5mm PVC mirror sheet (much thinner than the ones used for molding) and cut the shape out. Finally, using epoxy, we stuck this mirror cone net around a 3D printed cone, thus creating our mirror.

![2D Cone Net](/assets/images/20200301_214055-1024x498.jpg "Cone net")
<p class="caption">2D cone net printed on paper</p>

![Finished mirror](/assets/images/20200301_214001-1024x498.jpg "Finished mirror")
<p class="caption">Finished mirror</p>

This method produced a much higher quality mirror, while being way simpler and faster to do. Although there is a large distortion along the line where the two ends of the cone net meet, this mirror is used for lightweight so only the goal detection is crucial. Since the goals are rather huge on the mirror's image, and the line of distortion can be rotated to face the side of the robot, the line does not cause much problems to the otherwise perfect mirror!

## PCBs

Due to COVID-19, much of our schedule have seen some kind of delay. We sent in our PCBs for manufacturing only on the 10th of February (1 week behind our schedule), due to the fact that the factory could only start work by then. Following that, the delivery of our PCBs were also delayed, arriving only on the 24th. To make matters worse, a huge number of our electronic parts, including one of the most important parts, the TPS5430 buck converter chip, were not shipping and we had only received news of it shipping over on the 29th (meaning it would probably come only by the 2nd week of March). 😞 Nonetheless, we still tried to solder as much of our PCBs as possible by making do with what we had and even salvaging old parts. 

### *Lightweight*

We have 4 PCBs, with the third and fourth layers mostly soldered. The third layer is a very compact board that holds the OpenMV camera, Teensy, STM32 chip, IR ring and all the other connectors from the other layers. The fourth layer acts as a mirror holder, and also holds the VL531L1X TOF sensors and BNO055 compass. Since the TOF breakout board we are using does not have screw holes, we mounted them using 90 degree male headers that allowed them to be easily detachable yet still perfectly aligned parallel to the ground in a fixed, stable position.

![Assembled Layer 3](/assets/images/20200302_184602-1024x576.jpg "Layer 3")
<p class="caption">Layer 3 with OpenMV and IR sensors</p>

![Assembled Layer 4](/assets/images/20200302_184320-1024x576.jpg "Layer 4")
<p class="caption">Layer 4 with TOF and compass sensors</p>

As for the first and second layer, we have opted not to begin soldering it first to be safe, since we want to make sure our TPS5430 buck converter outputs the correct voltage first before soldering the remaining components. They shall stay dormant *for now*, but not *for long*...

### *Open*

For Soccer Open, other than a few connectors, most of the third and fourth layer has been soldered and the parts that we could test, such as the STM32 chip and NeoPixel LEDs, were all working properly. As for our first layer, we have also decided to wait till the buck converter arrives before continuing.

![Re-assembled robot](/assets/images/20200302_183521-1024x498.jpg "Re-assembled robot")
<p class="caption">Re-assembled robot with PCB and CF plates in all its glory</p>

![Neopixel pink](/assets/images/IMG_20200301_171407-1-869x1024.jpg "Neopixel pink")
<p class="caption">Ring of fire</p>

We have also swapped out our motor switch from a toggle switch to a missile switch instead. As much as one can say it is literally just a toggle switch with a spring loaded cover, it still doesn't stop me from feeling like I'm launching a rocket every time I flip the switch. 🙃

<iframe width="560" height="315" src="https://www.youtube.com/embed/_eF3GVjwg4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="video-caption">Click clack boom</p>

## GUI

The GUI is just a few more minor fixes away from being 100% complete! The remaining problems we have left to fix is our "make" button, which occasionally crashes the GUI, and the ROI selection, which currently does not display a bounding box when dragging the mouse across.

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B8_oUHZHI3Y/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B8_oUHZHI3Y/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B8_oUHZHI3Y/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">GUI streaming ball detection from Raspi ⠀ Features: 1. Edit and compile code with UI (vscode/in-built code editor in UI) 2. Quick thresholding with instant value update 3. ROI to identify colour range 4. Visual debugging for every step of the image processing 5. One click to start UI and stream ⠀ ~JT [Soccer Open] #robocup #robocupjunior #bozotics</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/bozotics/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> ¡ßöZø 🗽 SqûãD!</a> (@bozotics) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-02-25T15:04:32+00:00">Feb 25, 2020 at 7:04am PST</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

## Camera

After programming the GUI for a week or two, with a separate Raspberry Pi, we made another *amazing* discovery when we started working on the actual robot again. Previously, we thought that we could track up to 120 FPS but that was using a camera mode that only used a partial FOV, which was not suitable for us. 😂😂😂 Using the correct camera mode with the full FOV, our frame rate is now capped at 40 FPS. Adding an approximate 6 ms processing time to the 25ms reading time, our image processing is effectively running at roughly 30 FPS, much lower than our initial expectation of 50 FPS.

In light of this, we considered using `raspiraw` which obtains raw Bayer images from the Pi camera. After a week of researching and attempting to use it, we concluded that it will be too time consuming to make it work. Fortunately, we are able to unlock more processing speed and reading speed by overclocking the RAM, GPU and CPU of our Raspberry Pi, especially since we are now using a much larger heat sink than before. However, after experimenting, we realised that overclocking would heat up our Raspberry Pi rather quickly, reaching over 60 degrees after running for 10 minutes. Hence, whether we will actually overclock our Pi still remains to be seen... 🤔

We have also experimented with various algorithms to improve our object tracking such as using `meanshift` and `camshift` but it was ineffective due to the presence of many objects that had a similar colour range as the ball. Thus, we fell back on our good old vanilla thresholding. It is good enough for our use given that it could track the ball up to 3m away. However, this is still largely dependent on the lighting condition.

On top of thresholding, we have also implemented a basic Kalman filter to predict the movement of the ball if it is obscured by another object such as an opponent’s robot or the copper stands supporting the mirror. However, as the mirror is curved, an extended Kalman filter will have to be used to linearize the distorted image for tracking to be more accurate.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zP8gnEITTic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="video-caption">Red rectangle depicts the predicted ball position</p>

## Simulation

For around the first week or so of February, we made some improvements to the simulation, adding key features such as simple line avoidance, goal aiming, ball kicking, attack-defense switching, and a basic back dribbler flick. A few clips of our simulation in action can be found on our Instagram Highlights [here](https://www.instagram.com/stories/highlights/17910837451404256/)!

However, our simulation project will be put on hold for now as all our more advanced strategy will require knowledge of the opponent robot's position, which we still don't know if our camera is capable of doing.

---

## Conclusion

If I'm going to be honest, February has been a rather bad month as compared to our previous months. Progress has been frustratingly slow due to bottlenecks on the supply side, an external problem that we have completely no control over. As of now, we are 2 weeks behind schedule, *at best*. But on the other hand, at this rate, the Singapore Open would probably be postponed too, soooo... 🤷‍♂️🙃

At the end of January I had proclaimed February was going to be our make-it-or-break-it month; yet, its the end of February and I am inconclusive about which side of that statement we are lying on. Neither anything exceptionally good nor terribly bad has happened because nothing much has happened in the first place. Perhaps that in itself is *the* bad thing, but then again I don't even know what to think anymore. I seek a deeper meaning to all this that we do, yet I fear deep down in my heart I already know what the answer to that is. But till that day of epiphany *(or admittal)* arrives, I shall just mindlessly wait for those elusive Taobao shipments to arrive...
