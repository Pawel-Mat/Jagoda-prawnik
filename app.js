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
      opacity: 0}, {opacity: 1}    
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


  ///// Language data //////
  const language = {
    english: {
      linkHome: "Home",
      linkServices: "Services",
      linkAbout: "About",
      linkContact: "Contact",
      services: "Services&nbsp&nbsp&nbsp&nbsp&nbsp",
      about: "About&nbsp&nbsp&nbsp&nbsp&nbsp",
      contact: "Contact&nbsp&nbsp&nbsp&nbsp&nbsp",
      subtitle: "Legal adviser",
      motto: '"Ignorance of the law harms"',
      servicesTitle: "Services",
      serviceOne: "Legal proceedings for payment",
      serviceTwo: "Compensation",
      serviceThree: "Economic affairs",
      serviceFour: "Negotiations",
      serviceFive: "Copyright protection",
      serviceSix: "Family matters",
      aboutTitle: "About",
      aboutDesc: "I completed my legal adviser's training conducted by the District Chamber of Legal Advisers in Warsaw. I have experience in civil cases, in particular in cases for payment under various titles, but I am willing to help you in any matter. I like challenges, and working as a lawyer is such a constant one. Trust and flexibility, as well as an individual approach to each situation and the client are the basis of my work.",
      contactTitle: "Contact",
      contactName: "Name",
      contactPhone: "Phone",
      contactMessage: "Message",
      btnSend: "Send",
      contactPhoneNumber: "Phone: +48 509 799 673",
      languageChange: "EN"
    },
    polish: {
      linkHome: "Strona główna",
      linkServices: "Usługi",
      linkAbout: "O mnie",
      linkContact: "Kontakt",
      services: "Usługi&nbsp&nbsp&nbsp&nbsp&nbsp",
      about: "O mnie&nbsp&nbsp&nbsp&nbsp&nbsp",
      contact: "Kontakt&nbsp&nbsp&nbsp&nbsp&nbsp",
      subtitle: "Radca Prawny",
      motto: '"Nieznajomość prawa szkodzi"',
      servicesTitle: "Usługi",
      serviceOne: "Postępowania sądowe o zapłatę",
      serviceTwo: "Odszkodowania",
      serviceThree: "Sprawy gospodarcze",
      serviceFour: "Negocjacje",
      serviceFive: "Ochrona praw autorskich",
      serviceSix: "Sprawy rodzinne",
      aboutTitle: "O mnie",
      aboutDesc: "Ukończyłam aplikację radcowską prowadzoną przez Okręgową Izbę Radców Prawnych w Warszawie. Posiadam doświadczenie w prowadzeniu spraw cywilnych, w szczególności w sprawach o zapłatę z różnych tytułów, natomiast chętnie podejmę się pomocy Państwu w każdej sprawie. Lubię wyzwania, a praca prawnika jest takowym nieustannie. Zaufanie i elastyczność, a także indywidualne podejście do każdej sytuacji oraz Klienta są podstawą mojego działania.",
      contactTitle: "Kontakt",
      contactName: "Imię",
      contactPhone: "Telefon",
      contactMessage: "Wiadomość",
      btnSend: "Wyślij",
      contactPhoneNumber: "Telefon: +48 509 799 673",
      languageChange: "PL"
    },
  }

  ////////Language change/////////

  const langEl = document.querySelector('.lang-wrapper');
  const langLink = document.querySelectorAll('.lang-wrapper a');
  const linkHome = document.querySelector('.link-home span');
  const linkServices = document.querySelector('.link-services span');
  const linkAbout = document.querySelector('.link-about span');
  const linkContact = document.querySelector('.link-contact span');
  const subtitle = document.querySelector('.subtitle');
  const motto = document.querySelector('.motto');
  const servicesTitle = document.querySelector('.services-title');
  const serviceOne = document.querySelector('.service-one');
  const serviceTwo = document.querySelector('.service-two');
  const serviceThree = document.querySelector('.service-three');
  const serviceFour = document.querySelector('.service-four');
  const serviceFive = document.querySelector('.service-five');
  const serviceSix = document.querySelector('.service-six');
  const aboutTitle = document.querySelector('.about-title');
  const aboutDesc = document.querySelector('.about');
  const contactTitle = document.querySelector('.contact-title');
  const contactName = document.querySelector('.contact-name');
  const contactPhone = document.querySelector('.contact-phone');
  const contactMessage = document.querySelector('.contact-message');
  const contactPhoneNumber = document.querySelector('.contact-phone-number');
  const btnSend = document.querySelector('.btn-send');
  const languageChange = document.querySelector('.lang-wrapper .active');

  langLink.forEach(el => {
    el.addEventListener('click', () => {

      if (langEl.querySelector('.active').getAttribute('language') == 'english') {
          langEl.querySelector('.active').setAttribute('language', 'polish');
        } else {
          langEl.querySelector('.active').setAttribute('language', 'english');
        };
      langEl.querySelector('.active').classList.remove('active');
      el.classList.add('active');

      const attr = el.getAttribute('language');
      linkHome.textContent = language[attr].linkHome;
      linkServices.textContent = language[attr].linkServices;
      linkAbout.textContent = language[attr].linkAbout;
      linkContact.textContent = language[attr].linkContact;
      subtitle.textContent = language[attr].subtitle;
      motto.textContent = language[attr].motto;
      servicesTitle.textContent = language[attr].servicesTitle;
      serviceOne.textContent = language[attr].serviceOne;
      serviceTwo.textContent = language[attr].serviceTwo;
      serviceThree.textContent = language[attr].serviceThree;
      serviceFour.textContent = language[attr].serviceFour;
      serviceFive.textContent = language[attr].serviceFive;
      serviceSix.textContent = language[attr].serviceSix;
      aboutTitle.textContent = language[attr].aboutTitle;
      aboutDesc.textContent = language[attr].aboutDesc;
      contactTitle.textContent = language[attr].contactTitle;
      contactName.textContent = language[attr].contactName;
      contactPhone.textContent = language[attr].contactPhone;
      contactMessage.textContent = language[attr].contactMessage;
      contactPhoneNumber.textContent = language[attr].contactPhoneNumber;
      btnSend.textContent = language[attr].btnSend;
      languageChange.textContent = language[attr].languageChange;
      
    });
  })





