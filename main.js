let inputTextEncrypt = document.getElementById("textInputEncrypt");
let encryptionLevel = document.getElementById("levelDropdownEncrypt");
let outputTextEncrypt = document.getElementById("outputEncrypt");
let inputTextDecrypt = document.getElementById("textInputDecrypt");
let decryptionLevel = document.getElementById("levelDropdownDecrypt");
let outputTextDecrypt = document.getElementById("outputDecrypt");
let currEncryptionLevel;
let currDecryptionLevel;

function clearEncryptInput(){
  inputTextEncrypt.value = "";
}

function clearDecryptInput(){
  inputTextDecrypt.value = "";
}

function hideEncrypt(){
  let encryptDiv = document.getElementById("encryptionHTML");
  let decryptDiv = document.getElementById("decryptionHTML");

  encryptDiv.style.display = "none";
  decryptDiv.style.display = "block";
}

function hideDecrypt(){
  let encryptDiv = document.getElementById("encryptionHTML");
  let decryptDiv = document.getElementById("decryptionHTML");

  encryptDiv.style.display = "block";
  decryptDiv.style.display = "none";
}

function collectAndSendInputsEncrypt(){
  currEncryptionLevel = encryptionLevel.value;
  switch (currEncryptionLevel){
    case "1":
      encryptionLevelOne(inputTextEncrypt.value);
      break;
    case "2":
      encryptionLevelTwo(inputTextEncrypt.value);
      break;
    case "3":
      encryptionLevelThree(inputTextEncrypt.value);
      break;
    default:
      outputTextEncrypt.innerHTML = "Please select a encryption level.";
  }
}

function collectAndSendInputsDecrypt(){
  currDecryptionLevel = decryptionLevel.value;
  switch (currDecryptionLevel){
    case "1":
      decryptionLevelOne(inputTextDecrypt.value);
      break;
    case "2":
      decryptionLevelTwo(inputTextDecrypt.value);
      break;
    case "3":
      decryptionLevelThree(inputTextDecrypt.value);
      break;
    default:
      outputTextDecrypt.innerHTML = "Please select a decryption level.";
  }
}

function encryptionLevelOne(input) {
  let outputArray = input.split('');
  for(let i = 0; i < outputArray.length; i++){
    switch(outputArray[i]){
      case "a":
        outputArray[i] = "c";
      break;
      case "b":
        outputArray[i] = "d"; 
      break;
      case "c":
        outputArray[i] = "e"; 
      break;
      case "d":
        outputArray[i] = "f"; 
      break;
      case "e":
        outputArray[i] = "g";    
      break;
      case "f":
        outputArray[i] = "h";    
      break;
      case "g":
        outputArray[i] = "i";    
      break;
      case "h":
        outputArray[i] = "j";     
      break;
      case "i":
        outputArray[i] = "k";     
      break;
      case "j":
        outputArray[i] = "l";    
      break;
      case "k":
        outputArray[i] = "m";    
      break;
      case "l":
        outputArray[i] = "n";    
      break;
      case "m":
        outputArray[i] = "o";     
      break;
      case "n":
        outputArray[i] = "p";     
      break;
      case "o":
        outputArray[i] = "q";    
      break;
      case "p":
        outputArray[i] = "r";    
      break;
      case "q":
        outputArray[i] = "s";   
      break;
      case "r":
        outputArray[i] = "t";     
      break;
      case "s":
        outputArray[i] = "u";    
      break;
      case "t":
        outputArray[i] = "v";    
      break;
      case "u":
        outputArray[i] = "w";    
      break;
      case "v":
        outputArray[i] = "x";   
      break;
      case "w":
        outputArray[i] = "y";   
      break;
      case "x":
        outputArray[i] = "z";    
      break;
      case "y":
        outputArray[i] = "a";   
      break;
      case "z":
        outputArray[i] = "b";    
      break;
    }
  }
  outputTextEncrypt.innerHTML = outputArray.join('');
}

