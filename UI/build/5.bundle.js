/*! For license information please see 5.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbiodata=self.webpackChunkbiodata||[]).push([[5],{4005:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var o=n(7294),r=n(3379),i=n.n(r),a=n(7795),l=n.n(a),s=n(569),c=n.n(s),d=n(3565),f=n.n(d),p=n(9216),u=n.n(p),m=n(4589),h=n.n(m),g=n(9796),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=u(),i()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var v=n(1881),x=n(3103),b={};b.styleTagTransform=h(),b.setAttributes=f(),b.insert=c().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=u(),i()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var w=n(5893),j=function(e){return(0,w.jsx)("div",{children:(0,w.jsxs)("div",{className:"form__group field",children:[(0,w.jsx)("input",{type:e.type||"text",className:"form__field",placeholder:e.name||"",name:e.name,id:e.id,value:e.value,onChange:e.onChange,disabled:e.disabled?"disabled":"",autoFocus:e.autoFocus?"autoFocus":""}),(0,w.jsxs)("label",{htmlFor:e.id,className:"form__label",children:[e.name,e.required?(0,w.jsx)("span",{className:"isRequiredStar",children:"*"}):""]})]})})},C=n(4552),E=n(3923);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),l=new A(r||[]);return o(a,"_invoke",{value:w(e,n,l)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f={};function p(){}function u(){}function m(){}var h={};s(h,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==t&&n.call(y,i)&&(h=y);var v=m.prototype=p.prototype=Object.create(h);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(o,i,a,l){var s=d(e[o],e,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==k(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(f).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,l)}))}l(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function w(e,t,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var l=j(a,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=d(e,t,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function j(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=d(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function S(e){if(e||""===e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}throw new TypeError(k(e)+" is not iterable")}return u.prototype=m,o(v,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:u,configurable:!0}),u.displayName=s(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},x(b.prototype),s(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new b(c(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(v),s(v,l,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=S,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return a.type="throw",a.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function A(e,t,n,o,r,i,a){try{var l=e[i](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(o,r)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){A(i,o,r,a,l,"next",e)}function l(e){A(i,o,r,a,l,"throw",e)}a(void 0)}))}}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t=function(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===k(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var O=function(e){var t=M((0,o.useState)(!1),2),n=t[0],r=t[1],i=M((0,o.useState)(!1),2),a=i[0],l=i[1],s=M((0,o.useState)({name:"",mailId:"",message:""}),2),c=s[0],d=s[1],f=M((0,o.useState)({mailingName:!1,mailingID:!1,mailingMessage:!1}),2),p=f[0],u=f[1],m=(0,o.useRef)(),h=M((0,o.useState)(!1),2),g=h[0],y=h[1];(0,o.useEffect)((function(){return function(){var e=localStorage.getItem("lastMailSent"),t=new Date(e).getTime(),n=(new Date).getTime(),o=Math.abs(n-t)/36e5;l(o>6)}}),[e]);var x=function(e){u({mailingName:!1,mailingID:!1,mailingMessage:!1}),d((function(t){return _(_({},t),{},I({},e.target.id,e.target.value))}))},b=function(){u({}),d({name:"",mailId:"",message:""},e.hide())},k=function(){var e=S(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{y(!0),E.ZP.send("service_yzqe9tm","template_9o9la5e",c,"YQM9DkuSurlQ8WZS7").then((function(e){b(),localStorage.setItem("lastMailSent",new Date),l(!0)}),(function(e){console.error("Failed to send email:",e)}))}catch(e){console.error("An error occurred while sending email:",e)}finally{y(!1)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=S(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void 0,void 0,void 0,void 0,void 0,o=(null===(t=c.name.trim())||void 0===t?void 0:t.length)<=1,r=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.mailId),i=(null===(n=c.message.trim())||void 0===n?void 0:n.length)<10,u({mailingName:o,mailingID:r,mailingMessage:i}),!o&&!r&&!i;case 2:e.sent&&k();case 4:case"end":return e.stop()}var t,n,o,r,i}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){return(0,w.jsx)("div",{className:"errorMail",children:e})},D=function(){var e=S(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText("mrinalspec@gmail.com");case 3:r(!0),setTimeout((function(){r(!1)}),2e3),console.log("Content copied to clipboard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Failed to copy: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,w.jsxs)("div",{children:[(0,w.jsxs)(v.Z,{show:e.show,onHide:e.hide,className:"modelContainer",children:[(0,w.jsxs)(v.Z.Header,{children:[(0,w.jsx)("div",{children:(0,w.jsxs)("span",{onClick:e.hide,title:"Close",className:"modelHeaderMenuAlert modelIcons",children:[(0,w.jsx)("i",{className:"fa fa-solid fa-xmark"})," "]})}),(0,w.jsxs)("div",{className:"modelHeaderMenu d-flex",children:[(0,w.jsx)("span",{onClick:b,title:"Discard",className:"".concat(a?"":"disabledLink"," modelHeaderMenuAlert modelIcons"),children:(0,w.jsx)("i",{className:" fa fa-solid fa-trash"})}),(0,w.jsx)("span",{onClick:A,title:"Send",className:"".concat(a?"":"disabledLink"," modelHeaderMenuConfirm modelIcons"),children:(0,w.jsx)("i",{className:"fa fa-solid fa-paper-plane"})}),(0,w.jsxs)("span",{title:"Its Dummy : )",className:"".concat(a?"":"disabledLink"," modelHeaderMenuDummy modelIcons"),children:[(0,w.jsx)("i",{className:" fa fa-solid fa-ellipsis-vertical"})," "]})]})]}),(0,w.jsx)(v.Z.Body,{children:a?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"inputFieldsAlign",ref:m,children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(j,{id:"name",type:"text",name:"To",value:"mrinalspec@gmail.com",onChange:x,disabled:!0}),(0,w.jsx)("i",{className:"fa fa-copy copyClipboard ".concat(n?" copiedField ":""),onClick:D,title:"Copy Mail ID"})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(j,{id:"mailId",type:"mail",name:"From",value:c.mailId,onChange:x,required:!0,autoFocus:!0}),(0,w.jsx)(w.Fragment,{children:p.mailingID&&F("Hey, there is some issue with the Mail provided please verify it !!!")})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(j,{id:"name",type:"text",name:"Name",value:c.name,onChange:x,required:!0}),(0,w.jsx)(w.Fragment,{children:p.mailingName&&F("Hey, You need to put you name here.")})]})]}),(0,w.jsxs)("div",{className:"mailMessageBox",children:[(0,w.jsx)("textarea",{id:"message",type:"text",name:"Message",placeholder:"Write a Message ...",value:c.message,onChange:x,required:!0}),(0,w.jsx)(w.Fragment,{children:p.mailingMessage&&F("Come On atleast share 5 characters.")})]})]}):(0,w.jsxs)("div",{className:"alreadyMailSent",children:[(0,w.jsx)("h1",{children:(0,w.jsx)("i",{className:"fa-solid fa-envelope-circle-check",style:{color:"#6ad920"}})}),(0,w.jsx)("p",{children:"You've recently sent an email in the last six hours. Please feel free to await my response."}),(0,w.jsxs)("p",{children:["Should you wish to send another email, you may do so by"," ",(0,w.jsx)("span",{className:"resendMial",onClick:function(){l(!0)},children:"clicking here"}),"."]})]})})]}),g&&(0,w.jsx)(C.Z,{})]})};function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var H=function(){var e,t,n=(e=(0,o.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],i=n[1],a=function(){i(!r)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"contactContainer",children:[(0,w.jsxs)("section",{children:[(0,w.jsx)("div",{className:"contactBG",children:(0,w.jsx)("div",{className:"contactBox ",children:(0,w.jsx)("div",{className:"contactBoxContent row justify-content-around",children:(0,w.jsxs)("div",{className:" row",children:[(0,w.jsxs)("div",{className:"col-sm-12 col-lg-6",children:[(0,w.jsx)("h1",{children:"Mail"}),(0,w.jsx)("div",{className:"typewriter",onClick:a,children:(0,w.jsx)("h1",{children:"Type..."})})]}),(0,w.jsxs)("div",{className:"col-sm-12 col-lg-6",children:[(0,w.jsx)("h1",{children:"Social"}),(0,w.jsxs)("div",{className:"socialIcons d-flex justify-content-around",children:[(0,w.jsx)("a",{href:"https://www.linkedin.com/in/mrinal-kasyap-695853171/",target:"_blank",rel:"noreferrer",children:(0,w.jsxs)("div",{className:"contactIcon linkedin",children:[(0,w.jsx)("i",{className:"fa fa-brands fa-linkedin-in"}),(0,w.jsx)("div",{className:"iconHandle",children:"LINKEDIN"})]})}),(0,w.jsx)("a",{href:"https://instagram.com/c2_mrinal?igshid=YmMyMTA2M2Y=",target:"_blank",rel:"noreferrer",children:(0,w.jsxs)("div",{className:"contactIcon instagram",children:[(0,w.jsx)("i",{className:"fa fa-brands fa-instagram"}),(0,w.jsx)("div",{className:"iconHandle",children:"INSTAGRAM"})]})}),(0,w.jsxs)("a",{href:"https://twitter.com/mrinal_kasyap",target:"_blank",rel:"noreferrer",children:[(0,w.jsxs)("div",{className:"contactIcon twitter",children:[(0,w.jsx)("i",{className:"fa-brands fa-square-x-twitter"})," ",(0,w.jsx)("div",{className:"iconHandle",children:"TWITTER"})]})," "]})]})]})]})})})}),(0,w.jsx)("div",{className:"downArrow",children:(0,w.jsx)("div",{className:"downArrowContainer",children:(0,w.jsx)("img",{src:"https://raw.githubusercontent.com/c2-mrinal/PROJECT_IMAGES/main/Portfolio/Images/logos/ArrowPointing.gif",className:"pointingArrow",alt:"error"})})})]}),(0,w.jsx)("section",{children:(0,w.jsx)("div",{className:"contactBG",children:(0,w.jsx)("div",{className:"contactBox",children:(0,w.jsxs)("div",{className:"contactBoxContent workIcon row justify-content-around",children:[(0,w.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,w.jsx)("a",{href:"https://github.com/c2-mrinal",target:"_blank",rel:"noreferrer",children:(0,w.jsxs)("div",{className:"contactIcon github",children:[(0,w.jsx)("i",{className:"fa fa-brands fa-github"}),(0,w.jsx)("div",{className:"iconHandle",children:"GITHUB"})]})})}),(0,w.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,w.jsx)("a",{href:"https://stackoverflow.com/users/14725561/c2-mrinal",rel:"noreferrer",target:"_blank",children:(0,w.jsxs)("div",{className:"contactIcon stackoverflow",children:[(0,w.jsx)("i",{className:"fa fa-brands fa-stack-overflow"}),(0,w.jsx)("div",{className:"iconHandle",children:"STACKOVERFLOW"})]})})}),(0,w.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,w.jsx)("a",{href:"https://www.hackerrank.com/mrinalspec",target:"_blank",rel:"noreferrer",children:(0,w.jsxs)("div",{className:"contactIcon hackerrank",children:[(0,w.jsx)("i",{className:"fa fa-brands fa-hackerrank"}),(0,w.jsx)("div",{className:"iconHandle",children:"HACKERRANK"})]})})}),(0,w.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,w.jsx)("a",{href:"https://codepen.io/c2-mrinal",target:"_blank",rel:"noreferrer",children:(0,w.jsxs)("div",{className:"contactIcon github",children:[(0,w.jsx)("i",{className:"fa fa-brands fa-codepen"}),(0,w.jsx)("div",{className:"iconHandle",children:"CODEPEN"})]})})})]})})})})]}),(0,w.jsx)(O,{show:r,hide:a})]})}},9796:function(e,t,n){var o=n(8081),r=n.n(o),i=n(3645),a=n.n(i),l=n(1667),s=n.n(l),c=new URL(n(6572),n.b),d=a()(r()),f=s()(c);d.push([e.id,".main{height:100vh;overflow-y:scroll;scroll-snap-type:y mandatory}textarea{resize:none;font-size:1.2rem}.contactContainer{scroll-behavior:smooth}.contactContainer>section{height:100vh;display:flex;flex-direction:column;justify-content:center;scroll-snap-align:start;scroll-snap-stop:always}.contactBG{display:flex;flex-direction:column;justify-content:center;background-color:#76c773;background-image:url("+f+');background-size:cover;margin:auto;width:80vw;height:60vh;border-radius:50px}.contactBox{position:relative;margin:auto;height:80%;width:90%;background:rgba(255,255,255,.45);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);border-radius:40px;border:1px solid rgba(255,255,255,.18)}.contactIcon{min-height:60px;min-width:60px;margin:auto 1.5em;text-align:center;position:relative;transition:width 1s;-webkit-transition:width 1s}.contactBoxContent{display:flex;align-items:center;position:relative;margin:auto;height:100%;width:100%;text-align:center}.contactBoxContent .contactIcon{margin:1vh 2vw 1vh auto}.contactBoxContent h1,h2{margin:auto;text-align:center;font-family:monospace;font-size:calc(3vw + 1vh);font-weight:600}i{font-size:clamp(2.5rem,5vw,5vw)}.instagram{color:#d6249f;color:radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%) !important}.github{color:#171515}.stackoverflow{color:#f48024}.linkedin{color:#0a66c2}.twitter{color:#000}.hackerrank{color:#20c20e}.contactBoxContent a:hover .contactIcon i{animation:zoomAndRotate .1s ease .2s forwards}.contactBoxContent a:hover .iconHandle{animation:magnifyHandel 1s ease-in-out;display:block}@keyframes magnifyHandel{from{opacity:0;display:block}to{opacity:1}}.iconHandle{display:none;font-size:1rem;font-weight:900;position:absolute;width:100%;transform:rotate(45deg);border-radius:20px;text-align:start;padding:0 1rem;letter-spacing:1px;text-decoration:none;font-family:"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif}.socialIcons .iconHandle{right:-4rem;bottom:-2rem}.workIcon .iconHandle{right:-7rem;bottom:-6rem}@keyframes zoomAndRotate{from{transform:scale(1);transform:rotate(0deg)}50%{transform:scale(0.6)}to{transform:scale(0.6) rotate(45deg);background-color:inherit}}.typewriter{margin:calc(4vh + 2vw) auto;cursor:pointer;max-width:22vw;border-bottom:.2em solid rgba(211,138,138,.56)}.typewriter h1{color:#fff;font-family:monospace;overflow:hidden;border-right:.15em solid orange;white-space:nowrap;margin:0 auto;letter-spacing:.15em;animation-delay:10s;animation:typing 5s steps(30, end),blink-caret 1s step-end infinite}.socialIcons{margin:calc(4vh + 2vw) auto;text-align:center}@keyframes typing{from{width:0}to{width:100%}}@keyframes blink-caret{from,to{border-color:rgba(0,0,0,0)}50%{border-color:orange}}.errorMail{color:red;font-size:1rem;margin:auto auto auto 15%;font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif}.mailMessageBox{margin:40px auto auto}.mailMessageBox textarea{border:1px solid #d3d3d3;border-radius:20px;padding:1rem;outline:none;height:40vh;width:100%}.mailMessageBox textarea::placeholder{font-size:calc(1.5vw + 1vh);font-weight:bold;opacity:.5;color:#1d1c1c}.mailMessageBox textarea:focus{border:2px solid #9b9b9b;border-radius:10px}.modelHeaderMenu{margin-right:10px}.modelHeaderMenu span{margin:auto 10px}.modelHeaderMenuAlert:hover{color:#e76060}.modelHeaderMenuConfirm:hover{color:#60e76b}.modelHeaderMenuDummy{padding:0px 0px 0px 1vw;margin-right:-5px !important}.modelHeaderMenuDummy:hover{color:#fdf497}.alreadyMailSent{min-height:50vh;text-align:justify;font-size:calc(.7rem + .5vw + .5vh);margin:auto 2rem;transform:translate(0, 20%);font-weight:500;margin-bottom:5vh}.alreadyMailSent p{font-family:fangsong}.alreadyMailSent h1{text-align:center}.alreadyMailSent i{font-size:5rem;padding-bottom:5vh}.resendMial{font-weight:600;color:#0a66c2}.resendMial:hover{text-decoration:underline;color:#0a66c2;cursor:pointer}.disabledLink{pointer-events:none !important;cursor:pointer !important;opacity:.4}.modelIcons i{font-size:calc(1rem + .5vw + .5vh);cursor:pointer}.downArrow{position:absolute;width:100vw;bottom:0;display:flex;justify-content:center}.pointingArrow{height:calc(10vh + 5vw);width:calc(20vw + 20vh);transform:rotate(180deg)}.copyClipboard{cursor:copy;position:absolute;right:calc(2rem + 1vw);top:7vh;font-size:calc(1.5vh + 1.5vw)}.copyClipboard:hover{color:#77c874}.copiedField{color:#77c874}@media(min-width: 1600px){.workIcon .iconHandle{right:-10rem;bottom:-10rem}.iconHandle{font-size:2rem}}@media(max-width: 992px){.socialIcons .iconHandle{right:-2rem;bottom:-1rem}.workIcon .iconHandle{position:relative;text-decoration:none}}@media(max-width: 768px){.socialIcons .iconHandle{right:-2rem;bottom:-1rem}.workIcon .iconHandle{right:-27vw;bottom:-15vw}}@media(max-width: 560px){.contactBoxContent{display:grid;align-items:center}.modelContainer{display:grid !important;align-items:center}.errorMail{font-size:.6rem}}',""]),t.Z=d},3103:function(e,t,n){var o=n(8081),r=n.n(o),i=n(3645),a=n.n(i)()(r());a.push([e.id,".form__group{position:relative;padding:1rem 0 0;margin:1rem;width:80%}.form__field{font-family:inherit;width:90%;border:0;margin-left:3em;border-bottom:2px solid #9b9b9b;outline:0;font-size:calc(1vw + 1vh);color:#000;padding:7px 0;background:rgba(0,0,0,0);transition:border-color .2s}.form__field::placeholder{color:rgba(0,0,0,0)}.form__field:placeholder-shown~.form__label{font-size:calc(.5rem + 1vw);cursor:text;top:20px}.form__label{position:absolute;top:18px;left:-0.5rem;display:block;transition:.2s;font-size:calc(1vw + 1vh);color:#9b9b9b}.form__field:focus{padding-bottom:6px;position:relative;left:1.25em;font-weight:700;border-width:3px;border-image:linear-gradient(to right, #accfcc, #5a926f);border-image-slice:1}.form__field:focus~.form__label{position:absolute;top:25px;left:-0.8rem;display:block;transition:.2s;font-size:1rem;color:#87a5a2;font-weight:700}.form__field:required,.form__field:invalid{box-shadow:none}.isRequiredStar{color:red;display:none}.form__field:focus~.isRequiredStar{display:inline}",""]),t.Z=a},6572:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27%3E%3Cdefs%3E%3ClinearGradient id=%27a%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 x2=%270%27 y1=%270%27 y2=%27100%25%27 gradientTransform=%27rotate%28202,735,404%29%27%3E%3Cstop offset=%270%27 stop-color=%27%2376C773%27/%3E%3Cstop offset=%271%27 stop-color=%27%2349FFF7%27/%3E%3C/linearGradient%3E%3Cpattern patternUnits=%27userSpaceOnUse%27 id=%27b%27 width=%27446%27 height=%27371.7%27 x=%270%27 y=%270%27 viewBox=%270 0 1080 900%27%3E%3Cg fill-opacity=%270.17%27%3E%3Cpolygon fill=%27%23444%27 points=%2790 150 0 300 180 300%27/%3E%3Cpolygon points=%2790 150 180 0 0 0%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27270 150 360 0 180 0%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27450 150 360 300 540 300%27/%3E%3Cpolygon fill=%27%23999%27 points=%27450 150 540 0 360 0%27/%3E%3Cpolygon points=%27630 150 540 300 720 300%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27630 150 720 0 540 0%27/%3E%3Cpolygon fill=%27%23444%27 points=%27810 150 720 300 900 300%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27810 150 900 0 720 0%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27990 150 900 300 1080 300%27/%3E%3Cpolygon fill=%27%23444%27 points=%27990 150 1080 0 900 0%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%2790 450 0 600 180 600%27/%3E%3Cpolygon points=%2790 450 180 300 0 300%27/%3E%3Cpolygon fill=%27%23666%27 points=%27270 450 180 600 360 600%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27270 450 360 300 180 300%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27450 450 360 600 540 600%27/%3E%3Cpolygon fill=%27%23999%27 points=%27450 450 540 300 360 300%27/%3E%3Cpolygon fill=%27%23999%27 points=%27630 450 540 600 720 600%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27630 450 720 300 540 300%27/%3E%3Cpolygon points=%27810 450 720 600 900 600%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27810 450 900 300 720 300%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27990 450 900 600 1080 600%27/%3E%3Cpolygon fill=%27%23444%27 points=%27990 450 1080 300 900 300%27/%3E%3Cpolygon fill=%27%23222%27 points=%2790 750 0 900 180 900%27/%3E%3Cpolygon points=%27270 750 180 900 360 900%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27270 750 360 600 180 600%27/%3E%3Cpolygon points=%27450 750 540 600 360 600%27/%3E%3Cpolygon points=%27630 750 540 900 720 900%27/%3E%3Cpolygon fill=%27%23444%27 points=%27630 750 720 600 540 600%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27810 750 720 900 900 900%27/%3E%3Cpolygon fill=%27%23666%27 points=%27810 750 900 600 720 600%27/%3E%3Cpolygon fill=%27%23999%27 points=%27990 750 900 900 1080 900%27/%3E%3Cpolygon fill=%27%23999%27 points=%27180 0 90 150 270 150%27/%3E%3Cpolygon fill=%27%23444%27 points=%27360 0 270 150 450 150%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27540 0 450 150 630 150%27/%3E%3Cpolygon points=%27900 0 810 150 990 150%27/%3E%3Cpolygon fill=%27%23222%27 points=%270 300 -90 450 90 450%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%270 300 90 150 -90 150%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27180 300 90 450 270 450%27/%3E%3Cpolygon fill=%27%23666%27 points=%27180 300 270 150 90 150%27/%3E%3Cpolygon fill=%27%23222%27 points=%27360 300 270 450 450 450%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27360 300 450 150 270 150%27/%3E%3Cpolygon fill=%27%23444%27 points=%27540 300 450 450 630 450%27/%3E%3Cpolygon fill=%27%23222%27 points=%27540 300 630 150 450 150%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27720 300 630 450 810 450%27/%3E%3Cpolygon fill=%27%23666%27 points=%27720 300 810 150 630 150%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27900 300 810 450 990 450%27/%3E%3Cpolygon fill=%27%23999%27 points=%27900 300 990 150 810 150%27/%3E%3Cpolygon points=%270 600 -90 750 90 750%27/%3E%3Cpolygon fill=%27%23666%27 points=%270 600 90 450 -90 450%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27180 600 90 750 270 750%27/%3E%3Cpolygon fill=%27%23444%27 points=%27180 600 270 450 90 450%27/%3E%3Cpolygon fill=%27%23444%27 points=%27360 600 270 750 450 750%27/%3E%3Cpolygon fill=%27%23999%27 points=%27360 600 450 450 270 450%27/%3E%3Cpolygon fill=%27%23666%27 points=%27540 600 630 450 450 450%27/%3E%3Cpolygon fill=%27%23222%27 points=%27720 600 630 750 810 750%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27900 600 810 750 990 750%27/%3E%3Cpolygon fill=%27%23222%27 points=%27900 600 990 450 810 450%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%270 900 90 750 -90 750%27/%3E%3Cpolygon fill=%27%23444%27 points=%27180 900 270 750 90 750%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27360 900 450 750 270 750%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27540 900 630 750 450 750%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27720 900 810 750 630 750%27/%3E%3Cpolygon fill=%27%23222%27 points=%27900 900 990 750 810 750%27/%3E%3Cpolygon fill=%27%23222%27 points=%271080 300 990 450 1170 450%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%271080 300 1170 150 990 150%27/%3E%3Cpolygon points=%271080 600 990 750 1170 750%27/%3E%3Cpolygon fill=%27%23666%27 points=%271080 600 1170 450 990 450%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%271080 900 1170 750 990 750%27/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x=%270%27 y=%270%27 fill=%27url%28%23a%29%27 width=%27100%25%27 height=%27100%25%27/%3E%3Crect x=%270%27 y=%270%27 fill=%27url%28%23b%29%27 width=%27100%25%27 height=%27100%25%27/%3E%3C/svg%3E"}}]);