// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-JS/sw.js", {
    scope: "/ICS2O-Unit6-04-JS/",
  })
}

window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  //input
  const radius = params.get("radius")
  console.log(radius)

  //process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions = "<ul>\n<li>radius = " + radius

  // output
  document.getElementById("dimensions").innerHTML = dimensions;
  document.getElementById("volume").innerHTML = "Volume is: " + volume.toFixed(2) + " mm²"
}
