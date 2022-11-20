(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}})();function M(){}const Be=e=>e;function be(e,t){for(const r in t)e[r]=t[r];return e}function Oe(e){return e()}function we(){return Object.create(null)}function te(e){e.forEach(Oe)}function Pe(e){return typeof e=="function"}function Se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function We(e){return Object.keys(e).length===0}function xe(e,...t){if(e==null)return M;const r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function ve(e,t,r){e.$$.on_destroy.push(xe(t,r))}const Ce=typeof window<"u";let qe=Ce?()=>window.performance.now():()=>Date.now(),Ae=Ce?e=>requestAnimationFrame(e):M;const J=new Set;function Te(e){J.forEach(t=>{t.c(e)||(J.delete(t),t.f())}),J.size!==0&&Ae(Te)}function ze(e){let t;return J.size===0&&Ae(Te),{promise:new Promise(r=>{J.add(t={c:e,f:r})}),abort(){J.delete(t)}}}function G(e,t){e.appendChild(t)}function Ne(e,t,r){e.insertBefore(t,r||null)}function me(e){e.parentNode&&e.parentNode.removeChild(e)}function Ye(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function B(e){return document.createElement(e)}function Re(e){return document.createTextNode(e)}function H(){return Re(" ")}function ce(e,t,r,s){return e.addEventListener(t,r,s),()=>e.removeEventListener(t,r,s)}function D(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function Ve(e){return Array.from(e.childNodes)}function He(e,t,r,s){r===null?e.style.removeProperty(t):e.style.setProperty(t,r,s?"important":"")}function _e(e,t){for(let r=0;r<e.options.length;r+=1){const s=e.options[r];if(s.__value===t){s.selected=!0;return}}e.selectedIndex=-1}let ge;function ee(e){ge=e}const X=[],ue=[],ie=[],Fe=[],Je=Promise.resolve();let pe=!1;function Ke(){pe||(pe=!0,Je.then(Ge))}function de(e){ie.push(e)}const fe=new Set;let oe=0;function Ge(){const e=ge;do{for(;oe<X.length;){const t=X[oe];oe++,ee(t),Ze(t.$$)}for(ee(null),X.length=0,oe=0;ue.length;)ue.pop()();for(let t=0;t<ie.length;t+=1){const r=ie[t];fe.has(r)||(fe.add(r),r())}ie.length=0}while(X.length);for(;Fe.length;)Fe.pop()();pe=!1,fe.clear(),ee(e)}function Ze(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}const Qe=new Set;function Xe(e,t){e&&e.i&&(Qe.delete(e),e.i(t))}function et(e,t,r,s){const{fragment:i,after_update:c}=e.$$;i&&i.m(t,r),s||de(()=>{const f=e.$$.on_mount.map(Oe).filter(Pe);e.$$.on_destroy?e.$$.on_destroy.push(...f):te(f),e.$$.on_mount=[]}),c.forEach(de)}function tt(e,t){const r=e.$$;r.fragment!==null&&(te(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function rt(e,t){e.$$.dirty[0]===-1&&(X.push(e),Ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function nt(e,t,r,s,i,c,f,g=[-1]){const p=ge;ee(e);const l=e.$$={fragment:null,ctx:[],props:c,update:M,not_equal:i,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:we(),dirty:g,skip_bound:!1,root:t.target||p.$$.root};f&&f(l.root);let v=!1;if(l.ctx=r?r(e,t.props||{},(y,$,...j)=>{const b=j.length?j[0]:$;return l.ctx&&i(l.ctx[y],l.ctx[y]=b)&&(!l.skip_bound&&l.bound[y]&&l.bound[y](b),v&&rt(e,y)),$}):[],l.update(),v=!0,te(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const y=Ve(t.target);l.fragment&&l.fragment.l(y),y.forEach(me)}else l.fragment&&l.fragment.c();t.intro&&Xe(e.$$.fragment),et(e,t.target,t.anchor,t.customElement),Ge()}ee(p)}class ot{$destroy(){tt(this,1),this.$destroy=M}$on(t,r){if(!Pe(r))return M;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(r),()=>{const i=s.indexOf(r);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function Ue(e,t=M){let r;const s=new Set;function i(g){if(Se(e,g)&&(e=g,r)){const p=!Y.length;for(const l of s)l[1](),Y.push(l,e);if(p){for(let l=0;l<Y.length;l+=2)Y[l][0](Y[l+1]);Y.length=0}}}function c(g){i(g(e))}function f(g,p=M){const l=[g,p];return s.add(l),s.size===1&&(r=t(i)||M),g(e),()=>{s.delete(l),s.size===0&&(r(),r=null)}}return{set:i,update:c,subscribe:f}}function Ee(e){return Object.prototype.toString.call(e)==="[object Date]"}function he(e,t){if(e===t||e!==e)return()=>e;const r=typeof e;if(r!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,c)=>he(e[c],i));return i=>s.map(c=>c(i))}if(r==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Ee(e)&&Ee(t)){e=e.getTime(),t=t.getTime();const c=t-e;return f=>new Date(e+f*c)}const s=Object.keys(t),i={};return s.forEach(c=>{i[c]=he(e[c],t[c])}),c=>{const f={};return s.forEach(g=>{f[g]=i[g](c)}),f}}if(r==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${r} values`)}function it(e,t={}){const r=Ue(e);let s,i=e;function c(f,g){if(e==null)return r.set(e=f),Promise.resolve();i=f;let p=s,l=!1,{delay:v=0,duration:y=400,easing:$=Be,interpolate:j=he}=be(be({},t),g);if(y===0)return p&&(p.abort(),p=null),r.set(e=i),Promise.resolve();const b=qe()+v;let S;return s=ze(O=>{if(O<b)return!0;l||(S=j(e,f),typeof y=="function"&&(y=y(e,f)),l=!0),p&&(p.abort(),p=null);const F=O-b;return F>y?(r.set(e=f),!1):(r.set(e=S($(F/y))),!0)}),s.promise}return{set:c,update:(f,g)=>c(f(i,e),g),subscribe:r.subscribe}}function st(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var i=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,i.get?i:{enumerable:!0,get:function(){return e[s]}})}),r}var at={exports:{}};(function(e){var t=function(r){var s=Object.prototype,i=s.hasOwnProperty,c=Object.defineProperty||function(o,n,a){o[n]=a.value},f,g=typeof Symbol=="function"?Symbol:{},p=g.iterator||"@@iterator",l=g.asyncIterator||"@@asyncIterator",v=g.toStringTag||"@@toStringTag";function y(o,n,a){return Object.defineProperty(o,n,{value:a,enumerable:!0,configurable:!0,writable:!0}),o[n]}try{y({},"")}catch{y=function(n,a,m){return n[a]=m}}function $(o,n,a,m){var u=n&&n.prototype instanceof C?n:C,w=Object.create(u.prototype),A=new E(m||[]);return c(w,"_invoke",{value:se(o,a,A)}),w}r.wrap=$;function j(o,n,a){try{return{type:"normal",arg:o.call(n,a)}}catch(m){return{type:"throw",arg:m}}}var b="suspendedStart",S="suspendedYield",O="executing",F="completed",d={};function C(){}function L(){}function R(){}var K={};y(K,p,function(){return this});var Z=Object.getPrototypeOf,q=Z&&Z(Z(k([])));q&&q!==s&&i.call(q,p)&&(K=q);var I=R.prototype=C.prototype=Object.create(K);L.prototype=R,c(I,"constructor",{value:R,configurable:!0}),c(R,"constructor",{value:L,configurable:!0}),L.displayName=y(R,v,"GeneratorFunction");function re(o){["next","throw","return"].forEach(function(n){y(o,n,function(a){return this._invoke(n,a)})})}r.isGeneratorFunction=function(o){var n=typeof o=="function"&&o.constructor;return n?n===L||(n.displayName||n.name)==="GeneratorFunction":!1},r.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,R):(o.__proto__=R,y(o,v,"GeneratorFunction")),o.prototype=Object.create(I),o},r.awrap=function(o){return{__await:o}};function z(o,n){function a(w,A,T,U){var N=j(o[w],o,A);if(N.type==="throw")U(N.arg);else{var ae=N.arg,Q=ae.value;return Q&&typeof Q=="object"&&i.call(Q,"__await")?n.resolve(Q.__await).then(function(W){a("next",W,T,U)},function(W){a("throw",W,T,U)}):n.resolve(Q).then(function(W){ae.value=W,T(ae)},function(W){return a("throw",W,T,U)})}}var m;function u(w,A){function T(){return new n(function(U,N){a(w,A,U,N)})}return m=m?m.then(T,T):T()}c(this,"_invoke",{value:u})}re(z.prototype),y(z.prototype,l,function(){return this}),r.AsyncIterator=z,r.async=function(o,n,a,m,u){u===void 0&&(u=Promise);var w=new z($(o,n,a,m),u);return r.isGeneratorFunction(n)?w:w.next().then(function(A){return A.done?A.value:w.next()})};function se(o,n,a){var m=b;return function(w,A){if(m===O)throw new Error("Generator is already running");if(m===F){if(w==="throw")throw A;return P()}for(a.method=w,a.arg=A;;){var T=a.delegate;if(T){var U=ne(T,a);if(U){if(U===d)continue;return U}}if(a.method==="next")a.sent=a._sent=a.arg;else if(a.method==="throw"){if(m===b)throw m=F,a.arg;a.dispatchException(a.arg)}else a.method==="return"&&a.abrupt("return",a.arg);m=O;var N=j(o,n,a);if(N.type==="normal"){if(m=a.done?F:S,N.arg===d)continue;return{value:N.arg,done:a.done}}else N.type==="throw"&&(m=F,a.method="throw",a.arg=N.arg)}}}function ne(o,n){var a=n.method,m=o.iterator[a];if(m===f)return n.delegate=null,a==="throw"&&o.iterator.return&&(n.method="return",n.arg=f,ne(o,n),n.method==="throw")||a!=="return"&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var u=j(m,o.iterator,n.arg);if(u.type==="throw")return n.method="throw",n.arg=u.arg,n.delegate=null,d;var w=u.arg;if(!w)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d;if(w.done)n[o.resultName]=w.value,n.next=o.nextLoc,n.method!=="return"&&(n.method="next",n.arg=f);else return w;return n.delegate=null,d}re(I),y(I,v,"Generator"),y(I,p,function(){return this}),y(I,"toString",function(){return"[object Generator]"});function h(o){var n={tryLoc:o[0]};1 in o&&(n.catchLoc=o[1]),2 in o&&(n.finallyLoc=o[2],n.afterLoc=o[3]),this.tryEntries.push(n)}function _(o){var n=o.completion||{};n.type="normal",delete n.arg,o.completion=n}function E(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(h,this),this.reset(!0)}r.keys=function(o){var n=Object(o),a=[];for(var m in n)a.push(m);return a.reverse(),function u(){for(;a.length;){var w=a.pop();if(w in n)return u.value=w,u.done=!1,u}return u.done=!0,u}};function k(o){if(o){var n=o[p];if(n)return n.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var a=-1,m=function u(){for(;++a<o.length;)if(i.call(o,a))return u.value=o[a],u.done=!1,u;return u.value=f,u.done=!0,u};return m.next=m}}return{next:P}}r.values=k;function P(){return{value:f,done:!0}}return E.prototype={constructor:E,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(_),!o)for(var n in this)n.charAt(0)==="t"&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=f)},stop:function(){this.done=!0;var o=this.tryEntries[0],n=o.completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var n=this;function a(U,N){return w.type="throw",w.arg=o,n.next=U,N&&(n.method="next",n.arg=f),!!N}for(var m=this.tryEntries.length-1;m>=0;--m){var u=this.tryEntries[m],w=u.completion;if(u.tryLoc==="root")return a("end");if(u.tryLoc<=this.prev){var A=i.call(u,"catchLoc"),T=i.call(u,"finallyLoc");if(A&&T){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(A){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else if(T){if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(o,n){for(var a=this.tryEntries.length-1;a>=0;--a){var m=this.tryEntries[a];if(m.tryLoc<=this.prev&&i.call(m,"finallyLoc")&&this.prev<m.finallyLoc){var u=m;break}}u&&(o==="break"||o==="continue")&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null);var w=u?u.completion:{};return w.type=o,w.arg=n,u?(this.method="next",this.next=u.finallyLoc,d):this.complete(w)},complete:function(o,n){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&n&&(this.next=n),d},finish:function(o){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.finallyLoc===o)return this.complete(a.completion,a.afterLoc),_(a),d}},catch:function(o){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc===o){var m=a.completion;if(m.type==="throw"){var u=m.arg;_(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(o,n,a){return this.delegate={iterator:k(o),resultName:n,nextLoc:a},this.method==="next"&&(this.arg=f),d}},r}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(at);var ct={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}},ft=(e,t)=>{const r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach((s,i)=>{const c=e.lengthBytesUTF8(s)+1,f=e._malloc(c);e.stringToUTF8(s,f,c),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*i,f,"i32")}),[t.length,r]};const lt="@ffmpeg/ffmpeg",ut="0.11.6",pt="FFmpeg WebAssembly version",dt="src/index.js",ht="src/index.d.ts",mt={example:"examples"},gt={start:"node scripts/server.js","start:worker":"node scripts/worker-server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},yt={"./src/node/index.js":"./src/browser/index.js"},bt={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},wt=["ffmpeg","WebAssembly","video"],vt="Jerome Wu <jeromewus@gmail.com>",_t="MIT",Ft={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},Et={node:">=12.16.1"},Lt="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",jt={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},$t={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},Me={name:lt,version:ut,description:pt,main:dt,types:ht,directories:mt,scripts:gt,browser:yt,repository:bt,keywords:wt,author:vt,license:_t,bugs:Ft,engines:Et,homepage:Lt,dependencies:jt,devDependencies:$t},kt=(typeof process<"u",`https://unpkg.com/@ffmpeg/core@${Me.devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`),Ot={corePath:kt};let ye=!1,De=()=>{};const Pt=e=>{ye=e},St=e=>{De=e},Ct=(e,t)=>{De({type:e,message:t}),ye&&console.log(`[${e}] ${t}`)};var x={logging:ye,setLogging:Pt,setCustomLogger:St,log:Ct};const At=e=>`
createFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${e}. Use another URL when calling createFFmpeg():

const ffmpeg = createFFmpeg({
  corePath: 'http://localhost:3000/ffmpeg-core.js',
});
`;var Le={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:At};const V=async(e,t)=>{x.log("info",`fetch ${e}`);const r=await(await fetch(e)).arrayBuffer();x.log("info",`${e} file size = ${r.byteLength} bytes`);const s=new Blob([r],{type:t}),i=URL.createObjectURL(s);return x.log("info",`${e} blob URL = ${i}`),i},Tt=async({corePath:e,workerPath:t,wasmPath:r})=>{if(typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope){if(typeof e!="string")throw Error("corePath should be a string!");const g=new URL(e,import.meta.url).href,p=await V(g,"application/javascript"),l=await V(r!==void 0?r:g.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),v=await V(t!==void 0?t:g.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(y=>{if(globalThis.importScripts(p),typeof createFFmpegCore>"u")throw Error(Le.CREATE_FFMPEG_CORE_IS_NOT_DEFINED(g));x.log("info","ffmpeg-core.js script loaded"),y({createFFmpegCore,corePath:p,wasmPath:l,workerPath:v})}):(x.log("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:p,wasmPath:l,workerPath:v}))}if(typeof e!="string")throw Error("corePath should be a string!");const s=new URL(e,import.meta.url).href,i=await V(s,"application/javascript"),c=await V(r!==void 0?r:s.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),f=await V(t!==void 0?t:s.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(g=>{const p=document.createElement("script"),l=()=>{if(p.removeEventListener("load",l),typeof createFFmpegCore>"u")throw Error(Le.CREATE_FFMPEG_CORE_IS_NOT_DEFINED(s));x.log("info","ffmpeg-core.js script loaded"),g({createFFmpegCore,corePath:i,wasmPath:c,workerPath:f})};p.src=i,p.type="text/javascript",p.addEventListener("load",l),document.getElementsByTagName("head")[0].appendChild(p)}):(x.log("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:i,wasmPath:c,workerPath:f}))},Nt=e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{t(s.result)},s.onerror=({target:{error:{code:i}}})=>{r(Error(`File could not be read! Code=${i}`))},s.readAsArrayBuffer(e)}),Rt=async e=>{let t=e;return typeof e>"u"?new Uint8Array:(typeof e=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(r=>r.charCodeAt(0)):t=await(await fetch(new URL(e,import.meta.url).href)).arrayBuffer():(e instanceof File||e instanceof Blob)&&(t=await Nt(e)),new Uint8Array(t))},Gt=Object.freeze(Object.defineProperty({__proto__:null,defaultOptions:Ot,getCreateFFmpegCore:Tt,fetchFile:Rt},Symbol.toStringTag,{value:"Module"})),Ie=st(Gt),{defaultArgs:Ut,baseOptions:Mt}=ct,Dt=ft,{defaultOptions:It,getCreateFFmpegCore:Bt}=Ie,{version:Wt}=Me,le=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var xt=(e={})=>{const{log:t,logger:r,progress:s,...i}={...Mt,...It,...e};let c=null,f=null,g=null,p=null,l=!1,v=()=>{},y=t,$=s,j=0,b=0,S=!1,O=0;const F=h=>{h==="FFMPEG_END"&&g!==null&&(g(),g=null,p=null,l=!1)},d=(h,_)=>{v({type:h,message:_}),y&&console.log(`[${h}] ${_}`)},C=h=>{const[_,E,k]=h.split(":");return parseFloat(_)*60*60+parseFloat(E)*60+parseFloat(k)},L=(h,_)=>{if(typeof h=="string")if(h.startsWith("  Duration")){const E=h.split(", ")[0].split(": ")[1],k=C(E);_({duration:k,ratio:O}),(j===0||j>k)&&(j=k,S=!0)}else if(S&&h.startsWith("    Stream")){const E=h.match(/([\d.]+) fps/);if(E){const k=parseFloat(E[1]);b=j*k}else b=0;S=!1}else if(h.startsWith("frame")||h.startsWith("size")){const E=h.split("time=")[1].split(" ")[0],k=C(E),P=h.match(/frame=\s*(\d+)/);if(b&&P){const o=parseFloat(P[1]);O=Math.min(o/b,1)}else O=k/j;_({ratio:O,time:k})}else h.startsWith("video:")&&(_({ratio:1}),j=0)},R=({type:h,message:_})=>{d(h,_),L(_,$),F(_)},K=async()=>{if(d("info","load ffmpeg-core"),c===null){d("info","loading ffmpeg-core");const{createFFmpegCore:h,corePath:_,workerPath:E,wasmPath:k}=await Bt(i);c=await h({mainScriptUrlOrBlob:_,printErr:P=>R({type:"fferr",message:P}),print:P=>R({type:"ffout",message:P}),locateFile:(P,o)=>{if(typeof window<"u"||typeof WorkerGlobalScope<"u"){if(typeof k<"u"&&P.endsWith("ffmpeg-core.wasm"))return k;if(typeof E<"u"&&P.endsWith("ffmpeg-core.worker.js"))return E}return o+P}}),f=c.cwrap(i.mainName||"proxy_main","number",["number","number"]),d("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},Z=()=>c!==null,q=(...h)=>{if(d("info",`run ffmpeg command: ${h.join(" ")}`),c===null)throw le;if(l)throw Error("ffmpeg.wasm can only run one command at a time");return l=!0,new Promise((_,E)=>{const k=[...Ut,...h].filter(P=>P.length!==0);g=_,p=E,f(...Dt(c,k))})},I=(h,..._)=>{if(d("info",`run FS.${h} ${_.map(E=>typeof E=="string"?E:`<${E.length} bytes binary file>`).join(" ")}`),c===null)throw le;{let E=null;try{E=c.FS[h](..._)}catch{throw Error(h==="readdir"?`ffmpeg.FS('readdir', '${_[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:h==="readFile"?`ffmpeg.FS('readFile', '${_[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return E}},re=()=>{if(c===null)throw le;p&&p("ffmpeg has exited"),l=!1;try{c.exit(1)}catch(h){d(h.message),p&&p(h)}finally{c=null,f=null,g=null,p=null}},z=h=>{$=h},se=h=>{v=h},ne=h=>{y=h};return d("info",`use ffmpeg.wasm v${Wt}`),{setProgress:z,setLogger:se,setLogging:ne,load:K,isLoaded:Z,run:q,exit:re,FS:I}};const qt=xt,{fetchFile:zt}=Ie;var je={createFFmpeg:qt,fetchFile:zt};function $e(e,t,r){const s=e.slice();return s[11]=t[r],s}function ke(e){let t,r=e[11].format+"",s,i;return{c(){t=B("option"),s=Re(r),i=H(),t.__value=e[11].format,t.value=t.__value},m(c,f){Ne(c,t,f),G(t,s),G(t,i)},p:M,d(c){c&&me(t)}}}function Yt(e){let t,r,s,i,c,f,g,p,l,v,y,$,j,b,S,O=e[4],F=[];for(let d=0;d<O.length;d+=1)F[d]=ke($e(e,O,d));return{c(){t=B("main"),r=B("h1"),r.textContent="Audio conversion",s=H(),i=B("label"),i.textContent="Convert your file to:",c=H(),f=B("select");for(let d=0;d<F.length;d+=1)F[d].c();g=H(),p=B("button"),p.textContent="Open file...",l=H(),v=B("input"),y=H(),$=B("progress"),D(i,"for","filetype"),D(f,"name","filetype"),D(f,"id","filetype"),D(f,"class","svelte-vngnnq"),D(v,"type","file"),D(v,"name","input"),D(v,"id","input"),He(v,"display","none"),$.value=e[2],D($,"id","conversion"),$.hidden=j=e[2]===0,D(t,"class","svelte-vngnnq")},m(d,C){Ne(d,t,C),G(t,r),G(t,s),G(t,i),G(t,c),G(t,f);for(let L=0;L<F.length;L+=1)F[L].m(f,null);_e(f,e[1]),G(t,g),G(t,p),G(t,l),G(t,v),e[9](v),G(t,y),G(t,$),b||(S=[ce(f,"change",e[8]),ce(p,"click",e[6]),ce(v,"change",e[7])],b=!0)},p(d,[C]){if(C&16){O=d[4];let L;for(L=0;L<O.length;L+=1){const R=$e(d,O,L);F[L]?F[L].p(R,C):(F[L]=ke(R),F[L].c(),F[L].m(f,null))}for(;L<F.length;L+=1)F[L].d(1);F.length=O.length}C&18&&_e(f,d[1]),C&4&&($.value=d[2]),C&4&&j!==(j=d[2]===0)&&($.hidden=j)},i:M,o:M,d(d){d&&me(t),Ye(F,d),e[9](null),b=!1,te(S)}}}function Vt(e,t){const r=document.createElement("a");r.href=e,r.download=t||e,document.body.appendChild(r),r.click(),document.body.removeChild(r)}function Ht(e,t,r){let s,i;const c=je.createFFmpeg({log:!0}),f=it(0);ve(e,f,b=>r(2,i=b)),c.setProgress(b=>f.set(Math.max(Math.min(b.ratio,100),.1))),c.isLoaded()||c.load();const g=[{format:"mp3",mime:"audio/mpeg3",type:"audio"},{format:"opus",mime:"audio/opus",type:"audio"},{format:"m4a",mime:"audio/mp4",type:"audio"}];document.body.addEventListener("drop",b=>{});let p=Ue("mp3");ve(e,p,b=>r(1,s=b));let l;async function v(){l&&l.click()}async function y(){l.files[0].size>512e6&&alert("File too big");const{name:b}=l.files[0],S="output."+s;for(;!c.isLoaded(););c.FS("writeFile",b,await je.fetchFile(l.files[0])),await c.run("-i",b,S);const O=c.FS("readFile",S);Vt(URL.createObjectURL(new Blob([O.buffer])),b+"."+s)}const $=b=>p.set(b.currentTarget.value);function j(b){ue[b?"unshift":"push"](()=>{l=b,r(0,l)})}return[l,s,i,f,g,p,v,y,$,j]}class Jt extends ot{constructor(t){super(),nt(this,t,Ht,Yt,Se,{})}}new Jt({target:document.getElementById("app")});
