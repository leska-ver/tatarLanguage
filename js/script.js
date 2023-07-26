document.addEventListener('DOMContentLoaded', function() {  
  //alert('работает');Ищет ошибки по строчно


  /*Клик БУРГЕР-Саши*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  burger.addEventListener('click',  function() {
    burger.classList.add('open');

    menu.classList.toggle('is-active');
    
    if (menu.classList.contains('is-active')) {
     menu.style.transition = 'transform .7s ease-in-out';
   }
  });
  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('is-active')) {
        menu.style.transition = '';
        burger.classList.remove('open');
   }
  });



  //Табы в course
  let tabsBtn = document.querySelectorAll('.course__left-btn_js');//Находим все кнопки
  let tabsItem = document.querySelectorAll('.tabs-itemJs');//Находим все li-ки

  tabsBtn.forEach(function(element){//Создаём цикл element
    //Каждой кнопке навешиваем обработчик click
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;//dataset позволяет нам получить data-path

      //Задали команды в цикле btn
      tabsBtn.forEach(function(btn){ btn.classList.remove('course__left-btn_js--active')});//Удалили    
      e.currentTarget.classList.add('course__left-btn_js--active');//Добавили

      //Задали команды в цикле element
      tabsItem.forEach(function(element){ element.classList.remove('tabs-itemJs--active')});//Удалили    
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-itemJs--active');//Добавили
    });
  });



  // Плавающий блок js - course__left_id
  (function(){
    let a = document.querySelector('#course__left_id'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
      if (b == null) {
        let Sa = getComputedStyle(a, ''), s = '';
        for (let i = 0; i < Sa.length; i++) {
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
          }
        }
        b = document.createElement('div');
        b.style.cssText = s + ' box-sizing: border-box; ';
        a.insertBefore(b, a.firstChild);
        let l = a.childNodes.length;
        for (let i = 1; i < l; i++) {
          b.appendChild(a.childNodes[1]);
        }
        a.style.height = b.getBoundingClientRect().height + 'px';
        a.style.padding = '0';
        a.style.border = '0';
      }
      let Ra = a.getBoundingClientRect(),
          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.line').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера(.line)
      if ((Ra.top - P) <= 0) {
        if ((Ra.top - P) <= R) {
          b.className = 'course__left-stop';
          b.style.top = - R +'px';
        } else {
          b.className = 'sticky';
          b.style.top = P + 'px';
        }
      } else {
        b.className = '';
        b.style.top = '';
      }      
    }
    })()

    

  //Код для Ютюб видео video-iframe - Остановить проигрывание видео при клике на другое видео.
  const videoOb = document.querySelector(".video-iframe")// Для обёртки if
  if (videoOb) { // Обёртка if. Спасение Gulp-а от null в браузере*/

    // Массив с id видео /*Для Урока 1*/
    const videos = [{id: "W0SwgrzwWbs"}];
    const tag = document.createElement('script');
    const players = [];

    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const pVideo = document.querySelector(".video-iframeOne");
    for(var i = 0; videos.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", videos[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideo.appendChild(newDiv);

      item = document.querySelector("#"+videos[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 2*/
    const videosTwo = [{id: "cSsXuJxM4K0"}];
    const pVideoTwo = document.querySelector(".video-iframeTwo");
    for(var i = 0; videosTwo.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwo = document.createElement("div");
      newDivTwo.setAttribute("id", videosTwo[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwo.appendChild(newDivTwo);

      item = document.querySelector("#"+videosTwo[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 3*/
    const videosThree = [{id: "iVywagyeZN8"}];
    const pVideoThree = document.querySelector(".video-iframeThree");
    for(var i = 0; videosThree.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivThree = document.createElement("div");
      newDivThree.setAttribute("id", videosThree[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoThree.appendChild(newDivThree);

      item = document.querySelector("#"+videosThree[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 4*/
    const videosFour = [{id: "xo_nOUIREnI"}];
    const pVideoFour = document.querySelector(".video-iframeFour");
    for(var i = 0; videosFour.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivFour = document.createElement("div");
      newDivFour.setAttribute("id", videosFour[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoFour.appendChild(newDivFour);

      item = document.querySelector("#"+videosFour[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 5*/
    const videosFive = [{id: "O8PCdipGxzA"}];
    const pVideoFive = document.querySelector(".video-iframeFive");
    for(var i = 0; videosFive.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivFive = document.createElement("div");
      newDivFive.setAttribute("id", videosFive[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoFive.appendChild(newDivFive);

      item = document.querySelector("#"+videosFive[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 6*/ 
    const videosSix = [{id: "SDT4lN1Xmt4"}];
    const pVideoSix = document.querySelector(".video-iframeSix");
    for(var i = 0; videosSix.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivSix = document.createElement("div");
      newDivSix.setAttribute("id", videosSix[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoSix.appendChild(newDivSix);

      item = document.querySelector("#"+videosSix[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 7*/
    const videosSeven = [{id: "yFF2P57jcqc"}];
    const pVideoSeven = document.querySelector(".video-iframeSeven");
    for(var i = 0; videosSeven.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivSeven = document.createElement("div");
      newDivSeven.setAttribute("id", videosSeven[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoSeven.appendChild(newDivSeven);

      item = document.querySelector("#"+videosSeven[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 8*/
    const videosEight = [{id: "nKhh1TYZOFw"}];
    const pVideoEight = document.querySelector(".video-iframeEight");
    for(var i = 0; videosEight.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivEight = document.createElement("div");
      newDivEight.setAttribute("id", videosEight[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoEight.appendChild(newDivEight);

      item = document.querySelector("#"+videosEight[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 9
    const videosNine = [{id: "0la1ttSQQxM"}];
    const pVideoNine = document.querySelector(".video-iframeNine");
    for(var i = 0; videosNine.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivNine = document.createElement("div");
      newDivNine.setAttribute("id", videosNine[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoNine.appendChild(newDivNine);

      item = document.querySelector("#"+videosNine[i].id).getAttribute("id");
      var player;
      players.push(item);
    }*/ 

    /*Для Урока 10
    const videosTen = [{id: "43FJXjqiFXY"}];
    const pVideoTen = document.querySelector(".video-iframeTen");
    for(var i = 0; videosTen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTen = document.createElement("div");
      newDivTen.setAttribute("id", videosTen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTen.appendChild(newDivTen);

      item = document.querySelector("#"+videosTen[i].id).getAttribute("id");
      var player;
      players.push(item);
    }*/ 

    /*Для Урока 11
    const videosEleven = [{id: "9nmU4mg8v1A"}];
    const pVideoEleven = document.querySelector(".video-iframeEleven");
    for(var i = 0; videosEleven.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivEleven = document.createElement("div");
      newDivEleven.setAttribute("id", videosEleven[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoEleven.appendChild(newDivEleven);

      item = document.querySelector("#"+videosEleven[i].id).getAttribute("id");
      var player;
      players.push(item);
    }*/ 

    /*Для Урока 12*/
    const videosTwelve = [{id: "A8gi-aWIKhA"}];
    const pVideoTwelve = document.querySelector(".video-iframeTwelve");
    for(var i = 0; videosTwelve.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwelve = document.createElement("div");
      newDivTwelve.setAttribute("id", videosTwelve[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwelve.appendChild(newDivTwelve);

      item = document.querySelector("#"+videosTwelve[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 13*/
    const videosThreeteen = [{id: "mWcW99Hvyiw"}];
    const pVideoThreeteen = document.querySelector(".video-iframeThreeteen");
    for(var i = 0; videosThreeteen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivThreeteen = document.createElement("div");
      newDivThreeteen.setAttribute("id", videosThreeteen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoThreeteen.appendChild(newDivThreeteen);

      item = document.querySelector("#"+videosThreeteen[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 14*/
    const videosFourteen = [{id: "q1SYBAgm8tU"}];
    const pVideoFourteen = document.querySelector(".video-iframeFourteen");
    for(var i = 0; videosFourteen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivFourteen = document.createElement("div");
      newDivFourteen.setAttribute("id", videosFourteen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoFourteen.appendChild(newDivFourteen);

      item = document.querySelector("#"+videosFourteen[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 15*/
    const videosFifteen = [{id: "B6SEYTAsjck"}];
    const pVideoFifteen = document.querySelector(".video-iframeFifteen");
    for(var i = 0; videosFifteen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivFifteen = document.createElement("div");
      newDivFifteen.setAttribute("id", videosFifteen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoFifteen.appendChild(newDivFifteen);

      item = document.querySelector("#"+videosFifteen[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 16*/ 
    const videosSixteen = [{id: "ckle8AWsgfc"}];
    const pVideoSixteen = document.querySelector(".video-iframeSixteen");
    for(var i = 0; videosSixteen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivSixteen = document.createElement("div");
      newDivSixteen.setAttribute("id", videosSixteen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoSixteen.appendChild(newDivSixteen);

      item = document.querySelector("#"+videosSixteen[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 17*/
    const videosSeventeen = [{id: "BxEGSBLIq5M"}];
    const pVideoSeventeen = document.querySelector(".video-iframeSeventeen");
    for(var i = 0; videosSeventeen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivSeventeen = document.createElement("div");
      newDivSeventeen.setAttribute("id", videosSeventeen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoSeventeen.appendChild(newDivSeventeen);

      item = document.querySelector("#"+videosSeventeen[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 18*/
    const videosEighteen = [{id: "y4d55WNy2v0"}];
    const pVideoEighteen = document.querySelector(".video-iframeEighteen");
    for(var i = 0; videosEighteen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivEighteen = document.createElement("div");
      newDivEighteen.setAttribute("id", videosEighteen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoEighteen.appendChild(newDivEighteen);

      item = document.querySelector("#"+videosEighteen[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 19*/
    const videosNineteen = [{id: "xPcI4SI364Q"}];
    const pVideoNineteen = document.querySelector(".video-iframeNineteen");
    for(var i = 0; videosNineteen.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivNineteen = document.createElement("div");
      newDivNineteen.setAttribute("id", videosNineteen[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoNineteen.appendChild(newDivNineteen);

      item = document.querySelector("#"+videosNineteen[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 20
    const videosTwenty = [{id: "68NUhhgzOZc"}];
    const pVideoTwenty = document.querySelector(".video-iframeTwenty");
    for(var i = 0; videosTwenty.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwenty = document.createElement("div");
      newDivTwenty.setAttribute("id", videosTwenty[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwenty.appendChild(newDivTwenty);

      item = document.querySelector("#"+videosTwenty[i].id).getAttribute("id");
      var player;
      players.push(item);
    }*/ 

    /*Для Урока 21*/
    const videosTwentyOne = [{id: "p5XllMTRVZM"}];
    const pVideoTwentyOne = document.querySelector(".video-iframeTwentyOne");
    for(var i = 0; videosTwo.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwentyOne = document.createElement("div");
      newDivTwentyOne.setAttribute("id", videosTwentyOne[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwentyOne.appendChild(newDivTwentyOne);

      item = document.querySelector("#"+videosTwentyOne[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 22*/
    const videosTwentyTwo = [{id: "TWSZApXXDxE"}];
    const pVideoTwentyTwo = document.querySelector(".video-iframeTwentyTwo");
    for(var i = 0; videosTwentyTwo.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwentyTwo = document.createElement("div");
      newDivTwentyTwo.setAttribute("id", videosTwentyTwo[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwentyTwo.appendChild(newDivTwentyTwo);

      item = document.querySelector("#"+videosTwentyTwo[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Урока 23*/
    const videosTwentyThree = [{id: "Hd9zvfOdc3I"}];
    const pVideoTwentyThree = document.querySelector(".video-iframeTwentyThree");
    for(var i = 0; videosTwentyThree.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwentyThree = document.createElement("div");
      newDivTwentyThree.setAttribute("id", videosTwentyThree[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwentyThree.appendChild(newDivTwentyThree);

      item = document.querySelector("#"+videosTwentyThree[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Для Урока 24
    const videosTwentyFour = [{id: "2ZEkAsN0JjM"}];
    const pVideoTwentyFour = document.querySelector(".video-iframeTwentyFour");
    for(var i = 0; videosTwentyFour.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwentyFour = document.createElement("div");
      newDivTwentyFour.setAttribute("id", videosTwentyFour[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwentyFour.appendChild(newDivTwentyFour);

      item = document.querySelector("#"+videosTwentyFour[i].id).getAttribute("id");
      var player;
      players.push(item);
    }*/


    /*Общая функция для всех видео стили*/
    // function onYouTubeIframeAPIReady() { 
      window.onYouTubeIframeAPIReady = function() { /* С document.addEventListener('DOMContentLoaded', function() {}*/
   
      for(var k = 0; players.length > k; k++) {
        players[k] = new YT.Player(players[k], {
                  width: '560',
                  height: '315',
                  videoId: players[k],
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
              });
      }
    }

    function onPlayerReady(event) {
      event.target.stopVideo();
    }

    /*Общая функция для всех видео стоп*/
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
          const temp = event.target.getVideoUrl();
          for (var i = 0; i < players.length; i++) {
            if (players[i].getVideoUrl() != temp) players[i].stopVideo();
          }
      }
    }

  }; //Обёртка if.



});
