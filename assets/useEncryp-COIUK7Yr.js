var S=Object.defineProperty;var g=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(g(s,typeof e!="symbol"?e+"":e,t),t);import{C as r}from"./database-CX_mwvma.js";class w{constructor(){}setLocalStorage(e,t){window.localStorage.setItem(e,JSON.stringify(t))}setSessionStorage(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}getLocalStorage(e){const t=window.localStorage.getItem(e);return JSON.parse(t)}getSessionStorage(e){const t=window.sessionStorage.getItem(e);return JSON.parse(t)}removeLocalStorage(e){window.localStorage.removeItem(e)}clearLocalStorage(){window.localStorage.clear()}}class f{constructor(){i(this,"KEY");i(this,"IV");this.KEY="ZHMxbWRhczE5amNtN3Rnaw==",this.IV="ZTkzbmRoN2Z2bmFwcWNvdw=="}aesEncryp(e){const t=this.base64Decrypt(this.KEY),c=this.base64Decrypt(this.IV),a=r.enc.Utf8.parse(e),n=r.enc.Utf8.parse(t),o=r.enc.Utf8.parse(c);return r.AES.encrypt(a,n,{iv:o,mode:r.mode.CBC,padding:r.pad.Pkcs7}).ciphertext.toString()}aesDecrypt(e){const t=this.base64Decrypt(this.KEY),c=this.base64Decrypt(this.IV);let a=r.enc.Hex.parse(e),n=r.enc.Base64.stringify(a);const o=r.enc.Utf8.parse(t),p=r.enc.Utf8.parse(c);return r.AES.decrypt(n,o,{iv:p,mode:r.mode.CBC,padding:r.pad.Pkcs7}).toString(r.enc.Utf8).toString()}base64Encryp(e){const t=r.enc.Utf8.parse(e);return r.enc.Base64.stringify(t)}base64Decrypt(e){return r.enc.Base64.parse(e).toString(r.enc.Utf8)}}export{f as E,w as S};