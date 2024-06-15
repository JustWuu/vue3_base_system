import{D as P,I as z}from"./database-D7q7n2BB.js";import G from"./user-C4038Var.js";import{A as H}from"./useFireStorage-vNbuIswS.js";import{S as J,E as K}from"./useEncryp-v74-xAwA.js";import{s as u,e as b}from"./useToast-BYNoBdUl.js";import{_ as r}from"./InputTextFloat.vue_vue_type_script_setup_true_lang-BwU04pdv.js";import{d as Q,r as p,b as W,o as X,c as Y,a as t,e as n,f as U,q as w,A as i,u as m}from"./index-Cv4N99t4.js";class Z extends P{constructor(){super("crud")}}const ee={class:"grid"},oe={class:"col-12 md:col-6 px-2"},le={class:"card p-fluid"},se=t("h5",null,"當前用戶",-1),te={class:"mb-0"},ae={class:"mb-0"},ne={class:"mb-0"},de={class:"mb-0"},ue={class:"mb-0"},ie={class:"mb-0"},ce={class:"mb-0"},re={class:"col-12 md:col-6 px-2"},me={class:"card p-fluid"},be=t("h5",null,"撈取指定用戶資料",-1),pe={class:"field mt-5"},ve={class:"card p-fluid"},fe=t("h5",null,"CRUD",-1),ge={class:"field mt-5"},ye={class:"field mt-5"},_e={class:"field mt-5"},Ve={class:"field mt-5"},he={class:"field mt-5"},De=Q({__name:"ExampleCrud",setup(S){const g=new J,D=new K,y=new H,d=new Z,x=new G,{user:c}=y.getUser(),q=new z,_=p(""),v=p({email:"",password:"",checked:!1}),f=p(""),a=p({doc:"",obj:{a:"",b:"",c:"",d:0},array:[]}),F=()=>{y.signOut().then(o=>{o&&(console.log(o),u(`${o}`))}).catch(o=>{b(o)})},A=o=>{x.get(o).then(e=>{u(`${e}`),console.log(e)})},B=()=>{d.array().then(o=>{u(`${o}`),a.value.array=o,console.log(a.value.array)})},O=o=>{d.get(o).then(e=>{console.log("資料：",e),u(`${e}`)})},E=(o,e)=>{o===""?d.add(e).then(l=>{console.log(l),u(`${l}`)}).catch(l=>{console.log(l),b(l)}):d.set(o,e).then(l=>{console.log(l),u(`${l}`)}).catch(l=>{console.log(l),b(l)})},I=(o,e)=>{d.update(o,e).then(l=>{console.log(l),u(`${l}`)}).catch(l=>{console.log(l),b(l)})},N=o=>{d.delete(o).then(e=>{console.log(e),u(`${e}`)}).catch(e=>{console.log(e),b(e)})},R=(o,e)=>{d.onSnapshot(o,e)};function L(o){a.value.obj=o}const T=(o,e="")=>{d.arrayOnSnapshot(o,e)};function M(o){console.log(o)}return W(()=>{g.getLocalStorage("account")&&(v.value=g.getLocalStorage("account"),v.value.password=D.aesDecrypt(v.value.password)),q.get().then(o=>{_.value=o})}),(o,e)=>{const l=w("Button"),V=w("VForm");return X(),Y("div",ee,[t("div",oe,[t("div",le,[n(V,{ref:"formRef",onSubmit:e[0]||(e[0]=s=>F())},{default:U(()=>{var s,h,$,C,j,k;return[se,t("div",null,[t("p",te,"帳號："+i((s=m(c))==null?void 0:s.uid),1),t("p",ae,"帳號："+i((h=m(c))==null?void 0:h.email),1),t("p",ne,"名稱："+i(($=m(c))==null?void 0:$.displayName),1),t("p",de,"狀態："+i((C=m(c))==null?void 0:C.state),1),t("p",ue,"驗證："+i((j=m(c))==null?void 0:j.emailVerified),1),t("p",ie,"權限："+i((k=m(c))==null?void 0:k.role.displayName),1),t("p",ce,"IP："+i(_.value),1)]),n(l,{label:"登出",severity:"danger",type:"submit"})]}),_:1},512)])]),t("div",re,[t("div",me,[n(V,{ref:"signupForm",onSubmit:e[2]||(e[2]=s=>A(f.value))},{default:U(()=>[be,t("div",pe,[n(r,{label:"UID",modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=s=>f.value=s),name:"uid",rules:"required"},null,8,["modelValue"])]),n(l,{label:"取得",type:"submit"})]),_:1},512)]),t("div",ve,[fe,t("div",ge,[n(r,{label:"DOC",modelValue:a.value.doc,"onUpdate:modelValue":e[3]||(e[3]=s=>a.value.doc=s),name:"doc",rules:"required"},null,8,["modelValue"])]),t("div",ye,[n(r,{label:"A",modelValue:a.value.obj.a,"onUpdate:modelValue":e[4]||(e[4]=s=>a.value.obj.a=s),name:"a",rules:"required"},null,8,["modelValue"])]),t("div",_e,[n(r,{label:"B",modelValue:a.value.obj.b,"onUpdate:modelValue":e[5]||(e[5]=s=>a.value.obj.b=s),name:"b",rules:"required"},null,8,["modelValue"])]),t("div",Ve,[n(r,{label:"C",modelValue:a.value.obj.c,"onUpdate:modelValue":e[6]||(e[6]=s=>a.value.obj.c=s),name:"c",rules:"required"},null,8,["modelValue"])]),t("div",he,[n(r,{label:"D",modelValue:a.value.obj.d,"onUpdate:modelValue":e[7]||(e[7]=s=>a.value.obj.d=s),name:"d",rules:"required",type:"number"},null,8,["modelValue"])]),n(l,{label:"新增",type:"submit",class:"mb-1",severity:"success",onClick:e[8]||(e[8]=s=>E(a.value.doc,a.value.obj))}),n(l,{label:"取得陣列",type:"submit",class:"mb-1",onClick:e[9]||(e[9]=s=>B())}),n(l,{label:"取得單一",type:"submit",class:"mb-1",onClick:e[10]||(e[10]=s=>O(a.value.doc))}),n(l,{label:"修改",type:"submit",class:"mb-1",severity:"warning",onClick:e[11]||(e[11]=s=>I(a.value.doc,a.value.obj))}),n(l,{label:"刪除",type:"submit",class:"mb-1",severity:"danger",onClick:e[12]||(e[12]=s=>N(a.value.doc))}),n(l,{label:"監聽",type:"submit",class:"mb-1",severity:"danger",onClick:e[13]||(e[13]=s=>R(a.value.doc,L))}),n(l,{label:"監聽陣列",type:"submit",class:"mb-1",severity:"danger",onClick:e[14]||(e[14]=s=>T(M))})])])])}}});export{De as default};
