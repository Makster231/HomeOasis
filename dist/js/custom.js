!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){(function(e,t,n,r,o,i,s,a,u){"use strict";function f(e,t){e?($(".js_arrow-left").click(function(){$("".concat(t," .owl-prev")).trigger("click")}),$(".js_arrow-right").click(function(){$("".concat(t," .owl-next")).trigger("click")})):($(".js_arrow-left").unbind("click"),$(".js_arrow-right").unbind("click"))}!function(e,t,n){function r(){e(".js_section-video--block").on("mouseover",function(){e(this).find("video").get(0).play()}),e(".js_section-video--block").on("mouseleave",function(){e(this).find("video").get(0).pause()})}function o(){var e=n.querySelectorAll(".js-player");if(e.length)for(var t=0;t<e.length;t++)new Plyr(e[t])}e(function(){o(),r()})}(window.jQuery,window,document),function(e,t,n){function r(){e(".js_contacts-slider").owlCarousel({items:1,loop:!0,dots:!1,autoplay:!0,autoplayTimeout:1e4,smartSpeed:1e3,nav:!0,navText:["<span class='icon-owl icon-prev'></span>","<span class='icon-owl icon-next'></span>"]})}e(function(){r()})}(window.jQuery,window,document),function(e,t,n){function r(){e(".js_team-slider").owlCarousel({items:1,loop:!0,dots:!1,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:["<span class='icon-owl icon-prev'></span>","<span class='icon-owl icon-next'></span>"]})}e(function(){r()})}(window.jQuery,window,document),function(e,t,n){function r(){e(".js_nav-item").click(function(){var t=e(this);e("body").removeClass("js_bg-color--white"),e(".js_header-menu").addClass("js_active"),e(".js_section, .js_footer-services").addClass("js_hidden"),e(".js_nav-item").removeClass("js_active"),e(".js_footer-navigation").removeClass("js_navigation-portfolio  js_navigation-team js_navigation-services js_navigation-blog js_navigation-contacts"),f(!1),t.is(".js_nav-portfolio")&&(e(".js_section-portfolio").removeClass("js_hidden"),e(".js_footer-navigation, .js_nav-portfolio").addClass("js_active"),e(".js_footer-description").addClass("js_hidden")),t.is(".js_nav-video")&&(e(".js_section-video, .js_footer-description").removeClass("js_hidden"),e(".js_nav-video").addClass("js_active"),e(".js_footer-navigation").removeClass("js_active")),t.is(".js_nav-team")&&(f(!0,".js_team-slider"),e(".js_section-team").removeClass("js_hidden"),e(".js_footer-navigation, .js_nav-team").addClass("js_active"),e(".js_footer-description").addClass("js_hidden"),e(".js_footer-navigation").addClass("js_navigation-team")),t.is(".js_nav-services")&&(e(".js_section-services, .js_footer-services").removeClass("js_hidden"),e(".js_footer-navigation, .js_nav-services").addClass("js_active"),e(".js_footer-description").addClass("js_hidden"),e(".js_footer-navigation").addClass("js_navigation-services")),t.is(".js_nav-blog")&&(e(".js_section-blog").removeClass("js_hidden"),e(".js_footer-navigation, .js_nav-blog").addClass("js_active"),e(".js_footer-description").addClass("js_hidden"),e(".js_footer-navigation").addClass("js_navigation-blog")),t.is(".js_nav-contacts")&&(f(!0,".js_contacts-slider"),e("body").addClass("js_bg-color--white"),e(".js_section-contacts").removeClass("js_hidden"),e(".js_footer-navigation, .js_nav-contacts").addClass("js_active"),e(".js_footer-description").addClass("js_hidden"),e(".js_footer-navigation").addClass("js_navigation-contacts"))})}function o(){e(".js_logo").click(function(){e(".js_header-menu").removeClass("js_active"),e(".js_section").addClass("js_hidden"),e(".js_section-start").removeClass("js_hidden"),e(".js_nav-item").removeClass("js_active")})}e(function(){r(),o()})}(window.jQuery,window,document),"objectFit"in document.documentElement.style==!1&&document.addEventListener("DOMContentLoaded",function(){Array.prototype.forEach.call(document.querySelectorAll("[data-object-fit]"),function(e){(e.runtimeStyle||e.style).background='url("'+e.src+'") no-repeat 50%/'+(e.currentStyle?e.currentStyle["object-fit"]:e.getAttribute("data-object-fit")),e.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e.width+"' height='"+e.height+"'%3E%3C/svg%3E"})}),function(e,t,n){function r(){e("body").addClass("bg-color--white"),e(".js_header-menu").addClass("js_active"),e(".js_nav-item").removeClass("js_active"),e(".js_footer-navigation, .js_nav-blog").addClass("js_active"),e(".js_footer-description").addClass("js_hidden"),e(".js_footer-navigation").addClass("js_navigation-blog--page")}e(function(){e(".js_blog-page").length&&r()})}(window.jQuery,window,document),function(e,t,n){e(function(){e("head").prepend('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />','<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />')})}(window.jQuery,window,document),function(e,t,n){e(function(){e("body").css("opacity",1)})}(window.jQuery,window,document)}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b364e8ae.js","/")},{"9FoBSB":5,buffer:3}],2:[function(e,t,n){(function(e,t,r,o,i,s,a,u,f){!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===l?62:t===s||t===c?63:t<a?-1:t<a+10?t-a+26+26:t<f+26?t-f:t<u+26?t-u+26:void 0}function n(e){function n(e){f[c++]=e}var r,i,s,a,u,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;u="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,f=new o(3*e.length/4-u),s=u>0?e.length-4:e.length;var c=0;for(r=0,i=0;r<s;r+=4,i+=3)a=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===u?(a=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&a)):1===u&&(a=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(a>>8&255),n(255&a)),f}function r(e){function t(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,s=e.length%3,a="";for(r=0,i=e.length-s;r<i;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=n(o);switch(s){case 1:o=e[e.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),s="/".charCodeAt(0),a="0".charCodeAt(0),u="a".charCodeAt(0),f="A".charCodeAt(0),l="-".charCodeAt(0),c="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}(void 0===n?this.base64js={}:n)}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\..\\node_modules\\base64-js\\lib")},{"9FoBSB":5,buffer:3}],3:[function(e,t,n){(function(t,r,o,i,s,a,u,f,l){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=M(e);e.length%4!=0;)e+="=";var i;if("number"===r)i=D(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=D(e.length)}var s;o._useTypedArrays?s=o._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)s._set(e);else if(Q(e))for(a=0;a<i;a++)o.isBuffer(e)?s[a]=e.readUInt8(a):s[a]=e[a];else if("string"===r)s.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;a<i;a++)s[a]=0;return s}function c(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var s=t.length;H(s%2==0,"Invalid hex string"),r>s/2&&(r=s/2);for(var a=0;a<r;a++){var u=parseInt(t.substr(2*a,2),16);H(!isNaN(u),"Invalid hex string"),e[n+a]=u}return o._charsWritten=2*a,a}function d(e,t,n,r){return o._charsWritten=R($(t),e,n,r)}function h(e,t,n,r){return o._charsWritten=R(W(t),e,n,r)}function g(e,t,n,r){return h(e,t,n,r)}function v(e,t,n,r){return o._charsWritten=R(J(t),e,n,r)}function p(e,t,n,r){return o._charsWritten=R(P(t),e,n,r)}function w(e,t,n){return 0===t&&n===e.length?K.fromByteArray(e):K.fromByteArray(e.slice(t,n))}function y(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=X(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+X(o)}function b(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function m(e,t,n){return b(e,t,n)}function _(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=q(e[i]);return o}function j(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function E(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function B(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function I(e,t,n,r){if(r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+1<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=E(e,t,n,!0);return 32768&o?-1*(65535-o+1):o}}function C(e,t,n,r){if(r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+3<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=B(e,t,n,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function A(e,t,n,r){return r||(H("boolean"==typeof n,"missing or invalid endian"),H(t+3<e.length,"Trying to read beyond buffer length")),V.read(e,t,n,23,4)}function L(e,t,n,r){return r||(H("boolean"==typeof n,"missing or invalid endian"),H(t+7<e.length,"Trying to read beyond buffer length")),V.read(e,t,n,52,8)}function U(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));var i=e.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,2);s<a;s++)e[n+s]=(t&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function S(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));var i=e.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,4);s<a;s++)e[n+s]=t>>>8*(r?s:3-s)&255}function k(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+1<e.length,"Trying to write beyond buffer length"),z(t,32767,-32768)),n>=e.length||(t>=0?U(e,t,n,r,o):U(e,65535+t+1,n,r,o))}function T(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"Trying to write beyond buffer length"),z(t,2147483647,-2147483648)),n>=e.length||(t>=0?S(e,t,n,r,o):S(e,4294967295+t+1,n,r,o))}function x(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"Trying to write beyond buffer length"),G(t,3.4028234663852886e38,-3.4028234663852886e38)),n>=e.length||V.write(e,t,n,r,23,4)}function F(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+7<e.length,"Trying to write beyond buffer length"),G(t,1.7976931348623157e308,-1.7976931348623157e308)),n>=e.length||V.write(e,t,n,r,52,8)}function M(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function N(e,t,n){return"number"!=typeof e?n:(e=~~e)>=t?t:e>=0?e:(e+=t,e>=0?e:0)}function D(e){return e=~~Math.ceil(+e),e<0?0:e}function O(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function Q(e){return O(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function q(e){return e<16?"0"+e.toString(16):e.toString(16)}function $(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),s=0;s<i.length;s++)t.push(parseInt(i[s],16))}}return t}function W(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function P(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function J(e){return K.toByteArray(e)}function R(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function X(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){H("number"==typeof e,"cannot write a non-number as a number"),H(e>=0,"specified a negative value for writing an unsigned value"),H(e<=t,"value is larger than maximum value for type"),H(Math.floor(e)===e,"value has a fractional component")}function z(e,t,n){H("number"==typeof e,"cannot write a non-number as a number"),H(e<=t,"value larger than maximum allowed value"),H(e>=n,"value smaller than minimum allowed value"),H(Math.floor(e)===e,"value has a fractional component")}function G(e,t,n){H("number"==typeof e,"cannot write a non-number as a number"),H(e<=t,"value larger than maximum allowed value"),H(e>=n,"value smaller than minimum allowed value")}function H(e,t){if(!e)throw new Error(t||"Failed assertion")}var K=e("base64-js"),V=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=$(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=J(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(H(O(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var s=e[n];s.copy(r,i),i+=s.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n))>i&&(n=i):n=i,r=String(r||"utf8").toLowerCase();var s;switch(r){case"hex":s=c(this,e,t,n);break;case"utf8":case"utf-8":s=d(this,e,t,n);break;case"ascii":s=h(this,e,t,n);break;case"binary":s=g(this,e,t,n);break;case"base64":s=v(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":s=p(this,e,t,n);break;default:throw new Error("Unknown encoding")}return s},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):n=r.length)===t)return"";var o;switch(e){case"hex":o=_(r,t,n);break;case"utf8":case"utf-8":o=y(r,t,n);break;case"ascii":o=b(r,t,n);break;case"binary":o=m(r,t,n);break;case"base64":o=w(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=j(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){H(r>=n,"sourceEnd < sourceStart"),H(t>=0&&t<e.length,"targetStart out of bounds"),H(n>=0&&n<i.length,"sourceStart out of bounds"),H(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var s=r-n;if(s<100||!o._useTypedArrays)for(var a=0;a<s;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+s),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=N(e,n,0),t=N(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),s=0;s<r;s++)i[s]=this[s+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(H(void 0!==e&&null!==e,"missing offset"),H(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return E(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return E(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return B(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return B(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(H(void 0!==e&&null!==e,"missing offset"),H(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){return 128&this[e]?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return I(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return I(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return C(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return C(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return A(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return A(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return L(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return L(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(H(void 0!==e&&null!==e,"missing value"),H(void 0!==t&&null!==t,"missing offset"),H(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){U(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){U(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(H(void 0!==e&&null!==e,"missing value"),H(void 0!==t&&null!==t,"missing offset"),H(t<this.length,"Trying to write beyond buffer length"),z(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){F(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){F(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),H("number"==typeof e&&!isNaN(e),"value is not a number"),H(n>=t,"end < start"),n!==t&&0!==this.length){H(t>=0&&t<this.length,"start out of bounds"),H(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=q(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var Z=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=Z.get,e.set=Z.set,e.write=Z.write,e.toString=Z.toString,e.toLocaleString=Z.toString,e.toJSON=Z.toJSON,e.copy=Z.copy,e.slice=Z.slice,e.readUInt8=Z.readUInt8,e.readUInt16LE=Z.readUInt16LE,e.readUInt16BE=Z.readUInt16BE,e.readUInt32LE=Z.readUInt32LE,e.readUInt32BE=Z.readUInt32BE,e.readInt8=Z.readInt8,e.readInt16LE=Z.readInt16LE,e.readInt16BE=Z.readInt16BE,e.readInt32LE=Z.readInt32LE,e.readInt32BE=Z.readInt32BE,e.readFloatLE=Z.readFloatLE,e.readFloatBE=Z.readFloatBE,e.readDoubleLE=Z.readDoubleLE,e.readDoubleBE=Z.readDoubleBE,e.writeUInt8=Z.writeUInt8,e.writeUInt16LE=Z.writeUInt16LE,e.writeUInt16BE=Z.writeUInt16BE,e.writeUInt32LE=Z.writeUInt32LE,e.writeUInt32BE=Z.writeUInt32BE,e.writeInt8=Z.writeInt8,e.writeInt16LE=Z.writeInt16LE,e.writeInt16BE=Z.writeInt16BE,e.writeInt32LE=Z.writeInt32LE,e.writeInt32BE=Z.writeInt32BE,e.writeFloatLE=Z.writeFloatLE,e.writeFloatBE=Z.writeFloatBE,e.writeDoubleLE=Z.writeDoubleLE,e.writeDoubleBE=Z.writeDoubleBE,e.fill=Z.fill,e.inspect=Z.inspect,e.toArrayBuffer=Z.toArrayBuffer,e}}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\buffer\\index.js","/..\\..\\..\\node_modules\\buffer")},{"9FoBSB":5,"base64-js":2,buffer:3,ieee754:4}],4:[function(e,t,n){(function(e,t,r,o,i,s,a,u,f){n.read=function(e,t,n,r,o){var i,s,a=8*o-r-1,u=(1<<a)-1,f=u>>1,l=-7,c=n?o-1:0,d=n?-1:1,h=e[t+c];for(c+=d,i=h&(1<<-l)-1,h>>=-l,l+=a;l>0;i=256*i+e[t+c],c+=d,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=r;l>0;s=256*s+e[t+c],c+=d,l-=8);if(0===i)i=1-f;else{if(i===u)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,r),i-=f}return(h?-1:1)*s*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var s,a,u,f=8*i-o-1,l=(1<<f)-1,c=l>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,g=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),t+=s+c>=1?d/u:d*Math.pow(2,1-c),t*u>=2&&(s++,u/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(t*u-1)*Math.pow(2,o),s+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;e[n+h]=255&a,h+=g,a/=256,o-=8);for(s=s<<o|a,f+=o;f>0;e[n+h]=255&s,h+=g,s/=256,f-=8);e[n+h-g]|=128*v}}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\ieee754\\index.js","/..\\..\\..\\node_modules\\ieee754")},{"9FoBSB":5,buffer:3}],5:[function(e,t,n){(function(e,n,r,o,i,s,a,u,f){function l(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){n.shift()()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=l,e.addListener=l,e.once=l,e.off=l,e.removeListener=l,e.removeAllListeners=l,e.emit=l,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\process\\browser.js","/..\\..\\..\\node_modules\\process")},{"9FoBSB":5,buffer:3}]},{},[1]);