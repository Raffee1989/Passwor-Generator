// FUNCTION - PASSWORD GENERATOR FUNCTION STARTS HERE.
function generate ()
{
        // VARIABLE TO PROMPT FOR THE USER TO MAKE ENTRY. 
        var caseLenght = prompt("How Many Characters?");

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
        
        // ADDING ALL THE CHARACTERS TOGETHER.
        var mixCharacthers = uppCase + lowCase + symCase + numCase;

        // FOR LOOPS - COMBINATION OF PASSWORDS.
        for (var i = 0; i < caseLenght; i++)
      {
          // MIXING ALL CHARACTERS RANDOMLY.
          var allCharacters = mixCharacthers[Math.floor(Math.random() * mixCharacthers.length)];
          
          // IF USER CONFIRMS ALL THE CONDITIONS OF CHARACTERS.
          if(
            (conUppCase === true) || 
            (conLowCase === true) || 
            (conSymCase === true) || 
            (conNumCase === true)
            ){document.getElementById("password").innerHTML += allCharacters;} 
          
          // IF USER DOES NOT CONFIRM ALL THE CONDITION OF CHARACTERS.  
          else{
            alert("You didn't Choose Any Type of Characters!!!");}
      }    
        
  }
}  