$(document).ready(function() {

  var timeDuration = 150;

  $(".story-animation-arena.dataviz").mouseover(function() {

    interval = setInterval(function() {
      var items = ['l', 'd', 'm'];
      for (n = 1; n < 10; n++) {
        $(".story-animation-arena.dataviz").find(".tiny-square." + n).removeClass(function(index, className) {
          return (className.match(/[a-z][-]green/g)[0]);
        }).addClass(items[Math.floor(Math.random() * items.length)] + "-green");
      }
    }, timeDuration)

  }).mouseout(function() {
    clearInterval(interval);
  })


  $(".story-animation-arena.wikimedia").mouseover(function() {

    interval = setInterval(function() {
      var items = ['l', 'd', 'm'];
      for (n = 1; n < 10; n++) {
        $(".story-animation-arena.wikimedia").find(".tiny-square." + n).removeClass(function(index, className) {
          return (className.match(/[a-z][-]red/g)[0]);
        }).addClass(items[Math.floor(Math.random() * items.length)] + "-red");
      }
    }, timeDuration)

  }).mouseout(function() {
    clearInterval(interval);
  })

  $(".story-animation-arena.sprinklr").mouseover(function() {

    interval = setInterval(function() {
      var items = ['l', 'd', 'm'];
      for (n = 1; n < 10; n++) {
        $(".story-animation-arena.sprinklr").find(".tiny-square." + n).removeClass(function(index, className) {
          return (className.match(/[a-z][-]blue/g)[0]);
        }).addClass(items[Math.floor(Math.random() * items.length)] + "-blue");
      }
    }, timeDuration)

  }).mouseout(function() {
    clearInterval(interval);
  })

  $(".story-animation-arena.internships").mouseover(function() {

    interval = setInterval(function() {
      var items = ['l', 'd', 'm'];
      for (n = 1; n < 10; n++) {
        $(".story-animation-arena.internships").find(".tiny-square." + n).removeClass(function(index, className) {
          return (className.match(/[a-z][-]violet/g)[0]);
        }).addClass(items[Math.floor(Math.random() * items.length)] + "-violet");
      }
    }, timeDuration)

  }).mouseout(function() {
    clearInterval(interval);
  })






});