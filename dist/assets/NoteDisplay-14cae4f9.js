import{d as c,e as o,w as s,f as r,t as a,o as l,_ as d}from"./index-0cee63a2.js";const u=["innerHTML"],m=["textContent"],v=["textContent"],f=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return(e,t)=>e.noteHtml?(l(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(l(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(l(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,v)],2))}}),y=d(f,[["__file","/Users/antoinecoulon/Documents/Development/Universal/appservice-and-nodejs-talk/azure-appservice-and-nodejs/node_modules/.pnpm/@slidev+client@0.43.12_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{y as N};