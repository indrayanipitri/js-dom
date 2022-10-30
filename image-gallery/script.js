// Cara ribet
const imgThumb = document.querySelectorAll('.thumbnail img');
for (let i = 0; i < imgThumb.length; i++) {
    imgThumb[i].addEventListener('click', function(){
    const name = imgThumb[i].getAttribute('alt')

    const imgJumbo = document.querySelector('.jumbo');
    imgJumbo.setAttribute('src', 'img/' + name + '.jpg')
    })
}


//Cara gampang
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo')
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function(e) {
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;

        //Animasi Css
        jumbo.classList.add('fade')
        setTimeout( function() {
            jumbo.classList.remove('fade')
        }, 500)

        thumbs.forEach(function(thumb) {
            // if (thumb.classList.contains('active')) {
            //     thumb.classList.remove('active')
            // }

            //cara paksa
            thumb.className = 'thumb'
        })
        e.target.classList.add('active')
    }
})