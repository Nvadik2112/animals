!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=()=>{const e=document.querySelector(".teleprogram__date"),t=document.querySelectorAll(".teleprogram__data"),r=document.querySelectorAll(".teleprogram__data p"),n=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],o=new Date,l=e=>new Date(o-864e5*e).getDate(),i=e=>new Date(o-864e5*e).getMonth(),d=[l(3),l(2),l(1),l(0),l(-1),l(-2),l(-3)],c=[i(3),i(2),i(1),i(0),i(-1),i(-2),i(-3)];c.forEach((e,t)=>{for(let o=0;o<n.length;o++)o===c[t]&d[t]<=9?e="0"+d[t]+" "+n[o].toUpperCase():o===c[t]&d[t]>9&&(e=d[t]+" "+n[o].toUpperCase()),r[t].textContent=e});let s=3;t.forEach((e,r)=>{e.addEventListener("click",()=>{if(!event.target.closest("#dis")){const e=document.createElement("img");e.classList.add("teleprogram__greenborder"),e.setAttribute("src","img/greenborder.png"),t[r].appendChild(e),t[r].setAttribute("id","dis");const n=t[s].querySelector("img");t[s].removeAttribute("id","dis"),t[s].removeChild(n),s=r}})}),e.addEventListener("click",()=>{let e=event.target;const r=document.createElement("img");r.classList.add("teleprogram__greenborder"),r.setAttribute("src","img/greenborder.png");const n=t[s].querySelector("img");e.closest(".slide__date-left")&&s>0&&(t[s-1].appendChild(r),t[s-1].setAttribute("id","dis"),t[s].removeAttribute("id","dis"),t[s].removeChild(n),s-=1),e.closest(".slide__date-right")&&s<6&&(t[s+1].appendChild(r),t[s+1].setAttribute("id","dis"),t[s].removeAttribute("id","dis"),t[s].removeChild(n),s+=1)})};var o=()=>{const e=document.querySelector(".teleprogram__video"),t=document.querySelectorAll(".teleprogram__title"),r=document.querySelector(".teleprogram__button"),n=r.querySelectorAll(".teleprogram__button-image"),o=e.querySelector("iframe"),l=["https://vk.com/video_ext.php?oid=-16446518&id=170576515&hash=842ba39e3baead27","https://my.mail.ru/video/embed/707635629118194115?rel=0","https://ok.ru/videoembed/524186489139?rel=0","https://www.youtube.com/embed/XWgiuQfCWk0?rel=0","https://ok.ru/videoembed/878612384386?rel=0"];let i=0;t.forEach((e,d)=>{e.addEventListener("click",()=>{event.target.closest("#current-tv")||(t[d].setAttribute("id","current-tv"),n[d].style.display="none",o.removeAttribute("src"),t[i].removeAttribute("id","current-tv"),o.setAttribute("src",l[d]),n[i].style.display="inline-block",r.insertBefore(n[i],n[5]),i=d)})}),n.forEach((e,d)=>{e.addEventListener("click",()=>{t[d].setAttribute("id","current-tv"),e.style.display="none",o.removeAttribute("src"),t[i].removeAttribute("id","current-tv"),o.setAttribute("src",l[d]),n[i].style.display="inline-block",r.insertBefore(n[i],n[5]),i=d})})};var l=()=>{const e=document.querySelector("header"),t=document.querySelector(".header__pantera"),r=document.querySelectorAll(".header__subtitle p"),n=document.querySelector(".header__premier");setInterval(()=>{e.classList.toggle("hawk"),"Panthera pardus"===t.textContent?t.textContent="Accipiter gentilis":t.textContent="Panthera pardus","тень"===r[0].textContent?r[0].textContent="ястреб":r[0].textContent="тень","леопарда"===r[1].textContent?r[1].textContent="теревятник":r[1].textContent="леопарда","Премьера 10 ноября"===n.textContent?n.textContent="Премьера 31 декабря":n.textContent="Премьера 10 ноября"},7e3)};var i=()=>{document.querySelector(".header__nav").addEventListener("click",()=>{event.target.closest("#nav__main")&&window.scrollTo(0,150),event.target.closest("#nav__tele")&&window.scrollTo(0,900)})};const d=document.querySelector(".arrow-scroll");d.style.display="none",d.addEventListener("click",()=>{window.scrollTo(0,0)}),document.addEventListener("scroll",()=>{let e=window.pageYOffset;d.style.display=e>145?"block":"none"});var c=d;n(),o(),l(),i(),c()}]);