(this.webpackJsonpjijidemo=this.webpackJsonpjijidemo||[]).push([[0],{13:function(e,a,n){e.exports={Header:"header_Header__35Jcn",Logo:"header_Logo__77271",Title:"header_Title__1aE-9",Signin_register:"header_Signin_register__3anLb",headerLink:"header_headerLink__2763Q"}},42:function(e,a,n){e.exports={Footer:"footer_Footer__2De4n"}},43:function(e,a,n){e.exports={Sidebar:"sidebar_Sidebar__1hBeX"}},46:function(e,a,n){e.exports=n(88)},51:function(e,a,n){},65:function(e,a){},67:function(e,a){},7:function(e,a,n){e.exports={homeBanner:"home_homeBanner__2aNqb",bannersearch:"home_bannersearch__1U1G6",country:"home_country__2f_Mg",main_section:"home_main_section__1_OJ7",main_content:"home_main_content__Hgh_l"}},88:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(41),o=n.n(l),c=(n(51),n(13)),i=n.n(c),m=function(){return r.a.createElement("header",{className:i.a.Header},r.a.createElement("div",{className:i.a.Logo},r.a.createElement("a",{href:"#logo"},r.a.createElement("h1",null,"JijiDemo"))),r.a.createElement("div",{className:i.a.Title},r.a.createElement("h4",null,"SELL FASTER, BUY SMARTER")),r.a.createElement("div",{className:i.a.Signin_register},r.a.createElement("div",{className:i.a.headerLink},r.a.createElement("h4",null,"Sign in"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Registration")),r.a.createElement("button",null," SELL ")))},s=n(42),u=n.n(s),E=function(){var e=function(e){return r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:e},e))})))};return r.a.createElement("footer",{className:u.a.Footer},e(["About Jiji","We are Hiring!","Terms and Condition","Privacy and Policy","Billing Policy","Jijiness"]),e(["Support@jiji.ng","Safety Tips","Contact Us","FAQ"]),e(["appicon","google play icon"]),e(["Our Blog","Jiji on FB","Our Instagram","Our Youtube","Our Twitter"]),e(["Brand","Jiji Sellers","Regions"]))},d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),e.children,r.a.createElement(E,null))},h=n(7),g=n.n(h),_=function(){return r.a.createElement(d,null,r.a.createElement("div",{className:g.a.homeBanner},r.a.createElement("div",{className:g.a.imageone}),r.a.createElement("div",{className:g.a.bannersearch},r.a.createElement("h4",null,"Find anything in",r.a.createElement("span",{className:g.a.country},"All Nigeria")),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Type your search here"}),r.a.createElement("button",null,"Search"))),r.a.createElement("div",{className:g.a.imagetwo})),r.a.createElement("div",{className:g.a.main_section},r.a.createElement("div",{className:"sidebar"},r.a.createElement(b,null)),r.a.createElement("div",{className:g.a.main_content},r.a.createElement("div",{className:g.a.section_1},r.a.createElement("div",{className:g.a.home_banner},r.a.createElement(S,null)),r.a.createElement("div",{className:g.a.sell_banner},r.a.createElement(N,null))),r.a.createElement("h3",null,"Trending Ads"))))},p=n(43),f=n.n(p),v=["Vehicles","Property","Mobile Phones & Tablets","Electronics","Home, Furniture & Appliances","Health & Beauty","Fashion","Sports, Arts & Outdoors","Seeking Work -CVs","Services","Jobs","Babies & kids","Animals & Pets","Agriculture & Food","Commercial Equipment & Tools","Repair & Construction"],b=function(){return r.a.createElement("div",{className:f.a.Sidebar},r.a.createElement("ul",null,v.map((function(e){return r.a.createElement("li",{key:e},e)}))))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Got something to sell?"),r.a.createElement("div",{className:"plus-icon"},"+"),r.a.createElement("h6",null,"Post an advert for free!"))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Premium Services"),r.a.createElement("p",null,"You can sell more!"))},y=n(22),w=n(45),j=(n(52),n(16)),F=function(){var e=Object(t.useState)({emailPhone:"",password:""}),a=Object(w.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Sign in")),r.a.createElement("div",{className:"body"},r.a.createElement("form",null,r.a.createElement("input",{value:n.emailPhone,type:"text",onChange:function(e){return l(Object(y.a)({},n,{emailPhone:e.target.value}))},placeholder:"Email or Phone Number"}),r.a.createElement("input",{type:"password",value:n.emailPhone,onChange:function(e){return l(Object(y.a)({},n,{password:e.target.value}))},placeholder:"Password"}),r.a.createElement(j.b,{to:"/forgot-password"},"Forgot your password"),r.a.createElement("button",null,"SIGN IN"))),r.a.createElement("div",null,r.a.createElement("p",null,"Dont have an account?"),r.a.createElement(j.b,{to:"/register"},"Register")))))},P=function(){return r.a.createElement(d,null)},B=n(1),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(B.a,{exact:!0,path:"/",component:_}),r.a.createElement(B.a,{path:"/register",component:P}),r.a.createElement(B.a,{path:"/login",component:F})))};var T=function(){return r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.d757e403.chunk.js.map