(()=>{var t={2774:(t,a,e)=>{"use strict";e(6353);e.p,e.p,e.p,e.p,e.p;var i=document.querySelector(".capital__slider-value span"),s=document.querySelector(".capital__slider-value"),c=document.querySelector("input"),l=(document.querySelector(".capital__slider-line"),document.querySelector(".capital__slider-progress")),n=document.querySelectorAll(".capital__block--cap"),o=document.querySelector(".price"),r=document.getElementById("mattress"),d=document.getElementById("deposit"),v=document.getElementById("alfabank"),p=document.querySelectorAll(".tabsBtn"),_=document.querySelectorAll(".capital__block-profit-block"),u=document.querySelector(".capital__block-select"),b=document.querySelector(".capital__block-stats__inner"),k=document.querySelector(".svg-1"),f=document.querySelector(".svg-2"),m=document.getElementById("mattress-money"),g=document.getElementById("deposit-money"),h=document.getElementById("capital-money"),y=document.querySelector(".capital__block-stats__average-picture-icon"),x=document.querySelector(".average"),w=document.querySelector(".delete-bg"),L=function(t,a){return"~"+(t*a*12).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")+" ₽"};function E(t,a,e,i){var s=279744.4;console.log(s);for(var c=parseInt(a.textContent.replace(/[^\d]/g,"")),l=Math.round(c/s);t.getElementsByTagName("span").length>i;)t.lastChild.remove();for(var n=!0,o=i;n&&o<l;o++)o>e-i&&(n=!1),t.insertAdjacentHTML("beforeend",'<span class="span"></span>')}var S=function(t,a){for(var e=0,i=0,s=1;s<=a;s++)e<=0?i=(e+=12*t+12*t*.0698+i)+12*t:e>0&&(i=(e=.0698*(e+12*t)+i)+12*t);return"~"+Math.floor(e).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")+" ₽"},C=function(t,a){for(var e=0,i=0,s=1;s<=a;s++)e<=0?i=(e+=12*t+12*t*.2373+i)+12*t:e>0&&(i=(e=.2373*(e+12*t)+i)+12*t);return"до ~"+Math.floor(e).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")+" ₽"};function q(t){t<=1e4?y.innerHTML='<img src="./img/average.svg" alt="">':11e3<=t&&t<=2e4?y.innerHTML='<img src="./img/average2.svg" alt="">':21e3<=t&&t<=3e4?y.innerHTML='<img src="./img/average3.svg" alt="">':31e3<=t&&t<=4e4?y.innerHTML='<img src="./img/average4.svg" alt="">':41e3<=t&&t<=5e4&&(y.innerHTML='<img src="./img/average5.svg" alt="">')}c.addEventListener("input",(function(){var t=c.value,a=Number(100*(t-c.min)/(c.max-c.min)),e=6-.2*a;s.style.left="calc(".concat(a,"% + (").concat(e,"px))"),i.textContent=t+" ₽",l.style.width=t/500+"%",s.classList.add("show")})),c.addEventListener("mouseup",(function(){var t=c.value;t>0&&(n.forEach((function(t){t.style.display="block"})),o.textContent="".concat(t," ₽"),r.textContent=L(parseInt("".concat(t,"₽")),3),d.textContent=S(parseInt("".concat(t," ₽")),3),v.textContent=C(parseInt("".concat(t," ₽")),3),E(m,r,3,1),E(g,d,6,2),E(h,v,8,3)),x.textContent="~ 42 000 ₽",q(parseInt(x.textContent.replace(/[^\d]/g,"")))})),c.addEventListener("touchend",(function(){var t=c.value;t>0&&(n.forEach((function(t){t.style.display="block"})),o.textContent="".concat(t," ₽"),r.textContent=L(parseInt("".concat(t,"₽")),3),d.textContent=S(parseInt("".concat(t," ₽")),3),v.textContent=C(parseInt("".concat(t," ₽")),3),E(m,r,3,1),E(g,d,6,2),E(h,v,8,3)),x.textContent="~ 42 000 ₽",q(parseInt(x.textContent.replace(/[^\d]/g,"")))})),p.forEach((function(t){t.addEventListener("click",(function(){var a=t.getAttribute("data-tab"),e=document.querySelector(a);_.forEach((function(t){t.classList.remove("show")})),e.classList.add("show"),e.classList.contains("show")&&w.addEventListener("click",(function(){_.forEach((function(t){t.classList.remove("show")}))}))}))})),u.addEventListener("click",(function(){b.classList.toggle("show"),u.scrollIntoView({behavior:"smooth"}),u.innerHTML='\n    <div> Свернуть</div>\n    <div>\n        <svg width="16" height="7" viewBox="0 0 16 7" fill="none"xmlns="http://www.w3.org/2000/svg">\n            <path d="M1 1L7.55598 5.95238L14.0892 1" stroke="#FE4D4A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />\n        </svg>\n    </div>',u.classList.add("active"),b.classList.contains("show")||(u.innerHTML='\n        <div> А как в среднем у читателей vc.ru?</div>\n        <div>\n            <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M1 1L7.55598 5.95238L14.0892 1" stroke="#FE4D4A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />\n            </svg>\n        </div>',u.classList.remove("active")),k.style.strokeDashoffset=198,f.style.strokeDashoffset=339}))},6353:t=>{t.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <link rel="icon" href="../dist/favicons.ico" type="image/x-icon"> <title>Test-bank</title> </head> <body> <div class="main"> <div class="delete-bg"></div> <div class="capital"> <div class="capital__block"> <div class="capital__block-content"> <div class="capital__block-title">Сколько денег вы откладываете в месяц?</div> <div class="capital__block-subtitle">Ответьте и узнаете, сколько копят другие.</div> <div class="capital__slider"> <div class="capital__slider-line"> <div class="capital__slider-value"> <span></span> </div> <div class="capital__slider-min">0 ₽</div> <div class="capital__slider-max">50 000 ₽</div> <input type="range" min="0" max="50000" value="0" class="slider"> <div class="capital__slider-progress"></div> </div> </div> </div> </div> <div class="capital__block capital__block--cap" style="display:none"> <div class="capital__block-content"> <div class="capital__block-title">Вы откладываете <span class="price"></span> в месяц. <br> За три года вы бы заработали: </div> <div class="capital__block-profit"> <div class="capital__block-profit__items"> <div class="capital__block-profit__item"> <div class="capital__block-profit__coin"> <div id="mattress-money"> <span class="span"></span> </div> </div> <div class="capital__block-profit__title"><span id="mattress"></span></div> <div class="capital__block-profit__subtitle">если откладывать под матрас <span class="tabsBtn" data-tab="#tab_1">? <div class="capital__block-profit-block" id="tab_1">В этом мало смысла — такие накопления «съедает» инфляция. </div> </span> </div> </div> <div class="capital__block-profit__item"> <div class="capital__block-profit__coin"> <div id="deposit-money"> <span class="span"></span> <span class="span"></span> </div> </div> <div class="capital__block-profit__title"><span id="deposit"></span></div> <div class="capital__block-profit__subtitle">если откладывать на депозит <span class="tabsBtn" data-tab="#tab_2">? <div class="capital__block-profit-block" id="tab_2">Ставки по вкладам различны в разных банках и зависят от многих факторов, в частности, от ключевой ставки Центрального банка РФ. <sup><a href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1" target="_blank">1</a></sup> </div> </span> </div> </div> <div class="capital__block-profit__item"> <div class="capital__block-profit__coin"> <div id="capital-money"> <span class="span"></span> <span class="span"></span> <span class="span"></span> </div> </div> <div class="capital__block-profit__title"><span id="alfabank"></span></div> <div class="capital__block-profit__subtitle">если инвестировать в ПИФ «Альфа-Капитала» <span class="tabsBtn" data-tab="#tab_3">? <div class="capital__block-profit-block" id="tab_3">Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие. Они решают, когда покупать и продавать ценные бумаги, чтобы обеспечить инвестиционный доход. Купить или продать паи фонда можно в любой момент. <sup><a href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2" target="_blank">2</a></sup> </div> </span> </div> </div> </div> </div> </div> </div> <div class="capital__block-stats capital__block--cap" style="display:none"> <div class="capital__block-container"> <div class="capital__block-stats__inner"> <div class="capital__block-stats__average"> <div class="capital__block-stats__average-picture"> <div class="capital__block-stats__average-picture-icon"> </div> <div class="capital__block-stats__average-picture-title"> <span class="average">~ 15 240 ₽</span> </div> </div> <div class="capital__block-stats__average-text">в среднем откладывают читатели vc.ru</div> </div> <div class="capital__block-stats__chart"> <div class="capital__block-stats__chart-item"> <div class="capital__block-stats__chart-circle"> <svg class="svg-1" viewBox="0 0 160 160" style="stroke-dasharray:396;stroke-dashoffset:396"> <circle cx="80" cy="80" r="65"></circle> </svg> </div> <div class="capital__block-stats__chart-title">50%</div> <div class="capital__block-stats__chart-subtitle">читателей откладывают больше 1000 ₽ в месяц</div> </div> <div class="capital__block-stats__chart-item"> <div class="capital__block-stats__chart-circle"> <svg class="svg-2" viewBox="0 0 160 160" style="stroke-dasharray:396;stroke-dashoffset:396"> <circle cx="80" cy="80" r="65"></circle> </svg> </div> <div class="capital__block-stats__chart-title">7%</div> <div class="capital__block-stats__chart-subtitle">читателей откладывают больше 10 000 ₽ в месяц</div> </div> </div> </div> <div class="capital__block-select"> <div>А как в среднем у читателей vc.ru?</div> <div> <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L7.55598 5.95238L14.0892 1" stroke="#FE4D4A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg> </div> </div> </div> </div> <div class="capital__block-footer capital__block--cap" style="display:none"> <div class="capital__block-footer-container"> <div class="capital__block-footer-inner"> <div class="capital__block-footer-inner__text">Как начать инвестировать?</div> <a href="https://alfabank.ru/make-money/investments/" target="_blank" class="capital__block-footer-inner__btn">Узнать</a> </div> </div> </div> </div> </div>  </body> </html>'}},a={};function e(i){if(a[i])return a[i].exports;var s=a[i]={exports:{}};return t[i](s,s.exports,e),s.exports}e.m=t,e.x=t=>{},e.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),e.p="",(()=>{var t={179:0},a=[[1202,202],[2774,202]],i=t=>{},s=(s,c)=>{for(var l,n,[o,r,d,v]=c,p=0,_=[];p<o.length;p++)n=o[p],e.o(t,n)&&t[n]&&_.push(t[n][0]),t[n]=0;for(l in r)e.o(r,l)&&(e.m[l]=r[l]);for(d&&d(e),s&&s(c);_.length;)_.shift()();return v&&a.push.apply(a,v),i()},c=self.webpackChunk=self.webpackChunk||[];function l(){for(var i,s=0;s<a.length;s++){for(var c=a[s],l=!0,n=1;n<c.length;n++){var o=c[n];0!==t[o]&&(l=!1)}l&&(a.splice(s--,1),i=e(e.s=c[0]))}return 0===a.length&&(e.x(),e.x=t=>{}),i}c.forEach(s.bind(null,0)),c.push=s.bind(null,c.push.bind(c));var n=e.x;e.x=()=>(e.x=n||(t=>{}),(i=l)())})(),e.x()})();