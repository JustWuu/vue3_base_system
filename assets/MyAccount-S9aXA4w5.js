import{R as q}from"./database-B5yYN_Wa.js";import{A as B,F as E}from"./useFireStorage-H2zJQsii.js";import{d as U,r as f,q as w,o as u,D as L,_ as T,I as O,c as y,e as a,f as F,a as e,A as H,u as d,F as D,M as I,H as A,C as N}from"./index-BAnCtb42.js";/* empty css                                                                       */import{R as W,S as g}from"./index-CkfW3gqd.js";import j from"./user-QzlZX5LK.js";import{_ as G}from"./InputTextFloat.vue_vue_type_script_setup_true_lang-DW-OHmpI.js";import{_ as J}from"./DebounceButton.vue_vue_type_script_setup_true_lang-DYB4wk4f.js";import{s as C,e as $}from"./useToast-DKlWDkpx.js";import{u as K,F as x}from"./FloatText-CP6DqJnA.js";import{_ as M}from"./InputPasswordFloat.vue_vue_type_script_setup_true_lang-Dxz2FEap.js";const Q=U({__name:"PageMenu",props:{modelValue:[Number],model:{type:Array,default(){return[]}}},setup(i){const r=f(i.modelValue);return(m,s)=>{const t=w("TabMenu");return u(),L(t,{class:"tab-menu",activeIndex:r.value,"onUpdate:activeIndex":s[0]||(s[0]=c=>r.value=c),onTabChange:s[1]||(s[1]=c=>m.$emit("update:modelValue",c.index)),model:i.model},null,8,["activeIndex","model"])}}}),X=T(Q,[["__scopeId","data-v-bd8d10e6"]]),Y={class:"w-full flex justify-content-between align-items-center"},Z={class:"p-dialog-title"},ee={class:"m-0 grid"},te=U({__name:"CropperDialog",props:{aspectRatio:{type:Number,default:1/1},limit:{type:Object,default:()=>({width:250,height:250})},chooseLabel:{type:String,default:"上傳"},header:{type:String,default:"裁切"}},emits:["cropper"],setup(i,{emit:n}){const r=new q,{width:m}=K(),s=n,t=f(),c=f(""),p=f(!1),o=O({dataURL:"",blobURL:""});function l(){}function v(k){c.value="",o.dataURL="",o.blobURL="";const _=k.files[0],b=new FileReader;b.readAsDataURL(_),b.onload=()=>{c.value=String(b.result),p.value=!0,m.value<769?t.value.maximized=!0:t.value.maximized=!1}}const h=()=>{g&&(p.value=!1)};async function V(){if(!g)return;const k=g.getDataURL(),_=await g.getBlob();if(!_)return;const b=await g.getFile({fileName:r.generateRandomString(10)});o.dataURL=k,o.blobURL=URL.createObjectURL(_),s("cropper",b),p.value=!1}function R(){g&&g.reset()}return(k,_)=>{const b=w("FileUpload"),P=w("Button"),z=w("Dialog");return u(),y(D,null,[a(b,{chooseLabel:i.chooseLabel,mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*",customUpload:"",auto:!0,onSelect:_[0]||(_[0]=S=>v(S))},null,8,["chooseLabel"]),a(z,{ref_key:"dialog",ref:t,visible:p.value,"onUpdate:visible":_[1]||(_[1]=S=>p.value=S),style:{width:"600px",height:"auto"},header:i.header,modal:!0,class:"p-fluid cropper-dialog",closable:!1,draggable:!1,maximizable:""},{header:F(()=>[e("div",Y,[e("span",Z,H(i.header),1),a(P,{rounded:"",outlined:"",icon:"pi pi-replay",size:"small",onClick:R})])]),footer:F(()=>[a(P,{label:"取消",icon:"pi pi-times",class:"p-button-text",onClick:h}),a(P,{label:"確定",icon:"pi pi-check",class:"p-button-text",onClick:V})]),default:F(()=>[e("div",ee,[a(d(W),{boxStyle:{margin:"auto"},img:c.value,options:{viewMode:1,dragMode:"crop",aspectRatio:i.aspectRatio},presetMode:{mode:"round",width:i.limit.width,height:i.limit.height},onReady:l},null,8,["img","options","presetMode"])])]),_:1},8,["visible","header"])],64)}}}),oe={class:"col-12 md:col-6 px-2"},ae={class:"card p-fluid"},le=e("h5",null,"大頭照",-1),se={class:"field"},ne={class:"flex justify-content-center .p-avatar.p-avatar-circle p-avatar-circle"},ie={class:"col-12 md:col-6 px-2"},de={class:"card p-fluid"},ce=e("h5",null,"帳戶資料",-1),re={class:"field mt-5"},ue={class:"field mt-5"},me={class:"field mt-5"},pe={class:"field mt-5"},_e={class:"field mt-5"},fe=U({__name:"AccountInfo",setup(i){const n=new B,r=new E,m=new j,{user:s}=n.getUser(),t=f({...I}),c=()=>{n.update({displayName:t.value.displayName}).then(o=>{C(`${o}`)}).catch(o=>{$(o)})},p=o=>{r.uploadProfilePhoto(o).then(l=>{C(`${l}`)})};return A(()=>{s.value.uid&&m.get(s.value.uid).then(o=>{t.value=o})}),(o,l)=>{var V;const v=w("Image"),h=w("VForm");return u(),y(D,null,[e("div",oe,[e("div",ae,[le,e("div",se,[e("div",ne,[a(v,{src:(V=t.value)==null?void 0:V.photoURL,alt:"",width:"200",height:"200"},null,8,["src"])])]),a(d(te),{chooseLabel:"變更大頭照",header:"設定大頭照",onCropper:p})])]),e("div",ie,[e("div",de,[a(h,{ref:"signinForm",onSubmit:l[1]||(l[1]=R=>c())},{default:F(()=>[ce,e("div",re,[a(d(G),{label:"名稱",modelValue:t.value.displayName,"onUpdate:modelValue":l[0]||(l[0]=R=>t.value.displayName=R),name:"displayName",rules:"required"},null,8,["modelValue"])]),e("div",ue,[a(d(x),{label:"信箱",content:t.value.email},null,8,["content"])]),e("div",me,[a(d(x),{label:"UID",content:t.value.uid},null,8,["content"])]),e("div",pe,[a(d(x),{label:"權限",content:t.value.role.displayName},null,8,["content"])]),e("div",_e,[a(d(x),{label:"狀態",content:t.value.stateValue},null,8,["content"])]),a(d(J),{label:"送出",type:"submit"})]),_:1},512)])])],64)}}}),ve={class:"col-12 md:col-6 px-2"},he={class:"card p-fluid"},be=e("h5",null,"信箱認證狀態",-1),ge={class:"field mt-5"},we={key:0},ye={key:1},$e={class:"col-12 md:col-6 px-2"},xe={class:"card p-fluid"},Ue=e("h5",null,"變更密碼",-1),Ve={class:"field mt-5"},Re={class:"field mt-5"},ke=U({__name:"AccountSecurity",setup(i){const n=new B,r=new j,{user:m}=n.getUser(),s=f({...I}),t=f({oldPassword:"",newPassword:""}),c=()=>{n.sendEmail().then(o=>{o&&C("驗證信已送出")}).catch(o=>{$(o)})},p=(o,l)=>{if(o==="")return $("請輸入舊密碼");if(l==="")return $("請輸入新密碼");n.updatePassword(o,l).then(()=>{C("密碼變更成功")}).catch(v=>{$(v)})};return A(()=>{m.value.uid&&r.get(m.value.uid).then(o=>{s.value=o})}),(o,l)=>{const v=w("Button");return u(),y(D,null,[e("div",ve,[e("div",he,[be,e("div",ge,[a(d(x),{label:"信箱",content:s.value.email},null,8,["content"]),s.value.emailVerified?(u(),y("small",we,"信箱已認證")):(u(),y("small",ye,"尚未認證信箱，請點擊按鈕發送驗證信件"))]),s.value.emailVerified?N("",!0):(u(),L(v,{key:0,label:"送出驗證信",onClick:c}))])]),e("div",$e,[e("div",xe,[Ue,e("div",Ve,[a(d(M),{label:"舊密碼",modelValue:t.value.oldPassword,"onUpdate:modelValue":l[0]||(l[0]=h=>t.value.oldPassword=h),name:"password",rules:"required",feedback:!1},null,8,["modelValue"])]),e("div",Re,[a(d(M),{label:"新密碼",modelValue:t.value.newPassword,"onUpdate:modelValue":l[1]||(l[1]=h=>t.value.newPassword=h),name:"newPassword",rules:"required"},null,8,["modelValue"])]),a(v,{label:"變更",onClick:l[2]||(l[2]=h=>p(t.value.oldPassword,t.value.newPassword))})])])],64)}}}),Fe={class:"grid"},Le={class:"col-12 px-2"},qe=U({__name:"MyAccount",setup(i){const n=f(0),r=f([{label:"個人資訊",icon:"pi pi-id-card"},{label:"安全性",icon:"pi pi-lock"}]);return(m,s)=>(u(),y("div",Fe,[e("div",Le,[a(d(X),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t),model:r.value},null,8,["modelValue","model"])]),n.value===0?(u(),L(fe,{key:0})):N("",!0),n.value===1?(u(),L(ke,{key:1})):N("",!0)]))}});export{qe as default};