function encryptionLevelTwo(input) {
  let outputArray = input.split('');
  for(let i = 0; i < outputArray.length; i++){
    switch(outputArray[i]){
      case "a":
        outputArray[i] = "0";
      break;
      case "b":
        outputArray[i] = "2"; 
      break;
      case "c":
        outputArray[i] = "3"; 
      break;
      case "d":
        outputArray[i] = "4"; 
      break;
      case "e":
        outputArray[i] = "5";    
      break;
      case "f":
        outputArray[i] = "6";    
      break;
      case "g":
        outputArray[i] = "7";    
      break;
      case "h":
        outputArray[i] = "8";     
      break;
      case "i":
        outputArray[i] = "9";     
      break;
      case "j":
        outputArray[i] = "a";    
      break;
      case "k":
        outputArray[i] = "b";    
      break;
      case "l":
        outputArray[i] = "c";    
      break;
      case "m":
        outputArray[i] = "d";     
      break;
      case "n":
        outputArray[i] = "e";     
      break;
      case "o":
        outputArray[i] = "f";    
      break;
      case "p":
        outputArray[i] = "g";    
      break;
      case "q":
        outputArray[i] = "h";   
      break;
      case "r":
        outputArray[i] = "i";     
      break;
      case "s":
        outputArray[i] = "j";    
      break;
      case "t":
        outputArray[i] = "k";    
      break;
      case "u":
        outputArray[i] = "l";    
      break;
      case "v":
        outputArray[i] = "m";   
      break;
      case "w":
        outputArray[i] = "n";   
      break;
      case "x":
        outputArray[i] = "o";    
      break;
      case "y":
        outputArray[i] = "p";   
      break;
      case "z":
        outputArray[i] = "q";    
      break;
      case "1":
        outputArray[i] = "r";     
      break;
      case "2":
        outputArray[i] = "s";    
      break;
      case "3":
        outputArray[i] = "t";    
      break;
      case "4":
        outputArray[i] = "u";    
      break;
      case "5":
        outputArray[i] = "v";   
      break;
      case "6":
        outputArray[i] = "w";   
      break;
      case "7":
        outputArray[i] = "x";    
      break;
      case "8":
        outputArray[i] = "y";   
      break;
      case "9":
        outputArray[i] = "z";    
      break;
      case "0":
        outputArray[i] = "1";    
      break;
    }
  }
  outputTextEncrypt.innerHTML = outputArray.join('');
}

