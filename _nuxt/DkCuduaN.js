import{f as C,v as b,o as n,g as r,w as m,c as d,h as u,m as a,d as x,t as v,a as f,b as t,n as g,r as k,q as w}from"./Bdc-ioIQ.js";import{_ as S}from"./HdtiSUd1.js";import{a as $,_ as B}from"./CW5XqF0e.js";import{_ as N}from"./BmFgigcp.js";const V={key:0,class:"p-3 border-b flex text-sm font-mono"},G={class:"ml-auto mr-1"},z={key:0,class:"absolute right-4"},q=C({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},inGroup:{type:Boolean,default:!1},highlights:{type:Array,default:()=>[]}},setup(e){var c;const o=e,l=new Map(Object.entries(b().value.main.codeIcon)),s=l.get((c=o.filename)==null?void 0:c.toLowerCase())||l.get(o.language);return(h,A)=>{const _=w,i=S,p=B,y=N;return n(),r(y,{class:g(["[&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5 overflow-hidden",[e.inGroup&&"rounded-t-none border-none mb-0"]])},{default:m(()=>[!e.inGroup&&e.filename?(n(),d("div",V,[u(s)?(n(),r(_,{key:0,name:u(s),class:"self-center mr-1.5"},null,8,["name"])):a("",!0),x(" "+v(e.filename)+" ",1),f("span",G,[t(i,{code:e.code},null,8,["code"])])])):a("",!0),t(p,null,{default:m(()=>[f("div",{class:g(["py-3 bg-muted/30 text-sm relative overflow-x-auto",[`highlight-${e.language}`,!e.filename&&"inline-copy",!e.language&&"pl-3"]])},[e.filename?a("",!0):(n(),d("span",z,[t(i,{code:e.code},null,8,["code"])])),k(h.$slots,"default")],2),t($,{orientation:"horizontal"})]),_:3})]),_:3},8,["class"])}}});export{q as _};
