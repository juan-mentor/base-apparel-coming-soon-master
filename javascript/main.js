// list of trapped elements HTML
const elementInput = document.querySelector('.hero__cta');
const elementIconContainer = document.querySelector('.hero__icon-container');
const elementError = document.querySelector('.hero__error');
const elementMessage = document.querySelector('.hero__message');
// phrase to validate
let paragraph = '';

// check if email is valid
function checkEmail() {
    if (paragraph.indexOf('@') !== -1 && paragraph.indexOf('.') !== -1 && paragraph.indexOf('com') && paragraph.length) {
        // reset paragraph
        elementInput.value = "";
        elementMessage.textContent = 'Searched email, thank you';
        // reset message
        setTimeout(() => {
            elementMessage.textContent = '';
        }, 3000);

    } else {
        elementMessage.textContent = "Please provide a valid email";
        elementError.classList.add('active');
        elementInput.style.borderColor = 'hsl(0,93%,68%)';
    }
}

// When we press the button
elementIconContainer.addEventListener('click',checkEmail);

// Every time we update the text
elementInput.addEventListener('input', (e) => {
    // I store the phrase written in the input
    paragraph = e.target.value;
    // values reset
    elementError.classList.remove('active');
    elementInput.style.borderColor = 'initial';
    elementMessage.textContent = '';
});