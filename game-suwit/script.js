//Pilihan Komputer
function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

//Hasil
function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'semut') ? 'KALAH' : 'MENANG';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
    return 
}

//mulai main
const pilihGambar = document.querySelectorAll('li img');
pilihGambar.forEach(function(imgPilihan) {
    imgPilihan.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = imgPilihan.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        //yang dipilih computer
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

        //hasil
        const info = document.querySelector('.info')
        info.innerHTML = hasil;
    })
})

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp :' + pilihanComputer)
//     // console.log('player :' + pilihanPlayer)
//     // console.log('hasil :' + hasil)
    
//     //gambar pilihan computer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     //hasil
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// })