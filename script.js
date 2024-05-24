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
  sel: for (var j = 0; j < 3; j++) {
    var selnum = parseInt(
      prompt("Pilih dari angka 1 - 10! \nkamu punya 3 kesempatan")
    );
    ans: for (var k = j; k < 3; k++) {
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
      alert("Terima kasih telah bermain")
      break infi;
    }
  } else {
    alert("Kesempatanmu telah habis \njawaban yang tepat adalah " + bot);
  }

  // for (var k = j; k < 2; k++) {
  //   if (selnum < bot) {
  //     hasil = "terlalu kecil";
  //     prompt("Jawabanmu " + hasil);
  //   } else if (selnum > bot) {
  //     hasil = "terlalu besar";
  //     prompt("Jawabanmu " + hasil);
  //   }
  // }
}

// else if (selnum < bot) {
//   hasil = "terlalu kecil";
//   for (var k = j; k < 3; k++) {
//     if (k == 1) {
//       k += 1;
//       prompt("Jawaban kamu " + hasil + "\nsisa kesempatanmu 2");
//     } else {
//       prompt("Jawaban kamu " + hasil + "\nsisa kesempatanmu 1");
//     }
//   }
// } else if (selnum > bot) {
//   hasil = "terlalu besar";
//   for (var l = j; l < 3; l++) {
//     if (l == 1) {
//         l += 1;
//         prompt("Jawaban kamu " + hasil + "\nsisa kesempatanmu 2");
//       } else {
//         prompt("Jawaban kamu " + hasil + "\nsisa kesempatanmu 1");
//       }
//   }
// }
//  else {
//   alert("WAH");
// }

//   if (selnum != bot) {
//     alert("Yang benar jawabannya adalah " + bot);
//   }
//   var i = confirm("Apakah kamu ingin bermain lagi?");
//   if (i == false) {
//     break infi;
//   }

// var hasil = "";
// ques: for (var j = 5; j >= 0; j--) {
//     // Pilih angka
//     var selnum = parseInt(prompt("Pilih dari angka 1 - 10! \nkamu punya 3 kesempatan"));

//     // Rules
//     rules: for (var i = 0; i < 3; i++) {
//         if (selnum == bot) {
//             hasil = "benar";
//             alert("Selamat jawabanmu " + hasil);
//             var i = confirm("Mau main lagi?");
//             if(i == false) {
//                 break ques;
//             }
//         } else if (selnum < bot) {
//             hasil = "terlalu kecil";
//             if (i == 0 || i == 1) {
//                 alert("Jawabanmu " + hasil + "\nkesempatanmu tinggal 2")
//             } else {
//                 alert("Jawabanmu " + hasil + "\nkesempatanmu tinggal 1")
//             }
//         } else if (selnum > bot) {
//             hasil = "terlalu besar";
//             if (i == 0) {
//                alert("Jawabanmu " + hasil + "\nkesempatanmu tinggal 2");
//             } else if (i == 1) {
//                 alert("Jawabanmu " + hasil + "\nkesempatanmu tinggal 1");
//             } else {
//                 alert("GAGAGA");
//             }
//         } else {
//             hasil = "Pilih yang benar";
//         }
//     }

//     // alert("Jawabanmu " + hasil);
// }
// if (selnum == bot) {
//     alert("Terima kasih telah bermain");
// } else {
//     alert("Silahkan coba lagi \njawaban yang tepat adalah " + bot);
// }

// console.log(bot);
