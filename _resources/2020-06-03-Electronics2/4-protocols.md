## Protocols

====

<section markdown=1 data-transition="slide">

### UART

- Asynchronous
- Full-duplex
- Preferred choice

**TX 🡒 RX**{: style="color: darkmagenta"}  
**RX 🡐 TX**{: style="color: darkmagenta"}

==data-transition="slide"==

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/async.png'
alt='UART Connection Diagram'
caption='UART Connection Diagram'
link='https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all#whats-wrong-with-serial-ports'
%}

</section>

====

<section markdown=1 data-transition="slide">

### I<sup>2</sup>C

- Synchronous
- Half-duplex
- Prone to interference:  
  do not use over long wires
- Made to use with "sensors"  
  Most sensors use this

**SDA ⟺ SDA**{: style="color: darkmagenta"}  
**SCL 🡒 SCL**{: style="color: darkmagenta"}

<aside class="notes" markdown=1>

explain that i2c was made to use with sensors, due to open drain and multiple
slaves and master-slave relationship therefore sensors mainly use this

</aside>

==data-transition="slide"==

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/clock.png'
alt='I<sup>2</sup>C Connection Diagram'
caption='I<sup>2</sup>C Connection Diagram'
link='https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all#a-synchronous-solution'
%}

</section>

====

<section markdown=1 data-transition="slide">

### SPI

- Synchronous
- Pseudo Full-duplex
- Fastest, but "Bulkiest": 4 lines
- Easy in hardware, complex in code
- Used mostly in display drivers

**MOSI 🡒 MOSI**{: style="color: darkmagenta"}  
**MISO 🡐 MISO**{: style="color: darkmagenta"}  
**SCK 🡒 SCK**{: style="color: darkmagenta"}  
**SS 🡒 SS**{: style="color: darkmagenta"}

<aside class="notes" markdown=1>

Explain the pseudo full duplex: both can transmit data simultaneously, but the
master must request the data first.  
While receiving data (into a buffer) master can transmit the next "line" of data

Explain why easy in hardware: simple shift register, since it's a serial + clock
and unidirectional. (vs i2c which is bidirectional, and uart which is async).
Hence this is used in display drivers and sensors/drivers where large amount of
data is transferred

Explain why complex in code: SPI slave mode: master expects slave to respond to
the slave select immediately, hardware peripherals don't support it (eg RasPi)
so have to do it via bit-banging

</aside>

==data-transition="slide"==

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/spi.png'
alt='SPI Connection Diagram'
caption='SPI Connection Diagram'
link='https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all#slave-select-ss'
%}

</section>

====

<section markdown=1 data-transition="slide">

### Miscellaneous

We don't really need to know the next few for cup, they are mostly used for
other industrial purposes

These are all **differential** protocols. They usually don't exist for normal
microcontrollers since it's difficult to implement

==data-transition="slide"==

### USB (2.0)

- (A)synchronous
- Half-duplex (up till USB3)
- Differential
- Industry standard
- Very fast but complex
  - Requires accurate clock

**D+ ⟺ D+**{: style="color: darkmagenta"}  
**D- ⟺ D-**{: style="color: darkmagenta"}

<aside class="notes" markdown=1>

Implementation is complex, that's why it is not used in uC where flash space,
computing power is limited. However it is fast and UNIVERSAL, that's why it's
used everywhere else

</aside>

==data-transition="slide"==

### CAN, RS485 / LVDS

- "all the others"
- Differential
- CAN is used in cars
- The others have industrial applications
  - RS485 does not define a protocol

<aside class="notes" markdown=1>

recommend looking at CAN since transceivers are easily available, and it has a
robust, well defined and error free protocol (which is bulky but good enough).
Alternatively RS485 transceivers are also very cheap and popular, but the
protocol implementation is ??

but this is nowhere near top priority and UART works very well

</aside>

</section>
