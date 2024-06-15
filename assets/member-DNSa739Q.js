import{D as t}from"./database-CX_mwvma.js";class c extends t{constructor(){super("member")}async getPublic(r){return this.get(`${r}/public/${r}`).then(e=>e).catch(e=>{throw e})}}export{c as M};
