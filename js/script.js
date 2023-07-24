document.addEventListener('DOMContentLoaded', function() {


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

    /*Для Урока 6*/
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

    /*Для Урока 7*/
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

    /*Для Урока 8*/
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

    /*Для Урока 9*/
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

    /*Для Урока 10*/
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

    /*Для Урока 11*/
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

    /*Для Урока 12*/
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

    /*Для Урока 13*/
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

    /*Для Урока 14*/
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

    /*Для Урока 15*/
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

    /*Для Урока 16*/
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

    /*Для Урока 17*/
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

    /*Для Урока 18*/
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

    /*Для Урока 19*/
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

    /*Для Урока 20*/
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

    /*Для Урока 21*/
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

    /*Для Урока 22*/
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

    /*Для Урока 23*/
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

    /*Для Урока 24*/
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


    /*Общая функция для всех видео стили*/
    // function onYouTubeIframeAPIReady() { 
      window.onYouTubeIframeAPIReady = function() { /* С document.addEventListener('DOMContentLoaded', function() {}*/
   
      for(var k = 0; players.length > k; k++) {
        players[k] = new YT.Player(players[k], {
                  height: '315',
                  width: '560',
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
