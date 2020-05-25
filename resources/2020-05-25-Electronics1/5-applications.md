<section markdown=1 data-transition="slide">

### For powering a lightbulb, a MOSFET is probably the most suitable

- A lightbulb isn't THAT high power to require a IGBT or Darlington pair
- We are digitally controlling the lightbulb using a microcontroller, so we
  don't need analog amplification
- Cost effective, small, easily available, commonly used

==data-transition="slide"==

### Going back to the original problem...

{% include figure
image_path="assets/mosfet-LED-switch.png"
alt="MOSFET LED Switch"
caption="MOSFET LED Switch"
%}

==data-transition="slide"==

### Schematic Diagram

{% include figure
image_path="assets/mosfet-LED-switch-sch.svg"
alt="MOSFET LED Switch Schematic"
caption="MOSFET LED Switch Schematic"
%}

<aside class="notes" markdown=1>

Teach how to read schematic, common notations (net label, no 4 crossing,
junction)

Explain the pull down resistor, and the series resistor

</aside>

</section>

====

### Low Battery Indicator

{% include figure
image_path="assets/low-batt-npn.svg"
alt="NPN BJT Low Battery Indicator"
caption='
[NPN BJT Low Battery Indicator](https://www.falstad.com/circuit/circuitjs.html?cct=$+1+0.000005+10.20027730826997+50+5+50%0At+224+224+256+224+0+1+0+0+200%0At+288+192+320+192+0+1+0+0+200%0Aw+256+176+256+192+0%0A162+320+128+320+160+2+default-led+1+0+0+0.01%0Aw+320+160+320+176+1%0Aw+320+128+320+112+0%0Aw+320+112+304+112+0%0Ar+304+112+256+112+0+450%0Ar+192+128+192+176+0+100000%0Aw+192+176+192+224+0%0Aw+192+128+192+112+0%0Ar+256+128+256+176+0+100000%0Aw+256+192+288+192+1%0Aw+256+112+256+128+0%0Aw+320+208+320+304+0%0Aw+320+304+256+304+0%0Ar+192+240+192+288+0+6300%0Aw+192+224+192+240+2%0Aw+192+288+192+304+0%0Aw+192+304+256+304+0%0Aw+256+240+256+304+1%0Aw+192+112+176+112+0%0Aw+192+304+176+304+0%0A172+176+112+144+112+0+7+9.3+9.3+8.7+0+0.5+Voltage%0Ag+176+320+176+336+0%0Aw+192+112+256+112+0%0Aw+256+192+256+208+0%0Aw+176+304+176+320+0%0Aw+192+224+224+224+0%0A){:
data-preview-link="true"}'
%}

<aside class="notes" markdown=1>

Explain voltage divider, 0.6v saturation, show what saturation means (transistor
acts as zener), show on circuitJS

</aside>

====

### Variable Resistor

{% include figure
image_path="assets/mosfet-variable-resistor.svg"
alt="MOSFET as Variable Resistor"
caption="MOSFET as Variable Resistor"
%}

<aside class="notes" markdown=1>

Explain MOSFET in linear region, so we can control resistance by on-off time,
hence explain PWM

[Related AppNote](http://www.vishay.com/docs/70598/70598.pdf)

</aside>

====

### Low Dropout Regulator (LDO)

{% include figure
image_path="assets/LM1117-blockdiag.png"
alt="LM1117 LDO Block Diagram"
caption="[LM1117 LDO Block Diagram](www.ti.com/lit/ds/symlink/lm1117.pdf)"
%}

<aside class="notes" markdown=1>

Explain what is a block diagram, we don't actually need to understand but
there's a bunch of transistors around

</aside>

====

### Buck Converter

{% include figure
image_path="assets/buckconverter.svg"
alt="Buck converter simplified schematic"
caption="[Buck converter simplified schematic](https://commons.wikimedia.org/wiki/File:Buck_operating.svg)"
%}

<aside class="notes" markdown=1>

Very briefly explain inductor capacitor, and the switching action

</aside>

====

### Boost Converter

{% include figure
image_path="assets/boostconverter.svg"
alt="Boost converter simplified schematic"
caption="[Boost converter simplified schematic](https://commons.wikimedia.org/wiki/File:Boost_operating.svg)"
%}

<aside class="notes" markdown=1>

Very briefly explain inductor capacitor, and the switching action

</aside>
