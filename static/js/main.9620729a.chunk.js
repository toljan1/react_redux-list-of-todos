(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(7),r=c(17),l=c(6),i=c(14),o=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/SET_QUERY",payload:e}},f=function(e){return{type:"filter/SET_STATUS",payload:e}},O={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:j,filter:m,todos:p}),y=Object(l.createStore)(v,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),N=c(9),g=c(3),T=c(5),E=c.n(T),S=c(0),w=(c(26),c(27),c(16)),k=c.n(w),C=s.b,L=s.c,_=c(1),A=function(){var e=Object(S.useState)([]),t=Object(g.a)(e,2),c=t[0],n=t[1],a=L((function(e){return e.todos})),s=L((function(e){return e.currentTodo})),r=C(),l=L((function(e){return e.filter})),i=l.query,o=l.status;return Object(S.useEffect)((function(){var e=a.filter((function(e){return e.title.toLocaleLowerCase().includes(i.toLocaleLowerCase())})).filter((function(e){switch(o){case"completed":return e.completed;case"active":return!e.completed;default:return!0}}));n(e)}),[o,a,i]),Object(_.jsx)(_.Fragment,{children:0===c.length?Object(_.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(_.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"#"}),Object(_.jsx)("th",{children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("th",{children:"Title"}),Object(_.jsx)("th",{children:" "})]})}),Object(_.jsx)("tbody",{children:c.map((function(e){return Object(_.jsxs)("tr",{"data-cy":"todo",className:e===s?"has-background-info-light":"",children:[Object(_.jsx)("td",{className:"is-vcentered",children:e.id}),Object(_.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(_.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("td",{className:"is-vcentered is-expanded",children:Object(_.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(_.jsx)("td",{className:"has-text-right is-vcentered",children:Object(_.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){return r(d(e))}(e)},children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:k()({"far fa-eye-slash":e===s,"far fa-eye":e!==s})})})})})]},e.id)}))})]})})},R=function(){var e=L((function(e){return e.filter})),t=e.query,c=e.status,n=C(),a=function(e){return n(h(e))};return Object(_.jsxs)("form",{className:"field has-addons",children:[Object(_.jsx)("p",{className:"control",children:Object(_.jsx)("span",{className:"select",children:Object(_.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t=e.target.value,n(f(t));var t},children:[Object(_.jsx)("option",{value:"all",children:"All"}),Object(_.jsx)("option",{value:"active",children:"Active"}),Object(_.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(_.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(_.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)}}),Object(_.jsx)("span",{className:"icon is-left",children:Object(_.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(_.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(_.jsx)("button",{"aria-label":"deleteQuery","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},M=(c(29),function(){return Object(_.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(_.jsx)("div",{className:"Loader__content"})})});function Q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var U,q=function(){var e=Object(S.useState)(!1),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(S.useState)(null),s=Object(g.a)(a,2),r=s[0],l=s[1],i=L((function(e){return e.currentTodo})),o=C(),d=function(){var e=Object(N.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n(!0),e.next=6,c=i.userId,Q("/users/".concat(c));case 6:t=e.sent,l(t);case 8:return e.prev=8,n(!1),e.finish(8);case 11:case"end":return e.stop()}var c}),e,null,[[2,,8,11]])})));return function(){return e.apply(this,arguments)}}();return Object(S.useEffect)((function(){d()}),[]),Object(_.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(_.jsx)("div",{className:"modal-background"}),c&&Object(_.jsx)(M,{}),!c&&r&&Object(_.jsxs)("div",{className:"modal-card",children:[Object(_.jsxs)("header",{className:"modal-card-head",children:[Object(_.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===i||void 0===i?void 0:i.id)}),Object(_.jsx)("button",{"aria-label":"closeModal",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return o(u())}})]}),Object(_.jsxs)("div",{className:"modal-card-body",children:[Object(_.jsx)("p",{className:"block","data-cy":"modal-title",children:null===i||void 0===i?void 0:i.title}),Object(_.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==i&&void 0!==i&&i.completed?Object(_.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(_.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(_.jsx)("a",{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})]})]})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed",e.QUERY="byQuery"}(U||(U={}));var I=function(){var e=C(),t=L((function(e){return e.currentTodo})),c=Object(S.useState)(!1),n=Object(g.a)(c,2),a=n[0],s=n[1],r=function(){var t=Object(N.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!1),t.next=4,Q("/todos");case 4:c=t.sent,e(x(c));case 6:return t.prev=6,s(!0),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[0,,6,9]])})));return function(){return t.apply(this,arguments)}}();return Object(S.useEffect)((function(){r()}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"section",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"box",children:[Object(_.jsx)("h1",{className:"title",children:"Todos:"}),Object(_.jsx)("div",{className:"block",children:Object(_.jsx)(R,{})}),Object(_.jsx)("div",{className:"block",children:a?Object(_.jsx)(A,{}):Object(_.jsx)(M,{})})]})})}),t&&Object(_.jsx)(q,{})]})},B=function(){return Object(_.jsx)(s.a,{store:y,children:Object(_.jsx)(r.a,{children:Object(_.jsx)(I,{})})})};a.a.render(Object(_.jsx)(B,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9620729a.chunk.js.map