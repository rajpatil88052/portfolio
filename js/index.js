// mobile toggle button 
// mobile toggle button 
// mobile toggle button 


const mobile_nav = document.querySelector(".toggle");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active")
};

mobile_nav.addEventListener("click", () => toggleNavbar());






 
// landing page js gsap 
// landing page js gsap 
// landing page js gsap 

const lading = gsap.timeline();

lading .from(".bg-color-header",{
  y: -60,
  opacity: 0,
  duration: 1,
  delay: 1,
})

.from(".section-one-one",{
  x:-80,
  opacity: 0,
  duration: 1,
})

.from(".section-one-two",{
  x: 60,
  
  opacity: 0,
  duration: 1,
  delay: "-1",
})



// scrolling page animation 
// scrolling page animation 
// scrolling page animation 


gsap.from(".photo-box",{
  x:-80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".photo-box",
    scroller: "body",
    start: "top 40%",
    // markers: true,
  }
})

gsap.from(".about-data",{
  x: 80,
  opacity: 0,
  duration: 1,
  // delay: "-1",
  scrollTrigger: {
    trigger: ".about-data",
    scroller: "body",
    start: "top 40%",
  
  }
})

gsap.from(".mySwiper",{
  x:-80,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".mySwiper",
    scroller: "body",
    start: "top 40%",
  
  }
})

gsap.from(".browse-button",{
  y:-80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".mySwiper",
    scroller: "body",
    start: "top 40%",
    // markers: true,
  }
})

gsap.from(".icons",{
  x:-80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".icons",
    scroller: "body",
    start: "top 40%",
  }
})

gsap.from(".contect-input",{
  x: 80,
  opacity: 0,
  duration: 1,
  // delay: "-1",
  scrollTrigger: {
    trigger: ".contect-input",
    scroller: "body",
    start: "top 40%",
  }
})








let mm = gsap.matchMedia();

mm.add("(max-width: 991px)", () => {

  gsap.from(".photo-box",{
    y:80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".photo-box",
      scroller: "body",
      start: "top 40%",
      // markers: true,
    }
  })
  
  gsap.from(".about-data",{
    y: 80,
    opacity: 0,
    duration: 1,
    // delay: "-1",
    scrollTrigger: {
      trigger: ".about-data",
      scroller: "body",
      start: "top 40%",
    
    }
  })
  
  gsap.from(".mySwiper",{
    y: 80,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".mySwiper",
      scroller: "body",
      start: "top 40%",
    
    }
  })
  
  gsap.from(".browse-button",{
    y:-80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".mySwiper",
      scroller: "body",
      start: "top 40%",
      // markers: true,
    }
  })
  
  gsap.from(".icons",{
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".icons",
      scroller: "body",
      start: "top 40%",
    }
  })
  
  gsap.from(".contect-input",{
    y: 80,
    opacity: 0,
    duration: 1,
    // delay: "-1",
    scrollTrigger: {
      trigger: ".contect-input",
      scroller: "body",
      start: "top 40%",
    }
  })
  return () => { 
  };
});

mm.revert();




// mousemove image momenta 
// mousemove image momenta 
// mousemove image momenta 


document.addEventListener('mousemove', mouseMoveFunc);
function mouseMoveFunc(e) {
  const depth = 10;
  const moveX = ((e.pageX)-(window.innerWidth/2))/depth;
  const moveY = ((e.pageY)-(window.innerHeight/2))/depth;
  gsap.to(".circle", {
    duration: 2,
    x: moveX,
    y: moveY,
    ease: "slow",
    stagger: 0.001,
    overwrite: true
  });
}





// SMOOTH SCROLING NAVBAR 
// SMOOTH SCROLING NAVBAR 
// SMOOTH SCROLING NAVBAR 

const heroSection = document.querySelector(".section-home");
const aboutSection = document.querySelector(".section-about");
const projectSection = document.querySelector(".section-project");
const contactSection = document.querySelector(".section-contact");

document.querySelector(".link-home").addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".link-about").addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".link-project").addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".link-contact").addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});









// PROJECT SWIPER 
// PROJECT SWIPER 
// PROJECT SWIPER 


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "coverflow",
  loop: true,
  autoplay: {
    delay: 2500,
    disebleOnInteraction: false,
  },
  // grabCursor: true,
  centeredSlides: true,

  coverflowEffect: {
    rotate: -30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  }
});