(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return l.p+"js/"+({callback:"callback"}[e]||e)+"."+{callback:"f4cddf74","chunk-2d20f552":"104641c3","chunk-de545668":"32025027"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={callback:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({callback:"callback"}[e]||e)+"."+{callback:"a62cfa5f","chunk-2d20f552":"31d6cfe0","chunk-de545668":"31d6cfe0"}[e]+".css",c=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],d=i.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e);var b=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-component-sandbox/demo/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),o=Object(r["h"])("a",{class:"github-fork-ribbon",href:"https://github.com/shangdeyou/vue-component-sandbox/","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub",-1),c={style:{display:"flex","justify-content":"center"}};function a(e,t,n,a,u,l){var i=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])("div",null,[o,Object(r["h"])("div",c,[Object(r["h"])(i,{style:{width:"1024px"}})])])}n("ab0d");var u={};n("9ef5");u.render=a;var l=u,i=(n("d3b7"),n("6c02")),d=(n("b0c0"),{key:0,style:{"text-align":"center"}}),b=Object(r["h"])("h1",null,"Vue Component Sandbox",-1),f={id:"nav"},s=Object(r["g"])(" | "),p=Object(r["g"])("Demo 1"),m=Object(r["g"])(" | "),h=Object(r["g"])("Demo 2"),v=Object(r["g"])(" | "),j=Object(r["g"])("Demo 3"),O=Object(r["g"])(" | "),g=Object(r["g"])("Demo 4"),y=Object(r["g"])(" | ");function k(e,t,n,o,c,a){var u=Object(r["y"])("router-link"),l=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])("div",null,["demo"===e.$route.name?(Object(r["q"])(),Object(r["e"])("div",d,[b])):Object(r["f"])("",!0),Object(r["h"])("div",f,[s,Object(r["h"])(u,{to:{name:"demo-basic"}},{default:Object(r["I"])((function(){return[p]})),_:1}),m,Object(r["h"])(u,{to:{name:"demo-prop-sync"}},{default:Object(r["I"])((function(){return[h]})),_:1}),v,Object(r["h"])(u,{to:{name:"demo-full-screen-block"}},{default:Object(r["I"])((function(){return[j]})),_:1}),O,Object(r["h"])(u,{to:{name:"demo-prop-callback"}},{default:Object(r["I"])((function(){return[g]})),_:1}),y]),Object(r["h"])(l)])}var w={name:"demo"};w.render=k;var x=w,_=[{path:"/",name:"demo",component:x,children:[{path:"/basic",name:"demo-basic",component:function(){return n.e("callback").then(n.bind(null,"d339"))}},{path:"/prop-sync",name:"demo-prop-sync",component:function(){return n.e("callback").then(n.bind(null,"317d"))}},{path:"/demo-full-screen-block",name:"demo-full-screen-block",component:function(){return n.e("callback").then(n.bind(null,"1392"))}},{path:"/prop-callback",name:"demo-prop-callback",component:function(){return n.e("callback").then(n.bind(null,"b818"))}}]}],P=Object(i["a"])({history:Object(i["b"])(),routes:_}),S=P;Object(r["d"])(l).use(S).mount("#app")},9172:function(e,t,n){},"9ef5":function(e,t,n){"use strict";n("9172")}});
//# sourceMappingURL=app.15ea42ad.js.map