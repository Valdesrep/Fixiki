parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"adQE":[function(require,module,exports) {
var t=function(){var t=l(".modal__trigger"),e=l(".modal"),n=l(".modal__bg"),i=l(".modal__content"),o=l(".modal__close"),a=window,r=!1,s=400,d=t.length;function l(t){return document.querySelectorAll(t)}var c=function(t){t.preventDefault();var e=this.dataset.modal,n=e.length,i=e.substring(1,n),o=document.getElementById(i);m(this,o)},m=function(t,e){if(null===document.getElementById("modal__temp")){var n=document.createElement("div");n.id="modal__temp",t.appendChild(n),u(t,e,n)}},u=function(t,e,n){var i,o,r,d,l=t.getBoundingClientRect(),c=e,m=c.querySelector(".modal__content").getBoundingClientRect(),u=a.innerWidth/2,_=a.innerHeight/2;t.classList.add("modal__trigger--active"),r=m.width/l.width,d=m.height/l.height,r=r.toFixed(3),d=d.toFixed(3),i=Math.round(u-l.left-l.width/2),o=Math.round(_-l.top-l.height/2),c.classList.contains("modal--align-top")&&(o=Math.round(m.height/2+m.top-l.top-l.height/2)),t.style.transform="translate("+i+"px, "+o+"px)",t.style.webkitTransform="translate("+i+"px, "+o+"px)",n.style.transform="scale("+r+","+d+")",n.style.webkitTransform="scale("+r+","+d+")",window.setTimeout(function(){window.requestAnimationFrame(function(){v(c,n)})},s)},v=function(t,e){if(!r){var n=t.querySelector(".modal__content");t.classList.add("modal--active"),n.classList.add("modal__content--active"),n.addEventListener("transitionend",function t(){e.style.opacity="0";n.removeEventListener("transitionend",t,!1)},!1),r=!0}},_=function(n){n.preventDefault(),n.stopImmediatePropagation();var o=n.target,a=document.getElementById("modal__temp");if(r&&o.classList.contains("modal__bg")||o.classList.contains("modal__close")){a.style.opacity="1",a.removeAttribute("style");for(var l=0;l<d;l++)e[l].classList.remove("modal--active"),i[l].classList.remove("modal__content--active"),t[l].style.transform="none",t[l].style.webkitTransform="none",t[l].classList.remove("modal__trigger--active");a.addEventListener("transitionend",function(){setTimeout(function(){window.requestAnimationFrame(function(){a.remove()})},s-50)},!1),r=!1}};return{init:function(){!function(){for(var e=0;e<d;e++)t[e].addEventListener("click",c,!1),o[e].addEventListener("click",_,!1),n[e].addEventListener("click",_,!1)}()}}}();t.init();
},{}]},{},["adQE"], null)
//# sourceMappingURL=/Fixiki/aboutModal.78a97645.js.map