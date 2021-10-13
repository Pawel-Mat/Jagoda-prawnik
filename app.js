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

// let windowWidth = window.innerWidth;
if (window.innerWidth >= 600) {

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


  gsap.from('.navigation', {scrollTrigger: {
    trigger: '#home'}, 
    // scale: 0, 
    opacity: 0,
    duration:1,
    // delay: 1,
    x: -100
  });
}
