/*
  Title: My Experience in Poly and My Career Prospect
  Name: Soh Hong Yu
  Admin No: P2100775
  Class: DAAA/FT/1A/01
*/

"use strict"; // Use Strict Mode of JavaScript

function showMore() {
  document.getElementById("readMore").classList.remove("text-truncate"); // Remove Text-truncate class
  document.getElementById("readMoreButton").setAttribute("value", "Show Less"); // Change Text Display
  document
    .getElementById("readMoreButton")
    .setAttribute("onclick", "showLess()"); // Change function of button
}

function showLess() {
  document.getElementById("readMore").classList.add("text-truncate"); // Add Text-truncate class
  document.getElementById("readMoreButton").setAttribute("value", "Read More"); // Change Text Display
  document
    .getElementById("readMoreButton")
    .setAttribute("onclick", "showMore()"); // Change function of button
}
