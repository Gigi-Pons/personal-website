// document.addEventListener('DOMContentLoaded', () => {
//     const toggle = document.getElementById('menu-toggle');
//     const navbar = document.getElementById('navbar');
  
//     if (toggle && navbar) {
//       toggle.addEventListener('click', () => {
//         navbar.classList.toggle('active');
//       });
//     }

//   });
  
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
