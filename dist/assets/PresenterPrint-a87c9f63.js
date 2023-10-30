import{d,u as _,a as p,c as m,b as u,r as h,e as a,f as e,t as o,g as r,F as v,h as f,n as g,i as x,o as n,j as y,k as b,l as k,m as N,_ as P}from"./index-0cee63a2.js";import{N as w}from"./NoteDisplay-14cae4f9.js";const D={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},z={class:"opacity-50"},B=e("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(n(),a("div",{id:"page-root",style:g(r(x))},[e("div",D,[e("div",V,[e("h1",j,o(r(m).title),1),e("div",L,o(new Date().toLocaleString()),1)]),(n(!0),a(v,null,f(i.value,(t,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",S,[e("div",T,[e("div",z,o(t==null?void 0:t.no)+"/"+o(r(y)),1),b(" "+o(t==null?void 0:t.title)+" ",1),B])]),k(w,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",H)):N("v-if",!0)]))),128))])],4))}}),A=P(C,[["__file","/Users/antoinecoulon/Documents/Development/Universal/appservice-and-nodejs-talk/azure-appservice-and-nodejs/node_modules/.pnpm/@slidev+client@0.43.12_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
