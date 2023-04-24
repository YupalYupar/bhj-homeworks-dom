const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"))
let i = 0

function rotating() {
    if (i === rotatorCase.length - 1) {
        i = 0
    }
    rotatorCase[i].classList.remove("rotator__case_active")
    rotatorCase[i + 1].classList.add("rotator__case_active")
    i++
};

setInterval(rotating, 1000);