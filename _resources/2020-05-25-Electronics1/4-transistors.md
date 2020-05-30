There are many different types of transistors, but the first important one made
was the  
**bipolar junction transistor (BJT)**

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/BJT.svg"
alt="NPN BJT"
caption="[NPN BJT](https://commons.wikimedia.org/wiki/File:BJT_NPN_symbol_(case).svg)"
%}

<span class="fragment"><small>It is commonly used as an amplifier, eg. for
microphones and speakers</small></span>

<span class="fragment"><small>For switching a lightbulb, a BJT isn't the most
suitable...</small></span>

<aside class="notes" markdown=1>

Those who study H3 semicon prolly know this, but I didn't and that's not the
point of this presentation anyways.

Draw current flow, explain beta amplification value, thus high voltage but low
current since saturation and beta can only be certain value

On PDF, go through saturation voltages and beta value, teach how to read
datasheet (the absolute max, recommended, graphs, what is important what isn't)

switching is also relatively slow

[Good video explaining BJT](https://www.youtube.com/watch?v=WRm2oUw4owE)

[good video explaining P and N doping silicon](https://www.youtube.com/watch?v=IcrBqCFLHIY)

</aside>

====

metal–oxide–semiconductor field-effect transistor **(MOSFET)** is another type
of transistor, the gate is insulated from the rest of circuit thus there is low
input current and high input impedance

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/mosfet.svg"
alt="N-ch MOSFET"
caption="[N-ch MOSFET](https://commons.wikimedia.org/wiki/File:IGFET_N-Ch_Enh_Labelled.svg)"
%}

<span class="fragment"><small>For a very high power lightbulb, power losses may
become severe...</small></span>

<aside class="notes" markdown=1>

Go through why it's good: the high input impedance, so it is specifically made
to be a switch, can support high current

But input parasitic capacitance issues, so must put a resistor to smooth the
input current since constant charge

But but relatively high output impedance, means output power losses, breakdown
voltage relatively low

Explain graph, issues with V<sub>gs</sub>, usually use a charge pump to get
voltage up

[Good video explaining MOSFET](https://www.youtube.com/watch?v=o4_NeqlJgOs)

</aside>

====

to solve the input issues of the MOSFET while acheiving the (relatively lower)
output impedance of a BJT, a **darlington pair** configuration can be used

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/darlington.png"
alt="darlington pair configuration"
caption="[darlington pair configuration](https://circuitdigest.com/sites/default/files/inlineimages/u/Darlington-Transistor-Pair_0.png)"
%}

<span class="fragment"><small>But V<sub>ce</sub> is doubled, so more power
losses</small></span>

====

insulated gate bipolar transistor **(IGBT)** combines the low output impedance
of a BJT, high input impedance and high switching speed of a MOSFET to make a
very high powered transistor.

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/igbt-circuit.png"
alt="IGBT"
caption="[IGBT](https://www.electronics-tutorials.ws/power/insulated-gate-bipolar-transistor.html)"
%}

<span class="fragment"><small>But this is usually a lot more expensive and
large, for most cases it's overkill</small></span>

<aside class="notes" markdown=1>

since we want low input impedance, we use mosfet as input to drive low output
impedance BJT. This is also a "PNPN" transistor.

But this is expensive and usually overkill, also very large in size

[good writeup about this](https://www.electronics-tutorials.ws/power/insulated-gate-bipolar-transistor.html)

</aside>
