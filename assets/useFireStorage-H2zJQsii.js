import{R as me,U as we,ai as re,aj as be,ak as Re,al as G,am as ye,an as Y,ao as Te,ap as Ae,aq as Ee,ar as ke,as as Ue,at as Oe,au as Ie,S as Pe,av as Ne,ae as q,a9 as Ce,aa as ve,a8 as xe,a4 as De,a5 as Se,a6 as Z,ac as Le,ad as Be,a7 as Fe}from"./index-BAnCtb42.js";import{D as $e}from"./database-B5yYN_Wa.js";import Me from"./user-QzlZX5LK.js";class He extends $e{constructor(){super("image")}}const g=me(),L=new Me,H=we(),w=re();let l=w.currentUser;const I={"auth/user-not-found":"找不到該電子郵件","auth/email-already-in-use":"該電子郵件已在使用中","auth/invalid-email":"無效的電子郵件","auth/wrong-password":"密碼錯誤","auth/weak-password":"密碼複雜度過低","auth/too-many-requests":"請求過於頻繁","auth/missing-email":"請輸入信箱","auth/user-not-7":"找不到該帳號","auth/user-disabled":"該帳號已停權","auth/invalid-credential":"驗證失敗"};class se{constructor(){}async createUser(e){g.debounce=!0;const r=be({apiKey:"AIzaSyAtcUI_afTGVsixUiWGi1YS2I87kHBYh34",authDomain:"vite-base-2.firebaseapp.com"},"Secondary"),s=re(r);return await Re(s,e.email,e.password).then(o=>(l=o.user,console.log(`${l.email} create OK`),G(s),L.setUser(l,e))).catch(o=>{const i=o.code;throw console.log(i),I[`${i}`]})}async signIn(e,n){return g.debounce=!0,await ye(w,Ne).then(()=>Y(w,e,n).then(r=>(l=r.user,g.debounce=!1,`登入：${r.user.email}`)).catch(r=>{throw r})).catch(r=>{const s=r.code;throw g.debounce=!1,I[`${s}`]})}async keepSignIn(e,n){return g.debounce=!0,await Y(w,e,n).then(r=>(l=r.user,g.debounce=!1,`登入：${r.user.email}`)).catch(r=>{const s=r.code;throw g.debounce=!1,I[`${s}`]})}async signOut(){return g.debounce=!0,await G(w).then(()=>(g.debounce=!1,"登出成功")).catch(e=>{const n=e.message;return g.debounce=!1,n})}async reauthenticate(e){l=w.currentUser;const n=Te.credential(l.email,e);return await Ae(l,n).then(r=>r.user).catch(r=>{throw r})}async updatePassword(e,n){return l=w.currentUser,g.debounce=!0,await this.reauthenticate(e).then(()=>Ee(l,n).then(()=>(console.log(`${l.email} update-password`),"完成變更密碼")).catch(r=>{throw r})).catch(r=>{const s=r.code;throw g.debounce=!1,I[`${s}`]})}async update(e){return g.debounce=!0,l=w.currentUser,await ke(l,e).then(async()=>{try{await L.updateAccount(l.uid,e);const n=await L.get(l.uid);return H.user={...n,roles:H.user.roles},console.log(`${l.email} update-profile`),"帳戶資料更新成功"}catch(n){throw console.log(n),"帳戶資料庫更新失敗"}}).catch(()=>{throw"帳戶資料更新失敗"})}async deleteUser(){const e=new Date;l=w.currentUser;const n=l.uid;return await Ue(l).then(()=>(L.update(n,{state:"delete",updateAt:e}),!0)).catch(r=>{const s=r.code;throw I[`${s}`]})}async sendEmail(){return l=w.currentUser,await Oe(l).then(()=>(console.log(`${l.email} send-email-verification OK`),!0)).catch(e=>{const n=e.code;throw I[`${n}`]})}async sendPassword(e){return await Ie(w,e).then(()=>(console.log(`${e} send-password-reset-email OK`),!0)).catch(n=>{const r=n.code;throw I[`${r}`]})}getUser(){return Pe(H)}}const hn=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));/**
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
 */const oe="firebasestorage.googleapis.com",ie="storageBucket",Ve=2*60*1e3,je=10*60*1e3;/**
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
 */class d extends Fe{constructor(e,n,r=0){super(V(e),`Firebase Storage: ${n} (${V(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return V(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function V(t){return"storage/"+t}function K(){const t="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,t)}function ze(t){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qe(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,t)}function Ke(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function We(t){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Xe(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ge(){return new d(h.CANCELED,"User canceled the upload/download.")}function Ye(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}function Ze(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Je(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ie+"' property when initializing the app?")}function Qe(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function et(t){return new d(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function z(t){return new d(h.INVALID_ARGUMENT,t)}function ae(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function tt(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(t,e){return new d(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function x(t){throw new d(h.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class m{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=m.makeFromUrl(e,n)}catch{return new m(e,"")}if(r.path==="")return r;throw Ze(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+s+i,"i"),a={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const b="v[A-Za-z0-9_]+",A=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",E=new RegExp(`^https?://${A}/${b}/b/${s}/o${R}`,"i"),k={bucket:1,path:3},C=n===oe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",v=new RegExp(`^https?://${C}/${s}/${p}`,"i"),y=[{regex:c,indices:a,postModify:o},{regex:E,indices:k,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<y.length;_++){const S=y[_],$=S.regex.exec(e);if($){const ge=$[S.indices.bucket];let M=$[S.indices.path];M||(M=""),r=new m(ge,M),S.postModify(r);break}}if(r==null)throw Ye(e);return r}}class nt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rt(t,e,n){let r=1,s=null,o=null,i=!1,c=0;function a(){return c===2}let u=!1;function b(...p){u||(u=!0,e.apply(null,p))}function A(p){s=setTimeout(()=>{s=null,t(E,a())},p)}function R(){o&&clearTimeout(o)}function E(p,...v){if(u){R();return}if(p){R(),b.call(null,p,...v);return}if(a()||i){R(),b.call(null,p,...v);return}r<64&&(r*=2);let y;c===1?(c=2,y=0):y=(r+Math.random())*1e3,A(y)}let k=!1;function C(p){k||(k=!0,R(),!u&&(s!==null?(p||(c=2),clearTimeout(s),A(0)):p||(c=1)))}return A(0),o=setTimeout(()=>{i=!0,C(!0)},n),C}function st(t){t(!1)}/**
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
 */function ot(t){return t!==void 0}function it(t){return typeof t=="object"&&!Array.isArray(t)}function ce(t){return typeof t=="string"||t instanceof String}function J(t){return W()&&t instanceof Blob}function W(){return typeof Blob<"u"}function Q(t,e,n,r){if(r<e)throw z(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw z(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function at(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ct(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var P;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(P||(P={}));/**
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
 */function ut(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class lt{constructor(e,n,r,s,o,i,c,a,u,b,A,R=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=b,this.connectionFactory_=A,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new B(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=c=>{const a=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const c=o.getErrorCode()===P.NO_ERROR,a=o.getStatus();if(!c||ut(a,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===P.ABORT;r(!1,new B(!1,null,b));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new B(u,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());ot(a)?o(a):o()}catch(a){i(a)}else if(c!==null){const a=K();a.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,a)):i(a)}else if(s.canceled){const a=this.appDelete_?ae():Ge();i(a)}else{const a=Xe();i(a)}};this.canceled_?n(!1,new B(!1,null,!0)):this.backoffId_=rt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&st(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class B{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ht(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ft(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _t(t,e,n,r,s,o,i=!0){const c=ct(t.urlParams),a=t.url+c,u=Object.assign({},t.headers);return ft(u,e),ht(u,n),dt(u,o),pt(u,r),new lt(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
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
 */function gt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mt(...t){const e=gt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(W())return new Blob(t);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function bt(t){if(typeof atob>"u")throw et("base-64");return atob(t)}/**
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
 */const T={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class j{constructor(e,n){this.data=e,this.contentType=n||null}}function Rt(t,e){switch(t){case T.RAW:return new j(ue(e));case T.BASE64:case T.BASE64URL:return new j(le(t,e));case T.DATA_URL:return new j(Tt(e),At(e))}throw K()}function ue(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yt(t){let e;try{e=decodeURIComponent(t)}catch{throw D(T.DATA_URL,"Malformed data URL.")}return ue(e)}function le(t,e){switch(t){case T.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw D(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case T.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw D(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bt(e)}catch(s){throw s.message.includes("polyfill")?s:D(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class he{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw D(T.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Et(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Tt(t){const e=new he(t);return e.base64?le(T.BASE64,e.rest):yt(e.rest)}function At(t){return new he(t).contentType}function Et(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class U{constructor(e,n){let r=0,s="";J(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(J(this.data_)){const r=this.data_,s=wt(r,e,n);return s===null?null:new U(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new U(r,!0)}}static getBlob(...e){if(W()){const n=e.map(r=>r instanceof U?r.data_:r);return new U(mt.apply(null,n))}else{const n=e.map(i=>ce(i)?Rt(T.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)s[o++]=i[c]}),new U(s,!0)}}uploadData(){return this.data_}}/**
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
 */function kt(t){let e;try{e=JSON.parse(t)}catch{return null}return it(e)?e:null}/**
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
 */function Ut(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ot(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function de(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function It(t,e){return e}class f{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||It}}let F=null;function Pt(t){return!ce(t)||t.length<2?t:de(t)}function Nt(){if(F)return F;const t=[];t.push(new f("bucket")),t.push(new f("generation")),t.push(new f("metageneration")),t.push(new f("name","fullPath",!0));function e(o,i){return Pt(i)}const n=new f("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new f("size");return s.xform=r,t.push(s),t.push(new f("timeCreated")),t.push(new f("updated")),t.push(new f("md5Hash",null,!0)),t.push(new f("cacheControl",null,!0)),t.push(new f("contentDisposition",null,!0)),t.push(new f("contentEncoding",null,!0)),t.push(new f("contentLanguage",null,!0)),t.push(new f("contentType",null,!0)),t.push(new f("metadata","customMetadata",!0)),F=t,F}function Ct(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new m(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function vt(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return Ct(r,t),r}function xt(t,e,n){const r=kt(e);return r===null?null:vt(t,r,n)}function Dt(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class St{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Lt(t){if(!t)throw K()}function Bt(t,e){function n(r,s){const o=xt(t,s,e);return Lt(o!==null),o}return n}function Ft(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Ke():s=qe():n.getStatus()===402?s=ze(t.bucket):n.getStatus()===403?s=We(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $t(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Mt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$t(null,e)),r}function Ht(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let y="";for(let _=0;_<2;_++)y=y+Math.random().toString().slice(2);return y}const a=c();i["Content-Type"]="multipart/related; boundary="+a;const u=Mt(e,r,s),b=Dt(u,n),A="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,R=`\r
--`+a+"--",E=U.getBlob(A,r,R);if(E===null)throw Qe();const k={name:u.fullPath},C=at(o,t.host,t._protocol),p="POST",v=t.maxUploadRetryTime,O=new St(C,p,Bt(t,n),v);return O.urlParams=k,O.headers=i,O.body=E.uploadData(),O.errorHandler=Ft(e),O}class Vt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=P.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=P.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=P.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jt extends Vt{initXhr(){this.xhr_.responseType="text"}}function zt(){return new jt}/**
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
 */class N{constructor(e,n){this._service=e,n instanceof m?this._location=n:this._location=m.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new N(e,n)}get root(){const e=new m(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return de(this._location.path)}get storage(){return this._service}get parent(){const e=Ut(this._location.path);if(e===null)return null;const n=new m(this._location.bucket,e);return new N(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tt(e)}}function qt(t,e,n){t._throwIfRoot("uploadBytes");const r=Ht(t.storage,t._location,Nt(),new U(e,!0),n);return t.storage.makeRequestWithTokens(r,zt).then(s=>({metadata:s,ref:t}))}function Kt(t,e){const n=Ot(t._location.path,e),r=new m(t._location.bucket,n);return new N(t.storage,r)}/**
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
 */function Wt(t){return/^[A-Za-z]+:\/\//.test(t)}function Xt(t,e){return new N(t,e)}function fe(t,e){if(t instanceof X){const n=t;if(n._bucket==null)throw Je();const r=new N(n,n._bucket);return e!=null?fe(r,e):r}else return e!==void 0?Kt(t,e):t}function Gt(t,e){if(e&&Wt(e)){if(t instanceof X)return Xt(t,e);throw z("To use ref(service, url), the first argument must be a Storage instance.")}else return fe(t,e)}function ee(t,e){const n=e==null?void 0:e[ie];return n==null?null:m.makeFromBucketSpec(n,t)}function Yt(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Le(s,t.app.options.projectId))}class X{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=oe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ve,this._maxUploadRetryTime=je,this._requests=new Set,s!=null?this._bucket=m.makeFromBucketSpec(s,this._host):this._bucket=ee(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=m.makeFromBucketSpec(this._url,e):this._bucket=ee(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Q("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Q("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new N(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new nt(ae());{const i=_t(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const te="@firebase/storage",ne="0.12.4";/**
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
 */const pe="storage";function Zt(t,e,n){return t=q(t),qt(t,e,n)}function Jt(t,e){return t=q(t),Gt(t,e)}function Qt(t=xe(),e){t=q(t);const r=Ce(t,pe).getImmediate({identifier:e}),s=ve("storage");return s&&en(r,...s),r}function en(t,e,n,r={}){Yt(t,e,n,r)}function tn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new X(n,r,s,e,Be)}function nn(){De(new Se(pe,tn,"PUBLIC").setMultipleInstances(!0)),Z(te,ne,""),Z(te,ne,"esm2017")}nn();const rn=new He,sn=Qt(),_e=new se,{user:on}=_e.getUser(),an="vite-base-2.appspot.com";class dn{constructor(){}async uploadImage(e,n="upload"){const r=Jt(sn,`image/${e.name}`);return await Zt(r,e).then(async s=>{console.log(s.metadata.name,"Uploaded a blob or file!");const o={url:`https://firebasestorage.googleapis.com/v0/b/${an}/o/image%2F${s.metadata.name}?alt=media`,name:s.metadata.name,type:s.metadata.contentType,size:s.metadata.size,fullPath:s.metadata.fullPath,created:s.metadata.timeCreated,uploader:on.value.uid,use:n,state:"enable"};return await rn.set(e.name,o),o.url}).catch(s=>{throw s})}async uploadProfilePhoto(e){return this.uploadImage(e,"profile").then(async n=>{const r=await _e.update({photoURL:n});return console.log(r),r}).catch(n=>{throw n})}}export{se as A,dn as F,hn as u};
