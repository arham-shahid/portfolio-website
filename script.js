document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "") {
        alert("Please enter your name.");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email address containing '@'.");
        return;
      }

      if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
      }

      alert("Thanks! Your response has been recorded.");
      form.reset();
    });
  }

  const progressBars = document.querySelectorAll(".progress");
  if (progressBars.length > 0) {
    progressBars.forEach((bar, index) => {
      const width = bar.style.width || bar.getAttribute("data-width") || "0%";
      bar.setAttribute("data-width", width);
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 100 + (index * 200)); // Stagger the animations
    });
  }
});
