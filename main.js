// let keys = document.querySelectorAll('.key');
// let audios = document.querySelectorAll('audio[data-key]');


// document.addEventListener('keydown', function(event) {
//     if (event.key === 'a') {
//         audios[0].play();
//         const myElement = document.querySelector('div[data-key = "65"]');
//         myElement.classList.add("playing");
//         document.querySelector('div[data-key = "65"]').addEventListener("transitionend", removeTransition);
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'z') {
//         audios[1].play();
//         const myElement = document.querySelector('div[data-key = "90"]');
//         myElement.classList.add("playing");
//     }
//  });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'e') {
//         audios[2].play();
//         const myElement = document.querySelector('div[data-key = "69"]');
//         myElement.classList.add("playing");
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'q') {
//         audios[3].play();
//         const myElement = document.querySelector('div[data-key = "81"]');
//         myElement.classList.add("playing");
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 's') {
//         audios[4].play();
//         const myElement = document.querySelector('div[data-key = "83"]');
//         myElement.classList.add("playing");
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'd') {
//         audios[5].play();
//         const myElement = document.querySelector('div[data-key = "68"]');
//         myElement.classList.add("playing");
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'w') {
//         audios[6].play();
//         const myElement = document.querySelector('div[data-key = "87"]');
//         myElement.classList.add("playing");
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'x') {
//         audios[7].play();
//         const myElement = document.querySelector('div[data-key = "88"]');
//         myElement.classList.add("playing");
//     }
// });
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'c') {
//         audios[8].play();
//         const myElement = document.querySelector('div[data-key = "67"]');
//         myElement.classList.add("playing");
//     }
// });


function playing_audio(keycode) {
    document.querySelector('audio[data-key="'  + keycode + '"]').play();    //fonction qui, une fois qu'elle à recuperer les keycode, joue le son correspondant
    document.querySelector('div[data-key="' + keycode + '"]').classList.toggle("playing"); //permet de toggle la classe css "playing"a
    // console.log(keycode);
}

window.addEventListener('keydown', (event) => {  //function qui récupère le keycode et l'envoie dans la fonction playing.audio
    playing_audio(event.keyCode);
    // console.log(event.keyCode);
});

window.addEventListener('keyup', (event) => {
    playing_audio(event.keyCode);
    console.log(event.keyCode);
});


async function new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(), 1000;
    }, timeout);
});