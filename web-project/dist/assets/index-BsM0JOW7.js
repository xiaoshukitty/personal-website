import{f as r,J as D,o as y,_,b as l,c as f,d as w,m as k,n as g,p as O,j as p,r as v,s as M,v as $,e as a,k as P}from"./index-mjcASj3S.js";var B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};function x(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),s.forEach(function(o){C(n,o,t[o])})}return n}function C(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var h=function(e,t){var s=x({},e,t.attrs);return r(D,x({},s,{icon:B}),null)};h.displayName="MenuOutlined";h.inheritAttrs=!1;const j={name:"Particles",setup(){return y(()=>{window.particlesJS&&window.particlesJS("particles-js",{particles:{number:{value:70,density:{enable:!0,value_area:800}},shape:{type:"circle"},size:{value:20,random:!0,anim:{enable:!0,speed:10,size_min:1}},opacity:{value:.8,random:!0,anim:{enable:!0,speed:1,opacity_min:0}},color:{value:["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"]},move:{enable:!0,speed:2,direction:"top",random:!0,straight:!1,outMode:"out",attract:{enable:!1}},links:{enable:!0,distance:150,color:"#ff0000",opacity:.4,width:1},collisions:{enable:!1}},retina_detect:!0})}),{}}},z={id:"particles-js",class:"particles-container"};function I(n,e,t,s,o,c){return l(),f("div",z)}const E=_(j,[["render",I],["__scopeId","data-v-d7fe4328"]]),H={key:0,style:{"margin-left":"5px"}},N=w({__name:"index",props:{isSticky:{type:Boolean,default:!1}},emits:["showDrawer"],setup(n,{emit:e}){const t=n,s=e,o=()=>{s("showDrawer")};return(c,m)=>(l(),f("div",{class:O(["menu",{sticky:t.isSticky}]),onClick:o},[r(k(h),{style:{"font-size":"14px"}}),n.isSticky?g("",!0):(l(),f("span",H,"Menu"))],2))}}),J=_(N,[["__scopeId","data-v-8ce086ab"]]),V=w({__name:"index",props:{openDrawer:{type:Boolean,default:!1}},emits:["closeDrawer"],setup(n,{emit:e}){const t=p("left"),s=n,o=e,c=()=>{o("closeDrawer")};return(m,u)=>{const b=v("a-drawer");return l(),M(b,{width:320,title:"Menu菜单",placement:t.value,open:s.openDrawer,onClose:c},{default:$(()=>u[0]||(u[0]=[a("div",null," 123 ",-1)])),_:1},8,["placement","open"])}}}),Y={class:"articles"},q={class:"articles-center"},L={class:"contact-information"},A={key:0,class:"side-box"},U=w({__name:"index",setup(n){const e=p(!1),t=p(0),s=p(!1),o=p(!1),c=()=>{s.value=!0},m=()=>{s.value=!1},u=()=>{t.value=window.scrollY,t.value>=390?o.value=!0:o.value=!1,e.value=scrollY>200,sessionStorage.setItem("scrollPosition",window.scrollY.toString())};return y(async()=>{window.addEventListener("scroll",u)}),P(()=>{window.removeEventListener("scroll",u)}),(b,i)=>{const d=v("SvgIcon"),S=v("a-back-top");return l(),f("div",Y,[r(J,{isSticky:e.value,onShowDrawer:c},null,8,["isSticky"]),i[2]||(i[2]=a("div",{class:"articles-top"},null,-1)),a("div",q,[i[0]||(i[0]=a("div",{class:"articles-center-meta"}," 2025-01-08 ",-1)),i[1]||(i[1]=a("h2",null,"你保存用户密码的姿势正确吗？",-1)),a("div",L,[a("div",null,[r(d,{name:"qq",width:"30px",height:"30px"})]),a("div",null,[r(d,{name:"wechat",width:"30px",height:"30px"})]),a("div",null,[r(d,{name:"sina",width:"30px",height:"30px"})]),a("div",null,[r(d,{name:"alipay",width:"30px",height:"30px"})]),a("div",null,[r(d,{name:"applets",width:"30px",height:"30px"})])])]),i[3]||(i[3]=a("div",{class:"articles-bottom"},[a("section",{class:"section"},[a("div",null," 123 ")])],-1)),o.value?(l(),f("div",A,[r(S,{"visibility-height":0})])):g("",!0),r(E),r(V,{openDrawer:s.value,onCloseDrawer:m},null,8,["openDrawer"])])}}}),G=_(U,[["__scopeId","data-v-e7ace852"]]);export{G as default};
