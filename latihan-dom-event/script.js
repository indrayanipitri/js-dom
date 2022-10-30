//DOM Events

//Event Handler

  //Inline HTML attribute   
  const p3 = document.querySelector('.p3');
  function changeColorP3() {
    p3.style.backgroundColor = '#db51db'
  }  //nanti nama function nya taruh di attribute kelas p3

  //Element method
  const p2 = document.querySelector('.p2');
  p2.onclick = function() {
    p2.style.backgroundColor = '#fc72bc'
  }


//addEventListener
//tambah item ketika paragraf 4 di klik
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.getElementsByTagName('ul')[0];
    const liNew = document.createElement('li');
    const textLiNew = document.createTextNode('item baru');

    liNew.appendChild(textLiNew)
    ul.appendChild(liNew)
})


p4.addEventListener('mouseenter', function() {
    p4.style.backgroundColor = 'lightblue'
})
p4.addEventListener('mouseleave', function() {
    p4.style.backgroundColor = 'white'
})

