---
layout: single
title: Electronics
permalink: /open/elec/
sidebar:
  nav: "side-open"
toc: true
toc_sticky: true
toc_icon: "bolt"
toc_label: "Electronics"
---

# COMING SOON

- [ ] general **BRIEF** "history" about our electronics (mostly to showcase learning process)
	- [ ] old motor drivers
	- [ ] old sensors
	- [ ] old microcontroller configuration
		- [ ] looking at INPUT and using the Nucleo boards which made us realise that there's more than Arduino
	- [ ] old perfboards and first forays into PCB
		- [ ] asplosion (link to below boost circuit)
		- [ ] shift to SMD and challenges faced, what worked what didn't 
			- [ ] microscope
			- [ ] drag soldering
			- [ ] lead free lmao
		- [ ] KC's drone and testing with ATMEGA328P
		- [ ] link to bottom pcb design (failures)
- [ ] parts selection
	- [ ] motor driver
	- [ ] ESC
		- [ ] controlling that doomboo + level shifting
	- [ ] sensors + why we do / don't put them in breakout boards
		- [ ] IMU
			- [ ] the shortage
			- [ ] CMPS11 woes
			- [ ] BNO055 salvation, but i2c problems
			- [ ] FXOS8700+FXAS21002 resulting solution / dedicated BNO055 controller
		- [ ] Mouse
		- [ ] Bluetooth
		- [ ] TOF
		- [ ] neopixel ring
		- [ ] light sensor
		- [ ] camera+raspi
			- [ ] vs other SBC (jetson nano, tinkerboard, odroid)
			- [ ] vs compute module
			- [ ] vs raspi 4
			- [ ] SD card woes + backup problems
			- [ ] initial confusions, python opencv era of reinstalling 100000 times
			- [ ] OS considered
				- [ ] raspbian (lite)
				- [ ] dietpi
				- [ ] arch
				- [ ] buildroot and why we haven't done that yet
				- [ ] bare metal and why we also didn't do that (yet???)
			- [ ] link to camera section (include other cameras considered from arducam + issues with V2)
		- [ ] things we tried and failed
			- [ ] adj POT
			- [ ] encoder for wheels
	- [ ] power
		- [ ] buck
			- [ ] failed LM2596 (was the most popular so we tried first)
			- [ ] how we chose which to try
			- [ ] failed TPS54330
				- [ ] originally wanted because low current performance
			- [ ] why we went with TPS5430 (simple and worked)
		- [ ] boost
			- [ ] asplosion (don't say here, link to above history)
			- [ ] misconceptions with how to increase solenoid power
				- [ ] kept looking for increased voltage / cont. current
				- [ ] realised capacitors were a thing and really understood what it did from the ben 600v boost
			- [ ] big fat boost converters of the past
			- [ ] why we went with lm2587 in the end
				- [ ] MAX1522 failure
				- [ ] considered MC34063
				- [ ] other topologies
					- [ ] flyback and the point where every tutorial showed a flyback
					- [ ] charge pump
				- [ ] working china breakout board
			- [ ] how we switched it
				- [ ] single mosfet and smoke, then realised power dissipation was a thing for inductive
				- [ ] relays for higher A rating but arcing confusion
					- [ ] led to questions about our main switch AC ratings
				- [ ] single mosfet and no smoke but rlly hot cuz Rds not low enough at 3v3
				- [ ] finally double mosfet as a weird "multiplier"
				- [ ] zener + rectifier as power dissipation
	- [ ] microcontroller
		- [ ] main controller (teensy vs others, problems with teensy)
		- [ ] "sub" controller (acting as sensors)
			- [ ] why we chose STM32
				- [ ] link to above 328p history, why we eventually didn't use that even tho it worked
				- [ ] which others did we consider (freescale since teensy, SAMD since arduino)
				- [ ] why did we eventually choose STM32 
					- [ ] bought maple mini and it worked
					- [ ] schematic seemed simple at time when we didnt know anything
					- [ ] cheap as heck cuz china
			- [ ] programmers
				- [ ] initial confusion over what things are
					- [ ] SPI programming
					- [ ] ST-link vs J-link vs BMP vs Nucleo
				- [ ] current setup of programmer + UART debug link
				- [ ] future using SWO / J-Link RTT
			- [ ] why we chose UART
	- [ ] ports (xt30, xt60, sh-1.0)
		- [ ] jumper wire confusion and wrong direction
		- [ ] 6p6c lmao
- [ ] PCB design (failures)
	- [ ] too thin power traces in first PCB
	- [ ] 4 layer lmao
	- [ ] ground pour but didn't realise that it was only connected at one point
	- [ ] crosstalk but how we can't prevent it well
	- [ ] design "considerations"
		- [ ] positioning of things close to each other
		- [ ] actually reading datasheets for suggested land pattern
		- [ ] trace width / polygon for power and high speed signals
		- [ ] link to AFI (include below in AFI)
			- [ ] high V right next to 3V3 bad
			- [ ] signals running parallel bad but difficult to prevent, may really need more layers
			- [ ] power lines should still be thicker, still abit sketchy
			- [ ] lmao multiplexer power with normal V not analog V
			- [ ] maybe more PCBs stacked in a 3d way as 18cm comes, else don't know how to fit everything
	

<!-- Including pagination manually since these are pages so page layout MUST be changed under navigation.yml -->
<nav class="pagination">
{% assign arrsize = site.data.navigation.side-open|size |minus:1 %}
{% for i in (0..arrsize) %}
	{% if site.data.navigation.side-open[i].url == page.url %}
		{% assign down = i|minus:1 %}
		{% assign up = i|plus:1 %}
		<a href="{% if i == 0 %}#{% elsif site.data.navigation.side-open[down].children %}{% assign arrsize2 = site.data.navigation.side-open[down].children|size |minus:1 %}{{ site.data.navigation.side-open[down].children[arrsize2].url }}{% else %}{{ site.data.navigation.side-open[down].url }}{% endif %}" class="pagination--pager {% if i == 0 %}disabled{% endif %}" title="{% unless i == 0 %}{% if site.data.navigation.side-open[down].children %}{{site.data.navigation.side-open[down].children[arrsize2].title}}{% else %}{{site.data.navigation.side-open[down].title}}{% endif %}{% endunless %}">Previous</a>
		<a href="{% if i >= arrsize %}#{% elsif site.data.navigation.side-open[i].children %}{{ site.data.navigation.side-open[i].children[0].url }}{% elsif site.data.navigation.side-open[up].url %}{{ site.data.navigation.side-open[up].url }}{% else %}{{ site.data.navigation.side-open[up].children[0].url }}{% endif %}" class="pagination--pager {% if i >= arrsize %}disabled{% endif %}" title="{% unless i >= arrsize %}{% if site.data.navigation.side-open[i].children %}{{ site.data.navigation.side-open[i].children[0].title }}{% elsif site.data.navigation.side-open[up].url %}{{ site.data.navigation.side-open[up].title }}{% else %}{{ site.data.navigation.side-open[up].children[0].title }}{% endif %}{% endunless %}">Next</a>
	{% elsif site.data.navigation.side-open[i].children %}
		{% assign arrsize2 = site.data.navigation.side-open[i].children|size |minus:1 %}
		{% for j in (0..arrsize2) %}
			{% if site.data.navigation.side-open[i].children[j].url == page.url %}
				<a href="{% if j == 0 %}{{site.data.navigation.side-open[i].url}}{% else %}{% assign down = j|minus:1 %}{{ site.data.navigation.side-open[i].children[down].url }}{% endif %}" class="pagination--pager" title="{{site.data.navigation.side-open[down].title}}">Previous</a>
				<a href="{% if j >= arrsize2 %}{% assign up = i|plus:1 %}{{site.data.navigation.side-open[up].url}}{% else %}{% assign up = j|plus:1 %}{{ site.data.navigation.side-open[i].children[up].url }}{% endif %}" class="pagination--pager" title="{% if j >= arrsize2 %}{{site.data.navigation.side-open[up].title}}{% else %}{{ site.data.navigation.side-open[i].children[up].title }}{% endif %}">Next</a>
			{% endif %}
		{% endfor %}
	{% endif %}
{% endfor %}  
</nav>

<style>
	ul.visible-links li.masthead__menu-item a[href="/open/intro/"]:before {
		transform: scaleX(1);
	}
	ul.hidden-links li.masthead__menu-item a[href="/open/intro/"] {
		color: #fff;
		background: #0092ca;
	}
</style>