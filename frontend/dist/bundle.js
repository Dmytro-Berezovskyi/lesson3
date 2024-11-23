/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";(()=>{var t=document.querySelector("#popup-edit"),e=document.querySelector("#edit-id"),n=document.querySelector("#edit-input"),r=document.querySelector("#popup-add"),o=document.querySelector("#add-input");function i(r){var o=document.querySelector("#todo-list");o.innerHTML="",r.forEach((function(r){var i=document.createElement("div");i.className="container-todo",i.idName="container-todo",i.innerHTML='\n                <div class="txt-box">\n                    <input type="checkbox">\n                    <span>'.concat(r.todoValue,'</span>\n                </div>\n                \n                <div class="btn-box">\n                    <button class="edit">\n                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M10.4118 4.6114L12.7059 6.83753M8.88235 15H15M2.76471 12.0318L2 15L5.05882 \n                            14.258L13.9187 5.66065C14.2054 5.38234 14.3665 5.00493 14.3665 4.6114C14.3665 4.21787 \n                            14.2054 3.84046 13.9187 3.56215L13.7872 3.43452C13.5004 3.1563 13.1114 3 12.7059 3C12.3003 \n                            3 11.9114 3.1563 11.6246 3.43452L2.76471 12.0318Z" stroke="white" stroke-linecap="round" \n                            stroke-linejoin="round"/>\n                        </svg>\n                    </button>\n                       \n                    <button class="delete" id="delete">\n                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_14)">\n                            <path d="M7.07692 -0.0190735C5.872 -0.0190735 4.904 0.982157 4.904 2.19262V2.46154H2.46154C2.12246\n                            2.46154 1.84615 2.73785 1.84615 3.07693V3.69231H1.23077V4.92308H2.46154V14.1539C2.46154 15.1662\n                            3.29539 16 4.30769 16H11.6923C12.7046 16 13.5385 15.1662 13.5385\n                            14.1539V4.92308H14.7692V3.69231H14.1538V3.07693C14.1538 2.73785 13.8775\n                            2.46154 13.5385 2.46154H11.096V2.192C11.096 0.982157 10.128 -0.0190735 8.92308\n                            -0.0190735H7.07692ZM7.07692 1.24985H8.92308C9.41785 1.24985 9.82708 1.65354 9.82708\n                            2.192V2.46154H6.17231V2.192C6.17231 1.65354 6.58154 1.25047 7.07631 1.25047L7.07692 1.24985ZM3.69231\n                            4.92308H6.84616C6.92246 4.93108 6.99816 4.94216 7.07692 4.94216H8.92308C9.00185 4.94216 9.07692 4.93108\n                            9.15385 4.92308H12.3077V14.1539C12.3077 14.5003 12.0388 14.7692 11.6923 14.7692H4.30769C3.96123 14.7692\n                            3.69231 14.5003 3.69231 14.1539V4.92308ZM4.92308 6.15385V13.5385H6.15385V6.15385H4.92308ZM7.38462\n                            6.15385V13.5385H8.61539V6.15385H7.38462ZM9.84616 6.15385V13.5385H11.0769V6.15385H9.84616Z" fill="white"/>\n                            </g>\n                            <defs>\n                              <clipPath id="clip0_51_14">\n                                <rect width="16" height="16" fill="white"/>\n                              </clipPath>\n                            </defs>\n                        </svg>\n                    </button>\n                </div>\n        '),i.querySelector(".delete").addEventListener("click",(function(){return function(t){return m.apply(this,arguments)}(r.id)})),i.querySelector(".edit").addEventListener("click",(function(){return o=r.id,i=r.todoValue,t.classList.add("show"),e.value=o,void(n.value=i);var o,i})),o.appendChild(i)}))}function a(){r.classList.remove("show"),document.querySelector("#error-add").classList.remove("show")}function c(){t.classList.remove("show")}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new q(r||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function L(){}var x={};h(x,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(P([])));S&&S!==n&&r.call(S,a)&&(x=S);var k=L.prototype=w.prototype=Object.create(x);function H(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function V(t,e){function n(o,i,a,c){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==u(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,n,r){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=_(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var s=p(e,n,r);if("normal"===s.type){if(o=r.done?m:v,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(u(e)+" is not iterable")}return b.prototype=L,o(k,"constructor",{value:L,configurable:!0}),o(L,"constructor",{value:b,configurable:!0}),b.displayName=h(L,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},H(V.prototype),h(V.prototype,c,(function(){return this})),e.AsyncIterator=V,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new V(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},H(k),h(k,l,"Generator"),h(k,a,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function l(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,c,"next",t)}function c(t){l(i,r,o,a,c,"throw",t)}a(void 0)}))}}var f="http://localhost:3000";function p(){return d.apply(this,arguments)}function d(){return(d=h(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f,"/todos"));case 3:return e=t.sent,t.next=6,e.json();case 6:i(t.sent),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(){return(v=h(s().mark((function t(e,n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f,"/todos"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({todoValue:n})});case 3:return t.next=5,p();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(){return(y=h(s().mark((function t(e,n,r,o){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f,"/todos/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 3:return t.next=5,p();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(){return(m=h(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f,"/todos/").concat(e),{method:"DELETE"});case 3:return t.next=5,p();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}p(),document.querySelector("#btn-add").addEventListener("click",(function(){r.classList.add("show")})),document.querySelector("#form-add").addEventListener("submit",(function(t){t.preventDefault();var e=o.value;e.trim()?(function(t,e){v.apply(this,arguments)}(t,e),o.value="",a()):document.querySelector("#error-add").classList.add("show")})),document.querySelector("#btn-close").addEventListener("click",a),document.querySelector("#form-edit").addEventListener("submit",(function(t){t.preventDefault();var r=e.value,o=n.value,i={todoValue:o};i.todoValue.trim()&&(function(t,e,n,r){y.apply(this,arguments)}(t,r,o,i),c())})),document.querySelector("#btn-close-edit").addEventListener("click",c)})()})();