/*
  Title: My Experience in Poly and My Career Prospect
  Name: Soh Hong Yu
  Admin No: P2100775
  Class: DAAA/FT/1A/01
*/

"use strict"; // Use Strict Mode of JavaScript

// OnLoad Invoke JSMediaQuery
function JSMediaQuery() {
  var w = window.innerWidth; // Checks client window size
  var timeline = document.getElementById("timeline"); // Get timeline element
  var timelineContainer = document.getElementsByClassName("timelineContainer"); // Get timelineContainer Array
  // If screen size is small
  if (w < 768) {
    // Change the timeline class
    timeline.setAttribute(
      "class",
      "container position-relative timeline-sm my-5"
    );
    // Change the timelineContainer styles and affect all timelineContainer as it is an Array
    for (var i = 0; i < timelineContainer.length; i++) {
      timelineContainer[i].style.width = "87%";
      timelineContainer[i].style.left = "16.5%";
      timelineContainer[i].classList.add("arrow"); // Adds arrow class
    }
  } else {
    // Change the timeline class
    timeline.setAttribute(
      "class",
      "container position-relative timeline-md my-5"
    );
    // Change the timelineContainer styles and affect all timelineContainer as it is an Array
    for (var i = 0; i < timelineContainer.length; i++) {
      timelineContainer[i].style.width = "50%";
      timelineContainer[i].classList.remove("arrow"); // Removes arrow class
    }
  }
}