function encryptionLevelThree(input) {
  let outputArray = input.split('');
  for(let i = 0; i < outputArray.length; i++){
    switch(outputArray[i]){
      case "a":
        outputArray[i] = "_";
      break;
      case "b":
        outputArray[i] = "k"; 
      break;
      case "c":
        outputArray[i] = "A"; 
      break;
      case "d":
        outputArray[i] = "s"; 
      break;
      case "e":
        outputArray[i] = "W";    
      break;
      case "f":
        outputArray[i] = "g";    
      break;
      case "g":
        outputArray[i] = "f";    
      break;
      case "h":
        outputArray[i] = ",";     
      break;
      case "i":
        outputArray[i] = "m";     
      break;
      case "j":
        outputArray[i] = "`";    
      break;
      case "k":
        outputArray[i] = "b";    
      break;
      case "l":
        outputArray[i] = '"';    
      break;
      case "m":
        outputArray[i] = "i";     
      break;
      case "n":
        outputArray[i] = "w";     
      break;
      case "o":
        outputArray[i] = "'";    
      break;
      case "p":
        outputArray[i] = "&";    
      break;
      case "q":
        outputArray[i] = "*";   
      break;
      case "r":
        outputArray[i] = "9";     
      break;
      case "s":
        outputArray[i] = "d";    
      break;
      case "t":
        outputArray[i] = "[";    
      break;
      case "u":
        outputArray[i] = "L";    
      break;
      case "v":
        outputArray[i] = "~";   
      break;
      case "w":
        outputArray[i] = "n";   
      break;
      case "x":
        outputArray[i] = "z";    
      break;
      case "y":
        outputArray[i] = "E";   
      break;
      case "z":
        outputArray[i] = "x";    
      break;
      case "1":
        outputArray[i] = "V";     
      break;
      case "2":
        outputArray[i] = "F";    
      break;
      case "3":
        outputArray[i] = "!";    
      break;
      case "4":
        outputArray[i] = "G";    
      break;
      case "5":
        outputArray[i] = "D";   
      break;
      case "6":
        outputArray[i] = "U";   
      break;
      case "7":
        outputArray[i] = "T";    
      break;
      case "8":
        outputArray[i] = "|";   
      break;
      case "9":
        outputArray[i] = "r";    
      break;
      case "0":
        outputArray[i] = "?";    
      break;
      case "`":
        outputArray[i] = "j";     
      break;
      case "~":
        outputArray[i] = "v";    
      break;
      case "!":
        outputArray[i] = "3";    
      break;
      case "@":
        outputArray[i] = "\\";    
      break;
      case "#":
        outputArray[i] = "=";   
      break;
      case "$":
        outputArray[i] = "]";   
      break;
      case "%":
        outputArray[i] = "(";    
      break;
      case "^":
        outputArray[i] = "b";   
      break;
      case "&":
        outputArray[i] = "p";    
      break;
      case "*":
        outputArray[i] = "q";    
      break;
      case "(":
        outputArray[i] = "%";     
      break;
      case ")":
        outputArray[i] = "R";    
      break;
      case "-":
        outputArray[i] = "M";    
      break;
      case "_":
        outputArray[i] = "a";    
      break;
      case "=":
        outputArray[i] = "#";   
      break;
      case "+":
        outputArray[i] = "P";   
      break;
      case "[":
        outputArray[i] = "t";    
      break;
      case "{":
        outputArray[i] = ";";   
      break;
      case "]":
        outputArray[i] = "$";    
      break;
      case "}":
        outputArray[i] = "J";    
      break;
      case "\\":
        outputArray[i] = "@";     
      break;
      case "|":
        outputArray[i] = "8";    
      break;
      case ";":
        outputArray[i] = "{";    
      break;
      case ":":
        outputArray[i] = "H";    
      break;
      case "'":
        outputArray[i] = "o";   
      break;
      case '"':
        outputArray[i] = "l";   
      break;
      case ",":
        outputArray[i] = "h";    
      break;
      case "<":
        outputArray[i] = ">";   
      break;
      case ".":
        outputArray[i] = "O";    
      break;
      case ">":
        outputArray[i] = "<";    
      break;
      case "/":
        outputArray[i] = "I";     
      break;
      case "?":
        outputArray[i] = "0";    
      break;
      case "A":
        outputArray[i] = "c";    
      break;
      case "B":
        outputArray[i] = "^";    
      break;
      case "C":
        outputArray[i] = "Y";   
      break;
      case "D":
        outputArray[i] = "5";   
      break;
      case "E":
        outputArray[i] = "y";    
      break;
      case "F":
        outputArray[i] = "2";   
      break;
      case "G":
        outputArray[i] = "4";    
      break;
      case "H":
        outputArray[i] = ":";    
      break;
      case "I":
        outputArray[i] = "/";     
      break;
      case "J":
        outputArray[i] = "}";    
      break;
      case "K":
        outputArray[i] = "Z";    
      break;
      case "L":
        outputArray[i] = "u";    
      break;
      case "M":
        outputArray[i] = "-";   
      break;
      case "N":
        outputArray[i] = "Q";   
      break;
      case "O":
        outputArray[i] = ".";    
      break;
      case "P":
        outputArray[i] = "+";   
      break;
      case "Q":
        outputArray[i] = "N";    
      break;
      case "R":
        outputArray[i] = ")";    
      break;
      case "S":
        outputArray[i] = "X";     
      break;
      case "T":
        outputArray[i] = "7";    
      break;
      case "U":
        outputArray[i] = "6";    
      break;
      case "V":
        outputArray[i] = "1";    
      break;
      case "W":
        outputArray[i] = "e";   
      break;
      case 'X':
        outputArray[i] = "S";   
      break;
      case "Y":
        outputArray[i] = "C";    
      break;
      case "Z":
        outputArray[i] = "K";   
      break;
    }
  }
  outputTextEncrypt.innerHTML = outputArray.join('');
}
function decryptionLevelOne(input) {
  let outputArray = input.split('');
  for(let i = 0; i < outputArray.length; i++){
    switch(outputArray[i]){
      case "c":
        outputArray[i] = "a";
      break;
      case "d":
        outputArray[i] = "b"; 
      break;
      case "e":
        outputArray[i] = "c"; 
      break;
      case "f":
        outputArray[i] = "d"; 
      break;
      case "g":
        outputArray[i] = "e";    
      break;
      case "h":
        outputArray[i] = "f";    
      break;
      case "i":
        outputArray[i] = "g";    
      break;
      case "j":
        outputArray[i] = "h";     
      break;
      case "k":
        outputArray[i] = "i";     
      break;
      case "l":
        outputArray[i] = "j";    
      break;
      case "m":
        outputArray[i] = "k";    
      break;
      case "n":
        outputArray[i] = "l";    
      break;
      case "o":
        outputArray[i] = "m";     
      break;
      case "p":
        outputArray[i] = "n";     
      break;
      case "q":
        outputArray[i] = "o";    
      break;
      case "r":
        outputArray[i] = "p";    
      break;
      case "s":
        outputArray[i] = "q";   
      break;
      case "t":
        outputArray[i] = "r";     
      break;
      case "u":
        outputArray[i] = "s";    
      break;
      case "v":
        outputArray[i] = "t";    
      break;
      case "w":
        outputArray[i] = "u";    
      break;
      case "x":
        outputArray[i] = "v";   
      break;
      case "y":
        outputArray[i] = "w";   
      break;
      case "z":
        outputArray[i] = "x";    
      break;
      case "a":
        outputArray[i] = "y";   
      break;
      case "b":
        outputArray[i] = "z";    
      break;
    }
  }
  outputTextDecrypt.innerHTML = outputArray.join('');
}

