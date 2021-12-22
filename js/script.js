const header = document.querySelector("header");
const logo = document.getElementsByClassName("logo")[0];
const sectionOne = document.querySelector("#Home");
const title = document.querySelector("#title");
const section = document.querySelectorAll("section");
const sliders = document.querySelectorAll(".slide-in");
const faders = document.querySelectorAll(".fade-in");
const burger = document.querySelector(".burger");
const navigation = document.querySelector("#navigation");
const body = document.getElementsByTagName("body")[0];
const underline = document.querySelectorAll(".underline");

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const projectBackground = document.querySelector(".projectBackground");
const project1Modal = document.getElementById("project1Modal");
const project2Modal = document.getElementById("project2Modal");
const project1Close = document.getElementById("project1Close");
const project2Close = document.getElementById("project2Close");

underline.forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("toggle");
    navigation.classList.remove("nav-menu");
    header.classList.remove("nav-menu-backgroundColor");
    body.classList.remove("active");
  })
);

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  navigation.classList.toggle("nav-menu");
  header.classList.remove("nav-scrolled");
  header.classList.toggle("nav-menu-backgroundColor");
  body.classList.toggle("active");
  logo.src = "img/logoWhite.png";
});

project1.addEventListener("click", () => {
  projectBackground.classList.add("projectBackground--show");
  project1Modal.classList.add("project__modal--show");
  header.classList.add("disapear");
});

project2.addEventListener("click", () => {
  projectBackground.classList.add("projectBackground--show");
  project2Modal.classList.add("project__modal--show");
  header.classList.add("disapear");
});

project1Close.addEventListener("click", () => {
  projectBackground.classList.remove("projectBackground--show");
  project1Modal.classList.remove("project__modal--show");
  header.classList.remove("disapear");
});

project2Close.addEventListener("click", () => {
  projectBackground.classList.remove("projectBackground--show");
  project2Modal.classList.remove("project__modal--show");
  header.classList.remove("disapear");
});

// nav color switch
const sectionOneOptions = { rootMargin: "-100px 0px 0px 0px" };

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        logo.src = "img/logoBlack.png";
      } else {
        header.classList.remove("nav-scrolled");
        logo.src = "img/logoWhite.png";
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);

// title fade

titleOptions = { rootMargin: "-300px 0px 0px 0px" };

const titleObserver = new IntersectionObserver((entries, titleObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      title.classList.remove("appear");
    } else {
      title.classList.add("appear");
    }
  });
}, titleOptions);

titleObserver.observe(title);

const options = { threshold: 0.7 };
// active nav
const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    const activeUnderline = document.querySelector(
      `[data-section=${sectionId}]`
    );
    if (entry.isIntersecting) {
      activeUnderline.classList.remove("underline");
      activeUnderline.classList.add("active");
    } else {
      activeUnderline.classList.add("underline");
      activeUnderline.classList.remove("active");
    }
  });
}, options);

section.forEach((section) => {
  sectionObserver.observe(section);
});

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

// fade / slide in
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// active type header
let typed = new Typed(".type", {
  strings: ["webdeveloper", "front-end", "back-end"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
