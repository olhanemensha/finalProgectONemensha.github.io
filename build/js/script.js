!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=35)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(38))},function(t,e,n){"use strict";function r(t,e,n,r){var o=document.querySelector(".mark"),c=new XMLHttpRequest;c.responseType="json",o.style.display="block",c.onload=function(){c.status<400?"function"==typeof n?(n(c.response),o.style.display="none"):(console.log(c.response),a=c.response):console.log(c.response,c.status)},c.onerror=function(){console.log(c.response,c.status)},c.open(t,e),"GET"===t?c.send():"POST"===t&&(c.setRequestHeader("Content-type","application/json"),c.send(JSON.stringify(r)))}n.r(e),n.d(e,"myAjax",(function(){return r}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(6),o=n(11),c=n(9);t.exports=r?function(t,e,n){return o.f(t,e,c(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(20),o=n(22);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";var r=n(18),o=n(32);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(6),o=n(23),c=n(24),i=n(10),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(c(t),e=i(e,!0),c(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(5);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(12),c=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=c},function(t,e,n){var r=n(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(26),c=n(4),i=n(27),a=n(34),u=n(60),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||i;t.exports=function(t){return c(s,t)||(a&&c(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},function(t,e,n){"use strict";var r=n(18),o=n(3),c=n(33),i=n(31),a=n(14),u=n(7),s=n(62),l=n(15),f=n(63)("slice"),d=l("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,l,f=u(this),m=a(f.length),y=i(t,m),h=i(void 0===e?m:e,m);if(c(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!c(n.prototype)?o(n)&&null===(n=n[d])&&(n=void 0):n=void 0,n===Array||void 0===n))return p.call(f,y,h);for(r=new(void 0===n?Array:n)(v(h-y,0)),l=0;y<h;y++,l++)y in f&&s(r,l,f[y]);return r.length=l,r}})},function(t,e,n){var r=n(0),o=n(66),c=n(32),i=n(5);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==c)try{i(s,"forEach",c)}catch(t){s.forEach=c}}},function(t,e,n){var r=n(0),o=n(19).f,c=n(5),i=n(41),a=n(12),u=n(46),s=n(54);t.exports=function(t,e){var n,l,f,d,p,v=t.target,m=t.global,y=t.stat;if(n=m?r:y?r[v]||a(v,{}):(r[v]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(p=o(n,l))&&p.value:n[l],!s(m?l:v+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&c(d,"sham",!0),i(n,l,d,t)}}},function(t,e,n){var r=n(6),o=n(39),c=n(9),i=n(7),a=n(10),u=n(4),s=n(23),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=i(t),e=a(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return c(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(2),o=n(21),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(6),o=n(2),c=n(40);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(13),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(45),o=n(13);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(48),o=n(0),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(30),o=Math.max,c=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):c(n,e)}},function(t,e,n){"use strict";var r=n(55).forEach,o=n(61)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(21);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){n(36),n(37),n(1),n(67),n(68),n(69),n(70),n(71),n(72),n(73),t.exports=n(74)},function(t,e){},function(t,e,n){"use strict";n.r(e);n(8),n(16),n(17);var r=document.querySelectorAll(".question__open"),o=document.querySelectorAll(".question__close"),c=document.querySelectorAll(".question__answer");r=Array.prototype.slice.call(r,0),o=Array.prototype.slice.call(o,0),c=Array.prototype.slice.call(c,0),r.forEach((function(t,e){t.addEventListener("click",(function(t){t.preventDefault(),c[e].classList.add("active"),this.classList.remove("active"),o[e].classList.add("active")}))})),o.forEach((function(t,e){t.addEventListener("click",(function(t){t.preventDefault(),c[e].classList.remove("active"),this.classList.remove("active"),r[e].classList.add("active")}))}))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);e.f=c?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(3),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(5),c=n(4),i=n(12),a=n(25),u=n(42),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var u,s=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||o(n,"name",e),(u=l(n)).source||(u.source=f.join("string"==typeof e?e:""))),t!==r?(s?!p&&t[e]&&(d=!0):delete t[e],d?t[e]=n:o(t,e,n)):d?t[e]=n:i(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,e,n){var r,o,c,i=n(43),a=n(0),u=n(3),s=n(5),l=n(4),f=n(13),d=n(44),p=n(28),v=a.WeakMap;if(i){var m=f.state||(f.state=new v),y=m.get,h=m.has,b=m.set;r=function(t,e){return e.facade=t,b.call(m,t,e),e},o=function(t){return y.call(m,t)||{}},c=function(t){return h.call(m,t)}}else{var _=d("state");p[_]=!0,r=function(t,e){return e.facade=t,s(t,_,e),e},o=function(t){return l(t,_)?t[_]:{}},c=function(t){return l(t,_)}}t.exports={set:r,get:o,has:c,enforce:function(t){return c(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(25),c=r.WeakMap;t.exports="function"==typeof c&&/native code/.test(o(c))},function(t,e,n){var r=n(26),o=n(27),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(4),o=n(47),c=n(19),i=n(11);t.exports=function(t,e){for(var n=o(e),a=i.f,u=c.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||a(t,l,u(e,l))}}},function(t,e,n){var r=n(29),o=n(49),c=n(53),i=n(24);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(i(t)),n=c.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(50),o=n(52).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(7),c=n(51).indexOf,i=n(28);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(i,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~c(s,n)||s.push(n));return s}},function(t,e,n){var r=n(7),o=n(14),c=n(31),i=function(t){return function(e,n,i){var a,u=r(e),s=o(u.length),l=c(i,s);if(t&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=/#|\.prototype\./,c=function(t,e){var n=a[i(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=c.data={},u=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},function(t,e,n){var r=n(56),o=n(20),c=n(58),i=n(14),a=n(59),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,d=7==t,p=5==t||f;return function(v,m,y,h){for(var b,_,g=c(v),S=o(g),L=r(m,y,3),x=i(S.length),E=0,k=h||a,w=e?k(v,x):n||d?k(v,0):void 0;x>E;E++)if((p||E in S)&&(_=L(b=S[E],E,g),t))if(e)w[E]=_;else if(_)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:u.call(w,b)}else switch(t){case 4:return!1;case 7:u.call(w,b)}return f?-1:s||l?l:w}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},function(t,e,n){var r=n(57);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(22);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3),o=n(33),c=n(15)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[c])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(10),o=n(11),c=n(9);t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,c(0,n)):t[i]=n}},function(t,e,n){var r=n(2),o=n(15),c=n(64),i=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,c=n(0),i=n(65),a=c.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(29);t.exports=r("navigator","userAgent")||""},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e){var n=document.querySelector(".burger__menu"),r=document.querySelector(".menu__list"),o=document.querySelector(".burger__cl");n.addEventListener("click",(function(t){t.preventDefault(),this.classList.add("burger__open"),r.classList.add("menu__bur"),o.classList.add("close__active")})),o.addEventListener("click",(function(t){t.preventDefault(),console.log("asdfgw"),n.classList.remove("burger__open"),r.classList.remove("menu__bur"),this.classList.remove("close__active")}))},function(t,e,n){"use strict";n.r(e);var r=n(1);Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",(function(t){for(var e=0;e<=7;e++){var n=document.createElement("div");n.classList.add("choose__add"),document.querySelector("#tab1").appendChild(n);var r=document.createElement("img"),o=document.createElement("h3"),c=t.drinks[e].strDrink;o.innerText=c,o.classList.add("choose__item"),r.classList.add("choose__img"),r.src=t.drinks[e].strDrinkThumb,r.alt="random",n.appendChild(o),n.appendChild(r)}})),Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",(function(t){for(var e=0;e<=7;e++){var n=document.createElement("div");n.classList.add("choose__add"),document.querySelector("#tab2").appendChild(n);var r=document.createElement("img"),o=document.createElement("h3"),c=t.drinks[e].strDrink;o.innerText=c,o.classList.add("choose__item"),r.classList.add("choose__img"),r.src=t.drinks[e].strDrinkThumb,r.alt="random",n.appendChild(o),n.appendChild(r)}})),Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",(function(t){for(var e=0;e<=7;e++){var n=document.createElement("div");n.classList.add("choose__add"),document.querySelector("#tab3").appendChild(n);var r=document.createElement("img"),o=document.createElement("h3"),c=t.drinks[e].strDrink;o.innerText=c,o.classList.add("choose__item"),r.classList.add("choose__img"),r.src=t.drinks[e].strDrinkThumb,r.alt="random",n.appendChild(o),n.appendChild(r)}}))},function(t,e){var n=document.querySelector(".footer__form"),r=document.querySelector(".footer__input");n.addEventListener("submit",(function(t){""===this[0].value?(t.preventDefault(),r.placeholder="Error,enter email"):(this.submit,r.value="")})),r.addEventListener("input",(function(t){r.validity.typeMismatch?r.setCustomValidity("Error,enter email"):r.setCustomValidity("")}))},function(t,e){var n=document.querySelector(".popup__open"),r=document.querySelector(".popup__close"),o=document.querySelector(".popup"),c=document.querySelector(".page"),i=document.querySelector("#overlay");n.addEventListener("click",(function(t){t.preventDefault(),o.style.display="block",i.style.display="block",c.style.overflow="hidden",!0}));r.addEventListener("click",(function(t){t.preventDefault(),o.style.display="",i.style.display="none",c.style.overflow="",!1}))},function(t,e,n){"use strict";n.r(e);var r=n(1);function o(t){var e=document.createElement("div");e.classList.add("remove"),document.querySelector(".random__info").appendChild(e);var n=document.createElement("img"),r=document.createElement("h3");r.innerText=t.drinks[0].strDrink,r.classList.add("random__info_item"),n.classList.add("random__img"),n.src=t.drinks[0].strDrinkThumb,n.alt="random",e.appendChild(r),e.appendChild(n)}Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/random.php",(function(t){o(t)})),document.querySelector(".random__btn").addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".remove").remove(),Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/random.php",(function(t){o(t)}))}))},function(t,e,n){"use strict";n.r(e);n(8),n(16),n(17);var r=n(1),o=document.querySelectorAll(".block__input");o=Array.prototype.slice.call(o,0);var c=document.createElement("h");c.classList.add("block__info"),c.classList.add("clear"),c.innerText="Unfortunately, there is no information";var i=document.querySelectorAll(".block__form");i=Array.prototype.slice.call(i,0);var a="";console.log(i),i.forEach((function(t,e){t.addEventListener("submit",(function(t){t.preventDefault();var n=document.querySelector(".clear");if(null!==n&&n.remove(),a=this[0].value,0===e)if(""===a)o[0].classList.add("error"),o[0].placeholder="Error,enter coctail name";else{o[0].classList.remove("error"),Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(a),(function(t){if(null===t.drinks){var e=document.createElement("div");e.classList.add("block__result"),document.querySelector(".block__red").appendChild(e),e.appendChild(c)}else{var n=document.createElement("div");n.classList.add("block__result"),n.classList.add("clear"),document.querySelector(".block__red").appendChild(n);for(var r=0;r<=4;r++){var i=document.createElement("a");i.innerText=t.drinks[r].strDrink,i.href=t.drinks[r].strDrinkThumb,i.classList.add("block__link"),n.appendChild(i)}o[0].value=""}}))}else if(1===e)if(""===a)o[1].classList.add("error"),o[1].placeholder="Error,enter name of ingridient";else{o[1].classList.remove("error"),Object(r.myAjax)("GET","https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(a),(function(t){if(console.log(t.ingredients),null===t.ingredients){var e=document.createElement("div");e.classList.add("block__result"),document.querySelector(".block__blue").appendChild(e),e.appendChild(c)}else{var n=document.createElement("div");n.classList.add("block__result"),n.classList.add("clear"),document.querySelector(".block__blue").appendChild(n);var r=document.createElement("h");r.innerText=t.ingredients[0].strDescription,r.classList.add("block__text"),n.appendChild(r),o[1].value=""}}))}}))}))},function(t,e){window.onscroll=function(){(document.body.scrollTop>20||document.documentElement.scrollTop>20)&&(document.getElementById("navbar").style.top="0")}},function(t,e,n){"use strict";n.r(e);n(8),n(16),n(17);var r=document.querySelectorAll(".choose__link");(r=Array.prototype.slice.call(r,0)).forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=document.querySelector(t.getAttribute("href"));document.querySelector("#tabNav .act").classList.remove("act"),document.querySelector("#tabsWrap .act").classList.remove("act"),t.classList.add("act"),n.classList.add("act")}))}))}]);