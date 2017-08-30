var startScreen = document.getElementById("startscreen");
var startBtn = document.getElementById("start");
var backBtn = document.getElementById("back");
var backBtn2 = document.getElementById("back2");
var errormsg = document.getElementById("errormsg");
var input = document.getElementById("input");
var output = document.getElementById("output");
var result = document.getElementById("result");
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var punctuation = [",", ";", ".","-","_", "/","!","?"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var others = ["@", "#", "$", "%", "^", "&", "*", "+"];

function makePassword(passLength) {
  var random1, random2, random3, random4, random5, isUpperLower;
  var password = "";
  var currentNum = 0;
  while (currentNum < passLength) {
    currentNum++
    random1 = Math.ceil(Math.random() * 4);
    console.log(random1 + " Test")
    if (random1 == 1) {
      random2 = Math.round(Math.random() * (letters.length - 1));
      isUpperLower = Math.round(Math.random() * 2);
      if (isUpperLower == 1) {
         password += letters[random2].toUpperCase();
      }
      else {
        password += letters[random2];
      }
      console.log(letters.length);
      console.log(1);
      console.log(letters[random2] + " " + random2);
    }
    else if (random1 == 2) {
      random3 = Math.round(Math.random() * (punctuation.length - 1));
      password += punctuation[random3];
      console.log(punctuation.length);
      console.log(2);
      console.log(punctuation[random3] + " " + random3);
    }
    else if (random1 == 3) {
      random4 = Math.round(Math.random() * (numbers.length - 1));
      password += numbers[random4];
      console.log(numbers.length);
      console.log(3);
      console.log(numbers[random4] + " " + random4);
    }
    else if (random1 == 4) {
      random5 = Math.round(Math.random() * (others.length - 1));
      password += others[random5];
      console.log(others.length);
      console.log(4);
      console.log(others[random5] + " " + random5);
    }
    console.log("Current:" + " " + currentNum)
  }
  return password;
}
startBtn.addEventListener("click", function() {
  if (isNaN(input.value)) {
    startScreen.classList.add("leave");
    startScreen.classList.remove("join");
    input.value = "";
    setTimeout(function() {
       errormsg.style.display = "block";
    }, 500);
  }
  else {
    output.innerHTML = makePassword(input.value);
    input.value = "";
    startScreen.classList.add("leave");
    startScreen.classList.remove("join");
    setTimeout(function() {
       result.style.display = "block";
    }, 500);
  }
});
input.addEventListener("keyup",function() {
  if(input.value.length > 0) {
    startBtn.style.display = "inline";
  }
  else {
    startBtn.style.display = "none";
  }
});
backBtn.addEventListener("click", function() {
  errormsg.style.display = "none";
  startScreen.classList.remove("leave");
  startScreen.classList.add("join");
});
backBtn2.addEventListener("click", function() {
  result.style.display = "none";
  startScreen.classList.remove("leave");
  startScreen.classList.add("join");
  input.focus();
});
