### Transistors?

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/the-economist-moores-law.svg"
alt="Moore's Law in The Economist"
caption="Moore's Law in [_The Economist_](https://www.economist.com/node/21693710/sites/all/modules/custom/ec_essay)"
%}

<aside class="notes" markdown=1>

What are transistors? May have seen it being thrown around before, here's a
diagram from _The Economist_ abt Moore's Law

</aside>

====

From [Wikipedia](https://en.wikipedia.org/wiki/Transistor):

> "A transistor is a semiconductor device used to
> <span class="fragment highlight-red">amplify</span> or
> <span class="fragment highlight-red">switch</span> electronic signals and
> electrical power."

====

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/battery-switch-bulb.png"
alt="Normal way to switch a light bulb"
caption="Normal way to switch a light bulb"
%}

<aside class="notes" markdown=1>

Normally, when we want to turn on and off lightbulbs or other high powered
components, we use a switch.

However, what if we want to control these automatically?

Eg, in a Smart Home, when you reach home you want it to turn on automatically.
You will need a Microcontroller to do that...

</aside>

====

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/arduino-direct-bulb.png"
alt="Arduino switching a light bulb?"
caption="Arduino switching a light bulb?"
%}

<aside class="notes" markdown=1>

Instinctively, we may think of this: using a microcontroller's digital pin
(which you can program to output 1 or 0) to switch the bulb.

however...

</aside>

====

From [Arduino's Tutorial](https://www.arduino.cc/en/Tutorial/DigitalPins):

> "pins can source <span class="fragment highlight-red">(provide positive
> current)</span> or sink (provide negative current) up to
> <span class="fragment highlight-red">40 mA</span> (milliamps) of current to
> other devices/circuits. [...] attempting to run high current devices from
> them, can <span class="fragment highlight-red">damage or destroy</span> the
> output transistors in the pin, or damage the entire Atmega chip."

<aside class="notes" markdown=1>

The arduino only allows for 40mA MAX to be output from it's pins. I wonder how
much amps a lightbulb requires...

</aside>

====

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/phillips-LED-wattage.png"
alt="Phillips LED Bulb Wattage"
caption="[Phillips LED Bulb Wattage](https://www.lighting.philips.com.sg/consumer/led-lights/eco-friendly-led-light)"
%}

====

Assuming Arduino runs at 5v,

$$Watts=Voltage\times Amps$$

$$2.5W=5V\times Amps$$

$$Amps=0.5A>>>0.04A$$ 💥

====

{% include figure
image_path="/_resources/2020-05-25-Electronics1/assets/arduino-controlling-switch.png"
alt="What if the Arduino could control the switch?"
caption="What if the Arduino could control the switch?"
%}

<figcaption><small>disclaimer: this circuit doesn't actually work</small></figcaption>
