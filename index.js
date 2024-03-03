const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("pass1");
let passTwoEl = document.getElementById("pass2");


function generatePassword() {
    let pass = "";
    for (let i = 1; i <= 12; i++) {
        let char = Math.floor(Math.random()
            * characters.length);
 
        pass += characters[char]
    }
    return pass;
}

function generateRandowmPassword() {
    let randomPassOne = generatePassword();  
    let randomPassTwo = generatePassword(); 
    
    passOneEl.textContent = randomPassOne;
    passTwoEl.textContent = randomPassTwo;
}

