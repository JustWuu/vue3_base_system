import{R as X,U as Z,ah as W,ai as J,aj as Q,ak as F,al as ee,am as $,an as te,ao as se,ap as ne,aq as re,ar as oe,as as ae,at as ie,S as ce,au as ue,ad as le,a8 as he,a9 as de,a7 as pe,a3 as _e,a4 as fe,a5 as S,ab as me,ac as ge,a6 as Re}from"./index-C2YWHtWb.js";import{D as we}from"./database-BKbkAfuS.js";import be from"./user-DaildQOo.js";class Te extends we{constructor(){super("image")}}const h=X(),O=new be,x=Z(),_=W();let u=_.currentUser;const T={"auth/user-not-found":"找不到該電子郵件","auth/email-already-in-use":"該電子郵件已在使用中","auth/invalid-email":"無效的電子郵件","auth/wrong-password":"密碼錯誤","auth/weak-password":"密碼複雜度過低","auth/too-many-requests":"請求過於頻繁","auth/missing-email":"請輸入信箱","auth/user-not-7":"找不到該帳號","auth/user-disabled":"該帳號已停權","auth/invalid-credential":"驗證失敗"};class ke{constructor(){}async membersBecomeUser(e,s){return await O.setUser(e,s).then(n=>(console.log(n),n)).catch(n=>{throw n})}async createUser(e){h.debounce=!0;const n=J({apiKey:"AIzaSyAtcUI_afTGVsixUiWGi1YS2I87kHBYh34",authDomain:"vite-base-2.firebaseapp.com"},"Secondary"),r=W(n);return await Q(r,e.email,e.password).then(o=>(u=o.user,console.log(`${u.email} create OK`),F(r),O.setUser(u,e))).catch(o=>{const a=o.code;throw console.log(a),T[`${a}`]})}async signIn(e,s){return h.debounce=!0,await ee(_,ue).then(()=>$(_,e,s).then(n=>(u=n.user,h.debounce=!1,`登入：${n.user.email}`)).catch(n=>{throw n})).catch(n=>{const r=n.code;throw h.debounce=!1,T[`${r}`]})}async keepSignIn(e,s){return h.debounce=!0,await $(_,e,s).then(n=>(u=n.user,h.debounce=!1,`登入：${n.user.email}`)).catch(n=>{const r=n.code;throw h.debounce=!1,T[`${r}`]})}async signOut(){return h.debounce=!0,await F(_).then(()=>(h.debounce=!1,"登出成功")).catch(e=>{const s=e.message;return h.debounce=!1,s})}async reauthenticate(e){u=_.currentUser;const s=te.credential(u.email,e);return await se(u,s).then(n=>n.user).catch(n=>{throw n})}async updatePassword(e,s){return u=_.currentUser,h.debounce=!0,await this.reauthenticate(e).then(()=>ne(u,s).then(()=>(console.log(`${u.email} update-password`),"完成變更密碼")).catch(n=>{throw n})).catch(n=>{const r=n.code;throw h.debounce=!1,T[`${r}`]})}async update(e){return h.debounce=!0,u=_.currentUser,await re(u,e).then(async()=>{try{await O.updateAccount(u.uid,e);const s=await O.get(u.uid);return x.user={...s,roles:x.user.roles},console.log(`${u.email} update-profile`),"帳戶資料更新成功"}catch(s){throw console.log(s),"帳戶資料庫更新失敗"}}).catch(()=>{throw"帳戶資料更新失敗"})}async deleteUser(){const e=new Date;u=_.currentUser;const s=u.uid;return await oe(u).then(()=>(O.update(s,{state:"delete",updateAt:e}),!0)).catch(n=>{const r=n.code;throw T[`${r}`]})}async sendEmail(){return u=_.currentUser,await ae(u).then(()=>(console.log(`${u.email} send-email-verification OK`),!0)).catch(e=>{const s=e.code;throw T[`${s}`]})}async sendPassword(e){return await ie(_,e).then(()=>(console.log(`${e} send-password-reset-email OK`),!0)).catch(s=>{const n=s.code;throw T[`${n}`]})}getUser(){return ce(x)}}/**
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
 */const q="firebasestorage.googleapis.com",Ie="storageBucket",Ae=2*60*1e3,Oe=10*60*1e3;/**
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
 */class g extends Re{constructor(e,s,n=0){super(L(e),`Firebase Storage: ${s} (${L(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return L(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var m;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(m||(m={}));function L(t){return"storage/"+t}function Ue(){const t="An unknown error occurred, please check the error payload for server response.";return new g(m.UNKNOWN,t)}function ye(){return new g(m.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ee(){return new g(m.CANCELED,"User canceled the upload/download.")}function ve(t){return new g(m.INVALID_URL,"Invalid URL '"+t+"'.")}function Ne(t){return new g(m.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function M(t){return new g(m.INVALID_ARGUMENT,t)}function G(){return new g(m.APP_DELETED,"The Firebase app was deleted.")}function Pe(t){return new g(m.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class f{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=f.makeFromUrl(e,s)}catch{return new f(e,"")}if(n.path==="")return n;throw Ne(e)}static makeFromUrl(e,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(p){p.path.charAt(p.path.length-1)==="/"&&(p.path_=p.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),i={bucket:1,path:3};function l(p){p.path_=decodeURIComponent(p.path)}const R="v[A-Za-z0-9_]+",b=s.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",A=new RegExp(`^https?://${b}/${R}/b/${r}/o${w}`,"i"),k={bucket:1,path:3},U=s===q?"(?:storage.googleapis.com|storage.cloud.google.com)":s,d="([^?#]*)",y=new RegExp(`^https?://${U}/${r}/${d}`,"i"),I=[{regex:c,indices:i,postModify:o},{regex:A,indices:k,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let p=0;p<I.length;p++){const E=I[p],D=E.regex.exec(e);if(D){const z=D[E.indices.bucket];let C=D[E.indices.path];C||(C=""),n=new f(z,C),E.postModify(n);break}}if(n==null)throw ve(e);return n}}class De{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ce(t,e,s){let n=1,r=null,o=null,a=!1,c=0;function i(){return c===2}let l=!1;function R(...d){l||(l=!0,e.apply(null,d))}function b(d){r=setTimeout(()=>{r=null,t(A,i())},d)}function w(){o&&clearTimeout(o)}function A(d,...y){if(l){w();return}if(d){w(),R.call(null,d,...y);return}if(i()||a){w(),R.call(null,d,...y);return}n<64&&(n*=2);let I;c===1?(c=2,I=0):I=(n+Math.random())*1e3,b(I)}let k=!1;function U(d){k||(k=!0,w(),!l&&(r!==null?(d||(c=2),clearTimeout(r),b(0)):d||(c=1)))}return b(0),o=setTimeout(()=>{a=!0,U(!0)},s),U}function xe(t){t(!1)}/**
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
 */function Le(t){return t!==void 0}function V(t,e,s,n){if(n<e)throw M(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw M(`Invalid value for '${t}'. Expected ${s} or less.`)}function Fe(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const r=e(n)+"="+e(t[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */function $e(t,e){const s=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return s||r||o}/**
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
 */class Se{constructor(e,s,n,r,o,a,c,i,l,R,b,w=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=i,this.timeout_=l,this.progressCallback_=R,this.connectionFactory_=b,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,k)=>{this.resolve_=A,this.reject_=k,this.start_()})}start_(){const e=(n,r)=>{if(r){n(!1,new v(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const i=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(i,l)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===N.NO_ERROR,i=o.getStatus();if(!c||$e(i,this.additionalRetryCodes_)&&this.retry){const R=o.getErrorCode()===N.ABORT;n(!1,new v(!1,null,R));return}const l=this.successCodes_.indexOf(i)!==-1;n(!0,new v(l,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const i=this.callback_(c,c.getResponse());Le(i)?o(i):o()}catch(i){a(i)}else if(c!==null){const i=Ue();i.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,i)):a(i)}else if(r.canceled){const i=this.appDelete_?G():Ee();a(i)}else{const i=ye();a(i)}};this.canceled_?s(!1,new v(!1,null,!0)):this.backoffId_=Ce(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xe(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class v{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function Me(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ve(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Be(t,e){e&&(t["X-Firebase-GMPID"]=e)}function He(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ke(t,e,s,n,r,o,a=!0){const c=Fe(t.urlParams),i=t.url+c,l=Object.assign({},t.headers);return Be(l,e),Me(l,s),Ve(l,o),He(l,n),new Se(i,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a)}/**
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
 */function We(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qe(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class P{constructor(e,s){this._service=e,s instanceof f?this._location=s:this._location=f.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new P(e,s)}get root(){const e=new f(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qe(this._location.path)}get storage(){return this._service}get parent(){const e=We(this._location.path);if(e===null)return null;const s=new f(this._location.bucket,e);return new P(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw Pe(e)}}function B(t,e){const s=e==null?void 0:e[Ie];return s==null?null:f.makeFromBucketSpec(s,t)}function Ge(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:r}=n;r&&(t._overrideAuthToken=typeof r=="string"?r:me(r,t.app.options.projectId))}class je{constructor(e,s,n,r,o){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=q,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ae,this._maxUploadRetryTime=Oe,this._requests=new Set,r!=null?this._bucket=f.makeFromBucketSpec(r,this._host):this._bucket=B(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=f.makeFromBucketSpec(this._url,e):this._bucket=B(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new P(this,e)}_makeRequest(e,s,n,r,o=!0){if(this._deleted)return new De(G());{const a=Ke(e,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,r).getPromise()}}const H="@firebase/storage",K="0.12.4";/**
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
 */const j="storage";function Ye(t=pe(),e){t=le(t);const n=he(t,j).getImmediate({identifier:e}),r=de("storage");return r&&ze(n,...r),n}function ze(t,e,s,n={}){Ge(t,e,s,n)}function Xe(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new je(s,n,r,e,ge)}function Ze(){_e(new fe(j,Xe,"PUBLIC").setMultipleInstances(!0)),S(H,K,""),S(H,K,"esm2017")}Ze();new Te;Ye();const Je=new ke;Je.getUser();export{ke as default};
