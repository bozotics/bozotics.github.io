<section markdown=1 data-transition="slide">

Probably no time to do interference separately, it's boring anyways and it only
really occurs for i2c so:

- i2c requires very very precise timing signals
- has some wonky pull up system since it is open drain (you pull it low but
  leave it open and don't drive it high)
- together with a bidirectional data wire, it is very very **prone to
  interference**.

<aside class="notes" markdown=1>

if have time explain why open drain

- very simple, just one NPN BJT (which is usually cheaper than PNP)
- if 2 or more slaves try to drive it, it won't harm each other
- can have separate supply voltages without complex data driving circuit
  - just need to share common ground

hence this is literally made for use with sensors

yet it causes a lot of grief power loss in resistors and hair loss trying to
select a pull up resistor

</aside>

====

tl;dr, if you need to use i2c (most probably will):

- keep wire lengths short
- maybe don't use the 400kHz fast mode (probably don't need it to be that fast
  in reality anyways)
- ensure wires **DON'T PASS BY MOTORS**
- and try to keep buses separate for critical sensors (like **BNO055!!!!!!!!!!
  VERY IMPORTANT!!!!!!**)

[very good Hackaday article about I2C over long wires](https://hackaday.com/2017/02/08/taking-the-leap-off-board-an-introduction-to-i2c-over-long-wires/)

====

wherever possible (mostly between µC) opt for UART as it's more stable and the
complex hardware implementation is done for us already.

SPI may be preferred but slave mode is not always well implemented in hardware,
and software emulation is not that good

But we cannot escape i2c, and it's not THAT bad anyways, mostly just BNO055's
implementation and wonky pull ups.

</section>
