---
title: "Power supply tripping breaker?"
categories:
  - Electronics

# layout: splash
author_profile: false

# excerpt: "This post should [...]"
header:
  overlay_image: /assets/images/lab-supply-tripping-breaker%3F/front-view.png
  overlay_filter: rgba(0, 0, 0, 0.7)
  # caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
#   actions:
#     - label: "More Info"
#       url: "https://unsplash.com"
---
That feeling you buy your first real lab power supply. good stuff!
But the moment you switch it on your breaker trips...
So, what do you do?
You mod the thing!


But sadly the supply had a few problems; the breaker kept tripping when switched on
and the fan was broken.

I deceided to make a softstarter using a [electrical ballast](https://en.wikipedia.org/wiki/Electrical_ballast), a relay and a 555 Timer.  
and to replace the fan with a regular pc fan.


the supply on [radiomuseum](https://www.radiomuseum.org/r/philips_regulated_dc_power_suppl.html#)



## Breaker Problem
<!-- ### The cause -->
:sparkles: *inrush current* :sparkles:    
This is a beefy power supply which means it can handle large fluctuations in output current.  
It accomplishes that by having big capacitors on the output rail.  
These capacitors are also the reason for the large inrush current causing the breaker to trip.


### Softstarter 
We can fix that with using a softstarter.  
A softstarter is a device that is used to temporarily reduce the voltage or current input to a circuit.  
That is also what we are gonna use to solve the breaker issue.  
This is a delay circuit I found over on [learningaboutelectronics](http://www.learningaboutelectronics.com/Articles/555-timer-delay-before-turn-on-circuit.php).  
Combine that with a relay switching an electrical ballast, and you've got a softstarter.


![img](http://www.learningaboutelectronics.com/images/555-timer-delay-before-turn-on-circuit.png)


I build this 555 circuit on a piece of perfboard, connected to a relay board.  
Using a the internals from a 5v usb charger for power.  
It is all mounted on a strip of softboard, that is bolted to the chassis of the power supply.


![img](/assets/images/lab-supply-tripping-breaker%3F/board-installed.jpg)

The relay is connected in paralell with the ballast.
So when the power supply turns on, it will be powered through the ballast limiting the :sparkles: *inrush current* :sparkles:.  
And after 5 seconds the timer will switch the relay on, bypassing the ballast continuing normal operation.






## Fan replacement 
The original fan is mounted on a bracket which is connected to the chassis of the supply.  
So the solution was simple; zip-tie a modern 12v pc fan to the original bracket and connect it to a boost converter to get the desired voltage.  
Now there were some clearance issues regarding the new fan.  
So in order to fix that I used a rotary tool to cut away the curved edges until it fitted.

![img](/assets/images/lab-supply-tripping-breaker%3F/fan-assembly.png)

The fan assembly was done, so now it was time to put it back together.

I connected the input of the boost converter to the output of the 5v board, and the mounting bracket with the new fan back onto the chassis.

the installed fan looked like this

![img](/assets/images/lab-supply-tripping-breaker%3F/fan-installed.jpg)



credits: [http://www.learningaboutelectronics.com/Articles/555-timer-delay-before-turn-on-circuit.php](http://www.learningaboutelectronics.com/Articles/555-timer-delay-before-turn-on-circuit.php)