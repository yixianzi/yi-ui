"use strict";const e=require("vue"),u={class:"yi-scroll"},h={class:"scroll-li header"},g=["title"],B=e.defineComponent({name:"YiScrollData",__name:"ScrollData",props:{data:{},header:{},rowHeight:{default:30},tableHeight:{default:300}},setup(i,{expose:p}){const o=i,r=e.ref(0);e.onMounted(()=>{const c=document.getElementById("scoll1");e.nextTick(()=>{d(c)})});const d=l=>{var l=l,t=0;const n=parseInt(l.children[0].getBoundingClientRect().height),m=parseInt(l.getBoundingClientRect().height),s=function(){-t<n-m?(t=t-1,r.value=t):(t=0,r.value=t)};let a=setInterval(function(){s()},40);l.onmouseover=function(){clearInterval(a)},l.onmouseout=function(){a=setInterval(function(){s()},40)}};return p({focus}),(c,l)=>(e.openBlock(),e.createElementBlock("div",u,[e.createElementVNode("ul",null,[e.createElementVNode("li",h,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.header,t=>(e.openBlock(),e.createElementBlock("span",{class:"li-span",style:e.normalizeStyle({minWidth:t.width?t.width+"px":""})},e.toDisplayString(t.name),5))),256))])]),e.createElementVNode("div",{class:"yi-scoll-a",id:"scoll1",style:e.normalizeStyle({height:o.tableHeight+"px"})},[e.createElementVNode("ul",{style:e.normalizeStyle({marginTop:r.value+"px"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.data,t=>(e.openBlock(),e.createElementBlock("li",{style:e.normalizeStyle({height:o.rowHeight+"px"}),class:"scroll-li"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.header,n=>(e.openBlock(),e.createElementBlock("span",{title:t[n.prop],class:e.normalizeClass(["li-span",`span-${n.prop}`]),style:e.normalizeStyle({minWidth:n.width?n.width+"px":""})},e.toDisplayString(t[n.prop]),15,g))),256))],4))),256))],4)],4)]))}});module.exports=B;
