const fontSize = Array.from(document.querySelectorAll(".font-size"))
const book = document.getElementById("book")

function fontChoose(event) {
    event.preventDefault()
    fontSize.forEach((item) => {
        if (item === this) {
            item.classList.add("font-size_active")
        } else {
            item.classList.remove("font-size_active")
        }
    })

    let dataSize = this.getAttribute("data-size")
    if (dataSize == 'big') {
        book.className = "book_fs-big"
    } else if (dataSize == 'small') {
        book.className = "book_fs-small"
    } else {
        book.className = "book"
    }
}

fontSize.forEach((item) => {
    item.addEventListener("click", fontChoose)
})