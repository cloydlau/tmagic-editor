import{_ as a,D as s,o as i,c as n,I as d,w as h,R as t,k as r}from"./chunks/framework.-lA0O_vv.js";const E=JSON.parse('{"title":"Hidden 隐藏域","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/hidden.md","filePath":"form-config/fields/hidden.md"}'),o={name:"form-config/fields/hidden.md"},l=t(`<h1 id="hidden-隐藏域" tabindex="-1">Hidden 隐藏域 <a class="header-anchor" href="#hidden-隐藏域" aria-label="Permalink to &quot;Hidden 隐藏域&quot;">​</a></h1><p>改值体现于最终提交的表单中，用于例如编辑记录的id这种场景中</p><h2 id="ts-定义" tabindex="-1">TS 定义 <a class="header-anchor" href="#ts-定义" aria-label="Permalink to &quot;TS 定义&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Hidden</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hidden&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>点击查看<a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">FormItem</a>的定义</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>`,6),p=r("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),c=t('<h2 id="input-attributes" tabindex="-1">Input Attributes <a class="header-anchor" href="#input-attributes" aria-label="Permalink to &quot;Input Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>绑定值</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',2);function _(k,m,u,f,g,b){const e=s("demo-block");return i(),n("div",null,[l,d(e,{type:"form",config:[{type:"hidden",name:"hidden"}]},{source:h(()=>[p]),_:1}),c])}const T=a(o,[["render",_]]);export{E as __pageData,T as default};
