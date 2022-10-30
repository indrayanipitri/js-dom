//Favorite Color
const favColor = document.getElementsByTagName('button')[0];
favColor.onclick = function() {
    document.body.classList.toggle('fav-color')
}

//Random Color
  //buat button
  const randomColor = document.createElement('button');
  const textRandomColor = document.createTextNode('Warna Acak');
  randomColor.appendChild(textRandomColor)
  randomColor.setAttribute('type', 'button')

  favColor.after(randomColor)

randomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
})

//Slider Color
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

// sRed.addEventListener('input', function() {
//   const r = sRed.value
//   const g = sGreen.value
//   const b = sBlue.value
//   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// })
// sGreen.addEventListener('input', function() {
//   const r = sRed.value
//   const g = sGreen.value
//   const b = sBlue.value
//   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// })
// sBlue.addEventListener('input', function() {
//   const r = sRed.value
//   const g = sGreen.value
//   const b = sBlue.value
//   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// })

//Cara Aku
function rgbColor() {
  const r = sRed.value
  const g = sGreen.value
  const b = sBlue.value
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
}

sRed.addEventListener('input', function() {
  document.body.style.backgroundColor = rgbColor()
})
sGreen.addEventListener('input', function() {
  document.body.style.backgroundColor = rgbColor()
})
sBlue.addEventListener('input', function() {
  document.body.style.backgroundColor = rgbColor()
})


//Mouse move, change color
document.body.addEventListener('mousemove', function(e) {
  //posisi mouse
  // console.log(event.clientX)
  //ukuran browser
  // console.log(window.innerWidth)

  const posX = Math.round((e.clientX / window.innerWidth) * 255);
  const posY = Math.round((e.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = 'rgb('+ posX +', '+ posY +', 100)'
})