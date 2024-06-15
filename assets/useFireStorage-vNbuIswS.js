import{N as ke,U as Oe,ah as ue,ai as Ne,aj as Pe,ak as G,al as De,am as X,an as Se,ao as Ce,ap as ve,aq as xe,ar as Be,as as Le,at as Me,O as Fe,au as $e,ad as F,a8 as Ve,a9 as He,a7 as je,a3 as ze,a4 as We,a5 as Z,ab as qe,ac as Ke,a6 as Ye}from"./index-Cv4N99t4.js";import{m as J,D as Ge}from"./database-D7q7n2BB.js";import Xe from"./user-C4038Var.js";var Q={VITE_ENCRYP_KEY:"ZHMxbWRhczE5amNtN3Rnaw==",VITE_ENCRYP_IV:"ZTkzbmRoN2Z2bmFwcWNvdw==",VITE_MEASUREMENT_ID:"G-NFMNZDVB6N",VITE_STORAGE_BUCKET:"vite-base-2.appspot.com",VITE_AUTH_DOMAIN:"vite-base-2.firebaseapp.com",VITE_PROJECT_ID:"vite-base-2",VITE_APP_ID:"1:47769529793:web:94c00549f006fb1e901340",VITE_API_KEY:"AIzaSyAtcUI_afTGVsixUiWGi1YS2I87kHBYh34",VITE_MESSAGING_SENDER_ID:"47769529793",BASE_URL:"/vue3_base_system/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};class Ze{constructor(){}time(){const e=Q.VITE_TIME_ZONE;return J.tz(new Date,e).valueOf()}date(){const e=Q.VITE_TIME_ZONE;return J.tz(new Date,e).format("YYYY-MM-DD HH:mm:ss")}convertDate(e){const n=new Date(e),r=n.getFullYear(),s=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,o=n.getDate()<10?"0"+n.getDate():n.getDate(),i=n.getHours()<10?"0"+n.getHours():n.getHours(),a=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),c=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return r+"-"+s+"-"+o+" "+i+": "+a+": "+c}}class Je extends Ge{constructor(){super("storage")}}const m=ke(),C=new Xe,H=Oe(),w=ue();let l=w.currentUser;const O={"auth/user-not-found":"找不到該電子郵件","auth/email-already-in-use":"該電子郵件已在使用中","auth/invalid-email":"無效的電子郵件","auth/wrong-password":"密碼錯誤","auth/weak-password":"密碼複雜度過低","auth/too-many-requests":"請求過於頻繁","auth/missing-email":"請輸入信箱","auth/user-not-7":"找不到該帳號","auth/user-disabled":"該帳號已停權","auth/invalid-credential":"驗證失敗"};class le{constructor(){}async membersBecomeUser(e,n){return await C.setUser(e,n).then(r=>(console.log(r),r)).catch(r=>{throw r})}async createUser(e){m.debounce=!0;const r=Ne({apiKey:"AIzaSyAtcUI_afTGVsixUiWGi1YS2I87kHBYh34",authDomain:"vite-base-2.firebaseapp.com"},"Secondary"),s=ue(r);return await Pe(s,e.email,e.password).then(o=>(l=o.user,console.log(`${l.email} create OK`),G(s),C.setUser(l,e))).catch(o=>{const i=o.code;throw console.log(i),O[`${i}`]})}async signIn(e,n){return m.debounce=!0,await De(w,$e).then(()=>X(w,e,n).then(r=>(l=r.user,m.debounce=!1,`登入：${r.user.email}`)).catch(r=>{throw r})).catch(r=>{const s=r.code;throw m.debounce=!1,O[`${s}`]})}async keepSignIn(e,n){return m.debounce=!0,await X(w,e,n).then(r=>(l=r.user,m.debounce=!1,`登入：${r.user.email}`)).catch(r=>{const s=r.code;throw m.debounce=!1,O[`${s}`]})}async signOut(){return m.debounce=!0,await G(w).then(()=>(m.debounce=!1,"登出成功")).catch(e=>{const n=e.message;return m.debounce=!1,n})}async reauthenticate(e){l=w.currentUser;const n=Se.credential(l.email,e);return await Ce(l,n).then(r=>r.user).catch(r=>{throw r})}async updatePassword(e,n){return l=w.currentUser,m.debounce=!0,await this.reauthenticate(e).then(()=>ve(l,n).then(()=>(console.log(`${l.email} update-password`),"完成變更密碼")).catch(r=>{throw r})).catch(r=>{const s=r.code;throw m.debounce=!1,O[`${s}`]})}async update(e){return m.debounce=!0,l=w.currentUser,await xe(l,e).then(async()=>{try{await C.updateAccount(l.uid,e);const n=await C.get(l.uid);return H.user={...n,roles:H.user.roles},console.log(`${l.email} update-profile`),"帳戶資料更新成功"}catch(n){throw console.log(n),"帳戶資料庫更新失敗"}}).catch(()=>{throw"帳戶資料更新失敗"})}async deleteUser(){const e=new Date;l=w.currentUser;const n=l.uid;return await Be(l).then(()=>(C.update(n,{state:"delete",updateAt:e}),!0)).catch(r=>{const s=r.code;throw O[`${s}`]})}async sendEmail(){return l=w.currentUser,await Le(l).then(()=>(console.log(`${l.email} send-email-verification OK`),!0)).catch(e=>{const n=e.code;throw O[`${n}`]})}async sendPassword(e){return await Me(w,e).then(()=>(console.log(`${e} send-password-reset-email OK`),!0)).catch(n=>{const r=n.code;throw O[`${r}`]})}getUser(){return Fe(H)}}const Rn=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="firebasestorage.googleapis.com",de="storageBucket",Qe=2*60*1e3,et=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends Ye{constructor(e,n,r=0){super(j(e),`Firebase Storage: ${n} (${j(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return j(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function j(t){return"storage/"+t}function q(){const t="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,t)}function tt(t){return new d(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nt(t){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,t)}function st(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ot(t){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function it(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function at(){return new d(h.CANCELED,"User canceled the upload/download.")}function ct(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}function ut(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lt(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+de+"' property when initializing the app?")}function ht(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dt(t){return new d(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function W(t){return new d(h.INVALID_ARGUMENT,t)}function fe(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function ft(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new d(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function v(t){throw new d(h.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=g.makeFromUrl(e,n)}catch{return new g(e,"")}if(r.path==="")return r;throw ut(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),c={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const b="v[A-Za-z0-9_]+",E=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",A=new RegExp(`^https?://${E}/${b}/b/${s}/o${R}`,"i"),U={bucket:1,path:3},D=n===he?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",S=new RegExp(`^https?://${D}/${s}/${p}`,"i"),T=[{regex:a,indices:c,postModify:o},{regex:A,indices:U,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<T.length;_++){const B=T[_],$=B.regex.exec(e);if($){const Ie=$[B.indices.bucket];let V=$[B.indices.path];V||(V=""),r=new g(Ie,V),B.postModify(r);break}}if(r==null)throw ct(e);return r}}class pt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return a===2}let u=!1;function b(...p){u||(u=!0,e.apply(null,p))}function E(p){s=setTimeout(()=>{s=null,t(A,c())},p)}function R(){o&&clearTimeout(o)}function A(p,...S){if(u){R();return}if(p){R(),b.call(null,p,...S);return}if(c()||i){R(),b.call(null,p,...S);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,E(T)}let U=!1;function D(p){U||(U=!0,R(),!u&&(s!==null?(p||(a=2),clearTimeout(s),E(0)):p||(a=1)))}return E(0),o=setTimeout(()=>{i=!0,D(!0)},n),D}function mt(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t!==void 0}function wt(t){return typeof t=="object"&&!Array.isArray(t)}function pe(t){return typeof t=="string"||t instanceof String}function ee(t){return K()&&t instanceof Blob}function K(){return typeof Blob<"u"}function te(t,e,n,r){if(r<e)throw W(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw W(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function bt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(N||(N={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,o,i,a,c,u,b,E,R=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=b,this.connectionFactory_=E,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,U)=>{this.resolve_=A,this.reject_=U,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new L(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===N.NO_ERROR,c=o.getStatus();if(!a||Rt(c,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===N.ABORT;r(!1,new L(!1,null,b));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new L(u,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());gt(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=q();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(s.canceled){const c=this.appDelete_?fe():at();i(c)}else{const c=it();i(c)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=_t(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function yt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Et(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function At(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ut(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function It(t,e,n,r,s,o,i=!0){const a=bt(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return At(u,e),yt(u,n),Et(u,o),Ut(u,r),new Tt(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ot(...t){const e=kt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(K())return new Blob(t);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Nt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){if(typeof atob>"u")throw dt("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class z{constructor(e,n){this.data=e,this.contentType=n||null}}function Dt(t,e){switch(t){case y.RAW:return new z(me(e));case y.BASE64:case y.BASE64URL:return new z(ge(t,e));case y.DATA_URL:return new z(Ct(e),vt(e))}throw q()}function me(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function St(t){let e;try{e=decodeURIComponent(t)}catch{throw x(y.DATA_URL,"Malformed data URL.")}return me(e)}function ge(t,e){switch(t){case y.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw x(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case y.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw x(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Pt(e)}catch(s){throw s.message.includes("polyfill")?s:x(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class we{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw x(y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ct(t){const e=new we(t);return e.base64?ge(y.BASE64,e.rest):St(e.rest)}function vt(t){return new we(t).contentType}function xt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,n){let r=0,s="";ee(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ee(this.data_)){const r=this.data_,s=Nt(r,e,n);return s===null?null:new I(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new I(r,!0)}}static getBlob(...e){if(K()){const n=e.map(r=>r instanceof I?r.data_:r);return new I(Ot.apply(null,n))}else{const n=e.map(i=>pe(i)?Dt(y.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new I(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){let e;try{e=JSON.parse(t)}catch{return null}return wt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Mt(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function be(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){return e}class f{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Ft}}let M=null;function $t(t){return!pe(t)||t.length<2?t:be(t)}function Vt(){if(M)return M;const t=[];t.push(new f("bucket")),t.push(new f("generation")),t.push(new f("metageneration")),t.push(new f("name","fullPath",!0));function e(o,i){return $t(i)}const n=new f("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new f("size");return s.xform=r,t.push(s),t.push(new f("timeCreated")),t.push(new f("updated")),t.push(new f("md5Hash",null,!0)),t.push(new f("cacheControl",null,!0)),t.push(new f("contentDisposition",null,!0)),t.push(new f("contentEncoding",null,!0)),t.push(new f("contentLanguage",null,!0)),t.push(new f("contentType",null,!0)),t.push(new f("metadata","customMetadata",!0)),M=t,M}function Ht(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new g(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function jt(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return Ht(r,t),r}function zt(t,e,n){const r=Bt(e);return r===null?null:jt(t,r,n)}function Wt(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Re{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){if(!t)throw q()}function Kt(t,e){function n(r,s){const o=zt(t,s,e);return qt(o!==null),o}return n}function Te(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=st():s=rt():n.getStatus()===402?s=nt(t.bucket):n.getStatus()===403?s=ot(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Yt(t){const e=Te(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=tt(t.path)),o.serverResponse=s.serverResponse,o}return n}function Gt(t,e){const n=e.fullServerUrl(),r=_e(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function i(c,u){}const a=new Re(r,s,i,o);return a.successCodes=[200,204],a.errorHandler=Yt(e),a}function Xt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Zt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Xt(null,e)),r}function Jt(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let _=0;_<2;_++)T=T+Math.random().toString().slice(2);return T}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const u=Zt(e,r,s),b=Wt(u,n),E="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,R=`\r
--`+c+"--",A=I.getBlob(E,r,R);if(A===null)throw ht();const U={name:u.fullPath},D=_e(o,t.host,t._protocol),p="POST",S=t.maxUploadRetryTime,k=new Re(D,p,Kt(t,n),S);return k.urlParams=U,k.headers=i,k.body=A.uploadData(),k.errorHandler=Te(e),k}class Qt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=N.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=N.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=N.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw v("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw v("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class en extends Qt{initXhr(){this.xhr_.responseType="text"}}function ye(){return new en}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,n){this._service=e,n instanceof g?this._location=n:this._location=g.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new P(e,n)}get root(){const e=new g(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=Lt(this._location.path);if(e===null)return null;const n=new g(this._location.bucket,e);return new P(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ft(e)}}function tn(t,e,n){t._throwIfRoot("uploadBytes");const r=Jt(t.storage,t._location,Vt(),new I(e,!0),n);return t.storage.makeRequestWithTokens(r,ye).then(s=>({metadata:s,ref:t}))}function nn(t){t._throwIfRoot("deleteObject");const e=Gt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ye)}function rn(t,e){const n=Mt(t._location.path,e),r=new g(t._location.bucket,n);return new P(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){return/^[A-Za-z]+:\/\//.test(t)}function on(t,e){return new P(t,e)}function Ee(t,e){if(t instanceof Y){const n=t;if(n._bucket==null)throw lt();const r=new P(n,n._bucket);return e!=null?Ee(r,e):r}else return e!==void 0?rn(t,e):t}function an(t,e){if(e&&sn(e)){if(t instanceof Y)return on(t,e);throw W("To use ref(service, url), the first argument must be a Storage instance.")}else return Ee(t,e)}function ne(t,e){const n=e==null?void 0:e[de];return n==null?null:g.makeFromBucketSpec(n,t)}function cn(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:qe(s,t.app.options.projectId))}class Y{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=he,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qe,this._maxUploadRetryTime=et,this._requests=new Set,s!=null?this._bucket=g.makeFromBucketSpec(s,this._host):this._bucket=ne(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=g.makeFromBucketSpec(this._url,e):this._bucket=ne(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){te("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){te("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new P(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new pt(fe());{const i=It(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const re="@firebase/storage",se="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="storage";function un(t,e,n){return t=F(t),tn(t,e,n)}function ln(t){return t=F(t),nn(t)}function oe(t,e){return t=F(t),an(t,e)}function hn(t=je(),e){t=F(t);const r=Ve(t,Ae).getImmediate({identifier:e}),s=He("storage");return s&&dn(r,...s),r}function dn(t,e,n,r={}){cn(t,e,n,r)}function fn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Y(n,r,s,e,Ke)}function pn(){ze(new We(Ae,fn,"PUBLIC").setMultipleInstances(!0)),Z(re,se,""),Z(re,se,"esm2017")}pn();const _n=new Ze,ie=new Je,ae=hn(),Ue=new le,{user:ce}=Ue.getUser(),mn="vite-base-2.appspot.com";class Tn{constructor(){}async uploadStorage(e,n="upload"){const r=oe(ae,`system/${e.name}`);return await un(r,e).then(async s=>{console.log(s.metadata.name,"Uploaded a blob or file!");const o={id:"",url:`https://firebasestorage.googleapis.com/v0/b/${mn}/o/system%2F${s.metadata.name}?alt=media`,name:s.metadata.name,type:s.metadata.contentType,size:s.metadata.size,fullPath:s.metadata.fullPath,createdAt:_n.time(),uploaderuid:ce.value.uid,uploaderemail:ce.value.email,methods:n,state:"enable"};return await ie.add(o),o.url}).catch(s=>{throw s})}async deleteStorage(e){const n=oe(ae,e.fullPath);return await ln(n).then(async()=>(await ie.update(e.id,{state:"delete"}),`${e.name} delete`)).catch(r=>{throw r})}async uploadProfilePhoto(e){return this.uploadStorage(e,"profile").then(async n=>{const r=await Ue.update({photoURL:n});return console.log(r),r}).catch(n=>{throw n})}}export{le as A,Ze as C,Tn as F,Je as S,Rn as u};
