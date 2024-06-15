import"./database-CX_mwvma.js";import $ from"./role-BCjgYwUy.js";import{S as R,_ as B}from"./DebounceButton.vue_vue_type_script_setup_true_lang-CllO0aCI.js";import"./useFireStorage-B-csnzCQ.js";import{d as x,r as b,b as C,q as w,o as s,c as v,D as V,f as N,a as o,e as d,m as D,A as I,F as K,y as M,k as P,C as g,u as f,t as q,v as A,_ as E}from"./index-xUVfnviE.js";import{_ as U}from"./InputTextFloat.vue_vue_type_script_setup_true_lang-DNxMUjoq.js";import{s as _,e as F}from"./useToast-InC5eljp.js";/* empty css                                                                       */import{F as O}from"./FloatText-4K3EM3wk.js";import"./Editor-kc3vYnik.js";const W={class:"p-float-label"},j=["for"],L=x({__name:"InputDropdownFloat",props:{modelValue:[String,Number],type:{type:String,default:"text"},label:{type:String,default:"-"},name:{type:String,default:"-"},placeholder:{type:String},rules:{type:String},options:{type:Array},disabled:{type:Boolean}},setup(e){const p=b(0);return C(()=>{setTimeout(()=>{p.value==0&&p.value++},500)}),(k,n)=>{const c=w("Dropdown"),u=w("VField"),i=w("ErrorMessage");return s(),v(K,null,[(s(),V(u,{key:p.value,name:e.name,label:e.label,type:e.type,class:"p-inputtext p-component",rules:e.rules,value:e.modelValue,onChange:n[0]||(n[0]=m=>k.$emit("update:modelValue",m.value))},{default:N(({field:m})=>[o("span",W,[d(c,D({class:["w-full",{"p-filled":e.modelValue}]},m,{modelValue:e.modelValue,value:e.modelValue,placeholder:e.placeholder,id:e.name,options:e.options,optionLabel:"text",optionValue:"value",disabled:e.disabled}),null,16,["class","modelValue","value","placeholder","id","options","disabled"]),o("label",{for:e.name},I(e.label),9,j)])]),_:1},8,["name","label","type","rules","value"])),d(i,{name:e.name,class:"p-error"},null,8,["name"])],64)}}}),z=e=>(q("data-v-d53efca3"),e=e(),A(),e),G={class:"grid"},H={class:"col-12 px-2"},J={class:"card p-fluid"},Q={key:0},X={key:1},Y={class:"grid p-fluid mt-3"},Z={class:"col-12 md:col-6"},ee={class:"col-12 md:col-6"},ae={class:"col-12"},le=z(()=>o("h5",null,"權限設定",-1)),ie=x({__name:"RolePage",props:{mode:{type:String,default:""}},setup(e){const p=M(),k=P(),n=e,c=new $,u=b(""),i=b({displayName:"",roles:[],id:"",state:"enable"}),m=b([{key:"front",label:"前台",data:"front",icon:"pi pi-fw pi-inbox",children:[{key:"news",label:"公告管理",data:"news",icon:"pi pi-fw pi-users",children:[{key:"news:c",label:"新增",icon:"pi pi-fw pi-file",data:"news:c"},{key:"news:r",label:"查看",icon:"pi pi-fw pi-eye",data:"news:r"},{key:"news:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"news:u"},{key:"news:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"news:d"}]},{key:"recommend",label:"每周推薦",data:"recommend",icon:"pi pi-fw pi-users",children:[{key:"recommend:c",label:"新增",icon:"pi pi-fw pi-file",data:"recommend:c"},{key:"recommend:r",label:"查看",icon:"pi pi-fw pi-eye",data:"recommend:r"},{key:"recommend:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"recommend:u"},{key:"recommend:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"recommend:d"}]},{key:"member",label:"會員管理",data:"member",icon:"pi pi-fw pi-users",children:[{key:"member:c",label:"新增",icon:"pi pi-fw pi-file",data:"member:c"},{key:"member:r",label:"查看",icon:"pi pi-fw pi-eye",data:"member:r"},{key:"member:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"member:u"},{key:"member:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"member:d"}]}]},{key:"system",label:"系統",data:"system",icon:"pi pi-fw pi-inbox",children:[{key:"user",label:"帳號管理",data:"user",icon:"pi pi-fw pi-user",children:[{key:"user:c",label:"新增",icon:"pi pi-fw pi-file",data:"user:c"},{key:"user:r",label:"查看",icon:"pi pi-fw pi-eye",data:"user:r"},{key:"user:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"user:u"},{key:"user:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"user:d"}]},{key:"role",label:"權限管理",data:"role",icon:"pi pi-fw pi-sitemap",children:[{key:"role:c",label:"新增",icon:"pi pi-fw pi-file",data:"role:c"},{key:"role:r",label:"查看",icon:"pi pi-fw pi-eye",data:"role:r"},{key:"role:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"role:u"},{key:"role:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"role:d"}]},{key:"syslog",label:"操作紀錄",data:"syslog",icon:"pi pi-fw pi-wrench",children:[{key:"syslog:c",label:"新增",icon:"pi pi-fw pi-file",data:"syslog:c"},{key:"syslog:r",label:"查看",icon:"pi pi-fw pi-eye",data:"syslog:r"},{key:"syslog:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"syslog:u"},{key:"syslog:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"syslog:d"}]},{key:"storage",label:"貯存管理",data:"storage",icon:"pi pi-fw pi-file-arrow-up",children:[{key:"storage:c",label:"新增",icon:"pi pi-fw pi-file",data:"storage:c"},{key:"storage:r",label:"查看",icon:"pi pi-fw pi-eye",data:"storage:r"},{key:"storage:u",label:"更新",icon:"pi pi-fw pi-pencil",data:"storage:u"},{key:"storage:d",label:"刪除",icon:"pi pi-fw pi-trash",data:"storage:d"}]}]}]),t=b({}),T=async l=>{n.mode==="add"?(i.value.roles=S(),c.add(l).then(a=>{_(a),k.push("/system/role/list")}).catch(a=>{F(a)})):n.mode==="edit"&&(i.value.roles=S(),c.update(u.value,l).then(a=>{_(a),k.push("/system/role/list")}).catch(a=>{F(a)}))},S=()=>{const l=[];for(var a in t.value)Object.prototype.hasOwnProperty.call(t.value,a)&&t.value[a].checked===!0&&l.push(a);return l};return C(()=>{n.mode==="edit"&&(u.value=p.params.id,c.get(u.value).then(l=>{i.value=l;for(var a=0;a<l.roles.length;a++)if(l.roles[a].includes(":")){var h=l.roles[a].split(":")[0];t.value[h]||(t.value[h]={checked:!1,partialChecked:!0})}for(var y=0;y<l.roles.length;y++)t.value[l.roles[y]]={checked:!0,partialChecked:!1}}))}),(l,a)=>{const h=w("Tree"),y=w("VForm");return s(),v("div",G,[o("div",H,[d(y,{ref:"signupForm",onSubmit:a[3]||(a[3]=r=>T(i.value))},{default:N(()=>[o("div",J,[e.mode==="add"?(s(),v("h5",Q,"新增權限身分")):e.mode==="edit"?(s(),v("h5",X,"編輯權限身分")):g("",!0),o("div",Y,[o("div",Z,[e.mode==="add"?(s(),V(f(U),{key:0,label:"名稱",modelValue:i.value.displayName,"onUpdate:modelValue":a[0]||(a[0]=r=>i.value.displayName=r),name:"displayName",rules:"required"},null,8,["modelValue"])):g("",!0),e.mode==="edit"?(s(),V(f(O),{key:1,label:"名稱",content:i.value.displayName},null,8,["content"])):g("",!0)]),o("div",ee,[d(f(L),{label:"狀態",options:f(R),modelValue:i.value.state,"onUpdate:modelValue":a[1]||(a[1]=r=>i.value.state=r),name:"state",rules:"required"},null,8,["options","modelValue"])]),o("div",ae,[le,d(h,{value:m.value,selectionMode:"checkbox",selectionKeys:t.value,"onUpdate:selectionKeys":a[2]||(a[2]=r=>t.value=r),expandedKeys:{system:!0,user:!0,role:!0,syslog:!0}},null,8,["value","selectionKeys"])])]),d(f(B),{label:"送出",type:"submit"})])]),_:1},512)])])}}}),ye=E(ie,[["__scopeId","data-v-d53efca3"]]);export{ye as R};