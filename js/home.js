$(document).ready(function() {


 // if (isSafari()) {
 //  console.log("SA FA RI");


 //  return;
 // }


 if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false,
        smoothScrolling: false
    });
}

  /* Intialize Skrollr */
  // skrollr.init({
  //   offset: function() {
  //     var width = screen.width;
  //     var offset;

  //     if (width > 800) {
  //       offset = 700;
  //     } else if (width > 600) {
  //       offset = 2215;
  //     } else if (width > 400) {
  //       offset = 2115;
  //     }

  //     return offset;
  //   }
  // });

  /* Initialize WOW.js */
  new WOW().init();
});

function isSafari() {
    return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}