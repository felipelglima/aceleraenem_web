document.addEventListener("start-counter", (event) => {
  const totalNumbers = event.detail.count
  const animationDuration = 3000
  const steps = totalNumbers + 1
  const timeoutInterval = animationDuration / steps

  const digitHeight = 1

  const scrollDigits = (containerId, value) => {
    const container = document.getElementById(containerId)
    const digits = container.getElementsByClassName("digit")
    const offset = -value * digitHeight
    for (let digit of digits) {
      digit.style.transform = `translateY(${offset}em)`
    }
  }

  const startCounter = () => {
    let counter = 0

    const updateCounter = () => {
      if (counter <= totalNumbers) {
        const hundreds = Math.floor(counter / 100)
        const tens = Math.floor((counter % 100) / 10)
        const units = counter % 10

        scrollDigits("hundreds", hundreds)
        scrollDigits("tens", tens)
        scrollDigits("units", units)

        counter++
        setTimeout(updateCounter, timeoutInterval)
      }
    }

    updateCounter()
  }

  startCounter()
})
