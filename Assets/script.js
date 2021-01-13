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




function generate (){
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
                  //var allCase = uppCase + lowCase + symCase + numCase;
                  
          for (var i = 0; i < caseLenght; i++)
        {

            all_UppCase = uppCase[Math.floor(Math.random() * uppCase.length)];
            all_LowCase = lowCase[Math.floor(Math.random() * lowCase.length)];
            all_SymCase = symCase[Math.floor(Math.random() * symCase.length)];
            all_NumCase = numCase[Math.floor(Math.random() * numCase.length)];

                  
            if (conUppCase === true){
              document.getElementById("password").innerHTML += all_UppCase;

              } else if (conLowCase === true){
              document.getElementById("password").innerHTML += all_LowCase;

              } else if (conSymCase === true){
              document.getElementById("password").innerHTML += all_SymCase;

              } else if (conNumCase === true){
              document.getElementById("password").innerHTML += all_NumCase;

              } else{
                alert("You Ignored to Generate Password");
              }  
          }
      }
}  