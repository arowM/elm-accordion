parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"dxOF":[function(require,module,exports) {
module.exports={};
},{}],"rf9Z":[function(require,module,exports) {
module.exports={wrap:"layout__wrap"};
},{}],"asMV":[function(require,module,exports) {
module.exports={title:"accordion__title",body:"accordion__body",content:"accordion__content"};
},{}],"8asW":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(i){return n(r,t,e,u,i)}}}}})}function a(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function o(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function f(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function c(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}var v={$:0};function s(n,r){return{$:1,a:n,b:r}}var l=t(s);function d(n){for(var r=v,t=n.length;t--;)r=s(n[t],r);return r}function b(n,r){return{a:n,b:r}}function h(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function g(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=s(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=s(n.a,r);return t}var m=e(function(n,r,t){for(var e=Array(n),u=0;n>u;u++)e[u]=t(r+u);return e}),p=t(function(n,r){for(var t=Array(n),e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,b(t,r)});function $(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var y=Math.ceil,A=Math.floor,w=Math.log;function _(n){return{$:2,b:n}}var j=_(function(n){return"number"!=typeof n?T("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?ur(n):!isFinite(n)||n%1?T("an INT",n):ur(n)});_(function(n){return"boolean"==typeof n?ur(n):T("a BOOL",n)}),_(function(n){return"number"==typeof n?ur(n):T("a FLOAT",n)}),_(function(n){return ur(O(n))}),_(function(n){return"string"==typeof n?ur(n):n instanceof String?ur(n+""):T("a STRING",n)});var k=t(function(n,r){return{$:6,d:n,b:r}});var N=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),E=t(function(n,r){return C(n,B(r))});function C(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?ur(n.c):T("null",r);case 3:return q(r)?L(n.b,r,d):T("a LIST",r);case 4:return q(r)?L(n.b,r,x):T("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return T("an OBJECT with a field named `"+t+"`",r);var e=C(n.b,r[t]);return Rn(e)?e:er(a(ar,t,e.a));case 7:var u=n.e;return q(r)?r.length>u?(e=C(n.b,r[u]),Rn(e)?e:er(a(or,u,e.a))):T("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):T("an ARRAY",r);case 8:if("object"!=typeof r||null===r||q(r))return T("an OBJECT",r);var i=v;for(var o in r)if(r.hasOwnProperty(o)){if(e=C(n.b,r[o]),!Rn(e))return er(a(ar,o,e.a));i=s(b(o,e.a),i)}return ur(Qn(i));case 9:for(var f=n.f,c=n.g,l=0;c.length>l;l++){if(e=C(c[l],r),!Rn(e))return e;f=f(e.a)}return ur(f);case 10:return e=C(n.b,r),Rn(e)?C(n.h(e.a),r):e;case 11:for(var h=v,g=n.g;g.b;g=g.b){if(e=C(g.a,r),Rn(e))return e;h=s(e.a,h)}return er(fr(Qn(h)));case 1:return er(a(ir,n.a,O(r)));case 0:return ur(n.a)}}function L(n,r,t){for(var e=r.length,u=Array(e),i=0;e>i;i++){var o=C(n,r[i]);if(!Rn(o))return er(a(or,i,o.a));u[i]=o.a}return ur(t(u))}function q(n){return Array.isArray(n)||"function"==typeof FileList&&n instanceof FileList}function x(n){return a(tr,n.length,function(r){return n[r]})}function T(n,r){return er(a(ir,"Expecting "+n,O(r)))}function F(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return F(n.b,r.b);case 6:return n.d===r.d&&F(n.b,r.b);case 7:return n.e===r.e&&F(n.b,r.b);case 9:return n.f===r.f&&z(n.g,r.g);case 10:return n.h===r.h&&F(n.b,r.b);case 11:return z(n.g,r.g)}}function z(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!F(n[e],r[e]))return!1;return!0}function O(n){return n}function B(n){return n}function R(n){return{$:0,a:n}}function S(n){return{$:2,b:n,c:null}}O(null);var J=t(function(n,r){return{$:3,b:n,d:r}}),D=0;function G(n){var r={$:0,e:D++,f:n,g:null,h:[]};return P(r),r}var I=!1,M=[];function P(n){if(M.push(n),!I){for(I=!0;n=M.shift();)Y(n);I=!1}}function Y(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,P(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var H={};function Q(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,c=n.f;function v(n){return a(J,v,{$:5,b:function(r){var a=r.a;return 0===r.$?o(u,t,a,n):i&&c?f(e,t,a.i,a.j,n):o(e,t,i?a.i:a.j,n)}})}return t.h=G(a(J,v,n.b))}var U=t(function(n,r){return S(function(t){n.g(r),t(R(0))})});function W(n){return{$:2,m:n}}var K,V=t(function(n,r){return{$:3,n:n,o:r}});function X(n,r,t){var e,u={};for(var i in Z(!0,r,u,null),Z(!1,t,u,null),n)(e=n[i]).h.push({$:"fx",a:u[i]||{i:v,j:v}}),P(e)}function Z(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){function u(n){for(var r=e;r;r=r.q)n=r.p(n);return n}return a(n?H[t].e:H[t].f,u,r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:v,j:v},n?t.i=s(r,t.i):t.j=s(r,t.j),t}(n,i,t[u]));case 2:for(var o=r.m;o.b;o=o.b)Z(n,o.a,t,e);return;case 3:return void Z(n,r.o,t,{p:r.n,q:e})}}var nn="undefined"!=typeof document?document:{};function rn(n,r){n.appendChild(r)}function tn(n){return{$:0,a:n}}var en=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var a=e.a;i+=a.b||0,u.push(a)}return i+=u.length,{$:1,c:r,d:sn(t),e:u,f:n,b:i}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var a=e.a;i+=a.b.b||0,u.push(a)}return i+=u.length,{$:2,c:r,d:sn(t),e:u,f:n,b:i}})})(void 0);var un,an=t(function(n,r){return{$:4,j:n,k:r,b:1+(r.b||0)}}),on=t(function(n,r){return{$:"a0",n:n,o:r}}),fn=t(function(n,r){return{$:"a1",n:n,o:r}}),cn=t(function(n,r){return{$:"a2",n:n,o:r}}),vn=t(function(n,r){return{$:"a3",n:n,o:r}});function sn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var a=r[e]||(r[e]={});"a3"===e&&"class"===u?ln(a,u,i):a[u]=i}else"className"===u?ln(r,u,B(i)):r[u]=B(i)}return r}function ln(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function dn(n,r){var t=n.$;if(5===t)return dn(n.k||(n.k=n.m()),r);if(0===t)return nn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(a=dn(e,i)).elm_event_node_ref=i,a}if(3===t)return bn(a=n.h(n.g),r,n.d),a;var a=n.f?nn.createElementNS(n.f,n.c):nn.createElement(n.c);K&&"a"==n.c&&a.addEventListener("click",K(a)),bn(a,r,n.d);for(var o=n.e,f=0;o.length>f;f++)rn(a,dn(1===t?o[f]:o[f].b,r));return a}function bn(n,r,t){for(var e in t){var u=t[e];"a1"===e?hn(n,u):"a0"===e?pn(n,r,u):"a3"===e?gn(n,u):"a4"===e?mn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function hn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function gn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function mn(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;void 0!==i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function pn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],a=e[u];if(i){if(a){if(a.q.$===i.$){a.q=i;continue}n.removeEventListener(u,a)}a=$n(r,i),n.addEventListener(u,a,un&&{passive:2>_r(i)}),e[u]=a}else n.removeEventListener(u,a),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){un=!0}}))}catch(n){}function $n(n,r){function t(r){var e=t.q,u=C(e.a,r);if(Rn(u)){for(var i,a=_r(e),o=u.a,f=a?3>a?o.a:o.k:o,c=1==a?o.b:3==a&&o.Q,v=(c&&r.stopPropagation(),(2==a?o.b:3==a&&o.O)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)f=i(f);else for(var s=i.length;s--;)f=i[s](f);v=v.p}v(f,c)}}return t.q=r,t}function yn(n,r){return n.$==r.$&&F(n.a,r.a)}function An(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function wn(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void An(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;t>u;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var a=n.l,o=r.l,f=a.length,c=f===o.length;c&&f--;)c=a[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return wn(n.k,r.k,v,0),void(v.length>0&&An(t,1,e,v));case 4:for(var s=n.j,l=r.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)d=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return d&&s.length!==l.length?void An(t,0,e,r):((d?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(s,l):s===l)||An(t,2,e,l),void wn(b,h,t,e+1));case 0:return void(n.a!==r.a&&An(t,3,e,r.a));case 1:return void _n(n,r,t,e,kn);case 2:return void _n(n,r,t,e,Nn);case 3:if(n.h!==r.h)return void An(t,0,e,r);var g=jn(n.d,r.d);g&&An(t,4,e,g);var m=r.i(n.g,r.g);return void(m&&An(t,5,e,m))}}}function _n(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=jn(n.d,r.d);i&&An(t,4,e,i),u(n,r,t,e)}else An(t,0,e,r)}function jn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],a=r[u];i===a&&"value"!==u&&"checked"!==u||"a0"===t&&yn(i,a)||((e=e||{})[u]=a)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=jn(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function kn(n,r,t,e){var u=n.e,i=r.e,a=u.length,o=i.length;a>o?An(t,6,e,{v:o,i:a-o}):o>a&&An(t,7,e,{v:a,e:i});for(var f=o>a?a:o,c=0;f>c;c++){var v=u[c];wn(v,i[c],t,++e),e+=v.b||0}}function Nn(n,r,t,e){for(var u=[],i={},a=[],o=n.e,f=r.e,c=o.length,v=f.length,s=0,l=0,d=e;c>s&&v>l;){var b=(N=o[s]).a,h=(E=f[l]).a,g=N.b,m=E.b,p=void 0,$=void 0;if(b!==h){var y=o[s+1],A=f[l+1];if(y){var w=y.a,_=y.b;$=h===w}if(A){var j=A.a,k=A.b;p=b===j}if(p&&$)wn(g,k,u,++d),Cn(i,u,b,m,l,a),d+=g.b||0,Ln(i,u,b,_,++d),d+=_.b||0,s+=2,l+=2;else if(p)d++,Cn(i,u,h,m,l,a),wn(g,k,u,d),d+=g.b||0,s+=1,l+=2;else if($)Ln(i,u,b,g,++d),d+=g.b||0,wn(_,m,u,++d),d+=_.b||0,s+=2,l+=1;else{if(!y||w!==j)break;Ln(i,u,b,g,++d),Cn(i,u,h,m,l,a),d+=g.b||0,wn(_,k,u,++d),d+=_.b||0,s+=2,l+=2}}else wn(g,m,u,++d),d+=g.b||0,s++,l++}for(;c>s;){var N;Ln(i,u,(N=o[s]).a,g=N.b,++d),d+=g.b||0,s++}for(;v>l;){var E,C=C||[];Cn(i,u,(E=f[l]).a,E.b,void 0,C),l++}(u.length>0||a.length>0||C)&&An(t,8,e,{w:u,x:a,y:C})}var En="_elmW6BL";function Cn(n,r,t,e,u,i){var a=n[t];if(!a)return i.push({r:u,A:a={c:0,z:e,r:u,s:void 0}}),void(n[t]=a);if(1===a.c){i.push({r:u,A:a}),a.c=2;var o=[];return wn(a.z,e,o,a.r),a.r=u,void(a.s.s={w:o,A:a})}Cn(n,r,t+En,e,u,i)}function Ln(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var a=[];return wn(e,i.z,a,u),void An(r,9,u,{w:a,A:i})}Ln(n,r,t+En,e,u)}else{var o=An(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function qn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,i,a,o,f){for(var c=u[i],v=c.r;v===a;){var s=c.$;if(1===s)n(t,e.k,c.s,f);else if(8===s)c.t=t,c.u=f,(l=c.s.w).length>0&&r(t,e,l,0,a,o,f);else if(9===s){c.t=t,c.u=f;var l,d=c.s;d&&(d.A.s=t,(l=d.w).length>0&&r(t,e,l,0,a,o,f))}else c.t=t,c.u=f;if(!(c=u[++i])||(v=c.r)>o)return i}var b=e.$;if(4===b){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,i,a+1,o,t.elm_event_node_ref)}for(var g=e.e,m=t.childNodes,p=0;g.length>p;p++){var $=1===b?g[p]:g[p].b,y=++a+($.b||0);if(!(a>v||v>y||(c=u[i=r(m[p],$,u,i,a,y,f)])&&(v=c.r)<=o))return i;a=y}return i}(r,t,e,0,0,t.b,u)}(n,r,t,e),xn(n,t))}function xn(n,r){for(var t=0;r.length>t;t++){var e=r[t],u=e.t,i=Tn(u,e);u===n&&(n=i)}return n}function Tn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=dn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return bn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return xn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=n.childNodes[e=t.v];u.length>e;e++)n.insertBefore(dn(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var a=t.A;return void 0!==a.r&&n.parentNode.removeChild(n),a.s=xn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=nn.createDocumentFragment(),e=0;n.length>e;e++){var u=n[e].A;rn(t,2===u.c?u.s:dn(u.z,r.u))}return t}}(t.y,r);n=xn(n,t.w);for(var u=t.x,i=0;u.length>i;i++){var a=u[i],o=a.A,f=2===o.c?o.s:dn(o.z,r.u);n.insertBefore(f,n.childNodes[a.r])}return e&&rn(n,e),n}(n,r);case 5:return r.s(n);default:$(10)}}var Fn=u(function(n,r,t,e){return function(n,r,t,e,u,i){var o=a(E,n,O(r?r.flags:void 0));Rn(o)||$(2);var f={},c=(o=t(o.a)).a,v=i(l,c),s=function(n,r){var t;for(var e in H){var u=H[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=Q(u,r)}return t}(f,l);function l(n,r){v(c=(o=a(e,n,c)).a,r),X(f,o.b,u(c))}return X(f,o.b,u(c)),s?{ports:s}:{}}(r,e,n.aw,n.aE,n.aC,function(r,t){var u=n.aG,i=e.node,f=function n(r){if(3===r.nodeType)return tn(r.textContent);if(1!==r.nodeType)return tn("");for(var t=v,e=r.attributes,u=e.length;u--;){var i=e[u];t=s(a(vn,i.name,i.value),t)}var f=r.tagName.toLowerCase(),c=v,l=r.childNodes;for(u=l.length;u--;)c=s(n(l[u]),c);return o(en,f,t,c)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(zn(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&zn(e),t=2)}}(t,function(n){var t=u(n),e=function(n,r){var t=[];return wn(n,r,t,0),t}(f,t);i=qn(i,f,e,r),f=t})})}),zn=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var On,Bn,Rn=function(n){return!n.$},Sn=l,Jn=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Dn=y,Gn=t(function(n,r){return w(r)/w(n)}),In=Dn(a(Gn,2,32)),Mn=[],Pn=f(Jn,0,In,Mn,Mn),Yn=p,Hn=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=a(n,t.a,r);n=u,r=i,t=e}}),Qn=function(n){return o(Hn,Sn,v,n)},Un=t(function(n,r){for(;;){var t=a(Yn,32,n),e=t.b,u=a(Sn,{$:0,a:t.a},r);if(!e.b)return Qn(u);n=e,r=u}}),Wn=t(function(n,r){for(;;){var t=Dn(r/32);if(1===t)return a(Yn,32,n).a;n=a(Un,n,v),r=t}}),Kn=A,Vn=t(function(n,r){return function n(r,t,e){if("object"!=typeof r)return r===t?0:t>r?-1:1;if(void 0===r.$)return(e=n(r.a,t.a))?e:(e=n(r.b,t.b))?e:n(r.c,t.c);for(;r.b&&t.b&&!(e=n(r.a,t.a));r=r.b,t=t.b);return e||(r.b?1:t.b?-1:0)}(n,r)>0?n:r}),Xn=function(n){return n.length},Zn=t(function(n,r){if(r.a){var t=32*r.a,e=Kn(a(Gn,32,t-1)),u=n?Qn(r.d):r.d,i=a(Wn,u,r.a);return f(Jn,Xn(r.c)+t,a(Vn,5,e*In),i,r.c)}return f(Jn,Xn(r.c),In,Mn,r.c)}),nr=m,rr=i(function(n,r,t,e,u){for(;;){if(0>r)return a(Zn,!1,{d:e,a:t/32|0,c:u});var i={$:1,a:o(nr,32,r,n)};n=n,r-=32,t=t,e=a(Sn,i,e),u=u}}),tr=t(function(n,r){if(n>0){var t=n%32;return c(rr,r,n-t-32,n,v,o(nr,t,n-t,r))}return Pn}),er=function(n){return{$:1,a:n}},ur=function(n){return{$:0,a:n}},ir=t(function(n,r){return{$:3,a:n,b:r}}),ar=t(function(n,r){return{$:0,a:n,b:r}}),or=t(function(n,r){return{$:1,a:n,b:r}}),fr=function(n){return{$:2,a:n}},cr=W,vr=cr(v),sr=b({C:!1,J:{$:1}},vr),lr=function(n){return{$:0,a:n}},dr=function(n){return{$:1,a:n}},br=function(n){return{$:2,a:n}},hr=V,gr=b({y:sr.a,z:sr.a,A:sr.a},cr(d([a(hr,lr,sr.b),a(hr,dr,sr.b),a(hr,br,sr.b)]))),mr=W(v),pr=t(function(n,r){return b({C:!r.C,J:(t=n,{$:0,a:t})},vr);var t}),$r=t(function(n,r){switch(n.$){case 0:var t=a(pr,n.a,r.y),e=t.b;return b(h(r,{y:t.a}),a(hr,lr,e));case 1:var u=a(pr,n.a,r.z);return e=u.b,b(h(r,{z:u.a}),a(hr,dr,e));default:var i=a(pr,n.a,r.A);return e=i.b,b(h(r,{A:i.a}),a(hr,br,e))}}),yr=O,Ar=function(n){return n},wr=N,_r=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},jr=t(function(n,r){return a(cn,n,yr(r))})("className"),kr=function(n){return jr("accordion__"+n)},Nr=u(function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var c=i.a,v=i.b;if(v.b){var s=v.a,l=v.b;if(l.b){var d=l.b;return a(n,u,a(n,c,a(n,s,a(n,l.a,t>500?o(Hn,n,r,Qn(d)):f(Nr,n,r,t+1,d)))))}return a(n,u,a(n,c,a(n,s,r)))}return a(n,u,a(n,c,r))}return a(n,u,r)}return r}),Er=e(function(n,r,t){return f(Nr,n,r,0,t)}),Cr=k,Lr=j,qr=a(t(function(n,r){return o(Er,Cr,r,n)}),d(["target","parentElement","children","1","scrollHeight"]),Lr),xr=en("div"),Tr=tn,Fr=t(function(n,r){return a(vn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),zr=fn,Or=on,Br=t(function(n,r){return a(Or,n,{$:0,a:r})}),Rr=t(function(n,r){return a(xr,d([kr("wrapper")]),d([a(xr,d([kr("title"),a(Br,"click",a(wr,Ar,qr))]),d([Tr("Accordion")])),a(xr,d([kr("body"),a(zr,"max-height",(e=r.J,1===e.$?"":(t=e.a,t+"px"))),a(Fr,"aria-hidden",r.C?"false":"true")]),d([a(xr,d([kr("content")]),d([Tr(n)]))]))]));var t,e}),Sr="\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",Jr=function(n){return a(xr,d([("wrap",jr("layout__wrap"))]),n)},Dr=e(function(n,r,t){return n>0?o(Dr,n>>1,g(r,r),1&n?g(t,r):t):t}),Gr=t(function(n,r){return o(Dr,n,r,"")}),Ir=an,Mr=R,Pr=Mr(0),Yr=t(function(n,r){return o(Er,t(function(r,t){return a(Sn,n(r),t)}),v,r)}),Hr=J,Qr=t(function(n,r){return a(Hr,function(r){return Mr(n(r))},r)}),Ur=e(function(n,r,t){return a(Hr,function(r){return a(Hr,function(t){return Mr(a(n,r,t))},t)},r)}),Wr=U,Kr=t(function(n,r){var t=r;return function(n){return S(function(r){r(R(G(n)))})}(a(Hr,Wr(n),t))});H.Task={b:Pr,c:e(function(n,r){return a(Qr,function(){return 0},(t=a(Yr,Kr(n),r),o(Er,Ur(Sn),Mr(v),t)));var t}),d:e(function(){return Mr(0)}),e:t(function(n,r){return a(Qr,n,r)}),f:void 0},On={Main:{init:Fn({aw:function(){return gr},aC:function(){return mr},aE:$r,aG:function(n){return Jr(d([Jr(d([a(Ir,lr,a(Rr,a(Gr,3,Sr),n.y))])),Jr(d([a(Ir,dr,a(Rr,a(Gr,2,Sr),n.z))])),Jr(d([a(Ir,br,a(Rr,a(Gr,4,Sr),n.A))]))]))}})((Bn=0,{$:0,a:Bn}))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?$(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,On):n.Elm=On}(this);
},{}],"Focm":[function(require,module,exports) {
require("./style/reset.scss"),require("./style/layout.scss"),require("./style/accordion.scss");var e=require("./Main.elm"),s=e.Elm,l=s.Main.init({node:document.getElementById("elm"),flags:null});
},{"./style/reset.scss":"dxOF","./style/layout.scss":"rf9Z","./style/accordion.scss":"asMV","./Main.elm":"8asW"}]},{},["Focm"], null)
//# sourceMappingURL=/elm-accordion/src.00a9096a.map