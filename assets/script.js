let checkbox = document.querySelector(".checkbox-input");
let checkmark = document.querySelector(".checkmark");

let menu = document.getElementById("mobile-nav");
let menuOpened = false;

const handleCheckbox = () => {
  checkbox.checked = !checkbox.checked;
  
  if (checkbox.checked) {
    checkmark.style.display = "flex"
  } else if (!checkbox.checked) {
    checkmark.style.display = "none";
  }
};

const toggleMenu = () => {
  menuOpened = !menuOpened;

  if (menuOpened) {
    menu.style.display = "block";
    setTimeout(() => menu.style.opacity = "1", 100);
  } else if (!menuOpened) {
    menu.style.opacity = "0";
    setTimeout(() => menu.style.display = "none", 300);
  }
};

$(document).ready(function() {

});

