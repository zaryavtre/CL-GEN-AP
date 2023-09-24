const api = `https://www.thecolorapi.com/id?hex=${getRandomHexColors()}`

function getRandomHexColors() {
  let letters = '0123456789ABCDEF'.split('')
  let hexa = ''
  for (let i = 0; i < 6; i++) {
    hexa += letters[Math.floor(Math.random() * 16)]
  }
  return hexa
}

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    document.querySelector('#first').style.backgroundColor = data.hex.value
    document.querySelector('#second').style.backgroundColor = data.hex.value
    document.querySelector('#third').style.backgroundColor = data.hex.value
    document.querySelector('#fourth').style.backgroundColor = data.hex.value
    document.querySelector('#fifth').style.backgroundColor = data.hex.value

    const getHexHtml = document.querySelectorAll('.hex')
    for (let i = 0; i < getHexHtml.length; i++) {
      getHexHtml[i].textContent = data.hex.value
    }
  })
