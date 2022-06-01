// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

window.onload = function () {
  const params = new URLSearchParams(document.location.search);

  //input
  const radius = params.get("radius");
  console.log(radius);

  //process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const dimensions = "<ul>\n<li>a base = " + volume.toFixed(2);

  // output
  document.getElementById("dimensions").innerHTML = dimensions;
  document.getElementById("volume").innerHTML = "Volume is: " + volume + " mm²";
};
