import { data } from "./data.js";

const planetBtns = document.querySelectorAll(".planet-btn");
const navigation = document.querySelector(".navigation__list");
const planetNavigations = document.querySelectorAll(".navigation__link");

const mediaQuery = window.matchMedia("(max-width: 700px)");

if (mediaQuery.matches) {
  planetBtns[0].innerHTML = "Overview";
  planetBtns[1].innerHTML = "Structure";
  planetBtns[2].innerHTML = "Surface";
}

const title = document.querySelector(".planet-info__title");
const description = document.querySelector(".planet-info__description");
const rotationTime = document.querySelector(".rotation-time");
const revolutionTime = document.querySelector(".revolution-time");
const radius = document.querySelector(".radius-value");
const averageTemp = document.querySelector(".average-temp");

const planetImage = document.querySelector(".planet-illustration__img");

// Internal Buttons for each planet

const overview = document.querySelector(".planet-btn--overview");
const structure = document.querySelector(".planet-btn--structure");
const geology = document.querySelector(".planet-btn--geology");

// Selected Planet
let planetSelected = data()[0];
overview.classList.add(`${planetSelected.name.toLowerCase()}-bg`);

navigation.style.transition = "all 2s";

// After we click each Planet Navigation
planetNavigations.forEach((element) =>
  element.addEventListener("click", function () {
    const planetNavClass = element.classList;
    const planetClicked = planetNavClass[1].split("--")[1];

    // Resetting the internal buttons
    overview.className = "";
    overview.classList.add("planet-btn");
    overview.classList.add("planet-btn--overview");

    structure.className = "";
    structure.classList.add("planet-btn");
    structure.classList.add("planet-btn--structure");

    geology.className = "";
    geology.classList.add("planet-btn");
    geology.classList.add("planet-btn--geology");

    overview.classList.add(`${planetClicked}-bg`);

    const planetObj = data().find(
      (anotherElement) =>
        anotherElement.name.toLowerCase() === planetClicked.toLowerCase()
    );

    planetSelected = planetObj;

    console.log(planetObj);

    title.innerText = planetObj.name;
    description.innerText = planetObj.overview.content;
    rotationTime.innerText = planetObj.rotation;
    revolutionTime.innerText = planetObj.revolution;
    radius.innerText = planetObj.radius;
    averageTemp.innerText = planetObj.temperature;

    let imageLocation = planetObj.images.planet.replace("assets", "images");
    planetImage.src = imageLocation;

    // Uncheck the navigation Button for mobile devices
    const checkboxInput = document.querySelector(".checkbox-input");
    checkboxInput.checked = false;
  })
);

// Clicking the internal Buttons
overview.addEventListener("click", function () {
  description.innerText = planetSelected.overview.content;

  structure.classList.remove(`${planetSelected.name.toLowerCase()}-bg`);
  geology.classList.remove(`${planetSelected.name.toLowerCase()}-bg`);

  overview.className = "";
  overview.classList.add("planet-btn");
  overview.classList.add("planet-btn--overview");
  overview.classList.add(`${planetSelected.name.toLowerCase()}-bg`);

  // Changing Image
  let imageLocation = planetSelected.images.planet.replace("assets", "images");
  planetImage.src = imageLocation;
});

structure.addEventListener("click", function () {
  description.innerText = planetSelected.structure.content;
  overview.classList.remove(`${planetSelected.name.toLowerCase()}-bg`);
  geology.classList.remove(`${planetSelected.name.toLowerCase()}-bg`);

  structure.className = "";
  structure.classList.add("planet-btn");
  structure.classList.add("planet-btn--structure");
  structure.classList.add(`${planetSelected.name.toLowerCase()}-bg`);

  // Changing Image
  let imageLocation = planetSelected.images.internal.replace(
    "assets",
    "images"
  );
  planetImage.src = imageLocation;
});

geology.addEventListener("click", function () {
  description.innerText = planetSelected.geology.content;
  overview.classList.remove(`${planetSelected.name.toLowerCase()}-bg`);
  structure.classList.remove(`${planetSelected.name.toLowerCase()}-bg`);

  geology.className = "";
  geology.classList.add("planet-btn");
  geology.classList.add("planet-btn--geology");
  geology.classList.add(`${planetSelected.name.toLowerCase()}-bg`);

  // Changing Image
  let imageLocation = planetSelected.images.planet.replace("assets", "images");
  planetImage.src = imageLocation;
});
