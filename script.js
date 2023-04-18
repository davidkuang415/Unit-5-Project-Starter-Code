let fbutton = document.querySelector(".fbutton")
let question2 = document.querySelector(".question2")
let result = document.querySelector(".result")
let question = document.querySelector(".questions")
let part2 = document.querySelector(".part2")
let button2 = document.querySelector(".button2")
let title = document.querySelector(".title")
let inputValue1 = ''
let inputValue2 = ''
let inputValue3 = ''
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let agentnameresult = document.querySelector(".agentnameresult");
let kayo = document.querySelector(".kayo")
let jett = document.querySelector(".jett")
let sova = document.querySelector(".sova")
let chamber = document.querySelector(".chamber")
let group = document.querySelector(".group")
let begin = document.querySelector(".begin")
let button3 = document.querySelector(".button3")
let question3 = document.querySelector(".question3")
let question3input = document.querySelector(".question3input")
let calendar = document.querySelector(".calendar")



window.onload = function() {
  question2.style.display = "none";
  result.style.display = "none";
  part2.style.display = "none";
  jett.style.display = "none";
  chamber.style.display = "none";
  sova.style.display = "none";
  kayo.style.display = "none";
  question.style.display = "none";
  question3.style.display = "none";
  button3.style.display = "none";
  question3input.style.display = "none";
  calendar.style.display = "none";
}

begin.onclick = function () {
  question.style.display = "block";
  group.style.display = "none";
  begin.style.display = "none";
}

fbutton.onclick = function() {
  inputValue1 = input1.value;
  if (inputValue1 === "Chaotic" || inputValue1 === "Adventurous" || inputValue1 === "chaotic" || inputValue1 === "adventurous") {
  question2.style.display = "block";
  question.style.display = "none";
  result.style.display = "none";
  part2.style.display = "block";
  agentnameresult.innerHTML = "";
  } else if (inputValue1 !== "Chaotic" || inputValue1 !== "Adventurous" || inputValue1 !== "chaotic" || inputValue1 !== "adventurous") {
    agentnameresult.innerHTML = "Please check your spelling"
  } 
}

button2.onclick = function() {
  inputValue2 = input2.value;
  if (inputValue2 === "Action" || inputValue2 === "Relaxation" || inputValue2 === "action" || inputValue2 === "relaxation") {
  question.style.display = "none";
  question2.style.display = "none";
  part2.style.display = "none";
  title.style.display = "block";
  result.style.display = "none";
  button3.style.display= "block";
  question3.style.display = "block";
  question3input.style.display = "block";
  calendar.style.display = "block";
  } else if (inputValue2 !== "action" || inputValue2 !== "relaxation" || inputValue2 !== "Action" || inputValue2 !== "Relaxation") {
    agentnameresult.innerHTML = "Please check your spelling"
}
}

button3.onclick = function(){
  inputValue3 = question3input.value;
  inputValue3 = Number(inputValue3)
  if (inputValue3 >= 13 || inputValue3 <= 0) {
    agentnameresult.innerHTML = "Enter a Valid Number"
  } else if (inputValue3 >= 1 && inputValue3 <= 12) {
  button3.style.display = "none";
  question3.style.display = "none";
  calendar.style.display = "none";
  question3input.style.display = "none";
    if (inputValue1 === "Chaotic" || inputValue2 === "Action" || inputValue1 === "chaotic" && inputValue2 === "action") {
    agentnameresult.innerHTML = "Jett";
    jett.style.display = "block";
    } if (inputValue1 === "Adventurous" && inputValue2 === "Action" || inputValue1 === "adventurous" && inputValue2 === "action" || inputValue1 === "Adventurous" && inputValue2 ==="action" || inputValue1 === "adventurous" && inputValue2 === "Action") {
    agentnameresult.innerHTML = "Sova";
    sova.style.display = "block";
    } if (inputValue1 === "Chaotic" && inputValue2 === "Relaxation" || inputValue1 === "chaotic" && inputValue2 === "relaxation" || inputValue1 === "Chaotic" && inputValue2 === "relaxation" || inputValue1 === "chaotic" && inputValue2 === "Relaxation") {
    agentnameresult.innerHTML = "Chamber";
    chamber.style.display = "block";
    } if (inputValue1 === "Adventurous" && inputValue2 === "Relaxation" || inputValue1 === "adventurous" && inputValue2 === "relaxation" || inputValue1 === "Adventurous" && inputValue2 === "relaxation" || inputValue1 === "adventurous" && inputValue2 === "Relaxation") {
    agentnameresult.innerHTML = "KAY/O";
    kayo.style.display = "block";
  }
  }
}




      
//   } else if (inputValue1 === "Chaotic" || inputValue2 === "Action" || inputValue1 === "chaotic" && inputValue2 === "action") {
//     agentnameresult.innerHTML = "Jett";
//     jett.style.display = "block";
//   } else if (inputValue1 === "Adventurous" && inputValue2 === "Action" || inputValue1 === "adventurous" && inputValue2 === "action" || inputValue1 === "Adventurous" && inputValue2 ==="action" || inputValue1 === "adventurous" && inputValue2 === "Action") {
//     agentnameresult.innerHTML = "Sova";
//     sova.style.display = "block";
//   } else if (inputValue1 === "Chaotic" && inputValue2 === "Relaxation" || inputValue1 === "chaotic" && inputValue2 === "relaxation" || inputValue1 === "Chaotic" && inputValue2 === "relaxation" || inputValue1 === "chaotic" && inputValue2 === "Relaxation") {
//     agentnameresult.innerHTML = "Chamber";
//     chamber.style.display = "block";
//   } else if (inputValue1 === "Adventurous" && inputValue2 === "Relaxation" || inputValue1 === "adventurous" && inputValue2 === "relaxation" || inputValue1 === "Adventurous" && inputValue2 === "relaxation" || inputValue1 === "adventurous" && inputValue2 === "Relaxation") {
//     agentnameresult.innerHTML = "KAY/O";
//     kayo.style.display = "block";
//   }
// }