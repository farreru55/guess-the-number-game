// Angka Random
var bot = Math.round(Math.random() * 10 + 1);
if (bot == 11 || bot == 0) {
  bot = Math.round(Math.random() * 10);
} else {
  bot = Math.round(Math.random() * 10 + 1);
}

var hasil = "";
infi: for (var i = 5; i >= 0; i++) {
  var hello = alert("Selamat datang di permainan tebak angka");
  sel: for (var j = 3; j >= 1; j--) {
    var chan = j;
    if (j == 3) {
      var selnum = parseInt(
        prompt("Pilih dari angka 1 - 10! \nkamu punya " + chan + " kesempatan")
      );
    } else if (j == 2 || j == 1) {
      var selnum = parseInt(
        prompt("Pilih dari angka 1 - 10! \nkesempatanmu sisa " + chan)
      );
    }
    ans: for (var k = j; k >= 1; k--) {
      if (selnum == bot) {
        hasil = "benar";
        alert("Selamat jawabanmu " + hasil);
        break sel;
      } else if (selnum < bot) {
        hasil = "terlalu kecil";
        alert("Jawabanmu " + hasil);
        break ans;
      } else if (selnum > bot) {
        hasil = "terlalu besar";
        alert("Jawabanmu " + hasil);
        break ans;
      }
    }
  }
  if (selnum == bot) {
    var con = confirm("Apakah kamu ingin bermain lagi?");
    if (con == false) {
      alert("Terima kasih telah bermain");
      break infi;
    } else {
      window.location.reload();
    }
  } else {
    alert("Kesempatanmu telah habis \njawaban yang tepat adalah " + bot);
    var con = confirm("Apakah kamu ingin bermain lagi?");
    if (con == false) {
      alert("Terima kasih telah bermain");
      break infi;
    } else {
      window.location.reload();
    }
  }
}
// console.log(bot);
