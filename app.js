/// Hamburger menu ///

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav-links');
const navigationLinks = document.querySelectorAll('.nav-links li');
hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.toggle('hamburger-active');
  navigation.classList.toggle('nav-links-mobile-active');
});

navigationLinks.forEach((link) => {
  
  link.addEventListener('click', () => {
    hamburger.classList.remove('hamburger-active');
    navigation.classList.remove('nav-links-mobile-active');
  });
})

/// GSAP Animations ///

gsap.registerPlugin(ScrollTrigger)

if (window.innerWidth >= 600) {
  
  
  
  gsap.from('.navigation', {scrollTrigger: {
    trigger: '#home'}, 
    opacity: 0,
    duration:1,
    x: -100
  });
  gsap.from('.image', {scrollTrigger: {
    trigger: '#about',
    toggleActions: "play reverse play reverse"}, 
    opacity: 0,
    delay: 1,
    duration:3,
  });
  gsap.from('.about', {scrollTrigger: {
    trigger: '#about',
    toggleActions: "play reverse play reverse"}, 
    opacity: 0,
    delay: 1,
    duration:1,
    x: 1000
  });
  
  
  
  
  
  const tlContact = gsap.timeline({scrollTrigger: {
    trigger: "#contact", 
    start: "top 50%",
    end: "bottom -20%",
    toggleActions: "play reverse play reverse",
    }});
  
    tlContact.from('.name-wrapper', {
      x:-1000,
      duration: 0.3
    });
    tlContact.from('.email-wrapper', {
      x:-1000,
      duration: 0.3
    });
    tlContact.from('.phone-wrapper', {
      x:-1000
    });
    tlContact.from('.message-wrapper', {
      x:-1000,
      duration: 0.3
    });
    tlContact.fromTo('.contact-form span', {
      opacity: 0, y: 50}, {opacity: 1, y: 0}    
      );
      gsap.from('.section-contact', {scrollTrigger: {
        trigger: '#contact',
        toggleActions: "play reverse play reverse"}, 
        opacity: 0,
        delay: 0.5,
        duration:1,
        x: 1000
      });
};
gsap.from('.services-title', {scrollTrigger: {
  trigger: '#services',
  toggleActions: "play reverse play reverse"}, 
  opacity: 0,
  delay: 0.5,
  duration:1,
  scale: 0
});
gsap.from('.about-title', {scrollTrigger: {
  trigger: '#about',
  toggleActions: "play reverse play reverse"}, 
  opacity: 0,
  delay: 0.5,
  duration:1,
  scale: 0
});
gsap.from('.contact-title', {scrollTrigger: {
  trigger: '#contact',
  toggleActions: "play reverse play reverse"}, 
  opacity: 0,
  delay: 0.5,
  duration:1,
  scale: 0
});
gsap.from('.temida', {scrollTrigger: {
  trigger: '#home',
  start: "top 10%",
  toggleActions: "play reverse play reverse"}, 
  scale: 0, 
  opacity: 0,
  duration: 5,
  y: 200,
  x: 200
});

const tlServices = gsap.timeline({scrollTrigger: {
  trigger: ".services", 
  start: "top 50%",
  end: "bottom -20%",
  toggleActions: "play reverse play reverse",
  duration: 1}});

  tlServices.from('.service-wrapper h2', {
    y:100, 
    duration: 1,
    opacity: 0,
    stagger: 0.18
  });
  tlServices.from('.service-pic', {
    x:-1000, 
    duration: 1,
    opacity: 0,
    stagger: 0.25,
    rotate: 720
  }, "-=2.2");






