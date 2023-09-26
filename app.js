const api = `https://www.thecolorapi.com/id?hex=${getRandomHexColors()}`
const btnClick = document.querySelector('#get-scheme')

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
    //console.log(data)
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

btnClick.addEventListener('click', function () {
  const getSeedColor = document
    .querySelector('#scheme-color')
    .value.split('#')
    .join('')
  const getSchemeColor = document.querySelector('#scheme-select').value

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${getSeedColor}&mode=${getSchemeColor}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      let getHexColorsArr = data.colors
      console.log(getHexColorsArr)

      const getColorDiv = Array.from(document.querySelectorAll('.color'))
      getColorDiv.forEach((element, index) => {
        if (index < getHexColorsArr.length) {
          const getHexColor = getHexColorsArr[index]
          element.style.backgroundColor = getHexColor.hex.value
        }
      })

      const getHexDivs = Array.from(document.querySelectorAll('.hex'))
      getHexDivs.forEach((element, index) => {
        if (index < getHexColorsArr.length) {
          const getHexValue = getHexColorsArr[index]
          element.textContent = getHexValue.hex.value
        }
      })
    })
})
