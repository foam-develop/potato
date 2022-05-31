
  $( document ).ready(function() {
  
   
    $('.close').click(function(){
        $('.image').css({opacity: 0.0, visibility: "visible"}).delay(100).animate({opacity: 1.0}, 800);
        $('.text').css({opacity: 0.0, visibility: "visible"}).delay(100).animate({opacity: 1.0}, 800);
    });


      
 
        // $(' .question-mark-animation ').css({opacity: 0.0, visibility: "visible"}).delay(2400).animate({opacity: 1.0}, 800);


        $('.nextPage1, .nextPage2').click(function(){
          $('.digging').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 600);
          $('.digging-end').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 600);

        });

        $(".info-ctn").click(function(){
            $('.info-ctn-content').removeClass("none");

        });

        $(".close").click(function(){
            $('.info-ctn-content').addClass("none");

        });

        $("#info-ctn-end").click(function(){
            $('#info-ctn-content-end').addClass("visible");

        });

        $(".close").click(function(){
            $('#info-ctn-content-end').removeClass("visible");

        });
  
  })

  // jquery ended above




  window.onload = function hello(){ 
     
      
    // the sounds playing code
  function play_single_sound(target) {
    document.getElementById(target).play();
}

function newPage(url) {
    location.href = url;
}

function playThenRedirectTo(audioTarget, url) {
    var time = 0;

    play_single_sound(audioTarget);

    setInterval(function () {
        var end = document.getElementById(audioTarget).played.end(0);
        if (end > time) {
            time = end;
        } else {
            newPage(url);
        }
    }, 100);
}

document.querySelector('.nextPage1').onclick = function (evt) {
    evt = evt || window.event;

    playThenRedirectTo('audiotag', this.href);
    
    // prevent the link from being followed, until we want to later on
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}


document.querySelector('.nextPage2').onclick = function (evt) {
    evt = evt || window.event;

    playThenRedirectTo('audiotag', this.href);
    
    // prevent the link from being followed, until we want to later on
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}


}

  


const appHeight = () => document.documentElement.style.setProperty('--app-height', '${window.innerHeight}px')
window.addEventListener('resize', appHeight)
appHeight()



//to end page
 function end(){ 
     
    
    // the sounds playing code
  function play_single_sound(target) {
    document.getElementById(target).play();
}

function newPage(url) {
    location.href = url;
}

function playThenRedirectTo(audioTarget, url) {
    var time = 0;

    play_single_sound(audioTarget);

    setInterval(function () {
        var end = document.getElementById(audioTarget).played.end(0);
        if (end > time) {
            time = end;
        } else {
            newPage(url);
        }
    }, 1500);
}

document.querySelector('.nextPage1').onclick = function (evt) {
    evt = evt || window.event;

    playThenRedirectTo('audiotag2', this.href);
    
    // prevent the link from being followed, until we want to later on
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}


document.querySelector('.nextPage2').onclick = function (evt) {
    evt = evt || window.event;

    playThenRedirectTo('audiotag2', this.href);
    
    // prevent the link from being followed, until we want to later on
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}



}
// here ends javascript
  
