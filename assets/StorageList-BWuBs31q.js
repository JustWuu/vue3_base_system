import{d as V,r as s,b as j,o as Y,c as q,a,e as o,f as i,u as E,q as u,k as R,x as S,A as G}from"./index-xUVfnviE.js";import{U as H}from"./UniversalTable-BSpHwX6v.js";import"./database-CX_mwvma.js";import{M as J}from"./member-DNSa739Q.js";import{S as K,F as O}from"./useFireStorage-B-csnzCQ.js";import{s as b,e as v}from"./useToast-InC5eljp.js";/* empty css                                                                       */import"./user-DR0wrc04.js";const P={class:"grid"},Q={class:"col-12 px-2"},W={class:"card"},X={class:"mb-2"},Z={class:"my-2"},ee=a("p",null,"將檔案拖移到此處上傳",-1),te={class:"flex align-items-center justify-content-center"},le=a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),oe=a("div",{class:"flex align-items-center justify-content-center"},[a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),a("span",null,"你確定要刪除所選的檔案嗎?")],-1),pe=V({__name:"StorageList",setup(ae){const h=R(),w=new K,C=new J,m=new O,g=s([]),p=s(),r=s([]),c=s(!1),d=s(!1),k=s(),F=s([{field:"id",header:"ID",sortable:!0,style:"min-width:6rem;"},{field:"name",header:"檔名",sortable:!0,style:"min-width:6rem;"},{field:"methods",header:"用途",sortable:!0,style:"min-width:8rem;"},{field:"uploaderemail",header:"上傳者帳號",sortable:!0,style:"min-width:12rem;"},{field:"uploaderuid",header:"上傳者UID",sortable:!0,style:"min-width:10rem;"},{type:"date",field:"createdAt",header:"上傳時間",sortable:!0,style:"min-width:12rem;"}]),_=s([{type:"Dropdown",options:[],placeholder:"帳號",class:"md:mr-1 md:w-3",field:"uploaderemail"},{type:"InputText",placeholder:"Search...",class:"md:w-3",field:"id"}]),y=s(),D=t=>{y.value=t.files},U=()=>{y.value.map(t=>{m.uploadStorage(t).then(e=>{e&&b(e)}).catch(e=>{v(e)})})},f=()=>{w.array().then(t=>{g.value=t})},z=t=>{h.push(`/system/storage/read/${t.id}`)},B=t=>{p.value=t,c.value=!0},L=async()=>{await m.deleteStorage(p.value).then(t=>{b(t),h.push("/system/storage/list")}).catch(t=>{v(t)}),f(),c.value=!1},N=()=>{d.value=!0},T=async()=>{await Promise.all(r.value.map(async t=>{await m.deleteStorage(t).then(()=>{}).catch(e=>{v(e)})})),b("刪除成功"),r.value=[],f(),d.value=!1};return j(()=>{f(),C.array().then(t=>{t.filter(e=>_.value[0].options.push({value:e.email,text:e.email}))})}),(t,e)=>{const n=u("Button"),$=u("Toolbar"),A=u("FileUpload"),I=u("Column"),x=u("Dialog");return Y(),q("div",P,[a("div",Q,[a("div",W,[a("div",X,[o($,{class:"mb-2"},{start:i(()=>[a("div",Z,[o(n,{label:"刪除",icon:"pi pi-trash",class:"p-button-danger",onClick:N,disabled:!r.value||!r.value.length},null,8,["disabled"])])]),_:1}),o(A,{name:"demo[]",onUploader:U,onSelect:e[0]||(e[0]=l=>D(l)),fileLimit:10,multiple:!0,accept:"image/*",maxFileSize:3e6,customUpload:"",chooseLabel:"選擇",uploadLabel:"上傳",cancelLabel:"取消"},{empty:i(()=>[ee]),_:1})]),o(E(H),{ref_key:"dt",ref:k,data:g.value,columns:F.value,selection:r.value,"onUpdate:selection":e[1]||(e[1]=l=>r.value=l),header:"貯存管理",checkbox:!0,filter:_.value,sortField:"createdAt",tableStyle:"min-width:1000px;",fixed:"",resizableColumns:""},{footer:i(()=>[o(I,{style:"min-width:2rem",header:"操作",alignFrozen:"right",frozen:""},{body:i(l=>[o(n,{icon:"pi pi-eye",class:"p-button-rounded p-button-success mr-2",onClick:M=>z(l.data)},null,8,["onClick"]),o(n,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:M=>B(l.data)},null,8,["onClick"])]),_:1})]),_:1},8,["data","columns","selection","filter"]),o(x,{visible:c.value,"onUpdate:visible":e[3]||(e[3]=l=>c.value=l),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[o(n,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[2]||(e[2]=l=>c.value=!1)}),o(n,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:L})]),default:i(()=>{var l;return[a("div",te,[le,a("span",null,[S("你確定要刪除 "),a("b",null,G((l=p.value)==null?void 0:l.id),1),S(" 嗎?")])])]}),_:1},8,["visible"]),o(x,{visible:d.value,"onUpdate:visible":e[5]||(e[5]=l=>d.value=l),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[o(n,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[4]||(e[4]=l=>d.value=!1)}),o(n,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:T})]),default:i(()=>[oe]),_:1},8,["visible"])])])])}}});export{pe as default};