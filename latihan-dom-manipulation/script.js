//DOM Manupulation 

//element.innerHTML
const judul = document.getElementsByTagName('h1')[0];
judul.innerHTML = '<em>Im Nayeon</>'

const p3 = document.querySelectorAll('section#a p')[2];
p3.innerHTML = '<b> Aku ganti ya, maaf.. huhuh:( </b>'

//element.style.<property>
judul.style.color = "#FF8008"

const p4 = document.querySelector('section#b p');
p4.style.backgroundColor = '#0EDF01'
p4.style.color = '#fff'
p4.style.fontWeight = '600'

//element.setAttribute   ->  nambahin atribute
judul.setAttribute('name', 'nayeon')

//element.getAttribute  -> info isi attribute
judul.getAttribute('id')   //ketik di console, nanti keluar isi attribute id

//element.removeAttribute
const a = document.getElementsByTagName('a')[0]; 
a.removeAttribute('href')

//element.classList.add()  -> nambah kelas
const p2 = document.querySelector('section#a .p2');
p2.classList.add('label')
p2.classList.add('label2')

//element.classList.remove()  -> hapus kelas
p2.classList.remove('label2')

//element.classList.toggle()  ->  kalau gak ada ditambahin, kalau ada dihapus. hasilnya kek hidupin lampu gitu
p2.classList.toggle('label2')

//element.classList.item()  ->  buat tau info nama kelas sekian dari sebuah element
p2.classList.item(1)  //hasilnya -> label

//element.classList.contains()  -> nanya ada kelas tertentu gak di element tersebut
p2.classList.contains('label')  //hasilnya -> true
p2.classList.contains('label3')  //hasilnya -> false

//element.classList.replace()  -> ganti nama kelas
p2.classList.replace('label', 'label1') 


//====================================================
//tambah, hapus, replace element with Node Manipulation

//document.createElement()  -> buat element baru
const pNew = document.createElement('p');

//document.createTextNode()  -> bikin text
const textPNew = document.createTextNode('ini paragraf baru lagi');

//simpan textPNew ke dalam pNew
//node.appendChild()
pNew.appendChild(textPNew)

//tampilin pNew ke tempat yang mau kita tuju
//node.appendChild()  -> tempat naruhnya diakhir
const sectionA = document.getElementById('a');
sectionA.appendChild(pNew)


//coba tambahin item baru tp posisinya ditengah2 pakai insertBefore()
//tangkap section B
const sectionB = document.getElementById('b');
//tangkap ul
const ul = sectionB.querySelector('ul');

//bikin elemen baru
const liNew = document.createElement('li');
//bikin teks buat element beru
const textLiNew = document.createTextNode('Item Baru Ditambahkan');

liNew.appendChild(textLiNew)

//taruh element baru di item ke 2
const li2 = document.querySelector('section#b ul li:nth-child(2)');
ul.insertBefore(liNew, li2)


//parentNode.removeChild()  -> hapus element
//coba hapus link
//element parent yaitu sectionA sudah ditangkap
//tangkap element link
const link = document.getElementsByTagName('a')[0];
//hapus element 
sectionA.removeChild(link)


//parentNode.replaceChild()  ->  ganti element
//coba ganti paragraf 4
//element parent yaitu sectionB sudah ditangkap
//element paragraf 4 sudah ditangkap
//buat element baru
const p4New = document.createElement('h3');
//buat isi text baru
const textP4New = document.createTextNode('Element udah diganti');

p4New.appendChild(textP4New)
//update element
sectionB.replaceChild(p4New, p4)


pNew.style.backgroundColor = '#DC4EFF'
liNew.style.backgroundColor = '#DC4EFF'
p4New.style.backgroundColor = '#DC4EFF'