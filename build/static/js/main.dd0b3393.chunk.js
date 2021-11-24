(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[3],{109:function(t,e,n){"use strict";n.r(e);var r,a,c=n(0),i=n.n(c),u=n(29),o=n.n(u),s=n(17),l=n(47),j=n(32),b=n(7),d=n(48),f=n.n(d),h=n(21),O=n(49),p=n.n(O),v=n(3),x=n(6),m=n(38),k=n(19),g=Object(b.d)("",Object(x.a)({},m.a,(function(t,e){return e.payload}))),_=Object(b.e)({name:"contacts",initialState:{contactItems:[],loading:!1,error:null},extraReducers:(r={},Object(x.a)(r,k.c.fulfilled,(function(t,e){var n=e.payload;return Object(v.a)(Object(v.a)({},t),{},{contactItems:n,loading:!1,error:null})})),Object(x.a)(r,k.c.pending,(function(t){return Object(v.a)(Object(v.a)({},t),{},{loading:!0,error:null})})),Object(x.a)(r,k.c.rejected,(function(t,e){var n=e.payload;return Object(v.a)(Object(v.a)({},t),{},{loading:!1,error:n})})),Object(x.a)(r,k.a.fulfilled,(function(t,e){var n=e.payload;return Object(v.a)(Object(v.a)({},t),{},{contactItems:[].concat(Object(j.a)(t.contactItems),[n]),loading:!1,error:null})})),Object(x.a)(r,k.a.pending,(function(t){return Object(v.a)(Object(v.a)({},t),{},{loading:!0,error:null})})),Object(x.a)(r,k.a.rejected,(function(t,e){var n=e.payload;return Object(v.a)(Object(v.a)({},t),{},{loading:!1,error:n})})),Object(x.a)(r,k.b.fulfilled,(function(t,e){var n=e.payload;return Object(v.a)(Object(v.a)({},t),{},{contactItems:t.contactItems.filter((function(t){return t.id!==n})),loading:!1,error:null})})),Object(x.a)(r,k.b.pending,(function(t){return Object(v.a)(Object(v.a)({},t),{},{loading:!0,error:null})})),Object(x.a)(r,k.b.rejected,(function(t,e){var n=e.payload;return Object(v.a)(Object(v.a)({},t),{},{loading:!1,error:n})})),r)}).reducer,y=n(18),w=Object(b.e)({name:"auth",initialState:{user:{name:"",email:""},token:"",isAuth:!1,isGetCurrentUser:!1},extraReducers:(a={},Object(x.a)(a,y.d.fulfilled,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isAuth=!0})),Object(x.a)(a,y.b.fulfilled,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isAuth=!0})),Object(x.a)(a,y.c.fulfilled,(function(t,e){e.payload;t.user={name:"",email:""},t.token="",t.isAuth=!1})),Object(x.a)(a,y.a.pending,(function(t){t.isGetCurrentUser=!0})),Object(x.a)(a,y.a.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.isAuth=!0,t.isGetCurrentUser=!1})),Object(x.a)(a,y.a.rejected,(function(t){t.isGetCurrentUser=!1})),a)}).reducer,N=[].concat(Object(j.a)(Object(b.f)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[f.a]),C={key:"auth",storage:p.a,whitelist:["token"]},A=Object(h.g)(C,w),L=Object(b.a)({reducer:{phoneBook:_,auth:A,filter:g},middleware:N,devTools:!1}),U=Object(h.h)(L),W=n(9),z=(n(85),n(5)),I=n(51),T=n.n(I),V=(n(104),n(24)),S=n.n(V),B=n(1),G=function(){return Object(B.jsxs)("nav",{children:[Object(B.jsx)(s.b,{to:"/",exact:!0,className:S.a.link,activeClassName:S.a.activeLink,children:"Home"}),Object(B.jsx)(s.b,{to:"/contacts",exact:!0,className:S.a.link,activeClassName:S.a.activeLink,children:"Phonebook"})]})},M=function(t){return t.auth.isAuth},R=function(t){return t.auth.user.name},P=function(t){return t.auth.isGetCurrentUser},F=n.p+"static/media/user.96db366d.jpg",E=n(25),J=n.n(E);function K(){var t=Object(W.b)(),e=Object(W.c)(R),n=F;return Object(B.jsxs)("div",{className:J.a.container,children:[Object(B.jsx)("img",{src:n,alt:"avatar",width:"32",height:"32",className:J.a.avatar}),Object(B.jsxs)("span",{className:J.a.name,children:["Welcome,",e,"!"]}),Object(B.jsx)("button",{className:J.a.button,type:"button",onClick:function(){return t(Object(y.c)())},children:"Log out"})]})}var Y=n(26),D=n.n(Y);function H(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(s.b,{to:"/register",exact:!0,className:D.a.link,activeClassName:D.a.activeLink,children:"Registration"}),Object(B.jsx)(s.b,{to:"/login",exact:!0,className:D.a.link,activeClassName:D.a.activeLink,children:"Login"})]})}var X=n(53),Z=n.n(X);function q(){var t=Object(W.c)(M);return Object(B.jsxs)("header",{className:Z.a.header,children:[Object(B.jsx)(G,{}),t?Object(B.jsx)(K,{}):Object(B.jsx)(H,{})]})}var Q=n(31),$=["children","redirectTo"];function tt(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,a=Object(Q.a)(t,$),c=Object(W.c)(M);return Object(B.jsx)(z.b,Object(v.a)(Object(v.a)({},a),{},{children:c?e:Object(B.jsx)(z.a,{to:r})}))}var et=["children","restricted","redirectTo"];function nt(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,a=t.redirectTo,c=void 0===a?"/":a,i=Object(Q.a)(t,et),u=Object(W.c)(M)&&r;return Object(B.jsx)(z.b,Object(v.a)(Object(v.a)({},i),{},{children:u?Object(B.jsx)(z.a,{to:c}):e}))}var rt=n(54),at=n.n(rt);function ct(t){var e=t.children;return Object(B.jsx)("div",{className:at.a.container,children:e})}var it=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,123))})),ut=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,124))})),ot=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,125))})),st=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,126))})),lt=function(){var t=Object(W.b)(),e=Object(W.c)(P);return Object(c.useEffect)((function(){t(Object(y.a)())}),[t]),!e&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(q,{}),Object(B.jsx)(ct,{children:Object(B.jsx)(c.Suspense,{fallback:Object(B.jsx)(T.a,{}),children:Object(B.jsxs)(z.d,{children:[Object(B.jsx)(nt,{exact:!0,path:"/",component:it}),Object(B.jsx)(nt,{path:"/register",redirectTo:"/",restricted:!0,children:Object(B.jsx)(ut,{})}),Object(B.jsx)(nt,{path:"/login",restricted:!0,redirectTo:"/",component:ot}),Object(B.jsx)(tt,{path:"/contacts",component:st,redirectTo:"/login"})]})})})]})};o.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(W.a,{store:L,children:Object(B.jsx)(l.a,{loading:Object(B.jsx)("h2",{children:"Wait,loading..."}),persistor:U,children:Object(B.jsx)(s.a,{children:Object(B.jsx)(lt,{})})})})}),document.getElementById("root"))},18:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n(8),a=n.n(r),c=n(20),i=n(16),u=n.n(i),o=n(7);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){u.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/users/signup",e);case 4:return c=t.sent,i=c.data,s(i.token),t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(1),r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),b=Object(o.c)("auth/login",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/users/login",e);case 4:return c=t.sent,i=c.data,s(i.token),t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(1),r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(o.c)("auth/logOut",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/users/logout");case 4:l(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(o.c)("auth/refresh",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return c.set(c),t.prev=5,t.next=8,u.a.get("/users/current");case 8:return i=t.sent,o=i.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),n.rejectWithValue(t.t0);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},19:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return j}));var r=n(8),a=n.n(r),c=n(20),i=n(7),u=n(16),o=n.n(u);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=Object(i.c)("contacts/fetchContacts",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.get("/contacts");case 4:return c=t.sent,i=c.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),r(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(i.c)("contacts/addContact",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.post("/contacts",e);case 4:return c=t.sent,i=c.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),r(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(i.c)("contacts/deleteContact",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.delete("/contacts/".concat(e));case 4:return c=t.sent,i=c.data.id,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),r(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}())},24:function(t,e,n){t.exports={link:"Navigation_link__1yyt0",activeLink:"Navigation_activeLink__1-Fol Navigation_link__1yyt0"}},25:function(t,e,n){t.exports={container:"UserMenu_container__3DBxj",avatar:"UserMenu_avatar__3vozZ",name:"UserMenu_name__3YKm3",button:"UserMenu_button__3tr7j"}},26:function(t,e,n){t.exports={link:"AuthNav_link__11vIr",activeLink:"AuthNav_activeLink__210L4 AuthNav_link__11vIr"}},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(7),a=Object(r.b)("contact/changeFilter")},53:function(t,e,n){t.exports={header:"AppBar_header__2PSoY"}},54:function(t,e,n){t.exports={container:"Container_container__3ozKX"}},85:function(t,e,n){}},[[109,6,7]]]);
//# sourceMappingURL=main.dd0b3393.chunk.js.map