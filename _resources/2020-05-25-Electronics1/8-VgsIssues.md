<section markdown=1 data-transition="slide">

### MOSFET V<sub>gs</sub> Threshold Issues

{% include figure
image_path="assets/solenoid-mosfet-withzener.svg"
alt="'CONTROL' voltage of 3.3v to drive MOSFET?"
caption="'_CONTROL_' voltage of 3.3v to drive MOSFET?"
%}

<aside class="notes" markdown=1>

show 2n7000 MOSFET datasheet graph of V<sub>gs</sub>, so MOSFET will get hot due
to R<sub>ds</sub> power losses

</aside>

==data-transition="slide"==

### Using 12v battery as gate drive

{% include figure
image_path="assets/mosfet-12v-gate-drive.svg"
alt="Using 12v for gate drive"
caption="Using 12v for gate drive"
%}

<aside class="notes" markdown=1>

Explain how smaller MOSFET has smaller breakdown voltage so can't use it alone,
but bigger MOSFET needs higher V<sub>gs</sub> to acheive lower R<sub>ds</sub>,
thus you use both together

Explain how gate drive isn't based on "absolute voltage", but is based on
V<sub>gs</sub>, means it's relative to the source voltage, that's how this
circuit works

</aside>

</section>
