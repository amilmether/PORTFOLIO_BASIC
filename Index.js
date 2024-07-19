document.addEventListener('DOMContentLoaded', function () {
    let multipleCardCarousel = document.querySelector("#carouselExampleControls");


    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false, // Disable automatic sliding
        wrap: false, // Prevent wrapping at the end
      });


      let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition = 0;


      document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });


      document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
  });
//  Experience
  document.addEventListener('DOMContentLoaded', function () {
    let multipleCardCarousel1 = document.querySelector("#carouselExampleControls1");


    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel1, {
        interval: false, // Disable automatic sliding
        wrap: false, // Prevent wrapping at the end
      });


      let carouselWidth1 = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth1 = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition1 = 0;


      document.querySelector("#carouselExampleControls1 .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition1 < carouselWidth1 - cardWidth1 * 4) {
          scrollPosition1 += cardWidth1;
          document.querySelector("#carouselExampleControls1 .carousel-inner").scroll({ left: scrollPosition1, behavior: 'smooth' });
        }
      });


      document.querySelector("#carouselExampleControls1 .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition1 > 0) {
          scrollPosition1 -= cardWidth1;
          document.querySelector("#carouselExampleControls1 .carousel-inner").scroll({ left: scrollPosition1, behavior: 'smooth' });
        }
      });
    } else {
      multipleCardCarousel1.classList.add("slide");
    }
  });
//Projects
document.addEventListener('DOMContentLoaded', function () {
  let multipleCardCarousel2 = document.querySelector("#carouselExampleControls2");


  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel2, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });


    let carouselWidth2 = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth2 = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition2 = 0;


    document.querySelector("#carouselExampleControls2 .carousel-control-next").addEventListener("click", function () {
      if (scrollPosition2 < carouselWidth2 - cardWidth2 * 4) {
        scrollPosition2 += cardWidth2;
        document.querySelector("#carouselExampleControls2 .carousel-inner").scroll({ left: scrollPosition2, behavior: 'smooth' });
      }
    });


    document.querySelector("#carouselExampleControls2 .carousel-control-prev").addEventListener("click", function () {
      if (scrollPosition2 > 0) {
        scrollPosition2 -= cardWidth2;
        document.querySelector("#carouselExampleControls2 .carousel-inner").scroll({ left: scrollPosition2, behavior: 'smooth' });
      }
    });
  } else {
    multipleCardCarousel2.classList.add("slide");
  }
});

// document.addEventListener('DOMContentLoaded', function () {
//   let multipleCardCarousel2 = document.querySelector("#carouselExampleControls2");

//   if (window.matchMedia("(min-width: 768px)").matches) {
//     let carousel = new bootstrap.Carousel(multipleCardCarousel2, {
//       interval: false, // Disable automatic sliding
//       wrap: false, // Prevent wrapping at the end
//     });

//     // Wait for layout to be properly calculated
//     setTimeout(() => {
//       let carouselInner = document.querySelector(".carousel-inner");
//       let carouselWidth2 = carouselInner.scrollWidth;
//       let cardWidth2 = document.querySelector(".carousel-item").offsetWidth;
//       let scrollPosition2 = 0;

//       document.querySelector("#carouselExampleControls2 .carousel-control-next").addEventListener("click", function () {
//         if (scrollPosition2 < carouselWidth2 - cardWidth2 * 4) { // Adjust the condition
//           scrollPosition2 += cardWidth2;
//           carouselInner.scroll({ left: scrollPosition2, behavior: 'smooth' });
//         }
//       });

//       document.querySelector("#carouselExampleControls2 .carousel-control-prev").addEventListener("click", function () {
//         if (scrollPosition2 > 0) { // Adjust the condition
//           scrollPosition2 -= cardWidth2;
//           carouselInner.scroll({ left: scrollPosition2, behavior: 'smooth' });
//         }
//       });
//     }, 100); // Delay to ensure layout calculations are accurate
//   } else {
//     multipleCardCarousel2.classList.add("slide");
//   }
// });

  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "in", // Set default country as India
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });