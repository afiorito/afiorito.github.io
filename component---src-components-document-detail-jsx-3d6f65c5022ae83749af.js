(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3RQO":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return E}));var n=a("q1tI"),l=a.n(n),c=a("dmsj"),r=a("/KOg"),i=a("qGhC"),s=a("LTza"),o=a.n(s),d=a("t2QH"),m=a.n(d),u=a("Kfvu"),v=a("fQGm"),f=a.n(v);a("bsNA");t.default=function(e){var t=e.data.notesJson,a="note"===t.type?o.a:m.a;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:"Anthony's "+t.code+" Notes "+("note"!==t.type?"Package":""),keywords:["engineering","school","notes","Concordia",t.code],description:t.code+" | "+t.courseTitle}),l.a.createElement(r.a,{goBackToNotes:!0}),l.a.createElement("main",{className:"container DocumentDetail"},l.a.createElement("div",{className:"detail-body__div"},l.a.createElement("img",{className:"document__img",src:a,alt:"Document Icon"}),l.a.createElement("div",{className:"detail-content__div"},l.a.createElement("div",{className:"detail-head__div"},l.a.createElement("div",{className:"detail-title__div"},l.a.createElement("h2",null,t.courseTitle),l.a.createElement("p",null,t.code))),l.a.createElement("div",{className:"note-detail__div"},l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"Professor"),l.a.createElement("p",null,t.professor)),l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"Semester"),l.a.createElement("p",null,t.semester)),l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"Credits"),l.a.createElement("p",null,t.credits.toFixed(2))),l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"Class Average"),l.a.createElement("p",null,t.classAvg.toFixed(2))),l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"Class Size"),l.a.createElement("p",null,t.classSize)),l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"Distribution"),l.a.createElement("p",null,t.distribution.map((function(e,t){var a=e+" ";switch(t){case 0:a+="A+";break;case 1:a+="A";break;case 2:a+="A-";break;case 3:a+="B+";break;case 4:a+="B";break;case 5:a+="B-";break;case 6:a+="C+";break;case 7:a+="C";break;case 8:a+="C-";break;case 9:a+="D+";break;case 10:a+="D";break;case 11:a+="D-";break;case 12:a+="F";break;case 13:a+="FNS";break;default:return}return a})).filter((function(e){return void 0!==e})).join(", "))),l.a.createElement("div",{className:"note-detail-item__div"},l.a.createElement("h3",null,"File Download"),l.a.createElement(u.OutboundLink,{href:t.link},f()(t.link))))))),l.a.createElement(i.a,null))};var E="4011981677"},Kfvu:function(e,t,a){"use strict";var n=a("5NKs");t.__esModule=!0,t.OutboundLink=i;var l=n(a("j8BX")),c=n(a("q1tI")),r=n(a("17x9"));function i(e){return c.default.createElement("a",(0,l.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick(t);var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}i.propTypes={href:r.default.string,target:r.default.string,onClick:r.default.func}},bsNA:function(e,t,a){},fQGm:function(e,t){e.exports=function(e){var t=e.split("/");return/^[a-z0-9\-.]+/.exec(t[t.length-1])[0]}}}]);
//# sourceMappingURL=component---src-components-document-detail-jsx-3d6f65c5022ae83749af.js.map