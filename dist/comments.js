(()=>{"use strict";var e={174:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},864:(e,t,r)=>{e.exports=r.p+"bundle.css"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{r(864);var e=r(174),t=r.n(e),o=new URL(r(864),r.b);t()(o);const n=document.querySelector(".comments"),s=document.querySelector(".form-comments"),i=document.querySelector(".input-name"),c=document.querySelector(".textarea-text"),a=document.querySelector(".input-date");(e=>{e.addEventListener("keyup",(e=>{e.target.classList.remove("error"),document.querySelector(".form-comments__name").classList.remove("error"),document.querySelectorAll(".error-name").forEach((e=>{e.remove()}))}))})(i),(e=>{e.addEventListener("keyup",(e=>{e.target.classList.remove("error"),document.querySelector(".form-comments__text").classList.remove("error"),document.querySelectorAll(".error-text").forEach((e=>{e.remove()}))}))})(c),s.addEventListener("submit",(e=>{e.preventDefault();let t=i.value,r=c.value,o=a.value,s=""===t.replace(/\s/g,""),l=""===r.replace(/\s/g,"");i.value="",c.value="",a.value="";let m=new Date(o).toLocaleDateString();const d=(new Date).toLocaleDateString(),u=new Date(Date.now()-864e5).toLocaleDateString();if(""===o)o="Сегодня, "+(new Date).toLocaleTimeString().slice(0,5);else{let e=Number(o.slice(0,4)),t=Number(o.slice(5,-3)),r=Number(o.slice(8,10));o=m===d?"Сегодня, "+(new Date).toLocaleTimeString().slice(0,-3):m===u?"Вчера, "+new Date(Date.now()-864e5).toLocaleTimeString().slice(0,-3):new Date(e,t,r).toLocaleDateString()}if((e=>{const t=e.parentNode;t.classList.contains("error")&&(t.querySelector(".error-text").remove(),t.classList.remove("error"))})(c),l?(c.classList.add("error"),((e,t)=>{const r=e.parentNode,o=document.createElement("div");o.className="error-text",o.textContent="Поле не заполнено!",r.classList.add("error"),r.append(o)})(c)):c.classList.remove("error"),(e=>{const t=e.parentNode;t.classList.contains("error")&&(t.querySelector(".error-name").remove(),t.classList.remove("error"))})(i),s?(i.classList.add("error"),((e,t)=>{const r=e.parentNode,o=document.createElement("div");o.className="error-name",o.textContent="Поле не заполнено!",r.classList.add("error"),r.append(o)})(i)):i.classList.remove("error"),l||s)return!1;{let e=document.createElement("div");e.className="comment",e.innerHTML=`\n         <div class="comment-name">${t}</div>\n         <div class="comment-text">${r}</div>\n         <time class="comment-date">${o}</time>\n         <svg class="comment-bin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M19,6V3c0-1.104,0.896-2,2-2h8c1.104,0,2,0.896,2,2v3"/><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M40,6l-3.693,41.426C36.229,48.299,35.469,49,34.608,49H15.391c-0.86,0-1.621-0.701-1.699-1.574L10,6"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="8" y1="6" x2="42" y2="6"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="25" y1="11" x2="25" y2="44"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="31" y1="11" x2="31" y2="44"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="19" y1="11" x2="19" y2="44"/></svg>  \n         <svg class="comment-like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19"  width="25px" height="25px"><path fill="white" d="M23.6 6.5c0 5-9.1 10.7-11.4 12-.3.2-.6.2-1 0C9 17.3 0 11.6 0 6.5 0 3 2.5 0 6.2 0c2.4 0 4.4 1.2 5.6 3a6.8 6.8 0 015.6-3c3.7 0 6.2 3 6.2 6.5z"/></svg>\n           `,(e=>{e.querySelectorAll(".comment-like").forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("liked")?e.classList.remove("liked"):e.classList.add("liked")}))}))})(e),(e=>{e.querySelectorAll(".comment-bin").forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentNode;t.remove(t)}))}))})(e),n.append(e)}}))})()})();
//# sourceMappingURL=comments.js.map