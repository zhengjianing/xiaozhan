/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */
(function(e,t){"use strict";function n(e){var t=e.length,n=st.type(e);return st.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Tt[e]={};return st.each(e.match(lt)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(st.acceptData(e)){var o,a,s=st.expando,u="string"==typeof n,l=e.nodeType,c=l?st.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||st.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=st.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=st.extend(c[f],n):c[f].data=st.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[st.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[st.camelCase(n)])):a=o,a}}function o(e,t,n){if(st.acceptData(e)){var r,i,o,a=e.nodeType,u=a?st.cache:e,l=a?e[st.expando]:st.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){st.isArray(t)?t=t.concat(st.map(t,st.camelCase)):t in r?t=[t]:(t=st.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:st.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?st.cleanData([e],!0):st.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:wt.test(r)?st.parseJSON(r):r}catch(o){}st.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!st.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,st.isFunction(t))return st.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return st.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=st.grep(e,function(e){return 1===e.nodeType});if(Wt.test(t))return st.filter(t,r,!n);t=st.filter(t,r)}return st.grep(e,function(e){return st.inArray(e,t)>=0===n})}function p(e){var t=zt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=nn.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)st._data(n,"globalEval",!t||st._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&st.hasData(e)){var n,r,i,o=st._data(e),a=st._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)st.event.add(t,n,s[n][r])}a.data&&(a.data=st.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!st.support.noCloneEvent&&t[st.expando]){r=st._data(t);for(i in r.events)st.removeEvent(t,i,r.handle);t.removeAttribute(st.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),st.support.html5Clone&&e.innerHTML&&!st.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Zt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=e.getElementsByTagName!==t?e.getElementsByTagName(n||"*"):e.querySelectorAll!==t?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||st.nodeName(i,n)?a.push(i):st.merge(a,b(i,n));return n===t||n&&st.nodeName(e,n)?st.merge([e],a):a}function x(e){Zt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===st.css(e,"display")||!st.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=st._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&w(n)&&(r[i]=st._data(n,"olddisplay",S(n.nodeName)))):r[i]||w(n)||st._data(n,"olddisplay",st.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=mn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=st.css(e,n+wn[o],!0,i)),r?("content"===n&&(a-=st.css(e,"padding"+wn[o],!0,i)),"margin"!==n&&(a-=st.css(e,"border"+wn[o]+"Width",!0,i))):(a+=st.css(e,"padding"+wn[o],!0,i),"padding"!==n&&(a+=st.css(e,"border"+wn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ln(e),a=st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=un(e,t,o),(0>i||null==i)&&(i=e.style[t]),yn.test(i))return i;r=a&&(st.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=bn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||st("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),bn[e]=n),n}function A(e,t){var n=st(t.createElement(e)).appendTo(t.body),r=st.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(st.isArray(t))st.each(t,function(t,i){n||kn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==st.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(lt)||[];if(st.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,st.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===$n;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=st.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&st.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Qn=t}),Qn=st.now()}function B(e,t){st.each(t,function(t,n){for(var r=(rr[t]||[]).concat(rr["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=nr.length,s=st.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qn||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:st.extend({},t),opts:st.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=st.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=nr[o].call(l,e,c,l.opts))return r;return B(l,c),st.isFunction(l.opts.start)&&l.opts.start.call(e,l),st.fx.timer(st.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=st.camelCase(n),i=t[r],o=e[n],st.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=st.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(c=st._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,st.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===st.css(e,"display")&&"none"===st.css(e,"float")&&(st.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",st.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Zn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=st._data(e,"fxshow")||st._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?st(e).show():p.done(function(){st(e).hide()}),p.done(function(){var t;st._removeData(e,"fxshow");for(t in h)st.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||st.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=wn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return st.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.0",et=K.concat,tt=K.push,nt=K.slice,rt=K.indexOf,it=Q.toString,ot=Q.hasOwnProperty,at=Z.trim,st=function(e,t){return new st.fn.init(e,t,X)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=/\S+/g,ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^[\],:{}\s]*$/,ht=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,mt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,vt=/-([\da-z])/gi,bt=function(e,t){return t.toUpperCase()},xt=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xt,!1),st.ready()):"complete"===V.readyState&&(V.detachEvent("onreadystatechange",xt),st.ready())};st.fn=st.prototype={jquery:Z,constructor:st,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof st?n[0]:n,st.merge(this,st.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pt.test(i[1])&&st.isPlainObject(n))for(i in n)st.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):st.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),st.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return nt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=st.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return st.each(this,e,t)},ready:function(e){return st.ready.promise().done(e),this},slice:function(){return this.pushStack(nt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(st.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:tt,sort:[].sort,splice:[].splice},st.fn.init.prototype=st.fn,st.extend=st.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||st.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(st.isPlainObject(i)||(o=st.isArray(i)))?(o?(o=!1,a=r&&st.isArray(r)?r:[]):a=r&&st.isPlainObject(r)?r:{},s[n]=st.extend(c,a,i)):i!==t&&(s[n]=i));return s},st.extend({noConflict:function(t){return e.$===st&&(e.$=G),t&&e.jQuery===st&&(e.jQuery=J),st},isReady:!1,readyWait:1,holdReady:function(e){e?st.readyWait++:st.ready(!0)},ready:function(e){if(e===!0?!--st.readyWait:!st.isReady){if(!V.body)return setTimeout(st.ready);st.isReady=!0,e!==!0&&--st.readyWait>0||(U.resolveWith(V,[st]),st.fn.trigger&&st(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===st.type(e)},isArray:Array.isArray||function(e){return"array"===st.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[it.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==st.type(e)||e.nodeType||st.isWindow(e))return!1;try{if(e.constructor&&!ot.call(e,"constructor")&&!ot.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||ot.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=st.buildFragment([e],t,i),i&&st(i).remove(),st.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=st.trim(n),n&&dt.test(n.replace(gt,"@").replace(mt,"]").replace(ht,"")))?Function("return "+n)():(st.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&st.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(vt,bt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:at&&!at.call("\ufeff\u00a0")?function(e){return null==e?"":at.call(e)}:function(e){return null==e?"":(e+"").replace(ct,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?st.merge(r,"string"==typeof e?[e]:e):tt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(rt)return rt.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return et.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),st.isFunction(e)?(i=nt.call(arguments,2),o=function(){return e.apply(n||this,i.concat(nt.call(arguments)))},o.guid=e.guid=e.guid||st.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===st.type(r)){o=!0;for(u in r)st.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,st.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(st(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),st.ready.promise=function(t){if(!U)if(U=st.Deferred(),"complete"===V.readyState)setTimeout(st.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xt,!1),e.addEventListener("load",st.ready,!1);else{V.attachEvent("onreadystatechange",xt),e.attachEvent("onload",st.ready);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!st.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}st.ready()}}()}return U.promise(t)},st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=st(V);var Tt={};st.Callbacks=function(e){e="string"==typeof e?Tt[e]||r(e):st.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){st.each(t,function(t,n){var i=st.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&st.each(arguments,function(e,t){for(var n;(n=st.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return st.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},st.extend({Deferred:function(e){var t=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return st.Deferred(function(n){st.each(t,function(t,o){var a=o[0],s=st.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&st.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?st.extend(e,r):r}},i={};return r.pipe=r.then,st.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=nt.call(arguments),a=o.length,s=1!==a||e&&st.isFunction(e.promise)?a:0,u=1===s?e:st.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?nt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&st.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),st.support=function(){var n,r,i,o,a,s,u,l,c,f,p=V.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!r||!i||!r.length)return{};o=V.createElement("select"),a=o.appendChild(V.createElement("option")),s=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",n={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,n.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,n.optDisabled=!a.disabled;try{delete p.test}catch(d){n.deleteExpando=!1}s=V.createElement("input"),s.setAttribute("value",""),n.input=""===s.getAttribute("value"),s.value="t",s.setAttribute("type","radio"),n.radioValue="t"===s.value,s.setAttribute("checked","t"),s.setAttribute("name","t"),u=V.createDocumentFragment(),u.appendChild(s),n.appendChecked=s.checked,n.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){n.noCloneEvent=!1}),p.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+f,"t"),n[f+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===p.style.backgroundClip,st(function(){var r,i,o,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=V.getElementsByTagName("body")[0];s&&(r=V.createElement("div"),r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(r).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",n.reliableHiddenOffsets=c&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",n.boxSizing=4===p.offsetWidth,n.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(n.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,n.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,i=p.appendChild(V.createElement("div")),i.style.cssText=p.style.cssText=a,i.style.marginRight=i.style.width="0",p.style.width="1px",n.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),p.style.zoom!==t&&(p.innerHTML="",p.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",n.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",n.shrinkWrapBlocks=3!==p.offsetWidth,s.style.zoom=1),s.removeChild(r),r=p=o=i=null)}),r=o=u=a=i=s=null,n}();var wt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;st.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?st.cache[e[st.expando]]:e[st.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&st.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),st.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=st.camelCase(i.substring(5)),a(o,i,u[i]));st._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){st.data(this,e)}):st.access(this,function(n){return n===t?o?a(o,e,st.data(o,e)):null:(this.each(function(){st.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){st.removeData(this,e)})}}),st.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=st._data(e,n),r&&(!i||st.isArray(r)?i=st._data(e,n,st.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=st.queue(e,t),r=n.length,i=n.shift(),o=st._queueHooks(e,t),a=function(){st.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return st._data(e,n)||st._data(e,n,{empty:st.Callbacks("once memory").add(function(){st._removeData(e,t+"queue"),st._removeData(e,n)})})}}),st.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?st.queue(this[0],e):n===t?this:this.each(function(){var t=st.queue(this,e,n);st._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&st.dequeue(this,e)})},dequeue:function(e){return this.each(function(){st.dequeue(this,e)})},delay:function(e,t){return e=st.fx?st.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=st.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=st._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ct,kt,Et=/[\t\r\n]/g,St=/\r/g,At=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=st.support.getSetAttribute,Mt=st.support.input;st.fn.extend({attr:function(e,t){return st.access(this,st.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){st.removeAttr(this,e)})},prop:function(e,t){return st.access(this,st.prop,e,t,arguments.length>1)},removeProp:function(e){return e=st.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=st.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?st.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return st.isFunction(e)?this.each(function(n){st(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=st(this),s=t,u=e.match(lt)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||e===!1?"":st._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=st.isFunction(e),this.each(function(r){var o,a=st(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":st.isArray(o)&&(o=st.map(o,function(e){return null==e?"":e+""})),n=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=st.valHooks[o.type]||st.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(St,""):null==r?"":r)}}}),st.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(st.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&st.nodeName(n.parentNode,"optgroup"))){if(t=st(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=st.makeArray(t);return st(e).find("option").each(function(){this.selected=st.inArray(st(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return e.getAttribute===t?st.prop(e,n,r):(a=1!==s||!st.isXMLDoc(e),a&&(n=n.toLowerCase(),o=st.attrHooks[n]||(Dt.test(n)?kt:Ct)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(e.getAttribute!==t&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(st.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(lt);if(o&&1===e.nodeType)for(;n=o[i++];)r=st.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[st.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:st.attr(e,n,""),e.removeAttribute(Ht?n:r)},attrHooks:{type:{set:function(e,t){if(!st.support.radioValue&&"radio"===t&&st.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!st.isXMLDoc(e),a&&(n=st.propFix[n]||n,o=st.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):At.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),kt={get:function(e,n){var r=st.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&Ht?null!=i:Lt.test(n)?e[st.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?st.removeAttr(e,n):Mt&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&st.propFix[n]||n,n):e[st.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&Ht||(st.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return st.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return st.nodeName(e,"input")?(e.defaultValue=n,t):Ct&&Ct.set(e,n,r)}}),Ht||(Ct=st.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},st.attrHooks.contenteditable={get:Ct.get,set:function(e,t,n){Ct.set(e,""===t?!1:t,n)}},st.each(["width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),st.support.hrefNormalized||(st.each(["href","src","width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),st.each(["href","src"],function(e,t){st.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),st.support.style||(st.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),st.support.optSelected||(st.propHooks.selected=st.extend(st.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),st.support.enctype||(st.propFix.enctype="encoding"),st.support.checkOn||st.each(["radio","checkbox"],function(){st.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]=st.extend(st.valHooks[this],{set:function(e,n){return st.isArray(n)?e.checked=st.inArray(st(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,_t=/^key/,Ft=/^(?:mouse|contextmenu)|click/,Ot=/^(?:focusinfocus|focusoutblur)$/,Bt=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&st._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=st.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return st===t||e&&st.event.triggered===e.type?t:st.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(lt)||[""],c=n.length;c--;)u=Bt.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=st.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=st.event.special[h]||{},f=st.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&st.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),st.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=st.hasData(e)&&st._data(e);if(m&&(u=m.events)){for(t=(t||"").match(lt)||[""],l=t.length;l--;)if(s=Bt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=st.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||st.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)st.event.remove(e,d+t[l],n,r,!0);st.isEmptyObject(u)&&(delete m.handle,st._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ot.test(h+st.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[st.expando]?n:new st.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:st.makeArray(r,[n]),p=st.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!st.isWindow(i)){for(l=p.delegateType||h,Ot.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(st._data(s,"events")||{})[n.type]&&st._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&st.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&st.nodeName(i,"a")||!st.acceptData(i)||!c||!i[h]||st.isWindow(i))){u=i[c],u&&(i[c]=null),st.event.triggered=h;try{i[h]()}catch(m){}st.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=st.event.fix(e);var n,r,i,o,a,s=[],u=nt.call(arguments),l=(st._data(this,"events")||{})[e.type]||[],c=st.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=st.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((st.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?st(o,this).index(l)>=0:st.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[st.expando])return e;var t,n,r=e,i=st.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new st.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=st.extend(new st.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?st.event.trigger(i,null,t):st.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},st.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,n,r){var i="on"+n;e.detachEvent&&(e[i]===t&&(e[i]=null),e.detachEvent(i,r))},st.Event=function(e,n){return this instanceof st.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&st.extend(this,n),this.timeStamp=e&&e.timeStamp||st.now(),this[st.expando]=!0,t):new st.Event(e,n)},st.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){st.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!st.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),st.support.submitBubbles||(st.event.special.submit={setup:function(){return st.nodeName(this,"form")?!1:(st.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=st.nodeName(n,"input")||st.nodeName(n,"button")?n.form:t;r&&!st._data(r,"submitBubbles")&&(st.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),st._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&st.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return st.nodeName(this,"form")?!1:(st.event.remove(this,"._submit"),t)}}),st.support.changeBubbles||(st.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,e,!0)})),!1):(st.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!st._data(t,"changeBubbles")&&(st.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||st.event.simulate("change",this.parentNode,e,!0)}),st._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return st.event.remove(this,"._change"),!qt.test(this.nodeName)}}),st.support.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){st.event.simulate(t,e.target,st.event.fix(e),!0)};st.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),st.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return st().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,st(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){st.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){st.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?st.event.trigger(e,n,r,!0):t},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){st.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},_t.test(t)&&(st.event.fixHooks[t]=st.event.keyHooks),Ft.test(t)&&(st.event.fixHooks[t]=st.event.mouseHooks)}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[P]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:R)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!M&&!r){if(i=gt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&O(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,K.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return Q.apply(n,K.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!q.test(e)){if(c=!0,d=P,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return Q.apply(n,K.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){(!n||(r=ut.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[P]||(t[P]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===N)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||N,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[P]&&(r=m(r)),o&&!o[P]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):Q.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=$+=null==x?1:Math.E;for(b&&(j=s!==L&&s,N=n);null!=(f=T[y]);y++){if(o&&f){for(p=0;d=e[p];p++)if(d(f,s,u)){l.push(f);break}b&&($=w,N=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p];p++)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(l));h=g(h)}Q.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&($=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!M&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!C.relative[s=a.type]);i--)if((u=C.find[s])&&(r=u(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,K.call(r,0)),n;break}}return S(e,l)(r,t,M,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O,B,P="sizzle"+-new Date,R=e.document,W={},$=0,I=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,Q=J.push,K=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),ut=RegExp("^"+et+"*,"+et+"*"),lt=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),ft=RegExp("^"+nt+"$"),pt={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/\{\s*\[native code\]\s*\}/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{K.call(H.childNodes,0)[0].nodeType}catch(wt){K=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:R;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,M=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=P+0,e.innerHTML="<a name='"+P+"'></a><div name='"+P+"'></div>",H.insertBefore(e,H.firstChild);var t=r.getElementsByName&&r.getElementsByName(P).length===2+r.getElementsByName(P+0).length;return W.getIdNotName=!r.getElementById(P),H.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!M){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||M?t:n.getElementsByClassName(e)},_=[],q=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||q.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&q.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(W.matchesSelector=n(F=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){W.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),_.push("!=",ot)}),q=RegExp(q.join("|")),_=RegExp(_.join("|")),O=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=H.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||O(R,e)?-1:t===r||O(R,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return A=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||Y)-(O(R,e)&&~e.sourceIndex||Y);if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===R?-1:l[i]===R?1:0},A=!1,[0,0].sort(B),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||M||_&&_.test(t)||q.test(t)))try{var n=F.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),O(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),M||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):M||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(B),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[P]||(m[P]={}),l=c[e]||[],d=l[0]===$&&l[1],p=l[0]===$&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,d,p];break}}else if(v&&(l=(t[P]||(t[P]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[P]||(f[P]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[P]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[P]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=M?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=st.attr,st.find=a,st.expr=a.selectors,st.expr[":"]=st.expr.pseudos,st.unique=a.uniqueSort,st.text=a.getText,st.isXMLDoc=a.isXML,st.contains=a.contains}(e);var Pt=/Until$/,Rt=/^(?:parents|prev(?:Until|All))/,Wt=/^.[^:#\[\.,]*$/,$t=st.expr.match.needsContext,It={children:!0,contents:!0,next:!0,prev:!0};st.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(st(e).filter(function(){for(t=0;r.length>t;t++)if(st.contains(r[t],this))return!0}));for(n=[],t=0;this.length>t;t++)st.find(e,this[t],n);return n=this.pushStack(st.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=st(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(st.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?st(e,this.context).index(this[0])>=0:st.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?st(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:st.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?st.unique(o):o)},index:function(e){return e?"string"==typeof e?st.inArray(this[0],st(e)):st.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?st(e,t):st.makeArray(e&&e.nodeType?[e]:e),r=st.merge(this.get(),n);return this.pushStack(st.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),st.fn.andSelf=st.fn.addBack,st.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return st.dir(e,"parentNode")},parentsUntil:function(e,t,n){return st.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return st.dir(e,"nextSibling")},prevAll:function(e){return st.dir(e,"previousSibling")},nextUntil:function(e,t,n){return st.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return st.dir(e,"previousSibling",n)},siblings:function(e){return st.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return st.sibling(e.firstChild)},contents:function(e){return st.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:st.merge([],e.childNodes)}},function(e,t){st.fn[e]=function(n,r){var i=st.map(this,t,n);return Pt.test(e)||(r=n),r&&"string"==typeof r&&(i=st.filter(r,i)),i=this.length>1&&!It[e]?st.unique(i):i,this.length>1&&Rt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),st.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?st.find.matchesSelector(t[0],e)?[t[0]]:[]:st.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!st(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Xt=/ jQuery\d+="(?:null|\d+)"/g,Ut=RegExp("<(?:"+zt+")[\\s/>]","i"),Vt=/^\s+/,Yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Jt=/<([\w:]+)/,Gt=/<tbody/i,Qt=/<|&#?\w+;/,Kt=/<(?:script|style|link)/i,Zt=/^(?:checkbox|radio)$/i,en=/checked\s*(?:[^=]|=\s*.checked.)/i,tn=/^$|\/(?:java|ecma)script/i,nn=/^true\/(.*)/,rn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,on={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:st.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},an=p(V),sn=an.appendChild(V.createElement("div"));on.optgroup=on.option,on.tbody=on.tfoot=on.colgroup=on.caption=on.thead,on.th=on.td,st.fn.extend({text:function(e){return st.access(this,function(e){return e===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(st.isFunction(e))return this.each(function(t){st(this).wrapAll(e.call(this,t))});if(this[0]){var t=st(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return st.isFunction(e)?this.each(function(t){st(this).wrapInner(e.call(this,t))}):this.each(function(){var t=st(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=st.isFunction(e);return this.each(function(n){st(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||st.filter(e,[n]).length>0)&&(t||1!==n.nodeType||st.cleanData(b(n)),n.parentNode&&(t&&st.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&st.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&st.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return st.clone(this,e,t)})},html:function(e){return st.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Xt,""):t;if(!("string"!=typeof e||Kt.test(e)||!st.support.htmlSerialize&&Ut.test(e)||!st.support.leadingWhitespace&&Vt.test(e)||on[(Jt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Yt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(st.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=st.isFunction(e);return t||"string"==typeof e||(e=st(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(st(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=et.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=st.isFunction(y);if(v||!(1>=f||"string"!=typeof y||st.support.checkClone)&&en.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=st.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&st.nodeName(o,"tr"),a=st.map(b(i,"script"),h),s=a.length;f>c;c++)u=i,c!==m&&(u=st.clone(u,!0,!0),s&&st.merge(a,b(u,"script"))),r.call(n&&st.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,st.map(a,g),c=0;s>c;c++)u=a[c],tn.test(u.type||"")&&!st._data(u,"globalEval")&&st.contains(l,u)&&(u.src?st.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):st.globalEval((u.text||u.textContent||u.innerHTML||"").replace(rn,"")));i=o=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){st.fn[e]=function(e){for(var n,r=0,i=[],o=st(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),st(o[r])[t](n),tt.apply(i,n.get());return this.pushStack(i)}}),st.extend({clone:function(e,t,n){var r,i,o,a,s,u=st.contains(e.ownerDocument,e);if(st.support.html5Clone||st.isXMLDoc(e)||!Ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(sn.innerHTML=e.outerHTML,sn.removeChild(s=sn.firstChild)),!(st.support.noCloneEvent&&st.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||st.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if(o=e[g],o||0===o)if("object"===st.type(o))st.merge(h,o.nodeType?[o]:o);else if(Qt.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Jt.exec(o)||["",""])[1].toLowerCase(),u=on[a]||on._default,s.innerHTML=u[1]+o.replace(Yt,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!st.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!st.support.tbody)for(o="table"!==a||Gt.test(o)?"<table>"!==u[1]||Gt.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)st.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(st.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),st.support.appendChecked||st.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===st.inArray(o,r))&&(i=st.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)tn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,n){for(var r,i,o,a,s=0,u=st.expando,l=st.cache,c=st.support.deleteExpando,f=st.event.special;null!=(o=e[s]);s++)if((n||st.acceptData(o))&&(i=o[u],r=i&&l[i])){if(r.events)for(a in r.events)f[a]?st.event.remove(o,a):st.removeEvent(o,a,r.handle);l[i]&&(delete l[i],c?delete o[u]:o.removeAttribute!==t?o.removeAttribute(u):o[u]=null,K.push(i))}}});var un,ln,cn,fn=/alpha\([^)]*\)/i,pn=/opacity\s*=\s*([^)]*)/,dn=/^(top|right|bottom|left)$/,hn=/^(none|table(?!-c[ea]).+)/,gn=/^margin/,mn=RegExp("^("+ut+")(.*)$","i"),yn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),vn=RegExp("^([+-])=("+ut+")","i"),bn={BODY:"block"},xn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},wn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];st.fn.extend({css:function(e,n){return st.access(this,function(e,n,r){var i,o,a={},s=0;if(st.isArray(n)){for(i=ln(e),o=n.length;o>s;s++)a[n[s]]=st.css(e,n[s],!1,i);return a}return r!==t?st.style(e,n,r):st.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?st(this).show():st(this).hide()})}}),st.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=un(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":st.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=st.camelCase(n),l=e.style;if(n=st.cssProps[u]||(st.cssProps[u]=T(l,u)),s=st.cssHooks[n]||st.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=vn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(st.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||st.cssNumber[u]||(r+="px"),st.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=st.camelCase(n);return n=st.cssProps[u]||(st.cssProps[u]=T(e.style,u)),s=st.cssHooks[n]||st.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=un(e,n,i)),"normal"===o&&n in Tn&&(o=Tn[n]),r?(a=parseFloat(o),r===!0||st.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ln=function(t){return e.getComputedStyle(t,null)},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||st.contains(e.ownerDocument,e)||(u=st.style(e,n)),yn.test(u)&&gn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ln=function(e){return e.currentStyle},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),yn.test(u)&&!dn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),st.each(["height","width"],function(e,n){st.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&hn.test(st.css(e,"display"))?st.swap(e,xn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ln(e);return C(e,t,r?k(e,n,r,st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,i),i):0)}}}),st.support.opacity||(st.cssHooks.opacity={get:function(e,t){return pn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=st.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===st.trim(o.replace(fn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=fn.test(o)?o.replace(fn,i):o+" "+i)}}),st(function(){st.support.reliableMarginRight||(st.cssHooks.marginRight={get:function(e,n){return n?st.swap(e,{display:"inline-block"},un,[e,"marginRight"]):t}}),!st.support.pixelPosition&&st.fn.position&&st.each(["top","left"],function(e,n){st.cssHooks[n]={get:function(e,r){return r?(r=un(e,n),yn.test(r)?st(e).position()[n]+"px":r):t}}})}),st.expr&&st.expr.filters&&(st.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!st.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||st.css(e,"display"))},st.expr.filters.visible=function(e){return!st.expr.filters.hidden(e)}),st.each({margin:"",padding:"",border:"Width"},function(e,t){st.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wn[r]+t]=o[r]||o[r-2]||o[0];return i}},gn.test(e)||(st.cssHooks[e+t].set=C)});var Cn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset)$/i,An=/^(?:input|select|textarea|keygen)/i;st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=st.prop(this,"elements");return e?st.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!st(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Zt.test(e))}).map(function(e,t){var n=st(this).val();return null==n?null:st.isArray(n)?st.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),st.param=function(e,n){var r,i=[],o=function(e,t){t=st.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(e)||e.jquery&&!st.isPlainObject(e))st.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Cn,"+")};var jn,Dn,Ln=st.now(),Hn=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,_n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Bn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rn=st.fn.load,Wn={},$n={},In="*/".concat("*");try{Dn=Y.href}catch(zn){Dn=V.createElement("a"),Dn.href="",Dn=Dn.href}jn=Pn.exec(Dn.toLowerCase())||[],st.fn.load=function(e,n,r){if("string"!=typeof e&&Rn)return Rn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),st.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&st.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?st("<div>").append(st.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){st.fn[t]=function(e){return this.on(t,e)}}),st.each(["get","post"],function(e,n){st[n]=function(e,r,i,o){return st.isFunction(r)&&(o=o||i,i=r,r=t),st.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Fn.test(jn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":In,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,st.ajaxSettings),t):H(st.ajaxSettings,e)},ajaxPrefilter:D(Wn),ajaxTransport:D($n),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",w.readyState=e>0?4:0,r&&(b=M(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(st.lastModified[o]=T),T=w.getResponseHeader("etag"),T&&(st.etag[o]=T)),304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,p,l?f:v]),m.fireWith(d,[w,N]),c&&(h.trigger("ajaxComplete",[w,p]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=st.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?st(d):st.event,g=st.Deferred(),m=st.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=_n.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||Dn)+"").replace(Mn,"").replace(Bn,jn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=st.trim(p.dataType||"*").toLowerCase().match(lt)||[""],null==p.crossDomain&&(l=Pn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===jn[1]&&l[2]===jn[2]&&(l[3]||("http:"===l[1]?80:443))==(jn[3]||("http:"===jn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=st.param(p.data,p.traditional)),L(Wn,p,n,w),2===x)return w;c=p.global,c&&0===st.active++&&st.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!On.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(Hn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(o)?o.replace(qn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),p.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+In+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)w.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,w,p)===!1||2===x))return w.abort();T="abort";for(f in{success:1,error:1,complete:1})w[f](p[f]);if(i=L($n,p,n,w)){w.readyState=1,c&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return st.get(e,t,n,"script")},getJSON:function(e,t,n){return st.get(e,t,n,"json")}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return st.globalEval(e),e}}}),st.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),st.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||st("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xn=[],Un=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xn.pop()||st.expando+"_"+Ln++;return this[e]=!0,e}}),st.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Un.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Un.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=st.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Un,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||st.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xn.push(o)),s&&st.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Vn,Yn,Jn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)};st.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Yn=st.ajaxSettings.xhr(),st.support.cors=!!Yn&&"withCredentials"in Yn,Yn=st.support.ajax=!!Yn,Yn&&st.ajaxTransport(function(n){if(!n.crossDomain||st.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=st.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++Jn,Gn&&(Vn||(Vn={},st(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Qn,Kn,Zn=/^(?:toggle|show|hide)$/,er=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),tr=/queueHooks$/,nr=[W],rr={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=er.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(st.cssNumber[e]?"":"px"),"px"!==r&&s){s=st.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,st.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};st.Animation=st.extend(P,{tweener:function(e,t){st.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],rr[n]=rr[n]||[],rr[n].unshift(t)},prefilter:function(e,t){t?nr.unshift(e):nr.push(e)}}),st.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(st.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.pos=t=this.options.duration?st.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=st.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){st.fx.step[e.prop]?st.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[st.cssProps[e.prop]]||st.cssHooks[e.prop])?st.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},st.each(["toggle","show","hide"],function(e,t){var n=st.fn[t];st.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),st.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=st.isEmptyObject(e),o=st.speed(t,n,r),a=function(){var t=P(this,st.extend({},e),o);a.finish=function(){t.stop(!0)},(i||st._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=st.timers,a=st._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&st.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=st._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=st.timers,a=r?r.length:0;for(n.finish=!0,st.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),st.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){st.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),st.speed=function(e,t,n){var r=e&&"object"==typeof e?st.extend({},e):{complete:n||!n&&t||st.isFunction(e)&&e,duration:e,easing:n&&t||t&&!st.isFunction(t)&&t};return r.duration=st.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in st.fx.speeds?st.fx.speeds[r.duration]:st.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){st.isFunction(r.old)&&r.old.call(this),r.queue&&st.dequeue(this,r.queue)},r},st.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},st.timers=[],st.fx=$.prototype.init,st.fx.tick=function(){var e,n=st.timers,r=0;for(Qn=st.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||st.fx.stop(),Qn=t},st.fx.timer=function(e){e()&&st.timers.push(e)&&st.fx.start()},st.fx.interval=13,st.fx.start=function(){Kn||(Kn=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(Kn),Kn=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fx.step={},st.expr&&st.expr.filters&&(st.expr.filters.animated=function(e){return st.grep(st.timers,function(t){return e===t.elem}).length}),st.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){st.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,st.contains(n,o)?(o.getBoundingClientRect!==t&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},st.offset={setOffset:function(e,t,n){var r=st.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=st(e),s=a.offset(),u=st.css(e,"top"),l=st.css(e,"left"),c=("absolute"===r||"fixed"===r)&&st.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),st.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},st.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===st.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),st.nodeName(e[0],"html")||(n=e.offset()),n.top+=st.css(e[0],"borderTopWidth",!0),n.left+=st.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-st.css(r,"marginTop",!0),left:t.left-n.left-st.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!st.nodeName(e,"html")&&"static"===st.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);st.fn[e]=function(i){return st.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?st(a).scrollLeft():o,r?o:st(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),st.each({Height:"height",Width:"width"},function(e,n){st.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){st.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return st.access(this,function(n,r,i){var o;return st.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?st.css(n,r,s):st.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=st,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return st})})(window);
//@ sourceMappingURL=jquery.min.map
;
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements boud jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params');
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      // making sure that all forms have actual up-to-date token(cached forms contain old one)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrf_param + '"]').val(csrf_token);
    });
  }

})( jQuery );
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2013 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @website http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
* @version 4.1.7 (2013-04-21)
*******************************************************************************/

(function (window, undefined) {
	if (window.KindEditor) {
		return;
	}
if (!window.console) {
	window.console = {};
}
if (!console.log) {
	console.log = function () {};
}
var _VERSION = '4.1.7 (2013-04-21)',
	_ua = navigator.userAgent.toLowerCase(),
	_IE = _ua.indexOf('msie') > -1 && _ua.indexOf('opera') == -1,
	_GECKO = _ua.indexOf('gecko') > -1 && _ua.indexOf('khtml') == -1,
	_WEBKIT = _ua.indexOf('applewebkit') > -1,
	_OPERA = _ua.indexOf('opera') > -1,
	_MOBILE = _ua.indexOf('mobile') > -1,
	_IOS = /ipad|iphone|ipod/.test(_ua),
	_QUIRKS = document.compatMode != 'CSS1Compat',
	_matches = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(_ua),
	_V = _matches ? _matches[1] : '0',
	_TIME = new Date().getTime();
function _isArray(val) {
	if (!val) {
		return false;
	}
	return Object.prototype.toString.call(val) === '[object Array]';
}
function _isFunction(val) {
	if (!val) {
		return false;
	}
	return Object.prototype.toString.call(val) === '[object Function]';
}
function _inArray(val, arr) {
	for (var i = 0, len = arr.length; i < len; i++) {
		if (val === arr[i]) {
			return i;
		}
	}
	return -1;
}
function _each(obj, fn) {
	if (_isArray(obj)) {
		for (var i = 0, len = obj.length; i < len; i++) {
			if (fn.call(obj[i], i, obj[i]) === false) {
				break;
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn.call(obj[key], key, obj[key]) === false) {
					break;
				}
			}
		}
	}
}
function _trim(str) {
	return str.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, '');
}
function _inString(val, str, delimiter) {
	delimiter = delimiter === undefined ? ',' : delimiter;
	return (delimiter + str + delimiter).indexOf(delimiter + val + delimiter) >= 0;
}
function _addUnit(val, unit) {
	unit = unit || 'px';
	return val && /^\d+$/.test(val) ? val + unit : val;
}
function _removeUnit(val) {
	var match;
	return val && (match = /(\d+)/.exec(val)) ? parseInt(match[1], 10) : 0;
}
function _escape(val) {
	return val.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _unescape(val) {
	return val.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}
function _toCamel(str) {
	var arr = str.split('-');
	str = '';
	_each(arr, function(key, val) {
		str += (key > 0) ? val.charAt(0).toUpperCase() + val.substr(1) : val;
	});
	return str;
}
function _toHex(val) {
	function hex(d) {
		var s = parseInt(d, 10).toString(16).toUpperCase();
		return s.length > 1 ? s : '0' + s;
	}
	return val.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,
		function($0, $1, $2, $3) {
			return '#' + hex($1) + hex($2) + hex($3);
		}
	);
}
function _toMap(val, delimiter) {
	delimiter = delimiter === undefined ? ',' : delimiter;
	var map = {}, arr = _isArray(val) ? val : val.split(delimiter), match;
	_each(arr, function(key, val) {
		if ((match = /^(\d+)\.\.(\d+)$/.exec(val))) {
			for (var i = parseInt(match[1], 10); i <= parseInt(match[2], 10); i++) {
				map[i.toString()] = true;
			}
		} else {
			map[val] = true;
		}
	});
	return map;
}
function _toArray(obj, offset) {
	return Array.prototype.slice.call(obj, offset || 0);
}
function _undef(val, defaultVal) {
	return val === undefined ? defaultVal : val;
}
function _invalidUrl(url) {
	return !url || /[<>"]/.test(url);
}
function _addParam(url, param) {
	return url.indexOf('?') >= 0 ? url + '&' + param : url + '?' + param;
}
function _extend(child, parent, proto) {
	if (!proto) {
		proto = parent;
		parent = null;
	}
	var childProto;
	if (parent) {
		var fn = function () {};
		fn.prototype = parent.prototype;
		childProto = new fn();
		_each(proto, function(key, val) {
			childProto[key] = val;
		});
	} else {
		childProto = proto;
	}
	childProto.constructor = child;
	child.prototype = childProto;
	child.parent = parent ? parent.prototype : null;
}
function _json(text) {
	var match;
	if ((match = /\{[\s\S]*\}|\[[\s\S]*\]/.exec(text))) {
		text = match[0];
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	cx.lastIndex = 0;
	if (cx.test(text)) {
		text = text.replace(cx, function (a) {
			return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		});
	}
	if (/^[\],:{}\s]*$/.
	test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
	replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
	replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
		return eval('(' + text + ')');
	}
	throw 'JSON parse error';
}
var _round = Math.round;
var K = {
	DEBUG : false,
	VERSION : _VERSION,
	IE : _IE,
	GECKO : _GECKO,
	WEBKIT : _WEBKIT,
	OPERA : _OPERA,
	V : _V,
	TIME : _TIME,
	each : _each,
	isArray : _isArray,
	isFunction : _isFunction,
	inArray : _inArray,
	inString : _inString,
	trim : _trim,
	addUnit : _addUnit,
	removeUnit : _removeUnit,
	escape : _escape,
	unescape : _unescape,
	toCamel : _toCamel,
	toHex : _toHex,
	toMap : _toMap,
	toArray : _toArray,
	undef : _undef,
	invalidUrl : _invalidUrl,
	addParam : _addParam,
	extend : _extend,
	json : _json
};
var _INLINE_TAG_MAP = _toMap('a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'),
	_BLOCK_TAG_MAP = _toMap('address,applet,blockquote,body,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul'),
	_SINGLE_TAG_MAP = _toMap('area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed'),
	_STYLE_TAG_MAP = _toMap('b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u'),
	_CONTROL_TAG_MAP = _toMap('img,table,input,textarea,button'),
	_PRE_TAG_MAP = _toMap('pre,style,script'),
	_NOSPLIT_TAG_MAP = _toMap('html,head,body,td,tr,table,ol,ul,li'),
	_AUTOCLOSE_TAG_MAP = _toMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'),
	_FILL_ATTR_MAP = _toMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'),
	_VALUE_TAG_MAP = _toMap('input,button,textarea,select');

// Begining of modification by Macrow
function _getBasePath() {
	var els = document.getElementsByTagName('script'), src;
	for (var i = 0, len = els.length; i < len; i++) {
		src = els[i].src || '';
		if (/kindeditor[\w\-\.]*\.js/.test(src)) { // in development mode
			return src.substring(0, src.lastIndexOf('/') + 1);
		}
		if (/application[\w\-\.]*\.js/.test(src)) { // in production mode, we need application.js.
			return src.substring(0, src.lastIndexOf('/') + 1) + 'kindeditor/';
		}
	}
	return '/assets/kindeditor/';
}
// End of modification by Macrow

K.basePath = _getBasePath();
K.options = {
	designMode : true,
	fullscreenMode : false,
	filterMode : true,
	wellFormatMode : true,
	shadowMode : true,
	loadStyleMode : true,
	basePath : K.basePath,
	themesPath : K.basePath + 'themes/',
	langPath : K.basePath + 'lang/',
	pluginsPath : K.basePath + 'plugins/',
	themeType : 'default',
	langType : 'zh_CN',
	urlType : '',
	newlineTag : 'p',
	resizeType : 2,
	syncType : 'form',
	pasteType : 2,
	dialogAlignType : 'page',
	useContextmenu : true,
	fullscreenShortcut : false,
	bodyClass : 'ke-content',
	indentChar : '\t',
	cssPath : '',
	cssData : '',
	minWidth : 650,
	minHeight : 100,
	minChangeSize : 50,
	zIndex : 811213,
	items : [
		'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
		'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
		'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
		'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
		'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
		'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
		'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
		'anchor', 'link', 'unlink', '|', 'about'
	],
	noDisableItems : ['source', 'fullscreen'],
	colorTable : [
		['#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500'],
		['#009900', '#006600', '#99BB00', '#B8D100', '#60D978', '#00D5FF'],
		['#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE'],
		['#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333', '#000000']
	],
	fontSizeTable : ['9px', '10px', '12px', '14px', '16px', '18px', '24px', '32px'],
	htmlTags : {
		font : ['id', 'class', 'color', 'size', 'face', '.background-color'],
		span : [
			'id', 'class', '.color', '.background-color', '.font-size', '.font-family', '.background',
			'.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.line-height'
		],
		div : [
			'id', 'class', 'align', '.border', '.margin', '.padding', '.text-align', '.color',
			'.background-color', '.font-size', '.font-family', '.font-weight', '.background',
			'.font-style', '.text-decoration', '.vertical-align', '.margin-left'
		],
		table: [
			'id', 'class', 'border', 'cellspacing', 'cellpadding', 'width', 'height', 'align', 'bordercolor',
			'.padding', '.margin', '.border', 'bgcolor', '.text-align', '.color', '.background-color',
			'.font-size', '.font-family', '.font-weight', '.font-style', '.text-decoration', '.background',
			'.width', '.height', '.border-collapse'
		],
		'td,th': [
			'id', 'class', 'align', 'valign', 'width', 'height', 'colspan', 'rowspan', 'bgcolor',
			'.text-align', '.color', '.background-color', '.font-size', '.font-family', '.font-weight',
			'.font-style', '.text-decoration', '.vertical-align', '.background', '.border'
		],
		a : ['id', 'class', 'href', 'target', 'name'],
		embed : ['id', 'class', 'src', 'width', 'height', 'type', 'loop', 'autostart', 'quality', '.width', '.height', 'align', 'allowscriptaccess'],
		img : ['id', 'class', 'src', 'width', 'height', 'border', 'alt', 'title', 'align', '.width', '.height', '.border'],
		'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6' : [
			'id', 'class', 'align', '.text-align', '.color', '.background-color', '.font-size', '.font-family', '.background',
			'.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.text-indent', '.margin-left'
		],
		pre : ['id', 'class'],
		hr : ['id', 'class', '.page-break-after'],
		'br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del' : ['id', 'class'],
		iframe : ['id', 'class', 'src', 'frameborder', 'width', 'height', '.width', '.height']
	},
	layout : '<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'
};
var _useCapture = false;
var _INPUT_KEY_MAP = _toMap('8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222');
var _CURSORMOVE_KEY_MAP = _toMap('33..40');
var _CHANGE_KEY_MAP = {};
_each(_INPUT_KEY_MAP, function(key, val) {
	_CHANGE_KEY_MAP[key] = val;
});
_each(_CURSORMOVE_KEY_MAP, function(key, val) {
	_CHANGE_KEY_MAP[key] = val;
});
function _bindEvent(el, type, fn) {
	if (el.addEventListener){
		el.addEventListener(type, fn, _useCapture);
	} else if (el.attachEvent){
		el.attachEvent('on' + type, fn);
	}
}
function _unbindEvent(el, type, fn) {
	if (el.removeEventListener){
		el.removeEventListener(type, fn, _useCapture);
	} else if (el.detachEvent){
		el.detachEvent('on' + type, fn);
	}
}
var _EVENT_PROPS = ('altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,' +
	'data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,' +
	'pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which').split(',');
function KEvent(el, event) {
	this.init(el, event);
}
_extend(KEvent, {
	init : function(el, event) {
		var self = this, doc = el.ownerDocument || el.document || el;
		self.event = event;
		_each(_EVENT_PROPS, function(key, val) {
			self[val] = event[val];
		});
		if (!self.target) {
			self.target = self.srcElement || doc;
		}
		if (self.target.nodeType === 3) {
			self.target = self.target.parentNode;
		}
		if (!self.relatedTarget && self.fromElement) {
			self.relatedTarget = self.fromElement === self.target ? self.toElement : self.fromElement;
		}
		if (self.pageX == null && self.clientX != null) {
			var d = doc.documentElement, body = doc.body;
			self.pageX = self.clientX + (d && d.scrollLeft || body && body.scrollLeft || 0) - (d && d.clientLeft || body && body.clientLeft || 0);
			self.pageY = self.clientY + (d && d.scrollTop  || body && body.scrollTop  || 0) - (d && d.clientTop  || body && body.clientTop  || 0);
		}
		if (!self.which && ((self.charCode || self.charCode === 0) ? self.charCode : self.keyCode)) {
			self.which = self.charCode || self.keyCode;
		}
		if (!self.metaKey && self.ctrlKey) {
			self.metaKey = self.ctrlKey;
		}
		if (!self.which && self.button !== undefined) {
			self.which = (self.button & 1 ? 1 : (self.button & 2 ? 3 : (self.button & 4 ? 2 : 0)));
		}
		switch (self.which) {
		case 186 :
			self.which = 59;
			break;
		case 187 :
		case 107 :
		case 43 :
			self.which = 61;
			break;
		case 189 :
		case 45 :
			self.which = 109;
			break;
		case 42 :
			self.which = 106;
			break;
		case 47 :
			self.which = 111;
			break;
		case 78 :
			self.which = 110;
			break;
		}
		if (self.which >= 96 && self.which <= 105) {
			self.which -= 48;
		}
	},
	preventDefault : function() {
		var ev = this.event;
		if (ev.preventDefault) {
			ev.preventDefault();
		}
		ev.returnValue = false;
	},
	stopPropagation : function() {
		var ev = this.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		ev.cancelBubble = true;
	},
	stop : function() {
		this.preventDefault();
		this.stopPropagation();
	}
});
var _eventExpendo = 'kindeditor_' + _TIME, _eventId = 0, _eventData = {};
function _getId(el) {
	return el[_eventExpendo] || null;
}
function _setId(el) {
	el[_eventExpendo] = ++_eventId;
	return _eventId;
}
function _removeId(el) {
	try {
		delete el[_eventExpendo];
	} catch(e) {
		if (el.removeAttribute) {
			el.removeAttribute(_eventExpendo);
		}
	}
}
function _bind(el, type, fn) {
	if (type.indexOf(',') >= 0) {
		_each(type.split(','), function() {
			_bind(el, this, fn);
		});
		return;
	}
	var id = _getId(el);
	if (!id) {
		id = _setId(el);
	}
	if (_eventData[id] === undefined) {
		_eventData[id] = {};
	}
	var events = _eventData[id][type];
	if (events && events.length > 0) {
		_unbindEvent(el, type, events[0]);
	} else {
		_eventData[id][type] = [];
		_eventData[id].el = el;
	}
	events = _eventData[id][type];
	if (events.length === 0) {
		events[0] = function(e) {
			var kevent = e ? new KEvent(el, e) : undefined;
			_each(events, function(i, event) {
				if (i > 0 && event) {
					event.call(el, kevent);
				}
			});
		};
	}
	if (_inArray(fn, events) < 0) {
		events.push(fn);
	}
	_bindEvent(el, type, events[0]);
}
function _unbind(el, type, fn) {
	if (type && type.indexOf(',') >= 0) {
		_each(type.split(','), function() {
			_unbind(el, this, fn);
		});
		return;
	}
	var id = _getId(el);
	if (!id) {
		return;
	}
	if (type === undefined) {
		if (id in _eventData) {
			_each(_eventData[id], function(key, events) {
				if (key != 'el' && events.length > 0) {
					_unbindEvent(el, key, events[0]);
				}
			});
			delete _eventData[id];
			_removeId(el);
		}
		return;
	}
	if (!_eventData[id]) {
		return;
	}
	var events = _eventData[id][type];
	if (events && events.length > 0) {
		if (fn === undefined) {
			_unbindEvent(el, type, events[0]);
			delete _eventData[id][type];
		} else {
			_each(events, function(i, event) {
				if (i > 0 && event === fn) {
					events.splice(i, 1);
				}
			});
			if (events.length == 1) {
				_unbindEvent(el, type, events[0]);
				delete _eventData[id][type];
			}
		}
		var count = 0;
		_each(_eventData[id], function() {
			count++;
		});
		if (count < 2) {
			delete _eventData[id];
			_removeId(el);
		}
	}
}
function _fire(el, type) {
	if (type.indexOf(',') >= 0) {
		_each(type.split(','), function() {
			_fire(el, this);
		});
		return;
	}
	var id = _getId(el);
	if (!id) {
		return;
	}
	var events = _eventData[id][type];
	if (_eventData[id] && events && events.length > 0) {
		events[0]();
	}
}
function _ctrl(el, key, fn) {
	var self = this;
	key = /^\d{2,}$/.test(key) ? key : key.toUpperCase().charCodeAt(0);
	_bind(el, 'keydown', function(e) {
		if (e.ctrlKey && e.which == key && !e.shiftKey && !e.altKey) {
			fn.call(el);
			e.stop();
		}
	});
}
function _ready(fn) {
	var loaded = false;
	function readyFunc() {
		if (!loaded) {
			loaded = true;
			fn(KindEditor);
		}
	}
	function ieReadyFunc() {
		if (!loaded) {
			try {
				document.documentElement.doScroll('left');
			} catch(e) {
				setTimeout(ieReadyFunc, 100);
				return;
			}
			readyFunc();
		}
	}
	function ieReadyStateFunc() {
		if (document.readyState === 'complete') {
			readyFunc();
		}
	}
	if (document.addEventListener) {
		_bind(document, 'DOMContentLoaded', readyFunc);
	} else if (document.attachEvent) {
		_bind(document, 'readystatechange', ieReadyStateFunc);
		var toplevel = false;
		try {
			toplevel = window.frameElement == null;
		} catch(e) {}
		if (document.documentElement.doScroll && toplevel) {
			ieReadyFunc();
		}
	}
	_bind(window, 'load', readyFunc);
}
if (_IE) {
	window.attachEvent('onunload', function() {
		_each(_eventData, function(key, events) {
			if (events.el) {
				_unbind(events.el);
			}
		});
	});
}
K.ctrl = _ctrl;
K.ready = _ready;
function _getCssList(css) {
	var list = {},
		reg = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g,
		match;
	while ((match = reg.exec(css))) {
		var key = _trim(match[1].toLowerCase()),
			val = _trim(_toHex(match[2]));
		list[key] = val;
	}
	return list;
}
function _getAttrList(tag) {
	var list = {},
		reg = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g,
		match;
	while ((match = reg.exec(tag))) {
		var key = (match[1] || match[2] || match[4] || match[6]).toLowerCase(),
			val = (match[2] ? match[3] : (match[4] ? match[5] : match[7])) || '';
		list[key] = val;
	}
	return list;
}
function _addClassToTag(tag, className) {
	if (/\s+class\s*=/.test(tag)) {
		tag = tag.replace(/(\s+class=["']?)([^"']*)(["']?[\s>])/, function($0, $1, $2, $3) {
			if ((' ' + $2 + ' ').indexOf(' ' + className + ' ') < 0) {
				return $2 === '' ? $1 + className + $3 : $1 + $2 + ' ' + className + $3;
			} else {
				return $0;
			}
		});
	} else {
		tag = tag.substr(0, tag.length - 1) + ' class="' + className + '">';
	}
	return tag;
}
function _formatCss(css) {
	var str = '';
	_each(_getCssList(css), function(key, val) {
		str += key + ':' + val + ';';
	});
	return str;
}
function _formatUrl(url, mode, host, pathname) {
	mode = _undef(mode, '').toLowerCase();
	if (url.substr(0, 5) != 'data:') {
		url = url.replace(/([^:])\/\//g, '$1/');
	}
	if (_inArray(mode, ['absolute', 'relative', 'domain']) < 0) {
		return url;
	}
	host = host || location.protocol + '//' + location.host;
	if (pathname === undefined) {
		var m = location.pathname.match(/^(\/.*)\//);
		pathname = m ? m[1] : '';
	}
	var match;
	if ((match = /^(\w+:\/\/[^\/]*)/.exec(url))) {
		if (match[1] !== host) {
			return url;
		}
	} else if (/^\w+:/.test(url)) {
		return url;
	}
	function getRealPath(path) {
		var parts = path.split('/'), paths = [];
		for (var i = 0, len = parts.length; i < len; i++) {
			var part = parts[i];
			if (part == '..') {
				if (paths.length > 0) {
					paths.pop();
				}
			} else if (part !== '' && part != '.') {
				paths.push(part);
			}
		}
		return '/' + paths.join('/');
	}
	if (/^\//.test(url)) {
		url = host + getRealPath(url.substr(1));
	} else if (!/^\w+:\/\//.test(url)) {
		url = host + getRealPath(pathname + '/' + url);
	}
	function getRelativePath(path, depth) {
		if (url.substr(0, path.length) === path) {
			var arr = [];
			for (var i = 0; i < depth; i++) {
				arr.push('..');
			}
			var prefix = '.';
			if (arr.length > 0) {
				prefix += '/' + arr.join('/');
			}
			if (pathname == '/') {
				prefix += '/';
			}
			return prefix + url.substr(path.length);
		} else {
			if ((match = /^(.*)\//.exec(path))) {
				return getRelativePath(match[1], ++depth);
			}
		}
	}
	if (mode === 'relative') {
		url = getRelativePath(host + pathname, 0).substr(2);
	} else if (mode === 'absolute') {
		if (url.substr(0, host.length) === host) {
			url = url.substr(host.length);
		}
	}
	return url;
}
function _formatHtml(html, htmlTags, urlType, wellFormatted, indentChar) {
	urlType = urlType || '';
	wellFormatted = _undef(wellFormatted, false);
	indentChar = _undef(indentChar, '\t');
	var fontSizeList = 'xx-small,x-small,small,medium,large,x-large,xx-large'.split(',');
	html = html.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig, function($0, $1, $2, $3) {
		return $1 + $2.replace(/<(?:br|br\s[^>]*)>/ig, '\n') + $3;
	});
	html = html.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/ig, '</p>');
	html = html.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/ig, '$1<br />$2');
	html = html.replace(/\u200B/g, '');
	html = html.replace(/\u00A9/g, '&copy;');
	var htmlTagMap = {};
	if (htmlTags) {
		_each(htmlTags, function(key, val) {
			var arr = key.split(',');
			for (var i = 0, len = arr.length; i < len; i++) {
				htmlTagMap[arr[i]] = _toMap(val);
			}
		});
		if (!htmlTagMap.script) {
			html = html.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/ig, '');
		}
		if (!htmlTagMap.style) {
			html = html.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/ig, '');
		}
	}
	var re = /([ \t\n\r]*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>([ \t\n\r]*)/g;
	var tagStack = [];
	html = html.replace(re, function($0, $1, $2, $3, $4, $5, $6) {
		var full = $0,
			startNewline = $1 || '',
			startSlash = $2 || '',
			tagName = $3.toLowerCase(),
			attr = $4 || '',
			endSlash = $5 ? ' ' + $5 : '',
			endNewline = $6 || '';
		if (htmlTags && !htmlTagMap[tagName]) {
			return '';
		}
		if (endSlash === '' && _SINGLE_TAG_MAP[tagName]) {
			endSlash = ' /';
		}
		if (_INLINE_TAG_MAP[tagName]) {
			if (startNewline) {
				startNewline = ' ';
			}
			if (endNewline) {
				endNewline = ' ';
			}
		}
		if (_PRE_TAG_MAP[tagName]) {
			if (startSlash) {
				endNewline = '\n';
			} else {
				startNewline = '\n';
			}
		}
		if (wellFormatted && tagName == 'br') {
			endNewline = '\n';
		}
		if (_BLOCK_TAG_MAP[tagName] && !_PRE_TAG_MAP[tagName]) {
			if (wellFormatted) {
				if (startSlash && tagStack.length > 0 && tagStack[tagStack.length - 1] === tagName) {
					tagStack.pop();
				} else {
					tagStack.push(tagName);
				}
				startNewline = '\n';
				endNewline = '\n';
				for (var i = 0, len = startSlash ? tagStack.length : tagStack.length - 1; i < len; i++) {
					startNewline += indentChar;
					if (!startSlash) {
						endNewline += indentChar;
					}
				}
				if (endSlash) {
					tagStack.pop();
				} else if (!startSlash) {
					endNewline += indentChar;
				}
			} else {
				startNewline = endNewline = '';
			}
		}
		if (attr !== '') {
			var attrMap = _getAttrList(full);
			if (tagName === 'font') {
				var fontStyleMap = {}, fontStyle = '';
				_each(attrMap, function(key, val) {
					if (key === 'color') {
						fontStyleMap.color = val;
						delete attrMap[key];
					}
					if (key === 'size') {
						fontStyleMap['font-size'] = fontSizeList[parseInt(val, 10) - 1] || '';
						delete attrMap[key];
					}
					if (key === 'face') {
						fontStyleMap['font-family'] = val;
						delete attrMap[key];
					}
					if (key === 'style') {
						fontStyle = val;
					}
				});
				if (fontStyle && !/;$/.test(fontStyle)) {
					fontStyle += ';';
				}
				_each(fontStyleMap, function(key, val) {
					if (val === '') {
						return;
					}
					if (/\s/.test(val)) {
						val = "'" + val + "'";
					}
					fontStyle += key + ':' + val + ';';
				});
				attrMap.style = fontStyle;
			}
			_each(attrMap, function(key, val) {
				if (_FILL_ATTR_MAP[key]) {
					attrMap[key] = key;
				}
				if (_inArray(key, ['src', 'href']) >= 0) {
					attrMap[key] = _formatUrl(val, urlType);
				}
				if (htmlTags && key !== 'style' && !htmlTagMap[tagName]['*'] && !htmlTagMap[tagName][key] ||
					tagName === 'body' && key === 'contenteditable' ||
					/^kindeditor_\d+$/.test(key)) {
					delete attrMap[key];
				}
				if (key === 'style' && val !== '') {
					var styleMap = _getCssList(val);
					_each(styleMap, function(k, v) {
						if (htmlTags && !htmlTagMap[tagName].style && !htmlTagMap[tagName]['.' + k]) {
							delete styleMap[k];
						}
					});
					var style = '';
					_each(styleMap, function(k, v) {
						style += k + ':' + v + ';';
					});
					attrMap.style = style;
				}
			});
			attr = '';
			_each(attrMap, function(key, val) {
				if (key === 'style' && val === '') {
					return;
				}
				val = val.replace(/"/g, '&quot;');
				attr += ' ' + key + '="' + val + '"';
			});
		}
		if (tagName === 'font') {
			tagName = 'span';
		}
		return startNewline + '<' + startSlash + tagName + attr + endSlash + '>' + endNewline;
	});
	html = html.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig, function($0, $1, $2, $3) {
		return $1 + $2.replace(/\n/g, '<span id="__kindeditor_pre_newline__">\n') + $3;
	});
	html = html.replace(/\n\s*\n/g, '\n');
	html = html.replace(/<span id="__kindeditor_pre_newline__">\n/g, '\n');
	return _trim(html);
}
function _clearMsWord(html, htmlTags) {
	html = html.replace(/<meta[\s\S]*?>/ig, '')
		.replace(/<![\s\S]*?>/ig, '')
		.replace(/<style[^>]*>[\s\S]*?<\/style>/ig, '')
		.replace(/<script[^>]*>[\s\S]*?<\/script>/ig, '')
		.replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/ig, '')
		.replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/ig, '')
		.replace(/<xml>[\s\S]*?<\/xml>/ig, '')
		.replace(/<(?:table|td)[^>]*>/ig, function(full) {
			return full.replace(/border-bottom:([#\w\s]+)/ig, 'border:$1');
		});
	return _formatHtml(html, htmlTags);
}
function _mediaType(src) {
	if (/\.(rm|rmvb)(\?|$)/i.test(src)) {
		return 'audio/x-pn-realaudio-plugin';
	}
	if (/\.(swf|flv)(\?|$)/i.test(src)) {
		return 'application/x-shockwave-flash';
	}
	return 'video/x-ms-asf-plugin';
}
function _mediaClass(type) {
	if (/realaudio/i.test(type)) {
		return 'ke-rm';
	}
	if (/flash/i.test(type)) {
		return 'ke-flash';
	}
	return 'ke-media';
}
function _mediaAttrs(srcTag) {
	return _getAttrList(unescape(srcTag));
}
function _mediaEmbed(attrs) {
	var html = '<embed ';
	_each(attrs, function(key, val) {
		html += key + '="' + val + '" ';
	});
	html += '/>';
	return html;
}
function _mediaImg(blankPath, attrs) {
	var width = attrs.width,
		height = attrs.height,
		type = attrs.type || _mediaType(attrs.src),
		srcTag = _mediaEmbed(attrs),
		style = '';
	if (width > 0) {
		style += 'width:' + width + 'px;';
	}
	if (height > 0) {
		style += 'height:' + height + 'px;';
	}
	var html = '<img class="' + _mediaClass(type) + '" src="' + blankPath + '" ';
	if (style !== '') {
		html += 'style="' + style + '" ';
	}
	html += 'data-ke-tag="' + escape(srcTag) + '" alt="" />';
	return html;
}
function _tmpl(str, data) {
	var fn = new Function("obj",
		"var p=[],print=function(){p.push.apply(p,arguments);};" +
		"with(obj){p.push('" +
		str.replace(/[\r\t\n]/g, " ")
			.split("<%").join("\t")
			.replace(/((^|%>)[^\t]*)'/g, "$1\r")
			.replace(/\t=(.*?)%>/g, "',$1,'")
			.split("\t").join("');")
			.split("%>").join("p.push('")
			.split("\r").join("\\'") + "');}return p.join('');");
	return data ? fn(data) : fn;
}
K.formatUrl = _formatUrl;
K.formatHtml = _formatHtml;
K.getCssList = _getCssList;
K.getAttrList = _getAttrList;
K.mediaType = _mediaType;
K.mediaAttrs = _mediaAttrs;
K.mediaEmbed = _mediaEmbed;
K.mediaImg = _mediaImg;
K.clearMsWord = _clearMsWord;
K.tmpl = _tmpl;
function _contains(nodeA, nodeB) {
	if (nodeA.nodeType == 9 && nodeB.nodeType != 9) {
		return true;
	}
	while ((nodeB = nodeB.parentNode)) {
		if (nodeB == nodeA) {
			return true;
		}
	}
	return false;
}
var _getSetAttrDiv = document.createElement('div');
_getSetAttrDiv.setAttribute('className', 't');
var _GET_SET_ATTRIBUTE = _getSetAttrDiv.className !== 't';
function _getAttr(el, key) {
	key = key.toLowerCase();
	var val = null;
	if (!_GET_SET_ATTRIBUTE && el.nodeName.toLowerCase() != 'script') {
		var div = el.ownerDocument.createElement('div');
		div.appendChild(el.cloneNode(false));
		var list = _getAttrList(_unescape(div.innerHTML));
		if (key in list) {
			val = list[key];
		}
	} else {
		try {
			val = el.getAttribute(key, 2);
		} catch(e) {
			val = el.getAttribute(key, 1);
		}
	}
	if (key === 'style' && val !== null) {
		val = _formatCss(val);
	}
	return val;
}
function _queryAll(expr, root) {
	var exprList = expr.split(',');
	if (exprList.length > 1) {
		var mergedResults = [];
		_each(exprList, function() {
			_each(_queryAll(this, root), function() {
				if (_inArray(this, mergedResults) < 0) {
					mergedResults.push(this);
				}
			});
		});
		return mergedResults;
	}
	root = root || document;
	function escape(str) {
		if (typeof str != 'string') {
			return str;
		}
		return str.replace(/([^\w\-])/g, '\\$1');
	}
	function stripslashes(str) {
		return str.replace(/\\/g, '');
	}
	function cmpTag(tagA, tagB) {
		return tagA === '*' || tagA.toLowerCase() === escape(tagB.toLowerCase());
	}
	function byId(id, tag, root) {
		var arr = [],
			doc = root.ownerDocument || root,
			el = doc.getElementById(stripslashes(id));
		if (el) {
			if (cmpTag(tag, el.nodeName) && _contains(root, el)) {
				arr.push(el);
			}
		}
		return arr;
	}
	function byClass(className, tag, root) {
		var doc = root.ownerDocument || root, arr = [], els, i, len, el;
		if (root.getElementsByClassName) {
			els = root.getElementsByClassName(stripslashes(className));
			for (i = 0, len = els.length; i < len; i++) {
				el = els[i];
				if (cmpTag(tag, el.nodeName)) {
					arr.push(el);
				}
			}
		} else if (doc.querySelectorAll) {
			els = doc.querySelectorAll((root.nodeName !== '#document' ? root.nodeName + ' ' : '') + tag + '.' + className);
			for (i = 0, len = els.length; i < len; i++) {
				el = els[i];
				if (_contains(root, el)) {
					arr.push(el);
				}
			}
		} else {
			els = root.getElementsByTagName(tag);
			className = ' ' + className + ' ';
			for (i = 0, len = els.length; i < len; i++) {
				el = els[i];
				if (el.nodeType == 1) {
					var cls = el.className;
					if (cls && (' ' + cls + ' ').indexOf(className) > -1) {
						arr.push(el);
					}
				}
			}
		}
		return arr;
	}
	function byName(name, tag, root) {
		var arr = [], doc = root.ownerDocument || root,
			els = doc.getElementsByName(stripslashes(name)), el;
		for (var i = 0, len = els.length; i < len; i++) {
			el = els[i];
			if (cmpTag(tag, el.nodeName) && _contains(root, el)) {
				if (el.getAttributeNode('name')) {
					arr.push(el);
				}
			}
		}
		return arr;
	}
	function byAttr(key, val, tag, root) {
		var arr = [], els = root.getElementsByTagName(tag), el;
		for (var i = 0, len = els.length; i < len; i++) {
			el = els[i];
			if (el.nodeType == 1) {
				if (val === null) {
					if (_getAttr(el, key) !== null) {
						arr.push(el);
					}
				} else {
					if (val === escape(_getAttr(el, key))) {
						arr.push(el);
					}
				}
			}
		}
		return arr;
	}
	function select(expr, root) {
		var arr = [], matches;
		matches = /^((?:\\.|[^.#\s\[<>])+)/.exec(expr);
		var tag = matches ? matches[1] : '*';
		if ((matches = /#((?:[\w\-]|\\.)+)$/.exec(expr))) {
			arr = byId(matches[1], tag, root);
		} else if ((matches = /\.((?:[\w\-]|\\.)+)$/.exec(expr))) {
			arr = byClass(matches[1], tag, root);
		} else if ((matches = /\[((?:[\w\-]|\\.)+)\]/.exec(expr))) {
			arr = byAttr(matches[1].toLowerCase(), null, tag, root);
		} else if ((matches = /\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(expr))) {
			var key = matches[1].toLowerCase(), val = matches[2];
			if (key === 'id') {
				arr = byId(val, tag, root);
			} else if (key === 'class') {
				arr = byClass(val, tag, root);
			} else if (key === 'name') {
				arr = byName(val, tag, root);
			} else {
				arr = byAttr(key, val, tag, root);
			}
		} else {
			var els = root.getElementsByTagName(tag), el;
			for (var i = 0, len = els.length; i < len; i++) {
				el = els[i];
				if (el.nodeType == 1) {
					arr.push(el);
				}
			}
		}
		return arr;
	}
	var parts = [], arr, re = /((?:\\.|[^\s>])+|[\s>])/g;
	while ((arr = re.exec(expr))) {
		if (arr[1] !== ' ') {
			parts.push(arr[1]);
		}
	}
	var results = [];
	if (parts.length == 1) {
		return select(parts[0], root);
	}
	var isChild = false, part, els, subResults, val, v, i, j, k, length, len, l;
	for (i = 0, lenth = parts.length; i < lenth; i++) {
		part = parts[i];
		if (part === '>') {
			isChild = true;
			continue;
		}
		if (i > 0) {
			els = [];
			for (j = 0, len = results.length; j < len; j++) {
				val = results[j];
				subResults = select(part, val);
				for (k = 0, l = subResults.length; k < l; k++) {
					v = subResults[k];
					if (isChild) {
						if (val === v.parentNode) {
							els.push(v);
						}
					} else {
						els.push(v);
					}
				}
			}
			results = els;
		} else {
			results = select(part, root);
		}
		if (results.length === 0) {
			return [];
		}
	}
	return results;
}
function _query(expr, root) {
	var arr = _queryAll(expr, root);
	return arr.length > 0 ? arr[0] : null;
}
K.query = _query;
K.queryAll = _queryAll;
function _get(val) {
	return K(val)[0];
}
function _getDoc(node) {
	if (!node) {
		return document;
	}
	return node.ownerDocument || node.document || node;
}
function _getWin(node) {
	if (!node) {
		return window;
	}
	var doc = _getDoc(node);
	return doc.parentWindow || doc.defaultView;
}
function _setHtml(el, html) {
	if (el.nodeType != 1) {
		return;
	}
	var doc = _getDoc(el);
	try {
		el.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + html;
		var temp = doc.getElementById('__kindeditor_temp_tag__');
		temp.parentNode.removeChild(temp);
	} catch(e) {
		K(el).empty();
		K('@' + html, doc).each(function() {
			el.appendChild(this);
		});
	}
}
function _hasClass(el, cls) {
	return _inString(cls, el.className, ' ');
}
function _setAttr(el, key, val) {
	if (_IE && _V < 8 && key.toLowerCase() == 'class') {
		key = 'className';
	}
	el.setAttribute(key, '' + val);
}
function _removeAttr(el, key) {
	if (_IE && _V < 8 && key.toLowerCase() == 'class') {
		key = 'className';
	}
	_setAttr(el, key, '');
	el.removeAttribute(key);
}
function _getNodeName(node) {
	if (!node || !node.nodeName) {
		return '';
	}
	return node.nodeName.toLowerCase();
}
function _computedCss(el, key) {
	var self = this, win = _getWin(el), camelKey = _toCamel(key), val = '';
	if (win.getComputedStyle) {
		var style = win.getComputedStyle(el, null);
		val = style[camelKey] || style.getPropertyValue(key) || el.style[camelKey];
	} else if (el.currentStyle) {
		val = el.currentStyle[camelKey] || el.style[camelKey];
	}
	return val;
}
function _hasVal(node) {
	return !!_VALUE_TAG_MAP[_getNodeName(node)];
}
function _docElement(doc) {
	doc = doc || document;
	return _QUIRKS ? doc.body : doc.documentElement;
}
function _docHeight(doc) {
	var el = _docElement(doc);
	return Math.max(el.scrollHeight, el.clientHeight);
}
function _docWidth(doc) {
	var el = _docElement(doc);
	return Math.max(el.scrollWidth, el.clientWidth);
}
function _getScrollPos(doc) {
	doc = doc || document;
	var x, y;
	if (_IE || _OPERA) {
		x = _docElement(doc).scrollLeft;
		y = _docElement(doc).scrollTop;
	} else {
		x = _getWin(doc).scrollX;
		y = _getWin(doc).scrollY;
	}
	return {x : x, y : y};
}
function KNode(node) {
	this.init(node);
}
_extend(KNode, {
	init : function(node) {
		var self = this;
		node = _isArray(node) ? node : [node];
		var length = 0;
		for (var i = 0, len = node.length; i < len; i++) {
			if (node[i]) {
				self[i] = node[i].constructor === KNode ? node[i][0] : node[i];
				length++;
			}
		}
		self.length = length;
		self.doc = _getDoc(self[0]);
		self.name = _getNodeName(self[0]);
		self.type = self.length > 0 ? self[0].nodeType : null;
		self.win = _getWin(self[0]);
	},
	each : function(fn) {
		var self = this;
		for (var i = 0; i < self.length; i++) {
			if (fn.call(self[i], i, self[i]) === false) {
				return self;
			}
		}
		return self;
	},
	bind : function(type, fn) {
		this.each(function() {
			_bind(this, type, fn);
		});
		return this;
	},
	unbind : function(type, fn) {
		this.each(function() {
			_unbind(this, type, fn);
		});
		return this;
	},
	fire : function(type) {
		if (this.length < 1) {
			return this;
		}
		_fire(this[0], type);
		return this;
	},
	hasAttr : function(key) {
		if (this.length < 1) {
			return false;
		}
		return !!_getAttr(this[0], key);
	},
	attr : function(key, val) {
		var self = this;
		if (key === undefined) {
			return _getAttrList(self.outer());
		}
		if (typeof key === 'object') {
			_each(key, function(k, v) {
				self.attr(k, v);
			});
			return self;
		}
		if (val === undefined) {
			val = self.length < 1 ? null : _getAttr(self[0], key);
			return val === null ? '' : val;
		}
		self.each(function() {
			_setAttr(this, key, val);
		});
		return self;
	},
	removeAttr : function(key) {
		this.each(function() {
			_removeAttr(this, key);
		});
		return this;
	},
	get : function(i) {
		if (this.length < 1) {
			return null;
		}
		return this[i || 0];
	},
	eq : function(i) {
		if (this.length < 1) {
			return null;
		}
		return this[i] ? new KNode(this[i]) : null;
	},
	hasClass : function(cls) {
		if (this.length < 1) {
			return false;
		}
		return _hasClass(this[0], cls);
	},
	addClass : function(cls) {
		this.each(function() {
			if (!_hasClass(this, cls)) {
				this.className = _trim(this.className + ' ' + cls);
			}
		});
		return this;
	},
	removeClass : function(cls) {
		this.each(function() {
			if (_hasClass(this, cls)) {
				this.className = _trim(this.className.replace(new RegExp('(^|\\s)' + cls + '(\\s|$)'), ' '));
			}
		});
		return this;
	},
	html : function(val) {
		var self = this;
		if (val === undefined) {
			if (self.length < 1 || self.type != 1) {
				return '';
			}
			return _formatHtml(self[0].innerHTML);
		}
		self.each(function() {
			_setHtml(this, val);
		});
		return self;
	},
	text : function() {
		var self = this;
		if (self.length < 1) {
			return '';
		}
		return _IE ? self[0].innerText : self[0].textContent;
	},
	hasVal : function() {
		if (this.length < 1) {
			return false;
		}
		return _hasVal(this[0]);
	},
	val : function(val) {
		var self = this;
		if (val === undefined) {
			if (self.length < 1) {
				return '';
			}
			return self.hasVal() ? self[0].value : self.attr('value');
		} else {
			self.each(function() {
				if (_hasVal(this)) {
					this.value = val;
				} else {
					_setAttr(this, 'value' , val);
				}
			});
			return self;
		}
	},
	css : function(key, val) {
		var self = this;
		if (key === undefined) {
			return _getCssList(self.attr('style'));
		}
		if (typeof key === 'object') {
			_each(key, function(k, v) {
				self.css(k, v);
			});
			return self;
		}
		if (val === undefined) {
			if (self.length < 1) {
				return '';
			}
			return self[0].style[_toCamel(key)] || _computedCss(self[0], key) || '';
		}
		self.each(function() {
			this.style[_toCamel(key)] = val;
		});
		return self;
	},
	width : function(val) {
		var self = this;
		if (val === undefined) {
			if (self.length < 1) {
				return 0;
			}
			return self[0].offsetWidth;
		}
		return self.css('width', _addUnit(val));
	},
	height : function(val) {
		var self = this;
		if (val === undefined) {
			if (self.length < 1) {
				return 0;
			}
			return self[0].offsetHeight;
		}
		return self.css('height', _addUnit(val));
	},
	opacity : function(val) {
		this.each(function() {
			if (this.style.opacity === undefined) {
				this.style.filter = val == 1 ? '' : 'alpha(opacity=' + (val * 100) + ')';
			} else {
				this.style.opacity = val == 1 ? '' : val;
			}
		});
		return this;
	},
	data : function(key, val) {
		var self = this;
		key = 'kindeditor_data_' + key;
		if (val === undefined) {
			if (self.length < 1) {
				return null;
			}
			return self[0][key];
		}
		this.each(function() {
			this[key] = val;
		});
		return self;
	},
	pos : function() {
		var self = this, node = self[0], x = 0, y = 0;
		if (node) {
			if (node.getBoundingClientRect) {
				var box = node.getBoundingClientRect(),
					pos = _getScrollPos(self.doc);
				x = box.left + pos.x;
				y = box.top + pos.y;
			} else {
				while (node) {
					x += node.offsetLeft;
					y += node.offsetTop;
					node = node.offsetParent;
				}
			}
		}
		return {x : _round(x), y : _round(y)};
	},
	clone : function(bool) {
		if (this.length < 1) {
			return new KNode([]);
		}
		return new KNode(this[0].cloneNode(bool));
	},
	append : function(expr) {
		this.each(function() {
			if (this.appendChild) {
				this.appendChild(_get(expr));
			}
		});
		return this;
	},
	appendTo : function(expr) {
		this.each(function() {
			_get(expr).appendChild(this);
		});
		return this;
	},
	before : function(expr) {
		this.each(function() {
			this.parentNode.insertBefore(_get(expr), this);
		});
		return this;
	},
	after : function(expr) {
		this.each(function() {
			if (this.nextSibling) {
				this.parentNode.insertBefore(_get(expr), this.nextSibling);
			} else {
				this.parentNode.appendChild(_get(expr));
			}
		});
		return this;
	},
	replaceWith : function(expr) {
		var nodes = [];
		this.each(function(i, node) {
			_unbind(node);
			var newNode = _get(expr);
			node.parentNode.replaceChild(newNode, node);
			nodes.push(newNode);
		});
		return K(nodes);
	},
	empty : function() {
		var self = this;
		self.each(function(i, node) {
			var child = node.firstChild;
			while (child) {
				if (!node.parentNode) {
					return;
				}
				var next = child.nextSibling;
				child.parentNode.removeChild(child);
				child = next;
			}
		});
		return self;
	},
	remove : function(keepChilds) {
		var self = this;
		self.each(function(i, node) {
			if (!node.parentNode) {
				return;
			}
			_unbind(node);
			if (keepChilds) {
				var child = node.firstChild;
				while (child) {
					var next = child.nextSibling;
					node.parentNode.insertBefore(child, node);
					child = next;
				}
			}
			node.parentNode.removeChild(node);
			delete self[i];
		});
		self.length = 0;
		return self;
	},
	show : function(val) {
		var self = this;
		if (val === undefined) {
			val = self._originDisplay || '';
		}
		if (self.css('display') != 'none') {
			return self;
		}
		return self.css('display', val);
	},
	hide : function() {
		var self = this;
		if (self.length < 1) {
			return self;
		}
		self._originDisplay = self[0].style.display;
		return self.css('display', 'none');
	},
	outer : function() {
		var self = this;
		if (self.length < 1) {
			return '';
		}
		var div = self.doc.createElement('div'), html;
		div.appendChild(self[0].cloneNode(true));
		html = _formatHtml(div.innerHTML);
		div = null;
		return html;
	},
	isSingle : function() {
		return !!_SINGLE_TAG_MAP[this.name];
	},
	isInline : function() {
		return !!_INLINE_TAG_MAP[this.name];
	},
	isBlock : function() {
		return !!_BLOCK_TAG_MAP[this.name];
	},
	isStyle : function() {
		return !!_STYLE_TAG_MAP[this.name];
	},
	isControl : function() {
		return !!_CONTROL_TAG_MAP[this.name];
	},
	contains : function(otherNode) {
		if (this.length < 1) {
			return false;
		}
		return _contains(this[0], _get(otherNode));
	},
	parent : function() {
		if (this.length < 1) {
			return null;
		}
		var node = this[0].parentNode;
		return node ? new KNode(node) : null;
	},
	children : function() {
		if (this.length < 1) {
			return new KNode([]);
		}
		var list = [], child = this[0].firstChild;
		while (child) {
			if (child.nodeType != 3 || _trim(child.nodeValue) !== '') {
				list.push(child);
			}
			child = child.nextSibling;
		}
		return new KNode(list);
	},
	first : function() {
		var list = this.children();
		return list.length > 0 ? list.eq(0) : null;
	},
	last : function() {
		var list = this.children();
		return list.length > 0 ? list.eq(list.length - 1) : null;
	},
	index : function() {
		if (this.length < 1) {
			return -1;
		}
		var i = -1, sibling = this[0];
		while (sibling) {
			i++;
			sibling = sibling.previousSibling;
		}
		return i;
	},
	prev : function() {
		if (this.length < 1) {
			return null;
		}
		var node = this[0].previousSibling;
		return node ? new KNode(node) : null;
	},
	next : function() {
		if (this.length < 1) {
			return null;
		}
		var node = this[0].nextSibling;
		return node ? new KNode(node) : null;
	},
	scan : function(fn, order) {
		if (this.length < 1) {
			return;
		}
		order = (order === undefined) ? true : order;
		function walk(node) {
			var n = order ? node.firstChild : node.lastChild;
			while (n) {
				var next = order ? n.nextSibling : n.previousSibling;
				if (fn(n) === false) {
					return false;
				}
				if (walk(n) === false) {
					return false;
				}
				n = next;
			}
		}
		walk(this[0]);
		return this;
	}
});
_each(('blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,' +
	'mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,' +
	'change,select,submit,keydown,keypress,keyup,error,contextmenu').split(','), function(i, type) {
	KNode.prototype[type] = function(fn) {
		return fn ? this.bind(type, fn) : this.fire(type);
	};
});
var _K = K;
K = function(expr, root) {
	if (expr === undefined || expr === null) {
		return;
	}
	function newNode(node) {
		if (!node[0]) {
			node = [];
		}
		return new KNode(node);
	}
	if (typeof expr === 'string') {
		if (root) {
			root = _get(root);
		}
		var length = expr.length;
		if (expr.charAt(0) === '@') {
			expr = expr.substr(1);
		}
		if (expr.length !== length || /<.+>/.test(expr)) {
			var doc = root ? root.ownerDocument || root : document,
				div = doc.createElement('div'), list = [];
			div.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + expr;
			for (var i = 0, len = div.childNodes.length; i < len; i++) {
				var child = div.childNodes[i];
				if (child.id == '__kindeditor_temp_tag__') {
					continue;
				}
				list.push(child);
			}
			return newNode(list);
		}
		return newNode(_queryAll(expr, root));
	}
	if (expr && expr.constructor === KNode) {
		return expr;
	}
	if (expr.toArray) {
		expr = expr.toArray();
	}
	if (_isArray(expr)) {
		return newNode(expr);
	}
	return newNode(_toArray(arguments));
};
_each(_K, function(key, val) {
	K[key] = val;
});
K.NodeClass = KNode;
window.KindEditor = K;
var _START_TO_START = 0,
	_START_TO_END = 1,
	_END_TO_END = 2,
	_END_TO_START = 3,
	_BOOKMARK_ID = 0;
function _updateCollapsed(range) {
	range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
	return range;
}
function _copyAndDelete(range, isCopy, isDelete) {
	var doc = range.doc, nodeList = [];
	function splitTextNode(node, startOffset, endOffset) {
		var length = node.nodeValue.length, centerNode;
		if (isCopy) {
			var cloneNode = node.cloneNode(true);
			if (startOffset > 0) {
				centerNode = cloneNode.splitText(startOffset);
			} else {
				centerNode = cloneNode;
			}
			if (endOffset < length) {
				centerNode.splitText(endOffset - startOffset);
			}
		}
		if (isDelete) {
			var center = node;
			if (startOffset > 0) {
				center = node.splitText(startOffset);
				range.setStart(node, startOffset);
			}
			if (endOffset < length) {
				var right = center.splitText(endOffset - startOffset);
				range.setEnd(right, 0);
			}
			nodeList.push(center);
		}
		return centerNode;
	}
	function removeNodes() {
		if (isDelete) {
			range.up().collapse(true);
		}
		for (var i = 0, len = nodeList.length; i < len; i++) {
			var node = nodeList[i];
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		}
	}
	var copyRange = range.cloneRange().down();
	var start = -1, incStart = -1, incEnd = -1, end = -1,
		ancestor = range.commonAncestor(), frag = doc.createDocumentFragment();
	if (ancestor.nodeType == 3) {
		var textNode = splitTextNode(ancestor, range.startOffset, range.endOffset);
		if (isCopy) {
			frag.appendChild(textNode);
		}
		removeNodes();
		return isCopy ? frag : range;
	}
	function extractNodes(parent, frag) {
		var node = parent.firstChild, nextNode;
		while (node) {
			var testRange = new KRange(doc).selectNode(node);
			start = testRange.compareBoundaryPoints(_START_TO_END, range);
			if (start >= 0 && incStart <= 0) {
				incStart = testRange.compareBoundaryPoints(_START_TO_START, range);
			}
			if (incStart >= 0 && incEnd <= 0) {
				incEnd = testRange.compareBoundaryPoints(_END_TO_END, range);
			}
			if (incEnd >= 0 && end <= 0) {
				end = testRange.compareBoundaryPoints(_END_TO_START, range);
			}
			if (end >= 0) {
				return false;
			}
			nextNode = node.nextSibling;
			if (start > 0) {
				if (node.nodeType == 1) {
					if (incStart >= 0 && incEnd <= 0) {
						if (isCopy) {
							frag.appendChild(node.cloneNode(true));
						}
						if (isDelete) {
							nodeList.push(node);
						}
					} else {
						var childFlag;
						if (isCopy) {
							childFlag = node.cloneNode(false);
							frag.appendChild(childFlag);
						}
						if (extractNodes(node, childFlag) === false) {
							return false;
						}
					}
				} else if (node.nodeType == 3) {
					var textNode;
					if (node == copyRange.startContainer) {
						textNode = splitTextNode(node, copyRange.startOffset, node.nodeValue.length);
					} else if (node == copyRange.endContainer) {
						textNode = splitTextNode(node, 0, copyRange.endOffset);
					} else {
						textNode = splitTextNode(node, 0, node.nodeValue.length);
					}
					if (isCopy) {
						try {
							frag.appendChild(textNode);
						} catch(e) {}
					}
				}
			}
			node = nextNode;
		}
	}
	extractNodes(ancestor, frag);
	if (isDelete) {
		range.up().collapse(true);
	}
	for (var i = 0, len = nodeList.length; i < len; i++) {
		var node = nodeList[i];
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
	}
	return isCopy ? frag : range;
}
function _moveToElementText(range, el) {
	var node = el;
	while (node) {
		var knode = K(node);
		if (knode.name == 'marquee' || knode.name == 'select') {
			return;
		}
		node = node.parentNode;
	}
	try {
		range.moveToElementText(el);
	} catch(e) {}
}
function _getStartEnd(rng, isStart) {
	var doc = rng.parentElement().ownerDocument,
		pointRange = rng.duplicate();
	pointRange.collapse(isStart);
	var parent = pointRange.parentElement(),
		nodes = parent.childNodes;
	if (nodes.length === 0) {
		return {node: parent.parentNode, offset: K(parent).index()};
	}
	var startNode = doc, startPos = 0, cmp = -1;
	var testRange = rng.duplicate();
	_moveToElementText(testRange, parent);
	for (var i = 0, len = nodes.length; i < len; i++) {
		var node = nodes[i];
		cmp = testRange.compareEndPoints('StartToStart', pointRange);
		if (cmp === 0) {
			return {node: node.parentNode, offset: i};
		}
		if (node.nodeType == 1) {
			var nodeRange = rng.duplicate(), dummy, knode = K(node), newNode = node;
			if (knode.isControl()) {
				dummy = doc.createElement('span');
				knode.after(dummy);
				newNode = dummy;
				startPos += knode.text().replace(/\r\n|\n|\r/g, '').length;
			}
			_moveToElementText(nodeRange, newNode);
			testRange.setEndPoint('StartToEnd', nodeRange);
			if (cmp > 0) {
				startPos += nodeRange.text.replace(/\r\n|\n|\r/g, '').length;
			} else {
				startPos = 0;
			}
			if (dummy) {
				K(dummy).remove();
			}
		} else if (node.nodeType == 3) {
			testRange.moveStart('character', node.nodeValue.length);
			startPos += node.nodeValue.length;
		}
		if (cmp < 0) {
			startNode = node;
		}
	}
	if (cmp < 0 && startNode.nodeType == 1) {
		return {node: parent, offset: K(parent.lastChild).index() + 1};
	}
	if (cmp > 0) {
		while (startNode.nextSibling && startNode.nodeType == 1) {
			startNode = startNode.nextSibling;
		}
	}
	testRange = rng.duplicate();
	_moveToElementText(testRange, parent);
	testRange.setEndPoint('StartToEnd', pointRange);
	startPos -= testRange.text.replace(/\r\n|\n|\r/g, '').length;
	if (cmp > 0 && startNode.nodeType == 3) {
		var prevNode = startNode.previousSibling;
		while (prevNode && prevNode.nodeType == 3) {
			startPos -= prevNode.nodeValue.length;
			prevNode = prevNode.previousSibling;
		}
	}
	return {node: startNode, offset: startPos};
}
function _getEndRange(node, offset) {
	var doc = node.ownerDocument || node,
		range = doc.body.createTextRange();
	if (doc == node) {
		range.collapse(true);
		return range;
	}
	if (node.nodeType == 1 && node.childNodes.length > 0) {
		var children = node.childNodes, isStart, child;
		if (offset === 0) {
			child = children[0];
			isStart = true;
		} else {
			child = children[offset - 1];
			isStart = false;
		}
		if (!child) {
			return range;
		}
		if (K(child).name === 'head') {
			if (offset === 1) {
				isStart = true;
			}
			if (offset === 2) {
				isStart = false;
			}
			range.collapse(isStart);
			return range;
		}
		if (child.nodeType == 1) {
			var kchild = K(child), span;
			if (kchild.isControl()) {
				span = doc.createElement('span');
				if (isStart) {
					kchild.before(span);
				} else {
					kchild.after(span);
				}
				child = span;
			}
			_moveToElementText(range, child);
			range.collapse(isStart);
			if (span) {
				K(span).remove();
			}
			return range;
		}
		node = child;
		offset = isStart ? 0 : child.nodeValue.length;
	}
	var dummy = doc.createElement('span');
	K(node).before(dummy);
	_moveToElementText(range, dummy);
	range.moveStart('character', offset);
	K(dummy).remove();
	return range;
}
function _toRange(rng) {
	var doc, range;
	function tr2td(start) {
		if (K(start.node).name == 'tr') {
			start.node = start.node.cells[start.offset];
			start.offset = 0;
		}
	}
	if (_IE) {
		if (rng.item) {
			doc = _getDoc(rng.item(0));
			range = new KRange(doc);
			range.selectNode(rng.item(0));
			return range;
		}
		doc = rng.parentElement().ownerDocument;
		var start = _getStartEnd(rng, true),
			end = _getStartEnd(rng, false);
		tr2td(start);
		tr2td(end);
		range = new KRange(doc);
		range.setStart(start.node, start.offset);
		range.setEnd(end.node, end.offset);
		return range;
	}
	var startContainer = rng.startContainer;
	doc = startContainer.ownerDocument || startContainer;
	range = new KRange(doc);
	range.setStart(startContainer, rng.startOffset);
	range.setEnd(rng.endContainer, rng.endOffset);
	return range;
}
function KRange(doc) {
	this.init(doc);
}
_extend(KRange, {
	init : function(doc) {
		var self = this;
		self.startContainer = doc;
		self.startOffset = 0;
		self.endContainer = doc;
		self.endOffset = 0;
		self.collapsed = true;
		self.doc = doc;
	},
	commonAncestor : function() {
		function getParents(node) {
			var parents = [];
			while (node) {
				parents.push(node);
				node = node.parentNode;
			}
			return parents;
		}
		var parentsA = getParents(this.startContainer),
			parentsB = getParents(this.endContainer),
			i = 0, lenA = parentsA.length, lenB = parentsB.length, parentA, parentB;
		while (++i) {
			parentA = parentsA[lenA - i];
			parentB = parentsB[lenB - i];
			if (!parentA || !parentB || parentA !== parentB) {
				break;
			}
		}
		return parentsA[lenA - i + 1];
	},
	setStart : function(node, offset) {
		var self = this, doc = self.doc;
		self.startContainer = node;
		self.startOffset = offset;
		if (self.endContainer === doc) {
			self.endContainer = node;
			self.endOffset = offset;
		}
		return _updateCollapsed(this);
	},
	setEnd : function(node, offset) {
		var self = this, doc = self.doc;
		self.endContainer = node;
		self.endOffset = offset;
		if (self.startContainer === doc) {
			self.startContainer = node;
			self.startOffset = offset;
		}
		return _updateCollapsed(this);
	},
	setStartBefore : function(node) {
		return this.setStart(node.parentNode || this.doc, K(node).index());
	},
	setStartAfter : function(node) {
		return this.setStart(node.parentNode || this.doc, K(node).index() + 1);
	},
	setEndBefore : function(node) {
		return this.setEnd(node.parentNode || this.doc, K(node).index());
	},
	setEndAfter : function(node) {
		return this.setEnd(node.parentNode || this.doc, K(node).index() + 1);
	},
	selectNode : function(node) {
		return this.setStartBefore(node).setEndAfter(node);
	},
	selectNodeContents : function(node) {
		var knode = K(node);
		if (knode.type == 3 || knode.isSingle()) {
			return this.selectNode(node);
		}
		var children = knode.children();
		if (children.length > 0) {
			return this.setStartBefore(children[0]).setEndAfter(children[children.length - 1]);
		}
		return this.setStart(node, 0).setEnd(node, 0);
	},
	collapse : function(toStart) {
		if (toStart) {
			return this.setEnd(this.startContainer, this.startOffset);
		}
		return this.setStart(this.endContainer, this.endOffset);
	},
	compareBoundaryPoints : function(how, range) {
		var rangeA = this.get(), rangeB = range.get();
		if (_IE) {
			var arr = {};
			arr[_START_TO_START] = 'StartToStart';
			arr[_START_TO_END] = 'EndToStart';
			arr[_END_TO_END] = 'EndToEnd';
			arr[_END_TO_START] = 'StartToEnd';
			var cmp = rangeA.compareEndPoints(arr[how], rangeB);
			if (cmp !== 0) {
				return cmp;
			}
			var nodeA, nodeB, nodeC, posA, posB;
			if (how === _START_TO_START || how === _END_TO_START) {
				nodeA = this.startContainer;
				posA = this.startOffset;
			}
			if (how === _START_TO_END || how === _END_TO_END) {
				nodeA = this.endContainer;
				posA = this.endOffset;
			}
			if (how === _START_TO_START || how === _START_TO_END) {
				nodeB = range.startContainer;
				posB = range.startOffset;
			}
			if (how === _END_TO_END || how === _END_TO_START) {
				nodeB = range.endContainer;
				posB = range.endOffset;
			}
			if (nodeA === nodeB) {
				var diff = posA - posB;
				return diff > 0 ? 1 : (diff < 0 ? -1 : 0);
			}
			nodeC = nodeB;
			while (nodeC && nodeC.parentNode !== nodeA) {
				nodeC = nodeC.parentNode;
			}
			if (nodeC) {
				return K(nodeC).index() >= posA ? -1 : 1;
			}
			nodeC = nodeA;
			while (nodeC && nodeC.parentNode !== nodeB) {
				nodeC = nodeC.parentNode;
			}
			if (nodeC) {
				return K(nodeC).index() >= posB ? 1 : -1;
			}
			nodeC = K(nodeB).next();
			if (nodeC && nodeC.contains(nodeA)) {
				return 1;
			}
			nodeC = K(nodeA).next();
			if (nodeC && nodeC.contains(nodeB)) {
				return -1;
			}
		} else {
			return rangeA.compareBoundaryPoints(how, rangeB);
		}
	},
	cloneRange : function() {
		return new KRange(this.doc).setStart(this.startContainer, this.startOffset).setEnd(this.endContainer, this.endOffset);
	},
	toString : function() {
		var rng = this.get(), str = _IE ? rng.text : rng.toString();
		return str.replace(/\r\n|\n|\r/g, '');
	},
	cloneContents : function() {
		return _copyAndDelete(this, true, false);
	},
	deleteContents : function() {
		return _copyAndDelete(this, false, true);
	},
	extractContents : function() {
		return _copyAndDelete(this, true, true);
	},
	insertNode : function(node) {
		var self = this,
			sc = self.startContainer, so = self.startOffset,
			ec = self.endContainer, eo = self.endOffset,
			firstChild, lastChild, c, nodeCount = 1;
		if (node.nodeName.toLowerCase() === '#document-fragment') {
			firstChild = node.firstChild;
			lastChild = node.lastChild;
			nodeCount = node.childNodes.length;
		}
		if (sc.nodeType == 1) {
			c = sc.childNodes[so];
			if (c) {
				sc.insertBefore(node, c);
				if (sc === ec) {
					eo += nodeCount;
				}
			} else {
				sc.appendChild(node);
			}
		} else if (sc.nodeType == 3) {
			if (so === 0) {
				sc.parentNode.insertBefore(node, sc);
				if (sc.parentNode === ec) {
					eo += nodeCount;
				}
			} else if (so >= sc.nodeValue.length) {
				if (sc.nextSibling) {
					sc.parentNode.insertBefore(node, sc.nextSibling);
				} else {
					sc.parentNode.appendChild(node);
				}
			} else {
				if (so > 0) {
					c = sc.splitText(so);
				} else {
					c = sc;
				}
				sc.parentNode.insertBefore(node, c);
				if (sc === ec) {
					ec = c;
					eo -= so;
				}
			}
		}
		if (firstChild) {
			self.setStartBefore(firstChild).setEndAfter(lastChild);
		} else {
			self.selectNode(node);
		}
		if (self.compareBoundaryPoints(_END_TO_END, self.cloneRange().setEnd(ec, eo)) >= 1) {
			return self;
		}
		return self.setEnd(ec, eo);
	},
	surroundContents : function(node) {
		node.appendChild(this.extractContents());
		return this.insertNode(node).selectNode(node);
	},
	isControl : function() {
		var self = this,
			sc = self.startContainer, so = self.startOffset,
			ec = self.endContainer, eo = self.endOffset, rng;
		return sc.nodeType == 1 && sc === ec && so + 1 === eo && K(sc.childNodes[so]).isControl();
	},
	get : function(hasControlRange) {
		var self = this, doc = self.doc, node, rng;
		if (!_IE) {
			rng = doc.createRange();
			try {
				rng.setStart(self.startContainer, self.startOffset);
				rng.setEnd(self.endContainer, self.endOffset);
			} catch (e) {}
			return rng;
		}
		if (hasControlRange && self.isControl()) {
			rng = doc.body.createControlRange();
			rng.addElement(self.startContainer.childNodes[self.startOffset]);
			return rng;
		}
		var range = self.cloneRange().down();
		rng = doc.body.createTextRange();
		rng.setEndPoint('StartToStart', _getEndRange(range.startContainer, range.startOffset));
		rng.setEndPoint('EndToStart', _getEndRange(range.endContainer, range.endOffset));
		return rng;
	},
	html : function() {
		return K(this.cloneContents()).outer();
	},
	down : function() {
		var self = this;
		function downPos(node, pos, isStart) {
			if (node.nodeType != 1) {
				return;
			}
			var children = K(node).children();
			if (children.length === 0) {
				return;
			}
			var left, right, child, offset;
			if (pos > 0) {
				left = children.eq(pos - 1);
			}
			if (pos < children.length) {
				right = children.eq(pos);
			}
			if (left && left.type == 3) {
				child = left[0];
				offset = child.nodeValue.length;
			}
			if (right && right.type == 3) {
				child = right[0];
				offset = 0;
			}
			if (!child) {
				return;
			}
			if (isStart) {
				self.setStart(child, offset);
			} else {
				self.setEnd(child, offset);
			}
		}
		downPos(self.startContainer, self.startOffset, true);
		downPos(self.endContainer, self.endOffset, false);
		return self;
	},
	up : function() {
		var self = this;
		function upPos(node, pos, isStart) {
			if (node.nodeType != 3) {
				return;
			}
			if (pos === 0) {
				if (isStart) {
					self.setStartBefore(node);
				} else {
					self.setEndBefore(node);
				}
			} else if (pos == node.nodeValue.length) {
				if (isStart) {
					self.setStartAfter(node);
				} else {
					self.setEndAfter(node);
				}
			}
		}
		upPos(self.startContainer, self.startOffset, true);
		upPos(self.endContainer, self.endOffset, false);
		return self;
	},
	enlarge : function(toBlock) {
		var self = this;
		self.up();
		function enlargePos(node, pos, isStart) {
			var knode = K(node), parent;
			if (knode.type == 3 || _NOSPLIT_TAG_MAP[knode.name] || !toBlock && knode.isBlock()) {
				return;
			}
			if (pos === 0) {
				while (!knode.prev()) {
					parent = knode.parent();
					if (!parent || _NOSPLIT_TAG_MAP[parent.name] || !toBlock && parent.isBlock()) {
						break;
					}
					knode = parent;
				}
				if (isStart) {
					self.setStartBefore(knode[0]);
				} else {
					self.setEndBefore(knode[0]);
				}
			} else if (pos == knode.children().length) {
				while (!knode.next()) {
					parent = knode.parent();
					if (!parent || _NOSPLIT_TAG_MAP[parent.name] || !toBlock && parent.isBlock()) {
						break;
					}
					knode = parent;
				}
				if (isStart) {
					self.setStartAfter(knode[0]);
				} else {
					self.setEndAfter(knode[0]);
				}
			}
		}
		enlargePos(self.startContainer, self.startOffset, true);
		enlargePos(self.endContainer, self.endOffset, false);
		return self;
	},
	shrink : function() {
		var self = this, child, collapsed = self.collapsed;
		while (self.startContainer.nodeType == 1 && (child = self.startContainer.childNodes[self.startOffset]) && child.nodeType == 1 && !K(child).isSingle()) {
			self.setStart(child, 0);
		}
		if (collapsed) {
			return self.collapse(collapsed);
		}
		while (self.endContainer.nodeType == 1 && self.endOffset > 0 && (child = self.endContainer.childNodes[self.endOffset - 1]) && child.nodeType == 1 && !K(child).isSingle()) {
			self.setEnd(child, child.childNodes.length);
		}
		return self;
	},
	createBookmark : function(serialize) {
		var self = this, doc = self.doc, endNode,
			startNode = K('<span style="display:none;"></span>', doc)[0];
		startNode.id = '__kindeditor_bookmark_start_' + (_BOOKMARK_ID++) + '__';
		if (!self.collapsed) {
			endNode = startNode.cloneNode(true);
			endNode.id = '__kindeditor_bookmark_end_' + (_BOOKMARK_ID++) + '__';
		}
		if (endNode) {
			self.cloneRange().collapse(false).insertNode(endNode).setEndBefore(endNode);
		}
		self.insertNode(startNode).setStartAfter(startNode);
		return {
			start : serialize ? '#' + startNode.id : startNode,
			end : endNode ? (serialize ? '#' + endNode.id : endNode) : null
		};
	},
	moveToBookmark : function(bookmark) {
		var self = this, doc = self.doc,
			start = K(bookmark.start, doc), end = bookmark.end ? K(bookmark.end, doc) : null;
		if (!start || start.length < 1) {
			return self;
		}
		self.setStartBefore(start[0]);
		start.remove();
		if (end && end.length > 0) {
			self.setEndBefore(end[0]);
			end.remove();
		} else {
			self.collapse(true);
		}
		return self;
	},
	dump : function() {
		console.log('--------------------');
		console.log(this.startContainer.nodeType == 3 ? this.startContainer.nodeValue : this.startContainer, this.startOffset);
		console.log(this.endContainer.nodeType == 3 ? this.endContainer.nodeValue : this.endContainer, this.endOffset);
	}
});
function _range(mixed) {
	if (!mixed.nodeName) {
		return mixed.constructor === KRange ? mixed : _toRange(mixed);
	}
	return new KRange(mixed);
}
K.RangeClass = KRange;
K.range = _range;
K.START_TO_START = _START_TO_START;
K.START_TO_END = _START_TO_END;
K.END_TO_END = _END_TO_END;
K.END_TO_START = _END_TO_START;
function _nativeCommand(doc, key, val) {
	try {
		doc.execCommand(key, false, val);
	} catch(e) {}
}
function _nativeCommandValue(doc, key) {
	var val = '';
	try {
		val = doc.queryCommandValue(key);
	} catch (e) {}
	if (typeof val !== 'string') {
		val = '';
	}
	return val;
}
function _getSel(doc) {
	var win = _getWin(doc);
	return doc.selection || win.getSelection();
}
function _getRng(doc) {
	var sel = _getSel(doc), rng;
	try {
		if (sel.rangeCount > 0) {
			rng = sel.getRangeAt(0);
		} else {
			rng = sel.createRange();
		}
	} catch(e) {}
	if (_IE && (!rng || (!rng.item && rng.parentElement().ownerDocument !== doc))) {
		return null;
	}
	return rng;
}
function _singleKeyMap(map) {
	var newMap = {}, arr, v;
	_each(map, function(key, val) {
		arr = key.split(',');
		for (var i = 0, len = arr.length; i < len; i++) {
			v = arr[i];
			newMap[v] = val;
		}
	});
	return newMap;
}
function _hasAttrOrCss(knode, map) {
	return _hasAttrOrCssByKey(knode, map, '*') || _hasAttrOrCssByKey(knode, map);
}
function _hasAttrOrCssByKey(knode, map, mapKey) {
	mapKey = mapKey || knode.name;
	if (knode.type !== 1) {
		return false;
	}
	var newMap = _singleKeyMap(map);
	if (!newMap[mapKey]) {
		return false;
	}
	var arr = newMap[mapKey].split(',');
	for (var i = 0, len = arr.length; i < len; i++) {
		var key = arr[i];
		if (key === '*') {
			return true;
		}
		var match = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(key);
		var method = match[1] ? 'css' : 'attr';
		key = match[2];
		var val = match[3] || '';
		if (val === '' && knode[method](key) !== '') {
			return true;
		}
		if (val !== '' && knode[method](key) === val) {
			return true;
		}
	}
	return false;
}
function _removeAttrOrCss(knode, map) {
	if (knode.type != 1) {
		return;
	}
	_removeAttrOrCssByKey(knode, map, '*');
	_removeAttrOrCssByKey(knode, map);
}
function _removeAttrOrCssByKey(knode, map, mapKey) {
	mapKey = mapKey || knode.name;
	if (knode.type !== 1) {
		return;
	}
	var newMap = _singleKeyMap(map);
	if (!newMap[mapKey]) {
		return;
	}
	var arr = newMap[mapKey].split(','), allFlag = false;
	for (var i = 0, len = arr.length; i < len; i++) {
		var key = arr[i];
		if (key === '*') {
			allFlag = true;
			break;
		}
		var match = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(key);
		key = match[2];
		if (match[1]) {
			key = _toCamel(key);
			if (knode[0].style[key]) {
				knode[0].style[key] = '';
			}
		} else {
			knode.removeAttr(key);
		}
	}
	if (allFlag) {
		knode.remove(true);
	}
}
function _getInnerNode(knode) {
	var inner = knode;
	while (inner.first()) {
		inner = inner.first();
	}
	return inner;
}
function _isEmptyNode(knode) {
	if (knode.type != 1 || knode.isSingle()) {
		return false;
	}
	return knode.html().replace(/<[^>]+>/g, '') === '';
}
function _mergeWrapper(a, b) {
	a = a.clone(true);
	var lastA = _getInnerNode(a), childA = a, merged = false;
	while (b) {
		while (childA) {
			if (childA.name === b.name) {
				_mergeAttrs(childA, b.attr(), b.css());
				merged = true;
			}
			childA = childA.first();
		}
		if (!merged) {
			lastA.append(b.clone(false));
		}
		merged = false;
		b = b.first();
	}
	return a;
}
function _wrapNode(knode, wrapper) {
	wrapper = wrapper.clone(true);
	if (knode.type == 3) {
		_getInnerNode(wrapper).append(knode.clone(false));
		knode.replaceWith(wrapper);
		return wrapper;
	}
	var nodeWrapper = knode, child;
	while ((child = knode.first()) && child.children().length == 1) {
		knode = child;
	}
	child = knode.first();
	var frag = knode.doc.createDocumentFragment();
	while (child) {
		frag.appendChild(child[0]);
		child = child.next();
	}
	wrapper = _mergeWrapper(nodeWrapper, wrapper);
	if (frag.firstChild) {
		_getInnerNode(wrapper).append(frag);
	}
	nodeWrapper.replaceWith(wrapper);
	return wrapper;
}
function _mergeAttrs(knode, attrs, styles) {
	_each(attrs, function(key, val) {
		if (key !== 'style') {
			knode.attr(key, val);
		}
	});
	_each(styles, function(key, val) {
		knode.css(key, val);
	});
}
function _inPreElement(knode) {
	while (knode && knode.name != 'body') {
		if (_PRE_TAG_MAP[knode.name] || knode.name == 'div' && knode.hasClass('ke-script')) {
			return true;
		}
		knode = knode.parent();
	}
	return false;
}
function KCmd(range) {
	this.init(range);
}
_extend(KCmd, {
	init : function(range) {
		var self = this, doc = range.doc;
		self.doc = doc;
		self.win = _getWin(doc);
		self.sel = _getSel(doc);
		self.range = range;
	},
	selection : function(forceReset) {
		var self = this, doc = self.doc, rng = _getRng(doc);
		self.sel = _getSel(doc);
		if (rng) {
			self.range = _range(rng);
			if (K(self.range.startContainer).name == 'html') {
				self.range.selectNodeContents(doc.body).collapse(false);
			}
			return self;
		}
		if (forceReset) {
			self.range.selectNodeContents(doc.body).collapse(false);
		}
		return self;
	},
	select : function(hasDummy) {
		hasDummy = _undef(hasDummy, true);
		var self = this, sel = self.sel, range = self.range.cloneRange().shrink(),
			sc = range.startContainer, so = range.startOffset,
			ec = range.endContainer, eo = range.endOffset,
			doc = _getDoc(sc), win = self.win, rng, hasU200b = false;
		if (hasDummy && sc.nodeType == 1 && range.collapsed) {
			if (_IE) {
				var dummy = K('<span>&nbsp;</span>', doc);
				range.insertNode(dummy[0]);
				rng = doc.body.createTextRange();
				try {
					rng.moveToElementText(dummy[0]);
				} catch(ex) {}
				rng.collapse(false);
				rng.select();
				dummy.remove();
				win.focus();
				return self;
			}
			if (_WEBKIT) {
				var children = sc.childNodes;
				if (K(sc).isInline() || so > 0 && K(children[so - 1]).isInline() || children[so] && K(children[so]).isInline()) {
					range.insertNode(doc.createTextNode('\u200B'));
					hasU200b = true;
				}
			}
		}
		if (_IE) {
			try {
				rng = range.get(true);
				rng.select();
			} catch(e) {}
		} else {
			if (hasU200b) {
				range.collapse(false);
			}
			rng = range.get(true);
			sel.removeAllRanges();
			sel.addRange(rng);
			if (doc !== document) {
				var pos = K(rng.endContainer).pos();
				win.scrollTo(pos.x, pos.y);
			}
		}
		win.focus();
		return self;
	},
	wrap : function(val) {
		var self = this, doc = self.doc, range = self.range, wrapper;
		wrapper = K(val, doc);
		if (range.collapsed) {
			range.shrink();
			range.insertNode(wrapper[0]).selectNodeContents(wrapper[0]);
			return self;
		}
		if (wrapper.isBlock()) {
			var copyWrapper = wrapper.clone(true), child = copyWrapper;
			while (child.first()) {
				child = child.first();
			}
			child.append(range.extractContents());
			range.insertNode(copyWrapper[0]).selectNode(copyWrapper[0]);
			return self;
		}
		range.enlarge();
		var bookmark = range.createBookmark(), ancestor = range.commonAncestor(), isStart = false;
		K(ancestor).scan(function(node) {
			if (!isStart && node == bookmark.start) {
				isStart = true;
				return;
			}
			if (isStart) {
				if (node == bookmark.end) {
					return false;
				}
				var knode = K(node);
				if (_inPreElement(knode)) {
					return;
				}
				if (knode.type == 3 && _trim(node.nodeValue).length > 0) {
					var parent;
					while ((parent = knode.parent()) && parent.isStyle() && parent.children().length == 1) {
						knode = parent;
					}
					_wrapNode(knode, wrapper);
				}
			}
		});
		range.moveToBookmark(bookmark);
		return self;
	},
	split : function(isStart, map) {
		var range = this.range, doc = range.doc;
		var tempRange = range.cloneRange().collapse(isStart);
		var node = tempRange.startContainer, pos = tempRange.startOffset,
			parent = node.nodeType == 3 ? node.parentNode : node,
			needSplit = false, knode;
		while (parent && parent.parentNode) {
			knode = K(parent);
			if (map) {
				if (!knode.isStyle()) {
					break;
				}
				if (!_hasAttrOrCss(knode, map)) {
					break;
				}
			} else {
				if (_NOSPLIT_TAG_MAP[knode.name]) {
					break;
				}
			}
			needSplit = true;
			parent = parent.parentNode;
		}
		if (needSplit) {
			var dummy = doc.createElement('span');
			range.cloneRange().collapse(!isStart).insertNode(dummy);
			if (isStart) {
				tempRange.setStartBefore(parent.firstChild).setEnd(node, pos);
			} else {
				tempRange.setStart(node, pos).setEndAfter(parent.lastChild);
			}
			var frag = tempRange.extractContents(),
				first = frag.firstChild, last = frag.lastChild;
			if (isStart) {
				tempRange.insertNode(frag);
				range.setStartAfter(last).setEndBefore(dummy);
			} else {
				parent.appendChild(frag);
				range.setStartBefore(dummy).setEndBefore(first);
			}
			var dummyParent = dummy.parentNode;
			if (dummyParent == range.endContainer) {
				var prev = K(dummy).prev(), next = K(dummy).next();
				if (prev && next && prev.type == 3 && next.type == 3) {
					range.setEnd(prev[0], prev[0].nodeValue.length);
				} else if (!isStart) {
					range.setEnd(range.endContainer, range.endOffset - 1);
				}
			}
			dummyParent.removeChild(dummy);
		}
		return this;
	},
	remove : function(map) {
		var self = this, doc = self.doc, range = self.range;
		range.enlarge();
		if (range.startOffset === 0) {
			var ksc = K(range.startContainer), parent;
			while ((parent = ksc.parent()) && parent.isStyle() && parent.children().length == 1) {
				ksc = parent;
			}
			range.setStart(ksc[0], 0);
			ksc = K(range.startContainer);
			if (ksc.isBlock()) {
				_removeAttrOrCss(ksc, map);
			}
			var kscp = ksc.parent();
			if (kscp && kscp.isBlock()) {
				_removeAttrOrCss(kscp, map);
			}
		}
		var sc, so;
		if (range.collapsed) {
			self.split(true, map);
			sc = range.startContainer;
			so = range.startOffset;
			if (so > 0) {
				var sb = K(sc.childNodes[so - 1]);
				if (sb && _isEmptyNode(sb)) {
					sb.remove();
					range.setStart(sc, so - 1);
				}
			}
			var sa = K(sc.childNodes[so]);
			if (sa && _isEmptyNode(sa)) {
				sa.remove();
			}
			if (_isEmptyNode(sc)) {
				range.startBefore(sc);
				sc.remove();
			}
			range.collapse(true);
			return self;
		}
		self.split(true, map);
		self.split(false, map);
		var startDummy = doc.createElement('span'), endDummy = doc.createElement('span');
		range.cloneRange().collapse(false).insertNode(endDummy);
		range.cloneRange().collapse(true).insertNode(startDummy);
		var nodeList = [], cmpStart = false;
		K(range.commonAncestor()).scan(function(node) {
			if (!cmpStart && node == startDummy) {
				cmpStart = true;
				return;
			}
			if (node == endDummy) {
				return false;
			}
			if (cmpStart) {
				nodeList.push(node);
			}
		});
		K(startDummy).remove();
		K(endDummy).remove();
		sc = range.startContainer;
		so = range.startOffset;
		var ec = range.endContainer, eo = range.endOffset;
		if (so > 0) {
			var startBefore = K(sc.childNodes[so - 1]);
			if (startBefore && _isEmptyNode(startBefore)) {
				startBefore.remove();
				range.setStart(sc, so - 1);
				if (sc == ec) {
					range.setEnd(ec, eo - 1);
				}
			}
			var startAfter = K(sc.childNodes[so]);
			if (startAfter && _isEmptyNode(startAfter)) {
				startAfter.remove();
				if (sc == ec) {
					range.setEnd(ec, eo - 1);
				}
			}
		}
		var endAfter = K(ec.childNodes[range.endOffset]);
		if (endAfter && _isEmptyNode(endAfter)) {
			endAfter.remove();
		}
		var bookmark = range.createBookmark(true);
		_each(nodeList, function(i, node) {
			_removeAttrOrCss(K(node), map);
		});
		range.moveToBookmark(bookmark);
		return self;
	},
	commonNode : function(map) {
		var range = this.range;
		var ec = range.endContainer, eo = range.endOffset,
			node = (ec.nodeType == 3 || eo === 0) ? ec : ec.childNodes[eo - 1];
		function find(node) {
			var child = node, parent = node;
			while (parent) {
				if (_hasAttrOrCss(K(parent), map)) {
					return K(parent);
				}
				parent = parent.parentNode;
			}
			while (child && (child = child.lastChild)) {
				if (_hasAttrOrCss(K(child), map)) {
					return K(child);
				}
			}
			return null;
		}
		var cNode = find(node);
		if (cNode) {
			return cNode;
		}
		if (node.nodeType == 1 || (ec.nodeType == 3 && eo === 0)) {
			var prev = K(node).prev();
			if (prev) {
				return find(prev);
			}
		}
		return null;
	},
	commonAncestor : function(tagName) {
		var range = this.range,
			sc = range.startContainer, so = range.startOffset,
			ec = range.endContainer, eo = range.endOffset,
			startNode = (sc.nodeType == 3 || so === 0) ? sc : sc.childNodes[so - 1],
			endNode = (ec.nodeType == 3 || eo === 0) ? ec : ec.childNodes[eo - 1];
		function find(node) {
			while (node) {
				if (node.nodeType == 1) {
					if (node.tagName.toLowerCase() === tagName) {
						return node;
					}
				}
				node = node.parentNode;
			}
			return null;
		}
		var start = find(startNode), end = find(endNode);
		if (start && end && start === end) {
			return K(start);
		}
		return null;
	},
	state : function(key) {
		var self = this, doc = self.doc, bool = false;
		try {
			bool = doc.queryCommandState(key);
		} catch (e) {}
		return bool;
	},
	val : function(key) {
		var self = this, doc = self.doc, range = self.range;
		function lc(val) {
			return val.toLowerCase();
		}
		key = lc(key);
		var val = '', knode;
		if (key === 'fontfamily' || key === 'fontname') {
			val = _nativeCommandValue(doc, 'fontname');
			val = val.replace(/['"]/g, '');
			return lc(val);
		}
		if (key === 'formatblock') {
			val = _nativeCommandValue(doc, key);
			if (val === '') {
				knode = self.commonNode({'h1,h2,h3,h4,h5,h6,p,div,pre,address' : '*'});
				if (knode) {
					val = knode.name;
				}
			}
			if (val === 'Normal') {
				val = 'p';
			}
			return lc(val);
		}
		if (key === 'fontsize') {
			knode = self.commonNode({'*' : '.font-size'});
			if (knode) {
				val = knode.css('font-size');
			}
			return lc(val);
		}
		if (key === 'forecolor') {
			knode = self.commonNode({'*' : '.color'});
			if (knode) {
				val = knode.css('color');
			}
			val = _toHex(val);
			if (val === '') {
				val = 'default';
			}
			return lc(val);
		}
		if (key === 'hilitecolor') {
			knode = self.commonNode({'*' : '.background-color'});
			if (knode) {
				val = knode.css('background-color');
			}
			val = _toHex(val);
			if (val === '') {
				val = 'default';
			}
			return lc(val);
		}
		return val;
	},
	toggle : function(wrapper, map) {
		var self = this;
		if (self.commonNode(map)) {
			self.remove(map);
		} else {
			self.wrap(wrapper);
		}
		return self.select();
	},
	bold : function() {
		return this.toggle('<strong></strong>', {
			span : '.font-weight=bold',
			strong : '*',
			b : '*'
		});
	},
	italic : function() {
		return this.toggle('<em></em>', {
			span : '.font-style=italic',
			em : '*',
			i : '*'
		});
	},
	underline : function() {
		return this.toggle('<u></u>', {
			span : '.text-decoration=underline',
			u : '*'
		});
	},
	strikethrough : function() {
		return this.toggle('<s></s>', {
			span : '.text-decoration=line-through',
			s : '*'
		});
	},
	forecolor : function(val) {
		return this.toggle('<span style="color:' + val + ';"></span>', {
			span : '.color=' + val,
			font : 'color'
		});
	},
	hilitecolor : function(val) {
		return this.toggle('<span style="background-color:' + val + ';"></span>', {
			span : '.background-color=' + val
		});
	},
	fontsize : function(val) {
		return this.toggle('<span style="font-size:' + val + ';"></span>', {
			span : '.font-size=' + val,
			font : 'size'
		});
	},
	fontname : function(val) {
		return this.fontfamily(val);
	},
	fontfamily : function(val) {
		return this.toggle('<span style="font-family:' + val + ';"></span>', {
			span : '.font-family=' + val,
			font : 'face'
		});
	},
	removeformat : function() {
		var map = {
			'*' : '.font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent'
		},
		tags = _STYLE_TAG_MAP;
		_each(tags, function(key, val) {
			map[key] = '*';
		});
		this.remove(map);
		return this.select();
	},
	inserthtml : function(val, quickMode) {
		var self = this, range = self.range;
		if (val === '') {
			return self;
		}
		function pasteHtml(range, val) {
			val = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + val;
			var rng = range.get();
			if (rng.item) {
				rng.item(0).outerHTML = val;
			} else {
				rng.pasteHTML(val);
			}
			var temp = range.doc.getElementById('__kindeditor_temp_tag__');
			temp.parentNode.removeChild(temp);
			var newRange = _toRange(rng);
			range.setEnd(newRange.endContainer, newRange.endOffset);
			range.collapse(false);
			self.select(false);
		}
		function insertHtml(range, val) {
			var doc = range.doc,
				frag = doc.createDocumentFragment();
			K('@' + val, doc).each(function() {
				frag.appendChild(this);
			});
			range.deleteContents();
			range.insertNode(frag);
			range.collapse(false);
			self.select(false);
		}
		if (_IE && quickMode) {
			try {
				pasteHtml(range, val);
			} catch(e) {
				insertHtml(range, val);
			}
			return self;
		}
		insertHtml(range, val);
		return self;
	},
	hr : function() {
		return this.inserthtml('<hr />');
	},
	print : function() {
		this.win.print();
		return this;
	},
	insertimage : function(url, title, width, height, border, align) {
		title = _undef(title, '');
		border = _undef(border, 0);
		var html = '<img src="' + _escape(url) + '" data-ke-src="' + _escape(url) + '" ';
		if (width) {
			html += 'width="' + _escape(width) + '" ';
		}
		if (height) {
			html += 'height="' + _escape(height) + '" ';
		}
		if (title) {
			html += 'title="' + _escape(title) + '" ';
		}
		if (align) {
			html += 'align="' + _escape(align) + '" ';
		}
		html += 'alt="' + _escape(title) + '" ';
		html += '/>';
		return this.inserthtml(html);
	},
	createlink : function(url, type) {
		var self = this, doc = self.doc, range = self.range;
		self.select();
		var a = self.commonNode({ a : '*' });
		if (a && !range.isControl()) {
			range.selectNode(a.get());
			self.select();
		}
		var html = '<a href="' + _escape(url) + '" data-ke-src="' + _escape(url) + '" ';
		if (type) {
			html += ' target="' + _escape(type) + '"';
		}
		if (range.collapsed) {
			html += '>' + _escape(url) + '</a>';
			return self.inserthtml(html);
		}
		if (range.isControl()) {
			var node = K(range.startContainer.childNodes[range.startOffset]);
			html += '></a>';
			node.after(K(html, doc));
			node.next().append(node);
			range.selectNode(node[0]);
			return self.select();
		}
		_nativeCommand(doc, 'createlink', '__kindeditor_temp_url__');
		K('a[href="__kindeditor_temp_url__"]', doc).each(function() {
			K(this).attr('href', url).attr('data-ke-src', url);
			if (type) {
				K(this).attr('target', type);
			} else {
				K(this).removeAttr('target');
			}
		});
		return self;
	},
	unlink : function() {
		var self = this, doc = self.doc, range = self.range;
		self.select();
		if (range.collapsed) {
			var a = self.commonNode({ a : '*' });
			if (a) {
				range.selectNode(a.get());
				self.select();
			}
			_nativeCommand(doc, 'unlink', null);
			if (_WEBKIT && K(range.startContainer).name === 'img') {
				var parent = K(range.startContainer).parent();
				if (parent.name === 'a') {
					parent.remove(true);
				}
			}
		} else {
			_nativeCommand(doc, 'unlink', null);
		}
		return self;
	}
});
_each(('formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,' +
	'insertunorderedlist,indent,outdent,subscript,superscript').split(','), function(i, name) {
	KCmd.prototype[name] = function(val) {
		var self = this;
		self.select();
		_nativeCommand(self.doc, name, val);
		if (!_IE || _inArray(name, 'formatblock,selectall,insertorderedlist,insertunorderedlist'.split(',')) >= 0) {
			self.selection();
		}
		return self;
	};
});
_each('cut,copy,paste'.split(','), function(i, name) {
	KCmd.prototype[name] = function() {
		var self = this;
		if (!self.doc.queryCommandSupported(name)) {
			throw 'not supported';
		}
		self.select();
		_nativeCommand(self.doc, name, null);
		return self;
	};
});
function _cmd(mixed) {
	if (mixed.nodeName) {
		var doc = _getDoc(mixed);
		mixed = _range(doc).selectNodeContents(doc.body).collapse(false);
	}
	return new KCmd(mixed);
}
K.CmdClass = KCmd;
K.cmd = _cmd;
function _drag(options) {
	var moveEl = options.moveEl,
		moveFn = options.moveFn,
		clickEl = options.clickEl || moveEl,
		beforeDrag = options.beforeDrag,
		iframeFix = options.iframeFix === undefined ? true : options.iframeFix;
	var docs = [document];
	if (iframeFix) {
		K('iframe').each(function() {
			var src = _formatUrl(this.src || '', 'absolute');
			if (/^https?:\/\//.test(src)) {
				return;
			}
			var doc;
			try {
				doc = _iframeDoc(this);
			} catch(e) {}
			if (doc) {
				var pos = K(this).pos();
				K(doc).data('pos-x', pos.x);
				K(doc).data('pos-y', pos.y);
				docs.push(doc);
			}
		});
	}
	clickEl.mousedown(function(e) {
		e.stopPropagation();
		var self = clickEl.get(),
			x = _removeUnit(moveEl.css('left')),
			y = _removeUnit(moveEl.css('top')),
			width = moveEl.width(),
			height = moveEl.height(),
			pageX = e.pageX,
			pageY = e.pageY;
		if (beforeDrag) {
			beforeDrag();
		}
		function moveListener(e) {
			e.preventDefault();
			var kdoc = K(_getDoc(e.target));
			var diffX = _round((kdoc.data('pos-x') || 0) + e.pageX - pageX);
			var diffY = _round((kdoc.data('pos-y') || 0) + e.pageY - pageY);
			moveFn.call(clickEl, x, y, width, height, diffX, diffY);
		}
		function selectListener(e) {
			e.preventDefault();
		}
		function upListener(e) {
			e.preventDefault();
			K(docs).unbind('mousemove', moveListener)
				.unbind('mouseup', upListener)
				.unbind('selectstart', selectListener);
			if (self.releaseCapture) {
				self.releaseCapture();
			}
		}
		K(docs).mousemove(moveListener)
			.mouseup(upListener)
			.bind('selectstart', selectListener);
		if (self.setCapture) {
			self.setCapture();
		}
	});
}
function KWidget(options) {
	this.init(options);
}
_extend(KWidget, {
	init : function(options) {
		var self = this;
		self.name = options.name || '';
		self.doc = options.doc || document;
		self.win = _getWin(self.doc);
		self.x = _addUnit(options.x);
		self.y = _addUnit(options.y);
		self.z = options.z;
		self.width = _addUnit(options.width);
		self.height = _addUnit(options.height);
		self.div = K('<div style="display:block;"></div>');
		self.options = options;
		self._alignEl = options.alignEl;
		if (self.width) {
			self.div.css('width', self.width);
		}
		if (self.height) {
			self.div.css('height', self.height);
		}
		if (self.z) {
			self.div.css({
				position : 'absolute',
				left : self.x,
				top : self.y,
				'z-index' : self.z
			});
		}
		if (self.z && (self.x === undefined || self.y === undefined)) {
			self.autoPos(self.width, self.height);
		}
		if (options.cls) {
			self.div.addClass(options.cls);
		}
		if (options.shadowMode) {
			self.div.addClass('ke-shadow');
		}
		if (options.css) {
			self.div.css(options.css);
		}
		if (options.src) {
			K(options.src).replaceWith(self.div);
		} else {
			K(self.doc.body).append(self.div);
		}
		if (options.html) {
			self.div.html(options.html);
		}
		if (options.autoScroll) {
			if (_IE && _V < 7 || _QUIRKS) {
				var scrollPos = _getScrollPos();
				K(self.win).bind('scroll', function(e) {
					var pos = _getScrollPos(),
						diffX = pos.x - scrollPos.x,
						diffY = pos.y - scrollPos.y;
					self.pos(_removeUnit(self.x) + diffX, _removeUnit(self.y) + diffY, false);
				});
			} else {
				self.div.css('position', 'fixed');
			}
		}
	},
	pos : function(x, y, updateProp) {
		var self = this;
		updateProp = _undef(updateProp, true);
		if (x !== null) {
			x = x < 0 ? 0 : _addUnit(x);
			self.div.css('left', x);
			if (updateProp) {
				self.x = x;
			}
		}
		if (y !== null) {
			y = y < 0 ? 0 : _addUnit(y);
			self.div.css('top', y);
			if (updateProp) {
				self.y = y;
			}
		}
		return self;
	},
	autoPos : function(width, height) {
		var self = this,
			w = _removeUnit(width) || 0,
			h = _removeUnit(height) || 0,
			scrollPos = _getScrollPos();
		if (self._alignEl) {
			var knode = K(self._alignEl),
				pos = knode.pos(),
				diffX = _round(knode[0].clientWidth / 2 - w / 2),
				diffY = _round(knode[0].clientHeight / 2 - h / 2);
			x = diffX < 0 ? pos.x : pos.x + diffX;
			y = diffY < 0 ? pos.y : pos.y + diffY;
		} else {
			var docEl = _docElement(self.doc);
			x = _round(scrollPos.x + (docEl.clientWidth - w) / 2);
			y = _round(scrollPos.y + (docEl.clientHeight - h) / 2);
		}
		if (!(_IE && _V < 7 || _QUIRKS)) {
			x -= scrollPos.x;
			y -= scrollPos.y;
		}
		return self.pos(x, y);
	},
	remove : function() {
		var self = this;
		if (_IE && _V < 7 || _QUIRKS) {
			K(self.win).unbind('scroll');
		}
		self.div.remove();
		_each(self, function(i) {
			self[i] = null;
		});
		return this;
	},
	show : function() {
		this.div.show();
		return this;
	},
	hide : function() {
		this.div.hide();
		return this;
	},
	draggable : function(options) {
		var self = this;
		options = options || {};
		options.moveEl = self.div;
		options.moveFn = function(x, y, width, height, diffX, diffY) {
			if ((x = x + diffX) < 0) {
				x = 0;
			}
			if ((y = y + diffY) < 0) {
				y = 0;
			}
			self.pos(x, y);
		};
		_drag(options);
		return self;
	}
});
function _widget(options) {
	return new KWidget(options);
}
K.WidgetClass = KWidget;
K.widget = _widget;
function _iframeDoc(iframe) {
	iframe = _get(iframe);
	return iframe.contentDocument || iframe.contentWindow.document;
}
var html, _direction = '';
if ((html = document.getElementsByTagName('html'))) {
	_direction = html[0].dir;
}
function _getInitHtml(themesPath, bodyClass, cssPath, cssData) {
	var arr = [
		(_direction === '' ? '<html>' : '<html dir="' + _direction + '">'),
		'<head><meta charset="utf-8" /><title></title>',
		'<style>',
		'html {margin:0;padding:0;}',
		'body {margin:0;padding:5px;}',
		'body, td {font:12px/1.5 "sans serif",tahoma,verdana,helvetica;}',
		'body, p, div {word-wrap: break-word;}',
		'p {margin:5px 0;}',
		'table {border-collapse:collapse;}',
		'img {border:0;}',
		'noscript {display:none;}',
		'table.ke-zeroborder td {border:1px dotted #AAA;}',
		'img.ke-flash {',
		'	border:1px solid #AAA;',
		'	background-image:url(' + themesPath + 'common/flash.gif);',
		'	background-position:center center;',
		'	background-repeat:no-repeat;',
		'	width:100px;',
		'	height:100px;',
		'}',
		'img.ke-rm {',
		'	border:1px solid #AAA;',
		'	background-image:url(' + themesPath + 'common/rm.gif);',
		'	background-position:center center;',
		'	background-repeat:no-repeat;',
		'	width:100px;',
		'	height:100px;',
		'}',
		'img.ke-media {',
		'	border:1px solid #AAA;',
		'	background-image:url(' + themesPath + 'common/media.gif);',
		'	background-position:center center;',
		'	background-repeat:no-repeat;',
		'	width:100px;',
		'	height:100px;',
		'}',
		'img.ke-anchor {',
		'	border:1px dashed #666;',
		'	width:16px;',
		'	height:16px;',
		'}',
		'.ke-script, .ke-noscript, .ke-display-none {',
		'	display:none;',
		'	font-size:0;',
		'	width:0;',
		'	height:0;',
		'}',
		'.ke-pagebreak {',
		'	border:1px dotted #AAA;',
		'	font-size:0;',
		'	height:2px;',
		'}',
		'</style>'
	];
	if (!_isArray(cssPath)) {
		cssPath = [cssPath];
	}
	_each(cssPath, function(i, path) {
		if (path) {
			arr.push('<link href="' + path + '" rel="stylesheet" />');
		}
	});
	if (cssData) {
		arr.push('<style>' + cssData + '</style>');
	}
	arr.push('</head><body ' + (bodyClass ? 'class="' + bodyClass + '"' : '') + '></body></html>');
	return arr.join('\n');
}
function _elementVal(knode, val) {
	if (knode.hasVal()) {
		if (val === undefined) {
			var html = knode.val();
			html = html.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig, '');
			return html;
		}
		return knode.val(val);
	}
	return knode.html(val);
}
function KEdit(options) {
	this.init(options);
}
_extend(KEdit, KWidget, {
	init : function(options) {
		var self = this;
		KEdit.parent.init.call(self, options);
		self.srcElement = K(options.srcElement);
		self.div.addClass('ke-edit');
		self.designMode = _undef(options.designMode, true);
		self.beforeGetHtml = options.beforeGetHtml;
		self.beforeSetHtml = options.beforeSetHtml;
		self.afterSetHtml = options.afterSetHtml;
		var themesPath = _undef(options.themesPath, ''),
			bodyClass = options.bodyClass,
			cssPath = options.cssPath,
			cssData = options.cssData,
			isDocumentDomain = location.host.replace(/:\d+/, '') !== document.domain,
			srcScript = ('document.open();' +
				(isDocumentDomain ? 'document.domain="' + document.domain + '";' : '') +
				'document.close();'),
			iframeSrc = _IE ? ' src="javascript:void(function(){' + encodeURIComponent(srcScript) + '}())"' : '';
		self.iframe = K('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"' + iframeSrc + '></iframe>').css('width', '100%');
		self.textarea = K('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css('width', '100%');
		if (self.width) {
			self.setWidth(self.width);
		}
		if (self.height) {
			self.setHeight(self.height);
		}
		if (self.designMode) {
			self.textarea.hide();
		} else {
			self.iframe.hide();
		}
		function ready() {
			var doc = _iframeDoc(self.iframe);
			doc.open();
			if (isDocumentDomain) {
				doc.domain = document.domain;
			}
			doc.write(_getInitHtml(themesPath, bodyClass, cssPath, cssData));
			doc.close();
			self.win = self.iframe[0].contentWindow;
			self.doc = doc;
			var cmd = _cmd(doc);
			self.afterChange(function(e) {
				cmd.selection();
			});
			if (_WEBKIT) {
				K(doc).click(function(e) {
					if (K(e.target).name === 'img') {
						cmd.selection(true);
						cmd.range.selectNode(e.target);
						cmd.select();
					}
				});
			}
			if (_IE) {
				self._mousedownHandler = function() {
					var newRange = cmd.range.cloneRange();
					newRange.shrink();
					if (newRange.isControl()) {
						self.blur();
					}
				};
				K(document).mousedown(self._mousedownHandler);
				K(doc).keydown(function(e) {
					if (e.which == 8) {
						cmd.selection();
						var rng = cmd.range;
						if (rng.isControl()) {
							rng.collapse(true);
							K(rng.startContainer.childNodes[rng.startOffset]).remove();
							e.preventDefault();
						}
					}
				});
			}
			self.cmd = cmd;
			self.html(_elementVal(self.srcElement));
			if (_IE) {
				doc.body.disabled = true;
				doc.body.contentEditable = true;
				doc.body.removeAttribute('disabled');
			} else {
				doc.designMode = 'on';
			}
			if (options.afterCreate) {
				options.afterCreate.call(self);
			}
		}
		if (isDocumentDomain) {
			self.iframe.bind('load', function(e) {
				self.iframe.unbind('load');
				if (_IE) {
					ready();
				} else {
					setTimeout(ready, 0);
				}
			});
		}
		self.div.append(self.iframe);
		self.div.append(self.textarea);
		self.srcElement.hide();
		!isDocumentDomain && ready();
	},
	setWidth : function(val) {
		this.div.css('width', _addUnit(val));
		return this;
	},
	setHeight : function(val) {
		var self = this;
		val = _addUnit(val);
		self.div.css('height', val);
		self.iframe.css('height', val);
		if ((_IE && _V < 8) || _QUIRKS) {
			val = _addUnit(_removeUnit(val) - 2);
		}
		self.textarea.css('height', val);
		return self;
	},
	remove : function() {
		var self = this, doc = self.doc;
		K(doc.body).unbind();
		K(doc).unbind();
		K(self.win).unbind();
		if (self._mousedownHandler) {
			K(document).unbind('mousedown', self._mousedownHandler);
		}
		_elementVal(self.srcElement, self.html());
		self.srcElement.show();
		doc.write('');
		self.iframe.unbind();
		self.textarea.unbind();
		KEdit.parent.remove.call(self);
	},
	html : function(val, isFull) {
		var self = this, doc = self.doc;
		if (self.designMode) {
			var body = doc.body;
			if (val === undefined) {
				if (isFull) {
					val = '<!doctype html><html>' + body.parentNode.innerHTML + '</html>';
				} else {
					val = body.innerHTML;
				}
				if (self.beforeGetHtml) {
					val = self.beforeGetHtml(val);
				}
				if (_GECKO && val == '<br />') {
					val = '';
				}
				return val;
			}
			if (self.beforeSetHtml) {
				val = self.beforeSetHtml(val);
			}
			if (_IE && _V >= 9) {
				val = val.replace(/(<.*?checked=")checked(".*>)/ig, '$1$2');
			}
			K(body).html(val);
			if (self.afterSetHtml) {
				self.afterSetHtml();
			}
			return self;
		}
		if (val === undefined) {
			return self.textarea.val();
		}
		self.textarea.val(val);
		return self;
	},
	design : function(bool) {
		var self = this, val;
		if (bool === undefined ? !self.designMode : bool) {
			if (!self.designMode) {
				val = self.html();
				self.designMode = true;
				self.html(val);
				self.textarea.hide();
				self.iframe.show();
			}
		} else {
			if (self.designMode) {
				val = self.html();
				self.designMode = false;
				self.html(val);
				self.iframe.hide();
				self.textarea.show();
			}
		}
		return self.focus();
	},
	focus : function() {
		var self = this;
		self.designMode ? self.win.focus() : self.textarea[0].focus();
		return self;
	},
	blur : function() {
		var self = this;
		if (_IE) {
			var input = K('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />', self.div);
			self.div.append(input);
			input[0].focus();
			input.remove();
		} else {
			self.designMode ? self.win.blur() : self.textarea[0].blur();
		}
		return self;
	},
	afterChange : function(fn) {
		var self = this, doc = self.doc, body = doc.body;
		K(doc).keyup(function(e) {
			if (!e.ctrlKey && !e.altKey && _CHANGE_KEY_MAP[e.which]) {
				fn(e);
			}
		});
		K(doc).mouseup(fn).contextmenu(fn);
		K(self.win).blur(fn);
		function timeoutHandler(e) {
			setTimeout(function() {
				fn(e);
			}, 1);
		}
		K(body).bind('paste', timeoutHandler);
		K(body).bind('cut', timeoutHandler);
		return self;
	}
});
function _edit(options) {
	return new KEdit(options);
}
K.EditClass = KEdit;
K.edit = _edit;
K.iframeDoc = _iframeDoc;
function _selectToolbar(name, fn) {
	var self = this,
		knode = self.get(name);
	if (knode) {
		if (knode.hasClass('ke-disabled')) {
			return;
		}
		fn(knode);
	}
}
function KToolbar(options) {
	this.init(options);
}
_extend(KToolbar, KWidget, {
	init : function(options) {
		var self = this;
		KToolbar.parent.init.call(self, options);
		self.disableMode = _undef(options.disableMode, false);
		self.noDisableItemMap = _toMap(_undef(options.noDisableItems, []));
		self._itemMap = {};
		self.div.addClass('ke-toolbar').bind('contextmenu,mousedown,mousemove', function(e) {
			e.preventDefault();
		}).attr('unselectable', 'on');
		function find(target) {
			var knode = K(target);
			if (knode.hasClass('ke-outline')) {
				return knode;
			}
			if (knode.hasClass('ke-toolbar-icon')) {
				return knode.parent();
			}
		}
		function hover(e, method) {
			var knode = find(e.target);
			if (knode) {
				if (knode.hasClass('ke-disabled')) {
					return;
				}
				if (knode.hasClass('ke-selected')) {
					return;
				}
				knode[method]('ke-on');
			}
		}
		self.div.mouseover(function(e) {
			hover(e, 'addClass');
		})
		.mouseout(function(e) {
			hover(e, 'removeClass');
		})
		.click(function(e) {
			var knode = find(e.target);
			if (knode) {
				if (knode.hasClass('ke-disabled')) {
					return;
				}
				self.options.click.call(this, e, knode.attr('data-name'));
			}
		});
	},
	get : function(name) {
		if (this._itemMap[name]) {
			return this._itemMap[name];
		}
		return (this._itemMap[name] = K('span.ke-icon-' + name, this.div).parent());
	},
	select : function(name) {
		_selectToolbar.call(this, name, function(knode) {
			knode.addClass('ke-selected');
		});
		return self;
	},
	unselect : function(name) {
		_selectToolbar.call(this, name, function(knode) {
			knode.removeClass('ke-selected').removeClass('ke-on');
		});
		return self;
	},
	enable : function(name) {
		var self = this,
			knode = name.get ? name : self.get(name);
		if (knode) {
			knode.removeClass('ke-disabled');
			knode.opacity(1);
		}
		return self;
	},
	disable : function(name) {
		var self = this,
			knode = name.get ? name : self.get(name);
		if (knode) {
			knode.removeClass('ke-selected').addClass('ke-disabled');
			knode.opacity(0.5);
		}
		return self;
	},
	disableAll : function(bool, noDisableItems) {
		var self = this, map = self.noDisableItemMap, item;
		if (noDisableItems) {
			map = _toMap(noDisableItems);
		}
		if (bool === undefined ? !self.disableMode : bool) {
			K('span.ke-outline', self.div).each(function() {
				var knode = K(this),
					name = knode[0].getAttribute('data-name', 2);
				if (!map[name]) {
					self.disable(knode);
				}
			});
			self.disableMode = true;
		} else {
			K('span.ke-outline', self.div).each(function() {
				var knode = K(this),
					name = knode[0].getAttribute('data-name', 2);
				if (!map[name]) {
					self.enable(knode);
				}
			});
			self.disableMode = false;
		}
		return self;
	}
});
function _toolbar(options) {
	return new KToolbar(options);
}
K.ToolbarClass = KToolbar;
K.toolbar = _toolbar;
function KMenu(options) {
	this.init(options);
}
_extend(KMenu, KWidget, {
	init : function(options) {
		var self = this;
		options.z = options.z || 811213;
		KMenu.parent.init.call(self, options);
		self.centerLineMode = _undef(options.centerLineMode, true);
		self.div.addClass('ke-menu').bind('click,mousedown', function(e){
			e.stopPropagation();
		}).attr('unselectable', 'on');
	},
	addItem : function(item) {
		var self = this;
		if (item.title === '-') {
			self.div.append(K('<div class="ke-menu-separator"></div>'));
			return;
		}
		var itemDiv = K('<div class="ke-menu-item" unselectable="on"></div>'),
			leftDiv = K('<div class="ke-inline-block ke-menu-item-left"></div>'),
			rightDiv = K('<div class="ke-inline-block ke-menu-item-right"></div>'),
			height = _addUnit(item.height),
			iconClass = _undef(item.iconClass, '');
		self.div.append(itemDiv);
		if (height) {
			itemDiv.css('height', height);
			rightDiv.css('line-height', height);
		}
		var centerDiv;
		if (self.centerLineMode) {
			centerDiv = K('<div class="ke-inline-block ke-menu-item-center"></div>');
			if (height) {
				centerDiv.css('height', height);
			}
		}
		itemDiv.mouseover(function(e) {
			K(this).addClass('ke-menu-item-on');
			if (centerDiv) {
				centerDiv.addClass('ke-menu-item-center-on');
			}
		})
		.mouseout(function(e) {
			K(this).removeClass('ke-menu-item-on');
			if (centerDiv) {
				centerDiv.removeClass('ke-menu-item-center-on');
			}
		})
		.click(function(e) {
			item.click.call(K(this));
			e.stopPropagation();
		})
		.append(leftDiv);
		if (centerDiv) {
			itemDiv.append(centerDiv);
		}
		itemDiv.append(rightDiv);
		if (item.checked) {
			iconClass = 'ke-icon-checked';
		}
		if (iconClass !== '') {
			leftDiv.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url ' + iconClass + '"></span>');
		}
		rightDiv.html(item.title);
		return self;
	},
	remove : function() {
		var self = this;
		if (self.options.beforeRemove) {
			self.options.beforeRemove.call(self);
		}
		K('.ke-menu-item', self.div[0]).unbind();
		KMenu.parent.remove.call(self);
		return self;
	}
});
function _menu(options) {
	return new KMenu(options);
}
K.MenuClass = KMenu;
K.menu = _menu;
function KColorPicker(options) {
	this.init(options);
}
_extend(KColorPicker, KWidget, {
	init : function(options) {
		var self = this;
		options.z = options.z || 811213;
		KColorPicker.parent.init.call(self, options);
		var colors = options.colors || [
			['#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500'],
			['#009900', '#006600', '#99BB00', '#B8D100', '#60D978', '#00D5FF'],
			['#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE'],
			['#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333', '#000000']
		];
		self.selectedColor = (options.selectedColor || '').toLowerCase();
		self._cells = [];
		self.div.addClass('ke-colorpicker').bind('click,mousedown', function(e){
			e.stopPropagation();
		}).attr('unselectable', 'on');
		var table = self.doc.createElement('table');
		self.div.append(table);
		table.className = 'ke-colorpicker-table';
		table.cellPadding = 0;
		table.cellSpacing = 0;
		table.border = 0;
		var row = table.insertRow(0), cell = row.insertCell(0);
		cell.colSpan = colors[0].length;
		self._addAttr(cell, '', 'ke-colorpicker-cell-top');
		for (var i = 0; i < colors.length; i++) {
			row = table.insertRow(i + 1);
			for (var j = 0; j < colors[i].length; j++) {
				cell = row.insertCell(j);
				self._addAttr(cell, colors[i][j], 'ke-colorpicker-cell');
			}
		}
	},
	_addAttr : function(cell, color, cls) {
		var self = this;
		cell = K(cell).addClass(cls);
		if (self.selectedColor === color.toLowerCase()) {
			cell.addClass('ke-colorpicker-cell-selected');
		}
		cell.attr('title', color || self.options.noColor);
		cell.mouseover(function(e) {
			K(this).addClass('ke-colorpicker-cell-on');
		});
		cell.mouseout(function(e) {
			K(this).removeClass('ke-colorpicker-cell-on');
		});
		cell.click(function(e) {
			e.stop();
			self.options.click.call(K(this), color);
		});
		if (color) {
			cell.append(K('<div class="ke-colorpicker-cell-color" unselectable="on"></div>').css('background-color', color));
		} else {
			cell.html(self.options.noColor);
		}
		K(cell).attr('unselectable', 'on');
		self._cells.push(cell);
	},
	remove : function() {
		var self = this;
		_each(self._cells, function() {
			this.unbind();
		});
		KColorPicker.parent.remove.call(self);
		return self;
	}
});
function _colorpicker(options) {
	return new KColorPicker(options);
}
K.ColorPickerClass = KColorPicker;
K.colorpicker = _colorpicker;
function KUploadButton(options) {
	this.init(options);
}
_extend(KUploadButton, {
	init : function(options) {
		var self = this,
			button = K(options.button),
			fieldName = options.fieldName || 'file',
			url = options.url || '',
			title = button.val(),
			extraParams = options.extraParams || {},
			cls = button[0].className || '',
			target = options.target || 'kindeditor_upload_iframe_' + new Date().getTime();
		options.afterError = options.afterError || function(str) {
			alert(str);
		};
		var hiddenElements = [];
		for(var k in extraParams){
			hiddenElements.push('<input type="hidden" name="' + k + '" value="' + extraParams[k] + '" />');
		}
		var html = [
			'<div class="ke-inline-block ' + cls + '">',
			(options.target ? '' : '<iframe name="' + target + '" style="display:none;"></iframe>'),
			(options.form ? '<div class="ke-upload-area">' : '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' + target + '" action="' + url + '">'),
			'<span class="ke-button-common">',
			hiddenElements.join(''),
			'<input type="button" class="ke-button-common ke-button" value="' + title + '" />',
			'</span>',
			'<input type="file" class="ke-upload-file" name="' + fieldName + '" tabindex="-1" />',
			(options.form ? '</div>' : '</form>'),
			'</div>'].join('');
		var div = K(html, button.doc);
		button.hide();
		button.before(div);
		self.div = div;
		self.button = button;
		self.iframe = options.target ? K('iframe[name="' + target + '"]') : K('iframe', div);
		self.form = options.form ? K(options.form) : K('form', div);
		var width = options.width || K('.ke-button-common', div).width();
		self.fileBox = K('.ke-upload-file', div).width(width);
		self.options = options;
	},
	submit : function() {
		var self = this,
			iframe = self.iframe;
		iframe.bind('load', function() {
			iframe.unbind();
			var tempForm = document.createElement('form');
			self.fileBox.before(tempForm);
			K(tempForm).append(self.fileBox);
			tempForm.reset();
			K(tempForm).remove(true);
			var doc = K.iframeDoc(iframe),
				pre = doc.getElementsByTagName('pre')[0],
				str = '', data;
			if (pre) {
				str = pre.innerHTML;
			} else {
				str = doc.body.innerHTML;
			}
			str = _unescape(str);
			iframe[0].src = 'javascript:false';
			try {
				data = K.json(str);
			} catch (e) {
				self.options.afterError.call(self, '<!doctype html><html>' + doc.body.parentNode.innerHTML + '</html>');
			}
			if (data) {
				self.options.afterUpload.call(self, data);
			}
		});
		self.form[0].submit();
		return self;
	},
	remove : function() {
		var self = this;
		if (self.fileBox) {
			self.fileBox.unbind();
		}
		self.iframe.remove();
		self.div.remove();
		self.button.show();
		return self;
	}
});
function _uploadbutton(options) {
	return new KUploadButton(options);
}
K.UploadButtonClass = KUploadButton;
K.uploadbutton = _uploadbutton;
function _createButton(arg) {
	arg = arg || {};
	var name = arg.name || '',
		span = K('<span class="ke-button-common ke-button-outer" title="' + name + '"></span>'),
		btn = K('<input class="ke-button-common ke-button" type="button" value="' + name + '" />');
	if (arg.click) {
		btn.click(arg.click);
	}
	span.append(btn);
	return span;
}
function KDialog(options) {
	this.init(options);
}
_extend(KDialog, KWidget, {
	init : function(options) {
		var self = this;
		var shadowMode = _undef(options.shadowMode, true);
		options.z = options.z || 811213;
		options.shadowMode = false;
		options.autoScroll = _undef(options.autoScroll, true);
		KDialog.parent.init.call(self, options);
		var title = options.title,
			body = K(options.body, self.doc),
			previewBtn = options.previewBtn,
			yesBtn = options.yesBtn,
			noBtn = options.noBtn,
			closeBtn = options.closeBtn,
			showMask = _undef(options.showMask, true);
		self.div.addClass('ke-dialog').bind('click,mousedown', function(e){
			e.stopPropagation();
		});
		var contentDiv = K('<div class="ke-dialog-content"></div>').appendTo(self.div);
		if (_IE && _V < 7) {
			self.iframeMask = K('<iframe src="about:blank" class="ke-dialog-shadow"></iframe>').appendTo(self.div);
		} else if (shadowMode) {
			K('<div class="ke-dialog-shadow"></div>').appendTo(self.div);
		}
		var headerDiv = K('<div class="ke-dialog-header"></div>');
		contentDiv.append(headerDiv);
		headerDiv.html(title);
		self.closeIcon = K('<span class="ke-dialog-icon-close" title="' + closeBtn.name + '"></span>').click(closeBtn.click);
		headerDiv.append(self.closeIcon);
		self.draggable({
			clickEl : headerDiv,
			beforeDrag : options.beforeDrag
		});
		var bodyDiv = K('<div class="ke-dialog-body"></div>');
		contentDiv.append(bodyDiv);
		bodyDiv.append(body);
		var footerDiv = K('<div class="ke-dialog-footer"></div>');
		if (previewBtn || yesBtn || noBtn) {
			contentDiv.append(footerDiv);
		}
		_each([
			{ btn : previewBtn, name : 'preview' },
			{ btn : yesBtn, name : 'yes' },
			{ btn : noBtn, name : 'no' }
		], function() {
			if (this.btn) {
				var button = _createButton(this.btn);
				button.addClass('ke-dialog-' + this.name);
				footerDiv.append(button);
			}
		});
		if (self.height) {
			bodyDiv.height(_removeUnit(self.height) - headerDiv.height() - footerDiv.height());
		}
		self.div.width(self.div.width());
		self.div.height(self.div.height());
		self.mask = null;
		if (showMask) {
			var docEl = _docElement(self.doc),
				docWidth = Math.max(docEl.scrollWidth, docEl.clientWidth),
				docHeight = Math.max(docEl.scrollHeight, docEl.clientHeight);
			self.mask = _widget({
				x : 0,
				y : 0,
				z : self.z - 1,
				cls : 'ke-dialog-mask',
				width : docWidth,
				height : docHeight
			});
		}
		self.autoPos(self.div.width(), self.div.height());
		self.footerDiv = footerDiv;
		self.bodyDiv = bodyDiv;
		self.headerDiv = headerDiv;
		self.isLoading = false;
	},
	setMaskIndex : function(z) {
		var self = this;
		self.mask.div.css('z-index', z);
	},
	showLoading : function(msg) {
		msg = _undef(msg, '');
		var self = this, body = self.bodyDiv;
		self.loading = K('<div class="ke-dialog-loading"><div class="ke-inline-block ke-dialog-loading-content" style="margin-top:' + Math.round(body.height() / 3) + 'px;">' + msg + '</div></div>')
			.width(body.width()).height(body.height())
			.css('top', self.headerDiv.height() + 'px');
		body.css('visibility', 'hidden').after(self.loading);
		self.isLoading = true;
		return self;
	},
	hideLoading : function() {
		this.loading && this.loading.remove();
		this.bodyDiv.css('visibility', 'visible');
		this.isLoading = false;
		return this;
	},
	remove : function() {
		var self = this;
		if (self.options.beforeRemove) {
			self.options.beforeRemove.call(self);
		}
		self.mask && self.mask.remove();
		self.iframeMask && self.iframeMask.remove();
		self.closeIcon.unbind();
		K('input', self.div).unbind();
		K('button', self.div).unbind();
		self.footerDiv.unbind();
		self.bodyDiv.unbind();
		self.headerDiv.unbind();
		K('iframe', self.div).each(function() {
			K(this).remove();
		});
		KDialog.parent.remove.call(self);
		return self;
	}
});
function _dialog(options) {
	return new KDialog(options);
}
K.DialogClass = KDialog;
K.dialog = _dialog;
function _tabs(options) {
	var self = _widget(options),
		remove = self.remove,
		afterSelect = options.afterSelect,
		div = self.div,
		liList = [];
	div.addClass('ke-tabs')
		.bind('contextmenu,mousedown,mousemove', function(e) {
			e.preventDefault();
		});
	var ul = K('<ul class="ke-tabs-ul ke-clearfix"></ul>');
	div.append(ul);
	self.add = function(tab) {
		var li = K('<li class="ke-tabs-li">' + tab.title + '</li>');
		li.data('tab', tab);
		liList.push(li);
		ul.append(li);
	};
	self.selectedIndex = 0;
	self.select = function(index) {
		self.selectedIndex = index;
		_each(liList, function(i, li) {
			li.unbind();
			if (i === index) {
				li.addClass('ke-tabs-li-selected');
				K(li.data('tab').panel).show('');
			} else {
				li.removeClass('ke-tabs-li-selected').removeClass('ke-tabs-li-on')
				.mouseover(function() {
					K(this).addClass('ke-tabs-li-on');
				})
				.mouseout(function() {
					K(this).removeClass('ke-tabs-li-on');
				})
				.click(function() {
					self.select(i);
				});
				K(li.data('tab').panel).hide();
			}
		});
		if (afterSelect) {
			afterSelect.call(self, index);
		}
	};
	self.remove = function() {
		_each(liList, function() {
			this.remove();
		});
		ul.remove();
		remove.call(self);
	};
	return self;
}
K.tabs = _tabs;
function _loadScript(url, fn) {
	var head = document.getElementsByTagName('head')[0] || (_QUIRKS ? document.body : document.documentElement),
		script = document.createElement('script');
	head.appendChild(script);
	script.src = url;
	script.charset = 'utf-8';
	script.onload = script.onreadystatechange = function() {
		if (!this.readyState || this.readyState === 'loaded') {
			if (fn) {
				fn();
			}
			script.onload = script.onreadystatechange = null;
			head.removeChild(script);
		}
	};
}
function _chopQuery(url) {
	var index = url.indexOf('?');
	return index > 0 ? url.substr(0, index) : url;
}
function _loadStyle(url) {
	var head = document.getElementsByTagName('head')[0] || (_QUIRKS ? document.body : document.documentElement),
		link = document.createElement('link'),
		absoluteUrl = _chopQuery(_formatUrl(url, 'absolute'));
	var links = K('link[rel="stylesheet"]', head);
	for (var i = 0, len = links.length; i < len; i++) {
		if (_chopQuery(_formatUrl(links[i].href, 'absolute')) === absoluteUrl) {
			return;
		}
	}
	head.appendChild(link);
	link.href = url;
	link.rel = 'stylesheet';
}
function _ajax(url, fn, method, param, dataType) {
	method = method || 'GET';
	dataType = dataType || 'json';
	var xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (fn) {
				var data = _trim(xhr.responseText);
				if (dataType == 'json') {
					data = _json(data);
				}
				fn(data);
			}
		}
	};
	if (method == 'POST') {
		var params = [];
		_each(param, function(key, val) {
			params.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
		});
		try {
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		} catch (e) {}
		xhr.send(params.join('&'));
	} else {
		xhr.send(null);
	}
}
K.loadScript = _loadScript;
K.loadStyle = _loadStyle;
K.ajax = _ajax;
var _plugins = {};
function _plugin(name, fn) {
	if (name === undefined) {
		return _plugins;
	}
	if (!fn) {
		return _plugins[name];
	}
	_plugins[name] = fn;
}
var _language = {};
function _parseLangKey(key) {
	var match, ns = 'core';
	if ((match = /^(\w+)\.(\w+)$/.exec(key))) {
		ns = match[1];
		key = match[2];
	}
	return { ns : ns, key : key };
}
function _lang(mixed, langType) {
	langType = langType === undefined ? K.options.langType : langType;
	if (typeof mixed === 'string') {
		if (!_language[langType]) {
			return 'no language';
		}
		var pos = mixed.length - 1;
		if (mixed.substr(pos) === '.') {
			return _language[langType][mixed.substr(0, pos)];
		}
		var obj = _parseLangKey(mixed);
		return _language[langType][obj.ns][obj.key];
	}
	_each(mixed, function(key, val) {
		var obj = _parseLangKey(key);
		if (!_language[langType]) {
			_language[langType] = {};
		}
		if (!_language[langType][obj.ns]) {
			_language[langType][obj.ns] = {};
		}
		_language[langType][obj.ns][obj.key] = val;
	});
}
function _getImageFromRange(range, fn) {
	if (range.collapsed) {
		return;
	}
	range = range.cloneRange().up();
	var sc = range.startContainer, so = range.startOffset;
	if (!_WEBKIT && !range.isControl()) {
		return;
	}
	var img = K(sc.childNodes[so]);
	if (!img || img.name != 'img') {
		return;
	}
	if (fn(img)) {
		return img;
	}
}
function _bindContextmenuEvent() {
	var self = this, doc = self.edit.doc;
	K(doc).contextmenu(function(e) {
		if (self.menu) {
			self.hideMenu();
		}
		if (!self.useContextmenu) {
			e.preventDefault();
			return;
		}
		if (self._contextmenus.length === 0) {
			return;
		}
		var maxWidth = 0, items = [];
		_each(self._contextmenus, function() {
			if (this.title == '-') {
				items.push(this);
				return;
			}
			if (this.cond && this.cond()) {
				items.push(this);
				if (this.width && this.width > maxWidth) {
					maxWidth = this.width;
				}
			}
		});
		while (items.length > 0 && items[0].title == '-') {
			items.shift();
		}
		while (items.length > 0 && items[items.length - 1].title == '-') {
			items.pop();
		}
		var prevItem = null;
		_each(items, function(i) {
			if (this.title == '-' && prevItem.title == '-') {
				delete items[i];
			}
			prevItem = this;
		});
		if (items.length > 0) {
			e.preventDefault();
			var pos = K(self.edit.iframe).pos(),
				menu = _menu({
					x : pos.x + e.clientX,
					y : pos.y + e.clientY,
					width : maxWidth,
					css : { visibility: 'hidden' },
					shadowMode : self.shadowMode
				});
			_each(items, function() {
				if (this.title) {
					menu.addItem(this);
				}
			});
			var docEl = _docElement(menu.doc),
				menuHeight = menu.div.height();
			if (e.clientY + menuHeight >= docEl.clientHeight - 100) {
				menu.pos(menu.x, _removeUnit(menu.y) - menuHeight);
			}
			menu.div.css('visibility', 'visible');
			self.menu = menu;
		}
	});
}
function _bindNewlineEvent() {
	var self = this, doc = self.edit.doc, newlineTag = self.newlineTag;
	if (_IE && newlineTag !== 'br') {
		return;
	}
	if (_GECKO && _V < 3 && newlineTag !== 'p') {
		return;
	}
	if (_OPERA && _V < 9) {
		return;
	}
	var brSkipTagMap = _toMap('h1,h2,h3,h4,h5,h6,pre,li'),
		pSkipTagMap = _toMap('p,h1,h2,h3,h4,h5,h6,pre,li,blockquote');
	function getAncestorTagName(range) {
		var ancestor = K(range.commonAncestor());
		while (ancestor) {
			if (ancestor.type == 1 && !ancestor.isStyle()) {
				break;
			}
			ancestor = ancestor.parent();
		}
		return ancestor.name;
	}
	K(doc).keydown(function(e) {
		if (e.which != 13 || e.shiftKey || e.ctrlKey || e.altKey) {
			return;
		}
		self.cmd.selection();
		var tagName = getAncestorTagName(self.cmd.range);
		if (tagName == 'marquee' || tagName == 'select') {
			return;
		}
		if (newlineTag === 'br' && !brSkipTagMap[tagName]) {
			e.preventDefault();
			self.insertHtml('<br />' + (_IE && _V < 9 ? '' : '\u200B'));
			return;
		}
		if (!pSkipTagMap[tagName]) {
			_nativeCommand(doc, 'formatblock', '<p>');
		}
	});
	K(doc).keyup(function(e) {
		if (e.which != 13 || e.shiftKey || e.ctrlKey || e.altKey) {
			return;
		}
		if (newlineTag == 'br') {
			return;
		}
		if (_GECKO) {
			var root = self.cmd.commonAncestor('p');
			var a = self.cmd.commonAncestor('a');
			if (a && a.text() == '') {
				a.remove(true);
				self.cmd.range.selectNodeContents(root[0]).collapse(true);
				self.cmd.select();
			}
			return;
		}
		self.cmd.selection();
		var tagName = getAncestorTagName(self.cmd.range);
		if (tagName == 'marquee' || tagName == 'select') {
			return;
		}
		if (!pSkipTagMap[tagName]) {
			_nativeCommand(doc, 'formatblock', '<p>');
		}
		var div = self.cmd.commonAncestor('div');
		if (div) {
			var p = K('<p></p>'),
				child = div[0].firstChild;
			while (child) {
				var next = child.nextSibling;
				p.append(child);
				child = next;
			}
			div.before(p);
			div.remove();
			self.cmd.range.selectNodeContents(p[0]);
			self.cmd.select();
		}
	});
}
function _bindTabEvent() {
	var self = this, doc = self.edit.doc;
	K(doc).keydown(function(e) {
		if (e.which == 9) {
			e.preventDefault();
			if (self.afterTab) {
				self.afterTab.call(self, e);
				return;
			}
			var cmd = self.cmd, range = cmd.range;
			range.shrink();
			if (range.collapsed && range.startContainer.nodeType == 1) {
				range.insertNode(K('@&nbsp;', doc)[0]);
				cmd.select();
			}
			self.insertHtml('&nbsp;&nbsp;&nbsp;&nbsp;');
		}
	});
}
function _bindFocusEvent() {
	var self = this;
	K(self.edit.textarea[0], self.edit.win).focus(function(e) {
		if (self.afterFocus) {
			self.afterFocus.call(self, e);
		}
	}).blur(function(e) {
		if (self.afterBlur) {
			self.afterBlur.call(self, e);
		}
	});
}
function _removeBookmarkTag(html) {
	return _trim(html.replace(/<span [^>]*id="?__kindeditor_bookmark_\w+_\d+__"?[^>]*><\/span>/ig, ''));
}
function _removeTempTag(html) {
	return html.replace(/<div[^>]+class="?__kindeditor_paste__"?[^>]*>[\s\S]*?<\/div>/ig, '');
}
function _addBookmarkToStack(stack, bookmark) {
	if (stack.length === 0) {
		stack.push(bookmark);
		return;
	}
	var prev = stack[stack.length - 1];
	if (_removeBookmarkTag(bookmark.html) !== _removeBookmarkTag(prev.html)) {
		stack.push(bookmark);
	}
}
function _undoToRedo(fromStack, toStack) {
	var self = this, edit = self.edit,
		body = edit.doc.body,
		range, bookmark;
	if (fromStack.length === 0) {
		return self;
	}
	if (edit.designMode) {
		range = self.cmd.range;
		bookmark = range.createBookmark(true);
		bookmark.html = body.innerHTML;
	} else {
		bookmark = {
			html : body.innerHTML
		};
	}
	_addBookmarkToStack(toStack, bookmark);
	var prev = fromStack.pop();
	if (_removeBookmarkTag(bookmark.html) === _removeBookmarkTag(prev.html) && fromStack.length > 0) {
		prev = fromStack.pop();
	}
	if (edit.designMode) {
		edit.html(prev.html);
		if (prev.start) {
			range.moveToBookmark(prev);
			self.select();
		}
	} else {
		K(body).html(_removeBookmarkTag(prev.html));
	}
	return self;
}
function KEditor(options) {
	var self = this;
	self.options = {};
	function setOption(key, val) {
		if (KEditor.prototype[key] === undefined) {
			self[key] = val;
		}
		self.options[key] = val;
	}
	_each(options, function(key, val) {
		setOption(key, options[key]);
	});
	_each(K.options, function(key, val) {
		if (self[key] === undefined) {
			setOption(key, val);
		}
	});
	var se = K(self.srcElement || '<textarea/>');
	if (!self.width) {
		self.width = se[0].style.width || se.width();
	}
	if (!self.height) {
		self.height = se[0].style.height || se.height();
	}
	setOption('width', _undef(self.width, self.minWidth));
	setOption('height', _undef(self.height, self.minHeight));
	setOption('width', _addUnit(self.width));
	setOption('height', _addUnit(self.height));
	if (_MOBILE && (!_IOS || _V < 534)) {
		self.designMode = false;
	}
	self.srcElement = se;
	self.initContent = '';
	self.plugin = {};
	self.isCreated = false;
	self.isLoading = false;
	self._handlers = {};
	self._contextmenus = [];
	self._undoStack = [];
	self._redoStack = [];
	self._calledPlugins = {};
	self._firstAddBookmark = true;
	self.menu = self.contextmenu = null;
	self.dialogs = [];
}
KEditor.prototype = {
	lang : function(mixed) {
		return _lang(mixed, this.langType);
	},
	loadPlugin : function(name, fn) {
		var self = this;
		if (_plugins[name]) {
			if (self._calledPlugins[name]) {
				if (fn) {
					fn.call(self);
				}
				return self;
			}
			_plugins[name].call(self, KindEditor);
			if (fn) {
				fn.call(self);
			}
			self._calledPlugins[name] = true;
			return self;
		}
		if (self.isLoading) {
			return self;
		}
		self.isLoading = true;
		_loadScript(self.pluginsPath + name + '/' + name + '.js?ver=' + encodeURIComponent(K.DEBUG ? _TIME : _VERSION), function() {
			self.isLoading = false;
			if (_plugins[name]) {
				self.loadPlugin(name, fn);
			}
		});
		return self;
	},
	handler : function(key, fn) {
		var self = this;
		if (!self._handlers[key]) {
			self._handlers[key] = [];
		}
		if (_isFunction(fn)) {
			self._handlers[key].push(fn);
			return self;
		}
		_each(self._handlers[key], function() {
			fn = this.call(self, fn);
		});
		return fn;
	},
	clickToolbar : function(name, fn) {
		var self = this, key = 'clickToolbar' + name;
		if (fn === undefined) {
			if (self._handlers[key]) {
				return self.handler(key);
			}
			self.loadPlugin(name, function() {
				self.handler(key);
			});
			return self;
		}
		return self.handler(key, fn);
	},
	updateState : function() {
		var self = this;
		_each(('justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,' +
			'subscript,superscript,bold,italic,underline,strikethrough').split(','), function(i, name) {
			self.cmd.state(name) ? self.toolbar.select(name) : self.toolbar.unselect(name);
		});
		return self;
	},
	addContextmenu : function(item) {
		this._contextmenus.push(item);
		return this;
	},
	afterCreate : function(fn) {
		return this.handler('afterCreate', fn);
	},
	beforeRemove : function(fn) {
		return this.handler('beforeRemove', fn);
	},
	beforeGetHtml : function(fn) {
		return this.handler('beforeGetHtml', fn);
	},
	beforeSetHtml : function(fn) {
		return this.handler('beforeSetHtml', fn);
	},
	afterSetHtml : function(fn) {
		return this.handler('afterSetHtml', fn);
	},
	create : function() {
		var self = this, fullscreenMode = self.fullscreenMode;
		if (self.isCreated) {
			return self;
		}
		if (self.srcElement.data('kindeditor')) {
			return self;
		}
		self.srcElement.data('kindeditor', 'true');
		if (fullscreenMode) {
			_docElement().style.overflow = 'hidden';
		} else {
			_docElement().style.overflow = '';
		}
		var width = fullscreenMode ? _docElement().clientWidth + 'px' : self.width,
			height = fullscreenMode ? _docElement().clientHeight + 'px' : self.height;
		if ((_IE && _V < 8) || _QUIRKS) {
			height = _addUnit(_removeUnit(height) + 2);
		}
		var container = self.container = K(self.layout);
		if (fullscreenMode) {
			K(document.body).append(container);
		} else {
			self.srcElement.before(container);
		}
		var toolbarDiv = K('.toolbar', container),
			editDiv = K('.edit', container),
			statusbar = self.statusbar = K('.statusbar', container);
		container.removeClass('container')
			.addClass('ke-container ke-container-' + self.themeType).css('width', width);
		if (fullscreenMode) {
			container.css({
				position : 'absolute',
				left : 0,
				top : 0,
				'z-index' : 811211
			});
			if (!_GECKO) {
				self._scrollPos = _getScrollPos();
			}
			window.scrollTo(0, 0);
			K(document.body).css({
				'height' : '1px',
				'overflow' : 'hidden'
			});
			K(document.body.parentNode).css('overflow', 'hidden');
			self._fullscreenExecuted = true;
		} else {
			if (self._fullscreenExecuted) {
				K(document.body).css({
					'height' : '',
					'overflow' : ''
				});
				K(document.body.parentNode).css('overflow', '');
			}
			if (self._scrollPos) {
				window.scrollTo(self._scrollPos.x, self._scrollPos.y);
			}
		}
		var htmlList = [];
		K.each(self.items, function(i, name) {
			if (name == '|') {
				htmlList.push('<span class="ke-inline-block ke-separator"></span>');
			} else if (name == '/') {
				htmlList.push('<div class="ke-hr"></div>');
			} else {
				htmlList.push('<span class="ke-outline" data-name="' + name + '" title="' + self.lang(name) + '" unselectable="on">');
				htmlList.push('<span class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-' + name + '" unselectable="on"></span></span>');
			}
		});
		var toolbar = self.toolbar = _toolbar({
			src : toolbarDiv,
			html : htmlList.join(''),
			noDisableItems : self.noDisableItems,
			click : function(e, name) {
				e.stop();
				if (self.menu) {
					var menuName = self.menu.name;
					self.hideMenu();
					if (menuName === name) {
						return;
					}
				}
				self.clickToolbar(name);
			}
		});
		var editHeight = _removeUnit(height) - toolbar.div.height();
		var edit = self.edit = _edit({
			height : editHeight > 0 && _removeUnit(height) > self.minHeight ? editHeight : self.minHeight,
			src : editDiv,
			srcElement : self.srcElement,
			designMode : self.designMode,
			themesPath : self.themesPath,
			bodyClass : self.bodyClass,
			cssPath : self.cssPath,
			cssData : self.cssData,
			beforeGetHtml : function(html) {
				html = self.beforeGetHtml(html);
				return _formatHtml(html, self.filterMode ? self.htmlTags : null, self.urlType, self.wellFormatMode, self.indentChar);
			},
			beforeSetHtml : function(html) {
				html = _formatHtml(html, self.filterMode ? self.htmlTags : null, '', false);
				return self.beforeSetHtml(html);
			},
			afterSetHtml : function() {
				self.edit = edit = this;
				self.afterSetHtml();
			},
			afterCreate : function() {
				self.edit = edit = this;
				self.cmd = edit.cmd;
				self._docMousedownFn = function(e) {
					if (self.menu) {
						self.hideMenu();
					}
				};
				K(edit.doc, document).mousedown(self._docMousedownFn);
				_bindContextmenuEvent.call(self);
				_bindNewlineEvent.call(self);
				_bindTabEvent.call(self);
				_bindFocusEvent.call(self);
				edit.afterChange(function(e) {
					if (!edit.designMode) {
						return;
					}
					self.updateState();
					self.addBookmark();
					if (self.options.afterChange) {
						self.options.afterChange.call(self);
					}
				});
				edit.textarea.keyup(function(e) {
					if (!e.ctrlKey && !e.altKey && _INPUT_KEY_MAP[e.which]) {
						if (self.options.afterChange) {
							self.options.afterChange.call(self);
						}
					}
				});
				if (self.readonlyMode) {
					self.readonly();
				}
				self.isCreated = true;
				if (self.initContent === '') {
					self.initContent = self.html();
				}
				self.afterCreate();
				if (self.options.afterCreate) {
					self.options.afterCreate.call(self);
				}
			}
		});
		statusbar.removeClass('statusbar').addClass('ke-statusbar')
			.append('<span class="ke-inline-block ke-statusbar-center-icon"></span>')
			.append('<span class="ke-inline-block ke-statusbar-right-icon"></span>');
		if (self._fullscreenResizeHandler) {
			K(window).unbind('resize', self._fullscreenResizeHandler);
			self._fullscreenResizeHandler = null;
		}
		function initResize() {
			if (statusbar.height() === 0) {
				setTimeout(initResize, 100);
				return;
			}
			self.resize(width, height, false);
		}
		initResize();
		if (fullscreenMode) {
			self._fullscreenResizeHandler = function(e) {
				if (self.isCreated) {
					self.resize(_docElement().clientWidth, _docElement().clientHeight, false);
				}
			};
			K(window).bind('resize', self._fullscreenResizeHandler);
			toolbar.select('fullscreen');
			statusbar.first().css('visibility', 'hidden');
			statusbar.last().css('visibility', 'hidden');
		} else {
			if (_GECKO) {
				K(window).bind('scroll', function(e) {
					self._scrollPos = _getScrollPos();
				});
			}
			if (self.resizeType > 0) {
				_drag({
					moveEl : container,
					clickEl : statusbar,
					moveFn : function(x, y, width, height, diffX, diffY) {
						height += diffY;
						self.resize(null, height);
					}
				});
			} else {
				statusbar.first().css('visibility', 'hidden');
			}
			if (self.resizeType === 2) {
				_drag({
					moveEl : container,
					clickEl : statusbar.last(),
					moveFn : function(x, y, width, height, diffX, diffY) {
						width += diffX;
						height += diffY;
						self.resize(width, height);
					}
				});
			} else {
				statusbar.last().css('visibility', 'hidden');
			}
		}
		return self;
	},
	remove : function() {
		var self = this;
		if (!self.isCreated) {
			return self;
		}
		self.beforeRemove();
		self.srcElement.data('kindeditor', '');
		if (self.menu) {
			self.hideMenu();
		}
		_each(self.dialogs, function() {
			self.hideDialog();
		});
		K(document).unbind('mousedown', self._docMousedownFn);
		self.toolbar.remove();
		self.edit.remove();
		self.statusbar.last().unbind();
		self.statusbar.unbind();
		self.container.remove();
		self.container = self.toolbar = self.edit = self.menu = null;
		self.dialogs = [];
		self.isCreated = false;
		return self;
	},
	resize : function(width, height, updateProp) {
		var self = this;
		updateProp = _undef(updateProp, true);
		if (width) {
			if (!/%/.test(width)) {
				width = _removeUnit(width);
				width = width < self.minWidth ? self.minWidth : width;
			}
			self.container.css('width', _addUnit(width));
			if (updateProp) {
				self.width = _addUnit(width);
			}
		}
		if (height) {
			height = _removeUnit(height);
			editHeight = _removeUnit(height) - self.toolbar.div.height() - self.statusbar.height();
			editHeight = editHeight < self.minHeight ? self.minHeight : editHeight;
			self.edit.setHeight(editHeight);
			if (updateProp) {
				self.height = _addUnit(height);
			}
		}
		return self;
	},
	select : function() {
		this.isCreated && this.cmd.select();
		return this;
	},
	html : function(val) {
		var self = this;
		if (val === undefined) {
			return self.isCreated ? self.edit.html() : _elementVal(self.srcElement);
		}
		self.isCreated ? self.edit.html(val) : _elementVal(self.srcElement, val);
		if (self.isCreated) {
			self.cmd.selection();
		}
		return self;
	},
	fullHtml : function() {
		return this.isCreated ? this.edit.html(undefined, true) : '';
	},
	text : function(val) {
		var self = this;
		if (val === undefined) {
			return _trim(self.html().replace(/<(?!img|embed).*?>/ig, '').replace(/&nbsp;/ig, ' '));
		} else {
			return self.html(_escape(val));
		}
	},
	isEmpty : function() {
		return _trim(this.text().replace(/\r\n|\n|\r/, '')) === '';
	},
	isDirty : function() {
		return _trim(this.initContent.replace(/\r\n|\n|\r|t/g, '')) !== _trim(this.html().replace(/\r\n|\n|\r|t/g, ''));
	},
	selectedHtml : function() {
		return this.isCreated ? this.cmd.range.html() : '';
	},
	count : function(mode) {
		var self = this;
		mode = (mode || 'html').toLowerCase();
		if (mode === 'html') {
			return _removeBookmarkTag(_removeTempTag(self.html())).length;
		}
		if (mode === 'text') {
			return self.text().replace(/<(?:img|embed).*?>/ig, 'K').replace(/\r\n|\n|\r/g, '').length;
		}
		return 0;
	},
	exec : function(key) {
		key = key.toLowerCase();
		var self = this, cmd = self.cmd,
			changeFlag = _inArray(key, 'selectall,copy,paste,print'.split(',')) < 0;
		if (changeFlag) {
			self.addBookmark(false);
		}
		cmd[key].apply(cmd, _toArray(arguments, 1));
		if (changeFlag) {
			self.updateState();
			self.addBookmark(false);
			if (self.options.afterChange) {
				self.options.afterChange.call(self);
			}
		}
		return self;
	},
	insertHtml : function(val, quickMode) {
		if (!this.isCreated) {
			return this;
		}
		val = this.beforeSetHtml(val);
		this.exec('inserthtml', val, quickMode);
		return this;
	},
	appendHtml : function(val) {
		this.html(this.html() + val);
		if (this.isCreated) {
			var cmd = this.cmd;
			cmd.range.selectNodeContents(cmd.doc.body).collapse(false);
			cmd.select();
		}
		return this;
	},
	sync : function() {
		_elementVal(this.srcElement, this.html());
		return this;
	},
	focus : function() {
		this.isCreated ? this.edit.focus() : this.srcElement[0].focus();
		return this;
	},
	blur : function() {
		this.isCreated ? this.edit.blur() : this.srcElement[0].blur();
		return this;
	},
	addBookmark : function(checkSize) {
		checkSize = _undef(checkSize, true);
		var self = this, edit = self.edit,
			body = edit.doc.body,
			html = _removeTempTag(body.innerHTML), bookmark;
		if (checkSize && self._undoStack.length > 0) {
			var prev = self._undoStack[self._undoStack.length - 1];
			if (Math.abs(html.length - _removeBookmarkTag(prev.html).length) < self.minChangeSize) {
				return self;
			}
		}
		if (edit.designMode && !self._firstAddBookmark) {
			var range = self.cmd.range;
			bookmark = range.createBookmark(true);
			bookmark.html = _removeTempTag(body.innerHTML);
			range.moveToBookmark(bookmark);
		} else {
			bookmark = {
				html : html
			};
		}
		self._firstAddBookmark = false;
		_addBookmarkToStack(self._undoStack, bookmark);
		return self;
	},
	undo : function() {
		return _undoToRedo.call(this, this._undoStack, this._redoStack);
	},
	redo : function() {
		return _undoToRedo.call(this, this._redoStack, this._undoStack);
	},
	fullscreen : function(bool) {
		this.fullscreenMode = (bool === undefined ? !this.fullscreenMode : bool);
		return this.remove().create();
	},
	readonly : function(isReadonly) {
		isReadonly = _undef(isReadonly, true);
		var self = this, edit = self.edit, doc = edit.doc;
		if (self.designMode) {
			self.toolbar.disableAll(isReadonly, []);
		} else {
			_each(self.noDisableItems, function() {
				self.toolbar[isReadonly ? 'disable' : 'enable'](this);
			});
		}
		if (_IE) {
			doc.body.contentEditable = !isReadonly;
		} else {
			doc.designMode = isReadonly ? 'off' : 'on';
		}
		edit.textarea[0].disabled = isReadonly;
	},
	createMenu : function(options) {
		var self = this,
			name = options.name,
			knode = self.toolbar.get(name),
			pos = knode.pos();
		options.x = pos.x;
		options.y = pos.y + knode.height();
		options.z = self.options.zIndex;
		options.shadowMode = _undef(options.shadowMode, self.shadowMode);
		if (options.selectedColor !== undefined) {
			options.cls = 'ke-colorpicker-' + self.themeType;
			options.noColor = self.lang('noColor');
			self.menu = _colorpicker(options);
		} else {
			options.cls = 'ke-menu-' + self.themeType;
			options.centerLineMode = false;
			self.menu = _menu(options);
		}
		return self.menu;
	},
	hideMenu : function() {
		this.menu.remove();
		this.menu = null;
		return this;
	},
	hideContextmenu : function() {
		this.contextmenu.remove();
		this.contextmenu = null;
		return this;
	},
	createDialog : function(options) {
		var self = this, name = options.name;
		options.z = self.options.zIndex;
		options.shadowMode = _undef(options.shadowMode, self.shadowMode);
		options.closeBtn = _undef(options.closeBtn, {
			name : self.lang('close'),
			click : function(e) {
				self.hideDialog();
				if (_IE && self.cmd) {
					self.cmd.select();
				}
			}
		});
		options.noBtn = _undef(options.noBtn, {
			name : self.lang(options.yesBtn ? 'no' : 'close'),
			click : function(e) {
				self.hideDialog();
				if (_IE && self.cmd) {
					self.cmd.select();
				}
			}
		});
		if (self.dialogAlignType != 'page') {
			options.alignEl = self.container;
		}
		options.cls = 'ke-dialog-' + self.themeType;
		if (self.dialogs.length > 0) {
			var firstDialog = self.dialogs[0],
				parentDialog = self.dialogs[self.dialogs.length - 1];
			firstDialog.setMaskIndex(parentDialog.z + 2);
			options.z = parentDialog.z + 3;
			options.showMask = false;
		}
		var dialog = _dialog(options);
		self.dialogs.push(dialog);
		return dialog;
	},
	hideDialog : function() {
		var self = this;
		if (self.dialogs.length > 0) {
			self.dialogs.pop().remove();
		}
		if (self.dialogs.length > 0) {
			var firstDialog = self.dialogs[0],
				parentDialog = self.dialogs[self.dialogs.length - 1];
			firstDialog.setMaskIndex(parentDialog.z - 1);
		}
		return self;
	},
	errorDialog : function(html) {
		var self = this;
		var dialog = self.createDialog({
			width : 750,
			title : self.lang('uploadError'),
			body : '<div style="padding:10px 20px;"><iframe frameborder="0" style="width:708px;height:400px;"></iframe></div>'
		});
		var iframe = K('iframe', dialog.div), doc = K.iframeDoc(iframe);
		doc.open();
		doc.write(html);
		doc.close();
		K(doc.body).css('background-color', '#FFF');
		iframe[0].contentWindow.focus();
		return self;
	}
};
function _editor(options) {
	return new KEditor(options);
}
_instances = [];
function _create(expr, options) {
	options = options || {};
	options.basePath = _undef(options.basePath, K.basePath);
	options.themesPath = _undef(options.themesPath, options.basePath + 'themes/');
	options.langPath = _undef(options.langPath, options.basePath + 'lang/');
	options.pluginsPath = _undef(options.pluginsPath, options.basePath + 'plugins/');
	if (_undef(options.loadStyleMode, K.options.loadStyleMode)) {
		var themeType = _undef(options.themeType, K.options.themeType);
		_loadStyle(options.themesPath + 'default/default.css');
		_loadStyle(options.themesPath + themeType + '/' + themeType + '.css');
	}
	function create(editor) {
		_each(_plugins, function(name, fn) {
			fn.call(editor, KindEditor);
		});
		return editor.create();
	}
	var knode = K(expr);
	if (!knode || knode.length === 0) {
		return;
	}
	if (knode.length > 1) {
		knode.each(function() {
			_create(this, options);
		});
		return _instances[0];
	}
	options.srcElement = knode[0];
	var editor = new KEditor(options);
	_instances.push(editor);
	if (_language[editor.langType]) {
		return create(editor);
	}
	_loadScript(editor.langPath + editor.langType + '.js?ver=' + encodeURIComponent(K.DEBUG ? _TIME : _VERSION), function() {
		create(editor);
	});
	return editor;
}
function _eachEditor(expr, fn) {
	K(expr).each(function(i, el) {
		K.each(_instances, function(j, editor) {
			if (editor && editor.srcElement[0] == el) {
				fn.call(editor, j, editor);
				return false;
			}
		});
	});
}
K.remove = function(expr) {
	_eachEditor(expr, function(i) {
		this.remove();
		_instances.splice(i, 1);
	});
};
K.sync = function(expr) {
	_eachEditor(expr, function() {
		this.sync();
	});
};
if (_IE && _V < 7) {
	_nativeCommand(document, 'BackgroundImageCache', true);
}
K.EditorClass = KEditor;
K.editor = _editor;
K.create = _create;
K.instances = _instances;
K.plugin = _plugin;
K.lang = _lang;
_plugin('core', function(K) {
	var self = this,
		shortcutKeys = {
			undo : 'Z', redo : 'Y', bold : 'B', italic : 'I', underline : 'U', print : 'P', selectall : 'A'
		};
	self.afterSetHtml(function() {
		if (self.options.afterChange) {
			self.options.afterChange.call(self);
		}
	});
	self.afterCreate(function() {
		if (self.syncType != 'form') {
			return;
		}
		var el = K(self.srcElement), hasForm = false;
		while ((el = el.parent())) {
			if (el.name == 'form') {
				hasForm = true;
				break;
			}
		}
		if (hasForm) {
			el.bind('submit', function(e) {
				self.sync();
				K(window).bind('unload', function() {
					self.edit.textarea.remove();
				});
			});
			var resetBtn = K('[type="reset"]', el);
			resetBtn.click(function() {
				self.html(self.initContent);
				self.cmd.selection();
			});
			self.beforeRemove(function() {
				el.unbind();
				resetBtn.unbind();
			});
		}
	});
	self.clickToolbar('source', function() {
		if (self.edit.designMode) {
			self.toolbar.disableAll(true);
			self.edit.design(false);
			self.toolbar.select('source');
		} else {
			self.toolbar.disableAll(false);
			self.edit.design(true);
			self.toolbar.unselect('source');
			self.cmd.selection();
		}
		self.designMode = self.edit.designMode;
	});
	self.afterCreate(function() {
		if (!self.designMode) {
			self.toolbar.disableAll(true).select('source');
		}
	});
	self.clickToolbar('fullscreen', function() {
		self.fullscreen();
	});
	if (self.fullscreenShortcut) {
		var loaded = false;
		self.afterCreate(function() {
			K(self.edit.doc, self.edit.textarea).keyup(function(e) {
				if (e.which == 27) {
					setTimeout(function() {
						self.fullscreen();
					}, 0);
				}
			});
			if (loaded) {
				if (_IE && !self.designMode) {
					return;
				}
				self.focus();
			}
			if (!loaded) {
				loaded = true;
			}
		});
	}
	_each('undo,redo'.split(','), function(i, name) {
		if (shortcutKeys[name]) {
			self.afterCreate(function() {
				_ctrl(this.edit.doc, shortcutKeys[name], function() {
					self.clickToolbar(name);
				});
			});
		}
		self.clickToolbar(name, function() {
			self[name]();
		});
	});
	self.clickToolbar('formatblock', function() {
		var blocks = self.lang('formatblock.formatBlock'),
			heights = {
				h1 : 28,
				h2 : 24,
				h3 : 18,
				H4 : 14,
				p : 12
			},
			curVal = self.cmd.val('formatblock'),
			menu = self.createMenu({
				name : 'formatblock',
				width : self.langType == 'en' ? 200 : 150
			});
		_each(blocks, function(key, val) {
			var style = 'font-size:' + heights[key] + 'px;';
			if (key.charAt(0) === 'h') {
				style += 'font-weight:bold;';
			}
			menu.addItem({
				title : '<span style="' + style + '" unselectable="on">' + val + '</span>',
				height : heights[key] + 12,
				checked : (curVal === key || curVal === val),
				click : function() {
					self.select().exec('formatblock', '<' + key + '>').hideMenu();
				}
			});
		});
	});
	self.clickToolbar('fontname', function() {
		var curVal = self.cmd.val('fontname'),
			menu = self.createMenu({
				name : 'fontname',
				width : 150
			});
		_each(self.lang('fontname.fontName'), function(key, val) {
			menu.addItem({
				title : '<span style="font-family: ' + key + ';" unselectable="on">' + val + '</span>',
				checked : (curVal === key.toLowerCase() || curVal === val.toLowerCase()),
				click : function() {
					self.exec('fontname', key).hideMenu();
				}
			});
		});
	});
	self.clickToolbar('fontsize', function() {
		var curVal = self.cmd.val('fontsize'),
			menu = self.createMenu({
				name : 'fontsize',
				width : 150
			});
		_each(self.fontSizeTable, function(i, val) {
			menu.addItem({
				title : '<span style="font-size:' + val + ';" unselectable="on">' + val + '</span>',
				height : _removeUnit(val) + 12,
				checked : curVal === val,
				click : function() {
					self.exec('fontsize', val).hideMenu();
				}
			});
		});
	});
	_each('forecolor,hilitecolor'.split(','), function(i, name) {
		self.clickToolbar(name, function() {
			self.createMenu({
				name : name,
				selectedColor : self.cmd.val(name) || 'default',
				colors : self.colorTable,
				click : function(color) {
					self.exec(name, color).hideMenu();
				}
			});
		});
	});
	_each(('cut,copy,paste').split(','), function(i, name) {
		self.clickToolbar(name, function() {
			self.focus();
			try {
				self.exec(name, null);
			} catch(e) {
				alert(self.lang(name + 'Error'));
			}
		});
	});
	self.clickToolbar('about', function() {
		var html = '<div style="margin:20px;">' +
			'<div>KindEditor ' + _VERSION + '</div>' +
			'<div>Copyright &copy; <a href="http://www.kindsoft.net/" target="_blank">kindsoft.net</a> All rights reserved.</div>' +
			'</div>';
		self.createDialog({
			name : 'about',
			width : 350,
			title : self.lang('about'),
			body : html
		});
	});
	self.plugin.getSelectedLink = function() {
		return self.cmd.commonAncestor('a');
	};
	self.plugin.getSelectedImage = function() {
		return _getImageFromRange(self.edit.cmd.range, function(img) {
			return !/^ke-\w+$/i.test(img[0].className);
		});
	};
	self.plugin.getSelectedFlash = function() {
		return _getImageFromRange(self.edit.cmd.range, function(img) {
			return img[0].className == 'ke-flash';
		});
	};
	self.plugin.getSelectedMedia = function() {
		return _getImageFromRange(self.edit.cmd.range, function(img) {
			return img[0].className == 'ke-media' || img[0].className == 'ke-rm';
		});
	};
	self.plugin.getSelectedAnchor = function() {
		return _getImageFromRange(self.edit.cmd.range, function(img) {
			return img[0].className == 'ke-anchor';
		});
	};
	_each('link,image,flash,media,anchor'.split(','), function(i, name) {
		var uName = name.charAt(0).toUpperCase() + name.substr(1);
		_each('edit,delete'.split(','), function(j, val) {
			self.addContextmenu({
				title : self.lang(val + uName),
				click : function() {
					self.loadPlugin(name, function() {
						self.plugin[name][val]();
						self.hideMenu();
					});
				},
				cond : self.plugin['getSelected' + uName],
				width : 150,
				iconClass : val == 'edit' ? 'ke-icon-' + name : undefined
			});
		});
		self.addContextmenu({ title : '-' });
	});
	self.plugin.getSelectedTable = function() {
		return self.cmd.commonAncestor('table');
	};
	self.plugin.getSelectedRow = function() {
		return self.cmd.commonAncestor('tr');
	};
	self.plugin.getSelectedCell = function() {
		return self.cmd.commonAncestor('td');
	};
	_each(('prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,' +
	'rowsplit,colsplit,coldelete,rowdelete,insert,delete').split(','), function(i, val) {
		var cond = _inArray(val, ['prop', 'delete']) < 0 ? self.plugin.getSelectedCell : self.plugin.getSelectedTable;
		self.addContextmenu({
			title : self.lang('table' + val),
			click : function() {
				self.loadPlugin('table', function() {
					self.plugin.table[val]();
					self.hideMenu();
				});
			},
			cond : cond,
			width : 170,
			iconClass : 'ke-icon-table' + val
		});
	});
	self.addContextmenu({ title : '-' });
	_each(('selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,' +
		'insertunorderedlist,indent,outdent,subscript,superscript,hr,print,' +
		'bold,italic,underline,strikethrough,removeformat,unlink').split(','), function(i, name) {
		if (shortcutKeys[name]) {
			self.afterCreate(function() {
				_ctrl(this.edit.doc, shortcutKeys[name], function() {
					self.cmd.selection();
					self.clickToolbar(name);
				});
			});
		}
		self.clickToolbar(name, function() {
			self.focus().exec(name, null);
		});
	});
	self.afterCreate(function() {
		var doc = self.edit.doc, cmd, bookmark, div,
			cls = '__kindeditor_paste__', pasting = false;
		function movePastedData() {
			cmd.range.moveToBookmark(bookmark);
			cmd.select();
			if (_WEBKIT) {
				K('div.' + cls, div).each(function() {
					K(this).after('<br />').remove(true);
				});
				K('span.Apple-style-span', div).remove(true);
				K('span.Apple-tab-span', div).remove(true);
				K('span[style]', div).each(function() {
					if (K(this).css('white-space') == 'nowrap') {
						K(this).remove(true);
					}
				});
				K('meta', div).remove();
			}
			var html = div[0].innerHTML;
			div.remove();
			if (html === '') {
				return;
			}
			if (_WEBKIT) {
				html = html.replace(/(<br>)\1/ig, '$1');
			}
			if (self.pasteType === 2) {
				html = html.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig, '');
				if (/schemas-microsoft-com|worddocument|mso-\w+/i.test(html)) {
					html = _clearMsWord(html, self.filterMode ? self.htmlTags : K.options.htmlTags);
				} else {
					html = _formatHtml(html, self.filterMode ? self.htmlTags : null);
					html = self.beforeSetHtml(html);
				}
			}
			if (self.pasteType === 1) {
				html = html.replace(/&nbsp;/ig, ' ');
				html = html.replace(/\n\s*\n/g, '\n');
				html = html.replace(/<br[^>]*>/ig, '\n');
				html = html.replace(/<\/p><p[^>]*>/ig, '\n');
				html = html.replace(/<[^>]+>/g, '');
				html = html.replace(/ {2}/g, ' &nbsp;');
				if (self.newlineTag == 'p') {
					if (/\n/.test(html)) {
						html = html.replace(/^/, '<p>').replace(/$/, '<br /></p>').replace(/\n/g, '<br /></p><p>');
					}
				} else {
					html = html.replace(/\n/g, '<br />$&');
				}
			}
			self.insertHtml(html, true);
		}
		K(doc.body).bind('paste', function(e){
			if (self.pasteType === 0) {
				e.stop();
				return;
			}
			if (pasting) {
				return;
			}
			pasting = true;
			K('div.' + cls, doc).remove();
			cmd = self.cmd.selection();
			bookmark = cmd.range.createBookmark();
			div = K('<div class="' + cls + '"></div>', doc).css({
				position : 'absolute',
				width : '1px',
				height : '1px',
				overflow : 'hidden',
				left : '-1981px',
				top : K(bookmark.start).pos().y + 'px',
				'white-space' : 'nowrap'
			});
			K(doc.body).append(div);
			if (_IE) {
				var rng = cmd.range.get(true);
				rng.moveToElementText(div[0]);
				rng.select();
				rng.execCommand('paste');
				e.preventDefault();
			} else {
				cmd.range.selectNodeContents(div[0]);
				cmd.select();
			}
			setTimeout(function() {
				movePastedData();
				pasting = false;
			}, 0);
		});
	});
	self.beforeGetHtml(function(html) {
		if (_IE && _V <= 8) {
			html = html.replace(/<div\s+[^>]*data-ke-input-tag="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig, function(full, tag) {
				return unescape(tag);
			});
			html = html.replace(/(<input)((?:\s+[^>]*)?>)/ig, function($0, $1, $2) {
				if (!/\s+type="[^"]+"/i.test($0)) {
					return $1 + ' type="text"' + $2;
				}
				return $0;
			});
		}
		return html.replace(/(<(?:noscript|noscript\s[^>]*)>)([\s\S]*?)(<\/noscript>)/ig, function($0, $1, $2, $3) {
			return $1 + _unescape($2).replace(/\s+/g, ' ') + $3;
		})
		.replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/ig, function(full) {
			var imgAttrs = _getAttrList(full),
				styles = _getCssList(imgAttrs.style || ''),
				attrs = _mediaAttrs(imgAttrs['data-ke-tag']);
			attrs.width = _undef(imgAttrs.width, _removeUnit(_undef(styles.width, '')));
			attrs.height = _undef(imgAttrs.height, _removeUnit(_undef(styles.height, '')));
			return _mediaEmbed(attrs);
		})
		.replace(/<img[^>]*class="?ke-anchor"?[^>]*>/ig, function(full) {
			var imgAttrs = _getAttrList(full);
			return '<a name="' + unescape(imgAttrs['data-ke-name']) + '"></a>';
		})
		.replace(/<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig, function(full, attr, code) {
			return '<script' + unescape(attr) + '>' + unescape(code) + '</script>';
		})
		.replace(/<div\s+[^>]*data-ke-noscript-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig, function(full, attr, code) {
			return '<noscript' + unescape(attr) + '>' + unescape(code) + '</noscript>';
		})
		.replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/ig, function(full, start, src, end) {
			full = full.replace(/(\s+(?:href|src)=")[^"]*(")/i, function($0, $1, $2) {
				return $1 + _unescape(src) + $2;
			});
			full = full.replace(/\s+data-ke-src="[^"]*"/i, '');
			return full;
		})
		.replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/ig, function(full, start, end) {
			return start + end;
		});
	});
	self.beforeSetHtml(function(html) {
		if (_IE && _V <= 8) {
			html = html.replace(/<input[^>]*>|<(select|button)[^>]*>[\s\S]*?<\/\1>/ig, function(full) {
				var attrs = _getAttrList(full);
				var styles = _getCssList(attrs.style || '');
				if (styles.display == 'none') {
					return '<div class="ke-display-none" data-ke-input-tag="' + escape(full) + '"></div>';
				}
				return full;
			});
		}
		return html.replace(/<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/ig, function(full) {
			var attrs = _getAttrList(full);
			attrs.src = _undef(attrs.src, '');
			attrs.width = _undef(attrs.width, 0);
			attrs.height = _undef(attrs.height, 0);
			return _mediaImg(self.themesPath + 'common/blank.gif', attrs);
		})
		.replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/ig, function(full) {
			var attrs = _getAttrList(full);
			if (attrs.href !== undefined) {
				return full;
			}
			return '<img class="ke-anchor" src="' + self.themesPath + 'common/anchor.gif" data-ke-name="' + escape(attrs.name) + '" />';
		})
		.replace(/<script([^>]*)>([\s\S]*?)<\/script>/ig, function(full, attr, code) {
			return '<div class="ke-script" data-ke-script-attr="' + escape(attr) + '">' + escape(code) + '</div>';
		})
		.replace(/<noscript([^>]*)>([\s\S]*?)<\/noscript>/ig, function(full, attr, code) {
			return '<div class="ke-noscript" data-ke-noscript-attr="' + escape(attr) + '">' + escape(code) + '</div>';
		})
		.replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/ig, function(full, start, key, src, end) {
			if (full.match(/\sdata-ke-src="[^"]*"/i)) {
				return full;
			}
			full = start + key + '="' + src + '"' + ' data-ke-src="' + _escape(src) + '"' + end;
			return full;
		})
		.replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/ig, function(full, start, end) {
			return start + 'data-ke-' + end;
		})
		.replace(/<table[^>]*\s+border="0"[^>]*>/ig, function(full) {
			if (full.indexOf('ke-zeroborder') >= 0) {
				return full;
			}
			return _addClassToTag(full, 'ke-zeroborder');
		});
	});
});
})(window);
(function() {
  var CSRFToken, anchoredLink, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsPushState, cacheCurrentPage, cacheSize, changePage, constrainPageCacheTo, createDocument, crossOriginLink, currentState, executeScriptTags, extractLink, extractTitleAndBody, fetchHistory, fetchReplacement, handleClick, ignoreClick, initializeTurbolinks, installClickHandlerLast, loadedAssets, noTurbolink, nonHtmlLink, nonStandardClick, pageCache, pageChangePrevented, pagesCached, processResponse, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, removeHash, removeNoscriptTags, requestMethod, requestMethodIsSafe, resetScrollPosition, targetLink, triggerEvent, visit, xhr, _ref,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  cacheSize = 10;

  currentState = null;

  referer = null;

  loadedAssets = null;

  pageCache = {};

  createDocument = null;

  requestMethod = ((_ref = document.cookie.match(/request_method=(\w+)/)) != null ? _ref[1].toUpperCase() : void 0) || '';

  xhr = null;

  fetchReplacement = function(url) {
    var safeUrl;
    triggerEvent('page:fetch');
    safeUrl = removeHash(url);
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', safeUrl, true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent('page:receive');
      if (doc = processResponse()) {
        reflectNewUrl(url);
        changePage.apply(null, extractTitleAndBody(doc));
        reflectRedirectedUrl();
        if (document.location.hash) {
          document.location.href = document.location.href;
        } else {
          resetScrollPosition();
        }
        return triggerEvent('page:load');
      } else {
        return document.location.href = url;
      }
    };
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onabort = function() {
      return rememberCurrentUrl();
    };
    xhr.onerror = function() {
      return document.location.href = url;
    };
    return xhr.send();
  };

  fetchHistory = function(position) {
    var page;
    cacheCurrentPage();
    page = pageCache[position];
    if (xhr != null) {
      xhr.abort();
    }
    changePage(page.title, page.body);
    recallScrollPosition(page);
    return triggerEvent('page:restore');
  };

  cacheCurrentPage = function() {
    pageCache[currentState.position] = {
      url: document.location.href,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var key, value;
    for (key in pageCache) {
      if (!__hasProp.call(pageCache, key)) continue;
      value = pageCache[key];
      if (key <= currentState.position - limit) {
        pageCache[key] = null;
      }
    }
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    removeNoscriptTags();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    return triggerEvent('page:change');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref1, _ref2;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref1 = script.type) === '' || _ref1 === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref2 = script.attributes;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        attr = _ref2[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function() {
    var noscript, noscriptTags, _i, _len;
    noscriptTags = Array.prototype.slice.call(document.body.getElementsByTagName('noscript'));
    for (_i = 0, _len = noscriptTags.length; _i < _len; _i++) {
      noscript = noscriptTags[_i];
      noscript.parentNode.removeChild(noscript);
    }
  };

  reflectNewUrl = function(url) {
    if (url !== referer) {
      return window.history.pushState({
        turbolinks: true,
        position: currentState.position + 1
      }, '', url);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      preservedHash = removeHash(location) === location ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location + preservedHash);
    }
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      position: Date.now()
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    return window.scrollTo(0, 0);
  };

  removeHash = function(url) {
    var link;
    link = url;
    if (url.href == null) {
      link = document.createElement('A');
      link.href = url;
    }
    return link.href.replace(link.hash, '');
  };

  triggerEvent = function(name) {
    var event;
    event = document.createEvent('Events');
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function() {
    return !triggerEvent('page:before-change');
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref1;
      return (400 <= (_ref1 = xhr.status) && _ref1 < 600);
    };
    validContent = function() {
      return xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref1, _results;
      _ref1 = doc.head.childNodes;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        node = _ref1[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.src || node.href);
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref1, _results;
      if (a.length > b.length) {
        _ref1 = [b, a], a = _ref1[0], b = _ref1[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, doc.body, CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref1;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref1 = testDoc.body) != null ? _ref1.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  installClickHandlerLast = function(event) {
    if (!event.defaultPrevented) {
      document.removeEventListener('click', handleClick, false);
      return document.addEventListener('click', handleClick, false);
    }
  };

  handleClick = function(event) {
    var link;
    if (!event.defaultPrevented) {
      link = extractLink(event);
      if (link.nodeName === 'A' && !ignoreClick(event, link)) {
        if (!pageChangePrevented()) {
          visit(link.href);
        }
        return event.preventDefault();
      }
    }
  };

  extractLink = function(event) {
    var link;
    link = event.target;
    while (!(!link.parentNode || link.nodeName === 'A')) {
      link = link.parentNode;
    }
    return link;
  };

  crossOriginLink = function(link) {
    return location.protocol !== link.protocol || location.host !== link.host;
  };

  anchoredLink = function(link) {
    return ((link.hash && removeHash(link)) === removeHash(location)) || (link.href === location.href + '#');
  };

  nonHtmlLink = function(link) {
    var url;
    url = removeHash(link);
    return url.match(/\.[a-z]+(\?.*)?$/g) && !url.match(/\.html?(\?.*)?$/g);
  };

  noTurbolink = function(link) {
    var ignore;
    while (!(ignore || link === document)) {
      ignore = link.getAttribute('data-no-turbolink') != null;
      link = link.parentNode;
    }
    return ignore;
  };

  targetLink = function(link) {
    return link.target.length !== 0;
  };

  nonStandardClick = function(event) {
    return event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  };

  ignoreClick = function(event, link) {
    return crossOriginLink(link) || anchoredLink(link) || nonHtmlLink(link) || noTurbolink(link) || targetLink(link) || nonStandardClick(event);
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', installClickHandlerLast, true);
    return window.addEventListener('popstate', function(event) {
      var state;
      state = event.state;
      if (state != null ? state.turbolinks : void 0) {
        if (pageCache[state.position]) {
          return fetchHistory(state.position);
        } else {
          return visit(event.target.location.href);
        }
      }
    }, false);
  };

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && window.history.state !== void 0;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = requestMethod === 'GET' || requestMethod === '';

  if (browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe) {
    visit = function(url) {
      referer = document.location.href;
      cacheCurrentPage();
      return fetchReplacement(url);
    };
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached
  };

}).call(this);
var ImageSlider = function () {
  var api = {};

  api.initialize = function () {
    $('#slider').nivoSlider();
  };

  return api;
};
//$(function () {

//  ImageSlider().initialize();

//});
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */


(function($) {
    var NivoSlider = function(element, options){
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');

        // Find our slider children
        var kids = slider.children();
        kids.each(function() {
            var child = $(this);
            var link = '';
            if(!child.is('img')){
                if(child.is('a')){
                    child.addClass('nivo-imageLink');
                    link = child;
                }
                child = child.find('img:first');
            }
            // Get img width & height
            var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
                childHeight = (childHeight === 0) ? child.attr('height') : child.height();

            if(link !== ''){
                link.css('display','none');
            }
            child.css('display','none');
            vars.totalSlides++;
        });
         
        // If randomStart
        if(settings.randomStart){
            settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
        }
        
        // Set startSlide
        if(settings.startSlide > 0){
            if(settings.startSlide >= vars.totalSlides) { settings.startSlide = vars.totalSlides - 1; }
            vars.currentSlide = settings.startSlide;
        }
        
        // Get initial image
        if($(kids[vars.currentSlide]).is('img')){
            vars.currentImage = $(kids[vars.currentSlide]);
        } else {
            vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
        }
        
        // Show initial link
        if($(kids[vars.currentSlide]).is('a')){
            $(kids[vars.currentSlide]).css('display','block');
        }
        
        // Set first background
        var sliderImg = $('<img/>').addClass('nivo-main-image');
        sliderImg.attr('src', vars.currentImage.attr('src')).show();
        slider.append(sliderImg);

        // Detect Window Resize
        $(window).resize(function() {
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.attr('src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
            $('.nivo-box').remove();
        });

        //Create caption
        slider.append($('<div class="nivo-caption"></div>'));
        
        // Process caption function
        var processCaption = function(settings){
            var nivoCaption = $('.nivo-caption', slider);
            if(vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined){
                var title = vars.currentImage.attr('title');
                if(title.substr(0,1) == '#') title = $(title).html();   

                if(nivoCaption.css('display') == 'block'){
                    setTimeout(function(){
                        nivoCaption.html(title);
                    }, settings.animSpeed);
                } else {
                    nivoCaption.html(title);
                    nivoCaption.stop().fadeIn(settings.animSpeed);
                }
            } else {
                nivoCaption.stop().fadeOut(settings.animSpeed);
            }
        }
        
        //Process initial  caption
        processCaption(settings);
        
        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if(!settings.manualAdvance && kids.length > 1){
            timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
        }
        
        // Add Direction nav
        if(settings.directionNav){
            slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+ settings.prevText +'</a><a class="nivo-nextNav">'+ settings.nextText +'</a></div>');
            
            $(slider).on('click', 'a.nivo-prevNav', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                vars.currentSlide -= 2;
                nivoRun(slider, kids, settings, 'prev');
            });
            
            $(slider).on('click', 'a.nivo-nextNav', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                nivoRun(slider, kids, settings, 'next');
            });
        }
        
        //For pauseOnHover setting
        if(settings.pauseOnHover){
            slider.hover(function(){
                vars.paused = true;
                clearInterval(timer);
                timer = '';
            }, function(){
                vars.paused = false;
                // Restart the timer
                if(timer === '' && !settings.manualAdvance){
                    timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
                }
            });
        }
        
        // Event when Animation finishes
        slider.bind('nivo:animFinished', function(){
            sliderImg.attr('src', vars.currentImage.attr('src'));
            vars.running = false; 
            // Hide child links
            $(kids).each(function(){
                if($(this).is('a')){
                   $(this).css('display','none');
                }
            });
            // Show current link
            if($(kids[vars.currentSlide]).is('a')){
                $(kids[vars.currentSlide]).css('display','block');
            }
            // Restart the timer
            if(timer === '' && !vars.paused && !settings.manualAdvance){
                timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
            }
            // Trigger the afterChange callback
            settings.afterChange.call(this);
        }); 
        
        // Add slices for slice animations
        var createSlices = function(slider, settings, vars) {
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = ($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height();

            for(var i = 0; i < settings.slices; i++){
                var sliceWidth = Math.round(slider.width()/settings.slices);
                
                if(i === settings.slices-1){
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:(slider.width()-(sliceWidth*i))+'px',
                            height:sliceHeight+'px', 
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                } else {
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:sliceWidth+'px',
                            height:sliceHeight+'px',
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                }
            }
            
            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };
        
        // Add boxes for box animations
        var createBoxes = function(slider, settings, vars){
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var boxWidth = Math.round(slider.width()/settings.boxCols),
                boxHeight = Math.round($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);
            
                        
            for(var rows = 0; rows < settings.boxRows; rows++){
                for(var cols = 0; cols < settings.boxCols; cols++){
                    if(cols === settings.boxCols-1){
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:(slider.width()-(boxWidth*cols))+'px'
                                
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    } else {
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:boxWidth+'px'
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    }
                }
            }
            
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Private run method
        var nivoRun = function(slider, kids, settings, nudge){          
            // Get our vars
            var vars = slider.data('nivo:vars');
            
            // Trigger the lastSlide callback
            if(vars && (vars.currentSlide === vars.totalSlides - 1)){ 
                settings.lastSlide.call(this);
            }
            
            // Stop
            if((!vars || vars.stop) && !nudge) { return false; }
            
            // Trigger the beforeChange callback
            settings.beforeChange.call(this);

            // Set current background before change
            if(!nudge){
                sliderImg.attr('src', vars.currentImage.attr('src'));
            } else {
                if(nudge === 'prev'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
                if(nudge === 'next'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
            }
            
            vars.currentSlide++;
            // Trigger the slideshowEnd callback
            if(vars.currentSlide === vars.totalSlides){ 
                vars.currentSlide = 0;
                settings.slideshowEnd.call(this);
            }
            if(vars.currentSlide < 0) { vars.currentSlide = (vars.totalSlides - 1); }
            // Set vars.currentImage
            if($(kids[vars.currentSlide]).is('img')){
                vars.currentImage = $(kids[vars.currentSlide]);
            } else {
                vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
            }
            
            // Set active links
            if(settings.controlNav){
                $('a', vars.controlNavEl).removeClass('active');
                $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            }
            
            // Process caption
            processCaption(settings);            
            
            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();
            
            // Remove any boxes from last transition
            $('.nivo-box', slider).remove();
            
            var currentEffect = settings.effect,
                anims = '';
                
            // Generate random effect
            if(settings.effect === 'random'){
                anims = new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade',
                'boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');
                currentEffect = anims[Math.floor(Math.random()*(anims.length + 1))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Run random effect from specified set (eg: effect:'fold,fade')
            if(settings.effect.indexOf(',') !== -1){
                anims = settings.effect.split(',');
                currentEffect = anims[Math.floor(Math.random()*(anims.length))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Custom transition as defined by "data-transition" attribute
            if(vars.currentImage.attr('data-transition')){
                currentEffect = vars.currentImage.attr('data-transition');
            }
        
            // Run effects
            vars.running = true;
            var timeBuff = 0,
                i = 0,
                slices = '',
                firstSlice = '',
                totalBoxes = '',
                boxes = '';
            
            if(currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'top': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'bottom': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                var v = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    if(i === 0){
                        slice.css('top','0px');
                        i++;
                    } else {
                        slice.css('bottom','0px');
                        i = 0;
                    }
                    
                    if(v === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    v++;
                });
            } else if(currentEffect === 'fold'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                
                $('.nivo-slice', slider).each(function(){
                    var slice = $(this);
                    var origWidth = slice.width();
                    slice.css({ top:'0px', width:'0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'fade'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': slider.width() + 'px'
                });
    
                firstSlice.animate({ opacity:'1.0' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInRight'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInLeft'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1',
                    'left': '',
                    'right': '0px'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ 
                    // Reset positioning
                    firstSlice.css({
                        'left': '0px',
                        'right': ''
                    });
                    slider.trigger('nivo:animFinished'); 
                });
            } else if(currentEffect === 'boxRandom'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                boxes = shuffle($('.nivo-box', slider));
                boxes.each(function(){
                    var box = $(this);
                    if(i === totalBoxes-1){
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 20;
                    i++;
                });
            } else if(currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;
                
                // Split boxes into 2D array
                var rowIndex = 0;
                var colIndex = 0;
                var box2Darr = [];
                box2Darr[rowIndex] = [];
                boxes = $('.nivo-box', slider);
                if(currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse'){
                    boxes = $('.nivo-box', slider)._reverse();
                }
                boxes.each(function(){
                    box2Darr[rowIndex][colIndex] = $(this);
                    colIndex++;
                    if(colIndex === settings.boxCols){
                        rowIndex++;
                        colIndex = 0;
                        box2Darr[rowIndex] = [];
                    }
                });
                
                // Run animation
                for(var cols = 0; cols < (settings.boxCols * 2); cols++){
                    var prevCol = cols;
                    for(var rows = 0; rows < settings.boxRows; rows++){
                        if(prevCol >= 0 && prevCol < settings.boxCols){
                            /* Due to some weird JS bug with loop vars 
                            being used in setTimeout, this is wrapped
                            with an anonymous function call */
                            (function(row, col, time, i, totalBoxes) {
                                var box = $(box2Darr[row][col]);
                                var w = box.width();
                                var h = box.height();
                                if(currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                                    box.width(0).height(0);
                                }
                                if(i === totalBoxes-1){
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3, '', function(){ slider.trigger('nivo:animFinished'); });
                                    }, (100 + time));
                                } else {
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3);
                                    }, (100 + time));
                                }
                            })(rows, prevCol, timeBuff, i, totalBoxes);
                            i++;
                        }
                        prevCol--;
                    }
                    timeBuff += 100;
                }
            }           
        };
        
        // Shuffle an array
        var shuffle = function(arr){
            for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        };
        
        // For debugging
        var trace = function(msg){
            if(this.console && typeof console.log !== 'undefined') { console.log(msg); }
        };
        
        // Start / Stop
        this.stop = function(){
            if(!$(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = true;
                trace('Stop Slider');
            }
        };
        
        this.start = function(){
            if($(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = false;
                trace('Start Slider');
            }
        };
        
        // Trigger the afterLoad callback
        settings.afterLoad.call(this);
        
        return this;
    };
        
    $.fn.nivoSlider = function(options) {
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) { return element.data('nivoslider'); }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };
    
    //Default settings
    $.fn.nivoSlider.defaults = {
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){},
        lastSlide: function(){},
        afterLoad: function(){}
    };

    $.fn._reverse = [].reverse;
    
})(jQuery);
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
* Arabic Translation By daif alotaibi (http://daif.net/)
*******************************************************************************/


KindEditor.lang({
	source : 'عرض المصدر',
	preview : 'معاينة الصفحة',
	undo : 'تراجع(Ctrl+Z)',
	redo : 'إعادة التراجع(Ctrl+Y)',
	cut : 'قص(Ctrl+X)',
	copy : 'نسخ(Ctrl+C)',
	paste : 'لصق(Ctrl+V)',
	plainpaste : 'لصق كنص عادي',
	wordpaste : 'لصق من مايكروسفت ورد',
	selectall : 'تحديد الكل',
	justifyleft : 'محاذاه لليسار',
	justifycenter : 'محاذاه للوسط',
	justifyright : 'محاذاه لليمين',
	justifyfull : 'محاذاه تلقائية',
	insertorderedlist : 'قائمة مرقمه',
	insertunorderedlist : 'قائمة نقطية',
	indent : 'إزاحه النص',
	outdent : 'إلغاء الازاحة',
	subscript : 'أسفل النص',
	superscript : 'أعلى النص',
	formatblock : 'Paragraph format',
	fontname : 'نوع الخط',
	fontsize : 'حجم الخط',
	forecolor : 'لون النص',
	hilitecolor : 'لون خلفية النص',
	bold : 'عريض(Ctrl+B)',
	italic : 'مائل(Ctrl+I)',
	underline : 'خط تحت النص(Ctrl+U)',
	strikethrough : 'خط على النص',
	removeformat : 'إزالة التنسيق',
	image : 'إدراج صورة',
	multiimage : 'Multi image',
	flash : 'إدراج فلاش',
	media : 'إدراج وسائط متعددة',
	table : 'إدراج جدول',
	tablecell : 'خلية',
	hr : 'إدراج خط أفقي',
	emoticons : 'إدراج وجه ضاحك',
	link : 'رابط',
	unlink : 'إزالة الرابط',
	fullscreen : 'محرر ملئ الشاشة',
	about : 'حول',
	print : 'طباعة',
	filemanager : 'مدير الملفات',
	code : 'إدراج نص برمجي',
	map : 'خرائط قووقل',
	baidumap : 'خرائط قووقل',
	lineheight : 'إرتفاع السطر',
	clearhtml : 'مسح كود HTML',
	pagebreak : 'إدراج فاصل صفحات',
	quickformat : 'تنسيق سريع',
	insertfile : 'إدراج ملف',
	template : 'إدراج قالب',
	anchor : 'رابط',
	yes : 'موافق',
	no : 'إلغاء',
	close : 'إغلاق',
	editImage : 'خصائص الصورة',
	deleteImage : 'حذفالصورة',
	editFlash : 'خصائص الفلاش',
	deleteFlash : 'حذف الفلاش',
	editMedia : 'خصائص الوسائط',
	deleteMedia : 'حذف الوسائط',
	editLink : 'خصائص الرابط',
	deleteLink : 'إزالة الرابط',
	tableprop : 'خصائص الجدول',
	tablecellprop : 'خصائص الخلية',
	tableinsert : 'إدراج جدول',
	tabledelete : 'حذف جدول',
	tablecolinsertleft : 'إدراج عمود لليسار',
	tablecolinsertright : 'إدراج عمود لليسار',
	tablerowinsertabove : 'إدراج صف للأعلى',
	tablerowinsertbelow : 'إدراج صف للأسفل',
	tablerowmerge : 'دمج للأسفل',
	tablecolmerge : 'دمج لليمين',
	tablerowsplit : 'تقسم الصف',
	tablecolsplit : 'تقسيم العمود',
	tablecoldelete : 'حذف العمود',
	tablerowdelete : 'حذف الصف',
	noColor : 'إفتراضي',
	pleaseSelectFile : 'Please select file.',
	invalidImg : "الرجاء إدخال رابط صحيح.\nالملفات المسموح بها: jpg,gif,bmp,png",
	invalidMedia : "الرجاء إدخال رابط صحيح.\nالملفات المسموح بها: swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb",
	invalidWidth : "العرض يجب أن يكون رقم.",
	invalidHeight : "الإرتفاع يجب أن يكون رقم.",
	invalidBorder : "عرض الحد يجب أن يكون رقم.",
	invalidUrl : "الرجاء إدخال رابط حيح.",
	invalidRows : 'صفوف غير صحيح.',
	invalidCols : 'أعمدة غير صحيحة.',
	invalidPadding : 'The padding must be number.',
	invalidSpacing : 'The spacing must be number.',
	invalidJson : 'Invalid JSON string.',
	uploadSuccess : 'تم رفع الملف بنجاح.',
	cutError : 'حاليا غير مدعومة من المتصفح, إستخدم إختصار لوحة المفاتيح (Ctrl+X).',
	copyError : 'حاليا غير مدعومة من المتصفح, إستخدم إختصار لوحة المفاتيح (Ctrl+C).',
	pasteError : 'حاليا غير مدعومة من المتصفح, إستخدم إختصار لوحة المفاتيح (Ctrl+V).',
	ajaxLoading : 'Loading ...',
	uploadLoading : 'Uploading ...',
	uploadError : 'Upload Error',
	'plainpaste.comment' : 'إستخدم إختصار لوحة المفاتيح (Ctrl+V) للصق داخل النافذة.',
	'wordpaste.comment' : 'إستخدم إختصار لوحة المفاتيح (Ctrl+V) للصق داخل النافذة.',
	'code.pleaseInput' : 'Please input code.',
	'link.url' : 'الرابط',
	'link.linkType' : 'الهدف',
	'link.newWindow' : 'نافذة جديدة',
	'link.selfWindow' : 'نفس النافذة',
	'flash.url' : 'الرابط',
	'flash.width' : 'العرض',
	'flash.height' : 'الإرتفاع',
	'flash.upload' : 'رفع',
	'flash.viewServer' : 'أستعراض',
	'media.url' : 'الرابط',
	'media.width' : 'العرض',
	'media.height' : 'الإرتفاع',
	'media.autostart' : 'تشغيل تلقائي',
	'media.upload' : 'رفع',
	'media.viewServer' : 'أستعراض',
	'image.remoteImage' : 'إدراج الرابط',
	'image.localImage' : 'رفع',
	'image.remoteUrl' : 'الرابط',
	'image.localUrl' : 'الملف',
	'image.size' : 'الحجم',
	'image.width' : 'العرض',
	'image.height' : 'الإرتفاع',
	'image.resetSize' : 'إستعادة الأبعاد',
	'image.align' : 'محاذاة',
	'image.defaultAlign' : 'الإفتراضي',
	'image.leftAlign' : 'اليسار',
	'image.rightAlign' : 'اليمين',
	'image.imgTitle' : 'العنوان',
	'image.upload' : 'أستعراض',
	'image.viewServer' : 'أستعراض',
	'multiimage.uploadDesc' : 'Allows users to upload <%=uploadLimit%> images, single image size not exceeding <%=sizeLimit%>',
	'multiimage.startUpload' : 'Start upload',
	'multiimage.clearAll' : 'Clear all',
	'multiimage.insertAll' : 'Insert all',
	'multiimage.queueLimitExceeded' : 'Queue limit exceeded.',
	'multiimage.fileExceedsSizeLimit' : 'File exceeds size limit.',
	'multiimage.zeroByteFile' : 'Zero byte file.',
	'multiimage.invalidFiletype' : 'Invalid file type.',
	'multiimage.unknownError' : 'Unknown upload error.',
	'multiimage.pending' : 'Pending ...',
	'multiimage.uploadError' : 'Upload error',
	'filemanager.emptyFolder' : 'فارغ',
	'filemanager.moveup' : 'المجلد الأب',
	'filemanager.viewType' : 'العرض: ',
	'filemanager.viewImage' : 'مصغرات',
	'filemanager.listImage' : 'قائمة',
	'filemanager.orderType' : 'الترتيب: ',
	'filemanager.fileName' : 'بالإسم',
	'filemanager.fileSize' : 'بالحجم',
	'filemanager.fileType' : 'بالنوع',
	'insertfile.url' : 'الرابط',
	'insertfile.title' : 'العنوان',
	'insertfile.upload' : 'رفع',
	'insertfile.viewServer' : 'أستعراض',
	'table.cells' : 'خلايا',
	'table.rows' : 'صفوف',
	'table.cols' : 'أعمدة',
	'table.size' : 'الأبعاد',
	'table.width' : 'العرض',
	'table.height' : 'الإرتفاع',
	'table.percent' : '%',
	'table.px' : 'px',
	'table.space' : 'الخارج',
	'table.padding' : 'الداخل',
	'table.spacing' : 'الفراغات',
	'table.align' : 'محاذاه',
	'table.textAlign' : 'افقى',
	'table.verticalAlign' : 'رأسي',
	'table.alignDefault' : 'إفتراضي',
	'table.alignLeft' : 'يسار',
	'table.alignCenter' : 'وسط',
	'table.alignRight' : 'يمين',
	'table.alignTop' : 'أعلى',
	'table.alignMiddle' : 'منتصف',
	'table.alignBottom' : 'أسفل',
	'table.alignBaseline' : 'Baseline',
	'table.border' : 'الحدود',
	'table.borderWidth' : 'العرض',
	'table.borderColor' : 'اللون',
	'table.backgroundColor' : 'الخلفية',
	'map.address' : 'العنوان: ',
	'map.search' : 'بحث',
	'baidumap.address' : 'العنوان: ',
	'baidumap.search' : 'بحث',
	'baidumap.insertDynamicMap' : 'Dynamic Map',
	'anchor.name' : 'إسم الرابط',
	'formatblock.formatBlock' : {
		h1 : 'عنوان 1',
		h2 : 'عنوان 2',
		h3 : 'عنوان 3',
		h4 : 'عنوان 4',
		p : 'عادي'
	},
	'fontname.fontName' : {
		'Arial' : 'Arial',
		'Arial Black' : 'Arial Black',
		'Comic Sans MS' : 'Comic Sans MS',
		'Courier New' : 'Courier New',
		'Garamond' : 'Garamond',
		'Georgia' : 'Georgia',
		'Tahoma' : 'Tahoma',
		'Times New Roman' : 'Times New Roman',
		'Trebuchet MS' : 'Trebuchet MS',
		'Verdana' : 'Verdana'
	},
	'lineheight.lineHeight' : [
		{'1' : 'إرتفاع السطر 1'},
		{'1.5' : 'إرتفاع السطر 1.5'},
		{'2' : 'إرتفاع السطر 2'},
		{'2.5' : 'إرتفاع السطر 2.5'},
		{'3' : 'إرتفاع السطر 3'}
	],
	'template.selectTemplate' : 'قالب',
	'template.replaceContent' : 'إستبدال المحتوى الحالي',
	'template.fileList' : {
		'1.html' : 'صورة ونص',
		'2.html' : 'جدول',
		'3.html' : 'قائمة'
	}
}, 'ar');
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.lang({
	source : 'Source',
	preview : 'Preview',
	undo : 'Undo(Ctrl+Z)',
	redo : 'Redo(Ctrl+Y)',
	cut : 'Cut(Ctrl+X)',
	copy : 'Copy(Ctrl+C)',
	paste : 'Paste(Ctrl+V)',
	plainpaste : 'Paste as plain text',
	wordpaste : 'Paste from Word',
	selectall : 'Select all',
	justifyleft : 'Align left',
	justifycenter : 'Align center',
	justifyright : 'Align right',
	justifyfull : 'Align full',
	insertorderedlist : 'Ordered list',
	insertunorderedlist : 'Unordered list',
	indent : 'Increase indent',
	outdent : 'Decrease indent',
	subscript : 'Subscript',
	superscript : 'Superscript',
	formatblock : 'Paragraph format',
	fontname : 'Font family',
	fontsize : 'Font size',
	forecolor : 'Text color',
	hilitecolor : 'Highlight color',
	bold : 'Bold(Ctrl+B)',
	italic : 'Italic(Ctrl+I)',
	underline : 'Underline(Ctrl+U)',
	strikethrough : 'Strikethrough',
	removeformat : 'Remove format',
	image : 'Image',
	multiimage : 'Multi image',
	flash : 'Flash',
	media : 'Embeded media',
	table : 'Table',
	tablecell : 'Cell',
	hr : 'Insert horizontal line',
	emoticons : 'Insert emoticon',
	link : 'Link',
	unlink : 'Unlink',
	fullscreen : 'Toggle fullscreen mode',
	about : 'About',
	print : 'Print',
	filemanager : 'File Manager',
	code : 'Insert code',
	map : 'Google Maps',
	baidumap : 'Baidu Maps',
	lineheight : 'Line height',
	clearhtml : 'Clear HTML code',
	pagebreak : 'Insert Page Break',
	quickformat : 'Quick Format',
	insertfile : 'Insert file',
	template : 'Insert Template',
	anchor : 'Anchor',
	yes : 'OK',
	no : 'Cancel',
	close : 'Close',
	editImage : 'Image properties',
	deleteImage : 'Delete image',
	editFlash : 'Flash properties',
	deleteFlash : 'Delete flash',
	editMedia : 'Media properties',
	deleteMedia : 'Delete media',
	editLink : 'Link properties',
	deleteLink : 'Unlink',
	tableprop : 'Table properties',
	tablecellprop : 'Cell properties',
	tableinsert : 'Insert table',
	tabledelete : 'Delete table',
	tablecolinsertleft : 'Insert column left',
	tablecolinsertright : 'Insert column right',
	tablerowinsertabove : 'Insert row above',
	tablerowinsertbelow : 'Insert row below',
	tablerowmerge : 'Merge down',
	tablecolmerge : 'Merge right',
	tablerowsplit : 'Split row',
	tablecolsplit : 'Split column',
	tablecoldelete : 'Delete column',
	tablerowdelete : 'Delete row',
	noColor : 'Default',
	pleaseSelectFile : 'Please select file.',
	invalidImg : "Please type valid URL.\nAllowed file extension: jpg,gif,bmp,png",
	invalidMedia : "Please type valid URL.\nAllowed file extension: swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb",
	invalidWidth : "The width must be number.",
	invalidHeight : "The height must be number.",
	invalidBorder : "The border must be number.",
	invalidUrl : "Please type valid URL.",
	invalidRows : 'Invalid rows.',
	invalidCols : 'Invalid columns.',
	invalidPadding : 'The padding must be number.',
	invalidSpacing : 'The spacing must be number.',
	invalidJson : 'Invalid JSON string.',
	uploadSuccess : 'Upload success.',
	cutError : 'Currently not supported by your browser, use keyboard shortcut(Ctrl+X) instead.',
	copyError : 'Currently not supported by your browser, use keyboard shortcut(Ctrl+C) instead.',
	pasteError : 'Currently not supported by your browser, use keyboard shortcut(Ctrl+V) instead.',
	ajaxLoading : 'Loading ...',
	uploadLoading : 'Uploading ...',
	uploadError : 'Upload Error',
	'plainpaste.comment' : 'Use keyboard shortcut(Ctrl+V) to paste the text into the window.',
	'wordpaste.comment' : 'Use keyboard shortcut(Ctrl+V) to paste the text into the window.',
	'code.pleaseInput' : 'Please input code.',
	'link.url' : 'URL',
	'link.linkType' : 'Target',
	'link.newWindow' : 'New window',
	'link.selfWindow' : 'Same window',
	'flash.url' : 'URL',
	'flash.width' : 'Width',
	'flash.height' : 'Height',
	'flash.upload' : 'Upload',
	'flash.viewServer' : 'Browse',
	'media.url' : 'URL',
	'media.width' : 'Width',
	'media.height' : 'Height',
	'media.autostart' : 'Auto start',
	'media.upload' : 'Upload',
	'media.viewServer' : 'Browse',
	'image.remoteImage' : 'Insert URL',
	'image.localImage' : 'Upload',
	'image.remoteUrl' : 'URL',
	'image.localUrl' : 'File',
	'image.size' : 'Size',
	'image.width' : 'Width',
	'image.height' : 'Height',
	'image.resetSize' : 'Reset dimensions',
	'image.align' : 'Align',
	'image.defaultAlign' : 'Default',
	'image.leftAlign' : 'Left',
	'image.rightAlign' : 'Right',
	'image.imgTitle' : 'Title',
	'image.upload' : 'Browse',
	'image.viewServer' : 'Browse',
	'multiimage.uploadDesc' : 'Allows users to upload <%=uploadLimit%> images, single image size not exceeding <%=sizeLimit%>',
	'multiimage.startUpload' : 'Start upload',
	'multiimage.clearAll' : 'Clear all',
	'multiimage.insertAll' : 'Insert all',
	'multiimage.queueLimitExceeded' : 'Queue limit exceeded.',
	'multiimage.fileExceedsSizeLimit' : 'File exceeds size limit.',
	'multiimage.zeroByteFile' : 'Zero byte file.',
	'multiimage.invalidFiletype' : 'Invalid file type.',
	'multiimage.unknownError' : 'Unknown upload error.',
	'multiimage.pending' : 'Pending ...',
	'multiimage.uploadError' : 'Upload error',
	'filemanager.emptyFolder' : 'Blank',
	'filemanager.moveup' : 'Parent folder',
	'filemanager.viewType' : 'Display: ',
	'filemanager.viewImage' : 'Thumbnails',
	'filemanager.listImage' : 'List',
	'filemanager.orderType' : 'Sorting: ',
	'filemanager.fileName' : 'By name',
	'filemanager.fileSize' : 'By size',
	'filemanager.fileType' : 'By type',
	'insertfile.url' : 'URL',
	'insertfile.title' : 'Title',
	'insertfile.upload' : 'Upload',
	'insertfile.viewServer' : 'Browse',
	'table.cells' : 'Cells',
	'table.rows' : 'Rows',
	'table.cols' : 'Columns',
	'table.size' : 'Dimensions',
	'table.width' : 'Width',
	'table.height' : 'Height',
	'table.percent' : '%',
	'table.px' : 'px',
	'table.space' : 'Space',
	'table.padding' : 'Padding',
	'table.spacing' : 'Spacing',
	'table.align' : 'Align',
	'table.textAlign' : 'Horizontal',
	'table.verticalAlign' : 'Vertical',
	'table.alignDefault' : 'Default',
	'table.alignLeft' : 'Left',
	'table.alignCenter' : 'Center',
	'table.alignRight' : 'Right',
	'table.alignTop' : 'Top',
	'table.alignMiddle' : 'Middle',
	'table.alignBottom' : 'Bottom',
	'table.alignBaseline' : 'Baseline',
	'table.border' : 'Border',
	'table.borderWidth' : 'Width',
	'table.borderColor' : 'Color',
	'table.backgroundColor' : 'Background',
	'map.address' : 'Address: ',
	'map.search' : 'Search',
	'baidumap.address' : 'Address: ',
	'baidumap.search' : 'Search',
	'baidumap.insertDynamicMap' : 'Dynamic Map',
	'anchor.name' : 'Anchor name',
	'formatblock.formatBlock' : {
		h1 : 'Heading 1',
		h2 : 'Heading 2',
		h3 : 'Heading 3',
		h4 : 'Heading 4',
		p : 'Normal'
	},
	'fontname.fontName' : {
		'Arial' : 'Arial',
		'Arial Black' : 'Arial Black',
		'Comic Sans MS' : 'Comic Sans MS',
		'Courier New' : 'Courier New',
		'Garamond' : 'Garamond',
		'Georgia' : 'Georgia',
		'Tahoma' : 'Tahoma',
		'Times New Roman' : 'Times New Roman',
		'Trebuchet MS' : 'Trebuchet MS',
		'Verdana' : 'Verdana'
	},
	'lineheight.lineHeight' : [
		{'1' : 'Line height 1'},
		{'1.5' : 'Line height 1.5'},
		{'2' : 'Line height 2'},
		{'2.5' : 'Line height 2.5'},
		{'3' : 'Line height 3'}
	],
	'template.selectTemplate' : 'Template',
	'template.replaceContent' : 'Replace current content',
	'template.fileList' : {
		'1.html' : 'Image and Text',
		'2.html' : 'Table',
		'3.html' : 'List'
	}
}, 'en');
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Composite <ukjinplant@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.lang({
	source : '소스',
	preview : '미리보기',
	undo : '작업취소(Ctrl+Z)',
	redo : '작업재개(Ctrl+Y)',
	cut : '잘라내기(Ctrl+X)',
	copy : '복사(Ctrl+C)',
	paste : '붙여넣기(Ctrl+V)',
	plainpaste : '일반 텍스트로 붙여넣기',
	wordpaste : '워드 문서로 붙여넣기',
	selectall : '전체 선택',
	justifyleft : '왼쪽 정렬',
	justifycenter : '가운데 정렬',
	justifyright : '오른쪽 정렬',
	justifyfull : '양쪽 정렬',
	insertorderedlist : '순서 목록',
	insertunorderedlist : '비순서 목록',
	indent : '들여쓰기',
	outdent : '내어쓰기',
	subscript : '아랫첨자',
	superscript : '윗첨자',
	formatblock : '문단 형식',
	fontname : '글꼴',
	fontsize : '글자 크기',
	forecolor : '글자색',
	hilitecolor : '강조색',
	bold : '굵게(Ctrl+B)',
	italic : '이텔릭(Ctrl+I)',
	underline : '빝줄(Ctrl+U)',
	strikethrough : '취소선',
	removeformat : '형식 제거',
	image : '이미지 추가',
	multiimage : '여러 이미지 추가',
	flash : '플래시 추가',
	media : '미디어 추가',
	table : '표',
	tablecell : '열',
	hr : '구분선 추가',
	emoticons : '이모티콘 추가',
	link : '링크',
	unlink : '링크 제거',
	fullscreen : '전체 화면 모드',
	about : '이 에디터는...',
	print : '인쇄',
	filemanager : '파일 관리자',
	code : '코드 추가',
	map : '구글 맵 추가',
	baidumap : '바이두 맵 추가',
	lineheight : '행 간격',
	clearhtml : 'HTML 코드 정리',
	pagebreak : '페이지 구분 추가',
	quickformat : '빠른 형식',
	insertfile : '파일 추가',
	template : '템플릿 추가',
	anchor : '책갈피',
	yes : '확인',
	no : '취소',
	close : '닫기',
	editImage : '이미지 속성',
	deleteImage : '이미지 삭제',
	editFlash : '플래시 속성',
	deleteFlash : '플래시 삭제',
	editMedia : '미디어 속성',
	deleteMedia : '미디어 삭제',
	editLink : '링크 속성',
	deleteLink : '링크 삭제',
	tableprop : '표 속성',
	tablecellprop : '열 속성',
	tableinsert : '표 추가',
	tabledelete : '표 삭제',
	tablecolinsertleft : '왼쪽으로 열 추가',
	tablecolinsertright : '오른쪽으로 열 추가',
	tablerowinsertabove : '위쪽으로 열 추가',
	tablerowinsertbelow : '아래쪽으로 열 추가',
	tablerowmerge : '아래로 병합',
	tablecolmerge : '오른쪽으로 병합',
	tablerowsplit : '행 나누기',
	tablecolsplit : '열 나누기',
	tablecoldelete : '열 삭제',
	tablerowdelete : '행 삭제',
	noColor : '기본색',
	pleaseSelectFile : '파일 선택',
	invalidImg : "올바른 주소를 입력하세요.\njpg,gif,bmp,png 형식이 가능합니다.",
	invalidMedia : "올바른 주소를 입력하세요.\nswf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb 형식이 가능합니다.",
	invalidWidth : "넓이 값은 숫자여야 합니다.",
	invalidHeight : "높이 값은 숫자여야 합니다.",
	invalidBorder : "굵기 값은 숫자여야 합니다.",
	invalidUrl : "올바른 주소를 입력하세요.",
	invalidRows : '올바른 행이 아닙니다.',
	invalidCols : '올바른 열이 아닙니다.',
	invalidPadding : '안쪽 여백 값은 숫자여야 합니다.',
	invalidSpacing : '간격 길이 값은 숫자여야 합니다.',
	invalidJson : '올바른 JSON 형식이 아닙니다.',
	uploadSuccess : '업로드가 완료되었습니다.',
	cutError : '브라우저가 잘라내기 기능을 지원하지 않습니다, 단축키로 대신 사용하세요. (Ctrl+X)',
	copyError : '브라우저가 복사 기능을 지원하지 않습니다, 단축키로 대신 사용하세요. (Ctrl+X)',
	pasteError : '브라우저가 붙여넣기 기능을 지원하지 않습니다, 단축키로 대신 사용하세요. (Ctrl+X)',
	ajaxLoading : '불러오는 중 ...',
	uploadLoading : '업로드 중 ...',
	uploadError : '업로드 오류',
	'plainpaste.comment' : '단축키(Ctrl+V)를 통하여 여기에 텍스트를 붙여넣으세요.',
	'wordpaste.comment' : '단축키(Ctrl+V)를 통하여 여기에 워드 텍스트를 붙여넣으세요.',
	'code.pleaseInput' : 'Please input code.',
	'link.url' : '주소',
	'link.linkType' : '창',
	'link.newWindow' : '새 창',
	'link.selfWindow' : '현재 창',
	'flash.url' : '주소',
	'flash.width' : '넓이',
	'flash.height' : '높이',
	'flash.upload' : '업로드',
	'flash.viewServer' : '찾아보기',
	'media.url' : '주소',
	'media.width' : '넓이',
	'media.height' : '높이',
	'media.autostart' : '자동 시작',
	'media.upload' : '업로드',
	'media.viewServer' : '찾아보기',
	'image.remoteImage' : '외부 이미지',
	'image.localImage' : '내부 이미지',
	'image.remoteUrl' : '주소',
	'image.localUrl' : '파일',
	'image.size' : '크기',
	'image.width' : '넓이',
	'image.height' : '높이',
	'image.resetSize' : '기본 크기로',
	'image.align' : '정렬',
	'image.defaultAlign' : '기본',
	'image.leftAlign' : '왼쪽',
	'image.rightAlign' : '오른쪽',
	'image.imgTitle' : '제목',
	'image.upload' : '찾아보기',
	'image.viewServer' : '찾아보기',
	'multiimage.uploadDesc' : '최대 이미지 개수: <%=uploadLimit%>개, 개당 이미지 크기: <%=sizeLimit%>',
	'multiimage.startUpload' : '업로드 시작',
	'multiimage.clearAll' : '모두 삭제',
	'multiimage.insertAll' : '모두 삽입',
	'multiimage.queueLimitExceeded' : '업로드 개수가 초과되었습니다.',
	'multiimage.fileExceedsSizeLimit' : '업로드 크기가 초과되었습니다.',
	'multiimage.zeroByteFile' : '파일 크기가 없습니다.',
	'multiimage.invalidFiletype' : '올바른 이미지가 아닙니다.',
	'multiimage.unknownError' : '알 수 없는 업로드 오류가 발생하였습니다.',
	'multiimage.pending' : '처리 중 ...',
	'multiimage.uploadError' : '업로드 오류',
	'filemanager.emptyFolder' : '빈 폴더',
	'filemanager.moveup' : '위로',
	'filemanager.viewType' : '보기 방식: ',
	'filemanager.viewImage' : '미리 보기',
	'filemanager.listImage' : '목록',
	'filemanager.orderType' : '정렬 방식: ',
	'filemanager.fileName' : '이름별',
	'filemanager.fileSize' : '크기별',
	'filemanager.fileType' : '종류별',
	'insertfile.url' : '주소',
	'insertfile.title' : '제목',
	'insertfile.upload' : '업로드',
	'insertfile.viewServer' : '찾아보기',
	'table.cells' : '열',
	'table.rows' : '행',
	'table.cols' : '열',
	'table.size' : '표 크기',
	'table.width' : '넓이',
	'table.height' : '높이',
	'table.percent' : '%',
	'table.px' : 'px',
	'table.space' : '간격',
	'table.padding' : '안쪽여백',
	'table.spacing' : '간격',
	'table.align' : '정렬',
	'table.textAlign' : '수직',
	'table.verticalAlign' : '수평',
	'table.alignDefault' : '기본',
	'table.alignLeft' : '왼쪽',
	'table.alignCenter' : '가운데',
	'table.alignRight' : '오른쪽',
	'table.alignTop' : '위쪽',
	'table.alignMiddle' : '중간',
	'table.alignBottom' : '아래쪽',
	'table.alignBaseline' : '글자기준',
	'table.border' : '테두리',
	'table.borderWidth' : '크기',
	'table.borderColor' : '색상',
	'table.backgroundColor' : '배경',
	'map.address' : '주소: ',
	'map.search' : '검색',
	'baidumap.address' : '주소: ',
	'baidumap.search' : '검색',
	'baidumap.insertDynamicMap' : '동적 지도',
	'anchor.name' : '책갈피명',
	'formatblock.formatBlock' : {
		h1 : '제목 1',
		h2 : '제목 2',
		h3 : '제목 3',
		h4 : '제목 4',
		p : '본문'
	},
	'fontname.fontName' : {
		'Gulim' : '굴림',
		'Dotum' : '돋움',
		'Batang' : '바탕',
		'Gungsuh' : '궁서',
		'Malgun Gothic' : '맑은 고딕',
		'Arial' : 'Arial',
		'Arial Black' : 'Arial Black',
		'Comic Sans MS' : 'Comic Sans MS',
		'Courier New' : 'Courier New',
		'Garamond' : 'Garamond',
		'Georgia' : 'Georgia',
		'Tahoma' : 'Tahoma',
		'Times New Roman' : 'Times New Roman',
		'Trebuchet MS' : 'Trebuchet MS',
		'Verdana' : 'Verdana'
	},
	'lineheight.lineHeight' : [
		{'1' : '행간 1'},
		{'1.5' : '행간 1.5'},
		{'2' : '행간 2'},
		{'2.5' : '행간 2.5'},
		{'3' : '행간 3'}
	],
	'template.selectTemplate' : '템플릿',
	'template.replaceContent' : '내용 바꾸기',
	'template.fileList' : {
		'1.html' : '이미지와 텍스트',
		'2.html' : '표',
		'3.html' : '목록'
	}
}, 'ko');
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.lang({
	source : 'HTML代码',
	preview : '预览',
	undo : '后退(Ctrl+Z)',
	redo : '前进(Ctrl+Y)',
	cut : '剪切(Ctrl+X)',
	copy : '复制(Ctrl+C)',
	paste : '粘贴(Ctrl+V)',
	plainpaste : '粘贴为无格式文本',
	wordpaste : '从Word粘贴',
	selectall : '全选(Ctrl+A)',
	justifyleft : '左对齐',
	justifycenter : '居中',
	justifyright : '右对齐',
	justifyfull : '两端对齐',
	insertorderedlist : '编号',
	insertunorderedlist : '项目符号',
	indent : '增加缩进',
	outdent : '减少缩进',
	subscript : '下标',
	superscript : '上标',
	formatblock : '段落',
	fontname : '字体',
	fontsize : '文字大小',
	forecolor : '文字颜色',
	hilitecolor : '文字背景',
	bold : '粗体(Ctrl+B)',
	italic : '斜体(Ctrl+I)',
	underline : '下划线(Ctrl+U)',
	strikethrough : '删除线',
	removeformat : '删除格式',
	image : '图片',
	multiimage : '批量图片上传',
	flash : 'Flash',
	media : '视音频',
	table : '表格',
	tablecell : '单元格',
	hr : '插入横线',
	emoticons : '插入表情',
	link : '超级链接',
	unlink : '取消超级链接',
	fullscreen : '全屏显示',
	about : '关于',
	print : '打印(Ctrl+P)',
	filemanager : '文件空间',
	code : '插入程序代码',
	map : 'Google地图',
	baidumap : '百度地图',
	lineheight : '行距',
	clearhtml : '清理HTML代码',
	pagebreak : '插入分页符',
	quickformat : '一键排版',
	insertfile : '插入文件',
	template : '插入模板',
	anchor : '锚点',
	yes : '确定',
	no : '取消',
	close : '关闭',
	editImage : '图片属性',
	deleteImage : '删除图片',
	editFlash : 'Flash属性',
	deleteFlash : '删除Flash',
	editMedia : '视音频属性',
	deleteMedia : '删除视音频',
	editLink : '超级链接属性',
	deleteLink : '取消超级链接',
	editAnchor : '锚点属性',
	deleteAnchor : '删除锚点',
	tableprop : '表格属性',
	tablecellprop : '单元格属性',
	tableinsert : '插入表格',
	tabledelete : '删除表格',
	tablecolinsertleft : '左侧插入列',
	tablecolinsertright : '右侧插入列',
	tablerowinsertabove : '上方插入行',
	tablerowinsertbelow : '下方插入行',
	tablerowmerge : '向下合并单元格',
	tablecolmerge : '向右合并单元格',
	tablerowsplit : '拆分行',
	tablecolsplit : '拆分列',
	tablecoldelete : '删除列',
	tablerowdelete : '删除行',
	noColor : '无颜色',
	pleaseSelectFile : '请选择文件。',
	invalidImg : "请输入有效的URL地址。\n只允许jpg,gif,bmp,png格式。",
	invalidMedia : "请输入有效的URL地址。\n只允许swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb格式。",
	invalidWidth : "宽度必须为数字。",
	invalidHeight : "高度必须为数字。",
	invalidBorder : "边框必须为数字。",
	invalidUrl : "请输入有效的URL地址。",
	invalidRows : '行数为必选项，只允许输入大于0的数字。',
	invalidCols : '列数为必选项，只允许输入大于0的数字。',
	invalidPadding : '边距必须为数字。',
	invalidSpacing : '间距必须为数字。',
	invalidJson : '服务器发生故障。',
	uploadSuccess : '上传成功。',
	cutError : '您的浏览器安全设置不允许使用剪切操作，请使用快捷键(Ctrl+X)来完成。',
	copyError : '您的浏览器安全设置不允许使用复制操作，请使用快捷键(Ctrl+C)来完成。',
	pasteError : '您的浏览器安全设置不允许使用粘贴操作，请使用快捷键(Ctrl+V)来完成。',
	ajaxLoading : '加载中，请稍候 ...',
	uploadLoading : '上传中，请稍候 ...',
	uploadError : '上传错误',
	'plainpaste.comment' : '请使用快捷键(Ctrl+V)把内容粘贴到下面的方框里。',
	'wordpaste.comment' : '请使用快捷键(Ctrl+V)把内容粘贴到下面的方框里。',
	'code.pleaseInput' : '请输入程序代码。',
	'link.url' : 'URL',
	'link.linkType' : '打开类型',
	'link.newWindow' : '新窗口',
	'link.selfWindow' : '当前窗口',
	'flash.url' : 'URL',
	'flash.width' : '宽度',
	'flash.height' : '高度',
	'flash.upload' : '上传',
	'flash.viewServer' : '文件空间',
	'media.url' : 'URL',
	'media.width' : '宽度',
	'media.height' : '高度',
	'media.autostart' : '自动播放',
	'media.upload' : '上传',
	'media.viewServer' : '文件空间',
	'image.remoteImage' : '网络图片',
	'image.localImage' : '本地上传',
	'image.remoteUrl' : '图片地址',
	'image.localUrl' : '上传文件',
	'image.size' : '图片大小',
	'image.width' : '宽',
	'image.height' : '高',
	'image.resetSize' : '重置大小',
	'image.align' : '对齐方式',
	'image.defaultAlign' : '默认方式',
	'image.leftAlign' : '左对齐',
	'image.rightAlign' : '右对齐',
	'image.imgTitle' : '图片说明',
	'image.upload' : '浏览...',
	'image.viewServer' : '图片空间',
	'multiimage.uploadDesc' : '允许用户同时上传<%=uploadLimit%>张图片，单张图片容量不超过<%=sizeLimit%>',
	'multiimage.startUpload' : '开始上传',
	'multiimage.clearAll' : '全部清空',
	'multiimage.insertAll' : '全部插入',
	'multiimage.queueLimitExceeded' : '文件数量超过限制。',
	'multiimage.fileExceedsSizeLimit' : '文件大小超过限制。',
	'multiimage.zeroByteFile' : '无法上传空文件。',
	'multiimage.invalidFiletype' : '文件类型不正确。',
	'multiimage.unknownError' : '发生异常，无法上传。',
	'multiimage.pending' : '等待上传',
	'multiimage.uploadError' : '上传失败',
	'filemanager.emptyFolder' : '空文件夹',
	'filemanager.moveup' : '移到上一级文件夹',
	'filemanager.viewType' : '显示方式：',
	'filemanager.viewImage' : '缩略图',
	'filemanager.listImage' : '详细信息',
	'filemanager.orderType' : '排序方式：',
	'filemanager.fileName' : '名称',
	'filemanager.fileSize' : '大小',
	'filemanager.fileType' : '类型',
	'insertfile.url' : 'URL',
	'insertfile.title' : '文件说明',
	'insertfile.upload' : '上传',
	'insertfile.viewServer' : '文件空间',
	'table.cells' : '单元格数',
	'table.rows' : '行数',
	'table.cols' : '列数',
	'table.size' : '大小',
	'table.width' : '宽度',
	'table.height' : '高度',
	'table.percent' : '%',
	'table.px' : 'px',
	'table.space' : '边距间距',
	'table.padding' : '边距',
	'table.spacing' : '间距',
	'table.align' : '对齐方式',
	'table.textAlign' : '水平对齐',
	'table.verticalAlign' : '垂直对齐',
	'table.alignDefault' : '默认',
	'table.alignLeft' : '左对齐',
	'table.alignCenter' : '居中',
	'table.alignRight' : '右对齐',
	'table.alignTop' : '顶部',
	'table.alignMiddle' : '中部',
	'table.alignBottom' : '底部',
	'table.alignBaseline' : '基线',
	'table.border' : '边框',
	'table.borderWidth' : '边框',
	'table.borderColor' : '颜色',
	'table.backgroundColor' : '背景颜色',
	'map.address' : '地址: ',
	'map.search' : '搜索',
	'baidumap.address' : '地址: ',
	'baidumap.search' : '搜索',
	'baidumap.insertDynamicMap' : '插入动态地图',
	'anchor.name' : '锚点名称',
	'formatblock.formatBlock' : {
		h1 : '标题 1',
		h2 : '标题 2',
		h3 : '标题 3',
		h4 : '标题 4',
		p : '正 文'
	},
	'fontname.fontName' : {
		'SimSun' : '宋体',
		'NSimSun' : '新宋体',
		'FangSong_GB2312' : '仿宋_GB2312',
		'KaiTi_GB2312' : '楷体_GB2312',
		'SimHei' : '黑体',
		'Microsoft YaHei' : '微软雅黑',
		'Arial' : 'Arial',
		'Arial Black' : 'Arial Black',
		'Times New Roman' : 'Times New Roman',
		'Courier New' : 'Courier New',
		'Tahoma' : 'Tahoma',
		'Verdana' : 'Verdana'
	},
	'lineheight.lineHeight' : [
		{'1' : '单倍行距'},
		{'1.5' : '1.5倍行距'},
		{'2' : '2倍行距'},
		{'2.5' : '2.5倍行距'},
		{'3' : '3倍行距'}
	],
	'template.selectTemplate' : '可选模板',
	'template.replaceContent' : '替换当前内容',
	'template.fileList' : {
		'1.html' : '图片和文字',
		'2.html' : '表格',
		'3.html' : '项目编号'
	}
}, 'zh_CN');
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.lang({
	source : '原始碼',
	preview : '預覽',
	undo : '復原(Ctrl+Z)',
	redo : '重複(Ctrl+Y)',
	cut : '剪下(Ctrl+X)',
	copy : '複製(Ctrl+C)',
	paste : '貼上(Ctrl+V)',
	plainpaste : '貼為純文字格式',
	wordpaste : '自Word貼上',
	selectall : '全選(Ctrl+A)',
	justifyleft : '靠左對齊',
	justifycenter : '置中',
	justifyright : '靠右對齊',
	justifyfull : '左右對齊',
	insertorderedlist : '編號清單',
	insertunorderedlist : '項目清單',
	indent : '增加縮排',
	outdent : '減少縮排',
	subscript : '下標',
	superscript : '上標',
	formatblock : '標題',
	fontname : '字體',
	fontsize : '文字大小',
	forecolor : '文字顏色',
	hilitecolor : '背景顏色',
	bold : '粗體(Ctrl+B)',
	italic : '斜體(Ctrl+I)',
	underline : '底線(Ctrl+U)',
	strikethrough : '刪除線',
	removeformat : '清除格式',
	image : '影像',
	multiimage : '批量影像上傳',
	flash : 'Flash',
	media : '多媒體',
	table : '表格',
	hr : '插入水平線',
	emoticons : '插入表情',
	link : '超連結',
	unlink : '移除超連結',
	fullscreen : '最大化',
	about : '關於',
	print : '列印(Ctrl+P)',
	fileManager : '瀏覽伺服器',
	code : '插入程式代碼',
	map : 'Google地圖',
	baidumap : 'Baidu地圖',
	lineheight : '行距',
	clearhtml : '清理HTML代碼',
	pagebreak : '插入分頁符號',
	quickformat : '快速排版',
	insertfile : '插入文件',
	template : '插入樣板',
	anchor : '錨點',
	yes : '確定',
	no : '取消',
	close : '關閉',
	editImage : '影像屬性',
	deleteImage : '刪除影像',
	editFlash : 'Flash屬性',
	deleteFlash : '删除Flash',
	editMedia : '多媒體屬性',
	deleteMedia : '删除多媒體',
	editLink : '超連結屬性',
	deleteLink : '移除超連結',
	tableprop : '表格屬性',
	tablecellprop : '儲存格屬性',
	tableinsert : '插入表格',
	tabledelete : '刪除表格',
	tablecolinsertleft : '向左插入列',
	tablecolinsertright : '向右插入列',
	tablerowinsertabove : '向上插入欄',
	tablerowinsertbelow : '下方插入欄',
	tablerowmerge : '向下合併單元格',
	tablecolmerge : '向右合併單元格',
	tablerowsplit : '分割欄',
	tablecolsplit : '分割列',
	tablecoldelete : '删除列',
	tablerowdelete : '删除欄',
	noColor : '自動',
	pleaseSelectFile : '請選擇文件。',
	invalidImg : "請輸入有效的URL。\n只允許jpg,gif,bmp,png格式。",
	invalidMedia : "請輸入有效的URL。\n只允許swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb格式。",
	invalidWidth : "寬度必須是數字。",
	invalidHeight : "高度必須是數字。",
	invalidBorder : "邊框必須是數字。",
	invalidUrl : "請輸入有效的URL。",
	invalidRows : '欄數是必須輸入項目，只允許輸入大於0的數字。',
	invalidCols : '列數是必須輸入項目，只允許輸入大於0的數字。',
	invalidPadding : '內距必須是數字。',
	invalidSpacing : '間距必須是數字。',
	invalidBorder : '边框必须为数字。',
	pleaseInput : "請輸入內容。",
	invalidJson : '伺服器發生故障。',
	uploadSuccess : '上傳成功。',
	cutError : '您的瀏覽器安全設置不允許使用剪下操作，請使用快捷鍵(Ctrl+X)完成。',
	copyError : '您的瀏覽器安全設置不允許使用剪下操作，請使用快捷鍵(Ctrl+C)完成。',
	pasteError : '您的瀏覽器安全設置不允許使用剪下操作，請使用快捷鍵(Ctrl+V)完成。',
	ajaxLoading : '加載中，請稍候 ...',
	uploadLoading : '上傳中，請稍候 ...',
	uploadError : '上傳錯誤',
	'plainpaste.comment' : '請使用快捷鍵(Ctrl+V)把內容貼到下方區域裡。',
	'wordpaste.comment' : '請使用快捷鍵(Ctrl+V)把內容貼到下方區域裡。',
	'code.pleaseInput' : 'Please input code.',
	'link.url' : 'URL',
	'link.linkType' : '打開類型',
	'link.newWindow' : '新窗口',
	'link.selfWindow' : '本頁窗口',
	'flash.url' : 'URL',
	'flash.width' : '寬度',
	'flash.height' : '高度',
	'flash.upload' : '上傳',
	'flash.viewServer' : '瀏覽',
	'media.url' : 'URL',
	'media.width' : '寬度',
	'media.height' : '高度',
	'media.autostart' : '自動播放',
	'media.upload' : '上傳',
	'media.viewServer' : '瀏覽',
	'image.remoteImage' : '網絡影像',
	'image.localImage' : '上傳影像',
	'image.remoteUrl' : '影像URL',
	'image.localUrl' : '影像URL',
	'image.size' : '影像大小',
	'image.width' : '寬度',
	'image.height' : '高度',
	'image.resetSize' : '原始大小',
	'image.align' : '對齊方式',
	'image.defaultAlign' : '未設定',
	'image.leftAlign' : '向左對齊',
	'image.rightAlign' : '向右對齊',
	'image.imgTitle' : '影像說明',
	'image.upload' : '瀏覽...',
	'image.viewServer' : '瀏覽...',
	'multiimage.uploadDesc' : 'Allows users to upload <%=uploadLimit%> images, single image size not exceeding <%=sizeLimit%>',
	'multiimage.startUpload' : 'Start upload',
	'multiimage.clearAll' : 'Clear all',
	'multiimage.insertAll' : 'Insert all',
	'multiimage.queueLimitExceeded' : 'Queue limit exceeded.',
	'multiimage.fileExceedsSizeLimit' : 'File exceeds size limit.',
	'multiimage.zeroByteFile' : 'Zero byte file.',
	'multiimage.invalidFiletype' : 'Invalid file type.',
	'multiimage.unknownError' : 'Unknown upload error.',
	'multiimage.pending' : 'Pending ...',
	'multiimage.uploadError' : 'Upload error',
	'filemanager.emptyFolder' : '空文件夾',
	'filemanager.moveup' : '至上一級文件夾',
	'filemanager.viewType' : '顯示方式：',
	'filemanager.viewImage' : '縮略圖',
	'filemanager.listImage' : '詳細信息',
	'filemanager.orderType' : '排序方式：',
	'filemanager.fileName' : '名稱',
	'filemanager.fileSize' : '大小',
	'filemanager.fileType' : '類型',
	'insertfile.url' : 'URL',
	'insertfile.title' : '文件說明',
	'insertfile.upload' : '上傳',
	'insertfile.viewServer' : '瀏覽',
	'table.cells' : '儲存格數',
	'table.rows' : '欄數',
	'table.cols' : '列數',
	'table.size' : '表格大小',
	'table.width' : '寬度',
	'table.height' : '高度',
	'table.percent' : '%',
	'table.px' : 'px',
	'table.space' : '內距間距',
	'table.padding' : '內距',
	'table.spacing' : '間距',
	'table.align' : '對齊方式',
	'table.textAlign' : '水平對齊',
	'table.verticalAlign' : '垂直對齊',
	'table.alignDefault' : '未設定',
	'table.alignLeft' : '向左對齊',
	'table.alignCenter' : '置中',
	'table.alignRight' : '向右對齊',
	'table.alignTop' : '靠上',
	'table.alignMiddle' : '置中',
	'table.alignBottom' : '靠下',
	'table.alignBaseline' : '基線',
	'table.border' : '表格邊框',
	'table.borderWidth' : '邊框',
	'table.borderColor' : '顏色',
	'table.backgroundColor' : '背景顏色',
	'map.address' : '住所: ',
	'map.search' : '尋找',
	'baidumap.address' : '住所: ',
	'baidumap.search' : '尋找',
	'baidumap.insertDynamicMap' : '插入動態地圖',
	'anchor.name' : '錨點名稱',
	'formatblock.formatBlock' : {
		h1 : '標題 1',
		h2 : '標題 2',
		h3 : '標題 3',
		h4 : '標題 4',
		p : '一般'
	},
	'fontname.fontName' : {
		'MingLiU' : '細明體',
		'PMingLiU' : '新細明體',
		'DFKai-SB' : '標楷體',
		'SimSun' : '宋體',
		'NSimSun' : '新宋體',
		'FangSong' : '仿宋體',
		'Arial' : 'Arial',
		'Arial Black' : 'Arial Black',
		'Times New Roman' : 'Times New Roman',
		'Courier New' : 'Courier New',
		'Tahoma' : 'Tahoma',
		'Verdana' : 'Verdana'
	},
	'lineheight.lineHeight' : [
		{'1' : '单倍行距'},
		{'1.5' : '1.5倍行距'},
		{'2' : '2倍行距'},
		{'2.5' : '2.5倍行距'},
		{'3' : '3倍行距'}
	],
	'template.selectTemplate' : '可選樣板',
	'template.replaceContent' : '取代當前內容',
	'template.fileList' : {
		'1.html' : '影像和文字',
		'2.html' : '表格',
		'3.html' : '项目清單'
	}
}, 'zh_TW');
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('anchor', function(K) {
	var self = this, name = 'anchor', lang = self.lang(name + '.');
	self.plugin.anchor = {
		edit : function() {
			var html = ['<div style="padding:20px;">',
					'<div class="ke-dialog-row">',
					'<label for="keName">' + lang.name + '</label>',
					'<input class="ke-input-text" type="text" id="keName" name="name" value="" style="width:100px;" />',
					'</div>',
					'</div>'].join('');
			var dialog = self.createDialog({
				name : name,
				width : 300,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						self.insertHtml('<a name="' + nameBox.val() + '">').hideDialog().focus();
					}
				}
			});
			var div = dialog.div,
				nameBox = K('input[name="name"]', div);
			var img = self.plugin.getSelectedAnchor();
			if (img) {
				nameBox.val(unescape(img.attr('data-ke-name')));
			}
			nameBox[0].focus();
			nameBox[0].select();
		},
		'delete' : function() {
			self.plugin.getSelectedAnchor().remove();
		}
	};
	self.clickToolbar(name, self.plugin.anchor.edit);
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('autoheight', function(K) {
	var self = this;

	if (!self.autoHeightMode) {
		return;
	}

	var edit = self.edit;
	var body = edit.doc.body;
	var minHeight = K.removeUnit(self.height);

	edit.iframe[0].scroll = 'no';
	body.style.overflowY = 'hidden';

	edit.afterChange(function() {
		self.resize(null, Math.max((K.IE ? body.scrollHeight : body.offsetHeight) + 62, minHeight));
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

// Baidu Maps: http://dev.baidu.com/wiki/map/index.php?title=%E9%A6%96%E9%A1%B5

KindEditor.plugin('baidumap', function(K) {
	var self = this, name = 'baidumap', lang = self.lang(name + '.');
	var mapWidth = K.undef(self.mapWidth, 558);
	var mapHeight = K.undef(self.mapHeight, 360);
	self.clickToolbar(name, function() {
		var html = ['<div style="padding:10px 20px;">',
			'<div class="ke-header">',
			// left start
			'<div class="ke-left">',
			lang.address + ' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ',
			'<span class="ke-button-common ke-button-outer">',
			'<input type="button" name="searchBtn" class="ke-button-common ke-button" value="' + lang.search + '" />',
			'</span>',
			'</div>',
			// right start
			'<div class="ke-right">',
			'<input type="checkbox" id="keInsertDynamicMap" name="insertDynamicMap" value="1" /> <label for="keInsertDynamicMap">' + lang.insertDynamicMap + '</label>',
			'</div>',
			'<div class="ke-clearfix"></div>',
			'</div>',
			'<div class="ke-map" style="width:' + mapWidth + 'px;height:' + mapHeight + 'px;"></div>',
			'</div>'].join('');
		var dialog = self.createDialog({
			name : name,
			width : mapWidth + 42,
			title : self.lang(name),
			body : html,
			yesBtn : {
				name : self.lang('yes'),
				click : function(e) {
					var map = win.map;
					var centerObj = map.getCenter();
					var center = centerObj.lng + ',' + centerObj.lat;
					var zoom = map.getZoom();
					var url = [checkbox[0].checked ? self.pluginsPath + 'baidumap/index.html' : 'http://api.map.baidu.com/staticimage',
						'?center=' + encodeURIComponent(center),
						'&zoom=' + encodeURIComponent(zoom),
						'&width=' + mapWidth,
						'&height=' + mapHeight,
						'&markers=' + encodeURIComponent(center),
						'&markerStyles=' + encodeURIComponent('l,A')].join('');
					if (checkbox[0].checked) {
						self.insertHtml('<iframe src="' + url + '" frameborder="0" style="width:' + (mapWidth + 2) + 'px;height:' + (mapHeight + 2) + 'px;"></iframe>');
					} else {
						self.exec('insertimage', url);
					}
					self.hideDialog().focus();
				}
			},
			beforeRemove : function() {
				searchBtn.remove();
				if (doc) {
					doc.write('');
				}
				iframe.remove();
			}
		});
		var div = dialog.div,
			addressBox = K('[name="address"]', div),
			searchBtn = K('[name="searchBtn"]', div),
			checkbox = K('[name="insertDynamicMap"]', dialog.div),
			win, doc;
		var iframe = K('<iframe class="ke-textarea" frameborder="0" src="' + self.pluginsPath + 'baidumap/map.html" style="width:' + mapWidth + 'px;height:' + mapHeight + 'px;"></iframe>');
		function ready() {
			win = iframe[0].contentWindow;
			doc = K.iframeDoc(iframe);
		}
		iframe.bind('load', function() {
			iframe.unbind('load');
			if (K.IE) {
				ready();
			} else {
				setTimeout(ready, 0);
			}
		});
		K('.ke-map', div).replaceWith(iframe);
		// search map
		searchBtn.click(function() {
			win.search(addressBox.val());
		});
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('clearhtml', function(K) {
	var self = this, name = 'clearhtml';
	self.clickToolbar(name, function() {
		self.focus();
		var html = self.html();
		html = html.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/ig, '');
		html = html.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/ig, '');
		html = K.formatHtml(html, {
			a : ['href', 'target'],
			embed : ['src', 'width', 'height', 'type', 'loop', 'autostart', 'quality', '.width', '.height', 'align', 'allowscriptaccess'],
			img : ['src', 'width', 'height', 'border', 'alt', 'title', '.width', '.height'],
			table : ['border'],
			'td,th' : ['rowspan', 'colspan'],
			'div,hr,br,tbody,tr,p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6' : []
		});
		self.html(html);
		self.cmd.selection(true);
		self.addBookmark();
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

// google code prettify: http://google-code-prettify.googlecode.com/
// http://google-code-prettify.googlecode.com/

KindEditor.plugin('code', function(K) {
	var self = this, name = 'code';
	self.clickToolbar(name, function() {
		var lang = self.lang(name + '.'),
			html = ['<div style="padding:10px 20px;">',
				'<div class="ke-dialog-row">',
				'<select class="ke-code-type">',
				'<option value="js">JavaScript</option>',
				'<option value="html">HTML</option>',
				'<option value="css">CSS</option>',
				'<option value="php">PHP</option>',
				'<option value="pl">Perl</option>',
				'<option value="py">Python</option>',
				'<option value="rb">Ruby</option>',
				'<option value="java">Java</option>',
				'<option value="vb">ASP/VB</option>',
				'<option value="cpp">C/C++</option>',
				'<option value="cs">C#</option>',
				'<option value="xml">XML</option>',
				'<option value="bsh">Shell</option>',
				'<option value="">Other</option>',
				'</select>',
				'</div>',
				'<textarea class="ke-textarea" style="width:408px;height:260px;"></textarea>',
				'</div>'].join(''),
			dialog = self.createDialog({
				name : name,
				width : 450,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var type = K('.ke-code-type', dialog.div).val(),
							code = textarea.val(),
							cls = type === '' ? '' :  ' lang-' + type,
							html = '<pre class="prettyprint' + cls + '">\n' + K.escape(code) + '</pre> ';
						if (K.trim(code) === '') {
							alert(lang.pleaseInput);
							textarea[0].focus();
							return;
						}
						self.insertHtml(html).hideDialog().focus();
					}
				}
			}),
			textarea = K('textarea', dialog.div);
		textarea[0].focus();
	});
});
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('emoticons', function(K) {
	var self = this, name = 'emoticons',
		path = (self.emoticonsPath || self.pluginsPath + 'emoticons/images/'),
		allowPreview = self.allowPreviewEmoticons === undefined ? true : self.allowPreviewEmoticons,
		currentPageNum = 1;
	self.clickToolbar(name, function() {
		var rows = 5, cols = 9, total = 135, startNum = 0,
			cells = rows * cols, pages = Math.ceil(total / cells),
			colsHalf = Math.floor(cols / 2),
			wrapperDiv = K('<div class="ke-plugin-emoticons"></div>'),
			elements = [],
			menu = self.createMenu({
				name : name,
				beforeRemove : function() {
					removeEvent();
				}
			});
		menu.div.append(wrapperDiv);
		var previewDiv, previewImg;
		if (allowPreview) {
			previewDiv = K('<div class="ke-preview"></div>').css('right', 0);
			previewImg = K('<img class="ke-preview-img" src="' + path + startNum + '.gif" />');
			wrapperDiv.append(previewDiv);
			previewDiv.append(previewImg);
		}
		function bindCellEvent(cell, j, num) {
			if (previewDiv) {
				cell.mouseover(function() {
					if (j > colsHalf) {
						previewDiv.css('left', 0);
						previewDiv.css('right', '');
					} else {
						previewDiv.css('left', '');
						previewDiv.css('right', 0);
					}
					previewImg.attr('src', path + num + '.gif');
					K(this).addClass('ke-on');
				});
			} else {
				cell.mouseover(function() {
					K(this).addClass('ke-on');
				});
			}
			cell.mouseout(function() {
				K(this).removeClass('ke-on');
			});
			cell.click(function(e) {
				self.insertHtml('<img src="' + path + num + '.gif" border="0" alt="" />').hideMenu().focus();
				e.stop();
			});
		}
		function createEmoticonsTable(pageNum, parentDiv) {
			var table = document.createElement('table');
			parentDiv.append(table);
			if (previewDiv) {
				K(table).mouseover(function() {
					previewDiv.show('block');
				});
				K(table).mouseout(function() {
					previewDiv.hide();
				});
				elements.push(K(table));
			}
			table.className = 'ke-table';
			table.cellPadding = 0;
			table.cellSpacing = 0;
			table.border = 0;
			var num = (pageNum - 1) * cells + startNum;
			for (var i = 0; i < rows; i++) {
				var row = table.insertRow(i);
				for (var j = 0; j < cols; j++) {
					var cell = K(row.insertCell(j));
					cell.addClass('ke-cell');
					bindCellEvent(cell, j, num);
					var span = K('<span class="ke-img"></span>')
						.css('background-position', '-' + (24 * num) + 'px 0px')
						.css('background-image', 'url(' + path + 'static.gif)');
					cell.append(span);
					elements.push(cell);
					num++;
				}
			}
			return table;
		}
		var table = createEmoticonsTable(currentPageNum, wrapperDiv);
		function removeEvent() {
			K.each(elements, function() {
				this.unbind();
			});
		}
		var pageDiv;
		function bindPageEvent(el, pageNum) {
			el.click(function(e) {
				removeEvent();
				table.parentNode.removeChild(table);
				pageDiv.remove();
				table = createEmoticonsTable(pageNum, wrapperDiv);
				createPageTable(pageNum);
				currentPageNum = pageNum;
				e.stop();
			});
		}
		function createPageTable(currentPageNum) {
			pageDiv = K('<div class="ke-page"></div>');
			wrapperDiv.append(pageDiv);
			for (var pageNum = 1; pageNum <= pages; pageNum++) {
				if (currentPageNum !== pageNum) {
					var a = K('<a href="javascript:;">[' + pageNum + ']</a>');
					bindPageEvent(a, pageNum);
					pageDiv.append(a);
					elements.push(a);
				} else {
					pageDiv.append(K('@[' + pageNum + ']'));
				}
				pageDiv.append(K('@&nbsp;'));
			}
		}
		createPageTable(currentPageNum);
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('filemanager', function(K) {
	var self = this, name = 'filemanager',
		fileManagerJson = K.undef(self.fileManagerJson, self.basePath + 'php/file_manager_json.php'),
		imgPath = self.pluginsPath + name + '/images/',
		lang = self.lang(name + '.');
	function makeFileTitle(filename, filesize, datetime) {
		return filename + ' (' + Math.ceil(filesize / 1024) + 'KB, ' + datetime + ')';
	}
	function bindTitle(el, data) {
		if (data.is_dir) {
			el.attr('title', data.filename);
		} else {
			el.attr('title', makeFileTitle(data.filename, data.filesize, data.datetime));
		}
	}
	self.plugin.filemanagerDialog = function(options) {
		var width = K.undef(options.width, 650),
			height = K.undef(options.height, 510),
			dirName = K.undef(options.dirName, ''),
			viewType = K.undef(options.viewType, 'VIEW').toUpperCase(), // "LIST" or "VIEW"
			clickFn = options.clickFn;
		var html = [
			'<div style="padding:10px 20px;">',
			// header start
			'<div class="ke-plugin-filemanager-header">',
			// left start
			'<div class="ke-left">',
			'<img class="ke-inline-block" name="moveupImg" src="' + imgPath + 'go-up.gif" width="16" height="16" border="0" alt="" /> ',
			'<a class="ke-inline-block" name="moveupLink" href="javascript:;">' + lang.moveup + '</a>',
			'</div>',
			// right start
			'<div class="ke-right">',
			lang.viewType + ' <select class="ke-inline-block" name="viewType">',
			'<option value="VIEW">' + lang.viewImage + '</option>',
			'<option value="LIST">' + lang.listImage + '</option>',
			'</select> ',
			lang.orderType + ' <select class="ke-inline-block" name="orderType">',
			'<option value="NAME">' + lang.fileName + '</option>',
			'<option value="SIZE">' + lang.fileSize + '</option>',
			'<option value="TYPE">' + lang.fileType + '</option>',
			'</select>',
			'</div>',
			'<div class="ke-clearfix"></div>',
			'</div>',
			// body start
			'<div class="ke-plugin-filemanager-body"></div>',
			'</div>'
		].join('');
		var dialog = self.createDialog({
			name : name,
			width : width,
			height : height,
			title : self.lang(name),
			body : html
		}),
		div = dialog.div,
		bodyDiv = K('.ke-plugin-filemanager-body', div),
		moveupImg = K('[name="moveupImg"]', div),
		moveupLink = K('[name="moveupLink"]', div),
		viewServerBtn = K('[name="viewServer"]', div),
		viewTypeBox = K('[name="viewType"]', div),
		orderTypeBox = K('[name="orderType"]', div);
		function reloadPage(path, order, func) {
			var param = 'path=' + path + '&order=' + order + '&dir=' + dirName;
			dialog.showLoading(self.lang('ajaxLoading'));
			K.ajax(K.addParam(fileManagerJson, param + '&' + new Date().getTime()), function(data) {
				dialog.hideLoading();
				func(data);
			});
		}
		var elList = [];
		function bindEvent(el, result, data, createFunc) {
			var fileUrl = K.formatUrl(result.current_url + data.filename, 'absolute'),
				dirPath = encodeURIComponent(result.current_dir_path + data.filename + '/');
			if (data.is_dir) {
				el.click(function(e) {
					reloadPage(dirPath, orderTypeBox.val(), createFunc);
				});
			} else if (data.is_photo) {
				el.click(function(e) {
					clickFn.call(this, fileUrl, data.filename);
				});
			} else {
				el.click(function(e) {
					clickFn.call(this, fileUrl, data.filename);
				});
			}
			elList.push(el);
		}
		function createCommon(result, createFunc) {
			// remove events
			K.each(elList, function() {
				this.unbind();
			});
			moveupLink.unbind();
			viewTypeBox.unbind();
			orderTypeBox.unbind();
			// add events
			if (result.current_dir_path) {
				moveupLink.click(function(e) {
					reloadPage(result.moveup_dir_path, orderTypeBox.val(), createFunc);
				});
			}
			function changeFunc() {
				if (viewTypeBox.val() == 'VIEW') {
					reloadPage(result.current_dir_path, orderTypeBox.val(), createView);
				} else {
					reloadPage(result.current_dir_path, orderTypeBox.val(), createList);
				}
			}
			viewTypeBox.change(changeFunc);
			orderTypeBox.change(changeFunc);
			bodyDiv.html('');
		}
		function createList(result) {
			createCommon(result, createList);
			var table = document.createElement('table');
			table.className = 'ke-table';
			table.cellPadding = 0;
			table.cellSpacing = 0;
			table.border = 0;
			bodyDiv.append(table);
			var fileList = result.file_list;
			for (var i = 0, len = fileList.length; i < len; i++) {
				var data = fileList[i], row = K(table.insertRow(i));
				row.mouseover(function(e) {
					K(this).addClass('ke-on');
				})
				.mouseout(function(e) {
					K(this).removeClass('ke-on');
				});
				var iconUrl = imgPath + (data.is_dir ? 'folder-16.gif' : 'file-16.gif'),
					img = K('<img src="' + iconUrl + '" width="16" height="16" alt="' + data.filename + '" align="absmiddle" />'),
					cell0 = K(row[0].insertCell(0)).addClass('ke-cell ke-name').append(img).append(document.createTextNode(' ' + data.filename));
				if (!data.is_dir || data.has_file) {
					row.css('cursor', 'pointer');
					cell0.attr('title', data.filename);
					bindEvent(cell0, result, data, createList);
				} else {
					cell0.attr('title', lang.emptyFolder);
				}
				K(row[0].insertCell(1)).addClass('ke-cell ke-size').html(data.is_dir ? '-' : Math.ceil(data.filesize / 1024) + 'KB');
				K(row[0].insertCell(2)).addClass('ke-cell ke-datetime').html(data.datetime);
			}
		}
		function createView(result) {
			createCommon(result, createView);
			var fileList = result.file_list;
			for (var i = 0, len = fileList.length; i < len; i++) {
				var data = fileList[i],
					div = K('<div class="ke-inline-block ke-item"></div>');
				bodyDiv.append(div);
				var photoDiv = K('<div class="ke-inline-block ke-photo"></div>')
					.mouseover(function(e) {
						K(this).addClass('ke-on');
					})
					.mouseout(function(e) {
						K(this).removeClass('ke-on');
					});
				div.append(photoDiv);
				var fileUrl = result.current_url + data.filename,
					iconUrl = data.is_dir ? imgPath + 'folder-64.gif' : (data.is_photo ? fileUrl : imgPath + 'file-64.gif');
				var img = K('<img src="' + iconUrl + '" width="80" height="80" alt="' + data.filename + '" />');
				if (!data.is_dir || data.has_file) {
					photoDiv.css('cursor', 'pointer');
					bindTitle(photoDiv, data);
					bindEvent(photoDiv, result, data, createView);
				} else {
					photoDiv.attr('title', lang.emptyFolder);
				}
				photoDiv.append(img);
				div.append('<div class="ke-name" title="' + data.filename + '">' + data.filename + '</div>');
			}
		}
		viewTypeBox.val(viewType);
		reloadPage('', orderTypeBox.val(), viewType == 'VIEW' ? createView : createList);
		return dialog;
	}

});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('flash', function(K) {
	var self = this, name = 'flash', lang = self.lang(name + '.'),
		allowFlashUpload = K.undef(self.allowFlashUpload, true),
		allowFileManager = K.undef(self.allowFileManager, false),
		formatUploadUrl = K.undef(self.formatUploadUrl, true),
		extraParams = K.undef(self.extraFileUploadParams, {}),
		filePostName = K.undef(self.filePostName, 'imgFile'),
		uploadJson = K.undef(self.uploadJson, self.basePath + 'php/upload_json.php');
	self.plugin.flash = {
		edit : function() {
			var html = [
				'<div style="padding:20px;">',
				//url
				'<div class="ke-dialog-row">',
				'<label for="keUrl" style="width:60px;">' + lang.url + '</label>',
				'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;',
				'<input type="button" class="ke-upload-button" value="' + lang.upload + '" /> &nbsp;',
				'<span class="ke-button-common ke-button-outer">',
				'<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + lang.viewServer + '" />',
				'</span>',
				'</div>',
				//width
				'<div class="ke-dialog-row">',
				'<label for="keWidth" style="width:60px;">' + lang.width + '</label>',
				'<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /> ',
				'</div>',
				//height
				'<div class="ke-dialog-row">',
				'<label for="keHeight" style="width:60px;">' + lang.height + '</label>',
				'<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /> ',
				'</div>',
				'</div>'
			].join('');
			var dialog = self.createDialog({
				name : name,
				width : 450,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var url = K.trim(urlBox.val()),
							width = widthBox.val(),
							height = heightBox.val();
						if (url == 'http://' || K.invalidUrl(url)) {
							alert(self.lang('invalidUrl'));
							urlBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(width)) {
							alert(self.lang('invalidWidth'));
							widthBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(height)) {
							alert(self.lang('invalidHeight'));
							heightBox[0].focus();
							return;
						}
						var html = K.mediaImg(self.themesPath + 'common/blank.gif', {
								src : url,
								type : K.mediaType('.swf'),
								width : width,
								height : height,
								quality : 'high'
							});
						self.insertHtml(html).hideDialog().focus();
					}
				}
			}),
			div = dialog.div,
			urlBox = K('[name="url"]', div),
			viewServerBtn = K('[name="viewServer"]', div),
			widthBox = K('[name="width"]', div),
			heightBox = K('[name="height"]', div);
			urlBox.val('http://');

			if (allowFlashUpload) {
				var uploadbutton = K.uploadbutton({
					button : K('.ke-upload-button', div)[0],
					fieldName : filePostName,
					extraParams : extraParams,
					url : K.addParam(uploadJson, 'dir=flash'),
					afterUpload : function(data) {
						dialog.hideLoading();
						if (data.error === 0) {
							var url = data.url;
							if (formatUploadUrl) {
								url = K.formatUrl(url, 'absolute');
							}
							urlBox.val(url);
							if (self.afterUpload) {
								self.afterUpload.call(self, url, data, name);
							}
							alert(self.lang('uploadSuccess'));
						} else {
							alert(data.message);
						}
					},
					afterError : function(html) {
						dialog.hideLoading();
						self.errorDialog(html);
					}
				});
				uploadbutton.fileBox.change(function(e) {
					dialog.showLoading(self.lang('uploadLoading'));
					uploadbutton.submit();
				});
			} else {
				K('.ke-upload-button', div).hide();
			}

			if (allowFileManager) {
				viewServerBtn.click(function(e) {
					self.loadPlugin('filemanager', function() {
						self.plugin.filemanagerDialog({
							viewType : 'LIST',
							dirName : 'flash',
							clickFn : function(url, title) {
								if (self.dialogs.length > 1) {
									K('[name="url"]', div).val(url);
									if (self.afterSelectFile) {
										self.afterSelectFile.call(self, url);
									}
									self.hideDialog();
								}
							}
						});
					});
				});
			} else {
				viewServerBtn.hide();
			}

			var img = self.plugin.getSelectedFlash();
			if (img) {
				var attrs = K.mediaAttrs(img.attr('data-ke-tag'));
				urlBox.val(attrs.src);
				widthBox.val(K.removeUnit(img.css('width')) || attrs.width || 0);
				heightBox.val(K.removeUnit(img.css('height')) || attrs.height || 0);
			}
			urlBox[0].focus();
			urlBox[0].select();
		},
		'delete' : function() {
			self.plugin.getSelectedFlash().remove();
			// [IE] 删除图片后立即点击图片按钮出错
			self.addBookmark();
		}
	};
	self.clickToolbar(name, self.plugin.flash.edit);
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('image', function(K) {
	var self = this, name = 'image',
		allowImageUpload = K.undef(self.allowImageUpload, true),
		allowImageRemote = K.undef(self.allowImageRemote, true),
		formatUploadUrl = K.undef(self.formatUploadUrl, true),
		allowFileManager = K.undef(self.allowFileManager, false),
		uploadJson = K.undef(self.uploadJson, self.basePath + 'php/upload_json.php'),
		imageTabIndex = K.undef(self.imageTabIndex, 0),
		imgPath = self.pluginsPath + 'image/images/',
		extraParams = K.undef(self.extraFileUploadParams, {}),
		filePostName = K.undef(self.filePostName, 'imgFile'),
		fillDescAfterUploadImage = K.undef(self.fillDescAfterUploadImage, false),
		lang = self.lang(name + '.');

	self.plugin.imageDialog = function(options) {
		var imageUrl = options.imageUrl,
			imageWidth = K.undef(options.imageWidth, ''),
			imageHeight = K.undef(options.imageHeight, ''),
			imageTitle = K.undef(options.imageTitle, ''),
			imageAlign = K.undef(options.imageAlign, ''),
			showRemote = K.undef(options.showRemote, true),
			showLocal = K.undef(options.showLocal, true),
			tabIndex = K.undef(options.tabIndex, 0),
			clickFn = options.clickFn;
		var target = 'kindeditor_upload_iframe_' + new Date().getTime();
		var hiddenElements = [];
		for(var k in extraParams){
			hiddenElements.push('<input type="hidden" name="' + k + '" value="' + extraParams[k] + '" />');
		}
		var html = [
			'<div style="padding:20px;">',
			//tabs
			'<div class="tabs"></div>',
			//remote image - start
			'<div class="tab1" style="display:none;">',
			//url
			'<div class="ke-dialog-row">',
			'<label for="remoteUrl" style="width:60px;">' + lang.remoteUrl + '</label>',
			'<input type="text" id="remoteUrl" class="ke-input-text" name="url" value="" style="width:200px;" /> &nbsp;',
			'<span class="ke-button-common ke-button-outer">',
			'<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + lang.viewServer + '" />',
			'</span>',
			'</div>',
			//size
			'<div class="ke-dialog-row">',
			'<label for="remoteWidth" style="width:60px;">' + lang.size + '</label>',
			lang.width + ' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ',
			lang.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ',
			'<img class="ke-refresh-btn" src="' + imgPath + 'refresh.png" width="16" height="16" alt="" style="cursor:pointer;" title="' + lang.resetSize + '" />',
			'</div>',
			//align
			'<div class="ke-dialog-row">',
			'<label style="width:60px;">' + lang.align + '</label>',
			'<input type="radio" name="align" class="ke-inline-block" value="" checked="checked" /> <img name="defaultImg" src="' + imgPath + 'align_top.gif" width="23" height="25" alt="" />',
			' <input type="radio" name="align" class="ke-inline-block" value="left" /> <img name="leftImg" src="' + imgPath + 'align_left.gif" width="23" height="25" alt="" />',
			' <input type="radio" name="align" class="ke-inline-block" value="right" /> <img name="rightImg" src="' + imgPath + 'align_right.gif" width="23" height="25" alt="" />',
			'</div>',
			//title
			'<div class="ke-dialog-row">',
			'<label for="remoteTitle" style="width:60px;">' + lang.imgTitle + '</label>',
			'<input type="text" id="remoteTitle" class="ke-input-text" name="title" value="" style="width:200px;" />',
			'</div>',
			'</div>',
			//remote image - end
			//local upload - start
			'<div class="tab2" style="display:none;">',
			'<iframe name="' + target + '" style="display:none;"></iframe>',
			'<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' + target + '" action="' + K.addParam(uploadJson, 'dir=image') + '">',
			//file
			'<div class="ke-dialog-row">',
			hiddenElements.join(''),
			'<label style="width:60px;">' + lang.localUrl + '</label>',
			'<input type="text" name="localUrl" class="ke-input-text" tabindex="-1" style="width:200px;" readonly="true" /> &nbsp;',
			'<input type="button" class="ke-upload-button" value="' + lang.upload + '" />',
			'</div>',
			'</form>',
			'</div>',
			//local upload - end
			'</div>'
		].join('');
		var dialogWidth = showLocal || allowFileManager ? 450 : 400,
			dialogHeight = showLocal && showRemote ? 300 : 250;
		var dialog = self.createDialog({
			name : name,
			width : dialogWidth,
			height : dialogHeight,
			title : self.lang(name),
			body : html,
			yesBtn : {
				name : self.lang('yes'),
				click : function(e) {
					// Bugfix: http://code.google.com/p/kindeditor/issues/detail?id=319
					if (dialog.isLoading) {
						return;
					}
					// insert local image
					if (showLocal && showRemote && tabs && tabs.selectedIndex === 1 || !showRemote) {
						if (uploadbutton.fileBox.val() == '') {
							alert(self.lang('pleaseSelectFile'));
							return;
						}
						dialog.showLoading(self.lang('uploadLoading'));
						uploadbutton.submit();
						localUrlBox.val('');
						return;
					}
					// insert remote image
					var url = K.trim(urlBox.val()),
						width = widthBox.val(),
						height = heightBox.val(),
						title = titleBox.val(),
						align = '';
					alignBox.each(function() {
						if (this.checked) {
							align = this.value;
							return false;
						}
					});
					if (url == 'http://' || K.invalidUrl(url)) {
						alert(self.lang('invalidUrl'));
						urlBox[0].focus();
						return;
					}
					if (!/^\d*$/.test(width)) {
						alert(self.lang('invalidWidth'));
						widthBox[0].focus();
						return;
					}
					if (!/^\d*$/.test(height)) {
						alert(self.lang('invalidHeight'));
						heightBox[0].focus();
						return;
					}
					clickFn.call(self, url, title, width, height, 0, align);
				}
			},
			beforeRemove : function() {
				viewServerBtn.unbind();
				widthBox.unbind();
				heightBox.unbind();
				refreshBtn.unbind();
			}
		}),
		div = dialog.div;

		var urlBox = K('[name="url"]', div),
			localUrlBox = K('[name="localUrl"]', div),
			viewServerBtn = K('[name="viewServer"]', div),
			widthBox = K('.tab1 [name="width"]', div),
			heightBox = K('.tab1 [name="height"]', div),
			refreshBtn = K('.ke-refresh-btn', div),
			titleBox = K('.tab1 [name="title"]', div),
			alignBox = K('.tab1 [name="align"]', div);

		var tabs;
		if (showRemote && showLocal) {
			tabs = K.tabs({
				src : K('.tabs', div),
				afterSelect : function(i) {}
			});
			tabs.add({
				title : lang.remoteImage,
				panel : K('.tab1', div)
			});
			tabs.add({
				title : lang.localImage,
				panel : K('.tab2', div)
			});
			tabs.select(tabIndex);
		} else if (showRemote) {
			K('.tab1', div).show();
		} else if (showLocal) {
			K('.tab2', div).show();
		}

		var uploadbutton = K.uploadbutton({
			button : K('.ke-upload-button', div)[0],
			fieldName : filePostName,
			form : K('.ke-form', div),
			target : target,
			width: 60,
			afterUpload : function(data) {
				dialog.hideLoading();
				if (data.error === 0) {
					var url = data.url;
					if (formatUploadUrl) {
						url = K.formatUrl(url, 'absolute');
					}
					if (self.afterUpload) {
						self.afterUpload.call(self, url, data, name);
					}
					if (!fillDescAfterUploadImage) {
						clickFn.call(self, url, data.title, data.width, data.height, data.border, data.align);
					} else {
						K(".ke-dialog-row #remoteUrl", div).val(url);
						K(".ke-tabs-li", div)[0].click();
						K(".ke-refresh-btn", div).click();
					}
				} else {
					alert(data.message);
				}
			},
			afterError : function(html) {
				dialog.hideLoading();
				self.errorDialog(html);
			}
		});
		uploadbutton.fileBox.change(function(e) {
			localUrlBox.val(uploadbutton.fileBox.val());
		});
		if (allowFileManager) {
			viewServerBtn.click(function(e) {
				self.loadPlugin('filemanager', function() {
					self.plugin.filemanagerDialog({
						viewType : 'VIEW',
						dirName : 'image',
						clickFn : function(url, title) {
							if (self.dialogs.length > 1) {
								K('[name="url"]', div).val(url);
								if (self.afterSelectFile) {
									self.afterSelectFile.call(self, url);
								}
								self.hideDialog();
							}
						}
					});
				});
			});
		} else {
			viewServerBtn.hide();
		}
		var originalWidth = 0, originalHeight = 0;
		function setSize(width, height) {
			widthBox.val(width);
			heightBox.val(height);
			originalWidth = width;
			originalHeight = height;
		}
		refreshBtn.click(function(e) {
			var tempImg = K('<img src="' + urlBox.val() + '" />', document).css({
				position : 'absolute',
				visibility : 'hidden',
				top : 0,
				left : '-1000px'
			});
			tempImg.bind('load', function() {
				setSize(tempImg.width(), tempImg.height());
				tempImg.remove();
			});
			K(document.body).append(tempImg);
		});
		widthBox.change(function(e) {
			if (originalWidth > 0) {
				heightBox.val(Math.round(originalHeight / originalWidth * parseInt(this.value, 10)));
			}
		});
		heightBox.change(function(e) {
			if (originalHeight > 0) {
				widthBox.val(Math.round(originalWidth / originalHeight * parseInt(this.value, 10)));
			}
		});
		urlBox.val(options.imageUrl);
		setSize(options.imageWidth, options.imageHeight);
		titleBox.val(options.imageTitle);
		alignBox.each(function() {
			if (this.value === options.imageAlign) {
				this.checked = true;
				return false;
			}
		});
		if (showRemote && tabIndex === 0) {
			urlBox[0].focus();
			urlBox[0].select();
		}
		return dialog;
	};
	self.plugin.image = {
		edit : function() {
			var img = self.plugin.getSelectedImage();
			self.plugin.imageDialog({
				imageUrl : img ? img.attr('data-ke-src') : 'http://',
				imageWidth : img ? img.width() : '',
				imageHeight : img ? img.height() : '',
				imageTitle : img ? img.attr('title') : '',
				imageAlign : img ? img.attr('align') : '',
				showRemote : allowImageRemote,
				showLocal : allowImageUpload,
				tabIndex: img ? 0 : imageTabIndex,
				clickFn : function(url, title, width, height, border, align) {
					self.exec('insertimage', url, title, width, height, border, align);
					// Bugfix: [Firefox] 上传图片后，总是出现正在加载的样式，需要延迟执行hideDialog
					setTimeout(function() {
						self.hideDialog().focus();
					}, 0);
				}
			});
		},
		'delete' : function() {
			var target = self.plugin.getSelectedImage();
			if (target.parent().name == 'a') {
				target = target.parent();
			}
			target.remove();
			// [IE] 删除图片后立即点击图片按钮出错
			self.addBookmark();
		}
	};
	self.clickToolbar(name, self.plugin.image.edit);
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('insertfile', function(K) {
	var self = this, name = 'insertfile',
		allowFileUpload = K.undef(self.allowFileUpload, true),
		allowFileManager = K.undef(self.allowFileManager, false),
		formatUploadUrl = K.undef(self.formatUploadUrl, true),
		uploadJson = K.undef(self.uploadJson, self.basePath + 'php/upload_json.php'),
		extraParams = K.undef(self.extraFileUploadParams, {}),
		filePostName = K.undef(self.filePostName, 'imgFile'),
		lang = self.lang(name + '.');
	self.plugin.fileDialog = function(options) {
		var fileUrl = K.undef(options.fileUrl, 'http://'),
			fileTitle = K.undef(options.fileTitle, ''),
			clickFn = options.clickFn;
		var html = [
			'<div style="padding:20px;">',
			'<div class="ke-dialog-row">',
			'<label for="keUrl" style="width:60px;">' + lang.url + '</label>',
			'<input type="text" id="keUrl" name="url" class="ke-input-text" style="width:160px;" /> &nbsp;',
			'<input type="button" class="ke-upload-button" value="' + lang.upload + '" /> &nbsp;',
			'<span class="ke-button-common ke-button-outer">',
			'<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + lang.viewServer + '" />',
			'</span>',
			'</div>',
			//title
			'<div class="ke-dialog-row">',
			'<label for="keTitle" style="width:60px;">' + lang.title + '</label>',
			'<input type="text" id="keTitle" class="ke-input-text" name="title" value="" style="width:160px;" /></div>',
			'</div>',
			//form end
			'</form>',
			'</div>'
			].join('');
		var dialog = self.createDialog({
			name : name,
			width : 450,
			title : self.lang(name),
			body : html,
			yesBtn : {
				name : self.lang('yes'),
				click : function(e) {
					var url = K.trim(urlBox.val()),
						title = titleBox.val();
					if (url == 'http://' || K.invalidUrl(url)) {
						alert(self.lang('invalidUrl'));
						urlBox[0].focus();
						return;
					}
					if (K.trim(title) === '') {
						title = url;
					}
					clickFn.call(self, url, title);
				}
			}
		}),
		div = dialog.div;

		var urlBox = K('[name="url"]', div),
			viewServerBtn = K('[name="viewServer"]', div),
			titleBox = K('[name="title"]', div);

		if (allowFileUpload) {
			var uploadbutton = K.uploadbutton({
				button : K('.ke-upload-button', div)[0],
				fieldName : filePostName,
				url : K.addParam(uploadJson, 'dir=file'),
				extraParams : extraParams,
				afterUpload : function(data) {
					dialog.hideLoading();
					if (data.error === 0) {
						var url = data.url;
						if (formatUploadUrl) {
							url = K.formatUrl(url, 'absolute');
						}
						urlBox.val(url);
						if (self.afterUpload) {
							self.afterUpload.call(self, url, data, name);
						}
						alert(self.lang('uploadSuccess'));
					} else {
						alert(data.message);
					}
				},
				afterError : function(html) {
					dialog.hideLoading();
					self.errorDialog(html);
				}
			});
			uploadbutton.fileBox.change(function(e) {
				dialog.showLoading(self.lang('uploadLoading'));
				uploadbutton.submit();
			});
		} else {
			K('.ke-upload-button', div).hide();
		}
		if (allowFileManager) {
			viewServerBtn.click(function(e) {
				self.loadPlugin('filemanager', function() {
					self.plugin.filemanagerDialog({
						viewType : 'LIST',
						dirName : 'file',
						clickFn : function(url, title) {
							if (self.dialogs.length > 1) {
								K('[name="url"]', div).val(url);
								if (self.afterSelectFile) {
									self.afterSelectFile.call(self, url);
								}
								self.hideDialog();
							}
						}
					});
				});
			});
		} else {
			viewServerBtn.hide();
		}
		urlBox.val(fileUrl);
		titleBox.val(fileTitle);
		urlBox[0].focus();
		urlBox[0].select();
	};
	self.clickToolbar(name, function() {
		self.plugin.fileDialog({
			clickFn : function(url, title) {
				var html = '<a class="ke-insertfile" href="' + url + '" data-ke-src="' + url + '" target="_blank">' + title + '</a>';
				self.insertHtml(html).hideDialog().focus();
			}
		});
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('lineheight', function(K) {
	var self = this, name = 'lineheight', lang = self.lang(name + '.');
	self.clickToolbar(name, function() {
		var curVal = '', commonNode = self.cmd.commonNode({'*' : '.line-height'});
		if (commonNode) {
			curVal = commonNode.css('line-height');
		}
		var menu = self.createMenu({
			name : name,
			width : 150
		});
		K.each(lang.lineHeight, function(i, row) {
			K.each(row, function(key, val) {
				menu.addItem({
					title : val,
					checked : curVal === key,
					click : function() {
						self.cmd.toggle('<span style="line-height:' + key + ';"></span>', {
							span : '.line-height=' + key
						});
						self.updateState();
						self.addBookmark();
						self.hideMenu();
					}
				});
			});
		});
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('link', function(K) {
	var self = this, name = 'link';
	self.plugin.link = {
		edit : function() {
			var lang = self.lang(name + '.'),
				html = '<div style="padding:20px;">' +
					//url
					'<div class="ke-dialog-row">' +
					'<label for="keUrl" style="width:60px;">' + lang.url + '</label>' +
					'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div>' +
					//type
					'<div class="ke-dialog-row"">' +
					'<label for="keType" style="width:60px;">' + lang.linkType + '</label>' +
					'<select id="keType" name="type"></select>' +
					'</div>' +
					'</div>',
				dialog = self.createDialog({
					name : name,
					width : 450,
					title : self.lang(name),
					body : html,
					yesBtn : {
						name : self.lang('yes'),
						click : function(e) {
							var url = K.trim(urlBox.val());
							if (url == 'http://' || K.invalidUrl(url)) {
								alert(self.lang('invalidUrl'));
								urlBox[0].focus();
								return;
							}
							self.exec('createlink', url, typeBox.val()).hideDialog().focus();
						}
					}
				}),
				div = dialog.div,
				urlBox = K('input[name="url"]', div),
				typeBox = K('select[name="type"]', div);
			urlBox.val('http://');
			typeBox[0].options[0] = new Option(lang.newWindow, '_blank');
			typeBox[0].options[1] = new Option(lang.selfWindow, '');
			self.cmd.selection();
			var a = self.plugin.getSelectedLink();
			if (a) {
				self.cmd.range.selectNode(a[0]);
				self.cmd.select();
				urlBox.val(a.attr('data-ke-src'));
				typeBox.val(a.attr('target'));
			}
			urlBox[0].focus();
			urlBox[0].select();
		},
		'delete' : function() {
			self.exec('unlink', null);
		}
	};
	self.clickToolbar(name, self.plugin.link.edit);
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

// Google Maps: http://code.google.com/apis/maps/index.html

KindEditor.plugin('map', function(K) {
	var self = this, name = 'map', lang = self.lang(name + '.');
	self.clickToolbar(name, function() {
		var html = ['<div style="padding:10px 20px;">',
			'<div class="ke-dialog-row">',
			lang.address + ' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ',
			'<span class="ke-button-common ke-button-outer">',
			'<input type="button" name="searchBtn" class="ke-button-common ke-button" value="' + lang.search + '" />',
			'</span>',
			'</div>',
			'<div class="ke-map" style="width:558px;height:360px;"></div>',
			'</div>'].join('');
		var dialog = self.createDialog({
			name : name,
			width : 600,
			title : self.lang(name),
			body : html,
			yesBtn : {
				name : self.lang('yes'),
				click : function(e) {
					var geocoder = win.geocoder,
						map = win.map,
						center = map.getCenter().lat() + ',' + map.getCenter().lng(),
						zoom = map.getZoom(),
						maptype = map.getMapTypeId(),
						url = 'http://maps.googleapis.com/maps/api/staticmap';
						url += '?center=' + encodeURIComponent(center);
						url += '&zoom=' + encodeURIComponent(zoom);
						url += '&size=558x360';
						url += '&maptype=' + encodeURIComponent(maptype);
						url += '&markers=' + encodeURIComponent(center);
						url += '&language=' + self.langType;
						url += '&sensor=false';
					self.exec('insertimage', url).hideDialog().focus();
				}
			},
			beforeRemove : function() {
				searchBtn.remove();
				if (doc) {
					doc.write('');
				}
				iframe.remove();
			}
		});
		var div = dialog.div,
			addressBox = K('[name="address"]', div),
			searchBtn = K('[name="searchBtn"]', div),
			win, doc;
		var iframeHtml = ['<!doctype html><html><head>',
			'<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />',
			'<style>',
			'	html { height: 100% }',
			'	body { height: 100%; margin: 0; padding: 0; background-color: #FFF }',
			'	#map_canvas { height: 100% }',
			'</style>',
			'<script src="http://maps.googleapis.com/maps/api/js?sensor=false&language=' + self.langType + '"></script>',
			'<script>',
			'var map, geocoder;',
			'function initialize() {',
			'	var latlng = new google.maps.LatLng(31.230393, 121.473704);',
			'	var options = {',
			'		zoom: 11,',
			'		center: latlng,',
			'		disableDefaultUI: true,',
			'		panControl: true,',
			'		zoomControl: true,',
			'		mapTypeControl: true,',
			'		scaleControl: true,',
			'		streetViewControl: false,',
			'		overviewMapControl: true,',
			'		mapTypeId: google.maps.MapTypeId.ROADMAP',
			'	};',
			'	map = new google.maps.Map(document.getElementById("map_canvas"), options);',
			'	geocoder = new google.maps.Geocoder();',
			'	geocoder.geocode({latLng: latlng}, function(results, status) {',
			'		if (status == google.maps.GeocoderStatus.OK) {',
			'			if (results[3]) {',
			'				parent.document.getElementById("kindeditor_plugin_map_address").value = results[3].formatted_address;',
			'			}',
			'		}',
			'	});',
			'}',
			'function search(address) {',
			'	if (!map) return;',
			'	geocoder.geocode({address : address}, function(results, status) {',
			'		if (status == google.maps.GeocoderStatus.OK) {',
			'			map.setZoom(11);',
			'			map.setCenter(results[0].geometry.location);',
			'			var marker = new google.maps.Marker({',
			'				map: map,',
			'				position: results[0].geometry.location',
			'			});',
			'		} else {',
			'			alert("Invalid address: " + address);',
			'		}',
			'	});',
			'}',
			'</script>',
			'</head>',
			'<body onload="initialize();">',
			'<div id="map_canvas" style="width:100%; height:100%"></div>',
			'</body></html>'].join('\n');
		// TODO：用doc.write(iframeHtml)方式加载时，在IE6上第一次加载报错，暂时使用src方式
		var iframe = K('<iframe class="ke-textarea" frameborder="0" src="' + self.pluginsPath + 'map/map.html" style="width:558px;height:360px;"></iframe>');
		function ready() {
			win = iframe[0].contentWindow;
			doc = K.iframeDoc(iframe);
			//doc.open();
			//doc.write(iframeHtml);
			//doc.close();
		}
		iframe.bind('load', function() {
			iframe.unbind('load');
			if (K.IE) {
				ready();
			} else {
				setTimeout(ready, 0);
			}
		});
		K('.ke-map', div).replaceWith(iframe);
		// search map
		searchBtn.click(function() {
			win.search(addressBox.val());
		});
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('media', function(K) {
	var self = this, name = 'media', lang = self.lang(name + '.'),
		allowMediaUpload = K.undef(self.allowMediaUpload, true),
		allowFileManager = K.undef(self.allowFileManager, false),
		formatUploadUrl = K.undef(self.formatUploadUrl, true),
		extraParams = K.undef(self.extraFileUploadParams, {}),
		filePostName = K.undef(self.filePostName, 'imgFile'),
		uploadJson = K.undef(self.uploadJson, self.basePath + 'php/upload_json.php');
	self.plugin.media = {
		edit : function() {
			var html = [
				'<div style="padding:20px;">',
				//url
				'<div class="ke-dialog-row">',
				'<label for="keUrl" style="width:60px;">' + lang.url + '</label>',
				'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;',
				'<input type="button" class="ke-upload-button" value="' + lang.upload + '" /> &nbsp;',
				'<span class="ke-button-common ke-button-outer">',
				'<input type="button" class="ke-button-common ke-button" name="viewServer" value="' + lang.viewServer + '" />',
				'</span>',
				'</div>',
				//width
				'<div class="ke-dialog-row">',
				'<label for="keWidth" style="width:60px;">' + lang.width + '</label>',
				'<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" />',
				'</div>',
				//height
				'<div class="ke-dialog-row">',
				'<label for="keHeight" style="width:60px;">' + lang.height + '</label>',
				'<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" />',
				'</div>',
				//autostart
				'<div class="ke-dialog-row">',
				'<label for="keAutostart">' + lang.autostart + '</label>',
				'<input type="checkbox" id="keAutostart" name="autostart" value="" /> ',
				'</div>',
				'</div>'
			].join('');
			var dialog = self.createDialog({
				name : name,
				width : 450,
				height : 230,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var url = K.trim(urlBox.val()),
							width = widthBox.val(),
							height = heightBox.val();
						if (url == 'http://' || K.invalidUrl(url)) {
							alert(self.lang('invalidUrl'));
							urlBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(width)) {
							alert(self.lang('invalidWidth'));
							widthBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(height)) {
							alert(self.lang('invalidHeight'));
							heightBox[0].focus();
							return;
						}
						var html = K.mediaImg(self.themesPath + 'common/blank.gif', {
								src : url,
								type : K.mediaType(url),
								width : width,
								height : height,
								autostart : autostartBox[0].checked ? 'true' : 'false',
								loop : 'true'
							});
						self.insertHtml(html).hideDialog().focus();
					}
				}
			}),
			div = dialog.div,
			urlBox = K('[name="url"]', div),
			viewServerBtn = K('[name="viewServer"]', div),
			widthBox = K('[name="width"]', div),
			heightBox = K('[name="height"]', div),
			autostartBox = K('[name="autostart"]', div);
			urlBox.val('http://');

			if (allowMediaUpload) {
				var uploadbutton = K.uploadbutton({
					button : K('.ke-upload-button', div)[0],
					fieldName : filePostName,
					extraParams : extraParams,
					url : K.addParam(uploadJson, 'dir=media'),
					afterUpload : function(data) {
						dialog.hideLoading();
						if (data.error === 0) {
							var url = data.url;
							if (formatUploadUrl) {
								url = K.formatUrl(url, 'absolute');
							}
							urlBox.val(url);
							if (self.afterUpload) {
								self.afterUpload.call(self, url, data, name);
							}
							alert(self.lang('uploadSuccess'));
						} else {
							alert(data.message);
						}
					},
					afterError : function(html) {
						dialog.hideLoading();
						self.errorDialog(html);
					}
				});
				uploadbutton.fileBox.change(function(e) {
					dialog.showLoading(self.lang('uploadLoading'));
					uploadbutton.submit();
				});
			} else {
				K('.ke-upload-button', div).hide();
			}

			if (allowFileManager) {
				viewServerBtn.click(function(e) {
					self.loadPlugin('filemanager', function() {
						self.plugin.filemanagerDialog({
							viewType : 'LIST',
							dirName : 'media',
							clickFn : function(url, title) {
								if (self.dialogs.length > 1) {
									K('[name="url"]', div).val(url);
									if (self.afterSelectFile) {
										self.afterSelectFile.call(self, url);
									}
									self.hideDialog();
								}
							}
						});
					});
				});
			} else {
				viewServerBtn.hide();
			}

			var img = self.plugin.getSelectedMedia();
			if (img) {
				var attrs = K.mediaAttrs(img.attr('data-ke-tag'));
				urlBox.val(attrs.src);
				widthBox.val(K.removeUnit(img.css('width')) || attrs.width || 0);
				heightBox.val(K.removeUnit(img.css('height')) || attrs.height || 0);
				autostartBox[0].checked = (attrs.autostart === 'true');
			}
			urlBox[0].focus();
			urlBox[0].select();
		},
		'delete' : function() {
			self.plugin.getSelectedMedia().remove();
			// [IE] 删除图片后立即点击图片按钮出错
			self.addBookmark();
		}
	};
	self.clickToolbar(name, self.plugin.media.edit);
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/



(function(K) {

function KSWFUpload(options) {
	this.init(options);
}
K.extend(KSWFUpload, {
	init : function(options) {
		var self = this;
		options.afterError = options.afterError || function(str) {
			alert(str);
		};
		self.options = options;
		self.progressbars = {};
		// template
		self.div = K(options.container).html([
			'<div class="ke-swfupload">',
			'<div class="ke-swfupload-top">',
			'<div class="ke-inline-block ke-swfupload-button">',
			'<input type="button" value="Browse" />',
			'</div>',
			'<div class="ke-inline-block ke-swfupload-desc">' + options.uploadDesc + '</div>',
			'<span class="ke-button-common ke-button-outer ke-swfupload-startupload">',
			'<input type="button" class="ke-button-common ke-button" value="' + options.startButtonValue + '" />',
			'</span>',
			'</div>',
			'<div class="ke-swfupload-body"></div>',
			'</div>'
		].join(''));
		self.bodyDiv = K('.ke-swfupload-body', self.div);

		function showError(itemDiv, msg) {
			K('.ke-status > div', itemDiv).hide();
			K('.ke-message', itemDiv).addClass('ke-error').show().html(K.escape(msg));
		}

		var settings = {
			debug : false,
			upload_url : options.uploadUrl,
			flash_url : options.flashUrl,
			file_post_name : options.filePostName,
			button_placeholder : K('.ke-swfupload-button > input', self.div)[0],
			button_image_url: options.buttonImageUrl,
			button_width: options.buttonWidth,
			button_height: options.buttonHeight,
			button_cursor : SWFUpload.CURSOR.HAND,
			file_types : options.fileTypes,
			file_types_description : options.fileTypesDesc,
			file_upload_limit : options.fileUploadLimit,
			file_size_limit : options.fileSizeLimit,
			post_params : options.postParams,
			file_queued_handler : function(file) {
				file.url = self.options.fileIconUrl;
				self.appendFile(file);
			},
			file_queue_error_handler : function(file, errorCode, message) {
				var errorName = '';
				switch (errorCode) {
					case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
						errorName = options.queueLimitExceeded;
						break;
					case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
						errorName = options.fileExceedsSizeLimit;
						break;
					case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
						errorName = options.zeroByteFile;
						break;
					case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
						errorName = options.invalidFiletype;
						break;
					default:
						errorName = options.unknownError;
						break;
				}
				K.DEBUG && alert(errorName);
			},
			upload_start_handler : function(file) {
				var self = this;
				var itemDiv = K('div[data-id="' + file.id + '"]', self.bodyDiv);
				K('.ke-status > div', itemDiv).hide();
				K('.ke-progressbar', itemDiv).show();
			},
			upload_progress_handler : function(file, bytesLoaded, bytesTotal) {
				var percent = Math.round(bytesLoaded * 100 / bytesTotal);
				var progressbar = self.progressbars[file.id];
				progressbar.bar.css('width', Math.round(percent * 80 / 100) + 'px');
				progressbar.percent.html(percent + '%');
			},
			upload_error_handler : function(file, errorCode, message) {
				if (file && file.filestatus == SWFUpload.FILE_STATUS.ERROR) {
					var itemDiv = K('div[data-id="' + file.id + '"]', self.bodyDiv).eq(0);
					showError(itemDiv, self.options.errorMessage);
				}
			},
			upload_success_handler : function(file, serverData) {
				var itemDiv = K('div[data-id="' + file.id + '"]', self.bodyDiv).eq(0);
				var data = {};
				try {
					data = K.json(serverData);
				} catch (e) {
					self.options.afterError.call(this, '<!doctype html><html>' + serverData + '</html>');
				}
				if (data.error !== 0) {
					showError(itemDiv, K.DEBUG ? data.message : self.options.errorMessage);
					return;
				}
				file.url = data.url;
				K('.ke-img', itemDiv).attr('src', file.url).attr('data-status', file.filestatus).data('data', data);
				K('.ke-status > div', itemDiv).hide();
			}
		};
		self.swfu = new SWFUpload(settings);

		K('.ke-swfupload-startupload input', self.div).click(function() {
			self.swfu.startUpload();
		});
	},
	getUrlList : function() {
		var list = [];
		K('.ke-img', self.bodyDiv).each(function() {
			var img = K(this);
			var status = img.attr('data-status');
			if (status == SWFUpload.FILE_STATUS.COMPLETE) {
				list.push(img.data('data'));
			}
		});
		return list;
	},
	removeFile : function(fileId) {
		var self = this;
		self.swfu.cancelUpload(fileId);
		var itemDiv = K('div[data-id="' + fileId + '"]', self.bodyDiv);
		K('.ke-photo', itemDiv).unbind();
		K('.ke-delete', itemDiv).unbind();
		itemDiv.remove();
	},
	removeFiles : function() {
		var self = this;
		K('.ke-item', self.bodyDiv).each(function() {
			self.removeFile(K(this).attr('data-id'));
		});
	},
	appendFile : function(file) {
		var self = this;
		var itemDiv = K('<div class="ke-inline-block ke-item" data-id="' + file.id + '"></div>');
		self.bodyDiv.append(itemDiv);
		var photoDiv = K('<div class="ke-inline-block ke-photo"></div>')
			.mouseover(function(e) {
				K(this).addClass('ke-on');
			})
			.mouseout(function(e) {
				K(this).removeClass('ke-on');
			});
		itemDiv.append(photoDiv);

		var img = K('<img src="' + file.url + '" class="ke-img" data-status="' + file.filestatus + '" width="80" height="80" alt="' + file.name + '" />');
		photoDiv.append(img);
		K('<span class="ke-delete"></span>').appendTo(photoDiv).click(function() {
			self.removeFile(file.id);
		});
		var statusDiv = K('<div class="ke-status"></div>').appendTo(photoDiv);
		// progressbar
		K(['<div class="ke-progressbar">',
			'<div class="ke-progressbar-bar"><div class="ke-progressbar-bar-inner"></div></div>',
			'<div class="ke-progressbar-percent">0%</div></div>'].join('')).hide().appendTo(statusDiv);
		// message
		K('<div class="ke-message">' + self.options.pendingMessage + '</div>').appendTo(statusDiv);

		itemDiv.append('<div class="ke-name">' + file.name + '</div>');

		self.progressbars[file.id] = {
			bar : K('.ke-progressbar-bar-inner', photoDiv),
			percent : K('.ke-progressbar-percent', photoDiv)
		};
	},
	remove : function() {
		this.removeFiles();
		this.swfu.destroy();
		this.div.html('');
	}
});

K.swfupload = function(element, options) {
	return new KSWFUpload(element, options);
};

})(KindEditor);

KindEditor.plugin('multiimage', function(K) {
	var self = this, name = 'multiimage',
		formatUploadUrl = K.undef(self.formatUploadUrl, true),
		uploadJson = K.undef(self.uploadJson, self.basePath + 'php/upload_json.php'),
		imgPath = self.pluginsPath + 'multiimage/images/',
		imageSizeLimit = K.undef(self.imageSizeLimit, '1MB'),
		imageFileTypes = K.undef(self.imageFileTypes, '*.jpg;*.gif;*.png'),
		imageUploadLimit = K.undef(self.imageUploadLimit, 20),
		filePostName = K.undef(self.filePostName, 'imgFile'),
		lang = self.lang(name + '.');

	self.plugin.multiImageDialog = function(options) {
		var clickFn = options.clickFn,
			uploadDesc = K.tmpl(lang.uploadDesc, {uploadLimit : imageUploadLimit, sizeLimit : imageSizeLimit});
		var html = [
			'<div style="padding:20px;">',
			'<div class="swfupload">',
			'</div>',
			'</div>'
		].join('');
		var dialog = self.createDialog({
			name : name,
			width : 650,
			height : 510,
			title : self.lang(name),
			body : html,
			previewBtn : {
				name : lang.insertAll,
				click : function(e) {
					clickFn.call(self, swfupload.getUrlList());
				}
			},
			yesBtn : {
				name : lang.clearAll,
				click : function(e) {
					swfupload.removeFiles();
				}
			},
			beforeRemove : function() {
				// IE9 bugfix: https://github.com/kindsoft/kindeditor/issues/72
				if (!K.IE || K.V <= 8) {
					swfupload.remove();
				}
			}
		}),
		div = dialog.div;

		var swfupload = K.swfupload({
			container : K('.swfupload', div),
			buttonImageUrl : imgPath + (self.langType == 'zh_CN' ? 'select-files-zh_CN.png' : 'select-files-en.png'),
			buttonWidth : self.langType == 'zh_CN' ? 72 : 88,
			buttonHeight : 23,
			fileIconUrl : imgPath + 'image.png',
			uploadDesc : uploadDesc,
			startButtonValue : lang.startUpload,
			uploadUrl : K.addParam(uploadJson, 'dir=image'),
			flashUrl : imgPath + 'swfupload.swf',
			filePostName : filePostName,
			fileTypes : '*.jpg;*.jpeg;*.gif;*.png;*.bmp',
			fileTypesDesc : 'Image Files',
			fileUploadLimit : imageUploadLimit,
			fileSizeLimit : imageSizeLimit,
			postParams :  K.undef(self.extraFileUploadParams, {}),
			queueLimitExceeded : lang.queueLimitExceeded,
			fileExceedsSizeLimit : lang.fileExceedsSizeLimit,
			zeroByteFile : lang.zeroByteFile,
			invalidFiletype : lang.invalidFiletype,
			unknownError : lang.unknownError,
			pendingMessage : lang.pending,
			errorMessage : lang.uploadError,
			afterError : function(html) {
				self.errorDialog(html);
			}
		});

		return dialog;
	};
	self.clickToolbar(name, function() {
		self.plugin.multiImageDialog({
			clickFn : function (urlList) {
				if (urlList.length === 0) {
					return;
				}
				K.each(urlList, function(i, data) {
					if (self.afterUpload) {
						self.afterUpload.call(self, data.url, data, 'multiimage');
					}
					self.exec('insertimage', data.url, data.title, data.width, data.height, data.border, data.align);
				});
				// Bugfix: [Firefox] 上传图片后，总是出现正在加载的样式，需要延迟执行hideDialog
				setTimeout(function() {
					self.hideDialog().focus();
				}, 0);
			}
		});
	});
});


/**
 * SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
 *
 * mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
 *
 * SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilz閚 and Mammon Media and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */


/* ******************* */
/* Constructor & Init  */
/* ******************* */

(function() {

if (window.SWFUpload) {
	return;
}

window.SWFUpload = function (settings) {
	this.initSWFUpload(settings);
};

SWFUpload.prototype.initSWFUpload = function (settings) {
	try {
		this.customSettings = {};	// A container where developers can place their own settings associated with this instance.
		this.settings = settings;
		this.eventQueue = [];
		this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
		this.movieElement = null;


		// Setup global control tracking
		SWFUpload.instances[this.movieName] = this;

		// Load the settings.  Load the Flash movie.
		this.initSettings();
		this.loadFlash();
		this.displayDebugInfo();
	} catch (ex) {
		delete SWFUpload.instances[this.movieName];
		throw ex;
	}
};

/* *************** */
/* Static Members  */
/* *************** */
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {
	QUEUE_LIMIT_EXCEEDED	  		: -100,
	FILE_EXCEEDS_SIZE_LIMIT  		: -110,
	ZERO_BYTE_FILE			  		: -120,
	INVALID_FILETYPE		  		: -130
};
SWFUpload.UPLOAD_ERROR = {
	HTTP_ERROR				  		: -200,
	MISSING_UPLOAD_URL	      		: -210,
	IO_ERROR				  		: -220,
	SECURITY_ERROR			  		: -230,
	UPLOAD_LIMIT_EXCEEDED	  		: -240,
	UPLOAD_FAILED			  		: -250,
	SPECIFIED_FILE_ID_NOT_FOUND		: -260,
	FILE_VALIDATION_FAILED	  		: -270,
	FILE_CANCELLED			  		: -280,
	UPLOAD_STOPPED					: -290
};
SWFUpload.FILE_STATUS = {
	QUEUED		 : -1,
	IN_PROGRESS	 : -2,
	ERROR		 : -3,
	COMPLETE	 : -4,
	CANCELLED	 : -5
};
SWFUpload.BUTTON_ACTION = {
	SELECT_FILE  : -100,
	SELECT_FILES : -110,
	START_UPLOAD : -120
};
SWFUpload.CURSOR = {
	ARROW : -1,
	HAND : -2
};
SWFUpload.WINDOW_MODE = {
	WINDOW : "window",
	TRANSPARENT : "transparent",
	OPAQUE : "opaque"
};

// Private: takes a URL, determines if it is relative and converts to an absolute URL
// using the current site. Only processes the URL if it can, otherwise returns the URL untouched
SWFUpload.completeURL = function(url) {
	if (typeof(url) !== "string" || url.match(/^https?:\/\//i) || url.match(/^\//)) {
		return url;
	}

	var currentURL = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");

	var indexSlash = window.location.pathname.lastIndexOf("/");
	if (indexSlash <= 0) {
		path = "/";
	} else {
		path = window.location.pathname.substr(0, indexSlash) + "/";
	}

	return /*currentURL +*/ path + url;

};


/* ******************** */
/* Instance Members  */
/* ******************** */

// Private: initSettings ensures that all the
// settings are set, getting a default value if one was not assigned.
SWFUpload.prototype.initSettings = function () {
	this.ensureDefault = function (settingName, defaultValue) {
		this.settings[settingName] = (this.settings[settingName] == undefined) ? defaultValue : this.settings[settingName];
	};

	// Upload backend settings
	this.ensureDefault("upload_url", "");
	this.ensureDefault("preserve_relative_urls", false);
	this.ensureDefault("file_post_name", "Filedata");
	this.ensureDefault("post_params", {});
	this.ensureDefault("use_query_string", false);
	this.ensureDefault("requeue_on_error", false);
	this.ensureDefault("http_success", []);
	this.ensureDefault("assume_success_timeout", 0);

	// File Settings
	this.ensureDefault("file_types", "*.*");
	this.ensureDefault("file_types_description", "All Files");
	this.ensureDefault("file_size_limit", 0);	// Default zero means "unlimited"
	this.ensureDefault("file_upload_limit", 0);
	this.ensureDefault("file_queue_limit", 0);

	// Flash Settings
	this.ensureDefault("flash_url", "swfupload.swf");
	this.ensureDefault("prevent_swf_caching", true);

	// Button Settings
	this.ensureDefault("button_image_url", "");
	this.ensureDefault("button_width", 1);
	this.ensureDefault("button_height", 1);
	this.ensureDefault("button_text", "");
	this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
	this.ensureDefault("button_text_top_padding", 0);
	this.ensureDefault("button_text_left_padding", 0);
	this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
	this.ensureDefault("button_disabled", false);
	this.ensureDefault("button_placeholder_id", "");
	this.ensureDefault("button_placeholder", null);
	this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
	this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);

	// Debug Settings
	this.ensureDefault("debug", false);
	this.settings.debug_enabled = this.settings.debug;	// Here to maintain v2 API

	// Event Handlers
	this.settings.return_upload_start_handler = this.returnUploadStart;
	this.ensureDefault("swfupload_loaded_handler", null);
	this.ensureDefault("file_dialog_start_handler", null);
	this.ensureDefault("file_queued_handler", null);
	this.ensureDefault("file_queue_error_handler", null);
	this.ensureDefault("file_dialog_complete_handler", null);

	this.ensureDefault("upload_start_handler", null);
	this.ensureDefault("upload_progress_handler", null);
	this.ensureDefault("upload_error_handler", null);
	this.ensureDefault("upload_success_handler", null);
	this.ensureDefault("upload_complete_handler", null);

	this.ensureDefault("debug_handler", this.debugMessage);

	this.ensureDefault("custom_settings", {});

	// Other settings
	this.customSettings = this.settings.custom_settings;

	// Update the flash url if needed
	if (!!this.settings.prevent_swf_caching) {
		this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
	}

	if (!this.settings.preserve_relative_urls) {
		//this.settings.flash_url = SWFUpload.completeURL(this.settings.flash_url);	// Don't need to do this one since flash doesn't look at it
		this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
		this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url);
	}

	delete this.ensureDefault;
};

// Private: loadFlash replaces the button_placeholder element with the flash movie.
SWFUpload.prototype.loadFlash = function () {
	var targetElement, tempParent;

	// Make sure an element with the ID we are going to use doesn't already exist
	if (document.getElementById(this.movieName) !== null) {
		throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
	}

	// Get the element where we will be placing the flash movie
	targetElement = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;

	if (targetElement == undefined) {
		throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
	}

	// Append the container and load the flash
	tempParent = document.createElement("div");
	tempParent.innerHTML = this.getFlashHTML();	// Using innerHTML is non-standard but the only sensible way to dynamically add Flash in IE (and maybe other browsers)
	targetElement.parentNode.replaceChild(tempParent.firstChild, targetElement);

	// Fix IE Flash/Form bug
	if (window[this.movieName] == undefined) {
		window[this.movieName] = this.getMovieElement();
	}

};

// Private: getFlashHTML generates the object tag needed to embed the flash in to the document
SWFUpload.prototype.getFlashHTML = function () {
	// Flash Satay object syntax: http://www.alistapart.com/articles/flashsatay
	// Fix bug for IE9
	// http://www.kindsoft.net/view.php?bbsid=7&postid=5825&pagenum=1
	var classid = '';
	if (KindEditor.IE && KindEditor.V > 8) {
		classid = ' classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"';
	}
	return ['<object id="', this.movieName, '"' + classid + ' type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">',
				'<param name="wmode" value="', this.settings.button_window_mode, '" />',
				'<param name="movie" value="', this.settings.flash_url, '" />',
				'<param name="quality" value="high" />',
				'<param name="menu" value="false" />',
				'<param name="allowScriptAccess" value="always" />',
				'<param name="flashvars" value="' + this.getFlashVars() + '" />',
				'</object>'].join("");
};

// Private: getFlashVars builds the parameter string that will be passed
// to flash in the flashvars param.
SWFUpload.prototype.getFlashVars = function () {
	// Build a string from the post param object
	var paramString = this.buildParamString();
	var httpSuccessString = this.settings.http_success.join(",");

	// Build the parameter string
	return ["movieName=", encodeURIComponent(this.movieName),
			"&amp;uploadURL=", encodeURIComponent(this.settings.upload_url),
			"&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string),
			"&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error),
			"&amp;httpSuccess=", encodeURIComponent(httpSuccessString),
			"&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout),
			"&amp;params=", encodeURIComponent(paramString),
			"&amp;filePostName=", encodeURIComponent(this.settings.file_post_name),
			"&amp;fileTypes=", encodeURIComponent(this.settings.file_types),
			"&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description),
			"&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit),
			"&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit),
			"&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit),
			"&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled),
			"&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url),
			"&amp;buttonWidth=", encodeURIComponent(this.settings.button_width),
			"&amp;buttonHeight=", encodeURIComponent(this.settings.button_height),
			"&amp;buttonText=", encodeURIComponent(this.settings.button_text),
			"&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding),
			"&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding),
			"&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style),
			"&amp;buttonAction=", encodeURIComponent(this.settings.button_action),
			"&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled),
			"&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)
		].join("");
};

// Public: getMovieElement retrieves the DOM reference to the Flash element added by SWFUpload
// The element is cached after the first lookup
SWFUpload.prototype.getMovieElement = function () {
	if (this.movieElement == undefined) {
		this.movieElement = document.getElementById(this.movieName);
	}

	if (this.movieElement === null) {
		throw "Could not find Flash element";
	}

	return this.movieElement;
};

// Private: buildParamString takes the name/value pairs in the post_params setting object
// and joins them up in to a string formatted "name=value&amp;name=value"
SWFUpload.prototype.buildParamString = function () {
	var postParams = this.settings.post_params;
	var paramStringPairs = [];

	if (typeof(postParams) === "object") {
		for (var name in postParams) {
			if (postParams.hasOwnProperty(name)) {
				paramStringPairs.push(encodeURIComponent(name.toString()) + "=" + encodeURIComponent(postParams[name].toString()));
			}
		}
	}

	return paramStringPairs.join("&amp;");
};

// Public: Used to remove a SWFUpload instance from the page. This method strives to remove
// all references to the SWF, and other objects so memory is properly freed.
// Returns true if everything was destroyed. Returns a false if a failure occurs leaving SWFUpload in an inconsistant state.
// Credits: Major improvements provided by steffen
SWFUpload.prototype.destroy = function () {
	try {
		// Make sure Flash is done before we try to remove it
		this.cancelUpload(null, false);


		// Remove the SWFUpload DOM nodes
		var movieElement = null;
		movieElement = this.getMovieElement();

		if (movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			// Loop through all the movie's properties and remove all function references (DOM/JS IE 6/7 memory leak workaround)
			for (var i in movieElement) {
				try {
					if (typeof(movieElement[i]) === "function") {
						movieElement[i] = null;
					}
				} catch (ex1) {}
			}

			// Remove the Movie Element from the page
			try {
				movieElement.parentNode.removeChild(movieElement);
			} catch (ex) {}
		}

		// Remove IE form fix reference
		window[this.movieName] = null;

		// Destroy other references
		SWFUpload.instances[this.movieName] = null;
		delete SWFUpload.instances[this.movieName];

		this.movieElement = null;
		this.settings = null;
		this.customSettings = null;
		this.eventQueue = null;
		this.movieName = null;


		return true;
	} catch (ex2) {
		return false;
	}
};


// Public: displayDebugInfo prints out settings and configuration
// information about this SWFUpload instance.
// This function (and any references to it) can be deleted when placing
// SWFUpload in production.
SWFUpload.prototype.displayDebugInfo = function () {
	this.debug(
		[
			"---SWFUpload Instance Info---\n",
			"Version: ", SWFUpload.version, "\n",
			"Movie Name: ", this.movieName, "\n",
			"Settings:\n",
			"\t", "upload_url:               ", this.settings.upload_url, "\n",
			"\t", "flash_url:                ", this.settings.flash_url, "\n",
			"\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n",
			"\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n",
			"\t", "http_success:             ", this.settings.http_success.join(", "), "\n",
			"\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n",
			"\t", "file_post_name:           ", this.settings.file_post_name, "\n",
			"\t", "post_params:              ", this.settings.post_params.toString(), "\n",
			"\t", "file_types:               ", this.settings.file_types, "\n",
			"\t", "file_types_description:   ", this.settings.file_types_description, "\n",
			"\t", "file_size_limit:          ", this.settings.file_size_limit, "\n",
			"\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n",
			"\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n",
			"\t", "debug:                    ", this.settings.debug.toString(), "\n",

			"\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n",

			"\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n",
			"\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n",
			"\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n",
			"\t", "button_width:             ", this.settings.button_width.toString(), "\n",
			"\t", "button_height:            ", this.settings.button_height.toString(), "\n",
			"\t", "button_text:              ", this.settings.button_text.toString(), "\n",
			"\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n",
			"\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n",
			"\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n",
			"\t", "button_action:            ", this.settings.button_action.toString(), "\n",
			"\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n",

			"\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n",
			"Event Handlers:\n",
			"\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n",
			"\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n",
			"\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n",
			"\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n",
			"\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n",
			"\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n",
			"\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n",
			"\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n",
			"\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n",
			"\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"
		].join("")
	);
};

/* Note: addSetting and getSetting are no longer used by SWFUpload but are included
	the maintain v2 API compatibility
*/
// Public: (Deprecated) addSetting adds a setting value. If the value given is undefined or null then the default_value is used.
SWFUpload.prototype.addSetting = function (name, value, default_value) {
    if (value == undefined) {
        return (this.settings[name] = default_value);
    } else {
        return (this.settings[name] = value);
	}
};

// Public: (Deprecated) getSetting gets a setting. Returns an empty string if the setting was not found.
SWFUpload.prototype.getSetting = function (name) {
    if (this.settings[name] != undefined) {
        return this.settings[name];
	}

    return "";
};



// Private: callFlash handles function calls made to the Flash element.
// Calls are made with a setTimeout for some functions to work around
// bugs in the ExternalInterface library.
SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
	argumentArray = argumentArray || [];

	var movieElement = this.getMovieElement();
	var returnValue, returnString;

	// Flash's method if calling ExternalInterface methods (code adapted from MooTools).
	try {
		returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + '</invoke>');
		returnValue = eval(returnString);
	} catch (ex) {
		throw "Call to " + functionName + " failed";
	}

	// Unescape file post param values
	if (returnValue != undefined && typeof returnValue.post === "object") {
		returnValue = this.unescapeFilePostParams(returnValue);
	}

	return returnValue;
};

/* *****************************
	-- Flash control methods --
	Your UI should use these
	to operate SWFUpload
   ***************************** */

// WARNING: this function does not work in Flash Player 10
// Public: selectFile causes a File Selection Dialog window to appear.  This
// dialog only allows 1 file to be selected.
SWFUpload.prototype.selectFile = function () {
	this.callFlash("SelectFile");
};

// WARNING: this function does not work in Flash Player 10
// Public: selectFiles causes a File Selection Dialog window to appear/ This
// dialog allows the user to select any number of files
// Flash Bug Warning: Flash limits the number of selectable files based on the combined length of the file names.
// If the selection name length is too long the dialog will fail in an unpredictable manner.  There is no work-around
// for this bug.
SWFUpload.prototype.selectFiles = function () {
	this.callFlash("SelectFiles");
};


// Public: startUpload starts uploading the first file in the queue unless
// the optional parameter 'fileID' specifies the ID
SWFUpload.prototype.startUpload = function (fileID) {
	this.callFlash("StartUpload", [fileID]);
};

// Public: cancelUpload cancels any queued file.  The fileID parameter may be the file ID or index.
// If you do not specify a fileID the current uploading file or first file in the queue is cancelled.
// If you do not want the uploadError event to trigger you can specify false for the triggerErrorEvent parameter.
SWFUpload.prototype.cancelUpload = function (fileID, triggerErrorEvent) {
	if (triggerErrorEvent !== false) {
		triggerErrorEvent = true;
	}
	this.callFlash("CancelUpload", [fileID, triggerErrorEvent]);
};

// Public: stopUpload stops the current upload and requeues the file at the beginning of the queue.
// If nothing is currently uploading then nothing happens.
SWFUpload.prototype.stopUpload = function () {
	this.callFlash("StopUpload");
};

/* ************************
 * Settings methods
 *   These methods change the SWFUpload settings.
 *   SWFUpload settings should not be changed directly on the settings object
 *   since many of the settings need to be passed to Flash in order to take
 *   effect.
 * *********************** */

// Public: getStats gets the file statistics object.
SWFUpload.prototype.getStats = function () {
	return this.callFlash("GetStats");
};

// Public: setStats changes the SWFUpload statistics.  You shouldn't need to
// change the statistics but you can.  Changing the statistics does not
// affect SWFUpload accept for the successful_uploads count which is used
// by the upload_limit setting to determine how many files the user may upload.
SWFUpload.prototype.setStats = function (statsObject) {
	this.callFlash("SetStats", [statsObject]);
};

// Public: getFile retrieves a File object by ID or Index.  If the file is
// not found then 'null' is returned.
SWFUpload.prototype.getFile = function (fileID) {
	if (typeof(fileID) === "number") {
		return this.callFlash("GetFileByIndex", [fileID]);
	} else {
		return this.callFlash("GetFile", [fileID]);
	}
};

// Public: addFileParam sets a name/value pair that will be posted with the
// file specified by the Files ID.  If the name already exists then the
// exiting value will be overwritten.
SWFUpload.prototype.addFileParam = function (fileID, name, value) {
	return this.callFlash("AddFileParam", [fileID, name, value]);
};

// Public: removeFileParam removes a previously set (by addFileParam) name/value
// pair from the specified file.
SWFUpload.prototype.removeFileParam = function (fileID, name) {
	this.callFlash("RemoveFileParam", [fileID, name]);
};

// Public: setUploadUrl changes the upload_url setting.
SWFUpload.prototype.setUploadURL = function (url) {
	this.settings.upload_url = url.toString();
	this.callFlash("SetUploadURL", [url]);
};

// Public: setPostParams changes the post_params setting
SWFUpload.prototype.setPostParams = function (paramsObject) {
	this.settings.post_params = paramsObject;
	this.callFlash("SetPostParams", [paramsObject]);
};

// Public: addPostParam adds post name/value pair.  Each name can have only one value.
SWFUpload.prototype.addPostParam = function (name, value) {
	this.settings.post_params[name] = value;
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: removePostParam deletes post name/value pair.
SWFUpload.prototype.removePostParam = function (name) {
	delete this.settings.post_params[name];
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: setFileTypes changes the file_types setting and the file_types_description setting
SWFUpload.prototype.setFileTypes = function (types, description) {
	this.settings.file_types = types;
	this.settings.file_types_description = description;
	this.callFlash("SetFileTypes", [types, description]);
};

// Public: setFileSizeLimit changes the file_size_limit setting
SWFUpload.prototype.setFileSizeLimit = function (fileSizeLimit) {
	this.settings.file_size_limit = fileSizeLimit;
	this.callFlash("SetFileSizeLimit", [fileSizeLimit]);
};

// Public: setFileUploadLimit changes the file_upload_limit setting
SWFUpload.prototype.setFileUploadLimit = function (fileUploadLimit) {
	this.settings.file_upload_limit = fileUploadLimit;
	this.callFlash("SetFileUploadLimit", [fileUploadLimit]);
};

// Public: setFileQueueLimit changes the file_queue_limit setting
SWFUpload.prototype.setFileQueueLimit = function (fileQueueLimit) {
	this.settings.file_queue_limit = fileQueueLimit;
	this.callFlash("SetFileQueueLimit", [fileQueueLimit]);
};

// Public: setFilePostName changes the file_post_name setting
SWFUpload.prototype.setFilePostName = function (filePostName) {
	this.settings.file_post_name = filePostName;
	this.callFlash("SetFilePostName", [filePostName]);
};

// Public: setUseQueryString changes the use_query_string setting
SWFUpload.prototype.setUseQueryString = function (useQueryString) {
	this.settings.use_query_string = useQueryString;
	this.callFlash("SetUseQueryString", [useQueryString]);
};

// Public: setRequeueOnError changes the requeue_on_error setting
SWFUpload.prototype.setRequeueOnError = function (requeueOnError) {
	this.settings.requeue_on_error = requeueOnError;
	this.callFlash("SetRequeueOnError", [requeueOnError]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setHTTPSuccess = function (http_status_codes) {
	if (typeof http_status_codes === "string") {
		http_status_codes = http_status_codes.replace(" ", "").split(",");
	}

	this.settings.http_success = http_status_codes;
	this.callFlash("SetHTTPSuccess", [http_status_codes]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setAssumeSuccessTimeout = function (timeout_seconds) {
	this.settings.assume_success_timeout = timeout_seconds;
	this.callFlash("SetAssumeSuccessTimeout", [timeout_seconds]);
};

// Public: setDebugEnabled changes the debug_enabled setting
SWFUpload.prototype.setDebugEnabled = function (debugEnabled) {
	this.settings.debug_enabled = debugEnabled;
	this.callFlash("SetDebugEnabled", [debugEnabled]);
};

// Public: setButtonImageURL loads a button image sprite
SWFUpload.prototype.setButtonImageURL = function (buttonImageURL) {
	if (buttonImageURL == undefined) {
		buttonImageURL = "";
	}

	this.settings.button_image_url = buttonImageURL;
	this.callFlash("SetButtonImageURL", [buttonImageURL]);
};

// Public: setButtonDimensions resizes the Flash Movie and button
SWFUpload.prototype.setButtonDimensions = function (width, height) {
	this.settings.button_width = width;
	this.settings.button_height = height;

	var movie = this.getMovieElement();
	if (movie != undefined) {
		movie.style.width = width + "px";
		movie.style.height = height + "px";
	}

	this.callFlash("SetButtonDimensions", [width, height]);
};
// Public: setButtonText Changes the text overlaid on the button
SWFUpload.prototype.setButtonText = function (html) {
	this.settings.button_text = html;
	this.callFlash("SetButtonText", [html]);
};
// Public: setButtonTextPadding changes the top and left padding of the text overlay
SWFUpload.prototype.setButtonTextPadding = function (left, top) {
	this.settings.button_text_top_padding = top;
	this.settings.button_text_left_padding = left;
	this.callFlash("SetButtonTextPadding", [left, top]);
};

// Public: setButtonTextStyle changes the CSS used to style the HTML/Text overlaid on the button
SWFUpload.prototype.setButtonTextStyle = function (css) {
	this.settings.button_text_style = css;
	this.callFlash("SetButtonTextStyle", [css]);
};
// Public: setButtonDisabled disables/enables the button
SWFUpload.prototype.setButtonDisabled = function (isDisabled) {
	this.settings.button_disabled = isDisabled;
	this.callFlash("SetButtonDisabled", [isDisabled]);
};
// Public: setButtonAction sets the action that occurs when the button is clicked
SWFUpload.prototype.setButtonAction = function (buttonAction) {
	this.settings.button_action = buttonAction;
	this.callFlash("SetButtonAction", [buttonAction]);
};

// Public: setButtonCursor changes the mouse cursor displayed when hovering over the button
SWFUpload.prototype.setButtonCursor = function (cursor) {
	this.settings.button_cursor = cursor;
	this.callFlash("SetButtonCursor", [cursor]);
};

/* *******************************
	Flash Event Interfaces
	These functions are used by Flash to trigger the various
	events.

	All these functions a Private.

	Because the ExternalInterface library is buggy the event calls
	are added to a queue and the queue then executed by a setTimeout.
	This ensures that events are executed in a determinate order and that
	the ExternalInterface bugs are avoided.
******************************* */

SWFUpload.prototype.queueEvent = function (handlerName, argumentArray) {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop

	if (argumentArray == undefined) {
		argumentArray = [];
	} else if (!(argumentArray instanceof Array)) {
		argumentArray = [argumentArray];
	}

	var self = this;
	if (typeof this.settings[handlerName] === "function") {
		// Queue the event
		this.eventQueue.push(function () {
			this.settings[handlerName].apply(this, argumentArray);
		});

		// Execute the next queued event
		setTimeout(function () {
			self.executeNextEvent();
		}, 0);

	} else if (this.settings[handlerName] !== null) {
		throw "Event handler " + handlerName + " is unknown or is not a function";
	}
};

// Private: Causes the next event in the queue to be executed.  Since events are queued using a setTimeout
// we must queue them in order to garentee that they are executed in order.
SWFUpload.prototype.executeNextEvent = function () {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop

	var  f = this.eventQueue ? this.eventQueue.shift() : null;
	if (typeof(f) === "function") {
		f.apply(this);
	}
};

// Private: unescapeFileParams is part of a workaround for a flash bug where objects passed through ExternalInterface cannot have
// properties that contain characters that are not valid for JavaScript identifiers. To work around this
// the Flash Component escapes the parameter names and we must unescape again before passing them along.
SWFUpload.prototype.unescapeFilePostParams = function (file) {
	var reg = /[$]([0-9a-f]{4})/i;
	var unescapedPost = {};
	var uk;

	if (file != undefined) {
		for (var k in file.post) {
			if (file.post.hasOwnProperty(k)) {
				uk = k;
				var match;
				while ((match = reg.exec(uk)) !== null) {
					uk = uk.replace(match[0], String.fromCharCode(parseInt("0x" + match[1], 16)));
				}
				unescapedPost[uk] = file.post[k];
			}
		}

		file.post = unescapedPost;
	}

	return file;
};

// Private: Called by Flash to see if JS can call in to Flash (test if External Interface is working)
SWFUpload.prototype.testExternalInterface = function () {
	try {
		return this.callFlash("TestExternalInterface");
	} catch (ex) {
		return false;
	}
};

// Private: This event is called by Flash when it has finished loading. Don't modify this.
// Use the swfupload_loaded_handler event setting to execute custom code when SWFUpload has loaded.
SWFUpload.prototype.flashReady = function () {
	// Check that the movie element is loaded correctly with its ExternalInterface methods defined
	var movieElement = this.getMovieElement();

	if (!movieElement) {
		this.debug("Flash called back ready but the flash movie can't be found.");
		return;
	}

	this.cleanUp(movieElement);

	this.queueEvent("swfupload_loaded_handler");
};

// Private: removes Flash added fuctions to the DOM node to prevent memory leaks in IE.
// This function is called by Flash each time the ExternalInterface functions are created.
SWFUpload.prototype.cleanUp = function (movieElement) {
	// Pro-actively unhook all the Flash functions
	try {
		if (this.movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
			for (var key in movieElement) {
				try {
					if (typeof(movieElement[key]) === "function") {
						movieElement[key] = null;
					}
				} catch (ex) {
				}
			}
		}
	} catch (ex1) {

	}

	// Fix Flashes own cleanup code so if the SWFMovie was removed from the page
	// it doesn't display errors.
	window["__flash__removeCallback"] = function (instance, name) {
		try {
			if (instance) {
				instance[name] = null;
			}
		} catch (flashEx) {

		}
	};

};


/* This is a chance to do something before the browse window opens */
SWFUpload.prototype.fileDialogStart = function () {
	this.queueEvent("file_dialog_start_handler");
};


/* Called when a file is successfully added to the queue. */
SWFUpload.prototype.fileQueued = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queued_handler", file);
};


/* Handle errors that occur when an attempt to queue a file fails. */
SWFUpload.prototype.fileQueueError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queue_error_handler", [file, errorCode, message]);
};

/* Called after the file dialog has closed and the selected files have been queued.
	You could call startUpload here if you want the queued files to begin uploading immediately. */
SWFUpload.prototype.fileDialogComplete = function (numFilesSelected, numFilesQueued, numFilesInQueue) {
	this.queueEvent("file_dialog_complete_handler", [numFilesSelected, numFilesQueued, numFilesInQueue]);
};

SWFUpload.prototype.uploadStart = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("return_upload_start_handler", file);
};

SWFUpload.prototype.returnUploadStart = function (file) {
	var returnValue;
	if (typeof this.settings.upload_start_handler === "function") {
		file = this.unescapeFilePostParams(file);
		returnValue = this.settings.upload_start_handler.call(this, file);
	} else if (this.settings.upload_start_handler != undefined) {
		throw "upload_start_handler must be a function";
	}

	// Convert undefined to true so if nothing is returned from the upload_start_handler it is
	// interpretted as 'true'.
	if (returnValue === undefined) {
		returnValue = true;
	}

	returnValue = !!returnValue;

	this.callFlash("ReturnUploadStart", [returnValue]);
};



SWFUpload.prototype.uploadProgress = function (file, bytesComplete, bytesTotal) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_progress_handler", [file, bytesComplete, bytesTotal]);
};

SWFUpload.prototype.uploadError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_error_handler", [file, errorCode, message]);
};

SWFUpload.prototype.uploadSuccess = function (file, serverData, responseReceived) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_success_handler", [file, serverData, responseReceived]);
};

SWFUpload.prototype.uploadComplete = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_complete_handler", file);
};

/* Called by SWFUpload JavaScript and Flash functions when debug is enabled. By default it writes messages to the
   internal debug console.  You can override this event and have messages written where you want. */
SWFUpload.prototype.debug = function (message) {
	this.queueEvent("debug_handler", message);
};


/* **********************************
	Debug Console
	The debug console is a self contained, in page location
	for debug message to be sent.  The Debug Console adds
	itself to the body if necessary.

	The console is automatically scrolled as messages appear.

	If you are using your own debug handler or when you deploy to production and
	have debug disabled you can remove these functions to reduce the file size
	and complexity.
********************************** */

// Private: debugMessage is the default debug_handler.  If you want to print debug messages
// call the debug() function.  When overriding the function your own function should
// check to see if the debug setting is true before outputting debug information.
SWFUpload.prototype.debugMessage = function (message) {
	if (this.settings.debug) {
		var exceptionMessage, exceptionValues = [];

		// Check for an exception object and print it nicely
		if (typeof message === "object" && typeof message.name === "string" && typeof message.message === "string") {
			for (var key in message) {
				if (message.hasOwnProperty(key)) {
					exceptionValues.push(key + ": " + message[key]);
				}
			}
			exceptionMessage = exceptionValues.join("\n") || "";
			exceptionValues = exceptionMessage.split("\n");
			exceptionMessage = "EXCEPTION: " + exceptionValues.join("\nEXCEPTION: ");
			SWFUpload.Console.writeLine(exceptionMessage);
		} else {
			SWFUpload.Console.writeLine(message);
		}
	}
};

SWFUpload.Console = {};
SWFUpload.Console.writeLine = function (message) {
	var console, documentForm;

	try {
		console = document.getElementById("SWFUpload_Console");

		if (!console) {
			documentForm = document.createElement("form");
			document.getElementsByTagName("body")[0].appendChild(documentForm);

			console = document.createElement("textarea");
			console.id = "SWFUpload_Console";
			console.style.fontFamily = "monospace";
			console.setAttribute("wrap", "off");
			console.wrap = "off";
			console.style.overflow = "auto";
			console.style.width = "700px";
			console.style.height = "350px";
			console.style.margin = "5px";
			documentForm.appendChild(console);
		}

		console.value += message + "\n";

		console.scrollTop = console.scrollHeight - console.clientHeight;
	} catch (ex) {
		alert("Exception: " + ex.name + " Message: " + ex.message);
	}
};

})();

(function() {
/*
	Queue Plug-in

	Features:
		*Adds a cancelQueue() method for cancelling the entire queue.
		*All queued files are uploaded when startUpload() is called.
		*If false is returned from uploadComplete then the queue upload is stopped.
		 If false is not returned (strict comparison) then the queue upload is continued.
		*Adds a QueueComplete event that is fired when all the queued files have finished uploading.
		 Set the event handler with the queue_complete_handler setting.

	*/

if (typeof(SWFUpload) === "function") {
	SWFUpload.queue = {};

	SWFUpload.prototype.initSettings = (function (oldInitSettings) {
		return function () {
			if (typeof(oldInitSettings) === "function") {
				oldInitSettings.call(this);
			}

			this.queueSettings = {};

			this.queueSettings.queue_cancelled_flag = false;
			this.queueSettings.queue_upload_count = 0;

			this.queueSettings.user_upload_complete_handler = this.settings.upload_complete_handler;
			this.queueSettings.user_upload_start_handler = this.settings.upload_start_handler;
			this.settings.upload_complete_handler = SWFUpload.queue.uploadCompleteHandler;
			this.settings.upload_start_handler = SWFUpload.queue.uploadStartHandler;

			this.settings.queue_complete_handler = this.settings.queue_complete_handler || null;
		};
	})(SWFUpload.prototype.initSettings);

	SWFUpload.prototype.startUpload = function (fileID) {
		this.queueSettings.queue_cancelled_flag = false;
		this.callFlash("StartUpload", [fileID]);
	};

	SWFUpload.prototype.cancelQueue = function () {
		this.queueSettings.queue_cancelled_flag = true;
		this.stopUpload();

		var stats = this.getStats();
		while (stats.files_queued > 0) {
			this.cancelUpload();
			stats = this.getStats();
		}
	};

	SWFUpload.queue.uploadStartHandler = function (file) {
		var returnValue;
		if (typeof(this.queueSettings.user_upload_start_handler) === "function") {
			returnValue = this.queueSettings.user_upload_start_handler.call(this, file);
		}

		// To prevent upload a real "FALSE" value must be returned, otherwise default to a real "TRUE" value.
		returnValue = (returnValue === false) ? false : true;

		this.queueSettings.queue_cancelled_flag = !returnValue;

		return returnValue;
	};

	SWFUpload.queue.uploadCompleteHandler = function (file) {
		var user_upload_complete_handler = this.queueSettings.user_upload_complete_handler;
		var continueUpload;

		if (file.filestatus === SWFUpload.FILE_STATUS.COMPLETE) {
			this.queueSettings.queue_upload_count++;
		}

		if (typeof(user_upload_complete_handler) === "function") {
			continueUpload = (user_upload_complete_handler.call(this, file) === false) ? false : true;
		} else if (file.filestatus === SWFUpload.FILE_STATUS.QUEUED) {
			// If the file was stopped and re-queued don't restart the upload
			continueUpload = false;
		} else {
			continueUpload = true;
		}

		if (continueUpload) {
			var stats = this.getStats();
			if (stats.files_queued > 0 && this.queueSettings.queue_cancelled_flag === false) {
				this.startUpload();
			} else if (this.queueSettings.queue_cancelled_flag === false) {
				this.queueEvent("queue_complete_handler", [this.queueSettings.queue_upload_count]);
				this.queueSettings.queue_upload_count = 0;
			} else {
				this.queueSettings.queue_cancelled_flag = false;
				this.queueSettings.queue_upload_count = 0;
			}
		}
	};
}

})();
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('pagebreak', function(K) {
	var self = this;
	var name = 'pagebreak';
	var pagebreakHtml = K.undef(self.pagebreakHtml, '<hr style="page-break-after: always;" class="ke-pagebreak" />');

	self.clickToolbar(name, function() {
		var cmd = self.cmd, range = cmd.range;
		self.focus();
		range.enlarge(true);
		cmd.split(true);
		var tail = self.newlineTag == 'br' || K.WEBKIT ? '' : '<p id="__kindeditor_tail_tag__"></p>';
		self.insertHtml(pagebreakHtml + tail);
		if (tail !== '') {
			var p = K('#__kindeditor_tail_tag__', self.edit.doc);
			range.selectNodeContents(p[0]);
			p.removeAttr('id');
			cmd.select();
		}
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('plainpaste', function(K) {
	var self = this, name = 'plainpaste';
	self.clickToolbar(name, function() {
		var lang = self.lang(name + '.'),
			html = '<div style="padding:10px 20px;">' +
				'<div style="margin-bottom:10px;">' + lang.comment + '</div>' +
				'<textarea class="ke-textarea" style="width:408px;height:260px;"></textarea>' +
				'</div>',
			dialog = self.createDialog({
				name : name,
				width : 450,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var html = textarea.val();
						html = K.escape(html);
						html = html.replace(/ {2}/g, ' &nbsp;');
						if (self.newlineTag == 'p') {
							html = html.replace(/^/, '<p>').replace(/$/, '</p>').replace(/\n/g, '</p><p>');
						} else {
							html = html.replace(/\n/g, '<br />$&');
						}
						self.insertHtml(html).hideDialog().focus();
					}
				}
			}),
			textarea = K('textarea', dialog.div);
		textarea[0].focus();
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('preview', function(K) {
	var self = this, name = 'preview', undefined;
	self.clickToolbar(name, function() {
		var lang = self.lang(name + '.'),
			html = '<div style="padding:10px 20px;">' +
				'<iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe>' +
				'</div>',
			dialog = self.createDialog({
				name : name,
				width : 750,
				title : self.lang(name),
				body : html
			}),
			iframe = K('iframe', dialog.div),
			doc = K.iframeDoc(iframe);
		doc.open();
		doc.write(self.fullHtml());
		doc.close();
		K(doc.body).css('background-color', '#FFF');
		iframe[0].contentWindow.focus();
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('quickformat', function(K) {
	var self = this, name = 'quickformat',
		blockMap = K.toMap('blockquote,center,div,h1,h2,h3,h4,h5,h6,p');
	function getFirstChild(knode) {
		var child = knode.first();
		while (child && child.first()) {
			child = child.first();
		}
		return child;
	}
	self.clickToolbar(name, function() {
		self.focus();
		var doc = self.edit.doc,
			range = self.cmd.range,
			child = K(doc.body).first(), next,
			nodeList = [], subList = [],
			bookmark = range.createBookmark(true);
		while(child) {
			next = child.next();
			var firstChild = getFirstChild(child);
			if (!firstChild || firstChild.name != 'img') {
				if (blockMap[child.name]) {
					child.html(child.html().replace(/^(\s|&nbsp;|　)+/ig, ''));
					child.css('text-indent', '2em');
				} else {
					subList.push(child);
				}
				if (!next || (blockMap[next.name] || blockMap[child.name] && !blockMap[next.name])) {
					if (subList.length > 0) {
						nodeList.push(subList);
					}
					subList = [];
				}
			}
			child = next;
		}
		K.each(nodeList, function(i, subList) {
			var wrapper = K('<p style="text-indent:2em;"></p>', doc);
			subList[0].before(wrapper);
			K.each(subList, function(i, knode) {
				wrapper.append(knode);
			});
		});
		range.moveToBookmark(bookmark);
		self.addBookmark();
	});
});

/**
--------------------------
abcd<br />
1234<br />

to

<p style="text-indent:2em;">
	abcd<br />
	1234<br />
</p>

--------------------------

&nbsp; abcd<img>1233
<p>1234</p>

to

<p style="text-indent:2em;">abcd<img>1233</p>
<p style="text-indent:2em;">1234</p>

--------------------------
*/
;
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('table', function(K) {
	var self = this, name = 'table', lang = self.lang(name + '.'), zeroborder = 'ke-zeroborder';
	// 设置颜色
	function _setColor(box, color) {
		color = color.toUpperCase();
		box.css('background-color', color);
		box.css('color', color === '#000000' ? '#FFFFFF' : '#000000');
		box.html(color);
	}
	// 初始化取色器
	var pickerList = [];
	function _initColorPicker(dialogDiv, colorBox) {
		colorBox.bind('click,mousedown', function(e){
			e.stopPropagation();
		});
		function removePicker() {
			K.each(pickerList, function() {
				this.remove();
			});
			pickerList = [];
			K(document).unbind('click,mousedown', removePicker);
			dialogDiv.unbind('click,mousedown', removePicker);
		}
		colorBox.click(function(e) {
			removePicker();
			var box = K(this),
				pos = box.pos();
			var picker = K.colorpicker({
				x : pos.x,
				y : pos.y + box.height(),
				z : 811214,
				selectedColor : K(this).html(),
				colors : self.colorTable,
				noColor : self.lang('noColor'),
				shadowMode : self.shadowMode,
				click : function(color) {
					_setColor(box, color);
					removePicker();
				}
			});
			pickerList.push(picker);
			K(document).bind('click,mousedown', removePicker);
			dialogDiv.bind('click,mousedown', removePicker);
		});
	}
	// 取得下一行cell的index
	function _getCellIndex(table, row, cell) {
		var rowSpanCount = 0;
		for (var i = 0, len = row.cells.length; i < len; i++) {
			if (row.cells[i] == cell) {
				break;
			}
			rowSpanCount += row.cells[i].rowSpan - 1;
		}
		return cell.cellIndex - rowSpanCount;
	}
	self.plugin.table = {
		//insert or modify table
		prop : function(isInsert) {
			var html = [
				'<div style="padding:20px;">',
				//rows, cols
				'<div class="ke-dialog-row">',
				'<label for="keRows" style="width:90px;">' + lang.cells + '</label>',
				lang.rows + ' <input type="text" id="keRows" class="ke-input-text ke-input-number" name="rows" value="" maxlength="4" /> &nbsp; ',
				lang.cols + ' <input type="text" class="ke-input-text ke-input-number" name="cols" value="" maxlength="4" />',
				'</div>',
				//width, height
				'<div class="ke-dialog-row">',
				'<label for="keWidth" style="width:90px;">' + lang.size + '</label>',
				lang.width + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ',
				'<select name="widthType">',
				'<option value="%">' + lang.percent + '</option>',
				'<option value="px">' + lang.px + '</option>',
				'</select> &nbsp; ',
				lang.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ',
				'<select name="heightType">',
				'<option value="%">' + lang.percent + '</option>',
				'<option value="px">' + lang.px + '</option>',
				'</select>',
				'</div>',
				//space, padding
				'<div class="ke-dialog-row">',
				'<label for="kePadding" style="width:90px;">' + lang.space + '</label>',
				lang.padding + ' <input type="text" id="kePadding" class="ke-input-text ke-input-number" name="padding" value="" maxlength="4" /> &nbsp; ',
				lang.spacing + ' <input type="text" class="ke-input-text ke-input-number" name="spacing" value="" maxlength="4" />',
				'</div>',
				//align
				'<div class="ke-dialog-row">',
				'<label for="keAlign" style="width:90px;">' + lang.align + '</label>',
				'<select id="keAlign" name="align">',
				'<option value="">' + lang.alignDefault + '</option>',
				'<option value="left">' + lang.alignLeft + '</option>',
				'<option value="center">' + lang.alignCenter + '</option>',
				'<option value="right">' + lang.alignRight + '</option>',
				'</select>',
				'</div>',
				//border
				'<div class="ke-dialog-row">',
				'<label for="keBorder" style="width:90px;">' + lang.border + '</label>',
				lang.borderWidth + ' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ',
				lang.borderColor + ' <span class="ke-inline-block ke-input-color"></span>',
				'</div>',
				//background color
				'<div class="ke-dialog-row">',
				'<label for="keBgColor" style="width:90px;">' + lang.backgroundColor + '</label>',
				'<span class="ke-inline-block ke-input-color"></span>',
				'</div>',
				'</div>'
			].join('');
			var dialog = self.createDialog({
				name : name,
				width : 500,
				title : self.lang(name),
				body : html,
				beforeRemove : function() {
					colorBox.unbind();
				},
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var rows = rowsBox.val(),
							cols = colsBox.val(),
							width = widthBox.val(),
							height = heightBox.val(),
							widthType = widthTypeBox.val(),
							heightType = heightTypeBox.val(),
							padding = paddingBox.val(),
							spacing = spacingBox.val(),
							align = alignBox.val(),
							border = borderBox.val(),
							borderColor = K(colorBox[0]).html() || '',
							bgColor = K(colorBox[1]).html() || '';
						if (rows == 0 || !/^\d+$/.test(rows)) {
							alert(self.lang('invalidRows'));
							rowsBox[0].focus();
							return;
						}
						if (cols == 0 || !/^\d+$/.test(cols)) {
							alert(self.lang('invalidRows'));
							colsBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(width)) {
							alert(self.lang('invalidWidth'));
							widthBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(height)) {
							alert(self.lang('invalidHeight'));
							heightBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(padding)) {
							alert(self.lang('invalidPadding'));
							paddingBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(spacing)) {
							alert(self.lang('invalidSpacing'));
							spacingBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(border)) {
							alert(self.lang('invalidBorder'));
							borderBox[0].focus();
							return;
						}
						//modify table
						if (table) {
							if (width !== '') {
								table.width(width + widthType);
							} else {
								table.css('width', '');
							}
							if (table[0].width !== undefined) {
								table.removeAttr('width');
							}
							if (height !== '') {
								table.height(height + heightType);
							} else {
								table.css('height', '');
							}
							if (table[0].height !== undefined) {
								table.removeAttr('height');
							}
							table.css('background-color', bgColor);
							if (table[0].bgColor !== undefined) {
								table.removeAttr('bgColor');
							}
							if (padding !== '') {
								table[0].cellPadding = padding;
							} else {
								table.removeAttr('cellPadding');
							}
							if (spacing !== '') {
								table[0].cellSpacing = spacing;
							} else {
								table.removeAttr('cellSpacing');
							}
							if (align !== '') {
								table[0].align = align;
							} else {
								table.removeAttr('align');
							}
							if (border !== '') {
								table.attr('border', border);
							} else {
								table.removeAttr('border');
							}
							if (border === '' || border === '0') {
								table.addClass(zeroborder);
							} else {
								table.removeClass(zeroborder);
							}
							if (borderColor !== '') {
								table.attr('borderColor', borderColor);
							} else {
								table.removeAttr('borderColor');
							}
							self.hideDialog().focus();
							return;
						}
						//insert new table
						var style = '';
						if (width !== '') {
							style += 'width:' + width + widthType + ';';
						}
						if (height !== '') {
							style += 'height:' + height + heightType + ';';
						}
						if (bgColor !== '') {
							style += 'background-color:' + bgColor + ';';
						}
						var html = '<table';
						if (style !== '') {
							html += ' style="' + style + '"';
						}
						if (padding !== '') {
							html += ' cellpadding="' + padding + '"';
						}
						if (spacing !== '') {
							html += ' cellspacing="' + spacing + '"';
						}
						if (align !== '') {
							html += ' align="' + align + '"';
						}
						if (border !== '') {
							html += ' border="' + border + '"';
						}
						if (border === '' || border === '0') {
							html += ' class="' + zeroborder + '"';
						}
						if (borderColor !== '') {
							html += ' bordercolor="' + borderColor + '"';
						}
						html += '>';
						for (var i = 0; i < rows; i++) {
							html += '<tr>';
							for (var j = 0; j < cols; j++) {
								html += '<td>' + (K.IE ? '&nbsp;' : '<br />') + '</td>';
							}
							html += '</tr>';
						}
						html += '</table>';
						if (!K.IE) {
							html += '<br />';
						}
						self.insertHtml(html);
						self.select().hideDialog().focus();
						self.addBookmark();
					}
				}
			}),
			div = dialog.div,
			rowsBox = K('[name="rows"]', div).val(3),
			colsBox = K('[name="cols"]', div).val(2),
			widthBox = K('[name="width"]', div).val(100),
			heightBox = K('[name="height"]', div),
			widthTypeBox = K('[name="widthType"]', div),
			heightTypeBox = K('[name="heightType"]', div),
			paddingBox = K('[name="padding"]', div).val(2),
			spacingBox = K('[name="spacing"]', div).val(0),
			alignBox = K('[name="align"]', div),
			borderBox = K('[name="border"]', div).val(1),
			colorBox = K('.ke-input-color', div);
			_initColorPicker(div, colorBox.eq(0));
			_initColorPicker(div, colorBox.eq(1));
			_setColor(colorBox.eq(0), '#000000');
			_setColor(colorBox.eq(1), '');
			// foucs and select
			rowsBox[0].focus();
			rowsBox[0].select();
			var table;
			if (isInsert) {
				return;
			}
			//get selected table node
			table = self.plugin.getSelectedTable();
			if (table) {
				rowsBox.val(table[0].rows.length);
				colsBox.val(table[0].rows.length > 0 ? table[0].rows[0].cells.length : 0);
				rowsBox.attr('disabled', true);
				colsBox.attr('disabled', true);
				var match,
					tableWidth = table[0].style.width || table[0].width,
					tableHeight = table[0].style.height || table[0].height;
				if (tableWidth !== undefined && (match = /^(\d+)((?:px|%)*)$/.exec(tableWidth))) {
					widthBox.val(match[1]);
					widthTypeBox.val(match[2]);
				} else {
					widthBox.val('');
				}
				if (tableHeight !== undefined && (match = /^(\d+)((?:px|%)*)$/.exec(tableHeight))) {
					heightBox.val(match[1]);
					heightTypeBox.val(match[2]);
				}
				paddingBox.val(table[0].cellPadding || '');
				spacingBox.val(table[0].cellSpacing || '');
				alignBox.val(table[0].align || '');
				borderBox.val(table[0].border === undefined ? '' : table[0].border);
				_setColor(colorBox.eq(0), K.toHex(table.attr('borderColor') || ''));
				_setColor(colorBox.eq(1), K.toHex(table[0].style.backgroundColor || table[0].bgColor || ''));
				widthBox[0].focus();
				widthBox[0].select();
			}
		},
		//modify cell
		cellprop : function() {
			var html = [
				'<div style="padding:20px;">',
				//width, height
				'<div class="ke-dialog-row">',
				'<label for="keWidth" style="width:90px;">' + lang.size + '</label>',
				lang.width + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ',
				'<select name="widthType">',
				'<option value="%">' + lang.percent + '</option>',
				'<option value="px">' + lang.px + '</option>',
				'</select> &nbsp; ',
				lang.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ',
				'<select name="heightType">',
				'<option value="%">' + lang.percent + '</option>',
				'<option value="px">' + lang.px + '</option>',
				'</select>',
				'</div>',
				//align
				'<div class="ke-dialog-row">',
				'<label for="keAlign" style="width:90px;">' + lang.align + '</label>',
				lang.textAlign + ' <select id="keAlign" name="textAlign">',
				'<option value="">' + lang.alignDefault + '</option>',
				'<option value="left">' + lang.alignLeft + '</option>',
				'<option value="center">' + lang.alignCenter + '</option>',
				'<option value="right">' + lang.alignRight + '</option>',
				'</select> ',
				lang.verticalAlign + ' <select name="verticalAlign">',
				'<option value="">' + lang.alignDefault + '</option>',
				'<option value="top">' + lang.alignTop + '</option>',
				'<option value="middle">' + lang.alignMiddle + '</option>',
				'<option value="bottom">' + lang.alignBottom + '</option>',
				'<option value="baseline">' + lang.alignBaseline + '</option>',
				'</select>',
				'</div>',
				//border
				'<div class="ke-dialog-row">',
				'<label for="keBorder" style="width:90px;">' + lang.border + '</label>',
				lang.borderWidth + ' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ',
				lang.borderColor + ' <span class="ke-inline-block ke-input-color"></span>',
				'</div>',
				//background color
				'<div class="ke-dialog-row">',
				'<label for="keBgColor" style="width:90px;">' + lang.backgroundColor + '</label>',
				'<span class="ke-inline-block ke-input-color"></span>',
				'</div>',
				'</div>'
			].join('');
			var dialog = self.createDialog({
				name : name,
				width : 500,
				title : self.lang('tablecell'),
				body : html,
				beforeRemove : function() {
					colorBox.unbind();
				},
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var width = widthBox.val(),
							height = heightBox.val(),
							widthType = widthTypeBox.val(),
							heightType = heightTypeBox.val(),
							padding = paddingBox.val(),
							spacing = spacingBox.val(),
							textAlign = textAlignBox.val(),
							verticalAlign = verticalAlignBox.val(),
							border = borderBox.val(),
							borderColor = K(colorBox[0]).html() || '',
							bgColor = K(colorBox[1]).html() || '';
						if (!/^\d*$/.test(width)) {
							alert(self.lang('invalidWidth'));
							widthBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(height)) {
							alert(self.lang('invalidHeight'));
							heightBox[0].focus();
							return;
						}
						if (!/^\d*$/.test(border)) {
							alert(self.lang('invalidBorder'));
							borderBox[0].focus();
							return;
						}
						cell.css({
							width : width !== '' ? (width + widthType) : '',
							height : height !== '' ? (height + heightType) : '',
							'background-color' : bgColor,
							'text-align' : textAlign,
							'vertical-align' : verticalAlign,
							'border-width' : border,
							'border-style' : border !== '' ? 'solid' : '',
							'border-color' : borderColor
						});
						self.hideDialog().focus();
						self.addBookmark();
					}
				}
			}),
			div = dialog.div,
			widthBox = K('[name="width"]', div).val(100),
			heightBox = K('[name="height"]', div),
			widthTypeBox = K('[name="widthType"]', div),
			heightTypeBox = K('[name="heightType"]', div),
			paddingBox = K('[name="padding"]', div).val(2),
			spacingBox = K('[name="spacing"]', div).val(0),
			textAlignBox = K('[name="textAlign"]', div),
			verticalAlignBox = K('[name="verticalAlign"]', div),
			borderBox = K('[name="border"]', div).val(1),
			colorBox = K('.ke-input-color', div);
			_initColorPicker(div, colorBox.eq(0));
			_initColorPicker(div, colorBox.eq(1));
			_setColor(colorBox.eq(0), '#000000');
			_setColor(colorBox.eq(1), '');
			// foucs and select
			widthBox[0].focus();
			widthBox[0].select();
			// get selected cell
			var cell = self.plugin.getSelectedCell();
			var match,
				cellWidth = cell[0].style.width || cell[0].width || '',
				cellHeight = cell[0].style.height || cell[0].height || '';
			if ((match = /^(\d+)((?:px|%)*)$/.exec(cellWidth))) {
				widthBox.val(match[1]);
				widthTypeBox.val(match[2]);
			} else {
				widthBox.val('');
			}
			if ((match = /^(\d+)((?:px|%)*)$/.exec(cellHeight))) {
				heightBox.val(match[1]);
				heightTypeBox.val(match[2]);
			}
			textAlignBox.val(cell[0].style.textAlign || '');
			verticalAlignBox.val(cell[0].style.verticalAlign || '');
			var border = cell[0].style.borderWidth || '';
			if (border) {
				border = parseInt(border);
			}
			borderBox.val(border);
			_setColor(colorBox.eq(0), K.toHex(cell[0].style.borderColor || ''));
			_setColor(colorBox.eq(1), K.toHex(cell[0].style.backgroundColor || ''));
			widthBox[0].focus();
			widthBox[0].select();
		},
		insert : function() {
			this.prop(true);
		},
		'delete' : function() {
			var table = self.plugin.getSelectedTable();
			self.cmd.range.setStartBefore(table[0]).collapse(true);
			self.cmd.select();
			table.remove();
			self.addBookmark();
		},
		colinsert : function(offset) {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				index = cell.cellIndex + offset;
			// 取得第一行的index
			index += table.rows[0].cells.length - row.cells.length;

			for (var i = 0, len = table.rows.length; i < len; i++) {
				var newRow = table.rows[i],
					newCell = newRow.insertCell(index);
				newCell.innerHTML = K.IE ? '' : '<br />';
				// 调整下一行的单元格index
				index = _getCellIndex(table, newRow, newCell);
			}
			self.cmd.range.selectNodeContents(cell).collapse(true);
			self.cmd.select();
			self.addBookmark();
		},
		colinsertleft : function() {
			this.colinsert(0);
		},
		colinsertright : function() {
			this.colinsert(1);
		},
		rowinsert : function(offset) {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0];
			var rowIndex = row.rowIndex;
			if (offset === 1) {
				rowIndex = row.rowIndex + (cell.rowSpan - 1) + offset;
			}
			var newRow = table.insertRow(rowIndex);

			for (var i = 0, len = row.cells.length; i < len; i++) {
				// 调整cell个数
				if (row.cells[i].rowSpan > 1) {
					len -= row.cells[i].rowSpan - 1;
				}
				var newCell = newRow.insertCell(i);
				// copy colspan
				if (offset === 1 && row.cells[i].colSpan > 1) {
					newCell.colSpan = row.cells[i].colSpan;
				}
				newCell.innerHTML = K.IE ? '' : '<br />';
			}
			// 调整rowspan
			for (var j = rowIndex; j >= 0; j--) {
				var cells = table.rows[j].cells;
				if (cells.length > i) {
					for (var k = cell.cellIndex; k >= 0; k--) {
						if (cells[k].rowSpan > 1) {
							cells[k].rowSpan += 1;
						}
					}
					break;
				}
			}
			self.cmd.range.selectNodeContents(cell).collapse(true);
			self.cmd.select();
			self.addBookmark();
		},
		rowinsertabove : function() {
			this.rowinsert(0);
		},
		rowinsertbelow : function() {
			this.rowinsert(1);
		},
		rowmerge : function() {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				rowIndex = row.rowIndex, // 当前行的index
				nextRowIndex = rowIndex + cell.rowSpan, // 下一行的index
				nextRow = table.rows[nextRowIndex]; // 下一行
			// 最后一行不能合并
			if (table.rows.length <= nextRowIndex) {
				return;
			}
			var cellIndex = cell.cellIndex; // 下一行单元格的index
			if (nextRow.cells.length <= cellIndex) {
				return;
			}
			var nextCell = nextRow.cells[cellIndex]; // 下一行单元格
			// 上下行的colspan不一致时不能合并
			if (cell.colSpan !== nextCell.colSpan) {
				return;
			}
			cell.rowSpan += nextCell.rowSpan;
			nextRow.deleteCell(cellIndex);
			self.cmd.range.selectNodeContents(cell).collapse(true);
			self.cmd.select();
			self.addBookmark();
		},
		colmerge : function() {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				rowIndex = row.rowIndex, // 当前行的index
				cellIndex = cell.cellIndex,
				nextCellIndex = cellIndex + 1;
			// 最后一列不能合并
			if (row.cells.length <= nextCellIndex) {
				return;
			}
			var nextCell = row.cells[nextCellIndex];
			// 左右列的rowspan不一致时不能合并
			if (cell.rowSpan !== nextCell.rowSpan) {
				return;
			}
			cell.colSpan += nextCell.colSpan;
			row.deleteCell(nextCellIndex);
			self.cmd.range.selectNodeContents(cell).collapse(true);
			self.cmd.select();
			self.addBookmark();
		},
		rowsplit : function() {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				rowIndex = row.rowIndex;
			// 不是可分割单元格
			if (cell.rowSpan === 1) {
				return;
			}
			var cellIndex = _getCellIndex(table, row, cell);
			for (var i = 1, len = cell.rowSpan; i < len; i++) {
				var newRow = table.rows[rowIndex + i],
					newCell = newRow.insertCell(cellIndex);
				if (cell.colSpan > 1) {
					newCell.colSpan = cell.colSpan;
				}
				newCell.innerHTML = K.IE ? '' : '<br />';
				// 调整下一行的单元格index
				cellIndex = _getCellIndex(table, newRow, newCell);
			}
			K(cell).removeAttr('rowSpan');
			self.cmd.range.selectNodeContents(cell).collapse(true);
			self.cmd.select();
			self.addBookmark();
		},
		colsplit : function() {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				cellIndex = cell.cellIndex;
			// 不是可分割单元格
			if (cell.colSpan === 1) {
				return;
			}
			for (var i = 1, len = cell.colSpan; i < len; i++) {
				var newCell = row.insertCell(cellIndex + i);
				if (cell.rowSpan > 1) {
					newCell.rowSpan = cell.rowSpan;
				}
				newCell.innerHTML = K.IE ? '' : '<br />';
			}
			K(cell).removeAttr('colSpan');
			self.cmd.range.selectNodeContents(cell).collapse(true);
			self.cmd.select();
			self.addBookmark();
		},
		coldelete : function() {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				index = cell.cellIndex;
			for (var i = 0, len = table.rows.length; i < len; i++) {
				var newRow = table.rows[i],
					newCell = newRow.cells[index];
				if (newCell.colSpan > 1) {
					newCell.colSpan -= 1;
					if (newCell.colSpan === 1) {
						K(newCell).removeAttr('colSpan');
					}
				} else {
					newRow.deleteCell(index);
				}
				// 跳过不需要删除的行
				if (newCell.rowSpan > 1) {
					i += newCell.rowSpan - 1;
				}
			}
			if (row.cells.length === 0) {
				self.cmd.range.setStartBefore(table).collapse(true);
				self.cmd.select();
				K(table).remove();
			} else {
				self.cmd.selection(true);
			}
			self.addBookmark();
		},
		rowdelete : function() {
			var table = self.plugin.getSelectedTable()[0],
				row = self.plugin.getSelectedRow()[0],
				cell = self.plugin.getSelectedCell()[0],
				rowIndex = row.rowIndex;
			// 从下到上删除
			for (var i = cell.rowSpan - 1; i >= 0; i--) {
				table.deleteRow(rowIndex + i);
			}
			if (table.rows.length === 0) {
				self.cmd.range.setStartBefore(table).collapse(true);
				self.cmd.select();
				K(table).remove();
			} else {
				self.cmd.selection(true);
			}
			self.addBookmark();
		}
	};
	self.clickToolbar(name, self.plugin.table.prop);
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('template', function(K) {
	var self = this, name = 'template', lang = self.lang(name + '.'),
		htmlPath = self.pluginsPath + name + '/html/';
	function getFilePath(fileName) {
		return htmlPath + fileName + '?ver=' + encodeURIComponent(K.DEBUG ? K.TIME : K.VERSION);
	}
	self.clickToolbar(name, function() {
		var lang = self.lang(name + '.'),
			arr = ['<div style="padding:10px 20px;">',
				'<div class="ke-header">',
				// left start
				'<div class="ke-left">',
				lang. selectTemplate + ' <select>'];
			K.each(lang.fileList, function(key, val) {
				arr.push('<option value="' + key + '">' + val + '</option>');
			});
			html = [arr.join(''),
				'</select></div>',
				// right start
				'<div class="ke-right">',
				'<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">' + lang.replaceContent + '</label>',
				'</div>',
				'<div class="ke-clearfix"></div>',
				'</div>',
				'<iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe>',
				'</div>'].join('');
		var dialog = self.createDialog({
			name : name,
			width : 500,
			title : self.lang(name),
			body : html,
			yesBtn : {
				name : self.lang('yes'),
				click : function(e) {
					var doc = K.iframeDoc(iframe);
					self[checkbox[0].checked ? 'html' : 'insertHtml'](doc.body.innerHTML).hideDialog().focus();
				}
			}
		});
		var selectBox = K('select', dialog.div),
			checkbox = K('[name="replaceFlag"]', dialog.div),
			iframe = K('iframe', dialog.div);
		checkbox[0].checked = true;
		iframe.attr('src', getFilePath(selectBox.val()));
		selectBox.change(function() {
			iframe.attr('src', getFilePath(this.value));
		});
	});
});
/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/


KindEditor.plugin('wordpaste', function(K) {
	var self = this, name = 'wordpaste';
	self.clickToolbar(name, function() {
		var lang = self.lang(name + '.'),
			html = '<div style="padding:10px 20px;">' +
				'<div style="margin-bottom:10px;">' + lang.comment + '</div>' +
				'<iframe class="ke-textarea" frameborder="0" style="width:408px;height:260px;"></iframe>' +
				'</div>',
			dialog = self.createDialog({
				name : name,
				width : 450,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var str = doc.body.innerHTML;
						str = K.clearMsWord(str, self.filterMode ? self.htmlTags : K.options.htmlTags);
						self.insertHtml(str).hideDialog().focus();
					}
				}
			}),
			div = dialog.div,
			iframe = K('iframe', div),
			doc = K.iframeDoc(iframe);
		if (!K.IE) {
			doc.designMode = 'on';
		}
		doc.open();
		doc.write('<!doctype html><html><head><title>WordPaste</title></head>');
		doc.write('<body style="background-color:#FFF;font-size:12px;margin:2px;">');
		if (!K.IE) {
			doc.write('<br />');
		}
		doc.write('</body></html>');
		doc.close();
		if (K.IE) {
			doc.body.contentEditable = 'true';
		}
		iframe[0].contentWindow.focus();
	});
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//





;
