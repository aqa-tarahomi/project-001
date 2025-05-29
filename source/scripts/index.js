AOS.init();
const dark_mode = document.getElementById("dark-mode")

   dark_mode.addEventListener("click", () => {
      const icon =document.getElementById("dark-mode-icon")
      
         if (document.documentElement.getAttribute("data-bs-theme") == 'dark') {
               document.documentElement.setAttribute('data-bs-theme', 'light')
               icon.removeAttribute("class", "b-brightness-high-fill")
               icon.setAttribute("class", "bi-moon-fill")
         }
      
      
      
         else {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
            icon.removeAttribute("class", "bi-moon-fill")
            icon.setAttribute("class", "bi-brightness-high-fill")
         }
      })

