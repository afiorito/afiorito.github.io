(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(151),i=n(153),c=n(157);n(167),n(168);t.default=function(){return r.a.createElement("main",{className:"HomePage"},r.a.createElement(i.a,{title:"Home",keywords:["personal website","blog","technology"]}),r.a.createElement(c.a,{title:"Coming Soon."},r.a.createElement("p",null,"Check out my handwritten notes: ",r.a.createElement(o.a,{to:"/notes"},"here"))))}},151:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a});n(152);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},153:function(e,t,n){"use strict";var a=n(154),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(156),l=n.n(s),u=n(151);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(u.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="4017075492"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Anthony's Personal Website",description:"A place to publish cool projects and talk about technology and life.",author:"@ovoant"}}}}},155:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=(n(166),function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"event-container"},r.a.createElement("h1",null,t),n))});c.defaultProps={children:[]},c.propTypes={title:i.a.string.isRequired,children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired},t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-jsx-58aad3da09271d3d307d.js.map