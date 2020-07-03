---
title: Introduction
permalink: /open/intro/
redirect_from:
  - /open/
---

> In the Soccer Open league, two fully autonomous robots go head to head in a
> soccer match.
>
> The robots must detect a passive, brightly coloured orange ball and score into
> a color-coded goal on a special field that resembles a human soccer field.

## Our robot

<details id="3dButton" markdown=1><summary>3d Model (≈80mb)</summary>
<div style="position:relative;padding-bottom:100%;margin:15px auto!important;">
<iframe
src="about:blank"
data-src="https://myhub.autodesk360.com/ue2d4b949/shares/public/SH56a43QTfd62c1cd968d240b070679b9ffd?mode=embed"
style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
allowfullscreen="true"
webkitallowfullscreen="true"
mozallowfullscreen="true"
frameborder="0"
id="3dModel"
></iframe></div>
Controls: Left click + drag to orbit, Middle click + drag to pan, Scroll to zoom
</details>

## Overview

Our robots are built with a variety of materials and manufacturing techniques.
It has two dribblers, with one solenoid for kicking in the front. Printed
Circuit Boards (PCBs) make up most of our robot's plates for a highly efficient
design. A Raspberry Pi running a Pi camera with a hyperbolic mirror gives us a
360 degree view of the field, while a Teensy 3.6 coupled with assorted STM32
microcontrollers runs the robot itself. Bluetooth modules allow the robot to
communicate within themselves as well as to our app for debugging.

You can read about our Soccer Open history on our [About](/about/#soccer-open)
page.

If you have any further questions, feel free to reach out to us via any of our
socials on the [Contact](/contact/) page!

<script>
var model = document.getElementById('3dModel');
var details = document.getElementById('3dButton');
var toggled = false;
details.addEventListener('toggle', function() {
  if (!toggled) {
    model.setAttribute('src', model.getAttribute('data-src'));
    toggled = true;
  }
});
</script>
