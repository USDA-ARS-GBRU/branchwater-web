"use strict";(self.webpackChunkmgnify_sourmash_component=self.webpackChunkmgnify_sourmash_component||[]).push([[646],{7646:(e,t,r)=>{r.r(t),r.d(t,{ComputeParameters:()=>n.G0,KmerMinHash:()=>n.d$,Signature:()=>n.Pc,__wbindgen_throw:()=>n.Or});var n=r(3583)},3583:(e,t,r)=>{r.d(t,{G0:()=>m,d$:()=>g,Pc:()=>b,Or:()=>y});var n=r(1740);e=r.hmd(e);let _=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});_.decode();let o=null;function s(){return null!==o&&o.buffer===n.memory.buffer||(o=new Uint8Array(n.memory.buffer)),o}function a(e,t){return _.decode(s().subarray(e,e+t))}let i=0,c=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const u="function"==typeof c.encodeInto?function(e,t){return c.encodeInto(e,t)}:function(e,t){const r=c.encode(e);return t.set(r),{read:e.length,written:r.length}};function d(e,t,r){if(void 0===r){const r=c.encode(e),n=t(r.length);return s().subarray(n,n+r.length).set(r),i=r.length,n}let n=e.length,_=t(n);const o=s();let a=0;for(;a<n;a++){const t=e.charCodeAt(a);if(t>127)break;o[_+a]=t}if(a!==n){0!==a&&(e=e.slice(a)),_=r(_,n,n=a+3*e.length);const t=s().subarray(_+a,_+n);a+=u(e,t).written}return i=a,_}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let l=f.length,p=null;function h(){return null!==p&&p.buffer===n.memory.buffer||(p=new Int32Array(n.memory.buffer)),p}let w=null;class m{static __wrap(e){const t=Object.create(m.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_computeparameters_free(e)}constructor(){var e=n.computeparameters_new_with_params();return m.__wrap(e)}set_ksizes(e){var t=function(e,t){const r=t(4*e.length);return(null!==w&&w.buffer===n.memory.buffer||(w=new Uint32Array(n.memory.buffer)),w).set(e,r/4),i=e.length,r}(e,n.__wbindgen_malloc),r=i;n.computeparameters_set_ksizes(this.ptr,t,r)}}class g{static __wrap(e){const t=Object.create(g.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_kmerminhash_free(e)}constructor(e,t,r,_,o,s,a,i){var c=n.kmerminhash_new_with_scaled(e,t,r,_,o,s,a,i);return g.__wrap(c)}add_sequence_js(e){var t=d(e,n.__wbindgen_malloc,n.__wbindgen_realloc),r=i;n.kmerminhash_add_sequence_js(this.ptr,t,r)}to_json(){try{const r=n.__wbindgen_add_to_stack_pointer(-16);n.kmerminhash_to_json(r,this.ptr);var e=h()[r/4+0],t=h()[r/4+1];return a(e,t)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(e,t)}}}class b{static __wrap(e){const t=Object.create(b.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_signature_free(e)}constructor(e){!function(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);e.ptr}(e,m);var t=n.signature_new_from_params(e.ptr);return b.__wrap(t)}add_sequence_js(e){var t=d(e,n.__wbindgen_malloc,n.__wbindgen_realloc),r=i;n.signature_add_sequence_js(this.ptr,t,r)}add_from_file(e){n.signature_add_from_file(this.ptr,function(e){l===f.length&&f.push(f.length+1);const t=l;return l=f[t],f[t]=e,t}(e))}to_json(){try{const r=n.__wbindgen_add_to_stack_pointer(-16);n.signature_to_json(r,this.ptr);var e=h()[r/4+0],t=h()[r/4+1];return a(e,t)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(e,t)}}size(){return n.signature_size(this.ptr)>>>0}}function y(e,t){throw new Error(a(e,t))}},1740:(e,t,r)=>{var n=r.w[e.id];e.exports=n,r(3583),n[""]()}}]);
//# sourceMappingURL=646.mgnify-sourmash-component.worker.js.map