import{A as E}from"./index-tA1fyhwC.js";import{t as H}from"./methods-DEDIBE-t.js";import{d as B,j as t,w as A,A as S,o as M,k as F,B as T,b as l,c as r,e,F as j,i as C,q as x,m as v,C as z,_ as D,a as N,f as $,p as O,t as P}from"./index-mjcASj3S.js";const R=["src","alt"],U=B({__name:"index",props:{images:{},width:{},height:{},interval:{}},setup(W){const n=W,u=t(0),o=t(null);let c=n.width||600,s=n.height||400;const g=n.interval||3e3,p=t(!0);A(()=>n.width,(i,m)=>{c=i}),A(()=>n.height,(i,m)=>{s=i});const d=S(()=>n.images.length),k=S(()=>({transform:`translateX(-${u.value%d.value*c}px)`,transition:p.value?"transform 0.5s ease":"none"})),b=i=>({width:`${c}px`,height:`${s}px`}),w=()=>{u.value===d.value-1?(p.value=!1,setTimeout(()=>{u.value=0,p.value=!0},500)):u.value+=1},h=()=>{o.value=setInterval(w,g)},y=()=>{o.value&&clearInterval(o.value)},a=H(()=>{h()},200);return M(()=>{h(),window.addEventListener("resize",a)}),F(()=>{y(),window.removeEventListener("resize",a)}),(i,m)=>{const _=T("img-loader");return l(),r("div",{class:"carousel-container",style:x({width:v(c)+"px"}),onMouseenter:y,onMouseleave:h},[e("div",{class:"carousel-wrapper",style:x(k.value)},[(l(!0),r(j,null,C(i.images,(I,L)=>(l(),r("div",{class:"carousel-item",key:L,style:x(b())},[z(e("img",{src:I,alt:"Image "+L,class:"carousel-image"},null,8,R),[[_,I]])],4))),128))],4)],36)}}}),V=D(U,[["__scopeId","data-v-5553ce15"]]),q={class:"shu-mian"},X={class:"shu-content"},G={class:"shu-content-banner"},J={class:"shu-content-banner-recommend"},K={class:"item"},Q={href:"",class:"thumbnail"},Y={alt:""},Z={class:"item"},ee={href:"",class:"thumbnail"},te={alt:""},se={class:"shu-content-hot"},ae={class:"shu-content-hot-list"},ie={href:"",class:"link"},ne={class:"inner"},oe={class:"image",alt:""},ce={class:"shu-content-title"},le=["onClick"],re=B({__name:"index",setup(W){const n=t([{name:"最新文章",key:"recommend"},{name:"热门文章",key:"hot"},{name:"评论最多",key:"new"},{name:"评论最多",key:"front"},{name:"点赞最多",key:"back"}]),u=t(["https://pic3.zhimg.com/v2-438ae100f06ccf947031b406d84a4f0a_r.jpg","https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/7a67dece8aff3b212fa180d8c1f7eac5.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080","https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/ea1338f685ec2c7b4348ba5e17f08dd0.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080","https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/86f3f30c32342a017f699fab73c0481f.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080","https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/fb1da048d1b5ebdbcdac2db6a9e69ad8.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080","https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/ea73c0013ecd439cccc3aced51ef60d7.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080"]);let o=t(0),c=t(null);const s=t(null);let g=t(0),p=t(56.0059);const d=t(null),k=f=>{o.value=f,g.value=(c.value[f].offsetWidth+20)*f},b=t(0),w=t(0),h=new ResizeObserver(()=>{s.value&&(w.value=s.value.clientHeight,b.value=s.value.clientWidth)}),y=()=>{d.value&&d.value.readMore()};return M(()=>{s.value&&h.observe(s.value)}),N(()=>{s.value&&h.unobserve(s.value)}),(f,a)=>{const i=T("img-loader");return l(),r("div",q,[e("div",X,[e("div",G,[e("div",{class:"swiper-container",ref_key:"swiperContainer",ref:s},[$(V,{images:u.value,width:b.value,height:w.value,interval:3e3},null,8,["images","width","height"])],512),e("div",J,[e("figure",K,[e("a",Q,[z(e("img",Y,null,512),[[i,"https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"]])]),a[0]||(a[0]=e("figcaption",{class:"information"},[e("span",{class:"type"},"推荐"),e("div",{class:"text"},"孤帆远影碧空尽，唯见长江天际流。")],-1))]),e("figure",Z,[e("a",ee,[z(e("img",te,null,512),[[i,"https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"]])]),a[1]||(a[1]=e("figcaption",{class:"information"},[e("span",{class:"type"},"推荐"),e("div",{class:"text"},"桃花潭水深千尺，不及汪伦送我情。")],-1))])])]),e("div",se,[e("ul",ae,[(l(),r(j,null,C(4,m=>e("li",{class:"item",key:m},[e("a",ie,[e("figure",ne,[a[2]||(a[2]=e("span",{class:"views"},"44,800 ℃",-1)),z(e("img",oe,null,512),[[i,"https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280"]]),a[3]||(a[3]=e("figcaption",{class:"title"}," 日照香炉生紫烟，遥看瀑布挂前川。 ",-1))])])])),64))])]),e("div",ce,[e("ul",null,[(l(!0),r(j,null,C(n.value,(m,_)=>(l(),r("li",{key:_,class:O(["item",_===v(o)?"active":""]),onClick:I=>k(_),ref_for:!0,ref_key:"tabWidth",ref:c},P(m.name),11,le))),128)),e("li",{class:"line",style:x({left:v(g)+"px",width:v(p)+"px"})},null,4)])]),$(E,{ref_key:"sonArticlesList",ref:d,activeIndex:v(o)},null,8,["activeIndex"])]),e("div",null,[e("div",{class:"shu-pagination",onClick:y},"查看更多")])])}}}),me=D(re,[["__scopeId","data-v-c593c352"]]);export{me as default};
