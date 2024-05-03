/** @type {NodeListOf<HTMLButtonElement>} */
const expandableImages = document.querySelectorAll(".expandable-image")

/**
 * Represents a book.
 * @param {MouseEvent} event - The title of the book.
 */
const expandImage = (event) => {
  /** @type {HTMLImageElement} */
  const img = event.target

  if (img.classList.contains("expanded-image")) {
    document.querySelector(".backdrop").remove()
    img.classList.remove("expanded-image")
    document.documentElement.classList.remove("dialog")
    return
  }

  addBackdrop(img)
  img.classList.add("expanded-image")

  document.documentElement.classList.add("dialog")
}

const addBackdrop = (img) => {
  const div = document.createElement("div")

  div.classList.add("backdrop")

  div.onclick = () => {
    div.remove()
    img.classList.remove("expanded-image")
    document.documentElement.classList.remove("dialog")
  }

  document.body.insertBefore(div, document.body.firstChild)
}

for (const button of expandableImages) {
  button.addEventListener("click", expandImage)
}
