(this["webpackJsonptech-era"]=this["webpackJsonptech-era"]||[]).push([[0],{57:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(26),s=n.n(c),a=n(8),r=n(5),l=n(14),d=n(15),p=n(16),h=n(21),f=n(17),b=n(20),j=n(19),m=n.n(j),g=n(2),u=g.a.nav.withConfig({displayName:"Nel",componentId:"sc-1lbwgbl-0"})(["background-color:#f1f5f9;padding:20px;min-height:10vh;width:100%;"]),x=g.a.img.withConfig({displayName:"Logo",componentId:"sc-1lbwgbl-1"})(["height:70px;width:100px;"]),w=g.a.div.withConfig({displayName:"FailCon",componentId:"sc-1lbwgbl-2"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;"]),O=g.a.img.withConfig({displayName:"FailIm",componentId:"sc-1lbwgbl-3"})(["height:250px;width:250px;"]),y=g.a.h1.withConfig({displayName:"Fh",componentId:"sc-1lbwgbl-4"})(["color:#1e293b;font-size:30px;font-weight:bold;font-family:'Roboto';"]),N=g.a.p.withConfig({displayName:"Fp",componentId:"sc-1lbwgbl-5"})(["color:#475569;font-size:16px;font-family:'Roboto';"]),v=g.a.button.withConfig({displayName:"Fb",componentId:"sc-1lbwgbl-6"})(["background-color:#4656a1;color:#ffffff;font-family:'Roboto';border:none;padding:7px;border-radius:3px;"]),C=g.a.ul.withConfig({displayName:"ListCon",componentId:"sc-1lbwgbl-7"})(["display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;list-style-type:none;padding-left:0px;"]),I=g.a.li.withConfig({displayName:"Li",componentId:"sc-1je1ima-0"})(["margin-top:20px;margin-right:20px;width:15%;"]),k=g.a.img.withConfig({displayName:"Ci",componentId:"sc-1je1ima-1"})(["height:75px;width:55px;margin-right:8px;"]),q=g.a.p.withConfig({displayName:"Cn",componentId:"sc-1je1ima-2"})(["color:#1e293b;font-size:18px;font-family:'Roboto';"]),R=(n(57),n(1)),F=function(e){var t=e.details,n=t.id,i=t.name,o=t.logoUrl;return Object(R.jsx)(I,{children:Object(R.jsxs)(a.b,{to:"/courses/".concat(n),className:"link-el",children:[Object(R.jsx)(k,{src:o,alt:i}),Object(R.jsx)(q,{children:i})]})})},V=(n(62),"initial"),z="loading",S="success",L="fail",D=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={ap:V,courseList:[]},e.getData=Object(d.a)(Object(l.a)().mark((function t(){var n,i,o,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({ap:z})," https://apis.ccbp.in/te/courses",n={method:"GET"},t.next=5,fetch(" https://apis.ccbp.in/te/courses",n);case 5:if(!0!==(i=t.sent).ok){t.next=14;break}return t.next=9,i.json();case 9:o=t.sent,c=o.courses.map((function(e){return{id:e.id,name:e.name,logoUrl:e.logo_url}})),e.setState({courseList:c,ap:S}),t.next=15;break;case 14:e.setState({ap:L});case 15:case"end":return t.stop()}}),t)}))),e.loadingView=function(){return Object(R.jsx)("div",{"data-testid":"loader",className:"loader-con",children:Object(R.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:50})})},e.successView=function(){var t=e.state.courseList;return Object(R.jsxs)("div",{className:"s-con",children:[Object(R.jsx)("h1",{className:"header",children:"Courses"}),Object(R.jsx)(C,{children:t.map((function(e){return Object(R.jsx)(F,{details:e},e.id)}))})]})},e.failView=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(a.b,{to:"/",className:"link-el",children:Object(R.jsx)(u,{children:Object(R.jsx)(x,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png",alt:"website logo"})})}),Object(R.jsxs)(w,{children:[Object(R.jsx)(O,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png",alt:"failure view"}),Object(R.jsx)(y,{children:"Oops! Something Went wRONG"}),Object(R.jsx)(N,{children:"We cannot seem to find the page you are looking for"}),Object(R.jsx)(v,{type:"button",onClick:e.getData,children:"Retry"})]})]})},e.finalRender=function(){switch(e.state.ap){case z:return e.loadingView();case S:return e.successView();case L:return e.failView();default:return null}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(a.b,{to:"/",className:"link-el",children:Object(R.jsx)(u,{children:Object(R.jsx)(x,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png",alt:"website logo"})})}),this.finalRender()]})}}]),n}(i.Component),_=D,W=g.a.nav.withConfig({displayName:"Nel",componentId:"sc-1qir5rq-0"})(["background-color:#f1f5f9;padding:20px;min-height:10vh;width:100%;"]),G=g.a.img.withConfig({displayName:"Logo",componentId:"sc-1qir5rq-1"})(["height:70px;width:100px;"]),U=g.a.div.withConfig({displayName:"View",componentId:"sc-1qir5rq-2"})(["display:flex;flex-direction:row;align-items:flex-start;background-color:#ffffff;width:80%;"]),B=g.a.img.withConfig({displayName:"Vi",componentId:"sc-1qir5rq-3"})(["height:250px;width:250px;margin-right:10px;"]),M=g.a.p.withConfig({displayName:"Vd",componentId:"sc-1qir5rq-4"})(["color:#64748b;font-family:'Roboto';font-size:22px;"]),T=g.a.div.withConfig({displayName:"FailCon",componentId:"sc-1qir5rq-5"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;"]),A=g.a.img.withConfig({displayName:"FailIm",componentId:"sc-1qir5rq-6"})(["height:250px;width:250px;margin-right:16px;"]),E=g.a.h1.withConfig({displayName:"Fh",componentId:"sc-1qir5rq-7"})(["color:#1e293b;font-size:30px;font-weight:bold;font-family:'Roboto';"]),J=g.a.p.withConfig({displayName:"Fp",componentId:"sc-1qir5rq-8"})(["color:#475569;font-size:16px;font-family:'Roboto';"]),P=g.a.button.withConfig({displayName:"Fb",componentId:"sc-1qir5rq-9"})(["background-color:#4656a1;color:#ffffff;font-family:'Roboto';border:none;padding:7px;border-radius:3px;"]),H=g.a.h1.withConfig({displayName:"Vh",componentId:"sc-1qir5rq-10"})(["color:#1e293b;font-size:30px;font-family:'Roboto';margin-bottom:7px;"]),K=(n(63),"initial"),Q="loading",X="success",Y="fail",Z=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={course:{},ap:K},e.getItem=Object(d.a)(Object(l.a)().mark((function t(){var n,i,o,c,s,a,r,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({ap:Q}),n=e.props.match,i=n.params,o=i.id,c="https://apis.ccbp.in/te/courses/".concat(o),s={method:"Get"},t.next=8,fetch(c,s);case 8:if(!0!==(a=t.sent).ok){t.next=17;break}return t.next=12,a.json();case 12:r=t.sent,d={id:r.course_details.id,name:r.course_details.name,imageUrl:r.course_details.image_url,description:r.course_details.description},e.setState({course:d,ap:X}),t.next=18;break;case 17:e.setState({ap:Y});case 18:case"end":return t.stop()}}),t)}))),e.successView=function(){var t=e.state.course;return Object(R.jsx)("div",{className:"cr",children:Object(R.jsxs)(U,{children:[Object(R.jsx)(B,{src:t.imageUrl,alt:t.name}),Object(R.jsxs)("div",{children:[Object(R.jsx)(H,{children:t.name}),Object(R.jsx)(M,{children:t.description})]})]})})},e.loadingView=function(){return Object(R.jsx)("div",{"data-testid":"loader",className:"loader-con",children:Object(R.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:50})})},e.failView=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(a.b,{to:"/",className:"link-el",children:Object(R.jsx)(W,{children:Object(R.jsx)(G,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png",alt:"website logo"})})}),Object(R.jsxs)(T,{children:[Object(R.jsx)(A,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png",alt:"failure view"}),Object(R.jsx)(E,{children:"Oops! Something Went wRONG"}),Object(R.jsx)(J,{children:"We cannot seem to find the page you are looking for"}),Object(R.jsx)(P,{type:"button",onClick:e.getItem,children:"Retry"})]})]})},e.finalRender=function(){switch(e.state.ap){case Q:return e.loadingView();case X:return e.successView();case Y:return e.failView();default:return null}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getItem()}},{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(a.b,{to:"/",className:"link-el",children:Object(R.jsx)(W,{children:Object(R.jsx)(G,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png",alt:"website logo"})})}),Object(R.jsx)("div",{children:this.finalRender()})]})}}]),n}(i.Component),$=Z,ee=g.a.div.withConfig({displayName:"NoCon",componentId:"sc-esjc9o-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;"]),te=g.a.img.withConfig({displayName:"NoIm",componentId:"sc-esjc9o-1"})(["height:250px;width:250px;"]),ne=g.a.nav.withConfig({displayName:"Nel",componentId:"sc-esjc9o-2"})(["background-color:#f1f5f9;padding:20px;min-height:10vh;width:100%;"]),ie=g.a.img.withConfig({displayName:"Logo",componentId:"sc-esjc9o-3"})(["height:70px;width:100px;"]),oe=g.a.h1.withConfig({displayName:"Noh",componentId:"sc-esjc9o-4"})(["color:#1e293b;font-size:30px;font-family:'Roboto';"]),ce=g.a.p.withConfig({displayName:"Nop",componentId:"sc-esjc9o-5"})(["color:#475569;font-size:16px;font-family:'Roboto';"]),se=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(a.b,{to:"/",className:"link-el",children:Object(R.jsx)(ne,{children:Object(R.jsx)(ie,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png",alt:"website logo"})})}),Object(R.jsxs)(ee,{children:[Object(R.jsx)(te,{src:"https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png",alt:"not found"}),Object(R.jsx)(oe,{children:"Page Not Found"}),Object(R.jsx)(ce,{children:"We are sorry, the page you requested could not be found"})]})]})},ae=(n(64),function(){return Object(R.jsx)("div",{children:Object(R.jsxs)(r.c,{children:[Object(R.jsx)(r.a,{exact:!0,path:"/",component:_}),Object(R.jsx)(r.a,{exact:!0,path:"/courses/:id",component:$}),Object(R.jsx)(r.a,{component:se})]})})});s.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(a.a,{children:Object(R.jsx)(ae,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.431a239c.chunk.js.map