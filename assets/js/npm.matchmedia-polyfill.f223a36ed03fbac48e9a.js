(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"1yfs":function(e,t){!function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var e=window.matchMedia,t=e("only all").matches,n=!1,i=0,a=[],d=function(t){clearTimeout(i),i=setTimeout(function(){for(var t=0,n=a.length;t<n;t++){var i=a[t].mql,d=a[t].listeners||[],o=e(i.media).matches;if(o!==i.matches){i.matches=o;for(var c=0,r=d.length;c<r;c++)d[c].call(window,i)}}},30)};window.matchMedia=function(i){var o=e(i),c=[],r=0;return o.addListener=function(e){t&&(n||(n=!0,window.addEventListener("resize",d,!0)),0===r&&(r=a.push({mql:o,listeners:c})),c.push(e))},o.removeListener=function(e){for(var t=0,n=c.length;t<n;t++)c[t]===e&&c.splice(t,1)},o}}()},"7cND":function(e,t){window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t,n=document.createElement("style"),i=document.getElementsByTagName("script")[0];n.type="text/css",n.id="matchmediajs-test",i?i.parentNode.insertBefore(n,i):document.head.appendChild(n),t="getComputedStyle"in window&&window.getComputedStyle(n,null)||n.currentStyle,e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return n.styleSheet?n.styleSheet.cssText=i:n.textContent=i,"1px"===t.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}())}}]);
//# sourceMappingURL=npm.matchmedia-polyfill.f223a36ed03fbac48e9a.js.map