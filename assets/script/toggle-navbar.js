function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);




  function navbar() {
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "grid") {
    navbar.style.display = "none";
        } else {
    navbar.style.display = "grid";
        }
      }