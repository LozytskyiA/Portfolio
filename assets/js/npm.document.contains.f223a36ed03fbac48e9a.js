(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5yQQ":function(n,t,e){"use strict";var o=e("nRDI");n.exports=function(){if("undefined"!=typeof document){if(document.contains)return document.contains;if(document.body&&document.body.contains)return document.body.contains}return o}},Gn0q:function(n,t,e){"use strict";var o=e("82c2"),r=e("5yQQ");n.exports=function(){var n=r();return"undefined"!=typeof document&&(o(document,{contains:n},{contains:function(){return document.contains!==n}}),"undefined"!=typeof Element&&o(Element.prototype,{contains:n},{contains:function(){return Element.prototype.contains!==n}})),n}},Kz4e:function(n,t,e){"use strict";e("Gn0q")()},nRDI:function(n,t,e){"use strict";n.exports=function(n){if(arguments.length<1)throw new TypeError("1 argument is required");if("object"!=typeof n)throw new TypeError("Argument 1 (”other“) to Node.contains must be an instance of Node");var t=n;do{if(this===t)return!0;t&&(t=t.parentNode)}while(t);return!1}}}]);
//# sourceMappingURL=npm.document.contains.f223a36ed03fbac48e9a.js.map