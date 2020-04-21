---
layout: post
author: Jing Heng
title: Rescue Line - March Update
time: 4
tags: [Electronics, Mechanical, Rescue Line]
---
A long time has passed since the last Rescue Line update as I’ve been mostly working on getting the Soccer robot up and running, but since everyone is waiting on parts to arrive from China it’s time for another update!

I tried to make this blog as comprehensive as possible, but if there is anything you would like to know more about or anything that is confusing, do feel free to reach out to us!

---

## Base upgrades

Previously, our drive base was a monolithic 3d printed part which was heavy, wasted a lot of filament and took a long time to print. This made our base very inflexible and chunky, which was not desirable since at that point, we haven’t designed our claw and ball collection mechanism, thus it made it difficult to integrate into the old base.

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B5m7bQgHkDa/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B5m7bQgHkDa/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B5m7bQgHkDa/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Day 2+??: Finished the base of the robot for now, 9 hr print ahead, hopefully the gears don&#39;t end up grinding too much. Also finished some slave work and claims!! 🎉 ~pajiao [rescue]</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/bozotics/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> ¡ßöZø 🗽 SqûãD!</a> (@bozotics) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-12-03T11:16:07+00:00">Dec 3, 2019 at 3:16am PST</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

Since then, we have redesigned our robot in order to make it lighter, more modular and flexible and to fit our ball collection mechanism. Originally, we wanted to make use of a static stress simulation software in order to decide which parts of the base to cut out, but we wasted a lot of time figuring it out and decided to abandon that route.
In the end, we just thought about which parts of the robot required more reinforcement and made those specific parts thicker or braced that area.

![Rescue Robot](/assets/rescue_3.0_2020-Mar-14_07-22-22AM-000_CustomizedView37765168667_png-1024x791.png "Rescue robot")
<p class="caption">Redesigned robot</p>

Rather than a single big 3d printed base, we have split it up into 4 plates to be connected by copper stands. We would also have a "base plate" across these 4 plates where our electronics and other mechanisms would be mounted upon. All these are quite difficult to show and explain, but more photos will be shared when we finish assembling the robot.

![Robot Plate](/assets/rescue-3.0-v73-1024x419.png "Robot plate")
<p class="caption">One of the 4 plates</p>

## Evacuation zone ball collection

For the evacuation zone victims, we considered many different types of ball collection mechanisms, including a rolling intake, a conveyor belt, or the traditional "scoop". However, we wanted our robot to be as small and lightweight as possible, thus we decided to go with a traditional claw and pick up the balls one by one. Electrical contacts would also be taped to the claw to detect whether the victims are dead or alive.

![Grab and Lift](/assets/rescue-3.0-v74-1024x419.png "Grab and lift")
<p class="caption">Grab and Lift mechanism</p>

We are preparing for both 2019 and 2020 rescue line rules as we were unsure of which version our local organiser would be adhering to. Thus, we had to sort the victims before depositing. We came up with a "funnel" that would guide the victim into its own compartment depending on whether it was dead or alive.

<div style="position:relative;padding-bottom:56.25%;margin:15px auto!important;">
<iframe src="https://drive.google.com/file/d/1GIfGhJ9cebe36LavOoRSzydWARoYOmu8/preview" style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
 frameborder="0" width="100%" height="100%" 
 allowfullscreen allow="autoplay"></iframe>
</div>
<p class="caption">"Funnel" mechanism</p>

To dispense the victims, we wanted to use 1 servo motor but be able to separately dispense the dead and live victims. Thus we have decided to use a "wiper" to open each compartment separately.

<div style="position:relative;padding-bottom:56.25%;margin:15px auto!important;">
<iframe src="https://drive.google.com/file/d/1YvVcK1Bej7ZAwR8UUXmeAQGg9HuADF4f/preview" style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
 frameborder="0" width="100%" height="100%" 
 allowfullscreen allow="autoplay"></iframe>
</div>
<p class="caption">"Wiper" mechanism</p>

Since we need to prepare for both the 2019 and 2020 rules, we also need to ensure our compartment is large enough to fit around 6+ balls for the 2019 rules, and be able to dispense the rescue kit for the 2020 rules. In order to hold that many balls our ramp inside the compartment cannot be too steep, however to dispense the rescue kit the ramp needs to be steep enough since it's a cube with a lot of friction. Thus, we have decided to make an "angler" which varies the angle of the ramp as well as the compartment size.

<div style="position:relative;padding-bottom:56.25%;margin:15px auto!important;">
<iframe src="https://drive.google.com/file/d/1nXJlgD1yfBoHSY1OrFmMRATaXsW8LVEo/preview" style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
 frameborder="0" width="100%" height="100%" 
 allowfullscreen allow="autoplay"></iframe>
</div>
<p class="caption">"Angler" mechanism</p>

## Electronics and programming

In order to sense and track the line, we have made our own light sensor array PCBs. These contain 12 LEDs, ALS-PT19 phototransistors, and 2 TCS3200 color sensors, together with a STM32F103 processor which reads and processes these sensors, then sends the data over UART or I2C to a main controller.

![Light Sensor PCB](/assets/RescueLS-1-1024x419.png "Light sensor PCB")
<p class="caption">Top of the Light Sensor PCB</p>

We haven't started programming the robot yet, but we are planning to use 2 of these PCBs to speed up our line tracking. Details of the exact logic will be finalised when we finish building and start programming our robot.

![Underside of robot](/assets/rescue-3.0-5-1024x419.png "Underside of robot")
<p class="caption">Bottom of the light sensor PCB, as seen from under the robot</p>

In order to detect the victims in the evacuation zone as well as the rescue kit, we are planning to use a Raspberry Pi Camera with some color tracking / edge detection algorithms to speed up our runs and prevent our robot from "brute forcing".

![Pi camera](/assets/rescue-3.0-6-1024x419.png "Pi camera")
<p class="caption">I spy with my little eye...</p>

However, vision detection and computer vision takes a long time to tune and program. Thus, we have backup plans in our small VL53L0X distance sensors which also help to detect obstacles. We place them one above another to help us differentiate victims from the evacuation zone walls, as well as the rescue kit from other obstacles and walls on the field.

![TOF](/assets/rescue-3.0-77-1024x419.png "TOF")
<p class="caption">There is one more TOF sensor under the Light Sensor PCBs</p>

---

## Conclusion

The rescue robot is slowly coming to shape. This is a new category for us, thus progress is a little slower as we are testing a lot of new designs and ideas, resulting in many robot iterations. However we remain confident that we can build a working and competitive robot by the time the competition comes (if it isn't cancelled...)

Do follow us on our Instagram for timely updates on our build process!