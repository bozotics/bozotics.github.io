### For powering a lightbulb, a MOSFET is probably the most suitable

- A lightbulb isn't THAT high power to require a IGBT or Darlington pair
- We are digitally controlling the lightbulb using a microcontroller, so we
  don't need analog amplification
- Cost effective, small, easily available, commonly used

====

### Going back to the original problem...

{% include figure
image_path="assets/MOSFET-LED-switch.png"
alt="MOSFET LED Switch"
caption="MOSFET LED Switch"
%}

====

### Schematic Diagram

{% include figure
image_path="assets/MOSFET-LED-switch-sch.svg"
alt="MOSFET LED Switch Schematic"
caption="MOSFET LED Switch Schematic"
%}

<aside class="notes" markdown=1>

Explain the pull down resistor, and the series resistor

</aside>

====

### Low Battery Indicator

{% include figure
image_path="assets/low-batt-npn.svg"
alt="NPN BJT Low Battery Indicator"
caption="NPN BJT Low Battery Indicator"
%}
