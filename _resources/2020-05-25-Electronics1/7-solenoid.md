<section markdown=1 data-transition="slide">

### Driving a linear solenoid

We usually run the [solenoids](https://www.youtube.com/embed/Ueio1qoXRbE){:
data-preview-link="true"} at ~60V, ~2A. This results in huge spikes in current
and voltage we have to contain.

We first used a relay, but we experienced [arcing](#/3-relay) due to this
[large power draw](#/solenoid-scope) and
[inductive nature](#/solenoid-inductive) of the solenoid.

<aside class="notes" markdown=1>

Maybe talk about the huge capacitor?

</aside>

==id="solenoid-scope" data-transition="slide"==

### Current spikes

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/solenoid-oscilloscope.jpg"
style='height:400px;'
alt="Oscilloscope reading of voltage across 0.4Ω resistor"
caption="Oscilloscope reading of voltage across 0.4Ω resistor"
%}

==id="solenoid-inductive" data-transition="slide"==

<aside class="notes" markdown=1>

point out negative and huge current flowing through (0.4Ω 5v = >10A)

</aside>

### Solenoid's inductive nature

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/solenoid-cross-section.png"
style='height:400px;'
alt="Linear solenoid cross section"
caption="[Linear solenoid cross section](https://www.electronics-tutorials.ws/io/io_6.html)"
%}

<aside class="notes" markdown=1>

Explain what is an inductor, basically a coil, so coil stores magnetic energy.
When power is removed, this magnetic energy is still there, it doesn't get
removed as well. Now this energy has nowhere to go, thus the voltage will just
keep increasing and building up until MOSFET diode reaches breakdown voltage

</aside>

==data-transition="slide-in fade-out"==

### MOSFET switch

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/solenoid-mosfet-noflyback.svg"
alt="Using a MOSFET to switch a solenoid...?"
caption="Using a MOSFET to switch a solenoid...?"
%}

<aside class="notes" markdown=1>

Explain what is an inductor, basically a coil, so coil stores magnetic energy.
When power is removed, this magnetic energy is still there, it doesn't get
removed as well. Now this energy has nowhere to go, thus the voltage will just
keep increasing and building up until MOSFET diode reaches breakdown voltage

</aside>

==data-transition="fade"==

### Flyback diode

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/solenoid-mosfet-withflyback.svg"
alt="Adding flyback diode to contain inductive 'kickback'"
caption="Adding flyback diode to contain inductive 'kickback'"
%}

==data-transition="fade-in slide-out"==

### Zener diode

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/solenoid-mosfet-withzener.svg"
alt="Adding zener diode to dissipate energy"
caption="Adding zener diode to dissipate energy"
%}

<aside class="notes" markdown=1>

Explain what is a zener diode, maintains a voltage difference across. This
allows it to dissipate more energy during the OFF state, which helps save the
MOSFET. Not really needed or used online, just a safety addition

</aside>

</section>
