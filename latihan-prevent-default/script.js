//Prevent Default -> 
// sebuah method yang ada dalam sebuah objek event. tujuan menghentikan aksi default yang dilakukan element web kita.

//misal contoh sebelumnya  close nya pakai span. skrg ganti pakai a. untuk menghentikan reload nya dibutuhkan prevent default.


const close = document.querySelectorAll('.close');

close.forEach(function (el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none'
        e.preventDefault()  //menghentikan aksi reload
        e.stopPropagation() //menghentikan event pembungkusnya
    })
})


//Event Bubbling 
//ketika kita memberikan sebuah event pada element, maka event tersebut berlaku pada element2 pembungkusnya juga

//misal element parentnya diberi event, maka element child yang juga diberikan event akan menjalankan event element parentnya dulu baru event elemen childnya dijalankan.
//nah untuk menghentikannya berikan e.stopPropagation()

//contoh element parentnya card. elemen child nya close.
const cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    card.addEventListener('click', function(e) {
        alert('ok')
    })
})

//berikan e.stopPropagation() pada element child yang udah dibuat diatas. maka event pada elemen caard tidak akan dijalankan ketika kita klik tombol close.


//cara lebih efektif:
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
    }
    if (e.target.className == 'card') {
        alert('ok')
    }
})