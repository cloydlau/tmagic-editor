import{t as l}from"./index-A8NCBR8N.js";const u=Vue.defineComponent({__name:"Component",props:{config:{default:()=>({})},model:{default:()=>({})}},setup(s){const n=s,o=Vue.inject("app"),c=Vue.computed(()=>"magic-ui-".concat(l(n.config.type))),i=Vue.computed(()=>o==null?void 0:o.transformStyle(n.config.style)),a=()=>{var t;if(n.config.visible===!1||n.config.condResult===!1)return!1;const e=(t=n.config)==null?void 0:t.display;return typeof e=="function"?e(o):e!==!1};return(e,t)=>a()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(c.value),{key:0,ref:"component",id:e.config.id,class:Vue.normalizeClass("magic-ui-component".concat(e.config.className?" ".concat(e.config.className):"")),style:Vue.normalizeStyle(i.value),config:e.config},null,8,["id","class","style","config"])):Vue.createCommentVNode("",!0)}});export{u as _};
//# sourceMappingURL=Component.vue_vue_type_script_setup_true_lang-EH3_epEf.js.map
