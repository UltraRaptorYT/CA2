/*
  Title: My Experience in Poly and My Career Prospect
  Name: Soh Hong Yu
  Admin No: P2100775
  Class: DAAA/FT/1A/01
*/

// Checks whether the form needs validation

(function () {
  "use strict"; // Use Strict Mode of JavaScript
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Scroll to Start of Form
function submitForm() {
  document.getElementById("Scroll").scrollIntoView();
}
