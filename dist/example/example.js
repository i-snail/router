!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),a=r(i);n(3);var o=n(7),s=r(o),l=n(11),u=r(l),c=new a["default"]({container:"#container",enterTimeout:300,leaveTimeout:300});c.push(s["default"]).push(u["default"]).setDefault("/").init()},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),s=r(o),l=function(){function e(t){i(this,e),this._options={container:"#container",pagesContainer:"#pages_container",enter:"enter",enterTimeout:0,leave:"leave",leaveTimeout:0},this._index=1,this._$container=null,this._$pagesContainer=null,this._routes=[],this._default=null,this._options=s.extend(this._options,t),this._$container=document.querySelector(this._options.container),this._$pagesContainer=document.querySelector(this._options.pagesContainer)}return a(e,[{key:"init",value:function(){var e=this;window.addEventListener("hashchange",function(t){var n=s.getHash(t.newURL),r=history.state||{};e._go(n,r._index<=e._index)},!1),history.state&&history.state._index&&(this._index=history.state._index),this._index--;var t=s.getHash(location.href),n=this._getRoute(t);return this.go(n?t:this._default),this}},{key:"push",value:function(e){return e=s.extend({url:"*",className:"",render:s.noop,bind:s.noop},e),this._routes.push(e),this}},{key:"setDefault",value:function(e){return this._default=e,this}},{key:"_go",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=this._getRoute(e);if(!r)throw new Error("url "+e+" was not found");return!function(){var e=document.querySelector(r.render),i=t._$container.hasChildNodes();i&&!function(){var e=t._$container.childNodes[0];n&&e.classList.add(t._options.leave),t._options.leaveTimeout>0?!function(){var n=t;setTimeout(function(){n._$pagesContainer.appendChild(e.childNodes[0]),e.parentNode.removeChild(e)},t._options.leaveTimeout)}():(t._$pagesContainer.appendChild(e.childNodes[0]),e.parentNode.removeChild(e))}();var a=document.createElement("div");r.className&&a.classList.add(r.className),a.appendChild(e),t._$container.appendChild(a),!n&&t._options.enter&&i&&a.classList.add(t._options.enter),t._options.enterTimeout>0?setTimeout(function(){a.classList.remove(t._options.enter)},t._options.enterTimeout):a.classList.remove(t._options.enter);try{n?t._index--:t._index++,history.replaceState&&history.replaceState({_index:t._index},"",location.href)}catch(o){}"function"!=typeof r.bind||r.__isBind||(r.bind.call(a),r.__isBind=!0)}(),this}},{key:"go",value:function(e){this._$container.hasChildNodes()?location.hash="#"+e:this._go(e)}},{key:"_getRoute",value:function(e){for(var t=0,n=this._routes.length;n>t;t++){var r=this._routes[t],i=s.getRegExp(r.url),a=s.getParams(r.url),o=i.exec(e);if(o){r.params={};for(var l=0,u=a.length;u>l;l++){var c=a[l];r.params[c]=o[l+1]}return r}}return null}}]),e}();t["default"]=l,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return-1!==e.indexOf("#")?e.substring(e.indexOf("#")+1):"/"}function i(){}function a(e){var t=/\((.*?)\)/g,n=/(\(\?)?:\w+/g,r=/\*\w+/g,i=/[\-{}\[\]+?.,\\\^$|#\s]/g;return e=e.replace(i,"\\$&").replace(t,"(?:$1)?").replace(n,function(e,t){return t?e:"([^/?]+)"}).replace(r,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")}function o(e){for(var t=/:(\w+)/g,n=[],r=void 0;null!==(r=t.exec(e));)n.push(r[1]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.extend=n,t.getHash=r,t.noop=i,t.getRegExp=a,t.getParams=o},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(6)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,"*{margin:0;padding:0}body,html{height:100%}body{overflow-x:hidden}.container{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.container>div{background-color:#fff}@-webkit-keyframes slideIn{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes slideIn{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes slideOut{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}}@keyframes slideOut{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}}.enter,.leave{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.enter{-webkit-animation:slideIn .2s forwards;animation:slideIn .2s forwards}.leave{-webkit-animation:slideOut .25s forwards;animation:slideOut .25s forwards}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(u(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(u(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],a=i[0],o=i[1],s=i[2],l=i[3],u={css:o,media:s,sourceMap:l};n[a]?n[a].parts.push(u):t.push(n[a]={id:a,parts:[u]})}return t}function a(e,t){var n=m(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function u(e,t){var n,r,i;if(t.singleton){var a=y++;n=g||(g=s(t)),r=c.bind(null,n,a,!1),i=c.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function c(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=n[o],l=p[s.id];l.refs--,a.push(l)}if(e){var u=i(e);r(u,t)}for(var o=0;o<a.length;o++){var l=a[o];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete p[l.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(9),s=r(o),l=n(10),u=r(l);t["default"]={url:"/",render:function(){return a["default"].compile(u["default"])({list:s["default"]})}},e.exports=t["default"]},function(e,t,n){var r;/*!
	 * artTemplate - Template Engine
	 * https://github.com/aui/artTemplate
	 * Released under the MIT, BSD, and GPL Licenses
	 */
!function(){function i(e){return e.replace(x,"").replace(k,",").replace(C,"").replace(j,"").replace(S,"").split(T)}function a(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function o(e,t){function n(e){return d+=e.split(/\n/).length-1,c&&(e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),e&&(e=v[1]+a(e)+v[2]+"\n"),e}function r(e){var n=d;if(u?e=u(e,t):o&&(e=e.replace(/\n/g,function(){return d++,"$line="+d+";"})),0===e.indexOf("=")){var r=f&&!/^=[=#]/.test(e);if(e=e.replace(/^=[=#]?|[\s;]*$/g,""),r){var a=e.replace(/\s*\([^\)]+\)/,"");g[a]||/^(include|print)$/.test(a)||(e="$escape("+e+")")}else e="$string("+e+")";e=v[1]+e+v[2]}return o&&(e="$line="+n+";"+e),w(i(e),function(e){if(e&&!p[e]){var t;t="print"===e?b:"include"===e?_:g[e]?"$utils."+e:y[e]?"$helpers."+e:"$data."+e,$+=e+"="+t+",",p[e]=!0}}),e+"\n"}var o=t.debug,s=t.openTag,l=t.closeTag,u=t.parser,c=t.compress,f=t.escape,d=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},h="".trim,v=h?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],m=h?"$out+=text;return $out;":"$out.push(text);",b="function(){var text=''.concat.apply('',arguments);"+m+"}",_="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+m+"}",$="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(o?"$line=0,":""),x=v[0],k="return new String("+v[3]+");";w(e.split(s),function(e){e=e.split(l);var t=e[0],i=e[1];1===e.length?x+=n(t):(x+=r(t),i&&(x+=n(i)))});var C=$+x+k;o&&(C="try{"+C+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+a(e)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var j=new Function("$data","$filename",C);return j.prototype=g,j}catch(S){throw S.temp="function anonymous($data,$filename) {"+C+"}",S}}var s=function(e,t){return"string"==typeof t?_(t,{filename:e}):c(e,t)};s.version="3.0.0",s.config=function(e,t){l[e]=t};var l=s.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},u=s.cache={};s.render=function(e,t){return _(e,t)};var c=s.renderFile=function(e,t){var n=s.get(e)||b({filename:e,name:"Render Error",message:"Template not found"});return t?n(t):n};s.get=function(e){var t;if(u[e])t=u[e];else if("object"==typeof document){var n=document.getElementById(e);if(n){var r=(n.value||n.innerHTML).replace(/^\s*|\s*$/g,"");t=_(r,{filename:e})}}return t};var f=function(e,t){return"string"!=typeof e&&(t=typeof e,"number"===t?e+="":e="function"===t?f(e.call(e)):""),e},d={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},p=function(e){return d[e]},h=function(e){return f(e).replace(/&(?![\w#]+;)|[<>"']/g,p)},v=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},m=function(e,t){var n,r;if(v(e))for(n=0,r=e.length;r>n;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)},g=s.utils={$helpers:{},$include:c,$string:f,$escape:h,$each:m};s.helper=function(e,t){y[e]=t};var y=s.helpers=g.$helpers;s.onerror=function(e){var t="Template Error\n\n";for(var n in e)t+="<"+n+">\n"+e[n]+"\n\n";"object"==typeof console&&console.error(t)};var b=function(e){return s.onerror(e),function(){return"{Template Error}"}},_=s.compile=function(e,t){function n(n){try{return new a(n,i)+""}catch(r){return t.debug?b(r)():(t.debug=!0,_(e,t)(n))}}t=t||{};for(var r in l)void 0===t[r]&&(t[r]=l[r]);var i=t.filename;try{var a=o(e,t)}catch(s){return s.filename=i||"anonymous",s.name="Syntax Error",b(s)}return n.prototype=a.prototype,n.toString=function(){return a.toString()},i&&t.cache&&(u[i]=n),n},w=g.$each,$="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",x=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,k=/[^\w$]+/g,C=new RegExp(["\\b"+$.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),j=/^\d[^,]*|,\d[^,]*/g,S=/^,+|,+$/g,T=/^$|,+/;l.openTag="{{",l.closeTag="}}";var R=function(e,t){var n=t.split(":"),r=n.shift(),i=n.join(":")||"";return i&&(i=", "+i),"$helpers."+r+"("+e+i+")"};l.parser=function(e,t){e=e.replace(/^\s/,"");var n=e.split(" "),r=n.shift(),i=n.join(" ");switch(r){case"if":e="if("+i+"){";break;case"else":n="if"===n.shift()?" if("+n.join(" ")+")":"",e="}else"+n+"{";break;case"/if":e="}";break;case"each":var a=n[0]||"$data",o=n[1]||"as",l=n[2]||"$value",u=n[3]||"$index",c=l+","+u;"as"!==o&&(a="[]"),e="$each("+a+",function("+c+"){";break;case"/each":e="});";break;case"echo":e="print("+i+");";break;case"print":case"include":e=r+"("+n.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(i)){var f=!0;0===e.indexOf("#")&&(e=e.substr(1),f=!1);for(var d=0,p=e.split("|"),h=p.length,v=p[d++];h>d;d++)v=R(v,p[d]);e=(f?"=":"=#")+v}else e=s.helpers[r]?"=#"+r+"("+n.join(",")+");":"="+e}return e},r=function(){return s}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[{id:1,title:"微信Web App开发最佳实践",cover:"https://mmrb.github.io/avatar/kl.jpg",summary:"组内小伙伴 jf 去 Feday 广州站的分享，有蛮多干货，都是微信 web app 开发者们关注的一些问题。 不做过多介绍，没有去现场听得朋友可以下载ppt来看。 感兴趣的朋友也可以下载广州站的所有ppt，以及关注接下来的 Feday 日程。"},{id:2,title:"X5即将升级内核到Blink",cover:"https://mmrb.github.io/avatar/shenfei.jpg",summary:"我们从QQ浏览器团队得到消息，X5已经完成升级到Blink的开发工作，最近已经开始下发到客户端中，而X5内核的更新是热更新，也就是说不需要用户更新微信客户端，在良好的网络环境下(比如WiFi)会在后台静默更新。 根据我们拿到的版本，X5用的Blink版本是Chrome 37。虽然"},{id:3,title:"WeUI的设计稿开源",cover:"https://mmrb.github.io/avatar/bear.jpg",summary:"自从 WeUI 开源后，已经收到 7000 多 star ，将近 2000 的 fork，我们在欣喜之余，也收到了蛮多有价值的意见与建议，其中之一就是将设计稿开源——好吧，其实设计稿叫『开放下载』更合适一些。 那我们今天开放了基于 WeUI 0.4 版本的设计稿 sketch 文"},{id:4,title:"HTML5+CSS3 loading 效果收集",cover:"https://mmrb.github.io/avatar/gaby.jpg",summary:"用gif图片来做loading的时代已经过去了，它显得太low了，而用HTML5/CSS3以及SVG和canvas来做加载动画显得既炫酷又逼格十足。这已经成为一种趋势。 这里收集了几十个用html5和css3实现的loading效果，以供学习参考。 01. CSS Rainbow"},{id:5,title:"微信网页开发者工具发布",cover:"https://mmrb.github.io/avatar/xx.jpg",summary:"兄弟团队内测已久的微信网页开发者工具终于在今天的微信公开课Pro大会上发布了，喜大普奔。 这个工具有主要有3个功能： 使用真实用户身份，调试微信网页授权。 校验页面的 JSSDK 权限，以及模拟大部分 SDK 的输入和输出。 利用集成的 Chrome DevTools 和基本"}],e.exports=t["default"]},function(e,t){e.exports='<div class="weui_panel weui_panel_access">\n    <div class="weui_panel_hd">图文组合列表</div>\n    <div class="weui_panel_bd">\n        {{each list as item i}}\n        <a href="#/article/{{item.id}}" class="weui_media_box weui_media_appmsg">\n            <div class="weui_media_hd">\n                <img src="{{item.cover}}" alt="" class="weui_media_appmsg_thumb">\n            </div>\n            <div class="weui_media_bd">\n                <h4 class="weui_media_title">{{item.title}}</h4>\n                <p class="weui_media_desc">{{item.summary}}</p>\n            </div>\n        </a>\n        {{/each}}\n    </div>\n</div>'},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(9),s=r(o),l=n(12),u=r(l);t["default"]={url:"/article/:id",render:function(){var e=this.params.id,t=s["default"].filter(function(t){return t.id==e})[0];return a["default"].compile(u["default"])({article:t})}},e.exports=t["default"]},function(e,t){e.exports='<article class="weui_article">\n    <section>\n        <h2 class="title">{{article.title}}</h2>\n        <section>\n            <p>{{article.summary}}</p>\n        </section>\n        <section>\n            <p>{{article.summary}}</p>\n        </section>\n    </section>\n</article>'}]);