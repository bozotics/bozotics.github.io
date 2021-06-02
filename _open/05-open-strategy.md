---
title: Strategy
permalink: /open/strat/
gallery1:
  - url: /assets/images/teensy-program-flowchart.png
    image_path: /assets/images/teensy-program-flowchart.png
    alt: "Teensy program flowchart"
    title: "Teensy program flowchart"
---

This section contains information related to movement and strategy for the robot i.e. the main tracking program that runs on the Teensy which receives input from the various sensors to come up with the correct robot trajectory.

Below is a simplified flowchart of the robot's overall logic:

{% include gallery id="gallery1" layout="single" caption="Teensy program flowchart" %}

The different subpages for this section are as follows:

- [Attack Strategy](/open/strat/attack/): Strategy for the striker robot
- [Defence Strategy](/open/strat/defence/): Strategy for the goalie robot
- [Localisation](/open/strat/localistion/): Algorithms used by the robot to determine its position and orientation on the field
- [Staying Within Bounds](/open/strat/staying/): Algorithms used for staying within the field lines
- [State Switching](/open/strat/state/): Dynamic switching of striker/goalie roles between robots
- [Simulation](/open/strat/simulation/): Our 2D simulation program, used for testing novel strategies
