
const inputText = document.getElementById('pager-text-typed');
const sentText = document.getElementById('pager-text-sent');
const dialPadNumbers = document.querySelectorAll('#dial-btn');

const resetButton = document.getElementById('reset-btn');
const sendButton = document.getElementById('send-btn');

const audio = new Audio('assets/pager.wav')


addEventListener('click', function(e) {

    // Utilizing Data Attributes for Buttons

    const numberZero = e.target.dataset.zero;
    const numberOne = e.target.dataset.one;
    const numberTwo = e.target.dataset.two;
    const numberThree = e.target.dataset.three;
    const numberFour = e.target.dataset.four;
    const numberFive = e.target.dataset.five;
    const numberSix = e.target.dataset.six;
    const numberSeven = e.target.dataset.seven;
    const numberEight = e.target.dataset.eight;
    const numberNine = e.target.dataset.nine;
    const star = e.target.dataset.star;
    const pound = e.target.dataset.pound;


    if( numberOne ) {
        inputText.textContent += numberOne;
    }

    if( numberTwo ) {
        inputText.textContent += numberTwo;
    }

    if( numberThree ) {
        inputText.textContent += numberThree;
    }

    if( numberFour ) {
        inputText.textContent += numberFour;
    }

    if( numberFive ) {
        inputText.textContent += numberFive;
    }

    if( numberSix ) {
        inputText.textContent += numberSix;
    }
 
    if( numberSeven ) {
        inputText.textContent += numberSeven;
    }

    if( numberEight ) {
        inputText.textContent += numberEight;
    }

    if( numberNine ) {
        inputText.textContent += numberNine;
    }

    if( numberZero ) {
        inputText.textContent += numberZero;
    }

    if( star ) {
        inputText.textContent += star;
    }
    
    if( pound ) {
        inputText.textContent += pound;
    }

    if(inputText.textContent.length >= 10){
        
        dialPadNumbers.forEach(btn => {
            btn.disabled = true;
        })
    }
})

// Clearing the Pager Displays


resetButton.addEventListener('click', function() {
    inputText.textContent = '';
    sentText.textContent = '';
    
    dialPadNumbers.forEach(btn => {
        btn.disabled = false;
    })
})

// Sending the Page


sendButton.addEventListener('click', function() {

    function textDelay() {
        sentText.textContent = inputText.textContent;

        if(inputText.textContent)
        audio.play();
    }
    setTimeout(textDelay, 2000);
});


