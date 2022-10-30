//DOM Selection
 
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'purple'
judul.innerHTML = 'Sanaya'
judul.style.backgroundColor = '#ccc'

//document.getElementsByTagName()  -> HTMLCollection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'yellow'
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '55px'

//document.getElementByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini paragraf yang diperbarui'

//document.querySelection() -> element
const p4 = document.querySelector('section#b p');
p4.style.color = 'red'

const section = document.getElementById('#b');
const li2 = document.querySelector('li:nth-child(2)')
li2.style.backgroundColor = 'orange'

    //mengambil element pertama
const pQuery = document.querySelector('p');
pQuery.innerHTML = "ini diperbarui oleh querySelector"    

//document.querySelectionAll()  -> nodelList
  //mengambil seluruh element
const pQAll = document.querySelectorAll('p');
for (let i = 0; i < pQAll.length; i++) {
    pQAll[i].style.fontSize = '24px'
}

