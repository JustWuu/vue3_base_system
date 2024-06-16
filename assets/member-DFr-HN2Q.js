import{D as t}from"./database-ZJ_VP24k.js";class c extends t{constructor(){super("member")}async getPublic(r){return this.get(`${r}/public/${r}`).then(e=>e).catch(e=>{throw e})}}export{c as M};
