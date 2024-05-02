AOS.init();
const dark_mode = document.getElementById("dark-mode")
dark_mode.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme")
    const dark_slide_text=document.getElementsByClassName("carousel-caption")
   const dark_card = document.getElementsByClassName("card")
   for (let i = 0; i < dark_card.length; i++) {
      dark_card[i].classList.toggle("card-dark")
   }
   for (let i = 0; i < dark_slide_text.length; i++) {
    dark_slide_text[i].classList.toggle("text-light")
 }


   if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light')
   } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
   }
})

