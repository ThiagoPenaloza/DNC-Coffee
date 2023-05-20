
const card = Array.from(document.querySelectorAll('.card'))

card.forEach(element => {
    const buyButton = element.querySelector('.buyButton');

    element.addEventListener('mouseover', () => {
        clearTimeout(timeoutID);
        buyButton.classList.remove('animate__animated', 'animate__fadeOut');
        buyButton.classList.add('animate__animated', 'animate__fadeIn');
        buyButton.style.display = 'block';
    })

    element.addEventListener('mouseout', () => {
        buyButton.classList.add('animate__animated', 'animate__fadeOut');
        timeoutID = setTimeout(() => {
            buyButton.classList.remove('animate__animated', 'animate__fadeIn');
            buyButton.style.display = 'none';
        }, 1000);
    })
});



const openModalButton1 = document.querySelector("#openModal");
const openModalButton2 = document.querySelector("#openModal2");
const closeModalButton1 = document.querySelector("#closeModal");
const closeModalButton2 = document.querySelector("#closeModal2");
const modal1 = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");
const fade = document.querySelector("#fade");
const fade2 = document.querySelector("#fade2");


const openModal = (modal, fade) => {
    modal.classList.add('hide', 'animate__animated', 'animate__fadeIn');
    fade.classList.add('hide', 'animate__animated', 'animate__fadeIn');
    modal.classList.remove('animate__fadeOut');
    fade.classList.remove('animate__fadeOut');
}

const closeModal = (modal, fade) => {
    modal.classList.add('animate__animated', 'animate__fadeOut');
    fade.classList.add('animate__animated', 'animate__fadeOut');
    modal.classList.remove('animate__fadeIn');
    fade.classList.remove('animate__fadeIn');
    setTimeout(() => {
        modal.classList.remove('hide');
        fade.classList.remove('hide');
    }, 500);
}


openModalButton1.addEventListener('click', () => {
    openModal(modal1, fade);
});

openModalButton2.addEventListener('click', () => {
    openModal(modal2, fade2);
});

closeModalButton1.addEventListener('click', () => {
    closeModal(modal1, fade);
});

closeModalButton2.addEventListener('click', () => {
    closeModal(modal2, fade2);
})

// openModalButton1.addEventListener('click', () => {
//     modal1.classList.add('hide', 'animate__animated', 'animate__fadeIn');
//     fade.classList.add('hide', 'animate__animated', 'animate__fadeIn');
//     modal1.classList.remove('animate__fadeOut');
//     fade.classList.remove('animate__fadeOut');
// })

// closeModalButton1.addEventListener('click', () => {
//     modal1.classList.add('animate__animated', 'animate__fadeOut');
//     fade.classList.add('animate__animated', 'animate__fadeOut');
//     modal1.classList.remove('animate__fadeIn');
//     fade.classList.remove('animate__fadeIn');
//     setTimeout(() => {
//         modal.classList.remove('hide');
//         fade.classList.remove('hide');
//     }, 500);
// })