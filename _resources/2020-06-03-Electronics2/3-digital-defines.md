## Terminology

====

### Digital bytes

From [Wikipedia](https://en.wikipedia.org/wiki/Byte):

> The byte is a unit of digital information. It is the smallest
> <span class="fragment highlight-red">addressable</span> unit of memory in many
> computer architectures.

<aside class="notes" markdown=1>

Why is this important? It is the one you'll be dealing with most often: a string
is an array of chars, a char is a (unsigned) byte. An integer is (default) 2
bytes. During communication, this is the thing that is being sent.

But what is a byte???

</aside>

====

### ... and bits (binary digit)

From [Wikipedia](https://en.wikipedia.org/wiki/Byte):

> A bit is the smallest unit of storage. The modern de facto standard of eight
> bits in a byte permits <span class="fragment highlight-red">binary</span>
> values 0 through 2<sup>8</sup>=255 for one byte. Modern architectures
> typically use 32- or 64-bit words, built of four or eight bytes.

<aside class="notes" markdown=1>

[good reference](https://web.stanford.edu/class/cs101/bits-bytes.html)

Most of the time, don't have to care about bits: even if your integer doesn't
need to be in bytes, eg if you only need values within 7 bits, you just store it
as bytes anyways because architectures are optimised to work with 8 bits.

Maybe talk about bit shifting?

</aside>

====

### What is a "digital" signal?

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/digital-communication.gif'
alt='Digital Communication'
caption='Digital Communication'
link='https://commons.wikimedia.org/wiki/File:Parallel_and_Serial_Transmission.gif'
%}

<aside class="notes" markdown=1>

explain serial vs parallel, why everyone uses serial  
maybe how serial can be better even though intuitively parallel is better: no
clock skew

LSB and MSB, talk about endian, parity bits in serial

</aside>

====

### Duplex

once again from
[Wikipedia](<https://en.wikipedia.org/wiki/Duplex_(telecommunications)>):

> A duplex communication system is a point-to-point system composed of
> <span class="fragment highlight-red">two or more</span> connected parties or
> devices that can communicate with one another in
> <span class="fragment highlight-red">both directions</span>.

====

### Half- and full-duplex

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/half-duplex.jpg'
alt='Half Duplex Communication'
caption='Half Duplex Communication'
link='https://commons.wikimedia.org/wiki/File:HalfDuplex.JPG'
%}

<aside class="notes" markdown=1>

it's still "duplex" since the switching between directions happens basically
instantaneously

</aside>

====

### Asynchronous

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/async.png'
alt='Asynchronous Signal Diagram'
caption='Asynchronous Signal Diagram'
link='https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all#whats-wrong-with-serial-ports'
%}

<aside class="notes" markdown=1>

Closest to humans communication, most intuitive (start bit is the "oi")

But it needs to send a "sync" bit every byte, means it wastes 1 bit in every 9
bits, speed will drop by 1/9. Both sides must also agree to a baud rate
beforehand, difficult for "master slave" devices where you have no control over
the slave (usually a sensor)

also, asynchronous comms is complex:  
since we cannot predict when the "slave" sends info (there's no master/slave
relationship here) and when the uC is doing something else or when it is
transmitting it cannot "listen" to the receive (like in human convo: when 2
people talk over each other, cannot hear each other).  
Therefore you cannot have more than 1 "slave" on the line, since there is no
slave.  
UARTs are therefore usually separate from software: something in hardware which
writes to a buffer until the uC is ready to access it. Therefore, in a uC UARTs
are limited because you can't just add it effectively into software, it's a
piece of hardware inside the chip.

explain this after the next slide:

bad: Multiplexing is difficult in asynchronous because you cannot "miss" any
data, and you cannot predict when the data starts.

good thing about this is: only 1 wire needed, no wasted energy, doesn't suffer
from that much EMI issues, send data only when you need.

</aside>

====

### Clock & Multiplexing

Basically a metronome for digital **synchronous** circuits.

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/clock.png'
alt='Synchronous Clock Diagram'
caption='Synchronous Clock Diagram'
link='https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all#a-synchronous-solution'
%}

<aside class="notes" markdown=1>

When you are sending data at high speeds, cannot afford to waste 1 bit every
byte. Both sides also don't need to agree to a baud rate beforehand. Also can
multiplex easily

explain how multiplexing works: since you can predict when the next signals will
come in, you can "split" the clock and change signals to listen to before the
next bit

talk about issues with clocks: rapidly changing signals, causes a lot of EMI,
difficult to drive, according to
[Wikipedia](https://en.wikipedia.org/wiki/Clock_signal#Distribution) it accounts
for 30% of the total power used by the entire chip, but explain that it's used
within the chip to communicate between different parts of the chip to increase
bandwidth

Will (hopefully) talk about this more in next presentation on uC

</aside>

====

<!-- markdownlint-disable line-length -->

<section markdown=1 data-transition="slide">

|              | implementation      | data rate      | configuration    |
| ------------ | ------------------- | -------------- | ---------------- |
| synchronous  | simpler             | faster         | easier           |
| -            | -                   | -              | -                |
|              | RX is controlled    | no start bit   | set 1 baud rate  |
| asynchronous | complex             | slower         | tougher          |
| -            | -                   | -              | -                |
|              | RX is unpredictable | need start bit | set 2 baud rates |

====

|              | multiplexing        | <span class="fragment highlight-red">interference</span> | power use       |
| ------------ | ------------------- | -------------------------------------------------------- | --------------- |
| synchronous  | easier              | bad                                                      | more            |
| -            | -                   | -                                                        | -               |
|              | RX is controlled    | clock signal can be antenna                              | clock always on |
| asynchronous | insane              | better                                                   | less            |
| -            | -                   | -                                                        | -               |
|              | RX is unpredictable | data only live when needed, no clock                     | no clock        |

</section>

<!-- markdownlint-enable line-length -->

====

### Differential Signals

{% include figure
image_path='/assets/resources-assets/2020-06-03-Electronics2/differential.jpg'
alt='Differential Signal Diagram'
caption='Differential Signal Diagram'
link='https://commons.wikimedia.org/wiki/File:Ssiblockdiagram.jpg'
%}

<aside class="notes" markdown=1>

solves many EMI issues as will be explained later. but requires 2 wires.

</aside>

====

### Cyclic Redundancy Check (CRC)

Basically sum of the data and divide it

<small>eg, if the data is 10001100, parity bit is 1:</small>  
$$1R$$<span style="color:red">$$1$$</span>  
$$2\overline{\smash{)}1+0+0+0+1+1+0+0}$$

====

<style>.sizedGallery { height: 200px; }</style>

### Network topologies

{% include gallery
id='gallery-network'
caption='Different network topologies'
class='sizedGallery'
%}