function decryptionLevelTwo(input) {
  let outputArray = input.split('');
  for(let i = 0; i < outputArray.length; i++){
    switch(outputArray[i]){
      case "0":
        outputArray[i] = "a";
      break;
      case "2":
        outputArray[i] = "b"; 
      break;
      case "3":
        outputArray[i] = "c"; 
      break;
      case "4":
        outputArray[i] = "d"; 
      break;
      case "5":
        outputArray[i] = "e";    
      break;
      case "6":
        outputArray[i] = "f";    
      break;
      case "7":
        outputArray[i] = "g";    
      break;
      case "8":
        outputArray[i] = "h";     
      break;
      case "9":
        outputArray[i] = "i";     
      break;
      case "a":
        outputArray[i] = "j";    
      break;
      case "b":
        outputArray[i] = "bk";    
      break;
      case "c":
        outputArray[i] = "l";    
      break;
      case "d":
        outputArray[i] = "m";     
      break;
      case "e":
        outputArray[i] = "n";     
      break;
      case "f":
        outputArray[i] = "o";    
      break;
      case "g":
        outputArray[i] = "p";    
      break;
      case "h":
        outputArray[i] = "q";   
      break;
      case "i":
        outputArray[i] = "r";     
      break;
      case "j":
        outputArray[i] = "s";    
      break;
      case "k":
        outputArray[i] = "t";    
      break;
      case "l":
        outputArray[i] = "lu";    
      break;
      case "m":
        outputArray[i] = "v";   
      break;
      case "n":
        outputArray[i] = "w";   
      break;
      case "o":
        outputArray[i] = "x";    
      break;
      case "p":
        outputArray[i] = "y";   
      break;
      case "q":
        outputArray[i] = "z";    
      break;
      case "r":
        outputArray[i] = "1";     
      break;
      case "s":
        outputArray[i] = "2";    
      break;
      case "t":
        outputArray[i] = "3";    
      break;
      case "u":
        outputArray[i] = "4";    
      break;
      case "v":
        outputArray[i] = "5";   
      break;
      case "w":
        outputArray[i] = "6";   
      break;
      case "x":
        outputArray[i] = "7";    
      break;
      case "y":
        outputArray[i] = "8";   
      break;
      case "z":
        outputArray[i] = "9";    
      break;
      case "1":
        outputArray[i] = "0";    
      break;
    }
  }
  outputTextDecrypt.innerHTML = outputArray.join('');
}

