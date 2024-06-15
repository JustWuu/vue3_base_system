import{_ as h}from"./logo-CC90_112.js";import"./database-BKbkAfuS.js";import b from"./useAuth-CUFXkQq0.js";import{d as x,r as k,b as y,o as V,c as S,a as t,e as l,u as p,f as I,q as r,k as C,x as L}from"./index-C2YWHtWb.js";import{S as B,E}from"./useEncryp-PmnjW7Pa.js";import{s as f,e as _}from"./useToast-Deq2fcpw.js";import{_ as U}from"./InputPasswordFloat.vue_vue_type_script_setup_true_lang-BsMu-mu9.js";import{_ as $}from"./InputTextFloat.vue_vue_type_script_setup_true_lang-BuX1Xa47.js";/* empty css                                                                       */import"./Editor-kc3vYnik.js";import"./user-DaildQOo.js";const j={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},q={class:"flex flex-column align-items-center justify-content-center w-11 md:w-auto"},A=t("img",{src:h,alt:"Image",class:"mb-5 w-6rem flex-shrink-0"},null,-1),N={class:"w-11 md:w-auto",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},T={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},D=t("div",{class:"text-center mb-4"},[t("div",{class:"text-900 text-3xl font-medium mb-3"},"帳戶登入")],-1),M={class:"field mt-6"},R={class:"field mt-6"},z={class:"flex align-items-center justify-content-between my-4 gap-5"},F={class:"flex align-items-center"},G=t("label",{for:"rememberme1",class:"mr-3"},"記住帳密",-1),H=t("label",{for:"rememberme1"},"保持登入狀態",-1),se=x({__name:"AuthLogin",setup(J){const i=C(),n=new B,c=new E,m=new b,e=k({email:"",password:"",checked:!1,keepSignIn:!0}),v=async()=>{e.value.keepSignIn?await m.keepSignIn(e.value.email,e.value.password).then(o=>{o&&(u(),f(`${o}`),setTimeout(()=>{i.push("/")},700))}).catch(o=>{_(o)}):await m.signIn(e.value.email,e.value.password).then(o=>{o&&(u(),f(`${o}`),setTimeout(()=>{i.push("/")},700))}).catch(o=>{_(o)})};function u(){e.value.checked?(e.value.password=c.aesEncryp(e.value.password),n.setLocalStorage("account",e.value)):n.removeLocalStorage("account")}return y(()=>{n.getLocalStorage("account")&&(e.value=n.getLocalStorage("account"),e.value.password=c.aesDecrypt(e.value.password),e.value.keepSignIn=!0)}),(o,s)=>{const d=r("Checkbox"),g=r("router-link"),w=r("Button");return V(),S("div",j,[t("div",q,[A,t("div",N,[t("div",T,[D,t("div",null,[t("div",M,[l(p($),{label:"信箱",modelValue:e.value.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.value.email=a),name:"email1",rules:"required|email","input-class":"md:w-30rem"},null,8,["modelValue"])]),t("div",R,[l(p(U),{label:"密碼",modelValue:e.value.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.value.password=a),name:"password1",rules:"required",feedback:!1,"input-class":"md:w-30rem"},null,8,["modelValue"])]),t("div",z,[t("div",F,[l(d,{modelValue:e.value.checked,"onUpdate:modelValue":s[2]||(s[2]=a=>e.value.checked=a),id:"rememberme1",binary:"",class:"mr-1"},null,8,["modelValue"]),G,l(d,{modelValue:e.value.keepSignIn,"onUpdate:modelValue":s[3]||(s[3]=a=>e.value.keepSignIn=a),id:"rememberme1",binary:"",class:"mr-1"},null,8,["modelValue"]),H]),l(g,{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"},to:"/auth/forget"},{default:I(()=>[L("忘記密碼?")]),_:1})]),l(w,{label:"登入",class:"w-full p-3 text-xl mb-2",onClick:v})])])])])])}}});export{se as default};
