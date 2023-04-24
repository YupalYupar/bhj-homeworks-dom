 const reveal = document.querySelectorAll('.reveal')

 function scrolling() {
    reveal.forEach((item) => {
        let top = item.getBoundingClientRect().top
        if (top < window.innerHeight) {
            item.classList.add('reveal_active')
        } else {
            item.classList.remove('reveal_active')
        }
    })
 };
 
 document.addEventListener("scroll", scrolling)