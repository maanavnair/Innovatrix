<!DOCTYPE html>
<html>
<head>
  <title>EdTech Platform - Learn Anytime, Anywhere</title>
  <style>
    /* Add your CSS styles here */
  </style>
</head>
<body>
  <!-- Add your HTML content here -->

  <script>
    // JavaScript code goes here

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of anchorLinks) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }

    // Testimonials Carousel
    const testimonialsContainer = document.querySelector('.testimonials');
    const testimonialItems = testimonialsContainer.querySelectorAll('.testimonial-item');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
      testimonialItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    function nextTestimonial() {
      currentTestimonialIndex++;
      if (currentTestimonialIndex >= testimonialItems.length) {
        currentTestimonialIndex = 0;
      }
      showTestimonial(currentTestimonialIndex);
    }

    function previousTestimonial() {
      currentTestimonialIndex--;
      if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonialItems.length - 1;
      }
      showTestimonial(currentTestimonialIndex);
    }

    // Event listeners for next and previous buttons
    const nextButton = testimonialsContainer.querySelector('.next-button');
    const prevButton = testimonialsContainer.querySelector('.prev-button');
    nextButton.addEventListener('click', nextTestimonial);
    prevButton.addEventListener('click', previousTestimonial);
  </script>
</body>
</html>
