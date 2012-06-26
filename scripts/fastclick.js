"use strict";

var clickarea = document.getElementById('clickarea');
var clickresultfast = document.getElementById('clickresultfast');
var clickresultslow = document.getElementById('clickresultslow');

// Register 'fast' click listener.
clickarea.addEventListener('fastclick', function (e) {
    if (e.detail == clickarea) {
        var currentTime = new Date().getMilliseconds();
        clickresultfast.innerText = 'Fast Click: ' + (currentTime - touchStartTime) + 'ms';
    }

}, false);

// Register 'normal' click listener.
clickarea.addEventListener('click', function (e) {
    if (e.target == clickarea) {
        var currentTime = new Date().getMilliseconds();
        clickresultslow.innerText = 'Normal Click: ' + (currentTime - touchStartTime) + 'ms';
    }

}, false);


// Record time it takes to detect 'click'.
var touchStartTime = false;
document.addEventListener('touchstart', function(){
    touchStartTime = new Date().getMilliseconds();
}, false);


(function () {

    // Create custom "Fast click" event.
    var touchClick = false;
    document.addEventListener("touchstart", function () {
        touchClick = true
    }, false);
    document.addEventListener("touchmove", function () {
        touchClick = false
    }, false);
    document.addEventListener("touchend", function (e) {

        if (touchClick) {
            touchClick = false;

            // Send fast click.
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("fastclick", true, true, e.target);

            e.target.dispatchEvent(event);
        }
    }, false);

}());
