import{f as c,k as d,o as p,g as i,w as n,b as o,h as e,aD as h,C as u,i as f,aE as _,aF as m,r as b,aG as g,aH as v}from"./Dab6fwzu.js";const x=c({__name:"ScrollBar",props:{orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(l){const s=l,t=d(()=>{const{class:a,...r}=s;return r});return(a,r)=>(p(),i(e(_),u(t.value,{class:e(f)("flex touch-none select-none transition-colors",a.orientation==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-px",a.orientation==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-px",s.class)}),{default:n(()=>[o(e(h),{class:"relative flex-1 rounded-full bg-border"})]),_:1},16,["class"]))}}),B=c({__name:"ScrollArea",props:{type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{},class:{}},setup(l){const s=l,t=d(()=>{const{class:a,...r}=s;return r});return(a,r)=>(p(),i(e(v),u(t.value,{class:e(f)("relative overflow-hidden",s.class)}),{default:n(()=>[o(e(m),{class:"h-full w-full rounded-[inherit]"},{default:n(()=>[b(a.$slots,"default")]),_:3}),o(x),o(e(g))]),_:3},16,["class"]))}});export{B as _,x as a};