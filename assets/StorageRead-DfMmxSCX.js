import"./database-D7q7n2BB.js";import{S as g,C as b}from"./useFireStorage-vNbuIswS.js";import{d as i,q as p,o as r,c as h,a as e,A as y,e as t,n as x,_ as S,y as F,r as m,b as w,f as D,u as s,D as I}from"./index-Cv4N99t4.js";/* empty css                                                                       */import{F as l}from"./FloatText-JV2VlEDV.js";import"./Editor-kc3vYnik.js";import"./user-C4038Var.js";const C={id:"",url:"",name:"",type:"",size:0,fullPath:"",createdAt:0,created:0,uploaderuid:"",uploaderemail:"",methods:"upload",state:"enable"},B={class:"relative"},V={class:"absolute float-span"},$=i({__name:"FloatImg",props:{label:{type:String,default:"-"},src:{type:String},disabled:{type:Boolean,default:!1},width:{type:String,default:"200"},height:{type:String,default:"200"}},setup(o){return(n,c)=>{const d=p("Image");return r(),h("div",B,[e("span",V,y(o.label),1),e("div",{class:x(["p-inputtext",{"opacity-90":o.disabled}])},[t(d,{src:o.src,alt:o.label,width:o.width,height:o.height},null,8,["src","alt","width","height"])],2)])}}}),k=S($,[["__scopeId","data-v-5a6c9ee7"]]),A={class:"grid"},z={class:"col-12 px-2"},N={class:"card p-fluid"},P=e("div",{class:"flex"},[e("div",{class:"flex align-items-center"},[e("h5",null,"貯存管理")])],-1),R={class:"grid p-fluid mt-3"},j={class:"col-12"},q={class:"col-12 md:col-6"},E={class:"col-12 md:col-6"},M={class:"col-12"},O={class:"col-12 md:col-6"},T={class:"col-12 md:col-6"},U={class:"col-12 md:col-6"},G={class:"col-12 md:col-6"},H=i({__name:"StoragePage",props:{mode:{type:String,default:""}},setup(o){const n=F(),c=new b,d=o,v=new g,u=m(""),a=m({...C});return w(()=>{d.mode==="read"&&(u.value=n.params.id,v.get(u.value).then(_=>{a.value=_}))}),(_,J)=>{const f=p("VForm");return r(),h("div",A,[e("div",z,[t(f,{ref:"signupForm"},{default:D(()=>[e("div",N,[P,e("div",R,[e("div",j,[t(s(k),{label:"瀏覽",src:a.value.url,width:"auto",height:"300"},null,8,["src"])]),e("div",q,[t(s(l),{label:"ID",content:a.value.id},null,8,["content"])]),e("div",E,[t(s(l),{label:"檔名",content:a.value.name},null,8,["content"])]),e("div",M,[t(s(l),{label:"網址",content:a.value.url,"copy-button":""},null,8,["content"])]),e("div",O,[t(s(l),{label:"用途",content:a.value.methods},null,8,["content"])]),e("div",T,[t(s(l),{label:"上傳者帳號",content:a.value.uploaderemail},null,8,["content"])]),e("div",U,[t(s(l),{label:"上傳者UID",content:a.value.uploaderuid,"copy-button":""},null,8,["content"])]),e("div",G,[t(s(l),{label:"上傳時間",content:s(c).convertDate(a.value.createdAt)},null,8,["content"])])])])]),_:1},512)])])}}}),ee=i({__name:"StorageRead",setup(o){return(n,c)=>(r(),I(H,{mode:"read"}))}});export{ee as default};
