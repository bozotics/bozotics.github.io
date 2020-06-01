<style>
  @counter-style senses {
    system: fixed;
    symbols: 👁️ 👂 🖐️ ⚖️ 👅 👃;
    suffix: "  ";
  }
</style>

### How do we "communicate"?

Senses:

- Vision
- Hearing
- Touch
- Balance
- Taste
- Smell <!-- prettier-ignore -->
{: style="list-style: senses;"}

<span class="fragment">All of these are "analog"</span>

<aside class="notes" markdown=1>

Vision: RGB, 0-255. Hearing: dB value. All of these are "analog", but it doesn't
really work for microcontrollers...

</aside>

====

### What is "analog"?

From
[Wikipedia](https://en.wikipedia.org/wiki/Data_transmission#Applications_and_history):

> "Analog transmission is a method of conveying [...] information using a signal
> which <span class="fragment highlight-red">varies</span> in amplitude, phase,
> or some other property"

<span class="fragment">Most "common sense" since it can vary</span>

====

### However, microcontrollers cannot do analog well

Bus capacitance, stray inductance and resistances, all affect the analog signal
massively.

For the communication to be reliable,  
we need it to be digital.

<aside class="notes" markdown=1>

open whiteboard, draw normal microcontroller connection diagram, explain stray
resistances, capacitances, etc

maybe add a svgbob?

</aside>
