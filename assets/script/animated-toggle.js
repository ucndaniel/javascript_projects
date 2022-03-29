    function navbar() {
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "grid") {
    navbar.style.display = "none";
        } else {
    navbar.style.display = "grid";
        }
      }


      function myFunction(x) {
        x.classList.toggle("change");
        x.classList.toggle("navbarShow");
       }

      

