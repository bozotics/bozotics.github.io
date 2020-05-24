There are many different types of transistors, but the first important one made
was the **bipolar junction transistor (BJT)**.

{% include figure
image_path="assets/BJT.svg"
alt="NPN BJT"
caption="[NPN BJT](https://commons.wikimedia.org/wiki/File:BJT_NPN_symbol_(case).svg)"
%}

<span class="fragment">For switching a lightbulb, a BJT isn't suitable...</span>

<aside class="notes" markdown=1>

Those who study H3 semicon prolly know this, but I didn't and that's not the
point of this presentation anyways.

Draw current flow, explain beta amplification value

On PDF, go through saturation voltages and beta value

switching is also relatively slow

[Good video explaining BJT](https://www.youtube.com/watch?v=WRm2oUw4owE)

[good video explaining P and N doping silicon](https://www.youtube.com/watch?v=IcrBqCFLHIY)

</aside>

====

metal–oxide–semiconductor field-effect transistor **(MOSFET)** is another type
of transistor, the gate is insulated from the rest of circuit thus there is low
input current and high input impedance

{% include figure
image_path="assets/mosfet.svg"
alt="N-ch MOSFET"
caption="[N-ch MOSFET](https://commons.wikimedia.org/wiki/File:IGFET_N-Ch_Enh_Labelled.svg)"
%}

<span class="fragment">For a very high power lightbulb, power losses may become
severe...</span>

<aside class="notes" markdown=1>

Go through why it's good: the high input impedance, high beta value, so it is
specifically made to be a switch

But input parasitic capacitance issues, so must put a resistor to smooth the
input current since constant charge

But but relatively high output impedance, means output power losses

[Good video explaining MOSFET](https://www.youtube.com/watch?v=o4_NeqlJgOs)

</aside>

====

to solve the input issues of the MOSFET while acheiving the (relatively lower)
output impedance of a BJT, a darlington pair configuration can be used

{% include figure
image_path="assets/darlington.png"
alt="darlington pair configuration"
caption="[darlington pair configuration](https://circuitdigest.com/sites/default/files/inlineimages/u/Darlington-Transistor-Pair_0.png)"
%}

<span class="fragment">But Vce is doubled, so more power losses</span>

====

insulated gate bipolar transistor **(IGBT)** combines the low output impedance
of a BJT, high input impedance and high switching speed of a MOSFET to make a
very high powered transistor.

{% include figure
image_path="assets/igbt-circuit.png"
alt="IGBT"
caption="[IGBT](https://www.electronics-tutorials.ws/power/insulated-gate-bipolar-transistor.html)"
%}

<aside class="notes" markdown=1>

since we want low input impedance, we use mosfet as input to drive low output
impedance BJT. This is also a "PNPN" transistor.

But this is expensive and usually overkill, also very large in size

[good writeup about this](https://www.electronics-tutorials.ws/power/insulated-gate-bipolar-transistor.html)

</aside>
