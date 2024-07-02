
const inputText = document.getElementById('pager-text-typed');
const sentText = document.getElementById('pager-text-sent');
const dialPadNumbers = document.querySelectorAll('.dial-btn');

const resetButton = document.getElementById('reset-btn');
const sendButton = document.getElementById('send-btn');

const audio = new Audio('assets/pager.wav')

/* CHALLENGE 

There was a HUGE amount of repetitive code in this challenge. Write out code that 
will add event listeners to all of the buttons and render out the appropriate
numbers.  Send a text to the phone to verify all is well.

Solution can be found here:  https://v1.scrimba.com/scrim/cMMw6Mf2
*/

// WRITE CODE BELOW!

dialPadNumbers.forEach(btn => {
    btn.addEventListener('click', function(e) {
        inputText.textContent += e.target.textContent;
    })
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


