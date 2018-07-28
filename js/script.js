const main = document.querySelector('main');
const inputField = main.querySelector('form.input-field input');
const defaultValue = inputField.value;
const greeting = main.querySelector(".greeting");

let isFocused = false;

//add event listeners to input
inputField.addEventListener('focus', function(){
    isFocused = true;
})

inputField.addEventListener('blur', function(){
    isFocused = false;
})


document.addEventListener('keydown', function(e){
    
    if(isFocused){
        if(inputField.value === defaultValue){
            inputField.value = "";
        }

        inputField.classList.add('focused');

    }//END if isFocused

    
   const keycode = (e.keyCode ? e.keyCode : e.which);

   //if the user hits ENTER...
   if (keycode == '13' && inputField.value != defaultValue ) {
       
        let myName = inputField.value;
        inputField.blur();
        
        const newGreeting = `Hello, ${myName}. Nice to meet you!`;
        const newParagraph = document.createElement("p");

        newParagraph.innerText = newGreeting;

        greeting.appendChild(newParagraph);
   
   }


})
