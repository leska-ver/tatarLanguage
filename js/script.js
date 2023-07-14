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





});
