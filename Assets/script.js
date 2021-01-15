var passwordEl = document.querySelector("#password");

// FUNCTION - PASSWORD GENERATOR FUNCTION STARTS HERE.
function generate ()
{
    // VARIABLE TO PROMPT FOR THE USER TO MAKE ENTRY. 
    var caseLenght = prompt("How Many Characters? Please Choose Between 8 to 128!");
    
    // IF STATEMENT - TOTALL NUMBER OF ENTRY SHOULD BE LESS THAN 8 NUMBER. 
    if (caseLenght < 8) {
    alert("Low Number of Characters!!!");} 
    
    // IF STATEMENT - TOTAL NUMBER OF ENTRY SHOULD NOT BE MORE THAN 128 NUMBERS. 
    else if (caseLenght > 128){
    alert("High Number of Characters!!!");}
    
    // ELSE STATEMENT - OTHERWISE THE FUNCTION STARTS GENERATING PASSWORD. 
    else
{     
  
    // PROMPT - ASKING USER TO CHOOSE WHAT TYPES OF CHARACTERS THEY WANT.
    var conUppCase = confirm("Any Upper Case Letter? i.e. (A-B-C...)");
    var conLowCase = confirm("Any Lower Case Letter? i.e. (a-b-c...)");
    var conSymCase = confirm("Any Special Charactor? i.e. (%, $, #...)");
    var conNumCase = confirm("Any Number? i.e. (1-2-3...)");

    // VARIABLES - FOR ALL TYPES OF CHARACTERS.
    var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var symCase = "!'#$%&()*+-./;:<>=?@[]{}~^";
    var numCase = "0123456789";
    
    var mixCharacthers = "";

      // IF USER CONFIRMS EACH CONDITIONS OF CHARACTERS.
      if(conUppCase === true){mixCharacthers += uppCase;} 
      if(conLowCase === true){mixCharacthers += lowCase;}
      if(conSymCase === true){mixCharacthers += symCase;}
      if(conNumCase === true){mixCharacthers += numCase;}
        
      var genArr = [];
      
      // FOR LOOPS - COMBINATION OF PASSWORDS.
      for (var i = 0; i < caseLenght; i++)
      {    
        var allCharacters = mixCharacthers[Math.floor(Math.random() * mixCharacthers.length)];
        genArr.push (allCharacters)
      }     
      document.getElementById("password").innerHTML += genArr.join(""); 
    }
}  


