(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},QeBL:function(n,e,t){"use strict";t.r(e),t.d(e,"__N_SSP",(function(){return bn}));var r=t("q1tI"),a=t.n(r),i=t("vOnD"),o=a.a.createElement,u=function(n){var e=n.title,t=n.children,r=n.className;return o(c,{className:r},o(l,null,e),o(s,null,t))},c=i.c.div.withConfig({componentId:"ekrk3k-0"})(["width:100%;height:100%;box-sizing:border-box;border-radius:16px;border:solid 5px ",";background:",";padding:16px;box-shadow:0 6px 6px rgba(0,0,0,0.16);"],(function(n){return n.theme.secondary}),(function(n){return n.theme.base})),l=i.c.h3.withConfig({componentId:"ekrk3k-1"})(["margin:0;padding:0;font-weight:600;font-size:24px;color:",";"],(function(n){return n.theme.secondary})),s=i.c.div.withConfig({componentId:"ekrk3k-2"})(["margin-top:16px;font-size:16px;color:",";"],(function(n){return n.theme.secondary})),f={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},d={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},p=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],h={CSS:{},springs:{}};function g(n,e,t){return Math.min(Math.max(n,e),t)}function m(n,e){return n.indexOf(e)>-1}function v(n,e){return n.apply(null,e)}var y={arr:function(n){return Array.isArray(n)},obj:function(n){return m(Object.prototype.toString.call(n),"Object")},pth:function(n){return y.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||y.svg(n)},str:function(n){return"string"===typeof n},fnc:function(n){return"function"===typeof n},und:function(n){return"undefined"===typeof n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return y.hex(n)||y.rgb(n)||y.hsl(n)},key:function(n){return!f.hasOwnProperty(n)&&!d.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function b(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function w(n,e){var t=b(n),r=g(y.und(t[0])?1:t[0],.1,100),a=g(y.und(t[1])?100:t[1],.1,100),i=g(y.und(t[2])?10:t[2],.1,100),o=g(y.und(t[3])?0:t[3],.1,100),u=Math.sqrt(a/r),c=i/(2*Math.sqrt(a*r)),l=c<1?u*Math.sqrt(1-c*c):0,s=1,f=c<1?(c*u-o)/l:-o+u;function d(n){var t=e?e*n/1e3:n;return t=c<1?Math.exp(-t*c*u)*(s*Math.cos(l*t)+f*Math.sin(l*t)):(s+f*t)*Math.exp(-t*u),0===n||1===n?n:1-t}return e?d:function(){var e=h.springs[n];if(e)return e;for(var t=0,r=0;;)if(1===d(t+=1/6)){if(++r>=16)break}else r=0;var a=t*(1/6)*1e3;return h.springs[n]=a,a}}function x(n){return void 0===n&&(n=10),function(e){return Math.ceil(g(e,1e-6,1)*n)*(1/n)}}var M=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function i(n,e,i){return((t(e,i)*n+r(e,i))*n+a(e))*n}function o(n,e,i){return 3*t(e,i)*n*n+2*r(e,i)*n+a(e)}return function(t,r,a,u){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==u)for(var l=0;l<n;++l)c[l]=i(l*e,t,a);return function(n){return t===r&&a===u?n:0===n||1===n?n:i(s(n),r,u)}}function s(r){for(var u=0,l=1,s=n-1;l!==s&&c[l]<=r;++l)u+=e;--l;var f=u+(r-c[l])/(c[l+1]-c[l])*e,d=o(f,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var u=o(e,t,r);if(0===u)return e;e-=(i(e,t,r)-n)/u}return e}(r,f,t,a):0===d?f:function(n,e,t,r,a){var o,u,c=0;do{(o=i(u=e+(t-e)/2,r,a)-n)>0?t=u:e=u}while(Math.abs(o)>1e-7&&++c<10);return u}(r,u,u+e,t,a)}}}(),k=function(){var n={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=g(n,1,10),r=g(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,t){e[n]=function(){return function(n){return Math.pow(n,t+2)}}})),Object.keys(e).forEach((function(t){var r=e[t];n["easeIn"+t]=r,n["easeOut"+t]=function(n,e){return function(t){return 1-r(n,e)(1-t)}},n["easeInOut"+t]=function(n,e){return function(t){return t<.5?r(n,e)(2*t)/2:1-r(n,e)(-2*t+2)/2}}})),n}();function C(n,e){if(y.fnc(n))return n;var t=n.split("(")[0],r=k[t],a=b(n);switch(t){case"spring":return w(n,e);case"cubicBezier":return v(M,a);case"steps":return v(x,a);default:return v(r,a)}}function I(n){try{return document.querySelectorAll(n)}catch(e){return}}function O(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in n){var o=n[i];e.call(r,o,i,n)&&a.push(o)}return a}function j(n){return n.reduce((function(n,e){return n.concat(y.arr(e)?j(e):e)}),[])}function P(n){return y.arr(n)?n:(y.str(n)&&(n=I(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function E(n,e){return n.some((function(n){return n===e}))}function N(n){var e={};for(var t in n)e[t]=n[t];return e}function B(n,e){var t=N(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function D(n,e){var t=N(n);for(var r in e)t[r]=y.und(n[r])?e[r]:n[r];return t}function T(n){return y.rgb(n)?function(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}(n):y.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,t,r){return e+e+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(n):y.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==o)e=t=r=u;else{var s=u<.5?u*(1+o):u+o-u*o,f=2*u-s;e=l(f,s,i+1/3),t=l(f,s,i),r=l(f,s,i-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0}function S(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function A(n,e){return y.fnc(n)?n(e.target,e.id,e.total):n}function L(n,e){return n.getAttribute(e)}function F(n,e,t){if(E([t,"deg","rad","turn"],S(e)))return e;var r=h.CSS[e+t];if(!y.und(r))return r;var a=document.createElement(n.tagName),i=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+t;var o=100/a.offsetWidth;i.removeChild(a);var u=o*parseFloat(e);return h.CSS[e+t]=u,u}function _(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?F(n,a,t):a}}function q(n,e){return y.dom(n)&&!y.inp(n)&&(L(n,e)||y.svg(n)&&n[e])?"attribute":y.dom(n)&&E(p,e)?"transform":y.dom(n)&&"transform"!==e&&_(n,e)?"css":null!=n[e]?"object":void 0}function R(n){if(y.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function z(n,e,t,r){var a=m(e,"scale")?1:0+function(n){return m(n,"translate")||"perspective"===n?"px":m(n,"rotate")||m(n,"skew")?"deg":void 0}(e),i=R(n).get(e)||a;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?F(n,i,r):i}function X(n,e,t,r){switch(q(n,e)){case"transform":return z(n,e,r,t);case"css":return _(n,e,t);case"attribute":return L(n,e);default:return n[e]||0}}function $(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=S(n)||0,a=parseFloat(e),i=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function Q(n,e){if(y.col(n))return T(n);if(/\s/g.test(n))return n;var t=S(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function Y(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function V(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=Y(e,i)),e=i}return r}function Z(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*L(n,"r")}(n);case"rect":return function(n){return 2*L(n,"width")+2*L(n,"height")}(n);case"line":return function(n){return Y({x:L(n,"x1"),y:L(n,"y1")},{x:L(n,"x2"),y:L(n,"y2")})}(n);case"polyline":return V(n);case"polygon":return function(n){var e=n.points;return V(n)+Y(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function G(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;y.svg(e)&&y.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),i=L(r,"viewBox"),o=a.width,u=a.height,c=t.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:o/c[2],h:u/c[3]}}function J(n,e){function t(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var r=G(n.el,n.svg),a=t(),i=t(-1),o=t(1);switch(n.property){case"x":return(a.x-r.x)*r.w;case"y":return(a.y-r.y)*r.h;case"angle":return 180*Math.atan2(o.y-i.y,o.x-i.x)/Math.PI}}function H(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Q(y.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:y.str(n)||e?r.split(t):[]}}function W(n){return O(n?j(y.arr(n)?n.map(P):P(n)):[],(function(n,e,t){return t.indexOf(n)===e}))}function K(n){var e=W(n);return e.map((function(n,t){return{target:n,id:t,total:e.length,transforms:{list:R(n)}}}))}function U(n,e){var t=N(e);if(/^spring/.test(t.easing)&&(t.duration=w(t.easing)),y.arr(n)){var r=n.length;2===r&&!y.obj(n[0])?n={value:n}:y.fnc(e.duration)||(t.duration=e.duration/r)}var a=y.arr(n)?n:[n];return a.map((function(n,t){var r=y.obj(n)&&!y.pth(n)?n:{value:n};return y.und(r.delay)&&(r.delay=t?0:e.delay),y.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r})).map((function(n){return D(n,t)}))}function nn(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=D(function(n){for(var e=O(j(n.map((function(n){return Object.keys(n)}))),(function(n){return y.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),t={},r=function(r){var a=e[r];t[a]=n.map((function(n){var e={};for(var t in n)y.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e}))},a=0;a<e.length;a++)r(a);return t}(r),e)),e)y.key(a)&&t.push({name:a,tweens:U(e[a],n)});return t}function en(n,e){var t;return n.tweens.map((function(r){var a=function(n,e){var t={};for(var r in n){var a=A(n[r],e);y.arr(a)&&1===(a=a.map((function(n){return A(n,e)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),i=a.value,o=y.arr(i)?i[1]:i,u=S(o),c=X(e.target,n.name,u,e),l=t?t.to.original:c,s=y.arr(i)?i[0]:l,f=S(s)||S(c),d=u||f;return y.und(o)&&(o=l),a.from=H(s,d),a.to=H($(o,s),d),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=C(a.easing,a.duration),a.isPath=y.pth(i),a.isColor=y.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var tn={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var i="";r.list.forEach((function(n,e){i+=e+"("+n+") "})),n.style.transform=i}}};function rn(n,e){K(n).forEach((function(n){for(var t in e){var r=A(e[t],n),a=n.target,i=S(r),o=X(a,t,i,n),u=$(Q(r,i||S(o)),o),c=q(a,t);tn[c](a,t,u,n.transforms,!0)}}))}function an(n,e){return O(j(n.map((function(n){return e.map((function(e){return function(n,e){var t=q(n.target,e.name);if(t){var r=en(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!y.und(n)}))}function on(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):e.duration,a.delay=t?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):e.endDelay,a}var un=0;var cn,ln=[],sn=[],fn=function(){function n(){cn=requestAnimationFrame(e)}function e(e){var t=ln.length;if(t){for(var r=0;r<t;){var a=ln[r];if(a.paused){var i=ln.indexOf(a);i>-1&&(ln.splice(i,1),t=ln.length)}else a.tick(e);r++}n()}else cn=cancelAnimationFrame(cn)}return n}();function dn(n){void 0===n&&(n={});var e,t=0,r=0,a=0,i=0,o=null;function u(n){var e=window.Promise&&new Promise((function(n){return o=n}));return n.finished=e,e}var c=function(n){var e=B(f,n),t=B(d,n),r=nn(t,n),a=K(n.targets),i=an(a,r),o=on(i,t),u=un;return un++,D(e,{id:u,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}(n);u(c);function l(){var n=c.direction;"alternate"!==n&&(c.direction="normal"!==n?"normal":"reverse"),c.reversed=!c.reversed,e.forEach((function(n){return n.reversed=c.reversed}))}function s(n){return c.reversed?c.duration-n:n}function p(){t=0,r=s(c.currentTime)*(1/dn.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function m(n){for(var e=0,t=c.animations,r=t.length;e<r;){var a=t[e],i=a.animatable,o=a.tweens,u=o.length-1,l=o[u];u&&(l=O(o,(function(e){return n<e.end}))[0]||l);for(var s=g(n-l.start-l.delay,0,l.duration)/l.duration,f=isNaN(s)?1:l.easing(s),d=l.to.strings,p=l.round,h=[],m=l.to.numbers.length,v=void 0,y=0;y<m;y++){var b=void 0,w=l.to.numbers[y],x=l.from.numbers[y]||0;b=l.isPath?J(l.value,f*w):x+f*(w-x),p&&(l.isColor&&y>2||(b=Math.round(b*p)/p)),h.push(b)}var M=d.length;if(M){v=d[0];for(var k=0;k<M;k++){d[k];var C=d[k+1],I=h[k];isNaN(I)||(v+=C?I+C:I+" ")}}else v=h[0];tn[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,e++}}function v(n){c[n]&&!c.passThrough&&c[n](c)}function y(n){var f=c.duration,d=c.delay,p=f-c.endDelay,y=s(n);c.progress=g(y/f*100,0,100),c.reversePlayback=y<c.currentTime,e&&function(n){if(c.reversePlayback)for(var t=i;t--;)h(n,e[t]);else for(var r=0;r<i;r++)h(n,e[r])}(y),!c.began&&c.currentTime>0&&(c.began=!0,v("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,v("loopBegin")),y<=d&&0!==c.currentTime&&m(0),(y>=p&&c.currentTime!==f||!f)&&m(f),y>d&&y<p?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,v("changeBegin")),v("change"),m(y)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,v("changeComplete")),c.currentTime=g(y,0,f),c.began&&v("update"),n>=f&&(r=0,c.remaining&&!0!==c.remaining&&c.remaining--,c.remaining?(t=a,v("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&l()):(c.paused=!0,c.completed||(c.completed=!0,v("loopComplete"),v("complete"),!c.passThrough&&"Promise"in window&&(o(),u(c)))))}return c.reset=function(){var n=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===n,c.remaining=c.loop,e=c.children;for(var t=i=e.length;t--;)c.children[t].reset();(c.reversed&&!0!==c.loop||"alternate"===n&&1===c.loop)&&c.remaining++,m(c.reversed?c.duration:0)},c.set=function(n,e){return rn(n,e),c},c.tick=function(n){a=n,t||(t=a),y((a+(r-t))*dn.speed)},c.seek=function(n){y(s(n))},c.pause=function(){c.paused=!0,p()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,ln.push(c),p(),cn||fn())},c.reverse=function(){l(),c.completed=!c.reversed,p()},c.restart=function(){c.reset(),c.play()},c.reset(),c.autoplay&&c.play(),c}function pn(n,e){for(var t=e.length;t--;)E(n,e[t].animatable.target)&&e.splice(t,1)}"undefined"!==typeof document&&document.addEventListener("visibilitychange",(function(){document.hidden?(ln.forEach((function(n){return n.pause()})),sn=ln.slice(0),dn.running=ln=[]):sn.forEach((function(n){return n.play()}))})),dn.version="3.2.0",dn.speed=1,dn.running=ln,dn.remove=function(n){for(var e=W(n),t=ln.length;t--;){var r=ln[t],a=r.animations,i=r.children;pn(e,a);for(var o=i.length;o--;){var u=i[o],c=u.animations;pn(e,c),c.length||u.children.length||i.splice(o,1)}a.length||i.length||r.pause()}},dn.get=X,dn.set=rn,dn.convertPx=F,dn.path=function(n,e){var t=y.str(n)?I(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:G(t),totalLength:Z(t)*(r/100)}}},dn.setDashoffset=function(n){var e=Z(n);return n.setAttribute("stroke-dasharray",e),e},dn.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?C(e.easing):null,a=e.grid,i=e.axis,o=e.from||0,u="first"===o,c="center"===o,l="last"===o,s=y.arr(n),f=s?parseFloat(n[0]):parseFloat(n),d=s?parseFloat(n[1]):0,p=S(s?n[1]:n)||0,h=e.start||0+(s?f:0),g=[],m=0;return function(n,e,v){if(u&&(o=0),c&&(o=(v-1)/2),l&&(o=v-1),!g.length){for(var y=0;y<v;y++){if(a){var b=c?(a[0]-1)/2:o%a[0],w=c?(a[1]-1)/2:Math.floor(o/a[0]),x=b-y%a[0],M=w-Math.floor(y/a[0]),k=Math.sqrt(x*x+M*M);"x"===i&&(k=-x),"y"===i&&(k=-M),g.push(k)}else g.push(Math.abs(o-y));m=Math.max.apply(Math,g)}r&&(g=g.map((function(n){return r(n/m)*m}))),"reverse"===t&&(g=g.map((function(n){return i?n<0?-1*n:-n:Math.abs(m-n)})))}return h+(s?(d-f)/m:f)*(Math.round(100*g[e])/100)+p}},dn.timeline=function(n){void 0===n&&(n={});var e=dn(n);return e.duration=0,e.add=function(t,r){var a=ln.indexOf(e),i=e.children;function o(n){n.passThrough=!0}a>-1&&ln.splice(a,1);for(var u=0;u<i.length;u++)o(i[u]);var c=D(t,B(d,n));c.targets=c.targets||n.targets;var l=e.duration;c.autoplay=!1,c.direction=e.direction,c.timelineOffset=y.und(r)?l:$(r,l),o(e),e.seek(c.timelineOffset);var s=dn(c);o(s),i.push(s);var f=on(i,n);return e.delay=f.delay,e.endDelay=f.endDelay,e.duration=f.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},dn.easing=C,dn.penner=k,dn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var hn=dn,gn=a.a.createElement,mn=i.c.div.withConfig({componentId:"sc-1i1bavs-0"})(["width:100%;height:100%;overflow:hidden;& > div{display:flex;img{object-position:left top;object-fit:cover;}}"]),vn=Object(r.memo)((function(n){var e=n.images,t=n.duration,a=n.delay,i=n.onChange,o=Object(r.useRef)(null),u=Object(r.useRef)(!1);return Object(r.useEffect)((function(){var n=o.current;n&&(u.current||function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;hn({targets:n,translateX:"-".concat(100*o,"%"),duration:t||1e3,delay:a||5e3,easing:"easeInOutQuart",complete:function(){i&&i(e[o]),r((o+1)%e.length)}})}(),u.current=!0)}),[a,t,e,i]),gn(mn,null,gn("div",{ref:o},e.map((function(n){return gn("img",{src:n,key:n})}))))})),yn=a.a.createElement,bn=!0,wn=(e.default=Object(r.memo)((function(n){var e,t=n.accounts,a=Object(r.useState)(null===(e=t[0])||void 0===e?void 0:e.image),i=a[0],o=a[1];return yn(wn,null,yn(xn,null,yn("div",null,yn(kn,null,yn("img",{src:"/static/main.png"})),yn(In,null,yn(Cn,{title:"Introduction",delay:.5},yn("p",null,yn(On,null,"\u300c\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3067\u751f\u304d\u3066\u3044\u304d\u305f\u3044\u300d"),"\u305f\u3060\u305d\u308c\u3060\u3051\u304c\u50d5\u306e\u6301\u3064\u601d\u3044"),yn("p",null,"\u8da3\u5473\u306f",yn(On,null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0"),"\u3068",yn(On,null,"Vtuber"),"\u3068",yn(On,null,"\u767e\u5408\u6f2b\u753b"),"\u3092\u8aad\u3080\u3053\u3068"),yn("p",null,"\u304b\u308f\u3044\u3044\u3082\u306e\u3068\u97f3\u697d\u304c\u597d\u304d\uff01\u307f\u3093\u306a\u4ef2\u826f\u304f\u3057\u3066\u306d")),yn(Cn,{title:"SNSAccounts",delay:1},yn(jn,null,yn("div",null,t.map((function(n){var e=n.type,t=n.url,r=n.image;return yn("a",{href:t,target:"_blank",rel:"noreferrer",key:"".concat(e,"-").concat(t),className:i===r?"active":""},e)}))),yn("div",null,yn(vn,{images:t.map((function(n){return n.image})),onChange:o})))),yn(Cn,{title:"Like",delay:1.5},yn("p",null,"\u597d\u304d\u306a",yn(On,null,"\u6f2b\u753b"),"\u30fb",yn(On,null,"Vtuber"),"\u30fb",yn(On,null,"\u97f3\u697d"),"\u306b\u3064\u3044\u3066\u66f8\u304d\u307e\u3059")),yn(Cn,{title:"Programing",delay:2},yn("p",null,"Typescript\u304c\u597d\u304d\u3067\u3059\u3002Python\u30fbRuby on Rails\u306f\u307b\u3093\u3068\u306b\u5c11\u3057\u3060\u3051\u304b\u3051\u307e\u3059\u304c\u3001\u5f97\u610f\u3058\u3083\u306a\u3044\u3088\uff01"),yn("p",null,"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u306fReact/Next.js\u3092\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u306fNestJS\u3092\u597d\u3093\u3067\u4f7f\u3046\u3088\uff01"),yn("p",null,"Redux\u306fnormalizr\u3092\u4f7f\u3046\u3084\u308a\u65b9\u304c\u597d\u304d\uff01"),yn("p",null,"\u30a4\u30f3\u30d5\u30e9\u307e\u308f\u308a\u306ffirebase\u30fbvercel\u30fbheroku\u304c\u8abf\u3079\u3064\u3064\u3084\u308a\u305f\u3044\u3053\u3068\u304c\u3067\u304d\u308b\u7a0b\u5ea6\u3002 \u30b3\u30f3\u30c6\u30ca\u6280\u8853\u30fbGCP\u30fbAWS\u306f\u307b\u3068\u3093\u3069\u308f\u304b\u3089\u306a\u3044\u306e\u3067\u52c9\u5f37\u4e2d\u30fb\u30fb\u30fb\u3002"),yn("p",null,"CI/CD\u307e\u308f\u308a\u306fGithubActions\u306f\u3067\u306f\u3058\u3081\u306b\u5c11\u3057\u4f7f\u3063\u3066\u3044\u305f\u7a0b\u5ea6\u3001CircleCI\u3082\u3059\u3067\u306b\u52d5\u3044\u3066\u3044\u308byml\u306b\u4ed8\u3051\u8db3\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u3002"))))))})),i.c.div.withConfig({componentId:"j6l5u8-0"})(["width:100%;height:100%;background:",";"],(function(n){return n.theme.primary}))),xn=i.c.section.withConfig({componentId:"j6l5u8-1"})(["width:100vw;min-height:100vh;padding:32px;box-sizing:border-box;& > div{width:100%;border-radius:16px;border:solid 5px ",";box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;}@media screen and (max-width:480px){padding:16px;& > div{border:none;}}"],(function(n){return n.theme.secondary})),Mn=Object(i.d)(["0%{opacity:0;transform:translateY(8px);}100%{opacity:1;transform:translateY(0);}"]),kn=i.c.div.withConfig({componentId:"j6l5u8-2"})(["height:100%;width:100%;max-width:800px;img{height:100%;width:100%;object-fit:contain;animation:"," 1s ease-in-out;}"],Mn),Cn=Object(i.c)(u).withConfig({componentId:"j6l5u8-3"})(["opacity:0;animation:"," 1s ease-in-out ","s;animation-fill-mode:forwards;"],Mn,(function(n){return n.delay||0})),In=i.c.div.withConfig({componentId:"j6l5u8-4"})(["margin:32px;display:flex;flex:1;flex-direction:column;justify-content:space-between;& > div{margin-bottom:16px;&:last-child{margin-bottom:0;}}@media screen and (max-width:480px){margin:16px 0 0 0;}"]),On=i.c.span.withConfig({componentId:"j6l5u8-5"})(["font-weight:600;"]),jn=i.c.div.withConfig({componentId:"j6l5u8-6"})(["display:flex;flex-wrap:wrap;justify-content:space-between;a{display:block;color:",";&.active{font-weight:600;color:",";}}& > div{max-width:500px;img{width:100%;}}"],(function(n){return n.theme.secondary}),(function(n){return n.theme.primary}))}},[["/EDR",0,1,3]]]);