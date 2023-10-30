import{o as u,e as p,f as e,p as b,q as Z,b as x,d as P,s as $,v as g,w as k,_ as L,x as F,y as I,c as z,a as R,z as M,A as j,B as E,C as q,D as O,E as W,G,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as i,t as oe,n as f,i as N,P as T,S as V,m as D,Q as ne,R as H,T as B,U as le,j as ae,V as S,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as pe,a1 as me,a2 as ve,a3 as he}from"./index-0cee63a2.js";import{N as fe}from"./NoteDisplay-14cae4f9.js";import ge from"./DrawingControls-70ed0bd5.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},we=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ye=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[we,ye];function be(s,n){return u(),p("svg",xe,[...Se])}const $e={name:"carbon-zoom-out",render:be},ke={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ce=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Me=[Ce,ze];function Ne(s,n){return u(),p("svg",ke,[...Me])}const Te={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},De=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),He=[De];function Be(s,n){return u(),p("svg",Ve,[...He])}const Pe={name:"carbon-renew",render:Be},Le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ue=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Ze=[Ae,Ue];function Fe(s,n){return u(),p("svg",Le,[...Ze])}const Ie={name:"carbon-time",render:Fe},Re="/assets/logo-title-horizontal-96c3c915.png";function je(){const s=b(Date.now()),n=Z({interval:1e3}),m=x(()=>{const l=(n.value-s.value)/1e3,r=Math.floor(l%60).toString().padStart(2,"0");return`${Math.floor(l/60).toString().padStart(2,"0")}:${r}`});function v(){s.value=n.value}return{timer:m,resetTimer:v}}const Ee=P({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(s){const n=s,m=x(()=>{var l,r,a;return(a=(r=(l=$.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.note}),v=x(()=>{var l,r,a;return(a=(r=(l=$.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.noteHTML});return(l,r)=>(u(),g(fe,{class:k(n.class),note:m.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),qe=L(Ee,[["__file","/Users/antoinecoulon/Documents/Development/Universal/appservice-and-nodejs-talk/azure-appservice-and-nodejs/node_modules/.pnpm/@slidev+client@0.43.12_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/NoteStatic.vue"]]),w=s=>(pe("data-v-9d24a2b7"),s=s(),me(),s),Oe={class:"bg-main h-full slidev-presenter"},We={class:"grid-section top flex"},Ge=w(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Je=w(()=>e("div",{class:"flex-auto"},null,-1)),Ke={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Qe=w(()=>e("div",{class:"context"}," current ",-1)),Xe=w(()=>e("div",{class:"context"}," next ",-1)),Ye={key:1,class:"grid-section note grid grid-rows-[1fr_min-content]"},et={class:"border-t border-main py-1 px-2 text-sm"},tt={class:"grid-section bottom"},st={class:"progress-bar"},ot=P({__name:"Presenter",setup(s){const n=b();F(),I(n);const m=z.titleTemplate.replace("%s",z.title||"Slidev");R({title:`Presenter - ${m}`});const{timer:v,resetTimer:l}=je(),r=b([]),a=x(()=>M.value<j.value?{route:$.value,clicks:M.value+1}:E.value?{route:q.value,clicks:0}:null);return O(),W(()=>{const C=n.value.querySelector("#slide-content"),o=G(J()),y=K();Q(()=>{if(!y.value||Y.value||!ee.value)return;const d=C.getBoundingClientRect(),_=(o.x-d.left)/d.width*100,h=(o.y-d.top)/d.height*100;if(!(_<0||_>100||h<0||h>100))return{x:_,y:h}},d=>{X.cursor=d})}),(C,o)=>{const y=Ie,d=Pe,_=te("HiddenText"),h=Te,A=$e;return u(),p(ce,null,[e("div",Oe,[e("div",{class:k(["grid-container",`layout${t(se)}`])},[e("div",We,[Ge,Je,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:o[0]||(o[0]=(...c)=>t(l)&&t(l)(...c))},[i(y,{class:"absolute"}),i(d,{class:"absolute opacity-0"})]),e("div",Ke,oe(t(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:f(t(N))},[i(V,{key:"main",class:"h-full w-full"},{default:T(()=>[i(ue,{"render-context":"presenter"})]),_:1}),Qe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:f(t(N))},[a.value?(u(),g(V,{key:"next",class:"h-full w-full"},{default:T(()=>{var c;return[i(t(_e),{is:(c=a.value.route)==null?void 0:c.component,"clicks-elements":r.value,"onUpdate:clicksElements":o[1]||(o[1]=U=>r.value=U),clicks:a.value.clicks,"clicks-disabled":!1,class:k(t(de)(a.value.route)),route:a.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):D("v-if",!0),Xe],4),D(" Notes "),(u(),p("div",Ye,[(u(),g(qe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:f({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",et,[e("button",{class:"slidev-icon-btn",onClick:o[2]||(o[2]=(...c)=>t(H)&&t(H)(...c))},[i(_,{text:"Increase font size"}),i(h)]),e("button",{class:"slidev-icon-btn",onClick:o[3]||(o[3]=(...c)=>t(B)&&t(B)(...c))},[i(_,{text:"Decrease font size"}),i(A)])])])),e("div",tt,[i(ve,{persist:!0})]),(u(),g(ge,{key:2}))],2),e("div",st,[e("div",{class:"progress h-2px bg-primary transition-all",style:f({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),i(he),i(re,{modelValue:t(S),"onUpdate:modelValue":o[4]||(o[4]=c=>ie(S)?S.value=c:null)},null,8,["modelValue"])],64)}}});const it=L(ot,[["__scopeId","data-v-9d24a2b7"],["__file","/Users/antoinecoulon/Documents/Development/Universal/appservice-and-nodejs-talk/azure-appservice-and-nodejs/node_modules/.pnpm/@slidev+client@0.43.12_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/Presenter.vue"]]);export{it as default};
