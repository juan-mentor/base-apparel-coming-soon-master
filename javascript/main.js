const elementInput = document.querySelector('.hero__cta');
const elementIconContainer = document.querySelector('.hero__icon-container');
const elementError = document.querySelector('.hero__error');
const elementMessage = document.querySelector('.hero__message');
let inputValue = elementInput.value;

function checkEmail() {
    let searchArroba = inputValue.indexOf('@');
    let searchPoint = inputValue.indexOf('.');
    let searchCom = inputValue.indexOf('com');
    
    console.log(searchArroba,searchPoint,searchCom);
    if (searchArroba !== -1 && searchPoint !== -1 && searchCom !== -1) {
        elementMessage.textContent = 'search email, thank you.';
        elementInput.value = '';
    } else {
        elementMessage.textContent = 'error de envío.';
    }

}

elementIconContainer.addEventListener('click', () => {
    checkEmail();
})

