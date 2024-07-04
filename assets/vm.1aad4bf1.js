import{c as $,j as z,h as l,g as O,O as T,P as D,b as F,Q as I,R as P,S as Q,T as L}from"./index.73094eeb.js";const N={xs:18,sm:24,md:32,lg:38,xl:46},U={size:String};function K(e,t=N){return $(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function V(e,t){return e!==void 0&&e()||t}function y(e,t){return e!==void 0?t.concat(e()):t}const R="0 0 24 24",k=e=>e,b=e=>`ionicons ${e}`,S={"mdi-":e=>`mdi ${e}`,"icon-":k,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":b,"ion-ios":b,"ion-logo":b,"iconfont ":k,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},C={o_:"-outlined",r_:"-round",s_:"-sharp"},B={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},A=new RegExp("^("+Object.keys(S).join("|")+")"),H=new RegExp("^("+Object.keys(C).join("|")+")"),E=new RegExp("^("+Object.keys(B).join("|")+")"),X=/^[Mm]\s?[-+]?\.?\d/,Y=/^img:/,G=/^svguse:/,J=/^ion-/,W=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ne=z({name:"QIcon",props:{...U,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:s}}=O(),r=K(e),i=$(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=$(()=>{let o,n=e.name;if(n==="none"||!n)return{none:!0};if(s.iconMapFn!==null){const a=s.iconMapFn(n);if(a!==void 0)if(a.icon!==void 0){if(n=a.icon,n==="none"||!n)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(X.test(n)===!0){const[a,c=R]=n.split("|");return{svg:!0,viewBox:c,nodes:a.split("&&").map(p=>{const[d,v,g]=p.split("@@");return l("path",{style:v,d,transform:g})})}}if(Y.test(n)===!0)return{img:!0,src:n.substring(4)};if(G.test(n)===!0){const[a,c=R]=n.split("|");return{svguse:!0,src:a.substring(7),viewBox:c}}let f=" ";const m=n.match(A);if(m!==null)o=S[m[1]](n);else if(W.test(n)===!0)o=n;else if(J.test(n)===!0)o=`ionicons ion-${s.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(E.test(n)===!0){o="notranslate material-symbols";const a=n.match(E);a!==null&&(n=n.substring(6),o+=B[a[1]]),f=n}else{o="notranslate material-icons";const a=n.match(H);a!==null&&(n=n.substring(2),o+=C[a[1]]),f=n}return{cls:o,content:f}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?l(e.tag,o,V(t.default)):u.value.img===!0?l(e.tag,o,y(t.default,[l("img",{src:u.value.src})])):u.value.svg===!0?l(e.tag,o,y(t.default,[l("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?l(e.tag,o,y(t.default,[l("svg",{viewBox:u.value.viewBox},[l("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(o.class+=" "+u.value.cls),l(e.tag,o,y(t.default,[u.value.content])))}}});function Z(e,t){const s=e.style;for(const r in t)s[r]=t[r]}function se(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=T(e);if(t)return t.$el||t}function ee(e,t=250){let s=!1,r;return function(){return s===!1&&(s=!0,setTimeout(()=>{s=!1},t),r=e.apply(this,arguments)),r}}function q(e,t,s,r){s.modifiers.stop===!0&&Q(e);const i=s.modifiers.color;let u=s.modifiers.center;u=u===!0||r===!0;const o=document.createElement("span"),n=document.createElement("span"),f=L(e),{left:m,top:a,width:c,height:p}=t.getBoundingClientRect(),d=Math.sqrt(c*c+p*p),v=d/2,g=`${(c-d)/2}px`,M=u?g:`${f.left-m-v}px`,x=`${(p-d)/2}px`,j=u?x:`${f.top-a-v}px`;n.className="q-ripple__inner",Z(n,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${M},${j},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(n),t.appendChild(o);const _=()=>{o.remove(),clearTimeout(h)};s.abort.push(_);let h=setTimeout(()=>{n.classList.add("q-ripple__inner--enter"),n.style.transform=`translate3d(${g},${x},0) scale3d(1,1,1)`,n.style.opacity=.2,h=setTimeout(()=>{n.classList.remove("q-ripple__inner--enter"),n.classList.add("q-ripple__inner--leave"),n.style.opacity=0,h=setTimeout(()=>{o.remove(),s.abort.splice(s.abort.indexOf(_),1)},275)},250)},50)}function w(e,{modifiers:t,value:s,arg:r}){const i=Object.assign({},e.cfg.ripple,t,s);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var re=D({name:"ripple",beforeMount(e,t){const s=t.instance.$.appContext.config.globalProperties.$q.config||{};if(s.ripple===!1)return;const r={cfg:s,enabled:t.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&q(i,e,r,i.qKeyEvent===!0)},keystart:ee(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&F(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&q(i,e,r,!0)},300)};w(r,t),e.__qripple=r,I(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const s=e.__qripple;s!==void 0&&(s.enabled=t.value!==!1,s.enabled===!0&&Object(t.value)===t.value&&w(s,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(s=>{s()}),P(t,"main"),delete e._qripple)}});function oe(e){return e.appContext.config.globalProperties.$router!==void 0}function ie(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{ne as Q,re as R,V as a,oe as b,Z as c,U as d,K as e,se as g,y as h,N as u,ie as v};
