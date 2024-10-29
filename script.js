
const sub = document.querySelector(".sub")

sub.addEventListener("click", (e) => {
  e.preventDefault()
})



function openNavbar() {
    const navMenu = document.getElementById("naruto");
    navMenu.classList.toggle("active");
  }