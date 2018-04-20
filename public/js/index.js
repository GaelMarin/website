$(document).ready(function() {

  // Horizontal bar under the active section corresponding menu item
  function animateMenuBar() {
    var bar = $('#menu-bar');
    var activeItem = $('.navbar-link.active');
    bar.css('left', activeItem.offset().left + "px");
    bar.css('width', activeItem.parent().width() + "px");
  }

  animateMenuBar();

  // Material compontents initialization
  $(document).ready(function(){
    // parallax header initialization
    $('.parallax').parallax();
    // slide-out menu initialization
    $('.sidenav').sidenav();
  });

  // Skill bar count up filling
  var skillBarCountUp = true;

  var options = {
    useEasing: true,
    useGrouping: true,
    suffix: '%'
  };

  // Keep the bar at the good position
  window.onresize = function(e) {
    animateMenuBar();
  }

  window.onscroll = function(e){
    var skillsOffsetTop = document.getElementById('skills').offsetTop - 700  ;
    var skillsOffsetBottom = document.getElementById('skills').offsetTop + document.getElementById('skills').offsetHeight - 200;
    if (
      (document.body.scrollTop > skillsOffsetTop || document.documentElement.scrollTop > skillsOffsetTop) &&
      (document.body.scrollTop > skillsOffsetBottom || document.documentElement.scrollTop < skillsOffsetBottom)
    ) {
      document.getElementById('skill-bar-html').style.width = "98%";
      document.getElementById('skill-bar-css').style.width = "95%";
      document.getElementById('skill-bar-js').style.width = "90%";
      document.getElementById('skill-bar-php').style.width = "80%";
      document.getElementById('skill-bar-java').style.width = "90%";
      document.getElementById('skill-bar-seo').style.width = "85%";
      if (skillBarCountUp) {
        new CountUp("count-skill-level-html", 0, 98, 0, 0.8, options).start();
        new CountUp("count-skill-level-css", 0, 90, 0, 0.8, options).start();
        new CountUp("count-skill-level-js", 0, 95, 0, 0.8, options).start();
        new CountUp("count-skill-level-php", 0, 80, 0, 0.8, options).start();
        new CountUp("count-skill-level-java", 0, 90, 0, 0.8, options).start();
        new CountUp("count-skill-level-seo", 0, 85, 0, 0.8, options).start();
        skillBarCountUp = false;
      }
    } else {
      document.getElementById('skill-bar-html').style.width = "0%";
      document.getElementById('skill-bar-css').style.width = "0%";
      document.getElementById('skill-bar-js').style.width = "0%";
      document.getElementById('skill-bar-php').style.width = "0%";
      document.getElementById('skill-bar-java').style.width = "0%";
      document.getElementById('skill-bar-seo').style.width = "0%";
      if (!skillBarCountUp) {
        new CountUp("count-skill-level-html", 98, 0, 0, 0.8, options).start();
        new CountUp("count-skill-level-css", 90, 0, 0, 0.8, options).start();
        new CountUp("count-skill-level-js", 95, 0, 0, 0.8, options).start();
        new CountUp("count-skill-level-php", 80, 0, 0, 0.8, options).start();
        new CountUp("count-skill-level-java", 90, 0, 0, 0.8, options).start();
        new CountUp("count-skill-level-seo", 85, 0, 0, 0.8, options).start();
      }
      skillBarCountUp = true;
    }

    // menu bar animation on top of sections
    $('#header, #profile, #services, #contact').each(function(index, element){
      var scrollTop = $('html').scrollTop();
      var itemTop = element.offsetTop
      var itemBottom = element.offsetTop + element.offsetHeight;
      if(scrollTop >= itemTop - 64 && scrollTop <= itemBottom){
        var menuItemId = element.id + "Link";
        if(menuItemId != "") {
          $('.active').toggleClass('active');
          $("#" + menuItemId).toggleClass('active');
          animateMenuBar();
        }
      }
    })

  }

  // Smooth Scroll when click on menu item
  var navbarLinks = document.getElementsByClassName('navbar-link');
  for(var i = 0; i < navbarLinks.length; i++){

    var currentLink = navbarLinks[i];

    $("#" + currentLink.id).click(function() {

      var sectionId = this.id.search('SideLink') === -1 ? this.id.substr(0, this.id.search('Link')) : this.id.substr(0, this.id.search('SideLink'));

      // Scroll to function
      $('html').animate({
        scrollTop: $("#" + sectionId).offset().top - 64
      },1000, "swing");

      //close sidenav
      $('.sidenav-overlay').click();

      //Menu bar animation
      $('.active').toggleClass('active');
      $("#" + this.id).toggleClass('active');
      animateMenuBar();
    });

  };

  $("#cta-button").click(function() {
    $('html').animate({
      scrollTop: $("#contact").offset().top - 64
    },1000, "swing");
  });

  $("#header-arrow-down a").click(function() {
    $('html').animate({
      scrollTop: $("#profile").offset().top - 64
    },1000, "swing");
  });

  // Header word swapper
  function removeOneLetter(word) {
    var newWord = word.substr(0, word.length -1);
    return newWord;
  }

  var catchPhraseWords = ["développeur web", "développeur logiciel", "campeur professionnel", "amateur de bonsaïs", "mélomane"];
  var currentWord = document.getElementById('catchPhrase').innerText.substr(8);
  var newWordNeeded = false;
  var isAdding = false;

  setInterval(function catchPhraseWordSwap() {
    var element = document.getElementById('catchPhrase');
    var catchPhrase = element.innerText;
    var newCatchPhrase = catchPhrase;

    if(catchPhrase.length == 1) {
      newCatchPhrase = catchPhrase;
      newWordNeeded = true;
      isAdding = true;
    }

    if(newWordNeeded) {
      var newWordIndex = Math.floor(Math.random() * catchPhraseWords.length);
      var newWord = catchPhraseWords[newWordIndex];

      while(currentWord === newWord) {
        newWordIndex = Math.floor(Math.random() * catchPhraseWords.length);
        newWord = catchPhraseWords[newWordIndex];
      }

      currentWord = newWord;
      newWordNeeded = false;

    }

    if(isAdding) {
      var currentWordArray = Array.from(currentWord);
      var currentState = catchPhrase.substr(1, catchPhrase.length);
      var currentLetterIndex = currentState.length;
      var currentLetter = currentWordArray[currentLetterIndex];

      if(currentLetter === " ") {
        newCatchPhrase += " ";
        currentLetter = currentWordArray[currentLetterIndex+1];
      }

      if(catchPhrase.length === 1 + currentWord.length ) {
        isAdding = false;
      } else {
        newCatchPhrase += currentLetter;
      }

    } else {
      newCatchPhrase = removeOneLetter(catchPhrase);
    }

    element.innerText = newCatchPhrase;
  }, 100);

  // Header "Gm" line drawing
  var lineDrawing = anime({
    targets: '#animationLogo path',
    strokeDashoffset: [0, anime.setDashoffset],
    easing: 'linear',
    delay: 500,
    duration: 1500,
    direction: 'alternate',
    loop: true
  });


  // Header "Gm" color changing
  var colors = anime({
    targets: '#animationLogo path',
    stroke: [
      {value: '#e74c3c'},
      {value: '#F0F0F0'},
      {value: '#F0F0F0'},
      {value: '#F0F0F0'}
    ],
    easing: 'easeInOutSine',
    loop: true,
    delay: 500,
    duration: 1500,
    direction: 'alternate'
  });

  // Header bubbles effect
  particlesJS.load('particles-js', 'assets/particles/particlesjs-config.json')

});
