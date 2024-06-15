import"./database-CX_mwvma.js";import H from"./user-DR0wrc04.js";import{M as R}from"./member-DNSa739Q.js";import{C as I,A as Y}from"./useFireStorage-B-csnzCQ.js";import{_ as G}from"./InputTextFloat.vue_vue_type_script_setup_true_lang-DNxMUjoq.js";import J from"./role-BCjgYwUy.js";import{d as D,r as p,b as C,q as m,o as s,c as y,D as w,f as x,a as t,e as o,m as M,A as k,F as $,y as K,k as Q,M as W,H as X,L as Z,C as F,n as _,u as f,E as ee}from"./index-xUVfnviE.js";import{S as le,_ as L}from"./DebounceButton.vue_vue_type_script_setup_true_lang-CllO0aCI.js";import{s as U,e as N}from"./useToast-InC5eljp.js";/* empty css                                                                       */import{F as B}from"./FloatText-4K3EM3wk.js";import"./Editor-kc3vYnik.js";const te={class:"p-float-label"},ae=["for"],oe=D({__name:"RoleDropdownFloat",props:{modelValue:[String,Number,Object],type:{type:String,default:"text"},label:{type:String,default:"權限"},name:{type:String,default:"-"},placeholder:{type:String},rules:{type:String},disabled:{type:Boolean}},setup(e){const h=new J,u=p([{id:"",displayName:"無"}]),c=p(0);return C(()=>{h.array().then(n=>{n.filter(i=>u.value.push({id:i.id,displayName:i.displayName}))}),setTimeout(()=>{c.value==0&&c.value++},500)}),(n,i)=>{const b=m("Dropdown"),V=m("VField"),v=m("ErrorMessage");return s(),y($,null,[(s(),w(V,{key:c.value,name:e.name,label:e.label,type:e.type,class:"p-inputtext p-component",rules:e.rules,value:e.modelValue,onChange:i[0]||(i[0]=l=>n.$emit("update:modelValue",l.value))},{default:x(({field:l})=>[t("span",te,[o(b,M({class:["w-full",{"p-filled":e.modelValue}]},l,{modelValue:e.modelValue,value:e.modelValue,placeholder:e.placeholder,id:e.name,options:u.value,optionLabel:"displayName",disabled:e.disabled}),null,16,["class","modelValue","value","placeholder","id","options","disabled"]),t("label",{for:e.name},k(e.label),9,ae)])]),_:1},8,["name","label","type","rules","value"])),o(v,{name:e.name,class:"p-error"},null,8,["name"])],64)}}}),ne={class:"p-float-label"},se=["for"],ie=D({__name:"StateDropdownFloat",props:{modelValue:[String,Number,Object],type:{type:String,default:"text"},label:{type:String,default:"狀態"},name:{type:String,default:"-"},placeholder:{type:String},rules:{type:String},disabled:{type:Boolean}},setup(e){const h=p([...le]),u=p(0);return C(()=>{setTimeout(()=>{u.value==0&&u.value++},500)}),(c,n)=>{const i=m("Dropdown"),b=m("VField"),V=m("ErrorMessage");return s(),y($,null,[(s(),w(b,{key:u.value,name:e.name,label:e.label,type:e.type,class:"p-inputtext p-component",rules:e.rules,value:e.modelValue,onChange:n[0]||(n[0]=v=>c.$emit("update:modelValue",v.value))},{default:x(({field:v})=>[t("span",ne,[o(i,M({class:["w-full",{"p-filled":e.modelValue}]},v,{modelValue:e.modelValue,value:e.modelValue,placeholder:e.placeholder,id:e.name,options:h.value,optionLabel:"text",optionValue:"value",disabled:e.disabled}),null,16,["class","modelValue","value","placeholder","id","options","disabled"]),t("label",{for:e.name},k(e.label),9,se)])]),_:1},8,["name","label","type","rules","value"])),o(V,{name:e.name,class:"p-error"},null,8,["name"])],64)}}}),de={class:"p-float-label"},ue=["for"],re=D({__name:"MemberDropdownFloat",props:{modelValue:[String,Number,Object],type:{type:String,default:"text"},label:{type:String,default:"會員"},name:{type:String,default:"-"},placeholder:{type:String},rules:{type:String},disabled:{type:Boolean},filter:{type:Boolean,default:!0}},setup(e){const h=new R,u=p([]),c=p(0);return C(()=>{h.array().then(n=>{u.value=n}),setTimeout(()=>{c.value==0&&c.value++},500)}),(n,i)=>{const b=m("Dropdown"),V=m("VField"),v=m("ErrorMessage");return s(),y($,null,[(s(),w(V,{key:c.value,name:e.name,label:e.label,type:e.type,class:"p-inputtext p-component",rules:e.rules,value:e.modelValue,onChange:i[0]||(i[0]=l=>n.$emit("update:modelValue",l.value))},{default:x(({field:l})=>[t("span",de,[o(b,M({class:["w-full",{"p-filled":e.modelValue}]},l,{modelValue:e.modelValue,value:e.modelValue,placeholder:e.placeholder,id:e.name,options:u.value,optionLabel:"email",disabled:e.disabled,filter:e.filter}),null,16,["class","modelValue","value","placeholder","id","options","disabled","filter"]),t("label",{for:e.name},k(e.label),9,ue)])]),_:1},8,["name","label","type","rules","value"])),o(v,{name:e.name,class:"p-error"},null,8,["name"])],64)}}}),me={class:"grid"},ce={class:"col-12 px-2"},ve={class:"card p-fluid"},fe={class:"flex"},pe={class:"flex align-items-center"},be={key:0},ye={key:1,class:"m-0"},he={key:0,class:"flex-1"},Ve={class:"flex justify-content-end align-items-center"},ge={class:"mr-1"},we={class:"flex justify-content-end"},xe={class:"grid p-fluid mt-3"},Se={class:"col-12 md:col-6"},Fe={class:"col-12 md:col-6"},ke={class:"col-12 md:col-6"},De={class:"col-12 md:col-6"},Ce={class:"col-12 md:col-6"},$e={class:"col-12 md:col-6"},Ue=t("div",{class:"md:col-6"},null,-1),Ne={class:"col-12 md:col-6"},Be=t("div",{class:"flex align-items-center justify-content-center"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"是否發送重設密碼信件？")],-1),Ie=D({__name:"UserPage",props:{mode:{type:String,default:""}},setup(e){const h=K(),u=Q(),c=new I,n=e,i=new Y,b=new H,V=new R,v=p(""),l=p({...W}),S=p(),g=p(!1),j=async d=>{n.mode==="add"?i.membersBecomeUser(S.value,d).then(a=>{a&&(U(a),u.push("/system/user/list"))}).catch(a=>{N(a)}):n.mode==="edit"&&b.updateUser(d).then(a=>{U(a),u.push("/system/user/list")}).catch(a=>{N(a)})},A=()=>{i.sendPassword(l.value.email).then(d=>{d&&(g.value=!1,U("重設密碼信件已寄出"))}).catch(d=>{g.value=!1,N(d)})},P=()=>{g.value=!0},q=()=>{g.value=!1};return C(()=>{n.mode==="edit"&&(v.value=h.params.id,b.get(v.value).then(d=>{l.value=d}))}),X(async()=>{if(S.value){const d=await V.getPublic(S.value.uid);l.value.uid=d.uid,l.value.displayName=d.displayName,l.value.photoURL=d.photoURL}}),(d,a)=>{const O=m("VForm"),E=m("Button"),T=m("Dialog"),z=Z("role");return s(),y($,null,[t("div",me,[t("div",ce,[o(O,{ref:"signupForm",onSubmit:a[5]||(a[5]=r=>j(l.value))},{default:x(()=>[t("div",ve,[t("div",fe,[t("div",pe,[e.mode==="add"?(s(),y("h5",be,"新增帳號")):e.mode==="edit"?(s(),y("h5",ye,"編輯帳號")):F("",!0)]),e.mode==="edit"?(s(),y("div",he,[t("div",Ve,[t("span",ge,k(l.value.emailVerified?"已驗證信箱":"未驗證信箱"),1),t("i",{id:"emailVerified",class:_(["pi",{"pi-check-circle text-green-500":l.value.emailVerified,"pi-times-circle text-red-400":!l.value.emailVerified}])},null,2)]),t("div",we,[t("span",null,"上次登入時間 "+k(f(c).convertDate(l.value.operateAt)),1)])])):F("",!0)]),t("div",xe,[t("div",Se,[e.mode==="add"?(s(),w(f(re),{key:0,modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=r=>S.value=r),name:"email",rules:"required"},null,8,["modelValue"])):F("",!0),e.mode==="edit"?(s(),w(f(B),{key:1,label:"信箱",content:l.value.email},null,8,["content"])):F("",!0)]),t("div",Fe,[o(f(B),{label:"UID",content:l.value.uid},null,8,["content"])]),t("div",ke,[o(f(B),{label:"名稱",content:l.value.displayName},null,8,["content"])]),t("div",De,[o(f(G),{label:"照片",modelValue:l.value.photoURL,"onUpdate:modelValue":a[1]||(a[1]=r=>l.value.photoURL=r),name:"photoURL"},null,8,["modelValue"])]),t("div",Ce,[o(f(ie),{modelValue:l.value.state,"onUpdate:modelValue":a[2]||(a[2]=r=>l.value.state=r),name:"state",rules:"required"},null,8,["modelValue"])]),ee((s(),y("div",$e,[o(f(oe),{modelValue:l.value.role,"onUpdate:modelValue":a[3]||(a[3]=r=>l.value.role=r),name:"role",rules:"required"},null,8,["modelValue"])])),[[z,["role:r"]]]),Ue,t("div",Ne,[e.mode==="edit"?(s(),w(f(L),{key:0,label:"重設密碼",type:"button",severity:"warning",onClick:a[4]||(a[4]=r=>P())})):F("",!0)])]),o(f(L),{label:"送出",type:"submit"})])]),_:1},512)])]),o(T,{header:"確認",visible:g.value,"onUpdate:visible":a[7]||(a[7]=r=>g.value=r),style:{width:"350px"},modal:!0},{footer:x(()=>[o(E,{label:"No",icon:"pi pi-times",onClick:q,class:"p-button-text",autofocus:""}),o(E,{label:"Yes",icon:"pi pi-check",onClick:a[6]||(a[6]=r=>A()),class:"p-button-text"})]),default:x(()=>[Be]),_:1},8,["visible"])],64)}}});export{Ie as _};