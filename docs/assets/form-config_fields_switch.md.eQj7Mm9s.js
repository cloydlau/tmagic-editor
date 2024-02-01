import{_ as r,D as i,o as s,c,I as d,w as o,k as t,a as e,R as n}from"./chunks/framework.-lA0O_vv.js";const T=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/switch.md","filePath":"form-config/fields/switch.md"}'),h={name:"form-config/fields/switch.md"},l=t("h1",{id:"switch-开关",tabindex:"-1"},[e("Switch 开关 "),t("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1),_=t("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),m=t("h2",{id:"基本用法",tabindex:"-1"},[e("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),f=t("h2",{id:"扩展的-value-类型",tabindex:"-1"},[e("扩展的 value 类型 "),t("a",{class:"header-anchor",href:"#扩展的-value-类型","aria-label":'Permalink to "扩展的 value 类型"'},"​")],-1),u=t("p",null," 设置 activeValue 和 inactiveValue 属性，接受 Boolean , String 或 Number 类型的值。 ",-1),b=t("h2",{id:"禁用状态",tabindex:"-1"},[e("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),p=t("p",null," 设置 disabled 属性，接受一个 Boolean，设置 true 即可禁用。 ",-1),w=n('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean / <a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">Function</a></td><td>—</td><td>false</td></tr><tr><td>active-value</td><td>switch 打开时的值</td><td>boolean / string / number</td><td>—</td><td>true</td></tr><tr><td>inactive-value</td><td>switch 关闭时的值</td><td>boolean / string / number</td><td>—</td><td>false</td></tr></tbody></table>',2);function g(v,x,k,V,P,S){const a=i("demo-block");return s(),c("div",null,[l,_,m,d(a,{type:"form",config:[{type:"switch",name:"switch",text:"开关"}]}),f,d(a,{type:"form",config:[{type:"switch",name:"switch",text:"开关",activeValue:"on",inactiveValue:"off"}]},{source:o(()=>[u]),_:1}),b,d(a,{type:"form",config:[{type:"switch",name:"switch",text:"开关",disabled:!0}]},{source:o(()=>[p]),_:1}),w])}const N=r(h,[["render",g]]);export{T as __pageData,N as default};
