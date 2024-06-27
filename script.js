
const inputText = document.getElementById('pager-text-typed');


addEventListener('click', function(e) {

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
        inputText.textContent += '8';
    }

    if( numberNine ) {
        inputText.textContent += '9';
    }

    if( numberZero ) {
        inputText.textContent += '0';
    }

    if( star ) {
        inputText.textContent += star;
    }
    
    if( pound ) {
        inputText.textContent += pound;
    }
})

