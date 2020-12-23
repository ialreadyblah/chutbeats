var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;

var dice1 = document.getElementsByTagName("i")[2];
var dice2 = document.getElementsByTagName("i")[4];

function roll() {
   var removeHidden = document.querySelector("h3").classList.remove("hidden");
   document.getElementById("dice1").setAttribute("src", `/img/dice-${a}.svg`);
   document.getElementById("dice2").setAttribute("src", `/img/dice-${b}.svg`);

   if (a === b) {
      removeHidden;
   } else if (a > b) {
      document.getElementById("flag1").classList.remove("hidden");
      document.querySelectorAll("h2")[0].classList.add("winner");
      removeHidden;
      document.querySelector("h3").innerHTML = "Player One Win";
   } else {
      document.getElementById("flag2").classList.remove("hidden");
      document.querySelectorAll("h2")[1].classList.add("winner");
      removeHidden;
      document.querySelector("h3").innerHTML = "Player Two Win";
   }
}

roll();
