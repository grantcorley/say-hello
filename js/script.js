const main = document.querySelector('main');
const inputField = main.querySelector('form.input-field input');
const defaultValue = inputField.value;
const greeting = main.querySelector("p.greeting");

let isFocused = false;


inputField.addEventListener('focus', function(){

    isFocused = true;
    //console.log('FOCUS');

})

inputField.addEventListener('blur', function(){

    isFocused = false;
    //console.log('BLUR');

})






document.addEventListener('keydown', function(e){
    
    if(isFocused){

        if(inputField.value === defaultValue){
            inputField.value = "";
        }

    }//END if isFocused

   const keycode = (e.keyCode ? e.keyCode : e.which);

   //if the user hits ENTER...
   if (keycode == '13' && inputField.value != defaultValue ) {
       
    //console.log('SUBMIT');
       let myName = inputField.value;
       inputField.blur();
        
       let finalOutput = "Hello, " + myName + ". Nice to meet you!"

       greeting.innerText = finalOutput;
         
   }


})
