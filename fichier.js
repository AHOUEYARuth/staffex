const bouton = document.querySelector("button")
if(bouton){
    bouton.addEventListener('click', function(){
        //const song = document.querySelector("audio");
        bouton.innerHTML = '<audio src="images/site-song.mp3" controls muted loop></audio>'
    })
}

// const pourcentage = document.querySelector('.percent');
// const progressTag = document.querySelector('.progress');
// let count = 0;
// const percent = 20;
// const iteration = 5;
// const intervalTime = 500;
// function animate() {
//     if (count < iteration) {
//         count++;
//         const occurrentPercent = count * percent;
//         progressTag.style.width = (count * 200) + 'px';
//         progressTag.style.backgroundColor = "white";
//         pourcentage.textContent = occurrentPercent + '%';
//     } else {
//         clearInterval(loading);
//         // window.location.href = "http://127.0.0.1:5500/staffex.html"; 
//     }
// }
// const loading = setInterval(animate, intervalTime);

const menu = document.querySelector('#bouton');
if(menu){
    menu.addEventListener('click' , function(){
        menu.style.display = 'none'
        const menuBlock = document.querySelector('.menu_block');
        menuBlock.style.display = 'block'
    })
}
const close = document.querySelector('.close');
close.addEventListener('click',function(){
   const menuBlock = document.querySelector('.menu_block');
   menuBlock.style.display = 'none'
})