function decryptionLevelThree(input) {
  let outputArray = input.split('');
  for(let i = 0; i < outputArray.length; i++){
    switch(outputArray[i]){
      case "_":
        outputArray[i] = "a";
      break;
      case "k":
        outputArray[i] = "b"; 
      break;
      case "A":
        outputArray[i] = "c"; 
      break;
      case "s":
        outputArray[i] = "d"; 
      break;
      case "W":
        outputArray[i] = "e";    
      break;
      case "g":
        outputArray[i] = "f";    
      break;
      case "f":
        outputArray[i] = "g";    
      break;
      case ",":
        outputArray[i] = "h";     
      break;
      case "m":
        outputArray[i] = "i";     
      break;
      case "`":
        outputArray[i] = "j";    
      break;
      case "b":
        outputArray[i] = "k";    
      break;
      case '"':
        outputArray[i] = "l";    
      break;
      case "i":
        outputArray[i] = "m";     
      break;
      case "w":
        outputArray[i] = "n";     
      break;
      case "'":
        outputArray[i] = "o";    
      break;
      case "&":
        outputArray[i] = "p";    
      break;
      case "*":
        outputArray[i] = "q";   
      break;
      case "9":
        outputArray[i] = "r";     
      break;
      case "d":
        outputArray[i] = "s";    
      break;
      case "[":
        outputArray[i] = "t";    
      break;
      case "L":
        outputArray[i] = "u";    
      break;
      case "~":
        outputArray[i] = "v";   
      break;
      case "n":
        outputArray[i] = "w";   
      break;
      case "z":
        outputArray[i] = "x";    
      break;
      case "E":
        outputArray[i] = "y";   
      break;
      case "x":
        outputArray[i] = "z";    
      break;
      case "V":
        outputArray[i] = "1";     
      break;
      case "F":
        outputArray[i] = "2";    
      break;
      case "!":
        outputArray[i] = "3";    
      break;
      case "G":
        outputArray[i] = "4";    
      break;
      case "D":
        outputArray[i] = "5";   
      break;
      case "U":
        outputArray[i] = "6";   
      break;
      case "T":
        outputArray[i] = "7";    
      break;
      case "|":
        outputArray[i] = "8";   
      break;
      case "r":
        outputArray[i] = "9";    
      break;
      case "?":
        outputArray[i] = "0";    
      break;
      case "j":
        outputArray[i] = "`";     
      break;
      case "v":
        outputArray[i] = "~";    
      break;
      case "3":
        outputArray[i] = "!";    
      break;
      case "\\":
        outputArray[i] = "@";    
      break;
      case "=":
        outputArray[i] = "#";   
      break;
      case "]":
        outputArray[i] = "$";   
      break;
      case "(":
        outputArray[i] = "%";    
      break;
      case "b":
        outputArray[i] = "^";   
      break;
      case "p":
        outputArray[i] = "&";    
      break;
      case "q":
        outputArray[i] = "*";    
      break;
      case "%":
        outputArray[i] = "(";     
      break;
      case "R":
        outputArray[i] = ")";    
      break;
      case "M":
        outputArray[i] = "-";    
      break;
      case "a":
        outputArray[i] = "_";    
      break;
      case "#":
        outputArray[i] = "=";   
      break;
      case "P":
        outputArray[i] = "+";   
      break;
      case "t":
        outputArray[i] = "[";    
      break;
      case ";":
        outputArray[i] = "{";   
      break;
      case "$":
        outputArray[i] = "]";    
      break;
      case "J":
        outputArray[i] = "}";    
      break;
      case "@":
        outputArray[i] = "\\";     
      break;
      case "8":
        outputArray[i] = "|";    
      break;
      case "{":
        outputArray[i] = ";";    
      break;
      case "H":
        outputArray[i] = ":";    
      break;
      case "o":
        outputArray[i] = "'";   
      break;
      case "l":
        outputArray[i] = '"';   
      break;
      case "h":
        outputArray[i] = ",";    
      break;
      case ">":
        outputArray[i] = "<>>";   
      break;
      case "O":
        outputArray[i] = ".";    
      break;
      case "<":
        outputArray[i] = ">";    
      break;
      case "I":
        outputArray[i] = "/";     
      break;
      case "0":
        outputArray[i] = "?";    
      break;
      case "c":
        outputArray[i] = "A";    
      break;
      case "^":
        outputArray[i] = "B";    
      break;
      case "Y":
        outputArray[i] = "C";   
      break;
      case "5":
        outputArray[i] = "D";   
      break;
      case "y":
        outputArray[i] = "E";    
      break;
      case "2":
        outputArray[i] = "F";   
      break;
      case "4":
        outputArray[i] = "G";    
      break;
      case ":":
        outputArray[i] = "H";    
      break;
      case "/":
        outputArray[i] = "I";     
      break;
      case "}":
        outputArray[i] = "J";    
      break;
      case "Z":
        outputArray[i] = "K";    
      break;
      case "u":
        outputArray[i] = "L";    
      break;
      case "-":
        outputArray[i] = "M";   
      break;
      case "Q":
        outputArray[i] = "N";   
      break;
      case ".":
        outputArray[i] = "O";    
      break;
      case "+":
        outputArray[i] = "P";   
      break;
      case "N":
        outputArray[i] = "Q";    
      break;
      case ")":
        outputArray[i] = "R";    
      break;
      case "X":
        outputArray[i] = "S";     
      break;
      case "7":
        outputArray[i] = "T";    
      break;
      case "6":
        outputArray[i] = "U";    
      break;
      case "1":
        outputArray[i] = "V";    
      break;
      case "e":
        outputArray[i] = "W";   
      break;
      case 'S':
        outputArray[i] = "X";   
      break;
      case "C":
        outputArray[i] = "Y";    
      break;
      case "K":
        outputArray[i] = "Z";   
      break;
    }
  }
  outputTextDecrypt.innerHTML = outputArray.join('');
}
