AOS.init();
const dark_mode = document.getElementById("dark-mode")
dark_mode.addEventListener("click", () => {

   const dark_card = document.getElementsByClassName("card")
   document.body.classList.toggle("dark-theme")
   for (let i = 0; i < dark_card.length; i++) {
      dark_card[i].classList.toggle("card-dark")
   }


   if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light')
   } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
   }
})

