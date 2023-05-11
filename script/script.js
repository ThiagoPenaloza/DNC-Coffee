
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


const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

openModalButton.addEventListener('click', () => {
    modal.classList.add('hide', 'animate__animated', 'animate__fadeIn');
    fade.classList.add('hide', 'animate__animated', 'animate__fadeIn');
    modal.classList.remove('animate__fadeOut');
    fade.classList.remove('animate__fadeOut');
})

closeModalButton.addEventListener('click', () => {
    modal.classList.add('animate__animated', 'animate__fadeOut');
    fade.classList.add('animate__animated', 'animate__fadeOut');
    modal.classList.remove('animate__fadeIn');
    fade.classList.remove('animate__fadeIn');
    setTimeout(() => {
        modal.classList.remove('hide');
        fade.classList.remove('hide');
    }, 500);
})