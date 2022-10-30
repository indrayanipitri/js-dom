//DOM Traversal
const close = document.querySelectorAll('.close');

//pakai for
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

//pakai forEach
close.forEach(function (el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none'
    })
})

//DOM Traversal Method
const nama = document.querySelector('.nama');

//parentNode
console.log(nama.parentNode)  //hasilnya card
//parentElement
console.log(nama.parentElement) //hasilnya card
console.log(nama.parentElement.parentElement) //hasilnya container
//nextSibling
console.log(nama.nextSibling) //hasilnya enter
//nextElementSibling
console.log(nama.nextElementSibling) //hasilnya element berikutnya
//previousSibling
console.log(nama.previousSibling) //hasilnya enter
//previousElementSibling
console.log(nama.nextElementSibling) //hasilnya element sebelumnya
