### Brushed Motor

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/dc-motor.gif"
style='height:400px;'
alt="Brushed DC Motor GIF"
caption="[Brushed DC Motor GIF](https://commons.wikimedia.org/wiki/File:Electric_motor.gif)"
%}

<aside class="notes" markdown=1>

briefly explain motor action, current cause B-field, reversing current cause
reversing B-field

show on tinkercad

don't move on to next slide, show on chalkboard thinking behind full bridge, eg
we want to make current flow in the same direction at the horizontal part, from
alternate directions in the vertical part

</aside>

====

### Full Bridge Rectifier

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/fullbridge.gif"
alt="Full bridge rectifier GIF"
caption="[Full bridge rectifier GIF](https://commons.wikimedia.org/wiki/File:Diodebridge-eng.gif)"
%}

<aside class="notes" markdown=1>

show on chalkboard how to come up with a full bridge design, the thinking
process of how to convert AC to DC, then link to converting DC to AC

don't move on to next slide, show on chalkboard how to convert that idea into
full bridge, eg we want to make current flow in alternate directions at
horizontal part, so current must come in from left/right side to change it from
the vertical DC part

</aside>

====

### H-Bridge

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/h-bridge.svg"
alt="H-Bridge"
caption="[H-Bridge](https://commons.wikimedia.org/wiki/File:H_bridge.svg)"
%}

<aside class="notes" markdown=1>

this is basically the insides of your motor driver. But how to control the
speed...?

</aside>

====

### Motor Driver

{% include figure
image_path="/assets/resources-assets/2020-05-25-Electronics1/vnh5019-blockdiag.png"
style='height:400px;'
alt="Motor Driver Block Diagram"
caption="[Motor Driver Block Diagram](https://www.st.com/en/automotive-analog-and-power/vnh5019a-e.html)"
%}

<aside class="notes" markdown=1>

point out where the MOSFETs are, explain speed is controlled by PWM

emphasise that block diagrams aren't actually that important whenever they're
looking at datasheets, we use them here a lot just to explain how they are found
in the things we use

if have time go through the motor datasheet and key specs

</aside>
