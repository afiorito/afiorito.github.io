(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(t,e,n){"use strict";n.r(e);n(183),n(34);var r=n(184),a=n.n(r),o=(n(173),n(186)),i=n.n(o),c=n(7),s=n.n(c),u=n(0),l=n.n(u),h=n(151),f=(n(77),n(56),n(36),n(187),function(t){return Object.keys(t).filter(function(e){return t[e]}).map(function(e){return e+"="+t[e]}).join("&")}),p=n(153),d=n(166),y=(n(167),n(168),n(189),n(190)),m=n.n(y),g=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleSubmit=function(){var t=i()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n.setState({isLoading:!0}),t.next=4,fetch("https://xtuegxcusb.execute-api.us-east-1.amazonaws.com/dev/contact",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:f(n.state.form)});case 4:200===t.sent.status?n.setState({isLoading:!1,success:!0}):n.setState({isLoading:!1,success:!1});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n.goBack=function(){"undefined"!=typeof window&&window.history&&window.history.back()},n.onFieldChange=function(t){var e;n.setState({form:Object.assign({},n.state.form,(e={},e[t.target.name]=t.target.value,e))})},n.state={isLoading:!1,success:null,form:{name:"",email:"",company:"",message:""}},n}return s()(e,t),e.prototype.render=function(){var t=!1;return"undefined"!=typeof window&&window.history&&(t=window.history.state&&window.history.state.referred),l.a.createElement("div",{className:"container ContactPage"},l.a.createElement(p.a,{title:"Contact",keywords:["contact","email","personal website","blog","technology"],description:"Anthony's contact page"}),this.state.success&&l.a.createElement(d.a,{title:"Thank you"},l.a.createElement("p",null,"Your message has been received. Click ",l.a.createElement(h.a,{to:"/"},"here")," to go back to the main page.")),!1===this.state.success&&l.a.createElement(d.a,{title:"Uh oh..."},l.a.createElement("p",null,"Your message could not be sent. Click ",l.a.createElement(h.a,{to:"/"},"here")," to go back to the main page.")),null===this.state.success&&l.a.createElement("div",{className:"contact-card"},t&&l.a.createElement("button",{className:"back__button",onClick:this.goBack},l.a.createElement("img",{src:m.a,alt:"Back arrow"})),l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("p",{className:"contact__pg"},"Hey! Something wrong with the website? Missing/Broken notes? Just want to get in touch? Leave a message here, I'll try to get back to you as soon as possible."),l.a.createElement("form",{className:"contact__input",onSubmit:this.handleSubmit},l.a.createElement("label",{className:"contact__label"},"Name"),l.a.createElement("input",{onChange:this.onFieldChange,className:"contact-field",placeholder:"Name",type:"text",name:"name",required:!0}),l.a.createElement("label",{className:"contact__label"},"Email"),l.a.createElement("input",{onChange:this.onFieldChange,className:"contact-field",placeholder:"Email Address",type:"email",name:"email"}),l.a.createElement("label",{className:"contact__label"},"Company"),l.a.createElement("input",{onChange:this.onFieldChange,className:"contact-field",placeholder:"Company Name (optional)",type:"text",name:"company"}),l.a.createElement("label",{className:"contact__label"},"Message"),l.a.createElement("textarea",{onChange:this.onFieldChange,className:"contact-field",placeholder:"Write something",type:"text",name:"message",required:!0}),l.a.createElement("button",{disabled:this.state.isLoading,type:"submit",className:"contact__buton"},"Send"))))},e}(u.Component);e.default=g},151:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(152);var u=a.a.createContext({}),l=function(t){return a.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(t,e,n){var r;t.exports=(r=n(155))&&r.default||r},153:function(t,e,n){"use strict";var r=n(154),a=n(0),o=n.n(a),i=n(4),c=n.n(i),s=n(156),u=n.n(s),l=n(151);function h(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,c=t.title;return o.a.createElement(l.b,{query:f,render:function(t){var r=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:r})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=h;var f="4017075492"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Anthony's Personal Website",description:"A place to publish cool projects and talk about technology and life.",author:"@ovoant"}}}}},155:function(t,e,n){"use strict";n.r(e);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(55),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},166:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(172),function(t){var e=t.title,n=t.children;return a.a.createElement("div",{className:"Event"},a.a.createElement("div",{className:"event-container"},a.a.createElement("h1",null,e),n))});c.defaultProps={children:[]},c.propTypes={title:i.a.string.isRequired,children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired},e.a=c},173:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=M;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",y={},m={};m[i]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==r&&a.call(v,i)&&(m=v);var w=E.prototype=N.prototype=Object.create(m);b.prototype=w.constructor=E,E.constructor=b,E[s]=b.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},x(I.prototype),I.prototype[c]=function(){return this},l.AsyncIterator=I,l.async=function(t,e,n,r){var a=new I(M(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(w),w[s]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return c.type="throw",c.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),z(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;z(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function M(t,e,n,r){var a=e&&e.prototype instanceof N?e:N,o=Object.create(a.prototype),i=new A(r||[]);return o._invoke=function(t,e,n){var r=h;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=j(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function j(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function N(){}function b(){}function E(){}function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var c=j(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,i)})}i(c.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=j(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function C(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},183:function(t,e,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(20)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},184:function(t,e,n){t.exports=n(185)},185:function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(173),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},186:function(t,e){function n(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)})}}},187:function(t,e,n){var r=n(26),a=n(35);n(188)("keys",function(){return function(t){return a(r(t))}})},188:function(t,e,n){var r=n(11),a=n(19),o=n(18);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},190:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgMjcgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbl9zb3J0LWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0xMy4wMDAwMDApIiBmaWxsPSIjMjQ0MDhFIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjgyODQyNzEsMjcgTDI0LjQzNTAyODgsMzIuNjA2NjAxNyBDMjUuMjE2MDc3NCwzMy4zODc2NTAzIDI1LjIxNjA3NzQsMzQuNjUzOTgwMyAyNC40MzUwMjg4LDM1LjQzNTAyODggQzIzLjY1Mzk4MDMsMzYuMjE2MDc3NCAyMi4zODc2NTAzLDM2LjIxNjA3NzQgMjEuNjA2NjAxNywzNS40MzUwMjg4IEwxMy4xMjEzMjAzLDI2Ljk0OTc0NzUgQzEzLjAyOTY1OTksMjYuODU4MDg3IDEyLDI2IDEyLDI1IEMxMiwyNCAxMi45NTQ1NzEzLDIzLjA2NjI0NCAxMy4xMjEzMjAzLDIyLjg5OTQ5NDkgTDIxLjYwNjYwMTcsMTQuNDE0MjEzNiBDMjIuMzg3NjUwMywxMy42MzMxNjUgMjMuNjUzOTgwMywxMy42MzMxNjUgMjQuNDM1MDI4OCwxNC40MTQyMTM2IEMyNS4yMTYwNzc0LDE1LjE5NTI2MjEgMjUuMjE2MDc3NCwxNi40NjE1OTIxIDI0LjQzNTAyODgsMTcuMjQyNjQwNyBMMTguNjc3NjY5NSwyMyBMMzcsMjMgQzM4LjEwNDU2OTUsMjMgMzksMjMuODk1NDMwNSAzOSwyNSBDMzksMjYuMTA0NTY5NSAzOC4xMDQ1Njk1LDI3IDM3LDI3IEwxOC44Mjg0MjcxLDI3IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-269cc8dadf524f123557.js.map