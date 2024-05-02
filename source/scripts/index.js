AOS.init();
const dark_mode = document.getElementById("dark-mode")
dark_mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    const dark_slide_text=document.getElementsByClassName("carousel-caption")
    const dark_card = document.getElementsByClassName("card")
    const dark_aside_link=document.getElementsByClassName("aside-link")
    const dark_card_info=document.getElementsByClassName("fm-infos")
    const dark_footer_text=document.getElementsByClassName("card-footer-text")
    const Dark_pagination=document.getElementById("pagination").classList.toggle("dark-pagination")

   for (let i = 0; i < dark_card.length; i++) {
      dark_card[i].classList.toggle("card-dark")
   }
   for (let i = 0; i < dark_slide_text.length; i++) {
    dark_slide_text[i].classList.toggle("text-light")
 }

 for (let i = 0; i < dark_aside_link.length; i++) {
    dark_aside_link[i].classList.toggle("dark-aside-link")
 }
 for (let i = 0; i < dark_card_info.length; i++) {
    dark_card_info[i].classList.toggle("dark-fm-infos")
 }
 for (let i = 0; i < dark_footer_text.length; i++) {
    dark_footer_text[i].classList.toggle("dark-card-footer-text")
 }


   if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light')
   } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
   }
})