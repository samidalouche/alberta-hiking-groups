import{_ as n}from"./B07a5rby.js";import{f as c,k as i,o as p,g as l,w as m,d,a as f,t as u,h as _}from"./Dab6fwzu.js";const h={class:"capitalize font-semibold"},k=c({__name:"ReadMore",props:{title:{},to:{},target:{}},setup(o){const e=o;function a(t="here"){return t.startsWith("http")?t.replace(/^https?:\/\//,""):t.split("/").filter(Boolean).join(" > ").replace("Api","API")}const r=i(()=>e.title||a(e.to));return(t,g)=>{const s=n;return p(),l(s,{to:t.to,target:t.target,icon:"lucide:bookmark"},{default:m(()=>[d(" Read more in "),f("span",h,u(_(r)),1)]),_:1},8,["to","target"])}}});export{k as default};