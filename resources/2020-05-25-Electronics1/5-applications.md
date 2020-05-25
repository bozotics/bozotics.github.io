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
caption="NPN BJT Low Battery Indicator"
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
