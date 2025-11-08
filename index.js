document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission success
  document.querySelector(".thankyou-message").style.display = "block";

  // Clear form
  e.target.reset();

  // Hide message after 4 seconds
  setTimeout(() => {
    document.querySelector(".thankyou-message").style.display = "none";
  }, 4000);
});
