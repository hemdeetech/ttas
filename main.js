document.getElementById("homeButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById("home").scrollIntoView({ behavior: 'smooth' }); // Scroll to the home section
});

document.getElementById("registerButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById("register").scrollIntoView({ behavior: 'smooth' }); // Scroll to the home section
});


document.getElementById("contactButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' }); // Scroll to the home section
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.querySelector(".arrow");

  // Show scroll-to-top button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) { // Adjust this value as needed
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top function
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
