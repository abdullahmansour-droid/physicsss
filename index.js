$(".fa-atom").click(function () {
  $("#popup").slideToggle(500);
  $("#popup").css({ display: "flex" });
});

// let x = 0;
// $("#button_1").click(function () {
//   $("#loader").show("600");
//   if ((x == 0)) {
//     let z = setInterval(() => {
//       x++;
//       $("#start").text(x);
//       if (x >= 100) {
//         clearInterval(z);
//         setTimeout(()=>{
//           window.open("https://www.google.com.eg/?hl=ar");
//         } , 1000)
//       }
//     }, 100);
//   }
// });

let x = 0;
$("#button_1").click(function () {
  $("#loader").show("600");
  if (x == 0) {
    let z = setInterval(() => {
      x++;
      $("#start").text(x);
      if (x >= 100) {
        $("#start").text("finished");
        $("#start").css({ backgroundColor: "black" });
        clearInterval(z);
        $("#wrapper").css({ display: "flex" });
        $("iframe").attr(
          "src",
          "https://www.youtube.com/embed/nrckAxCjtUc?si=0qhF6S9nwAc44_W-"
        );
      }
    }, 100);
  }
});

$("#cancel").click(function () {
  $("#loader").hide("600");
});
