// //Assignment Code
//var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// function generatePassword() {
//   var pwlength = parseInt(prompt('How many chars?'));
//   console.log(typeof pwlength);
//   console.log();
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
//-----------------------------------------------------------




function generate ()
{
        var caseLenght = prompt("How Many Characters?");

        if (caseLenght < 8) {
        alert("Low Number of Characters!!!");} 
          
        else if (caseLenght > 128){
        alert("High Number of Characters!!!");}
          
        else
  {
        
        var conUppCase = confirm("Any Upper Case Letter? i.e. (A-B-C...)");
        var conLowCase = confirm("Any Lower Case Letter? i.e. (a-b-c...)");
        var conSymCase = confirm("Any Special Charactor? i.e. (%, $, #...)");
        var conNumCase = confirm("Any Number? i.e. (1-2-3...)");

        var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowCase = "abcdefghijklmnopqrstuvwxyz";
        var symCase = "!'#$%&()*+-./;:<>=?@[]{}~^";
        var numCase = "0123456789";
                  
        for (var i = 0; i < caseLenght; i++)
      {

            var all_UppCase = uppCase[Math.floor(Math.random() * uppCase.length)];
            var all_LowCase = lowCase[Math.floor(Math.random() * lowCase.length)];
            var all_SymCase = symCase[Math.floor(Math.random() * symCase.length)];
            var all_NumCase = numCase[Math.floor(Math.random() * numCase.length)];

            var allCharacters = all_UppCase + all_LowCase + all_SymCase + all_NumCase;
                  
              if (
                  (conUppCase === true) || 
                  (conLowCase === true) || 
                  (conSymCase === true) || 
                  (conNumCase === true)
                ){document.getElementById("password").innerHTML += allCharacters;} 
              
              else{
              alert("You didn't Choose Any Type of Characters!!!");}
      }
  }
}  