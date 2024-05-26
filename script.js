// Angka Random
var bot = Math.round(Math.random() * 10 + 1);
if (bot == 11 || bot == 0) {
  bot = Math.round(Math.random() * 10);
} else {
  bot = Math.round(Math.random() * 10 + 1);
}

var hasil = "";
infi: for (var i = 5; i >= 0; i++) {
  var hello = alert("Welcome to guess the number game!");
  sel: for (var j = 3; j >= 1; j--) {
    var chan = j;
    if (j == 3) {
      var selnum = parseInt(
        prompt("Choose number between 1 and 10 \nyou have " + chan + " chances")
      );
    } else if (j == 2 || j == 1) {
      var selnum = parseInt(
        prompt("Choose number between 1 and 10 \nyou have " + chan  + " chances left")
      );
    }
    ans: for (var k = j; k >= 1; k--) {
      if (selnum == bot) {
        result = "correct";
        alert("Congratulations! your answer is " + result);
        break sel;
      } else if (selnum < bot) {
        result = "too small";
        alert("your answer is " + result);
        break ans;
      } else if (selnum > bot) {
        result = "too big";
        alert("your answer is " + result);
        break ans;
      } else {
        alert("Invalid input");
        break ans;
      }
    }
  }
  if (selnum == bot) {
    var con = confirm("Do you want to play again?");
    if (con == false) {
      alert("Thank you for playing");
      break infi;
    } else {
      window.location.reload();
    }
  } else {
    alert("Your chance is over \nthe correct answer is " + bot);
    var con = confirm("Do you want to play again?");
    if (con == false) {
      alert("Thank you for playing");
      break infi;
    } else {
      window.location.reload();
    }
  }
}
// console.log(bot);
