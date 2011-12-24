"Fast" JavaScript Click Event
=============================

When working on a web app for touch devices (iPhone / iPad), you will soon notice that click events are rather slow to fire. There is a delay due to the fact that the device waits for the user to complete a gesture before deciding that the intended gesture was in fact a click.

I wrote a simple script that detects whether the device is touched without moving. When tapped without move, it fires a custom event named "fast click". This alternative event fires much faster then an ordinary click event.

A normal click event takes approximately 450 milliseconds to fire, in contrast the "fastclick" event takes approximately only 60 milliseconds to fire.

Demo
----
* http://sandbox.juurlink.org/fastclick/ (Open in mobile browser)

Blog
----
* http://www.juurlink.org/2011/12/fast-javascript-click-event-for-touch-devices/

Compatibility
-------------
Tested in Safari desktop and mobile browser only.
