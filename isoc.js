let navbarMenu = document.querySelector('.navbar-menu');
let dropdownIsOpen = false;

//togle theme
const themeButton = document.querySelector('.themeButton');
themeButton.addEventListener('click',()=>{
  document.getElementById('html').classList.toggle('dark');
})

let scrollContainor = document.getElementById("gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

//open mobile nav menu
const navButton = document.getElementById('navButton');
const header = document.getElementById('header');
const body = document.getElementById('body');

navButton.addEventListener('click',(event)=>{
    header.classList.toggle('active');
    document.getElementById('html').classList.toggle('paused');
})

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loading");
});

window.addEventListener("load", function() {
  document.body.classList.remove("loading");
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ar,hi,en,es,jv,ko,pa,pt,ru,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
}

// // Handle dropdown menu toggle
// navbarMenu.addEventListener('click', (event) => {
//   if (event.target.classList.contains('dropdown-toggler')) {
//     let target = document.querySelector(`#${event.target.dataset.dropdown}`);

//     if (target) {
//       if (target.classList.contains('show')) {
//         target.classList.remove('show');
//         dropdownIsOpen = false;
//       } else {
//         target.classList.add('show');
//         dropdownIsOpen = true;
//       }
//     }
//   }
// });

// // Handle closing dropdowns if a user clicks outside
// document.body.addEventListener('click', (event) => {
//   if (dropdownIsOpen) {
//     navbarMenu.querySelectorAll('.dropdown').forEach((dropdown) => {
//       let targetIsDropdown = dropdown == event.target;
//       let clickedOnDropdownToggle = event.target.classList.contains('dropdown-toggler');

//       if (clickedOnDropdownToggle) {
//         return;
//       }

//       if (!targetIsDropdown && !dropdown.contains(event.target)) {
//         dropdown.classList.remove('show');
//       }
//     });
//   }
// });

// // Open links in mobiles
// function handleSmallScreens() {
//   document.querySelector('.navbar-toggler').addEventListener('click', () => {
//     if (!navbarMenu.classList.contains('active')) {
//       navbarMenu.classList.add('active');
//     } else {
//       navbarMenu.classList.remove('active');
//     }
//   });
// }

// handleSmallScreens();

