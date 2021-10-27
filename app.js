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
};

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
  trigger: ".layout .services", 
  start: "top 50%",
  end: "bottom -20%",
  markers: true,
  // toggleActions: "play none none reverse",
  duration: 1}});

  tlServices.from('.service-wrapper h2', {
    y:100, 
    duration: 1,
    opacity: 0,
    stagger: 0.18,
  });
  tlServices.from('.service-pic', {
    x:-1000, 
    duration: 1,
    opacity: 0,
    stagger: 0.25,
    rotate: 720
  }, "-=2.2");



