const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CtJ-NHYI.js","assets/AboutView-Bk9wLTVb.css","assets/Materials-CRmMAxEM.js","assets/Materials-CizeWnX1.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Je={},ti=[],Gn=()=>{},Fm=()=>!1,Ol=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rh=t=>t.startsWith("onUpdate:"),Dt=Object.assign,sh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hE=Object.prototype.hasOwnProperty,We=(t,e)=>hE.call(t,e),ye=Array.isArray,ni=t=>Qo(t)==="[object Map]",Vl=t=>Qo(t)==="[object Set]",Jf=t=>Qo(t)==="[object Date]",Ae=t=>typeof t=="function",pt=t=>typeof t=="string",Xn=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",Um=t=>(Qe(t)||Ae(t))&&Ae(t.then)&&Ae(t.catch),Bm=Object.prototype.toString,Qo=t=>Bm.call(t),fE=t=>Qo(t).slice(8,-1),$m=t=>Qo(t)==="[object Object]",ih=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,po=nh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ll=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},dE=/-\w/g,yn=Ll(t=>t.replace(dE,e=>e.slice(1).toUpperCase())),pE=/\B([A-Z])/g,is=Ll(t=>t.replace(pE,"-$1").toLowerCase()),xl=Ll(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cc=Ll(t=>t?`on${xl(t)}`:""),Gr=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ml=t=>{const e=parseFloat(t);return isNaN(e)?t:e},mE=t=>{const e=pt(t)?Number(t):NaN;return isNaN(e)?t:e};let Zf;const Fl=()=>Zf||(Zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oh(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pt(r)?vE(r):oh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(pt(t)||Qe(t))return t}const gE=/;(?![^(]*\))/g,_E=/:([^]+)/,yE=/\/\*[^]*?\*\//g;function vE(t){const e={};return t.replace(yE,"").split(gE).forEach(n=>{if(n){const r=n.split(_E);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rn(t){let e="";if(pt(t))e=t;else if(ye(t))for(let n=0;n<t.length;n++){const r=rn(t[n]);r&&(e+=r+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const EE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",TE=nh(EE);function qm(t){return!!t||t===""}function IE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ul(t[r],e[r]);return n}function Ul(t,e){if(t===e)return!0;let n=Jf(t),r=Jf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Xn(t),r=Xn(e),n||r)return t===e;if(n=ye(t),r=ye(e),n||r)return n&&r?IE(t,e):!1;if(n=Qe(t),r=Qe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ul(t[o],e[o]))return!1}}return String(t)===String(e)}function wE(t,e){return t.findIndex(n=>Ul(n,e))}const Hm=t=>!!(t&&t.__v_isRef===!0),je=t=>pt(t)?t:t==null?"":ye(t)||Qe(t)&&(t.toString===Bm||!Ae(t.toString))?Hm(t)?je(t.value):JSON.stringify(t,Gm,2):String(t),Gm=(t,e)=>Hm(e)?Gm(t,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pc(r,i)+" =>"]=s,n),{})}:Vl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pc(n))}:Xn(e)?Pc(e):Qe(e)&&!ye(e)&&!$m(e)?String(e):e,Pc=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class AE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tn;try{return tn=this,e()}finally{tn=n}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function RE(){return tn}let et;const Nc=new WeakSet;class Wm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nc.has(this)&&(Nc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Km(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ed(this),Qm(this);const e=et,n=Sn;et=this,Sn=!0;try{return this.fn()}finally{Ym(this),et=e,Sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ch(e);this.deps=this.depsTail=void 0,ed(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lu(this)&&this.run()}get dirty(){return lu(this)}}let zm=0,mo,go;function Km(t,e=!1){if(t.flags|=8,e){t.next=go,go=t;return}t.next=mo,mo=t}function ah(){zm++}function lh(){if(--zm>0)return;if(go){let e=go;for(go=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mo;){let e=mo;for(mo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Qm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ym(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ch(r),SE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function lu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Co)||(t.globalVersion=Co,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lu(t))))return;t.flags|=2;const e=t.dep,n=et,r=Sn;et=t,Sn=!0;try{Qm(t);const s=t.fn(t._value);(e.version===0||Gr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{et=n,Sn=r,Ym(t),t.flags&=-3}}function ch(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ch(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function SE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Sn=!0;const Jm=[];function mr(){Jm.push(Sn),Sn=!1}function gr(){const t=Jm.pop();Sn=t===void 0?!0:t}function ed(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let Co=0;class bE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!et||!Sn||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new bE(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,Zm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=r)}return n}trigger(e){this.version++,Co++,this.notify(e)}notify(e){ah();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lh()}}}function Zm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Zm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const cu=new WeakMap,Ps=Symbol(""),uu=Symbol(""),Po=Symbol("");function jt(t,e,n){if(Sn&&et){let r=cu.get(t);r||cu.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new uh),s.map=r,s.key=n),s.track()}}function lr(t,e,n,r,s,i){const o=cu.get(t);if(!o){Co++;return}const l=c=>{c&&c.trigger()};if(ah(),e==="clear")o.forEach(l);else{const c=ye(t),u=c&&ih(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===Po||!Xn(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Po)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ps)),ni(t)&&l(o.get(uu)));break;case"delete":c||(l(o.get(Ps)),ni(t)&&l(o.get(uu)));break;case"set":ni(t)&&l(o.get(Ps));break}}lh()}function Ks(t){const e=He(t);return e===t?e:(jt(e,"iterate",Po),_n(t)?e:e.map(Nn))}function Bl(t){return jt(t=He(t),"iterate",Po),t}function Mr(t,e){return _r(t)?Ns(t)?fi(Nn(e)):fi(e):Nn(e)}const CE={__proto__:null,[Symbol.iterator](){return Dc(this,Symbol.iterator,t=>Mr(this,t))},concat(...t){return Ks(this).concat(...t.map(e=>ye(e)?Ks(e):e))},entries(){return Dc(this,"entries",t=>(t[1]=Mr(this,t[1]),t))},every(t,e){return nr(this,"every",t,e,void 0,arguments)},filter(t,e){return nr(this,"filter",t,e,n=>n.map(r=>Mr(this,r)),arguments)},find(t,e){return nr(this,"find",t,e,n=>Mr(this,n),arguments)},findIndex(t,e){return nr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nr(this,"findLast",t,e,n=>Mr(this,n),arguments)},findLastIndex(t,e){return nr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nr(this,"forEach",t,e,void 0,arguments)},includes(...t){return kc(this,"includes",t)},indexOf(...t){return kc(this,"indexOf",t)},join(t){return Ks(this).join(t)},lastIndexOf(...t){return kc(this,"lastIndexOf",t)},map(t,e){return nr(this,"map",t,e,void 0,arguments)},pop(){return Xi(this,"pop")},push(...t){return Xi(this,"push",t)},reduce(t,...e){return td(this,"reduce",t,e)},reduceRight(t,...e){return td(this,"reduceRight",t,e)},shift(){return Xi(this,"shift")},some(t,e){return nr(this,"some",t,e,void 0,arguments)},splice(...t){return Xi(this,"splice",t)},toReversed(){return Ks(this).toReversed()},toSorted(t){return Ks(this).toSorted(t)},toSpliced(...t){return Ks(this).toSpliced(...t)},unshift(...t){return Xi(this,"unshift",t)},values(){return Dc(this,"values",t=>Mr(this,t))}};function Dc(t,e,n){const r=Bl(t),s=r[e]();return r!==t&&!_n(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const PE=Array.prototype;function nr(t,e,n,r,s,i){const o=Bl(t),l=o!==t&&!_n(t),c=o[e];if(c!==PE[e]){const d=c.apply(t,i);return l?Nn(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,Mr(t,d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function td(t,e,n,r){const s=Bl(t);let i=n;return s!==t&&(_n(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Mr(t,l),c,t)}),s[e](i,...r)}function kc(t,e,n){const r=He(t);jt(r,"iterate",Po);const s=r[e](...n);return(s===-1||s===!1)&&dh(n[0])?(n[0]=He(n[0]),r[e](...n)):s}function Xi(t,e,n=[]){mr(),ah();const r=He(t)[e].apply(t,n);return lh(),gr(),r}const NE=nh("__proto__,__v_isRef,__isVue"),eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn));function DE(t){Xn(t)||(t=String(t));const e=He(this);return jt(e,"has",t),e.hasOwnProperty(t)}class tg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$E:ig:i?sg:rg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ye(e);if(!s){let c;if(o&&(c=CE[n]))return c;if(n==="hasOwnProperty")return DE}const l=Reflect.get(e,n,Gt(e)?e:r);if((Xn(n)?eg.has(n):NE(n))||(s||jt(e,"get",n),i))return l;if(Gt(l)){const c=o&&ih(n)?l:l.value;return s&&Qe(c)?fu(c):c}return Qe(l)?s?fu(l):Us(l):l}}class ng extends tg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ye(e)&&ih(n);if(!this._isShallow){const u=_r(i);if(!_n(r)&&!_r(r)&&(i=He(i),r=He(r)),!o&&Gt(i)&&!Gt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:We(e,n),c=Reflect.set(e,n,r,Gt(e)?e:s);return e===He(s)&&(l?Gr(r,i)&&lr(e,"set",n,r):lr(e,"add",n,r)),c}deleteProperty(e,n){const r=We(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&lr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Xn(n)||!eg.has(n))&&jt(e,"has",n),r}ownKeys(e){return jt(e,"iterate",ye(e)?"length":Ps),Reflect.ownKeys(e)}}class kE extends tg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const OE=new ng,VE=new kE,LE=new ng(!0);const hu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function xE(t,e,n){return function(...r){const s=this.__v_raw,i=He(s),o=ni(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?hu:e?fi:Nn;return!e&&jt(i,"iterate",c?uu:Ps),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function Na(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ME(t,e){const n={get(s){const i=this.__v_raw,o=He(i),l=He(s);t||(Gr(s,l)&&jt(o,"get",s),jt(o,"get",l));const{has:c}=Pa(o),u=e?hu:t?fi:Nn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&jt(He(s),"iterate",Ps),s.size},has(s){const i=this.__v_raw,o=He(i),l=He(s);return t||(Gr(s,l)&&jt(o,"has",s),jt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=He(l),u=e?hu:t?fi:Nn;return!t&&jt(c,"iterate",Ps),l.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return Dt(n,t?{add:Na("add"),set:Na("set"),delete:Na("delete"),clear:Na("clear")}:{add(s){!e&&!_n(s)&&!_r(s)&&(s=He(s));const i=He(this);return Pa(i).has.call(i,s)||(i.add(s),lr(i,"add",s,s)),this},set(s,i){!e&&!_n(i)&&!_r(i)&&(i=He(i));const o=He(this),{has:l,get:c}=Pa(o);let u=l.call(o,s);u||(s=He(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Gr(i,f)&&lr(o,"set",s,i):lr(o,"add",s,i),this},delete(s){const i=He(this),{has:o,get:l}=Pa(i);let c=o.call(i,s);c||(s=He(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&lr(i,"delete",s,void 0),u},clear(){const s=He(this),i=s.size!==0,o=s.clear();return i&&lr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xE(s,t,e)}),n}function hh(t,e){const n=ME(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(We(n,s)&&s in r?n:r,s,i)}const FE={get:hh(!1,!1)},UE={get:hh(!1,!0)},BE={get:hh(!0,!1)};const rg=new WeakMap,sg=new WeakMap,ig=new WeakMap,$E=new WeakMap;function jE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qE(t){return t.__v_skip||!Object.isExtensible(t)?0:jE(fE(t))}function Us(t){return _r(t)?t:fh(t,!1,OE,FE,rg)}function og(t){return fh(t,!1,LE,UE,sg)}function fu(t){return fh(t,!0,VE,BE,ig)}function fh(t,e,n,r,s){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=qE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ns(t){return _r(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function dh(t){return t?!!t.__v_raw:!1}function He(t){const e=t&&t.__v_raw;return e?He(e):t}function HE(t){return!We(t,"__v_skip")&&Object.isExtensible(t)&&jm(t,"__v_skip",!0),t}const Nn=t=>Qe(t)?Us(t):t,fi=t=>Qe(t)?fu(t):t;function Gt(t){return t?t.__v_isRef===!0:!1}function ke(t){return ag(t,!1)}function GE(t){return ag(t,!0)}function ag(t,e){return Gt(t)?t:new WE(t,e)}class WE{constructor(e,n){this.dep=new uh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:He(e),this._value=n?e:Nn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||_n(e)||_r(e);e=r?e:He(e),Gr(e,n)&&(this._rawValue=e,this._value=r?e:Nn(e),this.dep.trigger())}}function De(t){return Gt(t)?t.value:t}const zE={get:(t,e,n)=>e==="__v_raw"?t:De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Gt(s)&&!Gt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lg(t){return Ns(t)?t:new Proxy(t,zE)}class KE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return Km(this,!0),!0}get value(){const e=this.dep.track();return Xm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function QE(t,e,n=!1){let r,s;return Ae(t)?r=t:(r=t.get,s=t.set),new KE(r,s,n)}const Da={},sl=new WeakMap;let Is;function YE(t,e=!1,n=Is){if(n){let r=sl.get(n);r||sl.set(n,r=[]),r.push(t)}}function XE(t,e,n=Je){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=G=>s?G:_n(G)||s===!1||s===0?cr(G,1):cr(G);let f,d,m,_,N=!1,R=!1;if(Gt(t)?(d=()=>t.value,N=_n(t)):Ns(t)?(d=()=>u(t),N=!0):ye(t)?(R=!0,N=t.some(G=>Ns(G)||_n(G)),d=()=>t.map(G=>{if(Gt(G))return G.value;if(Ns(G))return u(G);if(Ae(G))return c?c(G,2):G()})):Ae(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){mr();try{m()}finally{gr()}}const G=Is;Is=f;try{return c?c(t,3,[_]):t(_)}finally{Is=G}}:d=Gn,e&&s){const G=d,oe=s===!0?1/0:s;d=()=>cr(G(),oe)}const C=RE(),L=()=>{f.stop(),C&&C.active&&sh(C.effects,f)};if(i&&e){const G=e;e=(...oe)=>{G(...oe),L()}}let B=R?new Array(t.length).fill(Da):Da;const K=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const oe=f.run();if(s||N||(R?oe.some((de,b)=>Gr(de,B[b])):Gr(oe,B))){m&&m();const de=Is;Is=f;try{const b=[oe,B===Da?void 0:R&&B[0]===Da?[]:B,_];B=oe,c?c(e,3,b):e(...b)}finally{Is=de}}}else f.run()};return l&&l(K),f=new Wm(d),f.scheduler=o?()=>o(K,!1):K,_=G=>YE(G,!1,f),m=f.onStop=()=>{const G=sl.get(f);if(G){if(c)c(G,4);else for(const oe of G)oe();sl.delete(f)}},e?r?K(!0):B=f.run():o?o(K.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function cr(t,e=1/0,n){if(e<=0||!Qe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Gt(t))cr(t.value,e,n);else if(ye(t))for(let r=0;r<t.length;r++)cr(t[r],e,n);else if(Vl(t)||ni(t))t.forEach(r=>{cr(r,e,n)});else if($m(t)){for(const r in t)cr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&cr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yo(t,e,n,r){try{return r?t(...r):t()}catch(s){$l(s,e,n)}}function Dn(t,e,n,r){if(Ae(t)){const s=Yo(t,e,n,r);return s&&Um(s)&&s.catch(i=>{$l(i,e,n)}),s}if(ye(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Dn(t[i],e,n,r));return s}}function $l(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Je;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){mr(),Yo(i,null,10,[t,c,u]),gr();return}}JE(t,n,s,r,o)}function JE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Yt=[];let Bn=-1;const ri=[];let Fr=null,Qs=0;const cg=Promise.resolve();let il=null;function ph(t){const e=il||cg;return t?e.then(this?t.bind(this):t):e}function ZE(t){let e=Bn+1,n=Yt.length;for(;e<n;){const r=e+n>>>1,s=Yt[r],i=No(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function mh(t){if(!(t.flags&1)){const e=No(t),n=Yt[Yt.length-1];!n||!(t.flags&2)&&e>=No(n)?Yt.push(t):Yt.splice(ZE(e),0,t),t.flags|=1,ug()}}function ug(){il||(il=cg.then(fg))}function eT(t){ye(t)?ri.push(...t):Fr&&t.id===-1?Fr.splice(Qs+1,0,t):t.flags&1||(ri.push(t),t.flags|=1),ug()}function nd(t,e,n=Bn+1){for(;n<Yt.length;n++){const r=Yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hg(t){if(ri.length){const e=[...new Set(ri)].sort((n,r)=>No(n)-No(r));if(ri.length=0,Fr){Fr.push(...e);return}for(Fr=e,Qs=0;Qs<Fr.length;Qs++){const n=Fr[Qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fr=null,Qs=0}}const No=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fg(t){try{for(Bn=0;Bn<Yt.length;Bn++){const e=Yt[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<Yt.length;Bn++){const e=Yt[Bn];e&&(e.flags&=-2)}Bn=-1,Yt.length=0,hg(),il=null,(Yt.length||ri.length)&&fg()}}let hn=null,dg=null;function ol(t){const e=hn;return hn=t,dg=t&&t.type.__scopeId||null,e}function Hn(t,e=hn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&cl(-1);const i=ol(e);let o;try{o=t(...s)}finally{ol(i),r._d&&cl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $n(t,e){if(hn===null)return t;const n=Wl(hn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Je]=e[s];i&&(Ae(i)&&(i={mounted:i,updated:i}),i.deep&&cr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ys(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(mr(),Dn(c,n,8,[t.el,l,t,e]),gr())}}function qa(t,e){if(Ht){let n=Ht.provides;const r=Ht.parent&&Ht.parent.provides;r===n&&(n=Ht.provides=Object.create(r)),n[t]=e}}function bn(t,e,n=!1){const r=Hg();if(r||si){let s=si?si._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ae(e)?e.call(r&&r.proxy):e}}const tT=Symbol.for("v-scx"),nT=()=>bn(tT);function _o(t,e,n){return pg(t,e,n)}function pg(t,e,n=Je){const{immediate:r,deep:s,flush:i,once:o}=n,l=Dt({},n),c=e&&r||!e&&i!=="post";let u;if(Oo){if(i==="sync"){const _=nT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Gn,_.resume=Gn,_.pause=Gn,_}}const f=Ht;l.call=(_,N,R)=>Dn(_,f,N,R);let d=!1;i==="post"?l.scheduler=_=>{cn(_,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(_,N)=>{N?_():mh(_)}),l.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=XE(t,e,l);return Oo&&(u?u.push(m):c&&m()),m}function rT(t,e,n){const r=this.proxy,s=pt(t)?t.includes(".")?mg(r,t):()=>r[t]:t.bind(r,r);let i;Ae(e)?i=e:(i=e.handler,n=e);const o=Jo(this),l=pg(s,i.bind(r),n);return o(),l}function mg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sT=Symbol("_vte"),gg=t=>t.__isTeleport,or=Symbol("_leaveCb"),ka=Symbol("_enterCb");function iT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xo(()=>{t.isMounted=!0}),Ag(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],_g={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},yg=t=>{const e=t.subTree;return e.component?yg(e.component):e},oT={name:"BaseTransition",props:_g,setup(t,{slots:e}){const n=Hg(),r=iT();return()=>{const s=e.default&&Tg(e.default(),!0);if(!s||!s.length)return;const i=vg(s),o=He(t),{mode:l}=o;if(r.isLeaving)return Oc(i);const c=rd(i);if(!c)return Oc(i);let u=du(c,o,r,n,d=>u=d);c.type!==Xt&&Do(c,u);let f=n.subTree&&rd(n.subTree);if(f&&f.type!==Xt&&!As(f,c)&&yg(n).type!==Xt){let d=du(f,o,r,n);if(Do(f,d),l==="out-in"&&c.type!==Xt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},Oc(i);l==="in-out"&&c.type!==Xt?d.delayLeave=(m,_,N)=>{const R=Eg(r,f);R[String(f.key)]=f,m[or]=()=>{_(),m[or]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{N(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function vg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Xt){e=n;break}}return e}const aT=oT;function Eg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function du(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:_,onAfterLeave:N,onLeaveCancelled:R,onBeforeAppear:C,onAppear:L,onAfterAppear:B,onAppearCancelled:K}=e,G=String(t.key),oe=Eg(n,t),de=(y,S)=>{y&&Dn(y,r,9,S)},b=(y,S)=>{const I=S[1];de(y,S),ye(y)?y.every(A=>A.length<=1)&&I():y.length<=1&&I()},T={mode:o,persisted:l,beforeEnter(y){let S=c;if(!n.isMounted)if(i)S=C||c;else return;y[or]&&y[or](!0);const I=oe[G];I&&As(t,I)&&I.el[or]&&I.el[or](),de(S,[y])},enter(y){let S=u,I=f,A=d;if(!n.isMounted)if(i)S=L||u,I=B||f,A=K||d;else return;let v=!1;const Se=y[ka]=Ke=>{v||(v=!0,Ke?de(A,[y]):de(I,[y]),T.delayedLeave&&T.delayedLeave(),y[ka]=void 0)};S?b(S,[y,Se]):Se()},leave(y,S){const I=String(t.key);if(y[ka]&&y[ka](!0),n.isUnmounting)return S();de(m,[y]);let A=!1;const v=y[or]=Se=>{A||(A=!0,S(),Se?de(R,[y]):de(N,[y]),y[or]=void 0,oe[I]===t&&delete oe[I])};oe[I]=t,_?b(_,[y,v]):v()},clone(y){const S=du(y,e,n,r,s);return s&&s(S),S}};return T}function Oc(t){if(jl(t))return t=Jr(t),t.children=null,t}function rd(t){if(!jl(t))return gg(t.type)&&t.children?vg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ae(n.default))return n.default()}}function Do(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Do(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(Tg(o.children,e,l))):(e||o.type!==Xt)&&r.push(l!=null?Jr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Si(t,e){return Ae(t)?Dt({name:t.name},e,{setup:t}):t}function Ig(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const al=new WeakMap;function yo(t,e,n,r,s=!1){if(ye(t)){t.forEach((N,R)=>yo(N,e&&(ye(e)?e[R]:e),n,r,s));return}if(vo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Je?l.refs={}:l.refs,d=l.setupState,m=He(d),_=d===Je?Fm:N=>We(m,N);if(u!=null&&u!==c){if(sd(e),pt(u))f[u]=null,_(u)&&(d[u]=null);else if(Gt(u)){u.value=null;const N=e;N.k&&(f[N.k]=null)}}if(Ae(c))Yo(c,l,12,[o,f]);else{const N=pt(c),R=Gt(c);if(N||R){const C=()=>{if(t.f){const L=N?_(c)?d[c]:f[c]:c.value;if(s)ye(L)&&sh(L,i);else if(ye(L))L.includes(i)||L.push(i);else if(N)f[c]=[i],_(c)&&(d[c]=f[c]);else{const B=[i];c.value=B,t.k&&(f[t.k]=B)}}else N?(f[c]=o,_(c)&&(d[c]=o)):R&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const L=()=>{C(),al.delete(t)};L.id=-1,al.set(t,L),cn(L,n)}else sd(t),C()}}}function sd(t){const e=al.get(t);e&&(e.flags|=8,al.delete(t))}Fl().requestIdleCallback;Fl().cancelIdleCallback;const vo=t=>!!t.type.__asyncLoader,jl=t=>t.type.__isKeepAlive;function lT(t,e){wg(t,"a",e)}function cT(t,e){wg(t,"da",e)}function wg(t,e,n=Ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ql(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jl(s.parent.vnode)&&uT(r,e,n,s),s=s.parent}}function uT(t,e,n,r){const s=ql(e,t,r,!0);gh(()=>{sh(r[e],s)},n)}function ql(t,e,n=Ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{mr();const l=Jo(n),c=Dn(e,n,t,o);return l(),gr(),c});return r?s.unshift(i):s.push(i),i}}const Ir=t=>(e,n=Ht)=>{(!Oo||t==="sp")&&ql(t,(...r)=>e(...r),n)},hT=Ir("bm"),Xo=Ir("m"),fT=Ir("bu"),dT=Ir("u"),Ag=Ir("bum"),gh=Ir("um"),pT=Ir("sp"),mT=Ir("rtg"),gT=Ir("rtc");function _T(t,e=Ht){ql("ec",t,e)}const yT="components";function Rg(t,e){return ET(yT,t,!0,e)||t}const vT=Symbol.for("v-ndc");function ET(t,e,n=!0,r=!1){const s=hn||Ht;if(s){const i=s.type;{const l=iI(i,!1);if(l&&(l===e||l===yn(e)||l===xl(yn(e))))return i}const o=id(s[t]||i[t],e)||id(s.appContext[t],e);return!o&&r?i:o}}function id(t,e){return t&&(t[e]||t[yn(e)]||t[xl(yn(e))])}function Ds(t,e,n,r){let s;const i=n,o=ye(t);if(o||pt(t)){const l=o&&Ns(t);let c=!1,u=!1;l&&(c=!_n(t),u=_r(t),t=Bl(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(c?u?fi(Nn(t[f])):Nn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Qe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const pu=t=>t?Gg(t)?Wl(t):pu(t.parent):null,Eo=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pu(t.parent),$root:t=>pu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bg(t),$forceUpdate:t=>t.f||(t.f=()=>{mh(t.update)}),$nextTick:t=>t.n||(t.n=ph.bind(t.proxy)),$watch:t=>rT.bind(t)}),Vc=(t,e)=>t!==Je&&!t.__isScriptSetup&&We(t,e),TT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vc(r,e))return o[e]=1,r[e];if(s!==Je&&We(s,e))return o[e]=2,s[e];if(We(i,e))return o[e]=3,i[e];if(n!==Je&&We(n,e))return o[e]=4,n[e];mu&&(o[e]=0)}}const u=Eo[e];let f,d;if(u)return e==="$attrs"&&jt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Je&&We(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,We(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vc(s,e)?(s[e]=n,!0):r!==Je&&We(r,e)?(r[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Je&&l[0]!=="$"&&We(t,l)||Vc(e,l)||We(i,l)||We(r,l)||We(Eo,l)||We(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function od(t){return ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mu=!0;function IT(t){const e=bg(t),n=t.proxy,r=t.ctx;mu=!1,e.beforeCreate&&ad(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:_,updated:N,activated:R,deactivated:C,beforeDestroy:L,beforeUnmount:B,destroyed:K,unmounted:G,render:oe,renderTracked:de,renderTriggered:b,errorCaptured:T,serverPrefetch:y,expose:S,inheritAttrs:I,components:A,directives:v,filters:Se}=e;if(u&&wT(u,r,null),o)for(const Y in o){const _e=o[Y];Ae(_e)&&(r[Y]=_e.bind(n))}if(s){const Y=s.call(n,n);Qe(Y)&&(t.data=Us(Y))}if(mu=!0,i)for(const Y in i){const _e=i[Y],be=Ae(_e)?_e.bind(n,n):Ae(_e.get)?_e.get.bind(n,n):Gn,Tt=!Ae(_e)&&Ae(_e.set)?_e.set.bind(n):Gn,Oe=_t({get:be,set:Tt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:ot=>Oe.value=ot})}if(l)for(const Y in l)Sg(l[Y],r,n,Y);if(c){const Y=Ae(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(_e=>{qa(_e,Y[_e])})}f&&ad(f,t,"c");function ce(Y,_e){ye(_e)?_e.forEach(be=>Y(be.bind(n))):_e&&Y(_e.bind(n))}if(ce(hT,d),ce(Xo,m),ce(fT,_),ce(dT,N),ce(lT,R),ce(cT,C),ce(_T,T),ce(gT,de),ce(mT,b),ce(Ag,B),ce(gh,G),ce(pT,y),ye(S))if(S.length){const Y=t.exposed||(t.exposed={});S.forEach(_e=>{Object.defineProperty(Y,_e,{get:()=>n[_e],set:be=>n[_e]=be,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===Gn&&(t.render=oe),I!=null&&(t.inheritAttrs=I),A&&(t.components=A),v&&(t.directives=v),y&&Ig(t)}function wT(t,e,n=Gn){ye(t)&&(t=gu(t));for(const r in t){const s=t[r];let i;Qe(s)?"default"in s?i=bn(s.from||r,s.default,!0):i=bn(s.from||r):i=bn(s),Gt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ad(t,e,n){Dn(ye(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,r){let s=r.includes(".")?mg(n,r):()=>n[r];if(pt(t)){const i=e[t];Ae(i)&&_o(s,i)}else if(Ae(t))_o(s,t.bind(n));else if(Qe(t))if(ye(t))t.forEach(i=>Sg(i,e,n,r));else{const i=Ae(t.handler)?t.handler.bind(n):e[t.handler];Ae(i)&&_o(s,i,t)}}function bg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ll(c,u,o,!0)),ll(c,e,o)),Qe(e)&&i.set(e,c),c}function ll(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ll(t,i,n,!0),s&&s.forEach(o=>ll(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=AT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const AT={data:ld,props:cd,emits:cd,methods:io,computed:io,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:io,directives:io,watch:ST,provide:ld,inject:RT};function ld(t,e){return e?t?function(){return Dt(Ae(t)?t.call(this,this):t,Ae(e)?e.call(this,this):e)}:e:t}function RT(t,e){return io(gu(t),gu(e))}function gu(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?Dt(Object.create(null),t,e):e}function cd(t,e){return t?ye(t)&&ye(e)?[...new Set([...t,...e])]:Dt(Object.create(null),od(t),od(e??{})):e}function ST(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const r in e)n[r]=Kt(t[r],e[r]);return n}function Cg(){return{app:null,config:{isNativeTag:Fm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bT=0;function CT(t,e){return function(r,s=null){Ae(r)||(r=Dt({},r)),s!=null&&!Qe(s)&&(s=null);const i=Cg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:bT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aI,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&Ae(f.install)?(o.add(f),f.install(u,...d)):Ae(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const _=u._ceVNode||st(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,Wl(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Dn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=si;si=u;try{return f()}finally{si=d}}};return u}}let si=null;const PT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${is(e)}Modifiers`];function NT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Je;let s=n;const i=e.startsWith("update:"),o=i&&PT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>pt(f)?f.trim():f)),o.number&&(s=n.map(Ml)));let l,c=r[l=Cc(e)]||r[l=Cc(yn(e))];!c&&i&&(c=r[l=Cc(is(e))]),c&&Dn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Dn(u,t,6,s)}}const DT=new WeakMap;function Pg(t,e,n=!1){const r=n?DT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ae(t)){const c=u=>{const f=Pg(u,e,!0);f&&(l=!0,Dt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Qe(t)&&r.set(t,null),null):(ye(i)?i.forEach(c=>o[c]=null):Dt(o,i),Qe(t)&&r.set(t,o),o)}function Hl(t,e){return!t||!Ol(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,is(e))||We(t,e))}function ud(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:_,ctx:N,inheritAttrs:R}=t,C=ol(t);let L,B;try{if(n.shapeFlag&4){const G=s||r,oe=G;L=qn(u.call(oe,G,f,d,_,m,N)),B=l}else{const G=e;L=qn(G.length>1?G(d,{attrs:l,slots:o,emit:c}):G(d,null)),B=e.props?l:kT(l)}}catch(G){To.length=0,$l(G,t,1),L=st(Xt)}let K=L;if(B&&R!==!1){const G=Object.keys(B),{shapeFlag:oe}=K;G.length&&oe&7&&(i&&G.some(rh)&&(B=OT(B,i)),K=Jr(K,B,!1,!0))}return n.dirs&&(K=Jr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&Do(K,n.transition),L=K,ol(C),L}const kT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ol(n))&&((e||(e={}))[n]=t[n]);return e},OT=(t,e)=>{const n={};for(const r in t)(!rh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function VT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!Hl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?hd(r,o,u):!0:!!o;return!1}function hd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hl(n,i))return!0}return!1}function LT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ng={},Dg=()=>Object.create(Ng),kg=t=>Object.getPrototypeOf(t)===Ng;function xT(t,e,n,r=!1){const s={},i=Dg();t.propsDefaults=Object.create(null),Og(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:og(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function MT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=He(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Hl(t.emitsOptions,m))continue;const _=e[m];if(c)if(We(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const N=yn(m);s[N]=_u(c,l,N,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Og(t,e,s,i)&&(u=!0);let f;for(const d in l)(!e||!We(e,d)&&((f=is(d))===d||!We(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=_u(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!We(e,d))&&(delete i[d],u=!0)}u&&lr(t.attrs,"set","")}function Og(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(po(c))continue;const u=e[c];let f;s&&We(s,f=yn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Hl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=He(n),u=l||Je;for(let f=0;f<i.length;f++){const d=i[f];n[d]=_u(s,c,d,u[d],t,!We(u,d))}}return o}function _u(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=We(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ae(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Jo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===is(n))&&(r=!0))}return r}const FT=new WeakMap;function Vg(t,e,n=!1){const r=n?FT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ae(t)){const f=d=>{c=!0;const[m,_]=Vg(d,e,!0);Dt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Qe(t)&&r.set(t,ti),ti;if(ye(i))for(let f=0;f<i.length;f++){const d=yn(i[f]);fd(d)&&(o[d]=Je)}else if(i)for(const f in i){const d=yn(f);if(fd(d)){const m=i[f],_=o[d]=ye(m)||Ae(m)?{type:m}:Dt({},m),N=_.type;let R=!1,C=!0;if(ye(N))for(let L=0;L<N.length;++L){const B=N[L],K=Ae(B)&&B.name;if(K==="Boolean"){R=!0;break}else K==="String"&&(C=!1)}else R=Ae(N)&&N.name==="Boolean";_[0]=R,_[1]=C,(R||We(_,"default"))&&l.push(d)}}const u=[o,l];return Qe(t)&&r.set(t,u),u}function fd(t){return t[0]!=="$"&&!po(t)}const _h=t=>t==="_"||t==="_ctx"||t==="$stable",yh=t=>ye(t)?t.map(qn):[qn(t)],UT=(t,e,n)=>{if(e._n)return e;const r=Hn((...s)=>yh(e(...s)),n);return r._c=!1,r},Lg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_h(s))continue;const i=t[s];if(Ae(i))e[s]=UT(s,i,r);else if(i!=null){const o=yh(i);e[s]=()=>o}}},xg=(t,e)=>{const n=yh(e);t.slots.default=()=>n},Mg=(t,e,n)=>{for(const r in e)(n||!_h(r))&&(t[r]=e[r])},BT=(t,e,n)=>{const r=t.slots=Dg();if(t.vnode.shapeFlag&32){const s=e._;s?(Mg(r,e,n),n&&jm(r,"_",s,!0)):Lg(e,r)}else e&&xg(t,e)},$T=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Je;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Mg(s,e,n):(i=!e.$stable,Lg(e,s)),o=e}else e&&(xg(t,e),o={default:1});if(i)for(const l in s)!_h(l)&&o[l]==null&&delete s[l]},cn=WT;function jT(t){return qT(t)}function qT(t,e){const n=Fl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:_=Gn,insertStaticContent:N}=t,R=(E,w,k,x=null,$=null,U=null,j=void 0,z=null,W=!!w.dynamicChildren)=>{if(E===w)return;E&&!As(E,w)&&(x=M(E),ot(E,$,U,!0),E=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:H,ref:pe,shapeFlag:re}=w;switch(H){case Gl:C(E,w,k,x);break;case Xt:L(E,w,k,x);break;case Ha:E==null&&B(w,k,x,j);break;case bt:A(E,w,k,x,$,U,j,z,W);break;default:re&1?oe(E,w,k,x,$,U,j,z,W):re&6?v(E,w,k,x,$,U,j,z,W):(re&64||re&128)&&H.process(E,w,k,x,$,U,j,z,W,ue)}pe!=null&&$?yo(pe,E&&E.ref,U,w||E,!w):pe==null&&E&&E.ref!=null&&yo(E.ref,null,U,E,!0)},C=(E,w,k,x)=>{if(E==null)r(w.el=l(w.children),k,x);else{const $=w.el=E.el;w.children!==E.children&&u($,w.children)}},L=(E,w,k,x)=>{E==null?r(w.el=c(w.children||""),k,x):w.el=E.el},B=(E,w,k,x)=>{[E.el,E.anchor]=N(E.children,w,k,x,E.el,E.anchor)},K=({el:E,anchor:w},k,x)=>{let $;for(;E&&E!==w;)$=m(E),r(E,k,x),E=$;r(w,k,x)},G=({el:E,anchor:w})=>{let k;for(;E&&E!==w;)k=m(E),s(E),E=k;s(w)},oe=(E,w,k,x,$,U,j,z,W)=>{if(w.type==="svg"?j="svg":w.type==="math"&&(j="mathml"),E==null)de(w,k,x,$,U,j,z,W);else{const H=E.el&&E.el._isVueCE?E.el:null;try{H&&H._beginPatch(),y(E,w,$,U,j,z,W)}finally{H&&H._endPatch()}}},de=(E,w,k,x,$,U,j,z)=>{let W,H;const{props:pe,shapeFlag:re,transition:fe,dirs:me}=E;if(W=E.el=o(E.type,U,pe&&pe.is,pe),re&8?f(W,E.children):re&16&&T(E.children,W,null,x,$,Lc(E,U),j,z),me&&ys(E,null,x,"created"),b(W,E,E.scopeId,j,x),pe){for(const Pe in pe)Pe!=="value"&&!po(Pe)&&i(W,Pe,null,pe[Pe],U,x);"value"in pe&&i(W,"value",null,pe.value,U),(H=pe.onVnodeBeforeMount)&&Fn(H,x,E)}me&&ys(E,null,x,"beforeMount");const we=HT($,fe);we&&fe.beforeEnter(W),r(W,w,k),((H=pe&&pe.onVnodeMounted)||we||me)&&cn(()=>{H&&Fn(H,x,E),we&&fe.enter(W),me&&ys(E,null,x,"mounted")},$)},b=(E,w,k,x,$)=>{if(k&&_(E,k),x)for(let U=0;U<x.length;U++)_(E,x[U]);if($){let U=$.subTree;if(w===U||$g(U.type)&&(U.ssContent===w||U.ssFallback===w)){const j=$.vnode;b(E,j,j.scopeId,j.slotScopeIds,$.parent)}}},T=(E,w,k,x,$,U,j,z,W=0)=>{for(let H=W;H<E.length;H++){const pe=E[H]=z?Ur(E[H]):qn(E[H]);R(null,pe,w,k,x,$,U,j,z)}},y=(E,w,k,x,$,U,j)=>{const z=w.el=E.el;let{patchFlag:W,dynamicChildren:H,dirs:pe}=w;W|=E.patchFlag&16;const re=E.props||Je,fe=w.props||Je;let me;if(k&&vs(k,!1),(me=fe.onVnodeBeforeUpdate)&&Fn(me,k,w,E),pe&&ys(w,E,k,"beforeUpdate"),k&&vs(k,!0),(re.innerHTML&&fe.innerHTML==null||re.textContent&&fe.textContent==null)&&f(z,""),H?S(E.dynamicChildren,H,z,k,x,Lc(w,$),U):j||_e(E,w,z,null,k,x,Lc(w,$),U,!1),W>0){if(W&16)I(z,re,fe,k,$);else if(W&2&&re.class!==fe.class&&i(z,"class",null,fe.class,$),W&4&&i(z,"style",re.style,fe.style,$),W&8){const we=w.dynamicProps;for(let Pe=0;Pe<we.length;Pe++){const Le=we[Pe],It=re[Le],wt=fe[Le];(wt!==It||Le==="value")&&i(z,Le,It,wt,$,k)}}W&1&&E.children!==w.children&&f(z,w.children)}else!j&&H==null&&I(z,re,fe,k,$);((me=fe.onVnodeUpdated)||pe)&&cn(()=>{me&&Fn(me,k,w,E),pe&&ys(w,E,k,"updated")},x)},S=(E,w,k,x,$,U,j)=>{for(let z=0;z<w.length;z++){const W=E[z],H=w[z],pe=W.el&&(W.type===bt||!As(W,H)||W.shapeFlag&198)?d(W.el):k;R(W,H,pe,null,x,$,U,j,!0)}},I=(E,w,k,x,$)=>{if(w!==k){if(w!==Je)for(const U in w)!po(U)&&!(U in k)&&i(E,U,w[U],null,$,x);for(const U in k){if(po(U))continue;const j=k[U],z=w[U];j!==z&&U!=="value"&&i(E,U,z,j,$,x)}"value"in k&&i(E,"value",w.value,k.value,$)}},A=(E,w,k,x,$,U,j,z,W)=>{const H=w.el=E?E.el:l(""),pe=w.anchor=E?E.anchor:l("");let{patchFlag:re,dynamicChildren:fe,slotScopeIds:me}=w;me&&(z=z?z.concat(me):me),E==null?(r(H,k,x),r(pe,k,x),T(w.children||[],k,pe,$,U,j,z,W)):re>0&&re&64&&fe&&E.dynamicChildren&&E.dynamicChildren.length===fe.length?(S(E.dynamicChildren,fe,k,$,U,j,z),(w.key!=null||$&&w===$.subTree)&&Fg(E,w,!0)):_e(E,w,k,pe,$,U,j,z,W)},v=(E,w,k,x,$,U,j,z,W)=>{w.slotScopeIds=z,E==null?w.shapeFlag&512?$.ctx.activate(w,k,x,j,W):Se(w,k,x,$,U,j,W):Ke(E,w,W)},Se=(E,w,k,x,$,U,j)=>{const z=E.component=eI(E,x,$);if(jl(E)&&(z.ctx.renderer=ue),tI(z,!1,j),z.asyncDep){if($&&$.registerDep(z,ce,j),!E.el){const W=z.subTree=st(Xt);L(null,W,w,k),E.placeholder=W.el}}else ce(z,E,w,k,$,U,j)},Ke=(E,w,k)=>{const x=w.component=E.component;if(VT(E,w,k))if(x.asyncDep&&!x.asyncResolved){Y(x,w,k);return}else x.next=w,x.update();else w.el=E.el,x.vnode=w},ce=(E,w,k,x,$,U,j)=>{const z=()=>{if(E.isMounted){let{next:re,bu:fe,u:me,parent:we,vnode:Pe}=E;{const Ft=Ug(E);if(Ft){re&&(re.el=Pe.el,Y(E,re,j)),Ft.asyncDep.then(()=>{E.isUnmounted||z()});return}}let Le=re,It;vs(E,!1),re?(re.el=Pe.el,Y(E,re,j)):re=Pe,fe&&ja(fe),(It=re.props&&re.props.onVnodeBeforeUpdate)&&Fn(It,we,re,Pe),vs(E,!0);const wt=ud(E),kt=E.subTree;E.subTree=wt,R(kt,wt,d(kt.el),M(kt),E,$,U),re.el=wt.el,Le===null&&LT(E,wt.el),me&&cn(me,$),(It=re.props&&re.props.onVnodeUpdated)&&cn(()=>Fn(It,we,re,Pe),$)}else{let re;const{el:fe,props:me}=w,{bm:we,m:Pe,parent:Le,root:It,type:wt}=E,kt=vo(w);vs(E,!1),we&&ja(we),!kt&&(re=me&&me.onVnodeBeforeMount)&&Fn(re,Le,w),vs(E,!0);{It.ce&&It.ce._def.shadowRoot!==!1&&It.ce._injectChildStyle(wt);const Ft=E.subTree=ud(E);R(null,Ft,k,x,E,$,U),w.el=Ft.el}if(Pe&&cn(Pe,$),!kt&&(re=me&&me.onVnodeMounted)){const Ft=w;cn(()=>Fn(re,Le,Ft),$)}(w.shapeFlag&256||Le&&vo(Le.vnode)&&Le.vnode.shapeFlag&256)&&E.a&&cn(E.a,$),E.isMounted=!0,w=k=x=null}};E.scope.on();const W=E.effect=new Wm(z);E.scope.off();const H=E.update=W.run.bind(W),pe=E.job=W.runIfDirty.bind(W);pe.i=E,pe.id=E.uid,W.scheduler=()=>mh(pe),vs(E,!0),H()},Y=(E,w,k)=>{w.component=E;const x=E.vnode.props;E.vnode=w,E.next=null,MT(E,w.props,x,k),$T(E,w.children,k),mr(),nd(E),gr()},_e=(E,w,k,x,$,U,j,z,W=!1)=>{const H=E&&E.children,pe=E?E.shapeFlag:0,re=w.children,{patchFlag:fe,shapeFlag:me}=w;if(fe>0){if(fe&128){Tt(H,re,k,x,$,U,j,z,W);return}else if(fe&256){be(H,re,k,x,$,U,j,z,W);return}}me&8?(pe&16&&Be(H,$,U),re!==H&&f(k,re)):pe&16?me&16?Tt(H,re,k,x,$,U,j,z,W):Be(H,$,U,!0):(pe&8&&f(k,""),me&16&&T(re,k,x,$,U,j,z,W))},be=(E,w,k,x,$,U,j,z,W)=>{E=E||ti,w=w||ti;const H=E.length,pe=w.length,re=Math.min(H,pe);let fe;for(fe=0;fe<re;fe++){const me=w[fe]=W?Ur(w[fe]):qn(w[fe]);R(E[fe],me,k,null,$,U,j,z,W)}H>pe?Be(E,$,U,!0,!1,re):T(w,k,x,$,U,j,z,W,re)},Tt=(E,w,k,x,$,U,j,z,W)=>{let H=0;const pe=w.length;let re=E.length-1,fe=pe-1;for(;H<=re&&H<=fe;){const me=E[H],we=w[H]=W?Ur(w[H]):qn(w[H]);if(As(me,we))R(me,we,k,null,$,U,j,z,W);else break;H++}for(;H<=re&&H<=fe;){const me=E[re],we=w[fe]=W?Ur(w[fe]):qn(w[fe]);if(As(me,we))R(me,we,k,null,$,U,j,z,W);else break;re--,fe--}if(H>re){if(H<=fe){const me=fe+1,we=me<pe?w[me].el:x;for(;H<=fe;)R(null,w[H]=W?Ur(w[H]):qn(w[H]),k,we,$,U,j,z,W),H++}}else if(H>fe)for(;H<=re;)ot(E[H],$,U,!0),H++;else{const me=H,we=H,Pe=new Map;for(H=we;H<=fe;H++){const Ye=w[H]=W?Ur(w[H]):qn(w[H]);Ye.key!=null&&Pe.set(Ye.key,H)}let Le,It=0;const wt=fe-we+1;let kt=!1,Ft=0;const Ut=new Array(wt);for(H=0;H<wt;H++)Ut[H]=0;for(H=me;H<=re;H++){const Ye=E[H];if(It>=wt){ot(Ye,$,U,!0);continue}let nt;if(Ye.key!=null)nt=Pe.get(Ye.key);else for(Le=we;Le<=fe;Le++)if(Ut[Le-we]===0&&As(Ye,w[Le])){nt=Le;break}nt===void 0?ot(Ye,$,U,!0):(Ut[nt-we]=H+1,nt>=Ft?Ft=nt:kt=!0,R(Ye,w[nt],k,null,$,U,j,z,W),It++)}const Tn=kt?GT(Ut):ti;for(Le=Tn.length-1,H=wt-1;H>=0;H--){const Ye=we+H,nt=w[Ye],er=w[Ye+1],In=Ye+1<pe?er.el||Bg(er):x;Ut[H]===0?R(null,nt,k,In,$,U,j,z,W):kt&&(Le<0||H!==Tn[Le]?Oe(nt,k,In,2):Le--)}}},Oe=(E,w,k,x,$=null)=>{const{el:U,type:j,transition:z,children:W,shapeFlag:H}=E;if(H&6){Oe(E.component.subTree,w,k,x);return}if(H&128){E.suspense.move(w,k,x);return}if(H&64){j.move(E,w,k,ue);return}if(j===bt){r(U,w,k);for(let re=0;re<W.length;re++)Oe(W[re],w,k,x);r(E.anchor,w,k);return}if(j===Ha){K(E,w,k);return}if(x!==2&&H&1&&z)if(x===0)z.beforeEnter(U),r(U,w,k),cn(()=>z.enter(U),$);else{const{leave:re,delayLeave:fe,afterLeave:me}=z,we=()=>{E.ctx.isUnmounted?s(U):r(U,w,k)},Pe=()=>{U._isLeaving&&U[or](!0),re(U,()=>{we(),me&&me()})};fe?fe(U,we,Pe):Pe()}else r(U,w,k)},ot=(E,w,k,x=!1,$=!1)=>{const{type:U,props:j,ref:z,children:W,dynamicChildren:H,shapeFlag:pe,patchFlag:re,dirs:fe,cacheIndex:me}=E;if(re===-2&&($=!1),z!=null&&(mr(),yo(z,null,k,E,!0),gr()),me!=null&&(w.renderCache[me]=void 0),pe&256){w.ctx.deactivate(E);return}const we=pe&1&&fe,Pe=!vo(E);let Le;if(Pe&&(Le=j&&j.onVnodeBeforeUnmount)&&Fn(Le,w,E),pe&6)Ie(E.component,k,x);else{if(pe&128){E.suspense.unmount(k,x);return}we&&ys(E,null,w,"beforeUnmount"),pe&64?E.type.remove(E,w,k,ue,x):H&&!H.hasOnce&&(U!==bt||re>0&&re&64)?Be(H,w,k,!1,!0):(U===bt&&re&384||!$&&pe&16)&&Be(W,w,k),x&&te(E)}(Pe&&(Le=j&&j.onVnodeUnmounted)||we)&&cn(()=>{Le&&Fn(Le,w,E),we&&ys(E,null,w,"unmounted")},k)},te=E=>{const{type:w,el:k,anchor:x,transition:$}=E;if(w===bt){ne(k,x);return}if(w===Ha){G(E);return}const U=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:j,delayLeave:z}=$,W=()=>j(k,U);z?z(E.el,U,W):W()}else U()},ne=(E,w)=>{let k;for(;E!==w;)k=m(E),s(E),E=k;s(w)},Ie=(E,w,k)=>{const{bum:x,scope:$,job:U,subTree:j,um:z,m:W,a:H}=E;dd(W),dd(H),x&&ja(x),$.stop(),U&&(U.flags|=8,ot(j,E,w,k)),z&&cn(z,w),cn(()=>{E.isUnmounted=!0},w)},Be=(E,w,k,x=!1,$=!1,U=0)=>{for(let j=U;j<E.length;j++)ot(E[j],w,k,x,$)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),k=w&&w[sT];return k?m(k):w};let J=!1;const X=(E,w,k)=>{let x;E==null?w._vnode&&(ot(w._vnode,null,null,!0),x=w._vnode.component):R(w._vnode||null,E,w,null,null,null,k),w._vnode=E,J||(J=!0,nd(x),hg(),J=!1)},ue={p:R,um:ot,m:Oe,r:te,mt:Se,mc:T,pc:_e,pbc:S,n:M,o:t};return{render:X,hydrate:void 0,createApp:CT(X)}}function Lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function HT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fg(t,e,n=!1){const r=t.children,s=e.children;if(ye(r)&&ye(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ur(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Fg(o,l)),l.type===Gl&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=i+(t.type===bt?1:0)),l.type===Xt&&!l.el&&(l.el=o.el)}}function GT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ug(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ug(e)}function dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Bg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Bg(e.subTree):null}const $g=t=>t.__isSuspense;function WT(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):eT(t)}const bt=Symbol.for("v-fgt"),Gl=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),To=[];let fn=null;function se(t=!1){To.push(fn=t?null:[])}function zT(){To.pop(),fn=To[To.length-1]||null}let ko=1;function cl(t,e=!1){ko+=t,t<0&&fn&&e&&(fn.hasOnce=!0)}function jg(t){return t.dynamicChildren=ko>0?fn||ti:null,zT(),ko>0&&fn&&fn.push(t),t}function ie(t,e,n,r,s,i){return jg(D(t,e,n,r,s,i,!0))}function yu(t,e,n,r,s){return jg(st(t,e,n,r,s,!0))}function ul(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const qg=({key:t})=>t??null,Ga=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pt(t)||Gt(t)||Ae(t)?{i:hn,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qg(e),ref:e&&Ga(e),scopeId:dg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return l?(vh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pt(n)?8:16),ko>0&&!o&&fn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&fn.push(c),c}const st=KT;function KT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vT)&&(t=Xt),ul(t)){const l=Jr(t,e,!0);return n&&vh(l,n),ko>0&&!i&&fn&&(l.shapeFlag&6?fn[fn.indexOf(t)]=l:fn.push(l)),l.patchFlag=-2,l}if(oI(t)&&(t=t.__vccOpts),e){e=QT(e);let{class:l,style:c}=e;l&&!pt(l)&&(e.class=rn(l)),Qe(c)&&(dh(c)&&!ye(c)&&(c=Dt({},c)),e.style=oh(c))}const o=pt(t)?1:$g(t)?128:gg(t)?64:Qe(t)?4:Ae(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function QT(t){return t?dh(t)||kg(t)?Dt({},t):t:null}function Jr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?XT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qg(u),ref:e&&e.ref?n&&i?ye(i)?i.concat(Ga(e)):[i,Ga(e)]:Ga(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jr(t.ssContent),ssFallback:t.ssFallback&&Jr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Do(f,c.clone(f)),f}function St(t=" ",e=0){return st(Gl,null,t,e)}function YT(t,e){const n=st(Ha,null,t);return n.staticCount=e,n}function xe(t="",e=!1){return e?(se(),yu(Xt,null,t)):st(Xt,null,t)}function qn(t){return t==null||typeof t=="boolean"?st(Xt):ye(t)?st(bt,null,t.slice()):ul(t)?Ur(t):st(Gl,null,String(t))}function Ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jr(t)}function vh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ye(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!kg(e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ae(e)?(e={default:e,_ctx:hn},n=32):(e=String(e),r&64?(n=16,e=[St(e)]):n=8);t.children=e,t.shapeFlag|=n}function XT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rn([e.class,r.class]));else if(s==="style")e.style=oh([e.style,r.style]);else if(Ol(s)){const i=e[s],o=r[s];o&&i!==o&&!(ye(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fn(t,e,n,r=null){Dn(t,e,7,[n,r])}const JT=Cg();let ZT=0;function eI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||JT,i={uid:ZT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new AE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vg(r,s),emitsOptions:Pg(r,s),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:r.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=NT.bind(null,i),t.ce&&t.ce(i),i}let Ht=null;const Hg=()=>Ht||hn;let hl,vu;{const t=Fl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};hl=e("__VUE_INSTANCE_SETTERS__",n=>Ht=n),vu=e("__VUE_SSR_SETTERS__",n=>Oo=n)}const Jo=t=>{const e=Ht;return hl(t),t.scope.on(),()=>{t.scope.off(),hl(e)}},pd=()=>{Ht&&Ht.scope.off(),hl(null)};function Gg(t){return t.vnode.shapeFlag&4}let Oo=!1;function tI(t,e=!1,n=!1){e&&vu(e);const{props:r,children:s}=t.vnode,i=Gg(t);xT(t,r,i,e),BT(t,s,n||e);const o=i?nI(t,e):void 0;return e&&vu(!1),o}function nI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,TT);const{setup:r}=n;if(r){mr();const s=t.setupContext=r.length>1?sI(t):null,i=Jo(t),o=Yo(r,t,0,[t.props,s]),l=Um(o);if(gr(),i(),(l||t.sp)&&!vo(t)&&Ig(t),l){if(o.then(pd,pd),e)return o.then(c=>{md(t,c)}).catch(c=>{$l(c,t,0)});t.asyncDep=o}else md(t,o)}else Wg(t)}function md(t,e,n){Ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=lg(e)),Wg(t)}function Wg(t,e,n){const r=t.type;t.render||(t.render=r.render||Gn);{const s=Jo(t);mr();try{IT(t)}finally{gr(),s()}}}const rI={get(t,e){return jt(t,"get",""),t[e]}};function sI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rI),slots:t.slots,emit:t.emit,expose:e}}function Wl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lg(HE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Eo)return Eo[n](t)},has(e,n){return n in e||n in Eo}})):t.proxy}function iI(t,e=!0){return Ae(t)?t.displayName||t.name:t.name||e&&t.__name}function oI(t){return Ae(t)&&"__vccOpts"in t}const _t=(t,e)=>QE(t,e,Oo);function Eh(t,e,n){try{cl(-1);const r=arguments.length;return r===2?Qe(e)&&!ye(e)?ul(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ul(n)&&(n=[n]),st(t,e,n))}finally{cl(1)}}const aI="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Eu;const gd=typeof window<"u"&&window.trustedTypes;if(gd)try{Eu=gd.createPolicy("vue",{createHTML:t=>t})}catch{}const zg=Eu?t=>Eu.createHTML(t):t=>t,lI="http://www.w3.org/2000/svg",cI="http://www.w3.org/1998/Math/MathML",ir=typeof document<"u"?document:null,_d=ir&&ir.createElement("template"),uI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ir.createElementNS(lI,t):e==="mathml"?ir.createElementNS(cI,t):n?ir.createElement(t,{is:n}):ir.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ir.createTextNode(t),createComment:t=>ir.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ir.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_d.innerHTML=zg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=_d.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vr="transition",Ji="animation",Vo=Symbol("_vtc"),Kg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hI=Dt({},_g,Kg),fI=t=>(t.displayName="Transition",t.props=hI,t),Lk=fI((t,{slots:e})=>Eh(aT,dI(t),e)),Es=(t,e=[])=>{ye(t)?t.forEach(n=>n(...e)):t&&t(...e)},yd=t=>t?ye(t)?t.some(e=>e.length>1):t.length>1:!1;function dI(t){const e={};for(const A in t)A in Kg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,N=pI(s),R=N&&N[0],C=N&&N[1],{onBeforeEnter:L,onEnter:B,onEnterCancelled:K,onLeave:G,onLeaveCancelled:oe,onBeforeAppear:de=L,onAppear:b=B,onAppearCancelled:T=K}=e,y=(A,v,Se,Ke)=>{A._enterCancelled=Ke,Ts(A,v?f:l),Ts(A,v?u:o),Se&&Se()},S=(A,v)=>{A._isLeaving=!1,Ts(A,d),Ts(A,_),Ts(A,m),v&&v()},I=A=>(v,Se)=>{const Ke=A?b:B,ce=()=>y(v,A,Se);Es(Ke,[v,ce]),vd(()=>{Ts(v,A?c:i),rr(v,A?f:l),yd(Ke)||Ed(v,r,R,ce)})};return Dt(e,{onBeforeEnter(A){Es(L,[A]),rr(A,i),rr(A,o)},onBeforeAppear(A){Es(de,[A]),rr(A,c),rr(A,u)},onEnter:I(!1),onAppear:I(!0),onLeave(A,v){A._isLeaving=!0;const Se=()=>S(A,v);rr(A,d),A._enterCancelled?(rr(A,m),wd(A)):(wd(A),rr(A,m)),vd(()=>{A._isLeaving&&(Ts(A,d),rr(A,_),yd(G)||Ed(A,r,C,Se))}),Es(G,[A,Se])},onEnterCancelled(A){y(A,!1,void 0,!0),Es(K,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Es(T,[A])},onLeaveCancelled(A){S(A),Es(oe,[A])}})}function pI(t){if(t==null)return null;if(Qe(t))return[xc(t.enter),xc(t.leave)];{const e=xc(t);return[e,e]}}function xc(t){return mE(t)}function rr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vo]||(t[Vo]=new Set)).add(e)}function Ts(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Vo];n&&(n.delete(e),n.size||(t[Vo]=void 0))}function vd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mI=0;function Ed(t,e,n,r){const s=t._endId=++mI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=gI(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,m)}function gI(t,e){const n=window.getComputedStyle(t),r=N=>(n[N]||"").split(", "),s=r(`${Vr}Delay`),i=r(`${Vr}Duration`),o=Td(s,i),l=r(`${Ji}Delay`),c=r(`${Ji}Duration`),u=Td(l,c);let f=null,d=0,m=0;e===Vr?o>0&&(f=Vr,d=o,m=i.length):e===Ji?u>0&&(f=Ji,d=u,m=c.length):(d=Math.max(o,u),f=d>0?o>u?Vr:Ji:null,m=f?f===Vr?i.length:c.length:0);const _=f===Vr&&/\b(?:transform|all)(?:,|$)/.test(r(`${Vr}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:_}}function Td(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Id(n)+Id(t[r])))}function Id(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wd(t){return(t?t.ownerDocument:document).body.offsetHeight}function _I(t,e,n){const r=t[Vo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ad=Symbol("_vod"),yI=Symbol("_vsh"),vI=Symbol(""),EI=/(?:^|;)\s*display\s*:/;function TI(t,e,n){const r=t.style,s=pt(n);let i=!1;if(n&&!s){if(e)if(pt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wa(r,l,"")}else for(const o in e)n[o]==null&&Wa(r,o,"");for(const o in n)o==="display"&&(i=!0),Wa(r,o,n[o])}else if(s){if(e!==n){const o=r[vI];o&&(n+=";"+o),r.cssText=n,i=EI.test(n)}}else e&&t.removeAttribute("style");Ad in t&&(t[Ad]=i?r.display:"",t[yI]&&(r.display="none"))}const Rd=/\s*!important$/;function Wa(t,e,n){if(ye(n))n.forEach(r=>Wa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=II(t,e);Rd.test(n)?t.setProperty(is(r),n.replace(Rd,""),"important"):t[r]=n}}const Sd=["Webkit","Moz","ms"],Mc={};function II(t,e){const n=Mc[e];if(n)return n;let r=yn(e);if(r!=="filter"&&r in t)return Mc[e]=r;r=xl(r);for(let s=0;s<Sd.length;s++){const i=Sd[s]+r;if(i in t)return Mc[e]=i}return e}const bd="http://www.w3.org/1999/xlink";function Cd(t,e,n,r,s,i=TE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bd,e.slice(6,e.length)):t.setAttributeNS(bd,e,n):n==null||i&&!qm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Xn(n)?String(n):n)}function Pd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Rs(t,e,n,r){t.addEventListener(e,n,r)}function wI(t,e,n,r){t.removeEventListener(e,n,r)}const Nd=Symbol("_vei");function AI(t,e,n,r,s=null){const i=t[Nd]||(t[Nd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=RI(e);if(r){const u=i[e]=CI(r,s);Rs(t,l,u,c)}else o&&(wI(t,l,o,c),i[e]=void 0)}}const Dd=/(?:Once|Passive|Capture)$/;function RI(t){let e;if(Dd.test(t)){e={};let r;for(;r=t.match(Dd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let Fc=0;const SI=Promise.resolve(),bI=()=>Fc||(SI.then(()=>Fc=0),Fc=Date.now());function CI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dn(PI(r,n.value),e,5,[r])};return n.value=t,n.attached=bI(),n}function PI(t,e){if(ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,NI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_I(t,r,o):e==="style"?TI(t,n,r):Ol(e)?rh(e)||AI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DI(t,e,r,o))?(Pd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!pt(r))?Pd(t,yn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cd(t,e,r,o))};function DI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kd(e)&&Ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kd(e)&&pt(n)?!1:e in t}const fl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?n=>ja(e,n):e};function kI(t){t.target.composing=!0}function Od(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ii=Symbol("_assign");function Vd(t,e,n){return e&&(t=t.trim()),n&&(t=Ml(t)),t}const ar={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ii]=fl(s);const i=r||s.props&&s.props.type==="number";Rs(t,e?"change":"input",o=>{o.target.composing||t[ii](Vd(t.value,n,i))}),(n||i)&&Rs(t,"change",()=>{t.value=Vd(t.value,n,i)}),e||(Rs(t,"compositionstart",kI),Rs(t,"compositionend",Od),Rs(t,"change",Od))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ii]=fl(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ml(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},OI={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Vl(e);Rs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ml(dl(o)):dl(o));t[ii](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ph(()=>{t._assigning=!1})}),t[ii]=fl(r)},mounted(t,{value:e}){Ld(t,e)},beforeUpdate(t,e,n){t[ii]=fl(n)},updated(t,{value:e}){t._assigning||Ld(t,e)}};function Ld(t,e){const n=t.multiple,r=ye(e);if(!(n&&!r&&!Vl(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=dl(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=wE(e,l)>-1}else o.selected=e.has(l);else if(Ul(dl(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function dl(t){return"_value"in t?t._value:t.value}const VI=["ctrl","shift","alt","meta"],LI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VI.some(n=>t[`${n}Key`]&&!e.includes(n))},Wr=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=LI[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},xI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},MI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=is(s.key);if(e.some(o=>o===i||xI[o]===i))return t(s)}))},FI=Dt({patchProp:NI},uI);let xd;function UI(){return xd||(xd=jT(FI))}const BI=((...t)=>{const e=UI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jI(r);if(!s)return;const i=e._component;!Ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,$I(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function $I(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jI(t){return pt(t)?document.querySelector(t):t}const qI="/assets/Logo%20m_k-DM-xNOLj.png";/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ys=typeof document<"u";function Qg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function HI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Qg(t.default)}const Ge=Object.assign;function Uc(t,e){const n={};for(const r in e){const s=e[r];n[r]=kn(s)?s.map(t):t(s)}return n}const Io=()=>{},kn=Array.isArray;function Md(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Yg=/#/g,GI=/&/g,WI=/\//g,zI=/=/g,KI=/\?/g,Xg=/\+/g,QI=/%5B/g,YI=/%5D/g,Jg=/%5E/g,XI=/%60/g,Zg=/%7B/g,JI=/%7C/g,e_=/%7D/g,ZI=/%20/g;function Th(t){return t==null?"":encodeURI(""+t).replace(JI,"|").replace(QI,"[").replace(YI,"]")}function ew(t){return Th(t).replace(Zg,"{").replace(e_,"}").replace(Jg,"^")}function Tu(t){return Th(t).replace(Xg,"%2B").replace(ZI,"+").replace(Yg,"%23").replace(GI,"%26").replace(XI,"`").replace(Zg,"{").replace(e_,"}").replace(Jg,"^")}function tw(t){return Tu(t).replace(zI,"%3D")}function nw(t){return Th(t).replace(Yg,"%23").replace(KI,"%3F")}function rw(t){return nw(t).replace(WI,"%2F")}function Lo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const sw=/\/$/,iw=t=>t.replace(sw,"");function Bc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=cw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Lo(o)}}function ow(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&di(e.matched[r],n.matched[s])&&t_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function di(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function t_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!lw(t[n],e[n]))return!1;return!0}function lw(t,e){return kn(t)?Ud(t,e):kn(e)?Ud(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Ud(t,e){return kn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Iu=(function(t){return t.pop="pop",t.push="push",t})({}),$c=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function uw(t){if(!t)if(Ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iw(t)}const hw=/^[^#]+#/;function fw(t,e){return t.replace(hw,"#")+e}function dw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zl=()=>({left:window.scrollX,top:window.scrollY});function pw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bd(t,e){return(history.state?history.state.position-e:-1)+t}const wu=new Map;function mw(t,e){wu.set(t,e)}function gw(t){const e=wu.get(t);return wu.delete(t),e}function _w(t){return typeof t=="string"||t&&typeof t=="object"}function n_(t){return typeof t=="string"||typeof t=="symbol"}let ct=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const r_=Symbol("");ct.MATCHER_NOT_FOUND+"",ct.NAVIGATION_GUARD_REDIRECT+"",ct.NAVIGATION_ABORTED+"",ct.NAVIGATION_CANCELLED+"",ct.NAVIGATION_DUPLICATED+"";function pi(t,e){return Ge(new Error,{type:t,[r_]:!0},e)}function sr(t,e){return t instanceof Error&&r_ in t&&(e==null||!!(t.type&e))}const yw=["params","query","hash"];function vw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of yw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Ew(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Xg," "),i=s.indexOf("="),o=Lo(i<0?s:s.slice(0,i)),l=i<0?null:Lo(s.slice(i+1));if(o in e){let c=e[o];kn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function $d(t){let e="";for(let n in t){const r=t[n];if(n=tw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(kn(r)?r.map(s=>s&&Tu(s)):[r&&Tu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Tw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=kn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Iw=Symbol(""),jd=Symbol(""),Kl=Symbol(""),Ih=Symbol(""),Au=Symbol("");function Zi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Br(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(pi(ct.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):_w(m)?c(pi(ct.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Qg(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Br(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=HI(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const m=(d.__vccOpts||d)[e];return m&&Br(m,n,r,o,l,s)()}))}}return i}function ww(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>di(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>di(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Aw=()=>location.protocol+"//"+location.host;function s_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Fd(l,"")}return Fd(n,t)+r+s}function Rw(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=s_(t,location),N=n.value,R=e.value;let C=0;if(m){if(n.value=_,e.value=m,o&&o===N){o=null;return}C=R?m.position-R.position:0}else r(_);s.forEach(L=>{L(n.value,N,{delta:C,type:Iu.pop,direction:C?C>0?$c.forward:$c.back:$c.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const N=s.indexOf(m);N>-1&&s.splice(N,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ge({},m.state,{scroll:zl()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:d}}function qd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zl():null}}function Sw(t){const{history:e,location:n}=window,r={value:s_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Aw()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Ge({},e.state,qd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Ge({},s.value,e.state,{forward:c,scroll:zl()});i(f.current,f,!0),i(c,Ge({},qd(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function bw(t){t=uw(t);const e=Sw(t),n=Rw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ge({location:"",base:t,go:r,createHref:fw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ss=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Rt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Rt||{});const Cw={type:Ss.Static,value:""},Pw=/[a-zA-Z0-9_]/;function Nw(t){if(!t)return[[]];if(t==="/")return[[Cw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Rt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===Rt.Static?i.push({type:Ss.Static,value:u}):n===Rt.Param||n===Rt.ParamRegExp||n===Rt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ss.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Rt.ParamRegExp){r=n,n=Rt.EscapeNext;continue}switch(n){case Rt.Static:c==="/"?(u&&d(),o()):c===":"?(d(),n=Rt.Param):m();break;case Rt.EscapeNext:m(),n=r;break;case Rt.Param:c==="("?n=Rt.ParamRegExp:Pw.test(c)?m():(d(),n=Rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Rt.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Rt.ParamRegExpEnd:f+=c;break;case Rt.ParamRegExpEnd:d(),n=Rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const Hd="[^/]+?",Dw={sensitive:!1,strict:!1,start:!0,end:!0};var Qt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Qt||{});const kw=/[.+*?^${}()[\]/\\]/g;function Ow(t,e){const n=Ge({},Dw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Qt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let _=Qt.Segment+(n.sensitive?Qt.BonusCaseSensitive:0);if(m.type===Ss.Static)d||(s+="/"),s+=m.value.replace(kw,"\\$&"),_+=Qt.Static;else if(m.type===Ss.Param){const{value:N,repeatable:R,optional:C,regexp:L}=m;i.push({name:N,repeatable:R,optional:C});const B=L||Hd;if(B!==Hd){_+=Qt.BonusCustomRegExp;try{`${B}`}catch(G){throw new Error(`Invalid custom RegExp for param "${N}" (${B}): `+G.message)}}let K=R?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(K=C&&u.length<2?`(?:/${K})`:"/"+K),C&&(K+="?"),s+=K,_+=Qt.Dynamic,C&&(_+=Qt.BonusOptional),R&&(_+=Qt.BonusRepeatable),B===".*"&&(_+=Qt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Qt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",N=i[m-1];d[N.name]=_&&N.repeatable?_.split("/"):_}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of m)if(_.type===Ss.Static)f+=_.value;else if(_.type===Ss.Param){const{value:N,repeatable:R,optional:C}=_,L=N in u?u[N]:"";if(kn(L)&&!R)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const B=kn(L)?L.join("/"):L;if(!B)if(C)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${N}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Vw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Qt.Static+Qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Qt.Static+Qt.Segment?1:-1:0}function i_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Vw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Gd(r))return 1;if(Gd(s))return-1}return s.length-r.length}function Gd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lw={strict:!1,end:!0,sensitive:!1};function xw(t,e,n){const r=Ow(Nw(t.path),n),s=Ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Mw(t,e){const n=[],r=new Map;e=Md(Lw,e);function s(d){return r.get(d)}function i(d,m,_){const N=!_,R=zd(d);R.aliasOf=_&&_.record;const C=Md(e,d),L=[R];if("alias"in d){const G=typeof d.alias=="string"?[d.alias]:d.alias;for(const oe of G)L.push(zd(Ge({},R,{components:_?_.record.components:R.components,path:oe,aliasOf:_?_.record:R})))}let B,K;for(const G of L){const{path:oe}=G;if(m&&oe[0]!=="/"){const de=m.record.path,b=de[de.length-1]==="/"?"":"/";G.path=m.record.path+(oe&&b+oe)}if(B=xw(G,m,C),_?_.alias.push(B):(K=K||B,K!==B&&K.alias.push(B),N&&d.name&&!Kd(B)&&o(d.name)),o_(B)&&c(B),R.children){const de=R.children;for(let b=0;b<de.length;b++)i(de[b],B,_&&_.children[b])}_=_||B}return K?()=>{o(K)}:Io}function o(d){if(n_(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=Bw(d,n);n.splice(m,0,d),d.record.name&&!Kd(d)&&r.set(d.record.name,d)}function u(d,m){let _,N={},R,C;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw pi(ct.MATCHER_NOT_FOUND,{location:d});C=_.record.name,N=Ge(Wd(m.params,_.keys.filter(K=>!K.optional).concat(_.parent?_.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),d.params&&Wd(d.params,_.keys.map(K=>K.name))),R=_.stringify(N)}else if(d.path!=null)R=d.path,_=n.find(K=>K.re.test(R)),_&&(N=_.parse(R),C=_.record.name);else{if(_=m.name?r.get(m.name):n.find(K=>K.re.test(m.path)),!_)throw pi(ct.MATCHER_NOT_FOUND,{location:d,currentLocation:m});C=_.record.name,N=Ge({},m.params,d.params),R=_.stringify(N)}const L=[];let B=_;for(;B;)L.unshift(B.record),B=B.parent;return{name:C,path:R,params:N,matched:L,meta:Uw(L)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Wd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function zd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Fw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Fw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Kd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Uw(t){return t.reduce((e,n)=>Ge(e,n.meta),{})}function Bw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;i_(t,e[i])<0?r=i:n=i+1}const s=$w(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $w(t){let e=t;for(;e=e.parent;)if(o_(e)&&i_(t,e)===0)return e}function o_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qd(t){const e=bn(Kl),n=bn(Ih),r=_t(()=>{const c=De(t.to);return e.resolve(c)}),s=_t(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(di.bind(null,f));if(m>-1)return m;const _=Yd(c[u-2]);return u>1&&Yd(f)===_&&d[d.length-1].path!==_?d.findIndex(di.bind(null,c[u-2])):m}),i=_t(()=>s.value>-1&&Gw(n.params,r.value.params)),o=_t(()=>s.value>-1&&s.value===n.matched.length-1&&t_(n.params,r.value.params));function l(c={}){if(Hw(c)){const u=e[De(t.replace)?"replace":"push"](De(t.to)).catch(Io);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:_t(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function jw(t){return t.length===1?t[0]:t}const qw=Si({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qd,setup(t,{slots:e}){const n=Us(Qd(t)),{options:r}=bn(Kl),s=_t(()=>({[Xd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&jw(e.default(n));return t.custom?i:Eh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oo=qw;function Hw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!kn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Yd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xd=(t,e,n)=>t??e??n,Ww=Si({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=bn(Au),s=_t(()=>t.route||r.value),i=bn(jd,0),o=_t(()=>{let u=De(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=_t(()=>s.value.matched[o.value]);qa(jd,_t(()=>o.value+1)),qa(Iw,l),qa(Au,s);const c=ke();return _o(()=>[c.value,l.value,t.name],([u,f,d],[m,_,N])=>{f&&(f.instances[d]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!di(f,_)||!m)&&(f.enterCallbacks[d]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return Jd(n.default,{Component:m,route:u});const _=d.props[f],N=_?_===!0?u.params:typeof _=="function"?_(u):_:null,C=Eh(m,Ge({},N,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Jd(n.default,{Component:C,route:u})||C}}});function Jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const a_=Ww;function zw(t){const e=Mw(t.routes,t),n=t.parseQuery||Ew,r=t.stringifyQuery||$d,s=t.history,i=Zi(),o=Zi(),l=Zi(),c=GE(Lr);let u=Lr;Ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Uc.bind(null,M=>""+M),d=Uc.bind(null,rw),m=Uc.bind(null,Lo);function _(M,J){let X,ue;return n_(M)?(X=e.getRecordMatcher(M),ue=J):ue=M,e.addRoute(ue,X)}function N(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function R(){return e.getRoutes().map(M=>M.record)}function C(M){return!!e.getRecordMatcher(M)}function L(M,J){if(J=Ge({},J||c.value),typeof M=="string"){const k=Bc(n,M,J.path),x=e.resolve({path:k.path},J),$=s.createHref(k.fullPath);return Ge(k,x,{params:m(x.params),hash:Lo(k.hash),redirectedFrom:void 0,href:$})}let X;if(M.path!=null)X=Ge({},M,{path:Bc(n,M.path,J.path).path});else{const k=Ge({},M.params);for(const x in k)k[x]==null&&delete k[x];X=Ge({},M,{params:d(k)}),J.params=d(J.params)}const ue=e.resolve(X,J),Ce=M.hash||"";ue.params=f(m(ue.params));const E=ow(r,Ge({},M,{hash:ew(Ce),path:ue.path})),w=s.createHref(E);return Ge({fullPath:E,hash:Ce,query:r===$d?Tw(M.query):M.query||{}},ue,{redirectedFrom:void 0,href:w})}function B(M){return typeof M=="string"?Bc(n,M,c.value.path):Ge({},M)}function K(M,J){if(u!==M)return pi(ct.NAVIGATION_CANCELLED,{from:J,to:M})}function G(M){return b(M)}function oe(M){return G(Ge(B(M),{replace:!0}))}function de(M,J){const X=M.matched[M.matched.length-1];if(X&&X.redirect){const{redirect:ue}=X;let Ce=typeof ue=="function"?ue(M,J):ue;return typeof Ce=="string"&&(Ce=Ce.includes("?")||Ce.includes("#")?Ce=B(Ce):{path:Ce},Ce.params={}),Ge({query:M.query,hash:M.hash,params:Ce.path!=null?{}:M.params},Ce)}}function b(M,J){const X=u=L(M),ue=c.value,Ce=M.state,E=M.force,w=M.replace===!0,k=de(X,ue);if(k)return b(Ge(B(k),{state:typeof k=="object"?Ge({},Ce,k.state):Ce,force:E,replace:w}),J||X);const x=X;x.redirectedFrom=J;let $;return!E&&aw(r,ue,X)&&($=pi(ct.NAVIGATION_DUPLICATED,{to:x,from:ue}),Oe(ue,ue,!0,!1)),($?Promise.resolve($):S(x,ue)).catch(U=>sr(U)?sr(U,ct.NAVIGATION_GUARD_REDIRECT)?U:Tt(U):_e(U,x,ue)).then(U=>{if(U){if(sr(U,ct.NAVIGATION_GUARD_REDIRECT))return b(Ge({replace:w},B(U.to),{state:typeof U.to=="object"?Ge({},Ce,U.to.state):Ce,force:E}),J||x)}else U=A(x,ue,!0,w,Ce);return I(x,ue,U),U})}function T(M,J){const X=K(M,J);return X?Promise.reject(X):Promise.resolve()}function y(M){const J=ne.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function S(M,J){let X;const[ue,Ce,E]=ww(M,J);X=jc(ue.reverse(),"beforeRouteLeave",M,J);for(const k of ue)k.leaveGuards.forEach(x=>{X.push(Br(x,M,J))});const w=T.bind(null,M,J);return X.push(w),Be(X).then(()=>{X=[];for(const k of i.list())X.push(Br(k,M,J));return X.push(w),Be(X)}).then(()=>{X=jc(Ce,"beforeRouteUpdate",M,J);for(const k of Ce)k.updateGuards.forEach(x=>{X.push(Br(x,M,J))});return X.push(w),Be(X)}).then(()=>{X=[];for(const k of E)if(k.beforeEnter)if(kn(k.beforeEnter))for(const x of k.beforeEnter)X.push(Br(x,M,J));else X.push(Br(k.beforeEnter,M,J));return X.push(w),Be(X)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),X=jc(E,"beforeRouteEnter",M,J,y),X.push(w),Be(X))).then(()=>{X=[];for(const k of o.list())X.push(Br(k,M,J));return X.push(w),Be(X)}).catch(k=>sr(k,ct.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function I(M,J,X){l.list().forEach(ue=>y(()=>ue(M,J,X)))}function A(M,J,X,ue,Ce){const E=K(M,J);if(E)return E;const w=J===Lr,k=Ys?history.state:{};X&&(ue||w?s.replace(M.fullPath,Ge({scroll:w&&k&&k.scroll},Ce)):s.push(M.fullPath,Ce)),c.value=M,Oe(M,J,X,w),Tt()}let v;function Se(){v||(v=s.listen((M,J,X)=>{if(!Ie.listening)return;const ue=L(M),Ce=de(ue,Ie.currentRoute.value);if(Ce){b(Ge(Ce,{replace:!0,force:!0}),ue).catch(Io);return}u=ue;const E=c.value;Ys&&mw(Bd(E.fullPath,X.delta),zl()),S(ue,E).catch(w=>sr(w,ct.NAVIGATION_ABORTED|ct.NAVIGATION_CANCELLED)?w:sr(w,ct.NAVIGATION_GUARD_REDIRECT)?(b(Ge(B(w.to),{force:!0}),ue).then(k=>{sr(k,ct.NAVIGATION_ABORTED|ct.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===Iu.pop&&s.go(-1,!1)}).catch(Io),Promise.reject()):(X.delta&&s.go(-X.delta,!1),_e(w,ue,E))).then(w=>{w=w||A(ue,E,!1),w&&(X.delta&&!sr(w,ct.NAVIGATION_CANCELLED)?s.go(-X.delta,!1):X.type===Iu.pop&&sr(w,ct.NAVIGATION_ABORTED|ct.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),I(ue,E,w)}).catch(Io)}))}let Ke=Zi(),ce=Zi(),Y;function _e(M,J,X){Tt(M);const ue=ce.list();return ue.length?ue.forEach(Ce=>Ce(M,J,X)):console.error(M),Promise.reject(M)}function be(){return Y&&c.value!==Lr?Promise.resolve():new Promise((M,J)=>{Ke.add([M,J])})}function Tt(M){return Y||(Y=!M,Se(),Ke.list().forEach(([J,X])=>M?X(M):J()),Ke.reset()),M}function Oe(M,J,X,ue){const{scrollBehavior:Ce}=t;if(!Ys||!Ce)return Promise.resolve();const E=!X&&gw(Bd(M.fullPath,0))||(ue||!X)&&history.state&&history.state.scroll||null;return ph().then(()=>Ce(M,J,E)).then(w=>w&&pw(w)).catch(w=>_e(w,M,J))}const ot=M=>s.go(M);let te;const ne=new Set,Ie={currentRoute:c,listening:!0,addRoute:_,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:R,resolve:L,options:t,push:G,replace:oe,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ce.add,isReady:be,install(M){M.component("RouterLink",oo),M.component("RouterView",a_),M.config.globalProperties.$router=Ie,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>De(c)}),Ys&&!te&&c.value===Lr&&(te=!0,G(s.location).catch(ue=>{}));const J={};for(const ue in Lr)Object.defineProperty(J,ue,{get:()=>c.value[ue],enumerable:!0});M.provide(Kl,Ie),M.provide(Ih,og(J)),M.provide(Au,c);const X=M.unmount;ne.add(M),M.unmount=function(){ne.delete(M),ne.size<1&&(u=Lr,v&&v(),v=null,c.value=Lr,te=!1,Y=!1),X()}}};function Be(M){return M.reduce((J,X)=>J.then(()=>y(X)),Promise.resolve())}return Ie}function l_(){return bn(Kl)}function Kw(t){return bn(Ih)}const Qw=()=>{};var Zd={};/**
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
 */const c_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[f],n[d],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(c_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new Xw;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const N=u<<6&192|d;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jw=function(t){const e=c_(t);return u_.encodeByteArray(e,!0)},pl=function(t){return Jw(t).replace(/\./g,"")},h_=function(t){try{return u_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eA=()=>Zw().__FIREBASE_DEFAULTS__,tA=()=>{if(typeof process>"u"||typeof Zd>"u")return;const t=Zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&h_(t[1]);return e&&JSON.parse(e)},Ql=()=>{try{return Qw()||eA()||tA()||nA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},f_=t=>{var e,n;return(n=(e=Ql())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rA=t=>{const e=f_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},d_=()=>{var t;return(t=Ql())==null?void 0:t.config},p_=t=>{var e;return(e=Ql())==null?void 0:e[`_${t}`]};/**
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
 */class sA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function bi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function m_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function iA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),""].join(".")}const wo={};function oA(){const t={prod:[],emulator:[]};for(const e of Object.keys(wo))wo[e]?t.emulator.push(e):t.prod.push(e);return t}function aA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ep=!1;function g_(t,e){if(typeof window>"u"||typeof document>"u"||!bi(window.location.host)||wo[t]===e||wo[t]||ep)return;wo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=oA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ep=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=aA(r),_=n("text"),N=document.getElementById(_)||document.createElement("span"),R=n("learnmore"),C=document.getElementById(R)||document.createElement("a"),L=n("preprendIcon"),B=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const K=m.element;l(K),f(C,R);const G=u();c(B,L),K.append(B,N,C,G),document.body.appendChild(K)}i?(N.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function cA(){var e;const t=(e=Ql())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dA(){const t=Wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pA(){return!cA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mA(){try{return typeof indexedDB=="object"}catch{return!1}}function gA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _A="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_A,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wr(s,l,r)}}function yA(t,e){return t.replace(vA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vA=/\{\$([^}]+)}/g;function EA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Os(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tp(i)&&tp(o)){if(!Os(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
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
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TA(t,e){const n=new IA(t,e);return n.subscribe.bind(n)}class IA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Vs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class AA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SA(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===ws?void 0:t}function SA(t){return t.instantiationMode==="EAGER"}/**
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
 */class bA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Me||(Me={}));const CA={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},PA=Me.INFO,NA={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},DA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wh{constructor(e){this.name=e,this._logLevel=PA,this._logHandler=DA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const kA=(t,e)=>e.some(n=>t instanceof n);let np,rp;function OA(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VA(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,Ru=new WeakMap,y_=new WeakMap,Hc=new WeakMap,Ah=new WeakMap;function LA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&__.set(n,t)}).catch(()=>{}),Ah.set(e,t),e}function xA(t){if(Ru.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let Su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MA(t){Su=t(Su)}function FA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return y_.set(r,e.sort?e.sort():[e]),zr(r)}:VA().includes(t)?function(...e){return t.apply(Gc(this),e),zr(__.get(this))}:function(...e){return zr(t.apply(Gc(this),e))}}function UA(t){return typeof t=="function"?FA(t):(t instanceof IDBTransaction&&xA(t),kA(t,OA())?new Proxy(t,Su):t)}function zr(t){if(t instanceof IDBRequest)return LA(t);if(Hc.has(t))return Hc.get(t);const e=UA(t);return e!==t&&(Hc.set(t,e),Ah.set(e,t)),e}const Gc=t=>Ah.get(t);function BA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=zr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zr(o.result),c.oldVersion,c.newVersion,zr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const $A=["get","getKey","getAll","getAllKeys","count"],jA=["put","add","delete","clear"],Wc=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$A.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Wc.set(e,i),i}MA(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));/**
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
 */class qA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",ip="0.14.6";/**
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
 */const yr=new wh("@firebase/app"),GA="@firebase/app-compat",WA="@firebase/analytics-compat",zA="@firebase/analytics",KA="@firebase/app-check-compat",QA="@firebase/app-check",YA="@firebase/auth",XA="@firebase/auth-compat",JA="@firebase/database",ZA="@firebase/data-connect",eR="@firebase/database-compat",tR="@firebase/functions",nR="@firebase/functions-compat",rR="@firebase/installations",sR="@firebase/installations-compat",iR="@firebase/messaging",oR="@firebase/messaging-compat",aR="@firebase/performance",lR="@firebase/performance-compat",cR="@firebase/remote-config",uR="@firebase/remote-config-compat",hR="@firebase/storage",fR="@firebase/storage-compat",dR="@firebase/firestore",pR="@firebase/ai",mR="@firebase/firestore-compat",gR="firebase",_R="12.6.0";/**
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
 */const Cu="[DEFAULT]",yR={[bu]:"fire-core",[GA]:"fire-core-compat",[zA]:"fire-analytics",[WA]:"fire-analytics-compat",[QA]:"fire-app-check",[KA]:"fire-app-check-compat",[YA]:"fire-auth",[XA]:"fire-auth-compat",[JA]:"fire-rtdb",[ZA]:"fire-data-connect",[eR]:"fire-rtdb-compat",[tR]:"fire-fn",[nR]:"fire-fn-compat",[rR]:"fire-iid",[sR]:"fire-iid-compat",[iR]:"fire-fcm",[oR]:"fire-fcm-compat",[aR]:"fire-perf",[lR]:"fire-perf-compat",[cR]:"fire-rc",[uR]:"fire-rc-compat",[hR]:"fire-gcs",[fR]:"fire-gcs-compat",[dR]:"fire-fst",[mR]:"fire-fst-compat",[pR]:"fire-vertex","fire-js":"fire-js",[gR]:"fire-js-all"};/**
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
 */const ml=new Map,vR=new Map,Pu=new Map;function op(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(Pu.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Pu.set(e,t);for(const n of ml.values())op(n,t);for(const n of vR.values())op(n,t);return!0}function Rh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ER={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new Zo("app","Firebase",ER);/**
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
 */class TR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ci=_R;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Cu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kr.create("bad-app-name",{appName:String(s)});if(n||(n=d_()),!n)throw Kr.create("no-options");const i=ml.get(s);if(i){if(Os(n,i.options)&&Os(r,i.config))return i;throw Kr.create("duplicate-app",{appName:s})}const o=new bA(s);for(const c of Pu.values())o.addComponent(c);const l=new TR(n,r,o);return ml.set(s,l),l}function E_(t=Cu){const e=ml.get(t);if(!e&&t===Cu&&d_())return v_();if(!e)throw Kr.create("no-app",{appName:t});return e}function Qr(t,e,n){let r=yR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(o.join(" "));return}mi(new Vs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const IR="firebase-heartbeat-database",wR=1,xo="firebase-heartbeat-store";let zc=null;function T_(){return zc||(zc=BA(IR,wR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),zc}async function AR(t){try{const n=(await T_()).transaction(xo),r=await n.objectStore(xo).get(I_(t));return await n.done,r}catch(e){if(e instanceof wr)yr.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function ap(t,e){try{const r=(await T_()).transaction(xo,"readwrite");await r.objectStore(xo).put(e,I_(t)),await r.done}catch(n){if(n instanceof wr)yr.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function I_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RR=1024,SR=30;class bR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>SR){const o=NR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lp(),{heartbeatsToSend:r,unsentEntries:s}=CR(this._heartbeatsCache.heartbeats),i=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yr.warn(n),""}}}function lp(){return new Date().toISOString().substring(0,10)}function CR(t,e=RR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mA()?gA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ap(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ap(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cp(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}function NR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function DR(t){mi(new Vs("platform-logger",e=>new qA(e),"PRIVATE")),mi(new Vs("heartbeat",e=>new bR(e),"PRIVATE")),Qr(bu,ip,t),Qr(bu,ip,"esm2020"),Qr("fire-js","")}DR("");function w_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kR=w_,A_=new Zo("auth","Firebase",w_());/**
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
 */const gl=new wh("@firebase/auth");function OR(t,...e){gl.logLevel<=Me.WARN&&gl.warn(`Auth (${Ci}): ${t}`,...e)}function za(t,...e){gl.logLevel<=Me.ERROR&&gl.error(`Auth (${Ci}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw bh(t,...e)}function Cn(t,...e){return bh(t,...e)}function Sh(t,e,n){const r={...kR(),[e]:n};return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function dr(t){return Sh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function VR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),Sh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return A_.create(t,...e)}function ve(t,e,...n){if(!t)throw bh(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw za(e),new Error(e)}function vr(t,e){t||hr(e)}/**
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
 */function Nu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function LR(){return up()==="http:"||up()==="https:"}function up(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function xR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LR()||hA()||"connection"in navigator)?navigator.onLine:!0}function MR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=lA()||fA()}get(){return xR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ch(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class R_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BR=new ta(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,s={}){return S_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ea({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return uA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&bi(t.emulatorConfig.host)&&(u.credentials="include"),R_.fetch()(await b_(t,t.config.apiHost,n,l),u)})}async function S_(t,e,n){t._canInitEmulator=!1;const r={...FR,...e};try{const s=new jR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Oa(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Sh(t,f,u);vn(t,f)}}catch(s){if(s instanceof wr)throw s;vn(t,"network-request-failed",{message:String(s)})}}async function na(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function b_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ch(t.config,s):`${t.config.apiScheme}://${s}`;return UR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function $R(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),BR.get())})}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Cn(t,e,r);return s.customData._tokenResponse=n,s}function hp(t){return t!==void 0&&t.enterprise!==void 0}class qR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $R(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HR(t,e){return Ar(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
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
 */async function GR(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function _l(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WR(t,e=!1){const n=Et(t),r=await n.getIdToken(e),s=Ph(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ao(Kc(s.auth_time)),issuedAtTime:Ao(Kc(s.iat)),expirationTime:Ao(Kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function Ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const s=h_(n);return s?JSON.parse(s):(za("Failed to decode base64 JWT payload"),null)}catch(s){return za("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fp(t){const e=Ph(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&zR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Du{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await gi(t,_l(e,{idToken:n}));ve(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?C_(s.providerUserInfo):[],o=YR(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Du(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function QR(t){const e=Et(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function C_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function XR(t,e){const n=await S_(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await b_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&bi(t.emulatorConfig.host)&&(c.credentials="include"),R_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JR(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",os(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oi;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function xr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new KR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Du(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WR(this,e)}reload(){return QR(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await gi(this,GR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:_,providerData:N,stsTokenManager:R}=n;ve(d&&R,e,"internal-error");const C=oi.fromJSON(this.name,R);ve(typeof d=="string",e,"internal-error"),xr(r,e.name),xr(s,e.name),ve(typeof m=="boolean",e,"internal-error"),ve(typeof _=="boolean",e,"internal-error"),xr(i,e.name),xr(o,e.name),xr(l,e.name),xr(c,e.name),xr(u,e.name),xr(f,e.name);const L=new Rn({uid:d,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:u,lastLoginAt:f});return N&&Array.isArray(N)&&(L.providerData=N.map(B=>({...B}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new oi;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?C_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new oi;l.updateFromIdToken(r);const c=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Du(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const dp=new Map;function fr(t){vr(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
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
 */class P_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}P_.type="NONE";const pp=P_;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ka(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ka("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _l(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(fr(pp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||fr(pp);const o=Ka(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await _l(e,{idToken:f}).catch(()=>{});if(!m)break;d=await Rn._fromGetAccountInfoResponse(e,m,f)}else d=Rn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ai(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ai(i,e,r))}}/**
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
 */function mp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(L_(e))return"Blackberry";if(x_(e))return"Webos";if(D_(e))return"Safari";if((e.includes("chrome/")||k_(e))&&!e.includes("edge/"))return"Chrome";if(V_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function N_(t=Wt()){return/firefox\//i.test(t)}function D_(t=Wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function k_(t=Wt()){return/crios\//i.test(t)}function O_(t=Wt()){return/iemobile/i.test(t)}function V_(t=Wt()){return/android/i.test(t)}function L_(t=Wt()){return/blackberry/i.test(t)}function x_(t=Wt()){return/webos/i.test(t)}function Nh(t=Wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZR(t=Wt()){var e;return Nh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function eS(){return dA()&&document.documentMode===10}function M_(t=Wt()){return Nh(t)||V_(t)||x_(t)||L_(t)||/windows phone/i.test(t)||O_(t)}/**
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
 */function F_(t,e=[]){let n;switch(t){case"Browser":n=mp(Wt());break;case"Worker":n=`${mp(Wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
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
 */class tS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function nS(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",os(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const rS=6;class sS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class iS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new tS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _l(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(dr(this));const n=e?Et(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nS(this),n=new sS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&OR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function as(t){return Et(t)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=TA(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oS(t){Yl=t}function U_(t){return Yl.loadJS(t)}function aS(){return Yl.recaptchaEnterpriseScript}function lS(){return Yl.gapiScript}function cS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class uS{constructor(){this.enterprise=new hS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fS="recaptcha-enterprise",B_="NO_RECAPTCHA";class dS{constructor(e){this.type=fS,this.auth=as(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{HR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new qR(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;hp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(B_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&hp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=aS();c.length!==0&&(c+=l),U_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function _p(t,e,n,r=!1,s=!1){const i=new dS(t);let o;if(s)o=B_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ku(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _p(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _p(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function pS(t,e){const n=Rh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Os(i,e??{}))return s;vn(s,"already-initialized")}return n.initialize({options:e})}function mS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gS(t,e,n){const r=as(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$_(e),{host:o,port:l}=_S(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Os(u,r.config.emulator)&&Os(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,bi(o)?(m_(`${i}//${o}${c}`),g_("Auth",!0)):yS()}function $_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _S(t){const e=$_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function vS(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ES(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
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
 */async function TS(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function IS(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
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
 */class Mo extends Dh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,n,"signInWithPassword",ES);case"emailLink":return TS(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,r,"signUpPassword",vS);case"emailLink":return IS(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function li(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
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
 */const wS="http://localhost";class Ls extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:wS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
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
 */function AS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RS(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class kh{constructor(e){const n=ao(lo(e)),r=n.apiKey??null,s=n.oobCode??null,i=AS(n.mode??null);ve(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=RS(e);try{return new kh(n)}catch{return null}}}/**
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
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kh.parseLink(n);return ve(r,"argument-error"),Mo._fromEmailAndCode(e,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ra extends Oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $r extends ra{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
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
 */class ur extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ls._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class jr extends ra{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
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
 */class qr extends ra{constructor(){super("twitter.com")}static credential(e,n){return Ls._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
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
 */async function SS(t,e){return na(t,"POST","/v1/accounts:signUp",os(t,e))}/**
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
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=vp(r);return new xs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vp(r);return new xs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vl extends wr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vl(e,n,r,s)}}function j_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,i,e,r):i})}async function bS(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",r)}/**
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
 */async function CS(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(dr(r));const s="reauthenticate";try{const i=await gi(t,j_(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=Ph(i.idToken);ve(o,r,"internal-error");const{sub:l}=o;return ve(t.uid===l,r,"user-mismatch"),xs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),i}}/**
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
 */async function q_(t,e,n=!1){if(un(t.app))return Promise.reject(dr(t));const r="signIn",s=await j_(t,r,e),i=await xs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PS(t,e){return q_(as(t),e)}/**
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
 */async function H_(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NS(t,e,n){if(un(t.app))return Promise.reject(dr(t));const r=as(t),o=await ku(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&H_(t),c}),l=await xs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function DS(t,e,n){return un(t.app)?Promise.reject(dr(t)):PS(Et(t),Pi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&H_(t),r})}/**
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
 */async function kS(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
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
 */async function OS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Et(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gi(r,kS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VS(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function LS(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function xS(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function MS(t){return Et(t).signOut()}const El="__sak";/**
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
 */class G_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FS=1e3,US=10;class W_ extends G_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,US):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const BS=W_;/**
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
 */class z_ extends G_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}z_.type="SESSION";const K_=z_;/**
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
 */function $S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await $S(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
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
 */function Vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Vh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wn(){return window}function qS(t){Wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Q_(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function HS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function WS(){return Q_()?self:null}/**
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
 */const Y_="firebaseLocalStorageDb",zS=1,Tl="firebaseLocalStorage",X_="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function KS(){const t=indexedDB.deleteDatabase(Y_);return new sa(t).toPromise()}function Ou(){const t=indexedDB.open(Y_,zS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:X_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await KS(),e(await Ou()))})})}async function Ep(t,e,n){const r=Jl(t,!0).put({[X_]:e,value:n});return new sa(r).toPromise()}async function QS(t,e){const n=Jl(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function Tp(t,e){const n=Jl(t,!0).delete(e);return new sa(n).toPromise()}const YS=800,XS=3;class J_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ou(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HS(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ou();return await Ep(e,El,"1"),await Tp(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jl(s,!1).getAll();return new sa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J_.type="LOCAL";const JS=J_;new ta(3e4,6e4);/**
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
 */function Z_(t,e){return e?fr(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZS(t){return q_(t.auth,new Lh(t),t.bypassAuthState)}function eb(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),CS(n,new Lh(t),t.bypassAuthState)}async function tb(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),bS(n,new Lh(t),t.bypassAuthState)}/**
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
 */class ey{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZS;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return eb;default:vn(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nb=new ta(2e3,1e4);async function rb(t,e,n){if(un(t.app))return Promise.reject(Cn(t,"operation-not-supported-in-this-environment"));const r=as(t);VR(t,e,Oh);const s=Z_(r,n);return new bs(r,"signInViaPopup",e,s).executeNotNull()}class bs extends ey{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nb.get())};e()}}bs.currentPopupAction=null;/**
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
 */const sb="pendingRedirect",Qa=new Map;class ib extends ey{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qa.get(this.auth._key());if(!e){try{const r=await ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qa.set(this.auth._key(),e)}return this.bypassAuthState||Qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(t,e){const n=cb(e),r=lb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ab(t,e){Qa.set(t._key(),e)}function lb(t){return fr(t._redirectPersistence)}function cb(t){return Ka(sb,t.config.apiKey,t.name)}async function ub(t,e,n=!1){if(un(t.app))return Promise.reject(dr(t));const r=as(t),s=Z_(r,e),o=await new ib(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hb=600*1e3;class fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!db(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ty(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ip(e))}saveEventToCache(e){this.cachedEventUids.add(Ip(e)),this.lastProcessedEventTime=Date.now()}}function Ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function db(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ty(t);default:return!1}}/**
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
 */async function pb(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function _b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pb(t);for(const n of e)try{if(yb(n))return}catch{}vn(t,"unauthorized-domain")}function yb(t){const e=Nu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gb.test(n))return!1;if(mb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vb=new ta(3e4,6e4);function wp(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Eb(t){return new Promise((e,n)=>{var s,i,o;function r(){wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(Cn(t,"network-request-failed"))},timeout:vb.get()})}if((i=(s=Wn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Wn().gapi)!=null&&o.load)r();else{const l=cS("iframefcb");return Wn()[l]=()=>{gapi.load?r():n(Cn(t,"network-request-failed"))},U_(`${lS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ya=null,e})}let Ya=null;function Tb(t){return Ya=Ya||Eb(t),Ya}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ib=new ta(5e3,15e3),wb="__/auth/iframe",Ab="emulator/auth/iframe",Rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bb(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ch(e,Ab):`https://${t.config.authDomain}/${wb}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},s=Sb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ea(r).slice(1)}`}async function Cb(t){const e=await Tb(t),n=Wn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:bb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=Wn().setTimeout(()=>{i(o)},Ib.get());function c(){Wn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Pb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nb=500,Db=600,kb="_blank",Ob="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vb(t,e,n,r=Nb,s=Db){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...Pb,width:r.toString(),height:s.toString(),top:i,left:o},u=Wt().toLowerCase();n&&(l=k_(u)?kb:n),N_(u)&&(e=e||Ob,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,N])=>`${m}${_}=${N},`,"");if(ZR(u)&&l!=="_self")return Lb(e||"",l),new Ap(null);const d=window.open(e||"",l,f);ve(d,t,"popup-blocked");try{d.focus()}catch{}return new Ap(d)}function Lb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xb="__/auth/handler",Mb="emulator/auth/handler",Fb=encodeURIComponent("fac");async function Rp(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:s};if(e instanceof Oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof ra){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Fb}=${encodeURIComponent(c)}`:"";return`${Ub(t)}?${ea(l).slice(1)}${u}`}function Ub({config:t}){return t.emulator?Ch(t,Mb):`https://${t.authDomain}/${xb}`}/**
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
 */const Qc="webStorageSupport";class Bb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K_,this._completeRedirectFn=ub,this._overrideRedirectResult=ab}async _openPopup(e,n,r,s){var o;vr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Rp(e,n,r,Nu(),s);return Vb(e,i,Vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rp(e,n,r,Nu(),s);return qS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cb(e),r=new fb(e);return n.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Qc];i!==void 0&&n(!!i),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M_()||D_()||Nh()}}const $b=Bb;var Sp="@firebase/auth",bp="1.12.0";/**
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
 */class jb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hb(t){mi(new Vs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F_(t)},u=new iS(r,s,i,c);return mS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mi(new Vs("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new jb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qr(Sp,bp,qb(t)),Qr(Sp,bp,"esm2020")}/**
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
 */const Gb=300,Wb=p_("authIdTokenMaxAge")||Gb;let Cp=null;const zb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wb)return;const s=n==null?void 0:n.token;Cp!==s&&(Cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kb(t=E_()){const e=Rh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pS(t,{popupRedirectResolver:$b,persistence:[JS,BS,K_]}),r=p_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zb(i.toString());LS(n,o,()=>o(n.currentUser)),VS(n,l=>o(l))}}const s=f_("auth");return s&&gS(n,`http://${s}`),n}function Qb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}oS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Qb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hb("Browser");var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,ny;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,T){function y(){}y.prototype=T.prototype,b.F=T.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(S,I,A){for(var v=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)v[Se-2]=arguments[Se];return T.prototype[I].apply(S,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,T,y){y||(y=0);const S=Array(16);if(typeof T=="string")for(var I=0;I<16;++I)S[I]=T.charCodeAt(y++)|T.charCodeAt(y++)<<8|T.charCodeAt(y++)<<16|T.charCodeAt(y++)<<24;else for(I=0;I<16;++I)S[I]=T[y++]|T[y++]<<8|T[y++]<<16|T[y++]<<24;T=b.g[0],y=b.g[1],I=b.g[2];let A=b.g[3],v;v=T+(A^y&(I^A))+S[0]+3614090360&4294967295,T=y+(v<<7&4294967295|v>>>25),v=A+(I^T&(y^I))+S[1]+3905402710&4294967295,A=T+(v<<12&4294967295|v>>>20),v=I+(y^A&(T^y))+S[2]+606105819&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(T^I&(A^T))+S[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=T+(A^y&(I^A))+S[4]+4118548399&4294967295,T=y+(v<<7&4294967295|v>>>25),v=A+(I^T&(y^I))+S[5]+1200080426&4294967295,A=T+(v<<12&4294967295|v>>>20),v=I+(y^A&(T^y))+S[6]+2821735955&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(T^I&(A^T))+S[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=T+(A^y&(I^A))+S[8]+1770035416&4294967295,T=y+(v<<7&4294967295|v>>>25),v=A+(I^T&(y^I))+S[9]+2336552879&4294967295,A=T+(v<<12&4294967295|v>>>20),v=I+(y^A&(T^y))+S[10]+4294925233&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(T^I&(A^T))+S[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=T+(A^y&(I^A))+S[12]+1804603682&4294967295,T=y+(v<<7&4294967295|v>>>25),v=A+(I^T&(y^I))+S[13]+4254626195&4294967295,A=T+(v<<12&4294967295|v>>>20),v=I+(y^A&(T^y))+S[14]+2792965006&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(T^I&(A^T))+S[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=T+(I^A&(y^I))+S[1]+4129170786&4294967295,T=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(T^y))+S[6]+3225465664&4294967295,A=T+(v<<9&4294967295|v>>>23),v=I+(T^y&(A^T))+S[11]+643717713&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^T&(I^A))+S[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=T+(I^A&(y^I))+S[5]+3593408605&4294967295,T=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(T^y))+S[10]+38016083&4294967295,A=T+(v<<9&4294967295|v>>>23),v=I+(T^y&(A^T))+S[15]+3634488961&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^T&(I^A))+S[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=T+(I^A&(y^I))+S[9]+568446438&4294967295,T=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(T^y))+S[14]+3275163606&4294967295,A=T+(v<<9&4294967295|v>>>23),v=I+(T^y&(A^T))+S[3]+4107603335&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^T&(I^A))+S[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=T+(I^A&(y^I))+S[13]+2850285829&4294967295,T=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(T^y))+S[2]+4243563512&4294967295,A=T+(v<<9&4294967295|v>>>23),v=I+(T^y&(A^T))+S[7]+1735328473&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^T&(I^A))+S[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=T+(y^I^A)+S[5]+4294588738&4294967295,T=y+(v<<4&4294967295|v>>>28),v=A+(T^y^I)+S[8]+2272392833&4294967295,A=T+(v<<11&4294967295|v>>>21),v=I+(A^T^y)+S[11]+1839030562&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^T)+S[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=T+(y^I^A)+S[1]+2763975236&4294967295,T=y+(v<<4&4294967295|v>>>28),v=A+(T^y^I)+S[4]+1272893353&4294967295,A=T+(v<<11&4294967295|v>>>21),v=I+(A^T^y)+S[7]+4139469664&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^T)+S[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=T+(y^I^A)+S[13]+681279174&4294967295,T=y+(v<<4&4294967295|v>>>28),v=A+(T^y^I)+S[0]+3936430074&4294967295,A=T+(v<<11&4294967295|v>>>21),v=I+(A^T^y)+S[3]+3572445317&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^T)+S[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=T+(y^I^A)+S[9]+3654602809&4294967295,T=y+(v<<4&4294967295|v>>>28),v=A+(T^y^I)+S[12]+3873151461&4294967295,A=T+(v<<11&4294967295|v>>>21),v=I+(A^T^y)+S[15]+530742520&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^T)+S[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=T+(I^(y|~A))+S[0]+4096336452&4294967295,T=y+(v<<6&4294967295|v>>>26),v=A+(y^(T|~I))+S[7]+1126891415&4294967295,A=T+(v<<10&4294967295|v>>>22),v=I+(T^(A|~y))+S[14]+2878612391&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~T))+S[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=T+(I^(y|~A))+S[12]+1700485571&4294967295,T=y+(v<<6&4294967295|v>>>26),v=A+(y^(T|~I))+S[3]+2399980690&4294967295,A=T+(v<<10&4294967295|v>>>22),v=I+(T^(A|~y))+S[10]+4293915773&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~T))+S[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=T+(I^(y|~A))+S[8]+1873313359&4294967295,T=y+(v<<6&4294967295|v>>>26),v=A+(y^(T|~I))+S[15]+4264355552&4294967295,A=T+(v<<10&4294967295|v>>>22),v=I+(T^(A|~y))+S[6]+2734768916&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~T))+S[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=T+(I^(y|~A))+S[4]+4149444226&4294967295,T=y+(v<<6&4294967295|v>>>26),v=A+(y^(T|~I))+S[11]+3174756917&4294967295,A=T+(v<<10&4294967295|v>>>22),v=I+(T^(A|~y))+S[2]+718787259&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~T))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+T&4294967295,b.g[1]=b.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.v=function(b,T){T===void 0&&(T=b.length);const y=T-this.blockSize,S=this.C;let I=this.h,A=0;for(;A<T;){if(I==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<T;)if(S[I++]=b.charCodeAt(A++),I==this.blockSize){s(this,S),I=0;break}}else for(;A<T;)if(S[I++]=b[A++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=T},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var T=1;T<b.length-8;++T)b[T]=0;T=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=T&255,T/=256;for(this.v(b),b=Array(16),T=0,y=0;y<4;++y)for(let S=0;S<32;S+=8)b[T++]=this.g[y]>>>S&255;return b};function i(b,T){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=T(b)}function o(b,T){this.h=T;const y=[];let S=!0;for(let I=b.length-1;I>=0;I--){const A=b[I]|0;S&&A==T||(y[I]=A,S=!1)}this.g=y}var l={};function c(b){return-128<=b&&b<128?i(b,function(T){return new o([T|0],T<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(b<0)return C(u(-b));const T=[];let y=1;for(let S=0;b>=y;S++)T[S]=b/y|0,y*=4294967296;return new o(T,0)}function f(b,T){if(b.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(b.charAt(0)=="-")return C(f(b.substring(1),T));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(T,8));let S=d;for(let A=0;A<b.length;A+=8){var I=Math.min(8,b.length-A);const v=parseInt(b.substring(A,A+I),T);I<8?(I=u(Math.pow(T,I)),S=S.j(I).add(u(v))):(S=S.j(y),S=S.add(u(v)))}return S}var d=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-C(this).m();let b=0,T=1;for(let y=0;y<this.g.length;y++){const S=this.i(y);b+=(S>=0?S:4294967296+S)*T,T*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(R(this))return"-"+C(this).toString(b);const T=u(Math.pow(b,6));var y=this;let S="";for(;;){const I=G(y,T).g;y=L(y,I.j(T));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=I,N(y))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let T=0;T<b.g.length;T++)if(b.g[T]!=0)return!1;return!0}function R(b){return b.h==-1}t.l=function(b){return b=L(this,b),R(b)?-1:N(b)?0:1};function C(b){const T=b.g.length,y=[];for(let S=0;S<T;S++)y[S]=~b.g[S];return new o(y,~b.h).add(m)}t.abs=function(){return R(this)?C(this):this},t.add=function(b){const T=Math.max(this.g.length,b.g.length),y=[];let S=0;for(let I=0;I<=T;I++){let A=S+(this.i(I)&65535)+(b.i(I)&65535),v=(A>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);S=v>>>16,A&=65535,v&=65535,y[I]=v<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function L(b,T){return b.add(C(T))}t.j=function(b){if(N(this)||N(b))return d;if(R(this))return R(b)?C(this).j(C(b)):C(C(this).j(b));if(R(b))return C(this.j(C(b)));if(this.l(_)<0&&b.l(_)<0)return u(this.m()*b.m());const T=this.g.length+b.g.length,y=[];for(var S=0;S<2*T;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(let I=0;I<b.g.length;I++){const A=this.i(S)>>>16,v=this.i(S)&65535,Se=b.i(I)>>>16,Ke=b.i(I)&65535;y[2*S+2*I]+=v*Ke,B(y,2*S+2*I),y[2*S+2*I+1]+=A*Ke,B(y,2*S+2*I+1),y[2*S+2*I+1]+=v*Se,B(y,2*S+2*I+1),y[2*S+2*I+2]+=A*Se,B(y,2*S+2*I+2)}for(b=0;b<T;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=T;b<2*T;b++)y[b]=0;return new o(y,0)};function B(b,T){for(;(b[T]&65535)!=b[T];)b[T+1]+=b[T]>>>16,b[T]&=65535,T++}function K(b,T){this.g=b,this.h=T}function G(b,T){if(N(T))throw Error("division by zero");if(N(b))return new K(d,d);if(R(b))return T=G(C(b),T),new K(C(T.g),C(T.h));if(R(T))return T=G(b,C(T)),new K(C(T.g),T.h);if(b.g.length>30){if(R(b)||R(T))throw Error("slowDivide_ only works with positive integers.");for(var y=m,S=T;S.l(b)<=0;)y=oe(y),S=oe(S);var I=de(y,1),A=de(S,1);for(S=de(S,2),y=de(y,2);!N(S);){var v=A.add(S);v.l(b)<=0&&(I=I.add(y),A=v),S=de(S,1),y=de(y,1)}return T=L(b,I.j(T)),new K(I,T)}for(I=d;b.l(T)>=0;){for(y=Math.max(1,Math.floor(b.m()/T.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=u(y),v=A.j(T);R(v)||v.l(b)>0;)y-=S,A=u(y),v=A.j(T);N(A)&&(A=m),I=I.add(A),b=L(b,v)}return new K(I,b)}t.B=function(b){return G(this,b).h},t.and=function(b){const T=Math.max(this.g.length,b.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)&b.i(S);return new o(y,this.h&b.h)},t.or=function(b){const T=Math.max(this.g.length,b.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)|b.i(S);return new o(y,this.h|b.h)},t.xor=function(b){const T=Math.max(this.g.length,b.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)^b.i(S);return new o(y,this.h^b.h)};function oe(b){const T=b.g.length+1,y=[];for(let S=0;S<T;S++)y[S]=b.i(S)<<1|b.i(S-1)>>>31;return new o(y,b.h)}function de(b,T){const y=T>>5;T%=32;const S=b.g.length-y,I=[];for(let A=0;A<S;A++)I[A]=T>0?b.i(A+y)>>>T|b.i(A+y+1)<<32-T:b.i(A+y);return new o(I,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ny=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Yr=o}).apply(typeof Pp<"u"?Pp:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ry,co,sy,Xa,Vu,iy,oy,ay;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in p))break e;p=p[O]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function d(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,O,V){for(var Z=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)Z[Ne-2]=arguments[Ne];return h.prototype[O].apply(g,Z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function N(a,h){for(let g=1;g<arguments.length;g++){const O=arguments[g];var p=typeof O;if(p=p!="object"?p:O?Array.isArray(O)?"array":p:"null",p=="array"||p=="object"&&typeof O.length=="number"){p=a.length||0;const V=O.length||0;a.length=p+V;for(let Z=0;Z<V;Z++)a[p+Z]=O[Z]}else a.push(O)}}class R{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function L(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,p){const g=K.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var K=new R(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,de=!1,b=new B,T=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(y)}};function y(){for(var a;a=L();){try{a.h.call(a.g)}catch(p){C(p)}var h=K;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}de=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a})();function v(a){return/^[\s\xa0]*$/.test(a)}function Se(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}d(Se,I),Se.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),ce=0;function Y(a,h,p,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=O,this.key=++ce,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function Tt(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function Oe(a){const h={};for(const p in a)h[p]=a[p];return h}const ot="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(a,h){let p,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(p in g)a[p]=g[p];for(let V=0;V<ot.length;V++)p=ot[V],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function ne(a){this.src=a,this.g={},this.h=0}ne.prototype.add=function(a,h,p,g,O){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const Z=Be(a,h,g,O);return Z>-1?(h=a[Z],p||(h.fa=!1)):(h=new Y(h,this.src,V,!!g,O),h.fa=p,a.push(h)),h};function Ie(a,h){const p=h.type;if(p in a.g){var g=a.g[p],O=Array.prototype.indexOf.call(g,h,void 0),V;(V=O>=0)&&Array.prototype.splice.call(g,O,1),V&&(_e(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Be(a,h,p,g){for(let O=0;O<a.length;++O){const V=a[O];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==g)return O}return-1}var M="closure_lm_"+(Math.random()*1e6|0),J={};function X(a,h,p,g,O){if(Array.isArray(h)){for(let V=0;V<h.length;V++)X(a,h[V],p,g,O);return null}return p=j(p),a&&a[Ke]?a.J(h,p,l(g)?!!g.capture:!1,O):ue(a,h,p,!1,g,O)}function ue(a,h,p,g,O,V){if(!h)throw Error("Invalid event type");const Z=l(O)?!!O.capture:!!O;let Ne=$(a);if(Ne||(a[M]=Ne=new ne(a)),p=Ne.add(h,p,g,Z,V),p.proxy)return p;if(g=Ce(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)A||(O=Z),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(k(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ce(){function a(p){return h.call(a.src,a.listener,p)}const h=x;return a}function E(a,h,p,g,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)E(a,h[V],p,g,O);else g=l(g)?!!g.capture:!!g,p=j(p),a&&a[Ke]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=Be(h,p,g,O),p>-1&&(_e(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Be(h,p,g,O)),(p=a>-1?h[a]:null)&&w(p))}function w(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ke])Ie(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(k(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=$(h))?(Ie(p,a),p.h==0&&(p.src=null,h[M]=null)):_e(a)}}}function k(a){return a in J?J[a]:J[a]="on"+a}function x(a,h){if(a.da)a=!0;else{h=new Se(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&w(a),a=p.call(g,h)}return a}function $(a){return a=a[M],a instanceof ne?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function j(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function z(){S.call(this),this.i=new ne(this),this.M=this,this.G=null}d(z,S),z.prototype[Ke]=!0,z.prototype.removeEventListener=function(a,h,p,g){E(this,a,h,p,g)};function W(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var O=h;h=new I(g,a),te(h,O)}O=!0;let V,Z;if(p)for(Z=p.length-1;Z>=0;Z--)V=h.g=p[Z],O=H(V,g,!0,h)&&O;if(V=h.g=a,O=H(V,g,!0,h)&&O,O=H(V,g,!1,h)&&O,p)for(Z=0;Z<p.length;Z++)V=h.g=p[Z],O=H(V,g,!1,h)&&O}z.prototype.N=function(){if(z.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)_e(p[g]);delete a.g[h],a.h--}}this.G=null},z.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},z.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function H(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let V=0;V<h.length;++V){const Z=h[V];if(Z&&!Z.da&&Z.capture==p){const Ne=Z.listener,At=Z.ha||Z.src;Z.fa&&Ie(a.i,Z),O=Ne.call(At,g)!==!1&&O}}return O&&!g.defaultPrevented}function pe(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function re(a){a.g=pe(()=>{a.g=null,a.i&&(a.i=!1,re(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class fe extends S{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:re(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(a){S.call(this),this.h=a,this.g={}}d(me,S);var we=[];function Pe(a){be(a.g,function(h,p){this.g.hasOwnProperty(p)&&w(h)},a),a.g={}}me.prototype.N=function(){me.Z.N.call(this),Pe(this)},me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Le=o.JSON.stringify,It=o.JSON.parse,wt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kt(){}function Ft(){}var Ut={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tn(){I.call(this,"d")}d(Tn,I);function Ye(){I.call(this,"c")}d(Ye,I);var nt={},er=null;function In(){return er=er||new z}nt.Ia="serverreachability";function ga(a){I.call(this,nt.Ia,a)}d(ga,I);function Ln(a){const h=In();W(h,new ga(h))}nt.STAT_EVENT="statevent";function us(a,h){I.call(this,nt.STAT_EVENT,a),this.stat=h}d(us,I);function Ot(a){const h=In();W(h,new us(h,a))}nt.Ja="timingevent";function Sr(a,h){I.call(this,nt.Ja,a),this.size=h}d(Sr,I);function hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function fs(){this.g=!0}fs.prototype.ua=function(){this.g=!1};function ut(a,h,p,g,O,V){a.info(function(){if(a.g)if(V){var Z="",Ne=V.split("&");for(let Xe=0;Xe<Ne.length;Xe++){var At=Ne[Xe].split("=");if(At.length>1){const Pt=At[0];At=At[1];const Mn=Pt.split("_");Z=Mn.length>=2&&Mn[1]=="type"?Z+(Pt+"="+At+"&"):Z+(Pt+"=redacted&")}}}else Z=null;else Z=V;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+p+`
`+Z})}function br(a,h,p,g,O,V,Z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+p+`
`+V+" "+Z})}function Cr(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Li(a,p)+(g?" "+g:"")})}function _a(a,h){a.info(function(){return"TIMEOUT: "+h})}fs.prototype.info=function(){};function Li(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var O=g[0];if(O!="noop"&&O!="stop"&&O!="close")for(let Z=1;Z<g.length;Z++)g[Z]=""}}}}return Le(V)}catch{return h}}var ds={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ya;function en(){}d(en,kt),en.prototype.g=function(){return new XMLHttpRequest},ya=new en;function on(a){return encodeURIComponent(String(a))}function va(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function wn(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new me(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hs}function Hs(){this.i=null,this.g="",this.h=!1}var Mi={},an={};function Gs(a,h,p){a.M=1,a.A=Ta(xn(h)),a.u=p,a.R=!0,Fi(a,null)}function Fi(a,h){a.F=Date.now(),he(a),a.B=xn(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Nf(p.i,"t",g),a.C=0,p=a.j.L,a.h=new Hs,a.g=Kf(a.j,p?h:null,!a.u),a.P>0&&(a.O=new fe(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(we[0]=O.toString()),O=we);for(let V=0;V<O.length;V++){const Z=X(p,O[V],g||h.handleEvent,!1,h.h||h);if(!Z)break;h.g[Z.key]=Z}h=a.J?Oe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ln(),ut(a.i,a.v,a.B,a.l,a.S,a.u)}wn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Dr(a)==3?h.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const Ne=Dr(this.g),At=this.g.ya(),Xe=this.g.ca();if(!(Ne<3)&&(Ne!=3||this.g&&(this.h.h||this.g.la()||Mf(this.g)))){this.K||Ne!=4||At==7||(At==8||Xe<=0?Ln(3):Ln(2)),Q(this);var h=this.g.ca();this.X=h;var p=Ea(this);if(this.o=h==200,br(this.i,this.v,this.B,this.l,this.S,Ne,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,O=this.g;if((g=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var V=g;break t}}V=null}if(a=V)Cr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mt(this,a);else{this.o=!1,this.m=3,Ot(12),qe(this),le(this);break e}}if(this.R){a=!0;let Pt;for(;!this.K&&this.C<p.length;)if(Pt=Ec(this,p),Pt==an){Ne==4&&(this.m=4,Ot(14),a=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Mi){this.m=4,Ot(15),Cr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Cr(this.i,this.l,Pt,null),mt(this,Pt);if(Ui(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||p.length!=0||this.h.h||(this.m=1,Ot(16),a=!1),this.o=this.o&&a,!a)Cr(this.i,this.l,p,"[Invalid Chunked Response]"),qe(this),le(this);else if(p.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Sc(Z),Z.P=!0,Ot(11))}}else Cr(this.i,this.l,p,null),mt(this,p);Ne==4&&qe(this),this.o&&!this.K&&(Ne==4?Hf(this.j,this):(this.o=!1,he(this)))}else cE(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ot(12)):(this.m=0,Ot(13)),qe(this),le(this)}}}catch{}finally{}};function Ea(a){if(!Ui(a))return a.g.la();const h=Mf(a.g);if(h==="")return"";let p="";const g=h.length,O=Dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return qe(a),le(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(O&&V==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Ui(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ec(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?an:(p=Number(h.substring(p,g)),isNaN(p)?Mi:(g+=1,g+p>h.length?an:(h=h.slice(g,g+p),a.C=g+p,h)))}wn.prototype.cancel=function(){this.K=!0,qe(this)};function he(a){a.T=Date.now()+a.H,P(a,a.H)}function P(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=hs(u(a.aa,a),h)}function Q(a){a.D&&(o.clearTimeout(a.D),a.D=null)}wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(_a(this.i,this.B),this.M!=2&&(Ln(),Ot(17)),qe(this),this.m=2,le(this)):P(this,this.T-a)};function le(a){a.j.I==0||a.K||Hf(a.j,a)}function qe(a){Q(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Pe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function mt(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||ps(p.h,a))){if(!a.L&&ps(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Sa(p),Aa(p);else break e;Rc(p),Ot(18)}}else p.xa=O[1],0<p.xa-p.K&&O[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=hs(u(p.Va,p),6e3));tr(p.h)<=1&&p.ta&&(p.ta=void 0)}else gs(p,11)}else if((a.L||p.g==a)&&Sa(p),!v(h))for(O=p.Ba.g.parse(h),h=0;h<O.length;h++){let Xe=O[h];const Pt=Xe[0];if(!(Pt<=p.K))if(p.K=Pt,Xe=Xe[1],p.I==2)if(Xe[0]=="c"){p.M=Xe[1],p.ba=Xe[2];const Mn=Xe[3];Mn!=null&&(p.ka=Mn,p.j.info("VER="+p.ka));const _s=Xe[4];_s!=null&&(p.za=_s,p.j.info("SVER="+p.za));const kr=Xe[5];kr!=null&&typeof kr=="number"&&kr>0&&(g=1.5*kr,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Or=a.g;if(Or){const Ca=Or.g?Or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var V=g.h;V.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ht(V,V.h),V.h=null))}if(g.G){const bc=Or.g?Or.g.getResponseHeader("X-HTTP-Session-Id"):null;bc&&(g.wa=bc,rt(g.J,g.G,bc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var Z=a;if(g.na=zf(g,g.L?g.ba:null,g.W),Z.L){Bi(g.h,Z);var Ne=Z,At=g.O;At&&(Ne.H=At),Ne.D&&(Q(Ne),he(Ne)),g.g=Z}else jf(g);p.i.length>0&&Ra(p)}else Xe[0]!="stop"&&Xe[0]!="close"||gs(p,7);else p.I==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?gs(p,7):Ac(p):Xe[0]!="noop"&&p.l&&p.l.qa(Xe),p.A=0)}}Ln(4)}catch{}}var at=class{constructor(a,h){this.g=a,this.map=h}};function Vt(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pn(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tr(a){return a.h?1:a.g?a.g.size:0}function ps(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ht(a,h){a.g?a.g.add(h):a.h=h}function Bi(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Vt.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $i(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return _(a.i)}var Rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xv(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let O,V=null;g>=0?(O=a[p].substring(0,g),V=a[p].substring(g+1)):O=a[p],h(O,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Pr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Pr?(this.l=a.l,ji(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.u),this.h=a.h,Tc(this,Df(a.i)),this.m=a.m):a&&(h=String(a).match(Rf))?(this.l=!1,ji(this,h[1]||"",!0),this.o=Hi(h[2]||""),this.g=Hi(h[3]||"",!0),qi(this,h[4]),this.h=Hi(h[5]||"",!0),Tc(this,h[6]||"",!0),this.m=Hi(h[7]||"")):(this.l=!1,this.i=new Wi(null,this.l))}Pr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Gi(h,Sf,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Gi(h,Sf,!0),"@"),a.push(on(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Gi(p,p.charAt(0)=="/"?eE:Zv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Gi(p,nE)),a.join("")},Pr.prototype.resolve=function(a){const h=xn(this);let p=!!a.j;p?ji(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)qi(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var O=h.h.lastIndexOf("/");O!=-1&&(g=h.h.slice(0,O+1)+g)}if(O=g,O==".."||O==".")g="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){g=O.lastIndexOf("/",0)==0,O=O.split("/");const V=[];for(let Z=0;Z<O.length;){const Ne=O[Z++];Ne=="."?g&&Z==O.length&&V.push(""):Ne==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&Z==O.length&&V.push("")):(V.push(Ne),g=!0)}g=V.join("/")}else g=O}return p?h.h=g:p=a.i.toString()!=="",p?Tc(h,Df(a.i)):p=!!a.m,p&&(h.m=a.m),h};function xn(a){return new Pr(a)}function ji(a,h,p){a.j=p?Hi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Tc(a,h,p){h instanceof Wi?(a.i=h,rE(a.i,a.l)):(p||(h=Gi(h,tE)),a.i=new Wi(h,a.l))}function rt(a,h,p){a.i.set(h,p)}function Ta(a){return rt(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Hi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Jv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sf=/[#\/\?@]/g,Zv=/[#\?:]/g,eE=/[#\?]/g,tE=/[#\?@]/g,nE=/#/g;function Wi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ms(a){a.g||(a.g=new Map,a.h=0,a.i&&Xv(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Wi.prototype,t.add=function(a,h){ms(this),this.i=null,a=Ws(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function bf(a,h){ms(a),h=Ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Cf(a,h){return ms(a),h=Ws(a,h),a.g.has(h)}t.forEach=function(a,h){ms(this),this.g.forEach(function(p,g){p.forEach(function(O){a.call(h,O,g,this)},this)},this)};function Pf(a,h){ms(a);let p=[];if(typeof h=="string")Cf(a,h)&&(p=p.concat(a.g.get(Ws(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return ms(this),this.i=null,a=Ws(this,a),Cf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Pf(this,a),a.length>0?String(a[0]):h):h};function Nf(a,h,p){bf(a,h),p.length>0&&(a.i=null,a.g.set(Ws(a,h),_(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const O=on(p);p=Pf(this,p);for(let V=0;V<p.length;V++){let Z=O;p[V]!==""&&(Z+="="+on(p[V])),a.push(Z)}}return this.i=a.join("&")};function Df(a){const h=new Wi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function rE(a,h){h&&!a.j&&(ms(a),a.i=null,a.g.forEach(function(p,g){const O=g.toLowerCase();g!=O&&(bf(this,g),Nf(this,O,p))},a)),a.j=h}function sE(a,h){const p=new fs;if(o.Image){const g=new Image;g.onload=f(Nr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Nr,p,"TestLoadImage: error",!1,h,g),g.onabort=f(Nr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Nr,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function iE(a,h){const p=new fs,g=new AbortController,O=setTimeout(()=>{g.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(O),V.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Nr(p,"TestPingServer: error",!1,h)})}function Nr(a,h,p,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(p)}catch{}}function oE(){this.g=new wt}function Ic(a){this.i=a.Sb||null,this.h=a.ab||!1}d(Ic,kt),Ic.prototype.g=function(){return new Ia(this.i,this.h)};function Ia(a,h){z.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Ia,z),t=Ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ki(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ki(this)),this.g&&(this.readyState=3,Ki(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function kf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zi(this):Ki(this),this.readyState==3&&kf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,zi(this))},t.Na=function(a){this.g&&(this.response=a,zi(this))},t.ga=function(){this.g&&zi(this)};function zi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ki(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Ki(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Of(a){let h="";return be(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function wc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Of(p),typeof a=="string"?p!=null&&on(p):rt(a,h,p))}function lt(a){z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(lt,z);var aE=/^https?$/i,lE=["POST","PUT"];t=lt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ya.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Vf(this,V);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)p.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())p.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(lE,h,void 0)>=0)||g||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Z]of p)this.g.setRequestHeader(V,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Vf(this,V)}};function Vf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Lf(a),wa(a)}function Lf(a){a.A||(a.A=!0,W(a,"complete"),W(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,W(this,"complete"),W(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),lt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?xf(this):this.Xa())},t.Xa=function(){xf(this)};function xf(a){if(a.h&&typeof i<"u"){if(a.v&&Dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(W(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=V===0){let Z=String(a.D).match(Rf)[1]||null;!Z&&o.self&&o.self.location&&(Z=o.self.location.protocol.slice(0,-1)),g=!aE.test(Z?Z.toLowerCase():"")}p=g}if(p)W(a,"complete"),W(a,"success");else{a.o=6;try{var O=Dr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Lf(a)}}finally{wa(a)}}}}function wa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||W(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),It(h)}};function Mf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cE(a){const h={};a=(a.g&&Dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var p=va(a[g]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[O]||[];h[O]=V,V.push(p)}Tt(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Ff(a){this.za=0,this.i=[],this.j=new fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qi("baseRetryDelayMs",5e3,a),this.Za=Qi("retryDelaySeedMs",1e4,a),this.Ta=Qi("forwardChannelMaxRetries",2,a),this.va=Qi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Vt(a&&a.concurrentRequestLimit),this.Ba=new oE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ff.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){Ot(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=zf(this,null,this.W),Ra(this)};function Ac(a){if(Uf(a),a.I==3){var h=a.V++,p=xn(a.J);if(rt(p,"SID",a.M),rt(p,"RID",h),rt(p,"TYPE","terminate"),Yi(a,p),h=new wn(a,a.j,h),h.M=2,h.A=Ta(xn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Kf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),he(h)}Wf(a)}function Aa(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function Uf(a){Aa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Sa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ra(a){if(!pn(a.h)&&!a.m){a.m=!0;var h=a.Ea;oe||T(),de||(oe(),de=!0),b.add(h,a),a.D=0}}function uE(a,h){return tr(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=hs(u(a.Ea,a,h),Gf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new wn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Oe(V),te(V,this.U)):V=this.U),this.u!==null||this.R||(O.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=$f(this,O,h),p=xn(this.J),rt(p,"RID",a),rt(p,"CVER",22),this.G&&rt(p,"X-HTTP-Session-Id",this.G),Yi(this,p),V&&(this.R?h="headers="+on(Of(V))+"&"+h:this.u&&wc(p,this.u,V)),ht(this.h,O),this.Ra&&rt(p,"TYPE","init"),this.S?(rt(p,"$req",h),rt(p,"SID","null"),O.U=!0,Gs(O,p,null)):Gs(O,p,h),this.I=2}}else this.I==3&&(a?Bf(this,a):this.i.length==0||pn(this.h)||Bf(this))};function Bf(a,h){var p;h?p=h.l:p=a.V++;const g=xn(a.J);rt(g,"SID",a.M),rt(g,"RID",p),rt(g,"AID",a.K),Yi(a,g),a.u&&a.o&&wc(g,a.u,a.o),p=new wn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=$f(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ht(a.h,p),Gs(p,g,h)}function Yi(a,h){a.H&&be(a.H,function(p,g){rt(h,g,p)}),a.l&&be({},function(p,g){rt(h,g,p)})}function $f(a,h,p){p=Math.min(a.i.length,p);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let Ne=-1;for(;;){const At=["count="+p];Ne==-1?p>0?(Ne=O[0].g,At.push("ofs="+Ne)):Ne=0:At.push("ofs="+Ne);let Xe=!0;for(let Pt=0;Pt<p;Pt++){var V=O[Pt].g;const Mn=O[Pt].map;if(V-=Ne,V<0)Ne=Math.max(0,O[Pt].g-100),Xe=!1;else try{V="req"+V+"_"||"";try{var Z=Mn instanceof Map?Mn:Object.entries(Mn);for(const[_s,kr]of Z){let Or=kr;l(kr)&&(Or=Le(kr)),At.push(V+_s+"="+encodeURIComponent(Or))}}catch(_s){throw At.push(V+"type="+encodeURIComponent("_badmap")),_s}}catch{g&&g(Mn)}}if(Xe){Z=At.join("&");break e}}Z=void 0}return a=a.i.splice(0,p),h.G=a,Z}function jf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;oe||T(),de||(oe(),de=!0),b.add(h,a),a.A=0}}function Rc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=hs(u(a.Da,a),Gf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,qf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=hs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ot(10),Aa(this),qf(this))};function Sc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function qf(a){a.g=new wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=xn(a.na);rt(h,"RID","rpc"),rt(h,"SID",a.M),rt(h,"AID",a.K),rt(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&rt(h,"TO",a.ia),rt(h,"TYPE","xmlhttp"),Yi(a,h),a.u&&a.o&&wc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ta(xn(h)),p.u=null,p.R=!0,Fi(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Aa(this),Rc(this),Ot(19))};function Sa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Hf(a,h){var p=null;if(a.g==h){Sa(a),Sc(a),a.g=null;var g=2}else if(ps(a.h,h))p=h.G,Bi(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;g=In(),W(g,new Sr(g,p)),Ra(a)}else jf(a);else if(O=h.m,O==3||O==0&&h.X>0||!(g==1&&uE(a,h)||g==2&&Rc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),O){case 1:gs(a,5);break;case 4:gs(a,10);break;case 3:gs(a,6);break;default:gs(a,2)}}}function Gf(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function gs(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),g=a.Ua;const O=!g;g=new Pr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ji(g,"https"),Ta(g),O?sE(g.toString(),p):iE(g.toString(),p)}else Ot(2);a.I=0,a.l&&a.l.pa(h),Wf(a),Uf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Wf(a){if(a.I=0,a.ja=[],a.l){const h=$i(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function zf(a,h,p){var g=p instanceof Pr?xn(p):new Pr(p);if(g.g!="")h&&(g.g=h+"."+g.g),qi(g,g.u);else{var O=o.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const V=new Pr(null);g&&ji(V,g),h&&(V.g=h),O&&qi(V,O),p&&(V.h=p),g=V}return p=a.G,h=a.wa,p&&h&&rt(g,p,h),rt(g,"VER",a.ka),Yi(a,g),g}function Kf(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new lt(new Ic({ab:p})):new lt(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qf(){}t=Qf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ba(){}ba.prototype.g=function(a,h){return new ln(a,h)};function ln(a,h){z.call(this),this.g=new Ff(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new zs(this)}d(ln,z),ln.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){Ac(this.g)},ln.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Le(a),a=p);h.i.push(new at(h.Ya++,a)),h.I==3&&Ra(h)},ln.prototype.N=function(){this.g.l=null,delete this.j,Ac(this.g),delete this.g,ln.Z.N.call(this)};function Yf(a){Tn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}d(Yf,Tn);function Xf(){Ye.call(this),this.status=1}d(Xf,Ye);function zs(a){this.g=a}d(zs,Qf),zs.prototype.ra=function(){W(this.g,"a")},zs.prototype.qa=function(a){W(this.g,new Yf(a))},zs.prototype.pa=function(a){W(this.g,new Xf)},zs.prototype.oa=function(){W(this.g,"b")},ba.prototype.createWebChannel=ba.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,ay=function(){return new ba},oy=function(){return In()},iy=nt,Vu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,Xa=ds,xi.COMPLETE="complete",sy=xi,Ft.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",z.prototype.listen=z.prototype.J,co=Ft,lt.prototype.listenOnce=lt.prototype.K,lt.prototype.getLastError=lt.prototype.Ha,lt.prototype.getLastErrorCode=lt.prototype.ya,lt.prototype.getStatus=lt.prototype.ca,lt.prototype.getResponseJson=lt.prototype.La,lt.prototype.getResponseText=lt.prototype.la,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Fa,ry=lt}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const Np="@firebase/firestore",Dp="4.9.3";/**
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
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Ni="12.7.0";/**
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
 */const Ms=new wh("@firebase/firestore");function Xs(){return Ms.logLevel}function ae(t,...e){if(Ms.logLevel<=Me.DEBUG){const n=e.map(xh);Ms.debug(`Firestore (${Ni}): ${t}`,...n)}}function Er(t,...e){if(Ms.logLevel<=Me.ERROR){const n=e.map(xh);Ms.error(`Firestore (${Ni}): ${t}`,...n)}}function _i(t,...e){if(Ms.logLevel<=Me.WARN){const n=e.map(xh);Ms.warn(`Firestore (${Ni}): ${t}`,...n)}}function xh(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function Ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ly(t,r,n)}function ly(t,e,n){let r=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Er(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ly(e,s,r)}function Re(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class cy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n($t.UNAUTHENTICATED)))}shutdown(){}}class Xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Jb{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new cy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class Zb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Zb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n($t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function Lu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Yc(s)===Yc(i)?Fe(s,i):Yc(s)?1:-1}return Fe(t.length,e.length)}const rC=55296,sC=57343;function Yc(t){const e=t.charCodeAt(0);return e>=rC&&e<=sC}function yi(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Op="__name__";class jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Fe(e.length,n.length)}static compareSegments(e,n){const r=jn.isNumericId(e),s=jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?jn.extractNumericId(e).compare(jn.extractNumericId(n)):Lu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class Ze extends jn{construct(e,n,r){return new Ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ze(n)}static emptyPath(){return new Ze([])}}const iC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends jn{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return iC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Op}static keyField(){return new xt([Op])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ze.fromString(e))}static fromName(e){return new ge(Ze.fromString(e).popFirst(5))}static empty(){return new ge(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ze(e.slice()))}}/**
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
 */function uy(t,e,n){if(!n)throw new ee(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oC(t,e,n,r){if(e===!0&&r===!0)throw new ee(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vp(t){if(!ge.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lp(t){if(ge.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ee(12329,{type:typeof t})}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new ee(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function aC(t,e){if(e<=0)throw new ee(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function vt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ia(t,e){if(!hy(t))throw new ee(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const xp=-62135596800,Mp=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mp);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xp)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mp}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ia(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:vt("string",tt._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new tt(0,0))}static max(){return new Te(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fo=-1;function lC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Zr(s,ge.empty(),e)}function cC(t){return new Zr(t.readTime,t.key,Fo)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(Te.min(),ge.empty(),Fo)}static max(){return new Zr(Te.max(),ge.empty(),Fo)}}function uC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const hC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Di(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==hC)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):q.reject(n)}static resolve(e){return new q(((n,r)=>{n(e)}))}static reject(e){return new q(((n,r)=>{r(e)}))}static waitFor(e){return new q(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next((s=>s?q.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new q(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new q(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function dC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ki(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ec{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ec.ce=-1;/**
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
 */const Fh=-1;function tc(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function pC(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const fy="";function mC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Fp(e)),e=gC(t.get(n),e);return Fp(e)}function gC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case fy:n+="";break;default:n+=i}}return n}function Fp(t){return t+fy+""}/**
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
 */function Up(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class it{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bp(this.data.getIterator())}getIteratorFrom(e){return new Bp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class Bp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new Ct(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class py extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new py("Invalid base64 string: "+i):i}})(e);return new Mt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const _C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=_C.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ft(t.seconds),nanos:ft(t.nanos)}}function ft(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */const my="server_timestamp",gy="__type__",_y="__previous_value__",yy="__local_write_time__";function nc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gy])==null?void 0:r.stringValue)===my}function rc(t){const e=t.mapValue.fields[_y];return nc(e)?rc(e):e}function Uo(t){const e=es(t.mapValue.fields[yy].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class yC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const wl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||wl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===wl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vy="__type__",vC="__max__",xa={mapValue:{}},Ey="__vector__",Al="value";function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nc(t)?4:TC(t)?9007199254740991:EC(t)?10:11:Ee(28295,{value:t})}function Zn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=es(s.timestampValue),l=es(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return ts(s.bytesValue).isEqual(ts(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return ft(s.geoPointValue.latitude)===ft(i.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ft(s.integerValue)===ft(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ft(s.doubleValue),l=ft(i.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Up(o)!==Up(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Zn(o[c],l[c])))return!1;return!0})(t,e);default:return Ee(52216,{left:t})}}function $o(t,e){return(t.values||[]).find((n=>Zn(n,e)))!==void 0}function vi(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=ft(i.integerValue||i.doubleValue),c=ft(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return $p(t.timestampValue,e.timestampValue);case 4:return $p(Uo(t),Uo(e));case 5:return Lu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=ts(i),c=ts(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Fe(l[u],c[u]);if(f!==0)return f}return Fe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Fe(ft(i.latitude),ft(o.latitude));return l!==0?l:Fe(ft(i.longitude),ft(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return jp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,_,N,R;const l=i.fields||{},c=o.fields||{},u=(m=l[Al])==null?void 0:m.arrayValue,f=(_=c[Al])==null?void 0:_.arrayValue,d=Fe(((N=u==null?void 0:u.values)==null?void 0:N.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return d!==0?d:jp(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===xa.mapValue&&o===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=Lu(c[d],f[d]);if(m!==0)return m;const _=vi(l[c[d]],u[f[d]]);if(_!==0)return _}return Fe(c.length,f.length)})(t.mapValue,e.mapValue);default:throw Ee(23264,{he:n})}}function $p(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=es(t),r=es(e),s=Fe(n.seconds,r.seconds);return s!==0?s:Fe(n.nanos,r.nanos)}function jp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vi(n[s],r[s]);if(i)return i}return Fe(n.length,r.length)}function Ei(t){return xu(t)}function xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=es(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ts(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ge.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xu(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xu(n.fields[o])}`;return s+"}"})(t.mapValue):Ee(61005,{value:t})}function Ja(t){switch(ns(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rc(t);return e?16+Ja(e):16;case 5:return 2*t.stringValue.length;case 6:return ts(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ja(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ls(r.fields,((i,o)=>{s+=i.length+Ja(o)})),s})(t.mapValue);default:throw Ee(13486,{value:t})}}function Rl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mu(t){return!!t&&"integerValue"in t}function Uh(t){return!!t&&"arrayValue"in t}function qp(t){return!!t&&"nullValue"in t}function Hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Za(t){return!!t&&"mapValue"in t}function EC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vy])==null?void 0:r.stringValue)===Ey}function Ro(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ro(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return{...t}}function TC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vC}/**
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
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=xt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ro(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Za(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ls(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new sn(Ro(this.value))}}function Ty(t){const e=[];return ls(t.fields,((n,r)=>{const s=new xt([n]);if(Za(r)){const i=Ty(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new dn(e)}/**
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
 */class qt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new qt(e,0,Te.min(),Te.min(),Te.min(),sn.empty(),0)}static newFoundDocument(e,n,r,s){return new qt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new qt(e,2,n,Te.min(),Te.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,Te.min(),Te.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ti{constructor(e,n){this.position=e,this.inclusive=n}}function Gp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ge.comparator(ge.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function IC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Iy{}class yt extends Iy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AC(e,n,r):n==="array-contains"?new bC(e,r):n==="in"?new CC(e,r):n==="not-in"?new PC(e,r):n==="array-contains-any"?new NC(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RC(e,r):new SC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vi(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Iy{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new On(e,n)}matches(e){return wy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function wy(t){return t.op==="and"}function Ay(t){return wC(t)&&wy(t)}function wC(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Fu(t){if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+Ei(t.value);if(Ay(t))return t.filters.map((e=>Fu(e))).join(",");{const e=t.filters.map((n=>Fu(n))).join(",");return`${t.op}(${e})`}}function Ry(t,e){return t instanceof yt?(function(r,s){return s instanceof yt&&r.op===s.op&&r.field.isEqual(s.field)&&Zn(r.value,s.value)})(t,e):t instanceof On?(function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Ry(o,s.filters[l])),!0):!1})(t,e):void Ee(19439)}function Sy(t){return t instanceof yt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ei(n.value)}`})(t):t instanceof On?(function(n){return n.op.toString()+" {"+n.getFilters().map(Sy).join(" ,")+"}"})(t):"Filter"}class AC extends yt{constructor(e,n,r){super(e,n,r),this.key=ge.fromName(r.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class RC extends yt{constructor(e,n){super(e,"in",n),this.keys=by("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class SC extends yt{constructor(e,n){super(e,"not-in",n),this.keys=by("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function by(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>ge.fromName(r.referenceValue)))}class bC extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uh(n)&&$o(n.arrayValue,this.value)}}class CC extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class PC extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class NC extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>$o(this.value.arrayValue,r)))}}/**
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
 */class DC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function zp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DC(t,e,n,r,s,i,o)}function Bh(t){const e=Re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Fu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ei(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ei(r))).join(",")),e.Te=n}return e.Te}function $h(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ry(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wp(t.startAt,e.startAt)&&Wp(t.endAt,e.endAt)}function Uu(t){return ge.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kC(t,e,n,r,s,i,o,l){return new Bs(t,e,n,r,s,i,o,l)}function jh(t){return new Bs(t)}function Kp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qh(t){return t.collectionGroup!==null}function ci(t){const e=Re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ct(xt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new jo(i,r))})),n.has(xt.keyField().canonicalString())||e.Ie.push(new jo(xt.keyField(),r))}return e.Ie}function zn(t){const e=Re(t);return e.Ee||(e.Ee=OC(e,ci(t))),e.Ee}function OC(t,e){if(t.limitType==="F")return zp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new jo(s.field,i)}));const n=t.endAt?new Ti(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ti(t.startAt.position,t.startAt.inclusive):null;return zp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bu(t,e){const n=t.filters.concat([e]);return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sl(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return $h(zn(t),zn(e))&&t.limitType===e.limitType}function Cy(t){return`${Bh(zn(t))}|lt:${t.limitType}`}function Js(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Sy(s))).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ei(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ei(s))).join(",")),`Target(${r})`})(zn(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ge.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Gp(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,ci(r),s)||r.endAt&&!(function(o,l,c){const u=Gp(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,ci(r),s))})(t,e)}function VC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Py(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=LC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LC(t,e,n){const r=t.field.isKeyField()?ge.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?vi(c,u):Ee(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ee(19790,{direction:t.dir})}}/**
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
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return dy(this.inner)}size(){return this.innerSize}}/**
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
 */const xC=new it(ge.comparator);function Tr(){return xC}const Ny=new it(ge.comparator);function uo(...t){let e=Ny;for(const n of t)e=e.insert(n.key,n);return e}function Dy(t){let e=Ny;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Cs(){return So()}function ky(){return So()}function So(){return new $s((t=>t.toString()),((t,e)=>t.isEqual(e)))}const MC=new it(ge.comparator),FC=new Ct(ge.comparator);function Ue(...t){let e=FC;for(const n of t)e=e.add(n);return e}const UC=new Ct(Fe);function BC(){return UC}/**
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
 */function Hh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function Oy(t){return{integerValue:""+t}}function Vy(t,e){return pC(e)?Oy(e):Hh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oc{constructor(){this._=void 0}}function $C(t,e,n){return t instanceof qo?(function(s,i){const o={fields:{[gy]:{stringValue:my},[yy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nc(i)&&(i=rc(i)),i&&(o.fields[_y]=i),{mapValue:o}})(n,e):t instanceof Ho?xy(t,e):t instanceof Go?My(t,e):(function(s,i){const o=Ly(s,i),l=Qp(o)+Qp(s.Ae);return Mu(o)&&Mu(s.Ae)?Oy(l):Hh(s.serializer,l)})(t,e)}function jC(t,e,n){return t instanceof Ho?xy(t,e):t instanceof Go?My(t,e):n}function Ly(t,e){return t instanceof Wo?(function(r){return Mu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class qo extends oc{}class Ho extends oc{constructor(e){super(),this.elements=e}}function xy(t,e){const n=Fy(e);for(const r of t.elements)n.some((s=>Zn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Go extends oc{constructor(e){super(),this.elements=e}}function My(t,e){let n=Fy(e);for(const r of t.elements)n=n.filter((s=>!Zn(s,r)));return{arrayValue:{values:n}}}class Wo extends oc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Qp(t){return ft(t.integerValue||t.doubleValue)}function Fy(t){return Uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Uy{constructor(e,n){this.field=e,this.transform=n}}function qC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ho&&s instanceof Ho||r instanceof Go&&s instanceof Go?yi(r.elements,s.elements,Zn):r instanceof Wo&&s instanceof Wo?Zn(r.Ae,s.Ae):r instanceof qo&&s instanceof qo})(t.transform,e.transform)}class HC{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function el(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function By(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jy(t.key,Pn.none()):new oa(t.key,t.data,Pn.none());{const n=t.data,r=sn.empty();let s=new Ct(xt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cs(t.key,r,new dn(s.toArray()),Pn.none())}}function GC(t,e,n){t instanceof oa?(function(s,i,o){const l=s.value.clone(),c=Xp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof cs?(function(s,i,o){if(!el(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Xp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll($y(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function bo(t,e,n,r){return t instanceof oa?(function(i,o,l,c){if(!el(i.precondition,o))return l;const u=i.value.clone(),f=Jp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof cs?(function(i,o,l,c){if(!el(i.precondition,o))return l;const u=Jp(i.fieldTransforms,c,o),f=o.data;return f.setAll($y(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,r):(function(i,o,l){return el(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function WC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ly(r.transform,s||null);i!=null&&(n===null&&(n=sn.empty()),n.set(r.field,i))}return n||null}function Yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yi(r,s,((i,o)=>qC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends ac{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cs extends ac{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $y(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Xp(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,jC(o,l,n[s]))}return r}function Jp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$C(i,o,e))}return r}class jy extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zC extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ky();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=By(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ue())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,((n,r)=>Yp(n,r)))&&yi(this.baseMutations,e.baseMutations,((n,r)=>Yp(n,r)))}}class Gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return MC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gh(e,n,r,s)}}/**
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
 */class QC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class YC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var gt,$e;function XC(t){switch(t){case F.OK:return Ee(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Ee(15467,{code:t})}}function qy(t){if(t===void 0)return Er("GRPC error has no .code"),F.UNKNOWN;switch(t){case gt.OK:return F.OK;case gt.CANCELLED:return F.CANCELLED;case gt.UNKNOWN:return F.UNKNOWN;case gt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case gt.INTERNAL:return F.INTERNAL;case gt.UNAVAILABLE:return F.UNAVAILABLE;case gt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case gt.NOT_FOUND:return F.NOT_FOUND;case gt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case gt.ABORTED:return F.ABORTED;case gt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case gt.DATA_LOSS:return F.DATA_LOSS;default:return Ee(39323,{code:t})}}($e=gt||(gt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function JC(){return new TextEncoder}/**
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
 */const ZC=new Yr([4294967295,4294967295],0);function Zp(t){const e=JC().encode(t),n=new ny;return n.update(e),new Uint8Array(n.digest())}function em(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Yr.fromNumber(r)));return s.compare(ZC)===1&&(s=new Yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Zp(e),[r,s]=em(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Zp(e),[r,s]=em(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lc(Te.min(),s,new it(Fe),Tr(),Ue())}}class aa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,Ue(),Ue(),Ue())}}/**
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
 */class tl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Hy{constructor(e,n){this.targetId=e,this.Ce=n}}class Gy{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tm{constructor(){this.ve=0,this.Fe=nm(),this.Me=Mt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ue(),n=Ue(),r=Ue();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Ee(38017,{changeType:i})}})),new aa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=nm()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tr(),this.Je=Ma(),this.He=Ma(),this.Ye=new it(Fe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Uu(i))if(r===0){const o=new ge(i.path);this.et(n,o,qt.newNoDocument(o,Te.min()))}else ze(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ts(r).toUint8Array()}catch(c){if(c instanceof py)return _i("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Wh(o,s,i)}catch(c){return _i(c instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Uu(l.target)){const c=new ge(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,qt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ue();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new lc(e,n,this.Ye,this.je,r);return this.je=Tr(),this.Je=Ma(),this.He=Ma(),this.Ye=new it(Fe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new tm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ct(Fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ct(Fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tm),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ma(){return new it(ge.comparator)}function nm(){return new it(ge.comparator)}const tP={asc:"ASCENDING",desc:"DESCENDING"},nP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rP={and:"AND",or:"OR"};class sP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $u(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return bl(t,e.toTimestamp())}function Kn(t){return ze(!!t,49232),Te.fromTimestamp((function(n){const r=es(n);return new tt(r.seconds,r.nanos)})(t))}function zh(t,e){return ju(t,e).canonicalString()}function ju(t,e){const n=(function(s){return new Ze(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function zy(t){const e=Ze.fromString(t);return ze(Jy(e),10190,{key:e.toString()}),e}function qu(t,e){return zh(t.databaseId,e.path)}function Xc(t,e){const n=zy(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ge(Qy(n))}function Ky(t,e){return zh(t.databaseId,e)}function oP(t){const e=zy(t);return e.length===4?Ze.emptyPath():Qy(e)}function Hu(t){return new Ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qy(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rm(t,e,n){return{name:qu(t,e),fields:n.value.mapValue.fields}}function aP(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ee(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(ze(f===void 0||typeof f=="string",58123),Mt.fromBase64String(f||"")):(ze(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Mt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?F.UNKNOWN:qy(u.code);return new ee(f,u.message||"")})(o);n=new Gy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xc(t,r.document.name),i=Kn(r.document.updateTime),o=r.document.createTime?Kn(r.document.createTime):Te.min(),l=new sn({mapValue:{fields:r.document.fields}}),c=qt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new tl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xc(t,r.document),i=r.readTime?Kn(r.readTime):Te.min(),o=qt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new tl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xc(t,r.document),i=r.removedTargetIds||[];n=new tl([],i,s,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YC(s,i),l=r.targetId;n=new Hy(l,o)}}return n}function lP(t,e){let n;if(e instanceof oa)n={update:rm(t,e.key,e.value)};else if(e instanceof jy)n={delete:qu(t,e.key)};else if(e instanceof cs)n={update:rm(t,e.key,e.data),updateMask:_P(e.fieldMask)};else{if(!(e instanceof zC))return Ee(16599,{Vt:e.type});n={verify:qu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Ee(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:iP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ee(27497)})(t,e.precondition)),n}function cP(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Kn(s.updateTime):Kn(i);return o.isEqual(Te.min())&&(o=Kn(i)),new HC(o,s.transformResults||[])})(n,e)))):[]}function uP(t,e){return{documents:[Ky(t,e.path)]}}function hP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ky(t,s);const i=(function(u){if(u.length!==0)return Xy(On.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Zs(m.field),direction:pP(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$u(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function fP(t){let e=oP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(d){const m=Yy(d);return m instanceof On&&Ay(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((m=>(function(N){return new jo(ei(N.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(d){let m;return m=typeof d=="object"?d.value:d,tc(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(d){const m=!!d.before,_=d.values||[];return new Ti(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const m=!d.before,_=d.values||[];return new Ti(_,m)})(n.endAt)),kC(e,s,o,i,l,"F",c,u)}function dP(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ei(n.unaryFilter.field);return yt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ei(n.unaryFilter.field);return yt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return yt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(t):t.fieldFilter!==void 0?(function(n){return yt.create(ei(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return On.create(n.compositeFilter.filters.map((r=>Yy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(n.compositeFilter.op))})(t):Ee(30097,{filter:t})}function pP(t){return tP[t]}function mP(t){return nP[t]}function gP(t){return rP[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ei(t){return xt.fromServerFormat(t.fieldPath)}function Xy(t){return t instanceof yt?(function(n){if(n.op==="=="){if(Hp(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NAN"}};if(qp(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hp(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NAN"}};if(qp(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(n.field),op:mP(n.op),value:n.value}}})(t):t instanceof On?(function(n){const r=n.getFilters().map((s=>Xy(s)));return r.length===1?r[0]:{compositeFilter:{op:gP(n.op),filters:r}}})(t):Ee(54877,{filter:t})}function _P(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Jy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hr{constructor(e,n,r,s,i=Te.min(),o=Te.min(),l=Mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yP{constructor(e){this.yt=e}}function vP(t){const e=fP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sl(e,e.limit,"L"):e}/**
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
 */class EP{constructor(){this.Cn=new TP}addToCollectionParentIndex(e,n){return this.Cn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Zr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class TP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ct(Ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ct(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const sm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zy=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(Zy,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */class Ii{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ii(0)}static cr(){return new Ii(-1)}}/**
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
 */const im="LruGarbageCollector",IP=1048576;function om([t,e],[n,r]){const s=Fe(t,n);return s===0?Fe(e,r):s}class wP{constructor(e){this.Ir=e,this.buffer=new Ct(om),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();om(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(im,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ki(n)?ae(im,"Ignoring IndexedDB error during garbage collection: ",n):await Di(n)}await this.Vr(3e5)}))}}class RP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return q.resolve(ec.ce);const r=new wP(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(sm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sm):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s)))).next((d=>(r=d,l=Date.now(),this.removeTargets(e,r,n)))).next((d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((d=>(u=Date.now(),Xs()<=Me.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d}))))}}function SP(t,e){return new RP(t,e)}/**
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
 */class bP{constructor(){this.changes=new $s((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class CP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&bo(r.mutation,s,dn.empty(),tt.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ue()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ue()){const s=Cs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=uo();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Cs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ue())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Tr();const o=So(),l=(function(){return So()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof cs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),bo(f.mutation,u,f.mutation.getFieldMask(),tt.now())):o.set(u.key,dn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new CP(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=So();let s=new it(((o,l)=>o-l)),i=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||dn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const d=(s.get(l.batchId)||Ue()).add(c);s=s.insert(l.batchId,d)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=ky();f.forEach((m=>{if(!i.has(m)){const _=By(n.get(m),r.get(m));_!==null&&d.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return q.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Cs());let l=Fo,c=i;return o.next((u=>q.forEach(u,((f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ue()))).next((f=>({batchId:l,changes:Dy(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next((r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next((l=>q.forEach(l,(c=>{const u=(function(d,m){return new Bs(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((d,m)=>{o=o.insert(d,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,qt.newInvalidDocument(f)))}));let l=uo();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&bo(f.mutation,u,dn.empty(),tt.now()),ic(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class NP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return q.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Kn(s.createTime)}})(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:vP(s.bundledQuery),readTime:Kn(s.readTime)}})(n)),q.resolve()}}/**
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
 */class DP{constructor(){this.overlays=new it(ge.comparator),this.qr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cs();return q.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Cs(),i=n.length+1,o=new ge(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new it(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Cs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Cs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return q.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QC(n,r));let i=this.qr.get(n);i===void 0&&(i=Ue(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kP{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
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
 */class Kh{constructor(){this.Qr=new Ct(Nt.$r),this.Ur=new Ct(Nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Nt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ge(new Ze([])),r=new Nt(n,e),s=new Nt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new Ze([])),r=new Nt(n,e),s=new Nt(n,e+1);let i=Ue();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||Fe(e.Yr,n.Yr)}static Kr(e,n){return Fe(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
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
 */class OP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ct(Nt.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Fh:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(Fe);return n.forEach((s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),q.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ge.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new ge(i),0);let l=new Ct(Fe);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),q.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ze(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return q.forEach(n.mutations,(s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Nt(n,0),s=this.Zr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class VP{constructor(e){this.ri=e,this.docs=(function(){return new it(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qt.newInvalidDocument(s))})),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,l=new ge(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uC(cC(f),r)<=0||(s.has(f.key)||ic(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Ee(9500)}ii(e,n){return q.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new LP(this)}getSize(e){return q.resolve(this.size)}}class LP extends bP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),q.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class xP{constructor(e){this.persistence=e,this.si=new $s((n=>Bh(n)),$h),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new Kh,this.targetCount=0,this.ai=Ii.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),q.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Pr(n),q.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),q.waitFor(i).next((()=>s))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this._i.containsKey(n))}}/**
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
 */class ev{constructor(e,n){this.ui={},this.overlays={},this.ci=new ec(0),this.li=!1,this.li=!0,this.hi=new kP,this.referenceDelegate=e(this),this.Pi=new xP(this),this.indexManager=new EP,this.remoteDocumentCache=(function(s){return new VP(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new yP(n),this.Ii=new NP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new OP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new MP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return q.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class MP extends fC{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.Ri=new Kh,this.Vi=null}static mi(e){return new Qh(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(r=>{const s=ge.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,Te.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return q.or([()=>q.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Cl{constructor(e,n){this.persistence=e,this.pi=new $s((r=>mC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=SP(this,n)}static mi(e,n){return new Cl(e,n)}Ei(){}di(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return q.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?q.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,Te.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ja(e.data.value)),n}br(e,n,r){return q.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ue(),s=Ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class FP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class UP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return pA()?8:dC(Wt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new FP;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Xs()<=Me.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(Xs()<=Me.DEBUG&&ae("QueryEngine","Query:",Js(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Xs()<=Me.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(n))):q.resolve())}ys(e,n){if(Kp(n))return q.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Sl(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ue(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Sl(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return Kp(n)||s.isEqual(Te.min())?q.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?q.resolve(null):(Xs()<=Me.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Js(n)),this.vs(e,o,n,lC(s,Fo)).next((l=>l)))}))}Ds(e,n){let r=new Ct(Py(e));return n.forEach(((s,i)=>{ic(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Xs()<=Me.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Js(n)),this.ps.getDocumentsMatchingQuery(e,n,Zr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Xh="LocalStore",BP=3e8;class $P{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new it(Fe),this.xs=new $s((i=>Bh(i)),$h),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function jP(t,e,n,r){return new $P(t,e,n,r)}async function tv(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ue();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function qP(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const d=u.batch,m=d.keys();let _=q.resolve();return m.forEach((N=>{_=_.next((()=>f.getEntry(c,N))).next((R=>{const C=u.docVersions.get(N);ze(C!==null,48541),R.version.compareTo(C)<0&&(d.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),f.addEntry(R)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,d)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ue();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function nv(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function HP(t,e){const n=Re(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,d)=>{const m=s.get(d);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(Mt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(d,_),(function(R,C,L){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=BP?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(m,_,f)&&l.push(n.Pi.updateTargetData(i,_))}));let c=Tr(),u=Ue();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(GP(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!r.isEqual(Te.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return q.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function GP(t,e,n){let r=Ue(),s=Ue();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Tr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ae(Xh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function WP(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function zP(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,q.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Gu(t,e,n){const r=Re(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ki(o))throw o;ae(Xh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function am(t,e,n){const r=Re(t);let s=Te.min(),i=Ue();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const d=Re(c),m=d.xs.get(f);return m!==void 0?q.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,f)})(r,o,zn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:Ue()))).next((l=>(KP(r,VC(e),l),{documents:l,Qs:i})))))}function KP(t,e,n){let r=t.Os.get(e)||Te.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class lm{constructor(){this.activeTargetIds=BC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QP{constructor(){this.Mo=new lm,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YP{Oo(e){}shutdown(){}}/**
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
 */const cm="ConnectivityMonitor";class um{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(cm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(cm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Fa=null;function Wu(){return Fa===null?Fa=(function(){return 268435456+Math.round(2147483648*Math.random())})():Fa++,"0x"+Fa.toString(16)}/**
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
 */const Jc="RestConnection",XP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===wl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Wu(),l=this.zo(e,n.toUriEncodedString());ae(Jc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=bi(u);return this.Jo(e,l,c,r,f).then((d=>(ae(Jc,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw _i(Jc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ni})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=XP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class ZP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Bt="WebChannelConnection";class e0 extends JP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Wu();return new Promise(((l,c)=>{const u=new ry;u.setWithCredentials(!0),u.listenOnce(sy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Xa.NO_ERROR:const d=u.getResponseJson();ae(Bt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Xa.TIMEOUT:ae(Bt,`RPC '${e}' ${o} timed out`),c(new ee(F.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const m=u.getStatus();if(ae(Bt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const N=_==null?void 0:_.error;if(N&&N.status&&N.message){const R=(function(L){const B=L.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(B)>=0?B:F.UNKNOWN})(N.status);c(new ee(R,N.message))}else c(new ee(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ee(F.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ae(Bt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ae(Bt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Wu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ay(),l=oy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ae(Bt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);this.I_(d);let m=!1,_=!1;const N=new ZP({Yo:C=>{_?ae(Bt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(ae(Bt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ae(Bt,`RPC '${e}' stream ${s} sending:`,C),d.send(C))},Zo:()=>d.close()}),R=(C,L,B)=>{C.listen(L,(K=>{try{B(K)}catch(G){setTimeout((()=>{throw G}),0)}}))};return R(d,co.EventType.OPEN,(()=>{_||(ae(Bt,`RPC '${e}' stream ${s} transport opened.`),N.o_())})),R(d,co.EventType.CLOSE,(()=>{_||(_=!0,ae(Bt,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(d))})),R(d,co.EventType.ERROR,(C=>{_||(_=!0,_i(Bt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),N.a_(new ee(F.UNAVAILABLE,"The operation could not be completed")))})),R(d,co.EventType.MESSAGE,(C=>{var L;if(!_){const B=C.data[0];ze(!!B,16349);const K=B,G=(K==null?void 0:K.error)||((L=K[0])==null?void 0:L.error);if(G){ae(Bt,`RPC '${e}' stream ${s} received error:`,G);const oe=G.status;let de=(function(y){const S=gt[y];if(S!==void 0)return qy(S)})(oe),b=G.message;de===void 0&&(de=F.INTERNAL,b="Unknown error status: "+oe+" with message "+G.message),_=!0,N.a_(new ee(de,b)),d.close()}else ae(Bt,`RPC '${e}' stream ${s} received:`,B),N.u_(B)}})),R(l,iy.STAT_EVENT,(C=>{C.stat===Vu.PROXY?ae(Bt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Vu.NOPROXY&&ae(Bt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Zc(){return typeof document<"u"?document:null}/**
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
 */function cc(t){return new sP(t,!0)}/**
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
 */class rv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const hm="PersistentStream";class sv{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ee(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(hm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ae(hm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class t0 extends sv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=aP(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Kn(o.readTime):Te.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Hu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Uu(c)?{documents:uP(i,c)}:{query:hP(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Wy(i,o.resumeToken);const u=$u(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=bl(i,o.snapshotVersion.toTimestamp());const u=$u(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=dP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Hu(this.serializer),n.removeTarget=e,this.q_(n)}}class n0 extends sv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=cP(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>lP(this.serializer,r)))};this.q_(n)}}/**
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
 */class r0{}class s0 extends r0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,ju(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(F.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,ju(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(F.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class i0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Er(n),this.aa=!1):ae("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Fs="RemoteStore";class o0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{js(this)&&(ae(Fs,"Restarting streams for network reachability change."),await(async function(c){const u=Re(c);u.Ea.add(4),await la(u),u.Ra.set("Unknown"),u.Ea.delete(4),await uc(u)})(this))}))})),this.Ra=new i0(r,s)}}async function uc(t){if(js(t))for(const e of t.da)await e(!0)}async function la(t){for(const e of t.da)await e(!1)}function iv(t,e){const n=Re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),tf(n)?ef(n):Oi(n).O_()&&Zh(n,e))}function Jh(t,e){const n=Re(t),r=Oi(n);n.Ia.delete(e),r.O_()&&ov(n,e),n.Ia.size===0&&(r.O_()?r.L_():js(n)&&n.Ra.set("Unknown"))}function Zh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).Y_(e)}function ov(t,e){t.Va.Ue(e),Oi(t).Z_(e)}function ef(t){t.Va=new eP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.Ra.ua()}function tf(t){return js(t)&&!Oi(t).x_()&&t.Ia.size>0}function js(t){return Re(t).Ea.size===0}function av(t){t.Va=void 0}async function a0(t){t.Ra.set("Online")}async function l0(t){t.Ia.forEach(((e,n)=>{Zh(t,e)}))}async function c0(t,e){av(t),tf(t)?(t.Ra.ha(e),ef(t)):t.Ra.set("Unknown")}async function u0(t,e,n){if(t.Ra.set("Online"),e instanceof Gy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){ae(Fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof tl?t.Va.Ze(e):e instanceof Hy?t.Va.st(e):t.Va.tt(e),!n.isEqual(Te.min()))try{const r=await nv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(Mt.EMPTY_BYTE_STRING,f.snapshotVersion)),ov(i,c);const d=new Hr(f.target,c,u,f.sequenceNumber);Zh(i,d)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ae(Fs,"Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!ki(e))throw e;t.Ea.add(1),await la(t),t.Ra.set("Offline"),n||(n=()=>nv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ae(Fs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await uc(t)}))}function lv(t,e){return e().catch((n=>Pl(t,n,e)))}async function hc(t){const e=Re(t),n=rs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fh;for(;h0(e);)try{const s=await WP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,f0(e,s)}catch(s){await Pl(e,s)}cv(e)&&uv(e)}function h0(t){return js(t)&&t.Ta.length<10}function f0(t,e){t.Ta.push(e);const n=rs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function cv(t){return js(t)&&!rs(t).x_()&&t.Ta.length>0}function uv(t){rs(t).start()}async function d0(t){rs(t).ra()}async function p0(t){const e=rs(t);for(const n of t.Ta)e.ea(n.mutations)}async function m0(t,e,n){const r=t.Ta.shift(),s=Gh.from(r,e,n);await lv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await hc(t)}async function g0(t,e){e&&rs(t).X_&&await(async function(r,s){if((function(o){return XC(o)&&o!==F.ABORTED})(s.code)){const i=r.Ta.shift();rs(r).B_(),await lv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await hc(r)}})(t,e),cv(t)&&uv(t)}async function fm(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),ae(Fs,"RemoteStore received new credentials");const r=js(n);n.Ea.add(3),await la(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await uc(n)}async function _0(t,e){const n=Re(t);e?(n.Ea.delete(2),await uc(n)):e||(n.Ea.add(2),await la(n),n.Ra.set("Unknown"))}function Oi(t){return t.ma||(t.ma=(function(n,r,s){const i=Re(n);return i.sa(),new t0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:a0.bind(null,t),t_:l0.bind(null,t),r_:c0.bind(null,t),H_:u0.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),tf(t)?ef(t):t.Ra.set("Unknown")):(await t.ma.stop(),av(t))}))),t.ma}function rs(t){return t.fa||(t.fa=(function(n,r,s){const i=Re(n);return i.sa(),new n0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:d0.bind(null,t),r_:g0.bind(null,t),ta:p0.bind(null,t),na:m0.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await hc(t)):(await t.fa.stop(),t.Ta.length>0&&(ae(Fs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class nf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new nf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(t,e){if(Er("AsyncQueue",`${e}: ${t}`),ki(t))return new ee(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ui{static emptySet(e){return new ui(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ge.comparator(n.key,r.key):(n,r)=>ge.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dm{constructor(){this.ga=new it(ge.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class wi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new wi(e,n,ui.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class y0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class v0{constructor(){this.queries=pm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Re(n),i=s.queries;s.queries=pm(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new ee(F.ABORTED,"Firestore shutting down"))}}function pm(){return new $s((t=>Cy(t)),sc)}async function hv(t,e){const n=Re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new y0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=rf(o,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&sf(n)}async function fv(t,e){const n=Re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function E0(t,e){const n=Re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&sf(n)}function T0(t,e,n){const r=Re(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function sf(t){t.Ca.forEach((e=>{e.next()}))}var zu,mm;(mm=zu||(zu={})).Ma="default",mm.Cache="cache";class dv{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zu.Cache}}/**
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
 */class pv{constructor(e){this.key=e}}class mv{constructor(e){this.key=e}}class I0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ue(),this.mutatedKeys=Ue(),this.eu=Py(e),this.tu=new ui(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new dm,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,d)=>{const m=s.get(f),_=ic(this.query,d)?d:null,N=!!m&&this.mutatedKeys.has(m.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?N!==R&&(r.track({type:3,doc:_}),C=!0):this.su(m,_)||(r.track({type:2,doc:_}),C=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),C=!0):m&&!_&&(r.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(_?(o=o.add(_),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,d)=>(function(_,N){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:C})}};return R(_)-R(N)})(f.type,d.type)||this.eu(f.doc,d.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new wi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ue(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new mv(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new pv(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ue();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return wi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const of="SyncEngine";class w0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A0{constructor(e){this.key=e,this.hu=!1}}class R0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new $s((l=>Cy(l)),sc),this.Iu=new Map,this.Eu=new Set,this.du=new it(ge.comparator),this.Au=new Map,this.Ru=new Kh,this.Vu={},this.mu=new Map,this.fu=Ii.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function S0(t,e,n=!0){const r=Tv(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await gv(r,e,n,!0),s}async function b0(t,e){const n=Tv(t);await gv(n,e,!0,!1)}async function gv(t,e,n,r){const s=await zP(t.localStore,zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await C0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&iv(t.remoteStore,s),l}async function C0(t,e,n,r,s){t.pu=(d,m,_)=>(async function(R,C,L,B){let K=C.view.ru(L);K.Cs&&(K=await am(R.localStore,C.query,!1).then((({documents:b})=>C.view.ru(b,K))));const G=B&&B.targetChanges.get(C.targetId),oe=B&&B.targetMismatches.get(C.targetId)!=null,de=C.view.applyChanges(K,R.isPrimaryClient,G,oe);return _m(R,C.targetId,de.au),de.snapshot})(t,d,m,_);const i=await am(t.localStore,e,!0),o=new I0(e,i.Qs),l=o.ru(i.documents),c=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);_m(t,n,u.au);const f=new w0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function P0(t,e,n){const r=Re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!sc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jh(r.remoteStore,s.targetId),Ku(r,s.targetId)})).catch(Di)):(Ku(r,s.targetId),await Gu(r.localStore,s.targetId,!0))}async function N0(t,e){const n=Re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(n.remoteStore,r.targetId))}async function D0(t,e,n){const r=F0(t);try{const s=await(function(o,l){const c=Re(o),u=tt.now(),f=l.reduce(((_,N)=>_.add(N.key)),Ue());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let N=Tr(),R=Ue();return c.Ns.getEntries(_,f).next((C=>{N=C,N.forEach(((L,B)=>{B.isValidDocument()||(R=R.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,N))).next((C=>{d=C;const L=[];for(const B of l){const K=WC(B,d.get(B.key).overlayedDocument);K!=null&&L.push(new cs(B.key,K,Ty(K.value.mapValue),Pn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,L,l)})).next((C=>{m=C;const L=C.applyToLocalDocumentSet(d,R);return c.documentOverlayCache.saveOverlays(_,C.batchId,L)}))})).then((()=>({batchId:m.batchId,changes:Dy(d)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new it(Fe)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ca(r,s.changes),await hc(r.remoteStore)}catch(s){const i=rf(s,"Failed to persist write");n.reject(i)}}async function _v(t,e){const n=Re(t);try{const r=await HP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ze(o.hu,14607):s.removedDocuments.size>0&&(ze(o.hu,42227),o.hu=!1))})),await ca(n,r,e)}catch(r){await Di(r)}}function gm(t,e,n){const r=Re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=Re(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,d)=>{for(const m of d.Sa)m.va(l)&&(u=!0)})),u&&sf(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k0(t,e,n){const r=Re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new it(ge.comparator);o=o.insert(i,qt.newNoDocument(i,Te.min()));const l=Ue().add(i),c=new lc(Te.min(),new Map,new it(Fe),o,l);await _v(r,c),r.du=r.du.remove(i),r.Au.delete(e),af(r)}else await Gu(r.localStore,e,!1).then((()=>Ku(r,e,n))).catch(Di)}async function O0(t,e){const n=Re(t),r=e.batch.batchId;try{const s=await qP(n.localStore,e);vv(n,r,null),yv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ca(n,s)}catch(s){await Di(s)}}async function V0(t,e,n){const r=Re(t);try{const s=await(function(o,l){const c=Re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((d=>(ze(d!==null,37113),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);vv(r,e,n),yv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ca(r,s)}catch(s){await Di(s)}}function yv(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function vv(t,e,n){const r=Re(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Ev(t,r)}))}function Ev(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Jh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),af(t))}function _m(t,e,n){for(const r of n)r instanceof pv?(t.Ru.addReference(r.key,e),L0(t,r)):r instanceof mv?(ae(of,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Ev(t,r.key)):Ee(19791,{wu:r})}function L0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ae(of,"New document in limbo: "+n),t.Eu.add(r),af(t))}function af(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ge(Ze.fromString(e)),r=t.fu.next();t.Au.set(r,new A0(n)),t.du=t.du.insert(n,r),iv(t.remoteStore,new Hr(zn(jh(n.path)),r,"TargetPurposeLimboResolution",ec.ce))}}async function ca(t,e,n){const r=Re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Yh.As(c.targetId,u);i.push(d)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const f=Re(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>q.forEach(u,(m=>q.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(d,m.targetId,_))).next((()=>q.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))))))}catch(d){if(!ki(d))throw d;ae(Xh,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const _=f.Ms.get(m),N=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(N);f.Ms=f.Ms.insert(m,R)}}})(r.localStore,i))}async function x0(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){ae(of,"User change. New user:",e.toKey());const r=await tv(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new ee(F.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ca(n,r.Ls)}}function M0(t,e){const n=Re(t),r=n.Au.get(e);if(r&&r.hu)return Ue().add(r.key);{let s=Ue();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Tv(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_v.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k0.bind(null,e),e.Pu.H_=E0.bind(null,e.eventManager),e.Pu.yu=T0.bind(null,e.eventManager),e}function F0(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V0.bind(null,e),e}class Nl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return jP(this.persistence,new UP,e.initialUser,this.serializer)}Cu(e){return new ev(Qh.mi,this.serializer)}Du(e){return new QP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nl.provider={build:()=>new Nl};class U0 extends Nl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ze(this.persistence.referenceDelegate instanceof Cl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new AP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new ev((r=>Cl.mi(r,n)),this.serializer)}}class Qu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x0.bind(null,this.syncEngine),await _0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new v0})()}createDatastore(e){const n=cc(e.databaseInfo.databaseId),r=(function(i){return new e0(i)})(e.databaseInfo);return(function(i,o,l,c){return new s0(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new o0(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>gm(this.syncEngine,n,0)),(function(){return um.v()?new um:new YP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const d=new R0(s,i,o,l,c,u);return f&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Re(s);ae(Fs,"RemoteStore shutting down."),i.Ea.add(5),await la(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Qu.provider={build:()=>new Qu};/**
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
 *//**
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
 */class Iv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ss="FirestoreClient";class B0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=Mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ae(ss,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ae(ss,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rf(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function eu(t,e){t.asyncQueue.verifyOperationInProgress(),ae(ss,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await tv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ym(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $0(t);ae(ss,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>fm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>fm(e.remoteStore,s))),t._onlineComponents=e}async function $0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae(ss,"Using user provided OfflineComponentProvider");try{await eu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await eu(t,new Nl)}}else ae(ss,"Using default OfflineComponentProvider"),await eu(t,new U0(void 0));return t._offlineComponents}async function wv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae(ss,"Using user provided OnlineComponentProvider"),await ym(t,t._uninitializedComponentsProvider._online)):(ae(ss,"Using default OnlineComponentProvider"),await ym(t,new Qu))),t._onlineComponents}function j0(t){return wv(t).then((e=>e.syncEngine))}async function Av(t){const e=await wv(t),n=e.eventManager;return n.onListen=S0.bind(null,e.syncEngine),n.onUnlisten=P0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=b0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N0.bind(null,e.syncEngine),n}function q0(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new Iv({next:m=>{f.Nu(),o.enqueueAndForget((()=>fv(i,d)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ee(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ee(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new dv(jh(l.path),f,{includeMetadataChanges:!0,qa:!0});return hv(i,d)})(await Av(t),t.asyncQueue,e,n,r))),r.promise}function H0(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new Iv({next:m=>{f.Nu(),o.enqueueAndForget((()=>fv(i,d))),m.fromCache&&c.source==="server"?u.reject(new ee(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new dv(l,f,{includeMetadataChanges:!0,qa:!0});return hv(i,d)})(await Av(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vm=new Map;/**
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
 */const Sv="firestore.googleapis.com",Em=!0;class Tm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sv,this.ssl=Em}else this.host=e.host,this.ssl=e.ssl??Em;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IP)throw new ee(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rv(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Yb;switch(r.type){case"firstParty":return new eC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=vm.get(n);r&&(ae("ComponentProvider","Removing Datastore"),vm.delete(n),r.terminate())})(this),Promise.resolve()}}function G0(t,e,n,r={}){var u;t=Jn(t,fc);const s=bi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(m_(`https://${l}`),g_("Firestore",!0)),i.host!==Sv&&i.host!==l&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Os(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=$t.MOCK_USER;else{f=iA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ee(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new $t(m)}t._authCredentials=new Xb(new cy(f,d))}}/**
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
 */class Rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rr(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ia(n,dt._jsonSchema))return new dt(e,r||null,new ge(Ze.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:vt("string",dt._jsonSchemaVersion),referencePath:vt("string")};class Xr extends Rr{constructor(e,n,r){super(e,n,jh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new ge(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function ua(t,e,...n){if(t=Et(t),uy("collection","path",e),t instanceof fc){const r=Ze.fromString(e,...n);return Lp(r),new Xr(t,null,r)}{if(!(t instanceof dt||t instanceof Xr))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return Lp(r),new Xr(t.firestore,null,r)}}function qs(t,e,...n){if(t=Et(t),arguments.length===1&&(e=Mh.newId()),uy("doc","path",e),t instanceof fc){const r=Ze.fromString(e,...n);return Vp(r),new dt(t,null,new ge(r))}{if(!(t instanceof dt||t instanceof Xr))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return Vp(r),new dt(t.firestore,t instanceof Xr?t.converter:null,new ge(r))}}/**
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
 */const Im="AsyncQueue";class wm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rv(this,"async_queue_retry"),this._c=()=>{const r=Zc();r&&ae(Im,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new pr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ki(e))throw e;ae(Im,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Er("INTERNAL UNHANDLED ERROR: ",Am(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=nf.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&Ee(47125,{Pc:Am(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Am(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Vi extends fc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wm(e),this._firestoreClient=void 0,await e}}}function W0(t,e){const n=typeof t=="object"?t:E_(),r=typeof t=="string"?t:wl,s=Rh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rA("firestore");i&&G0(s,...i)}return s}function lf(t){if(t._terminated)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||z0(t),t._firestoreClient}function z0(t){var r,s,i;const e=t._freezeSettings(),n=(function(l,c,u,f){return new yC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new B0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Mt.fromBase64String(e))}catch(n){throw new ee(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gn(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ia(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:vt("string",gn._jsonSchemaVersion),bytes:vt("string")};/**
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
 */class dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ha{constructor(e){this._methodName=e}}/**
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
 */class Qn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qn._jsonSchemaVersion}}static fromJSON(e){if(ia(e,Qn._jsonSchema))return new Qn(e.latitude,e.longitude)}}Qn._jsonSchemaVersion="firestore/geoPoint/1.0",Qn._jsonSchema={type:vt("string",Qn._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Yn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ia(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Yn(e.vectorValues);throw new ee(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:vt("string",Yn._jsonSchemaVersion),vectorValues:vt("object")};/**
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
 */const K0=/^__.*__$/;class Q0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class bv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:t})}}class cf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new cf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Dl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Cv(this.Ac)&&K0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Y0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cc(e)}Cc(e,n,r,s=!1){return new cf({Ac:e,methodName:n,Dc:r,path:xt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fa(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new Y0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pv(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ff("Data must be an object, but it was:",o,r);const l=Dv(r,o);let c,u;if(i.merge)c=new dn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Yu(e,d,n);if(!o.contains(m))throw new ee(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ov(f,m)||f.push(m)}c=new dn(f),u=o.fieldTransforms.filter((d=>c.covers(d.field)))}else c=null,u=o.fieldTransforms;return new Q0(new sn(l),c,u)}class pc extends ha{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}class uf extends ha{_toFieldTransform(e){return new Uy(e.path,new qo)}isEqual(e){return e instanceof uf}}class hf extends ha{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Wo(e.serializer,Vy(e.serializer,this.Fc));return new Uy(e.path,n)}isEqual(e){return e instanceof hf&&this.Fc===e.Fc}}function X0(t,e,n,r){const s=t.Cc(1,e,n);ff("Data must be an object, but it was:",s,r);const i=[],o=sn.empty();ls(r,((c,u)=>{const f=df(e,c,n);u=Et(u);const d=s.yc(f);if(u instanceof pc)i.push(f);else{const m=da(u,d);m!=null&&(i.push(f),o.set(f,m))}}));const l=new dn(i);return new bv(o,l,s.fieldTransforms)}function J0(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[Yu(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Yu(e,i[m])),c.push(i[m+1]);const u=[],f=sn.empty();for(let m=l.length-1;m>=0;--m)if(!Ov(u,l[m])){const _=l[m];let N=c[m];N=Et(N);const R=o.yc(_);if(N instanceof pc)u.push(_);else{const C=da(N,R);C!=null&&(u.push(_),f.set(_,C))}}const d=new dn(u);return new bv(f,d,o.fieldTransforms)}function Nv(t,e,n,r=!1){return da(n,t.Cc(r?4:3,e))}function da(t,e){if(kv(t=Et(t)))return ff("Unsupported field value:",e,t),Dv(t,e);if(t instanceof ha)return(function(r,s){if(!Cv(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=da(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:bl(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(s.serializer,i)}}if(r instanceof Qn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gn)return{bytesValue:Wy(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yn)return(function(o,l){return{mapValue:{fields:{[vy]:{stringValue:Ey},[Al]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Hh(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Zl(r)}`)})(t,e)}function Dv(t,e){const n={};return dy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,((r,s)=>{const i=da(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function kv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Qn||t instanceof gn||t instanceof dt||t instanceof ha||t instanceof Yn)}function ff(t,e,n){if(!kv(n)||!hy(n)){const r=Zl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Yu(t,e,n){if((e=Et(e))instanceof dc)return e._internalPath;if(typeof e=="string")return df(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Z0=new RegExp("[~\\*/\\[\\]]");function df(t,e,n){if(e.search(Z0)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dc(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(F.INVALID_ARGUMENT,l+t+c)}function Ov(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class pf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e1 extends pf{data(){return super.data()}}function mc(t,e){return typeof e=="string"?df(t,e):e instanceof dc?e._internalPath:e._delegate._internalPath}/**
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
 */function t1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mf{}class gc extends mf{}function Ai(t,e,...n){let r=[];e instanceof mf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof gf)).length,l=i.filter((c=>c instanceof _c)).length;if(o>1||o>0&&l>0)throw new ee(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class _c extends gc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _c(e,n,r)}_apply(e){const n=this._parse(e);return Lv(e._query,n),new Rr(e.firestore,e.converter,Bu(e._query,n))}_parse(e){const n=fa(e.firestore);return(function(i,o,l,c,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ee(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Sm(d,f);const N=[];for(const R of d)N.push(Rm(c,i,R));m={arrayValue:{values:N}}}else m=Rm(c,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Sm(d,f),m=Nv(l,o,d,f==="in"||f==="not-in");return yt.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kl(t,e,n){const r=e,s=mc("where",t);return _c._create(s,r,n)}class gf extends mf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gf(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Lv(o,c),o=Bu(o,c)})(e._query,n),new Rr(e.firestore,e.converter,Bu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _f extends gc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _f(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new ee(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ee(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jo(i,o)})(e._query,this._field,this._direction);return new Rr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Bs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Ri(t,e="asc"){const n=e,r=mc("orderBy",t);return _f._create(r,n)}class yf extends gc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new yf(e,n,r)}_apply(e){return new Rr(e.firestore,e.converter,Sl(e._query,this._limit,this._limitType))}}function zo(t){return aC("limit",t),yf._create("limit",t,"F")}class vf extends gc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new vf(e,n,r)}_apply(e){const n=n1(e,this.type,this._docOrFields,this._inclusive);return new Rr(e.firestore,e.converter,(function(s,i){return new Bs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(e._query,n))}}function Vv(...t){return vf._create("startAfter",t,!1)}function n1(t,e,n,r){if(n[0]=Et(n[0]),n[0]instanceof pf)return(function(i,o,l,c,u){if(!c)throw new ee(F.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const d of ci(i))if(d.field.isKeyField())f.push(Rl(o,c.key));else{const m=c.data.field(d.field);if(nc(m))throw new ee(F.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=d.field.canonicalString();throw new ee(F.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}f.push(m)}return new Ti(f,u)})(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=fa(t.firestore);return(function(o,l,c,u,f,d){const m=o.explicitOrderBy;if(f.length>m.length)throw new ee(F.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let N=0;N<f.length;N++){const R=f[N];if(m[N].field.isKeyField()){if(typeof R!="string")throw new ee(F.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof R}`);if(!qh(o)&&R.indexOf("/")!==-1)throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${R}' contains a slash.`);const C=o.path.child(Ze.fromString(R));if(!ge.isDocumentKey(C))throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const L=new ge(C);_.push(Rl(l,L))}else{const C=Nv(c,u,R);_.push(C)}}return new Ti(_,d)})(t._query,t.firestore._databaseId,s,e,n,r)}}function Rm(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new ee(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qh(e)&&n.indexOf("/")!==-1)throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ze.fromString(n));if(!ge.isDocumentKey(r))throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rl(t,new ge(r))}if(n instanceof dt)return Rl(t,n._key);throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(n)}.`)}function Sm(t,e){if(!Array.isArray(t)||t.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lv(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ee(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class r1{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ls(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Al].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>ft(o.doubleValue)));return new Yn(n)}convertGeoPoint(e){return new Qn(ft(e.latitude),ft(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const n=es(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ze.fromString(e);ze(Jy(r),9688,{name:e});const s=new Bo(r.get(1),r.get(3)),i=new ge(r.popFirst(5));return s.isEqual(n)||Er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function xv(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ks extends pf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",ks._jsonSchema={type:vt("string",ks._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class nl extends ks{data(e={}){return super.data(e)}}class hi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new nl(this._firestore,this._userDataWriter,r.key,r,new fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new nl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new nl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:s1(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function s1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:t})}}/**
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
 */function Ef(t){t=Jn(t,dt);const e=Jn(t.firestore,Vi);return q0(lf(e),t._key).then((n=>a1(e,t,n)))}hi._jsonSchemaVersion="firestore/querySnapshot/1.0",hi._jsonSchema={type:vt("string",hi._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};class Mv extends r1{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function yc(t){t=Jn(t,Rr);const e=Jn(t.firestore,Vi),n=lf(e),r=new Mv(e);return t1(t._query),H0(n,t._query).then((s=>new hi(e,r,t,s)))}function i1(t,e,n){t=Jn(t,dt);const r=Jn(t.firestore,Vi),s=xv(t.converter,e);return Tf(r,[Pv(fa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function Ko(t,e,n,...r){t=Jn(t,dt);const s=Jn(t.firestore,Vi),i=fa(s);let o;return o=typeof(e=Et(e))=="string"||e instanceof dc?J0(i,"updateDoc",t._key,e,n,r):X0(i,"updateDoc",t._key,e),Tf(s,[o.toMutation(t._key,Pn.exists(!0))])}function o1(t,e){const n=Jn(t.firestore,Vi),r=qs(t),s=xv(t.converter,e);return Tf(n,[Pv(fa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Pn.exists(!1))]).then((()=>r))}function Tf(t,e){return(function(r,s){const i=new pr;return r.asyncQueue.enqueueAndForget((async()=>D0(await j0(r),s,i))),i.promise})(lf(t),e)}function a1(t,e,n){const r=n.docs.get(e._key),s=new Mv(t);return new ks(t,s,e._key,r,new fo(n.hasPendingWrites,n.fromCache),e.converter)}function l1(){return new uf("serverTimestamp")}function Fv(t){return new hf("increment",t)}(function(e,n=!0){(function(s){Ni=s})(Ci),mi(new Vs("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Vi(new Jb(r.getProvider("auth-internal")),new tC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Qr(Np,Dp,e),Qr(Np,Dp,"esm2020")})();var c1="firebase",u1="12.7.0";/**
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
 */Qr(c1,u1,"app");const h1={apiKey:"AIzaSyCd6xl_cD_xPEmjDRsv5Oef0Rjtxxpl3Js",authDomain:"kopilka-b00b0.firebaseapp.com",projectId:"kopilka-b00b0",storageBucket:"kopilka-b00b0.firebasestorage.app",messagingSenderId:"802634786752",appId:"1:802634786752:web:8670ef754677d8ebe00a25"},If=v_(h1),Vn=W0(If);let tu=null,Ua=null;const pa=()=>(tu||(tu=Kb(If)),tu),f1=()=>(Ua||(Ua=new ur,Ua.setCustomParameters({prompt:"select_account"})),Ua),wf=async()=>typeof navigator<"u"&&!navigator.onLine?(console.warn("Приложение работает в оффлайн режиме"),!1):!0,Uv=async(t,e,n,r="user",s,i,o)=>{const l=pa();try{console.log("Регистрация пользователя:",t,"Роль:",r);const c=await wf(),u=await NS(l,t,e);return u.user&&l.currentUser&&(await OS(l.currentUser,{displayName:n}),c?await Bv(u.user.uid,{email:t,displayName:n,role:r,school:s,grade:i,subjects:o?o.split(",").map(f=>f.trim()):[],createdAt:new Date}):$v(u.user.uid,{email:t,displayName:n,role:r,school:s,grade:i,subjects:o?o.split(",").map(f=>f.trim()):[],createdAt:new Date().toISOString()}),console.log("Профиль создан:",n,"Роль:",r)),{user:u.user,error:null}}catch(c){return console.error("Ошибка регистрации:",c),{user:null,error:c}}},Bv=async(t,e)=>{try{await i1(qs(Vn,"users",t),e),console.log("Пользователь сохранен в Firestore:",t),localStorage.removeItem(`pending_user_${t}`)}catch(n){throw console.error("Ошибка сохранения в Firestore:",n),$v(t,e),n}},$v=(t,e)=>{try{localStorage.setItem(`pending_user_${t}`,JSON.stringify(e)),localStorage.setItem("pending_sync","true")}catch(n){console.error("Ошибка локального сохранения:",n)}},jv=async t=>{try{const e=localStorage.getItem(`user_${t}`);if(e)return JSON.parse(e);if(!await wf())return Xu(t);const r=await Ef(qs(Vn,"users",t));if(r.exists()){const s=r.data();return localStorage.setItem(`user_${t}`,JSON.stringify(s)),s}return null}catch(e){return console.error("Ошибка получения данных пользователя:",e),Xu(t)}},Xu=t=>{try{const e=localStorage.getItem(`user_${t}`);return e?JSON.parse(e):null}catch{return null}},qv=async(t,e)=>{const n=pa();try{return{user:(await DS(n,t,e)).user,error:null}}catch(r){return console.error("Ошибка входа:",r),{user:null,error:r}}},Hv=async()=>{const t=pa(),e=f1();try{const n=await rb(t,e);return n.user&&await wf()&&(await jv(n.user.uid)||await Bv(n.user.uid,{email:n.user.email,displayName:n.user.displayName,role:"user",photoURL:n.user.photoURL,createdAt:new Date})),{user:n.user,error:null}}catch(n){return console.error("Ошибка Google входа:",n),{user:null,error:n}}},d1=()=>{const t=pa();return localStorage.removeItem("pending_sync"),MS(t)},p1=t=>{const e=pa();return xS(e,async n=>{if(n){let r=null;try{r=await jv(n.uid)}catch{console.warn("Используем кэшированные данные пользователя"),r=Xu(n.uid)}const s={uid:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,emailVerified:n.emailVerified,role:(r==null?void 0:r.role)||"user"};t(s)}else t(null)})};let bm=null,Gv=ke(null),Ju=ke(!1);typeof window<"u"&&(bm||(bm=p1(t=>{if(console.log("Auth change detected:",!!t),Gv.value=t,Ju.value=!0,t){sessionStorage.setItem("auth_checked","true"),sessionStorage.setItem("user_id",t.uid);const e={uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:t.role};sessionStorage.setItem("user_profile",JSON.stringify(e))}else sessionStorage.setItem("auth_checked","true"),sessionStorage.removeItem("user_id"),sessionStorage.removeItem("user_profile")})));const vc=()=>{const t=ke(null),e=ke(!0),n=ke(null),r=ke(!1);if(t.value=Gv.value,r.value=Ju.value,typeof window<"u"){const _=sessionStorage.getItem("user_profile"),N=sessionStorage.getItem("auth_checked")==="true";if(_&&!t.value)try{t.value=JSON.parse(_),r.value=!0}catch(R){console.warn("Ошибка парсинга кэшированного профиля:",R)}(N&&r.value||Ju.value)&&(e.value=!1),setTimeout(()=>{e.value&&(console.warn("Auth loading timeout - falling back to cached state"),e.value=!1,r.value=!0)},3e3)}const s=_t(()=>!!t.value),i=()=>typeof window>"u"?!1:sessionStorage.getItem("auth_checked")==="true",o=()=>{if(typeof window>"u")return null;try{const _=sessionStorage.getItem("user_profile");return _?JSON.parse(_):null}catch{return null}},l=async(_,N)=>{e.value=!0,n.value=null;try{const{user:R,error:C}=await qv(_,N);if(C)throw C;return t.value=o(),{success:!0,error:null}}catch(R){return n.value=d(R),{success:!1,error:n.value}}finally{e.value=!1}},c=async(_,N,R,C,L,B,K)=>{e.value=!0,n.value=null;try{const{user:G,error:oe}=await Uv(_,N,R,C,L,B,K);if(oe)throw oe;return t.value=o(),{success:!0,error:null}}catch(G){return n.value=d(G),{success:!1,error:n.value}}finally{e.value=!1}},u=async()=>{e.value=!0,n.value=null;try{const{user:_,error:N}=await Hv();if(N)throw N;return t.value=o(),{success:!0,error:null}}catch(_){return n.value=d(_),{success:!1,error:n.value}}finally{e.value=!1}},f=async()=>{e.value=!0;try{await d1(),t.value=null,r.value=!0,sessionStorage.setItem("auth_checked","true"),sessionStorage.removeItem("user_profile")}catch(_){n.value=d(_)}finally{e.value=!1}},d=_=>{switch((_==null?void 0:_.code)||""){case"auth/invalid-email":return"Неверный формат email";case"auth/user-disabled":return"Аккаунт заблокирован";case"auth/user-not-found":return"Пользователь не найден";case"auth/wrong-password":return"Неверный пароль";case"auth/email-already-in-use":return"Email уже используется";case"auth/weak-password":return"Пароль должен содержать минимум 6 символов";case"auth/network-request-failed":return"Ошибка сети. Проверьте подключение к интернету";case"auth/too-many-requests":return"Слишком много попыток. Попробуйте позже";case"auth/operation-not-allowed":return"Регистрация по email отключена";default:return(_==null?void 0:_.message)||"Произошла ошибка при авторизации"}};return{user:t,isAuthenticated:s,isLoading:e,hasCheckedAuth:r,isAuthChecked:i,error:n,login:l,register:c,googleLogin:u,signOut:f,getAuthErrorMessage:d,stopLoading:()=>{e.value=!1,r.value=!0},getCurrentUser:()=>t.value}},m1={class:"auth-modal"},g1={class:"modal-header"},_1={class:"auth-content"},y1={class:"auth-switch single-mode"},v1={class:"switch-track"},E1={class:"form-section"},T1={class:"form-row"},I1={class:"form-group full-width"},w1={class:"input-wrapper"},A1={class:"form-row"},R1={class:"form-group full-width"},S1={class:"input-wrapper"},b1=["placeholder","minlength"],C1={key:0,class:"password-hint"},P1={key:0,class:"registration-fields"},N1={class:"form-row"},D1={class:"form-group full-width"},k1={class:"input-wrapper"},O1={key:0,class:"form-section"},V1={class:"role-selection"},L1=["onClick"],x1={class:"role-header"},M1={class:"role-icon"},F1={key:0,class:"role-badge"},U1={class:"role-content"},B1={class:"role-title"},$1={class:"role-description"},j1={class:"role-features"},q1={class:"role-check"},H1={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},G1={key:1,class:"form-section"},W1={key:0,class:"additional-fields"},z1={class:"form-row"},K1={class:"form-group full-width"},Q1={class:"input-wrapper"},Y1={class:"form-row"},X1={class:"form-group full-width"},J1={class:"input-wrapper"},Z1={key:1,class:"additional-fields"},eN={class:"form-row"},tN={class:"form-group full-width"},nN={class:"input-wrapper"},rN={class:"form-row"},sN={class:"form-group full-width"},iN={class:"select-wrapper"},oN=["value"],aN={key:2,class:"additional-fields"},lN=["disabled"],cN={key:0,class:"btn-spinner"},uN={key:1},hN={key:0,class:"divider"},fN=["disabled"],dN={class:"auth-footer"},pN={key:0,class:"error-message"},mN={class:"error-content"},gN=Si({__name:"AuthModal",emits:["close","loginSuccess"],setup(t,{emit:e}){const{isLoading:n,error:r}=vc(),s=ke(!1),i=()=>{s.value=!s.value,r.value=null,s.value||(c.role="",c.displayName="",c.school="",c.grade="",c.subjects="")},o=[{value:"teacher",name:"Учитель",icon:"👨‍🏫",description:"Для преподавателей и педагогов",features:["Доступ ко всем методическим материалам","Участие в педагогическом форуме","Загрузка собственных материалов","Создание тем для обсуждения"]},{value:"student",name:"Ученик",icon:"🎓",description:"Для учащихся и студентов",features:["Просмотр методических материалов","Доступ к учебным ресурсам","Участие в обсуждениях","Личный кабинет"]},{value:"user",name:"Пользователь",icon:"👤",description:"Для всех интересующихся",features:["Базовый доступ к материалам","Просмотр открытых ресурсов","Участие в сообществе","Гибкие настройки профиля"]}],l=["1","2","3","4","5","6","7","8","9","10","11"],c=Us({email:"",password:"",displayName:"",role:"",school:"",grade:"",subjects:""}),u=e,f=R=>({teacher:"учительский",student:"ученический",user:"пользовательский"})[R]||"",d=async()=>{n.value=!0,r.value=null;try{if(s.value){if(!c.role){r.value="Пожалуйста, выберите роль",n.value=!1;return}const R=await Uv(c.email,c.password,c.displayName,c.role,c.school||void 0,c.grade||void 0,c.subjects||void 0);if(R.error)throw R.error;R.user&&(u("loginSuccess"),u("close"),N())}else{const R=await qv(c.email,c.password);if(R.error)throw R.error;R.user&&(u("loginSuccess"),u("close"),N())}}catch(R){r.value=_(R)}finally{n.value=!1}},m=async()=>{n.value=!0,r.value=null;try{const R=await Hv();if(R.error)throw R.error;R.user&&(u("loginSuccess"),u("close"))}catch(R){r.value=_(R)}finally{n.value=!1}},_=R=>{switch((R==null?void 0:R.code)||""){case"auth/invalid-email":return"Неверный формат email";case"auth/user-disabled":return"Аккаунт заблокирован";case"auth/user-not-found":return"Пользователь не найден";case"auth/wrong-password":return"Неверный пароль";case"auth/email-already-in-use":return"Email уже используется";case"auth/weak-password":return"Пароль должен содержать минимум 6 символов";case"auth/network-request-failed":return"Ошибка сети. Проверьте подключение к интернету";case"auth/too-many-requests":return"Слишком много попыток. Попробуйте позже";case"auth/operation-not-allowed":return"Регистрация по email отключена";default:return(R==null?void 0:R.message)||"Произошла ошибка при авторизации"}},N=()=>{Object.assign(c,{email:"",password:"",displayName:"",role:"",school:"",grade:"",subjects:""})};return(R,C)=>(se(),ie("div",m1,[D("div",g1,[C[9]||(C[9]=D("div",{class:"header-content"},[D("div",{class:"logo-placeholder"},[D("span",{class:"logo-icon"},"📚")]),D("h2",null,"Добро пожаловать в Кабинет Методиста"),D("p",{class:"header-subtitle"},"Присоединяйтесь к сообществу педагогов")],-1)),D("button",{class:"close-btn",onClick:C[0]||(C[0]=L=>R.$emit("close"))},[...C[8]||(C[8]=[D("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},[D("path",{d:"M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),D("path",{d:"M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)])])]),D("div",_1,[D("div",y1,[D("button",{class:rn(["switch-btn",{active:!s.value}]),onClick:i},je(s.value?"Войти в существующий аккаунт":"Создать новый аккаунт"),3),D("div",v1,[D("div",{class:rn(["switch-slider",{toRegister:s.value}])},null,2)])]),D("form",{onSubmit:Wr(d,["prevent"]),class:"auth-form"},[D("div",E1,[D("div",T1,[D("div",I1,[C[11]||(C[11]=D("label",null,"Email адрес",-1)),D("div",w1,[C[10]||(C[10]=D("span",{class:"input-icon"},"📧",-1)),$n(D("input",{type:"email","onUpdate:modelValue":C[1]||(C[1]=L=>c.email=L),placeholder:"your.email@example.com",required:"",class:"modern-input"},null,512),[[ar,c.email]])])])]),D("div",A1,[D("div",R1,[C[13]||(C[13]=D("label",null,"Пароль",-1)),D("div",S1,[C[12]||(C[12]=D("span",{class:"input-icon"},"🔒",-1)),$n(D("input",{type:"password","onUpdate:modelValue":C[2]||(C[2]=L=>c.password=L),placeholder:s.value?"Минимум 6 символов":"Введите ваш пароль",required:"",minlength:s.value?6:void 0,class:"modern-input"},null,8,b1),[[ar,c.password]])]),s.value?(se(),ie("div",C1," Используйте надежный пароль с буквами и цифрами ")):xe("",!0)])]),s.value?(se(),ie("div",P1,[D("div",N1,[D("div",D1,[C[15]||(C[15]=D("label",null,"Полное имя",-1)),D("div",k1,[C[14]||(C[14]=D("span",{class:"input-icon"},"👤",-1)),$n(D("input",{type:"text","onUpdate:modelValue":C[3]||(C[3]=L=>c.displayName=L),placeholder:"Иван Иванов",required:"",class:"modern-input"},null,512),[[ar,c.displayName]])])])]),s.value?(se(),ie("div",O1,[C[17]||(C[17]=D("h3",{class:"section-title"},"Выберите вашу роль",-1)),D("div",V1,[(se(),ie(bt,null,Ds(o,L=>D("div",{key:L.value,class:rn(["role-card",{active:c.role===L.value,recommended:L.value==="teacher"}]),onClick:B=>c.role=L.value},[D("div",x1,[D("div",M1,je(L.icon),1),L.value==="teacher"?(se(),ie("div",F1,"Рекомендуется")):xe("",!0)]),D("div",U1,[D("h4",B1,je(L.name),1),D("p",$1,je(L.description),1),D("ul",j1,[(se(!0),ie(bt,null,Ds(L.features,B=>(se(),ie("li",{key:B},"✓ "+je(B),1))),128))])]),D("div",q1,[D("div",{class:rn(["check-circle",{checked:c.role===L.value}])},[c.role===L.value?(se(),ie("svg",H1,[...C[16]||(C[16]=[D("path",{d:"M20 6L9 17L4 12",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):xe("",!0)],2)])],10,L1)),64))])])):xe("",!0),s.value&&c.role?(se(),ie("div",G1,[C[30]||(C[30]=D("h3",{class:"section-title"},"Дополнительная информация",-1)),c.role==="teacher"?(se(),ie("div",W1,[D("div",z1,[D("div",K1,[C[19]||(C[19]=D("label",null,"Учебное заведение",-1)),D("div",Q1,[C[18]||(C[18]=D("span",{class:"input-icon"},"🏫",-1)),$n(D("input",{type:"text","onUpdate:modelValue":C[4]||(C[4]=L=>c.school=L),placeholder:"Название школы или учреждения",class:"modern-input"},null,512),[[ar,c.school]])])])]),D("div",Y1,[D("div",X1,[C[21]||(C[21]=D("label",null,"Преподаваемые предметы",-1)),D("div",J1,[C[20]||(C[20]=D("span",{class:"input-icon"},"📝",-1)),$n(D("input",{type:"text","onUpdate:modelValue":C[5]||(C[5]=L=>c.subjects=L),placeholder:"Математика, Русский язык, Физика...",class:"modern-input"},null,512),[[ar,c.subjects]])]),C[22]||(C[22]=D("div",{class:"field-hint"},"Перечислите предметы через запятую",-1))])])])):xe("",!0),c.role==="student"?(se(),ie("div",Z1,[D("div",eN,[D("div",tN,[C[24]||(C[24]=D("label",null,"Учебное заведение",-1)),D("div",nN,[C[23]||(C[23]=D("span",{class:"input-icon"},"🏫",-1)),$n(D("input",{type:"text","onUpdate:modelValue":C[6]||(C[6]=L=>c.school=L),placeholder:"Название вашей школы",class:"modern-input"},null,512),[[ar,c.school]])])])]),D("div",rN,[D("div",sN,[C[28]||(C[28]=D("label",null,"Класс обучения",-1)),D("div",iN,[C[26]||(C[26]=D("span",{class:"input-icon"},"🎓",-1)),$n(D("select",{"onUpdate:modelValue":C[7]||(C[7]=L=>c.grade=L),class:"modern-select"},[C[25]||(C[25]=D("option",{value:""},"Выберите класс",-1)),(se(),ie(bt,null,Ds(l,L=>D("option",{key:L,value:L},je(L)+" класс ",9,oN)),64))],512),[[OI,c.grade]]),C[27]||(C[27]=D("span",{class:"select-arrow"},"▼",-1))])])])])):xe("",!0),c.role==="user"?(se(),ie("div",aN,[...C[29]||(C[29]=[D("div",{class:"info-message"},[D("div",{class:"info-icon"},"💡"),D("div",{class:"info-content"},[D("p",null,"Как обычный пользователь вы получите базовый доступ к платформе. Вы всегда сможете изменить свою роль позже в настройках профиля.")])],-1)])])):xe("",!0)])):xe("",!0)])):xe("",!0)]),D("button",{type:"submit",class:rn(["submit-btn primary large",{disabled:s.value&&!c.role}]),disabled:De(n)||s.value&&!c.role},[De(n)?(se(),ie("span",cN)):(se(),ie("span",uN,je(s.value?c.role?`Создать ${f(c.role)} аккаунт`:"Выберите роль":"Войти в аккаунт"),1))],10,lN),s.value?xe("",!0):(se(),ie("div",hN,[...C[31]||(C[31]=[D("span",null,"или продолжите с",-1)])])),s.value?xe("",!0):(se(),ie("button",{key:1,type:"button",class:"social-btn google",onClick:m,disabled:De(n)},[...C[32]||(C[32]=[YT('<span class="social-icon" data-v-e2fb5397><svg width="18" height="18" viewBox="0 0 24 24" data-v-e2fb5397><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" data-v-e2fb5397></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" data-v-e2fb5397></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" data-v-e2fb5397></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" data-v-e2fb5397></path></svg></span> Войти через Google ',2)])],8,fN)),D("div",dN,[D("p",null,[St(je(s.value?"Уже есть аккаунт?":"Нет аккаунта?")+" ",1),D("a",{href:"#",onClick:Wr(i,["prevent"])},je(s.value?"Войдите здесь":"Зарегистрируйтесь здесь"),1)])])],32),De(r)?(se(),ie("div",pN,[C[33]||(C[33]=D("div",{class:"error-icon"},"⚠️",-1)),D("div",mN,je(De(r)),1)])):xe("",!0)])]))}}),ma=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Af=ma(gN,[["__scopeId","data-v-e2fb5397"]]),_N={class:"wrapper"},yN={key:0,class:"loading-section"},vN={key:1,class:"user-section"},EN={class:"user-info"},TN=["src"],IN={key:1,class:"avatar-placeholder"},wN={class:"user-details"},AN={class:"user-name"},RN={class:"user-email"},SN={key:0,class:"user-role"},bN={key:2,class:"auth-section"},CN=Si({__name:"App",setup(t){const{user:e,isAuthenticated:n,signOut:r,isLoading:s,stopLoading:i}=vc(),o=ke(!1),l=ke(!0),c=ke(!1);let u=null;const f=N=>({teacher:"Учитель",student:"Ученик",user:"Пользователь",admin:"Администратор"})[N]||"Пользователь",d=()=>{o.value=!1},m=N=>{N.key==="Escape"&&(o.value=!1)},_=()=>{i(),l.value=!1,c.value=!1,u&&clearTimeout(u)};return Xo(()=>{document.addEventListener("keydown",m),u=setTimeout(()=>{s.value&&(console.warn("Loading timeout reached"),c.value=!0)},5e3)}),gh(()=>{u&&clearTimeout(u),document.removeEventListener("keydown",m)}),(N,R)=>(se(),ie(bt,null,[D("header",null,[R[13]||(R[13]=D("img",{alt:"Логотип Кабинета Методиста",class:"logo",src:qI,width:"260px",height:"200px"},null,-1)),D("div",_N,[R[12]||(R[12]=D("h1",{class:"app-title"},"Кабинет Методиста",-1)),De(s)&&l.value?(se(),ie("div",yN,[R[5]||(R[5]=D("div",{class:"loading-spinner"},null,-1)),R[6]||(R[6]=D("p",null,"Загрузка данных...",-1)),c.value?(se(),ie("button",{key:0,onClick:_,class:"skip-loading-btn"}," Пропустить загрузку ")):xe("",!0)])):De(n)&&De(e)?(se(),ie("div",vN,[D("div",EN,[D("div",{class:rn(["user-avatar",{"has-photo":De(e).photoURL}])},[De(e).photoURL?(se(),ie("img",{key:0,src:De(e).photoURL,alt:"Аватар"},null,8,TN)):(se(),ie("span",IN,je(De(e).displayName?De(e).displayName.charAt(0).toUpperCase():"U"),1))],2),D("div",wN,[D("div",AN,je(De(e).displayName||"Пользователь"),1),D("div",RN,je(De(e).email),1),De(e).role?(se(),ie("div",SN,[D("span",{class:rn(["role-badge",De(e).role])},je(f(De(e).role)),3)])):xe("",!0)])]),D("button",{class:"logout-btn",onClick:R[0]||(R[0]=(...C)=>De(r)&&De(r)(...C))}," Выйти ")])):De(s)?xe("",!0):(se(),ie("div",bN,[D("button",{class:"auth-btn",onClick:R[1]||(R[1]=C=>o.value=!0)},[...R[7]||(R[7]=[D("span",{class:"auth-icon"},"🔐",-1),St(" Войти / Регистрация ",-1)])])])),D("nav",null,[st(De(oo),{to:"/"},{default:Hn(()=>[...R[8]||(R[8]=[St("Главная",-1)])]),_:1}),st(De(oo),{to:"/about"},{default:Hn(()=>[...R[9]||(R[9]=[St("О проекте",-1)])]),_:1}),st(De(oo),{to:"/forum"},{default:Hn(()=>[...R[10]||(R[10]=[St("Педагогический форум",-1)])]),_:1}),st(De(oo),{to:"/materials"},{default:Hn(()=>[...R[11]||(R[11]=[St("Банк методических материалов",-1)])]),_:1})])])]),D("main",null,[st(De(a_))]),o.value?(se(),ie("div",{key:0,class:"modal-overlay",onClick:R[4]||(R[4]=C=>o.value=!1)},[D("div",{class:"modal-content auth-modal",onClick:R[3]||(R[3]=Wr(()=>{},["stop"]))},[st(Af,{onClose:R[2]||(R[2]=C=>o.value=!1),onLoginSuccess:d})])])):xe("",!0)],64))}}),PN=ma(CN,[["__scopeId","data-v-ca776674"]]),NN="modulepreload",DN=function(t){return"/"+t},Cm={},Pm=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=DN(u),u in Cm)return;Cm[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":NN,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((_,N)=>{m.addEventListener("load",_),m.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},kN={},ON={class:"home"};function VN(t,e){return se(),ie("div",ON,[...e[0]||(e[0]=[D("h1",null,"Добро пожаловать в Кабинет Методиста",-1),D("p",null,"Профессиональное сообщество педагогов",-1)])])}const LN=ma(kN,[["render",VN],["__scopeId","data-v-3002f550"]]),xN=[{id:"methodology",name:"Методические вопросы",description:"Обсуждение методик преподавания и образовательных технологий",icon:"📚",order:1},{id:"programs",name:"Рабочие программы",description:"Обмен рабочими программами и календарно-тематическим планированием",icon:"📅",order:2},{id:"extracurricular",name:"Внеурочная деятельность",description:"Кружки, мероприятия, проектная деятельность",icon:"🌟",order:3},{id:"exams",name:"Подготовка к ОГЭ/ЕГЭ",description:"Материалы и советы по подготовке к экзаменам",icon:"🎯",order:4},{id:"inclusive",name:"Инклюзивное образование",description:"Работа с детьми с ОВЗ, адаптированные программы",icon:"❤️",order:5},{id:"digital",name:"Цифровые технологии",description:"Использование ИКТ в образовательном процессе",icon:"💻",order:6}],MN=async()=>{try{const t=ua(Vn,"forum_categories"),e=Ai(t,Ri("order"));return(await yc(e)).docs.map(r=>{var s;return{id:r.id,...r.data(),createdAt:((s=r.data().createdAt)==null?void 0:s.toDate())||new Date}})}catch(t){return console.error("Ошибка получения категорий:",t),[]}},FN=async(t,e=20,n)=>{try{const r=ua(Vn,"forum_topics");let s=Ai(r,kl("categoryId","==",t),Ri("createdAt","desc"),zo(e));n&&(s=Ai(r,kl("categoryId","==",t),Ri("createdAt","desc"),Vv(n),zo(e)));const i=await yc(s),o=i.docs[i.docs.length-1];return{topics:i.docs.map(c=>{var u,f,d;return{id:c.id,...c.data(),createdAt:((u=c.data().createdAt)==null?void 0:u.toDate())||new Date,updatedAt:((f=c.data().updatedAt)==null?void 0:f.toDate())||new Date,lastCommentAt:(d=c.data().lastCommentAt)==null?void 0:d.toDate()}}),lastVisible:o}}catch(r){return console.error("Ошибка получения тем:",r),{topics:[],lastVisible:null}}},UN=async t=>{var e,n,r;try{const s=qs(Vn,"forum_topics",t),i=await Ef(s);return i.exists()?(await Ko(s,{views:Fv(1)}),{id:i.id,...i.data(),createdAt:((e=i.data().createdAt)==null?void 0:e.toDate())||new Date,updatedAt:((n=i.data().updatedAt)==null?void 0:n.toDate())||new Date,lastCommentAt:(r=i.data().lastCommentAt)==null?void 0:r.toDate()}):null}catch(s){return console.error("Ошибка получения темы:",s),null}},BN=async(t,e,n,r,s,i)=>{try{const o=ua(Vn,"forum_comments"),l=tt.now(),u=await o1(o,{topicId:t,content:e,authorId:n,authorName:r,authorPhoto:s,authorRole:i,createdAt:l,updatedAt:l,likes:[],isEdited:!1}),f=qs(Vn,"forum_topics",t);return await Ko(f,{commentCount:Fv(1),lastCommentAt:l,lastCommentBy:r}),u.id}catch(o){return console.error("Ошибка создания комментария:",o),null}},$N=async(t,e=50,n)=>{try{const r=ua(Vn,"forum_comments");let s=Ai(r,kl("topicId","==",t),Ri("createdAt","asc"),zo(e));n&&(s=Ai(r,kl("topicId","==",t),Ri("createdAt","asc"),Vv(n),zo(e)));const i=await yc(s),o=i.docs[i.docs.length-1];return{comments:i.docs.map(c=>{var u,f;return{id:c.id,...c.data(),createdAt:((u=c.data().createdAt)==null?void 0:u.toDate())||new Date,updatedAt:((f=c.data().updatedAt)==null?void 0:f.toDate())||new Date}}),lastVisible:o}}catch(r){return console.error("Ошибка получения комментариев:",r),{comments:[],lastVisible:null}}},jN=async(t,e)=>{try{const n=qs(Vn,"forum_comments",t),r=await Ef(n);if(!r.exists())return!1;const i=r.data().likes||[];return i.includes(e)?(await Ko(n,{likes:i.filter(o=>o!==e)}),!1):(await Ko(n,{likes:[...i,e]}),!0)}catch(n){return console.error("Ошибка лайка комментария:",n),!1}},qN=async(t,e)=>{try{const n=qs(Vn,"forum_comments",t);return await Ko(n,{content:e,isEdited:!0,updatedAt:l1()}),!0}catch(n){return console.error("Ошибка обновления комментария:",n),!1}},HN=async(t,e,n=20)=>{try{const r=ua(Vn,"forum_topics"),i=Ai(r,...[],Ri("createdAt","desc"),zo(n)),l=(await yc(i)).docs.map(u=>{var f,d;return{id:u.id,...u.data(),createdAt:((f=u.data().createdAt)==null?void 0:f.toDate())||new Date,updatedAt:((d=u.data().updatedAt)==null?void 0:d.toDate())||new Date}}),c=t.toLowerCase();return l.filter(u=>u.title.toLowerCase().includes(c)||u.content.toLowerCase().includes(c))}catch(r){return console.error("Ошибка поиска тем:",r),[]}},GN={class:"forum-page"},WN={class:"forum-header"},zN={class:"forum-nav"},KN={key:0,class:"loading-section"},QN={key:1},YN={key:0,class:"forum-actions"},XN={class:"search-box"},JN={key:1,class:"auth-required"},ZN={key:2,class:"search-results"},eD={key:3,class:"forum-content"},tD={key:0,class:"loading-section"},nD={key:1,class:"categories-section"},rD={class:"categories-grid"},sD=["onClick"],iD={class:"category-icon"},oD={class:"category-content"},aD={class:"category-stats"},lD={class:"topic-count"},cD={class:"comment-count"},uD={key:0,class:"category-topics"},hD=Si({__name:"Forum",setup(t){l_();const{user:e,isAuthenticated:n,isLoading:r,hasCheckedAuth:s,isAuthChecked:i}=vc(),o=ke([]),l=ke([]),c=ke(""),u=ke(!1),f=ke([]);ke("newest");const d=ke(!1),m=ke(!1);ke(!1);const _=ke(!1),N=ke(!1),R=ke({}),C=ke({}),L=ke({}),B=ke({}),K=ke({}),G=Us({categoryId:"",title:"",content:"",tagsInput:""}),oe=_t(()=>r.value&&!N.value),de=async()=>{N.value||(N.value=!0,await b())};_o(()=>s.value,ce=>{ce&&!N.value&&de()}),Xo(()=>{i()&&!N.value&&de()}),_t(()=>o.value.map(ce=>{const Y=R.value[ce.id]||[],_e=Y.length,be=Y.reduce((Tt,Oe)=>Tt+Oe.commentCount,0);return{...ce,topicCount:_e,commentCount:be}}));const b=async()=>{if(!oe.value){_.value=!0;try{const ce=await MN();ce.length===0?o.value=xN.map((Y,_e)=>({id:Y.id,name:Y.name,description:Y.description,icon:Y.icon,order:Y.order,createdAt:new Date,createdBy:"system"})):o.value=ce,o.value.length>0&&(l.value=[o.value[0].id],await T(o.value[0].id))}catch(ce){console.error("Ошибка загрузки категорий:",ce)}finally{_.value=!1}}},T=async(ce,Y=!1)=>{try{Y?B.value[ce]=!0:(L.value[ce]=!0,R.value[ce]=[]);const{topics:_e,lastVisible:be}=await FN(ce,10,Y?C.value[ce]:void 0);Y?R.value[ce]=[...R.value[ce]||[],..._e]:R.value[ce]=_e,C.value[ce]=be,K.value[ce]=_e.length===10}catch(_e){console.error("Ошибка загрузки тем:",_e)}finally{L.value[ce]=!1,B.value[ce]=!1}},y=async ce=>{l.value.includes(ce)?l.value=l.value.filter(Y=>Y!==ce):(l.value.push(ce),R.value[ce]||await T(ce))},S=ce=>l.value.includes(ce),I=ce=>{const Y=R.value[ce];return Y?Y.length:0},A=ce=>{const Y=R.value[ce];return Y?Y.reduce((_e,be)=>_e+be.commentCount,0):0},v=async()=>{if(c.value.trim()){u.value=!0;try{f.value=await HN(c.value)}catch(ce){console.error("Ошибка поиска:",ce)}}};_t(()=>G.categoryId&&G.title.length>=10&&G.content.length>=30);const Se=()=>{m.value=!0},Ke=()=>{m.value=!1};return(ce,Y)=>{const _e=Rg("router-link");return se(),ie("div",GN,[D("div",WN,[Y[9]||(Y[9]=D("h1",null,"Педагогический форум",-1)),D("div",zN,[st(_e,{to:"/forum",class:rn(["nav-link",{active:ce.$route.path==="/forum"}])},{default:Hn(()=>[...Y[6]||(Y[6]=[St(" Все категории ",-1)])]),_:1},8,["class"]),De(e)?(se(),yu(_e,{key:0,to:"/forum/my-topics",class:"nav-link"},{default:Hn(()=>[...Y[7]||(Y[7]=[St(" Мои темы ",-1)])]),_:1})):xe("",!0),De(e)?(se(),yu(_e,{key:1,to:"/forum/my-comments",class:"nav-link"},{default:Hn(()=>[...Y[8]||(Y[8]=[St(" Мои комментарии ",-1)])]),_:1})):xe("",!0)])]),oe.value?(se(),ie("div",KN,[...Y[10]||(Y[10]=[D("div",{class:"loading-spinner"},null,-1),D("p",null,"Проверка авторизации...",-1)])])):oe.value?xe("",!0):(se(),ie("div",QN,[De(n)?(se(),ie("div",YN,[D("div",XN,[$n(D("input",{type:"text","onUpdate:modelValue":Y[0]||(Y[0]=be=>c.value=be),onKeyup:MI(v,["enter"]),placeholder:"Поиск по форуму...",class:"search-input"},null,544),[[ar,c.value]]),D("button",{class:"search-btn",onClick:v},"Найти")]),D("button",{class:"create-topic-btn",onClick:Y[1]||(Y[1]=be=>d.value=!0)},[...Y[11]||(Y[11]=[D("span",{class:"plus-icon"},"+",-1),St(" Новая тема ",-1)])])])):(se(),ie("div",JN,[D("p",null,[Y[12]||(Y[12]=St("Чтобы создавать темы и участвовать в обсуждениях, пожалуйста ",-1)),D("a",{onClick:Se},"войдите")])])),u.value?(se(),ie("div",ZN)):(se(),ie("div",eD,[_.value?(se(),ie("div",tD,[...Y[13]||(Y[13]=[D("div",{class:"loading-spinner"},null,-1),D("p",null,"Загрузка категорий...",-1)])])):(se(),ie("div",nD,[Y[16]||(Y[16]=D("h2",null,"Категории обсуждений",-1)),D("div",rD,[(se(!0),ie(bt,null,Ds(o.value,be=>(se(),ie("div",{key:be.id,class:"category-card",onClick:Tt=>y(be.id)},[D("div",iD,[D("span",null,je(be.icon),1)]),D("div",oD,[D("h3",null,je(be.name),1),D("p",null,je(be.description),1),D("div",aD,[D("span",lD,[D("strong",null,je(I(be.id)),1),Y[14]||(Y[14]=St(" тем ",-1))]),D("span",cD,[D("strong",null,je(A(be.id)),1),Y[15]||(Y[15]=St(" сообщений ",-1))])])]),D("div",{class:rn(["category-arrow",{rotated:S(be.id)}])}," ▼ ",2)],8,sD))),128))])])),(se(!0),ie(bt,null,Ds(o.value,be=>(se(),ie("div",{key:be.id},[S(be.id)?(se(),ie("div",uD)):xe("",!0)]))),128))]))])),d.value?(se(),ie("div",{key:2,class:"modal-overlay",onClick:Y[2]||(Y[2]=Wr(be=>d.value=!1,["self"]))})):xe("",!0),m.value?(se(),ie("div",{key:3,class:"modal-overlay",onClick:Y[5]||(Y[5]=Wr(be=>m.value=!1,["self"]))},[D("div",{class:"modal-content auth-modal",onClick:Y[4]||(Y[4]=Wr(()=>{},["stop"]))},[st(Af,{onClose:Y[3]||(Y[3]=be=>m.value=!1),onLoginSuccess:Ke})])])):xe("",!0)])}}}),fD=ma(hD,[["__scopeId","data-v-5500797e"]]);/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Wv,setPrototypeOf:Nm,isFrozen:dD,getPrototypeOf:pD,getOwnPropertyDescriptor:mD}=Object;let{freeze:Jt,seal:En,create:Zu}=Object,{apply:eh,construct:th}=typeof Reflect<"u"&&Reflect;Jt||(Jt=function(e){return e});En||(En=function(e){return e});eh||(eh=function(e,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),i=2;i<r;i++)s[i-2]=arguments[i];return e.apply(n,s)});th||(th=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new e(...r)});const Ba=Zt(Array.prototype.forEach),gD=Zt(Array.prototype.lastIndexOf),Dm=Zt(Array.prototype.pop),eo=Zt(Array.prototype.push),_D=Zt(Array.prototype.splice),rl=Zt(String.prototype.toLowerCase),nu=Zt(String.prototype.toString),ru=Zt(String.prototype.match),to=Zt(String.prototype.replace),yD=Zt(String.prototype.indexOf),vD=Zt(String.prototype.trim),An=Zt(Object.prototype.hasOwnProperty),zt=Zt(RegExp.prototype.test),no=ED(TypeError);function Zt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return eh(t,e,r)}}function ED(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return th(t,n)}}function Ve(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rl;Nm&&Nm(t,null);let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const i=n(s);i!==s&&(dD(e)||(e[r]=i),s=i)}t[s]=!0}return t}function TD(t){for(let e=0;e<t.length;e++)An(t,e)||(t[e]=null);return t}function Un(t){const e=Zu(null);for(const[n,r]of Wv(t))An(t,n)&&(Array.isArray(r)?e[n]=TD(r):r&&typeof r=="object"&&r.constructor===Object?e[n]=Un(r):e[n]=r);return e}function ro(t,e){for(;t!==null;){const r=mD(t,e);if(r){if(r.get)return Zt(r.get);if(typeof r.value=="function")return Zt(r.value)}t=pD(t)}function n(){return null}return n}const km=Jt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),su=Jt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),iu=Jt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ID=Jt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ou=Jt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),wD=Jt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Om=Jt(["#text"]),Vm=Jt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),au=Jt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Lm=Jt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$a=Jt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),AD=En(/\{\{[\w\W]*|[\w\W]*\}\}/gm),RD=En(/<%[\w\W]*|[\w\W]*%>/gm),SD=En(/\$\{[\w\W]*/gm),bD=En(/^data-[\-\w.\u00B7-\uFFFF]+$/),CD=En(/^aria-[\-\w]+$/),zv=En(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),PD=En(/^(?:\w+script|data):/i),ND=En(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Kv=En(/^html$/i),DD=En(/^[a-z][.\w]*(-[.\w]+)+$/i);var xm=Object.freeze({__proto__:null,ARIA_ATTR:CD,ATTR_WHITESPACE:ND,CUSTOM_ELEMENT:DD,DATA_ATTR:bD,DOCTYPE_NAME:Kv,ERB_EXPR:RD,IS_ALLOWED_URI:zv,IS_SCRIPT_OR_DATA:PD,MUSTACHE_EXPR:AD,TMPLIT_EXPR:SD});const so={element:1,text:3,progressingInstruction:7,comment:8,document:9},kD=function(){return typeof window>"u"?null:window},OD=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Mm=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Qv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kD();const e=he=>Qv(he);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==so.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const r=n,s=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:c,NodeFilter:u,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:m,trustedTypes:_}=t,N=c.prototype,R=ro(N,"cloneNode"),C=ro(N,"remove"),L=ro(N,"nextSibling"),B=ro(N,"childNodes"),K=ro(N,"parentNode");if(typeof o=="function"){const he=n.createElement("template");he.content&&he.content.ownerDocument&&(n=he.content.ownerDocument)}let G,oe="";const{implementation:de,createNodeIterator:b,createDocumentFragment:T,getElementsByTagName:y}=n,{importNode:S}=r;let I=Mm();e.isSupported=typeof Wv=="function"&&typeof K=="function"&&de&&de.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:A,ERB_EXPR:v,TMPLIT_EXPR:Se,DATA_ATTR:Ke,ARIA_ATTR:ce,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:_e,CUSTOM_ELEMENT:be}=xm;let{IS_ALLOWED_URI:Tt}=xm,Oe=null;const ot=Ve({},[...km,...su,...iu,...ou,...Om]);let te=null;const ne=Ve({},[...Vm,...au,...Lm,...$a]);let Ie=Object.seal(Zu(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Be=null,M=null;const J=Object.seal(Zu(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let X=!0,ue=!0,Ce=!1,E=!0,w=!1,k=!0,x=!1,$=!1,U=!1,j=!1,z=!1,W=!1,H=!0,pe=!1;const re="user-content-";let fe=!0,me=!1,we={},Pe=null;const Le=Ve({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let It=null;const wt=Ve({},["audio","video","img","source","image","track"]);let kt=null;const Ft=Ve({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ut="http://www.w3.org/1998/Math/MathML",Tn="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml";let nt=Ye,er=!1,In=null;const ga=Ve({},[Ut,Tn,Ye],nu);let Ln=Ve({},["mi","mo","mn","ms","mtext"]),us=Ve({},["annotation-xml"]);const Ot=Ve({},["title","style","font","a","script"]);let Sr=null;const hs=["application/xhtml+xml","text/html"],fs="text/html";let ut=null,br=null;const Cr=n.createElement("form"),_a=function(P){return P instanceof RegExp||P instanceof Function},Li=function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(br&&br===P)){if((!P||typeof P!="object")&&(P={}),P=Un(P),Sr=hs.indexOf(P.PARSER_MEDIA_TYPE)===-1?fs:P.PARSER_MEDIA_TYPE,ut=Sr==="application/xhtml+xml"?nu:rl,Oe=An(P,"ALLOWED_TAGS")?Ve({},P.ALLOWED_TAGS,ut):ot,te=An(P,"ALLOWED_ATTR")?Ve({},P.ALLOWED_ATTR,ut):ne,In=An(P,"ALLOWED_NAMESPACES")?Ve({},P.ALLOWED_NAMESPACES,nu):ga,kt=An(P,"ADD_URI_SAFE_ATTR")?Ve(Un(Ft),P.ADD_URI_SAFE_ATTR,ut):Ft,It=An(P,"ADD_DATA_URI_TAGS")?Ve(Un(wt),P.ADD_DATA_URI_TAGS,ut):wt,Pe=An(P,"FORBID_CONTENTS")?Ve({},P.FORBID_CONTENTS,ut):Le,Be=An(P,"FORBID_TAGS")?Ve({},P.FORBID_TAGS,ut):Un({}),M=An(P,"FORBID_ATTR")?Ve({},P.FORBID_ATTR,ut):Un({}),we=An(P,"USE_PROFILES")?P.USE_PROFILES:!1,X=P.ALLOW_ARIA_ATTR!==!1,ue=P.ALLOW_DATA_ATTR!==!1,Ce=P.ALLOW_UNKNOWN_PROTOCOLS||!1,E=P.ALLOW_SELF_CLOSE_IN_ATTR!==!1,w=P.SAFE_FOR_TEMPLATES||!1,k=P.SAFE_FOR_XML!==!1,x=P.WHOLE_DOCUMENT||!1,j=P.RETURN_DOM||!1,z=P.RETURN_DOM_FRAGMENT||!1,W=P.RETURN_TRUSTED_TYPE||!1,U=P.FORCE_BODY||!1,H=P.SANITIZE_DOM!==!1,pe=P.SANITIZE_NAMED_PROPS||!1,fe=P.KEEP_CONTENT!==!1,me=P.IN_PLACE||!1,Tt=P.ALLOWED_URI_REGEXP||zv,nt=P.NAMESPACE||Ye,Ln=P.MATHML_TEXT_INTEGRATION_POINTS||Ln,us=P.HTML_INTEGRATION_POINTS||us,Ie=P.CUSTOM_ELEMENT_HANDLING||{},P.CUSTOM_ELEMENT_HANDLING&&_a(P.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ie.tagNameCheck=P.CUSTOM_ELEMENT_HANDLING.tagNameCheck),P.CUSTOM_ELEMENT_HANDLING&&_a(P.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ie.attributeNameCheck=P.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),P.CUSTOM_ELEMENT_HANDLING&&typeof P.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Ie.allowCustomizedBuiltInElements=P.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),w&&(ue=!1),z&&(j=!0),we&&(Oe=Ve({},Om),te=[],we.html===!0&&(Ve(Oe,km),Ve(te,Vm)),we.svg===!0&&(Ve(Oe,su),Ve(te,au),Ve(te,$a)),we.svgFilters===!0&&(Ve(Oe,iu),Ve(te,au),Ve(te,$a)),we.mathMl===!0&&(Ve(Oe,ou),Ve(te,Lm),Ve(te,$a))),P.ADD_TAGS&&(typeof P.ADD_TAGS=="function"?J.tagCheck=P.ADD_TAGS:(Oe===ot&&(Oe=Un(Oe)),Ve(Oe,P.ADD_TAGS,ut))),P.ADD_ATTR&&(typeof P.ADD_ATTR=="function"?J.attributeCheck=P.ADD_ATTR:(te===ne&&(te=Un(te)),Ve(te,P.ADD_ATTR,ut))),P.ADD_URI_SAFE_ATTR&&Ve(kt,P.ADD_URI_SAFE_ATTR,ut),P.FORBID_CONTENTS&&(Pe===Le&&(Pe=Un(Pe)),Ve(Pe,P.FORBID_CONTENTS,ut)),P.ADD_FORBID_CONTENTS&&(Pe===Le&&(Pe=Un(Pe)),Ve(Pe,P.ADD_FORBID_CONTENTS,ut)),fe&&(Oe["#text"]=!0),x&&Ve(Oe,["html","head","body"]),Oe.table&&(Ve(Oe,["tbody"]),delete Be.tbody),P.TRUSTED_TYPES_POLICY){if(typeof P.TRUSTED_TYPES_POLICY.createHTML!="function")throw no('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof P.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw no('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');G=P.TRUSTED_TYPES_POLICY,oe=G.createHTML("")}else G===void 0&&(G=OD(_,s)),G!==null&&typeof oe=="string"&&(oe=G.createHTML(""));Jt&&Jt(P),br=P}},ds=Ve({},[...su,...iu,...ID]),xi=Ve({},[...ou,...wD]),ya=function(P){let Q=K(P);(!Q||!Q.tagName)&&(Q={namespaceURI:nt,tagName:"template"});const le=rl(P.tagName),qe=rl(Q.tagName);return In[P.namespaceURI]?P.namespaceURI===Tn?Q.namespaceURI===Ye?le==="svg":Q.namespaceURI===Ut?le==="svg"&&(qe==="annotation-xml"||Ln[qe]):!!ds[le]:P.namespaceURI===Ut?Q.namespaceURI===Ye?le==="math":Q.namespaceURI===Tn?le==="math"&&us[qe]:!!xi[le]:P.namespaceURI===Ye?Q.namespaceURI===Tn&&!us[qe]||Q.namespaceURI===Ut&&!Ln[qe]?!1:!xi[le]&&(Ot[le]||!ds[le]):!!(Sr==="application/xhtml+xml"&&In[P.namespaceURI]):!1},en=function(P){eo(e.removed,{element:P});try{K(P).removeChild(P)}catch{C(P)}},on=function(P,Q){try{eo(e.removed,{attribute:Q.getAttributeNode(P),from:Q})}catch{eo(e.removed,{attribute:null,from:Q})}if(Q.removeAttribute(P),P==="is")if(j||z)try{en(Q)}catch{}else try{Q.setAttribute(P,"")}catch{}},va=function(P){let Q=null,le=null;if(U)P="<remove></remove>"+P;else{const at=ru(P,/^[\r\n\t ]+/);le=at&&at[0]}Sr==="application/xhtml+xml"&&nt===Ye&&(P='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+P+"</body></html>");const qe=G?G.createHTML(P):P;if(nt===Ye)try{Q=new m().parseFromString(qe,Sr)}catch{}if(!Q||!Q.documentElement){Q=de.createDocument(nt,"template",null);try{Q.documentElement.innerHTML=er?oe:qe}catch{}}const mt=Q.body||Q.documentElement;return P&&le&&mt.insertBefore(n.createTextNode(le),mt.childNodes[0]||null),nt===Ye?y.call(Q,x?"html":"body")[0]:x?Q.documentElement:mt},wn=function(P){return b.call(P.ownerDocument||P,P,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Hs=function(P){return P instanceof d&&(typeof P.nodeName!="string"||typeof P.textContent!="string"||typeof P.removeChild!="function"||!(P.attributes instanceof f)||typeof P.removeAttribute!="function"||typeof P.setAttribute!="function"||typeof P.namespaceURI!="string"||typeof P.insertBefore!="function"||typeof P.hasChildNodes!="function")},Mi=function(P){return typeof l=="function"&&P instanceof l};function an(he,P,Q){Ba(he,le=>{le.call(e,P,Q,br)})}const Gs=function(P){let Q=null;if(an(I.beforeSanitizeElements,P,null),Hs(P))return en(P),!0;const le=ut(P.nodeName);if(an(I.uponSanitizeElement,P,{tagName:le,allowedTags:Oe}),k&&P.hasChildNodes()&&!Mi(P.firstElementChild)&&zt(/<[/\w!]/g,P.innerHTML)&&zt(/<[/\w!]/g,P.textContent)||P.nodeType===so.progressingInstruction||k&&P.nodeType===so.comment&&zt(/<[/\w]/g,P.data))return en(P),!0;if(!(J.tagCheck instanceof Function&&J.tagCheck(le))&&(!Oe[le]||Be[le])){if(!Be[le]&&Ea(le)&&(Ie.tagNameCheck instanceof RegExp&&zt(Ie.tagNameCheck,le)||Ie.tagNameCheck instanceof Function&&Ie.tagNameCheck(le)))return!1;if(fe&&!Pe[le]){const qe=K(P)||P.parentNode,mt=B(P)||P.childNodes;if(mt&&qe){const at=mt.length;for(let Vt=at-1;Vt>=0;--Vt){const pn=R(mt[Vt],!0);pn.__removalCount=(P.__removalCount||0)+1,qe.insertBefore(pn,L(P))}}}return en(P),!0}return P instanceof c&&!ya(P)||(le==="noscript"||le==="noembed"||le==="noframes")&&zt(/<\/no(script|embed|frames)/i,P.innerHTML)?(en(P),!0):(w&&P.nodeType===so.text&&(Q=P.textContent,Ba([A,v,Se],qe=>{Q=to(Q,qe," ")}),P.textContent!==Q&&(eo(e.removed,{element:P.cloneNode()}),P.textContent=Q)),an(I.afterSanitizeElements,P,null),!1)},Fi=function(P,Q,le){if(H&&(Q==="id"||Q==="name")&&(le in n||le in Cr))return!1;if(!(ue&&!M[Q]&&zt(Ke,Q))){if(!(X&&zt(ce,Q))){if(!(J.attributeCheck instanceof Function&&J.attributeCheck(Q,P))){if(!te[Q]||M[Q]){if(!(Ea(P)&&(Ie.tagNameCheck instanceof RegExp&&zt(Ie.tagNameCheck,P)||Ie.tagNameCheck instanceof Function&&Ie.tagNameCheck(P))&&(Ie.attributeNameCheck instanceof RegExp&&zt(Ie.attributeNameCheck,Q)||Ie.attributeNameCheck instanceof Function&&Ie.attributeNameCheck(Q,P))||Q==="is"&&Ie.allowCustomizedBuiltInElements&&(Ie.tagNameCheck instanceof RegExp&&zt(Ie.tagNameCheck,le)||Ie.tagNameCheck instanceof Function&&Ie.tagNameCheck(le))))return!1}else if(!kt[Q]){if(!zt(Tt,to(le,_e,""))){if(!((Q==="src"||Q==="xlink:href"||Q==="href")&&P!=="script"&&yD(le,"data:")===0&&It[P])){if(!(Ce&&!zt(Y,to(le,_e,"")))){if(le)return!1}}}}}}}return!0},Ea=function(P){return P!=="annotation-xml"&&ru(P,be)},Ui=function(P){an(I.beforeSanitizeAttributes,P,null);const{attributes:Q}=P;if(!Q||Hs(P))return;const le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:te,forceKeepAttr:void 0};let qe=Q.length;for(;qe--;){const mt=Q[qe],{name:at,namespaceURI:Vt,value:pn}=mt,tr=ut(at),ps=pn;let ht=at==="value"?ps:vD(ps);if(le.attrName=tr,le.attrValue=ht,le.keepAttr=!0,le.forceKeepAttr=void 0,an(I.uponSanitizeAttribute,P,le),ht=le.attrValue,pe&&(tr==="id"||tr==="name")&&(on(at,P),ht=re+ht),k&&zt(/((--!?|])>)|<\/(style|title|textarea)/i,ht)){on(at,P);continue}if(tr==="attributename"&&ru(ht,"href")){on(at,P);continue}if(le.forceKeepAttr)continue;if(!le.keepAttr){on(at,P);continue}if(!E&&zt(/\/>/i,ht)){on(at,P);continue}w&&Ba([A,v,Se],$i=>{ht=to(ht,$i," ")});const Bi=ut(P.nodeName);if(!Fi(Bi,tr,ht)){on(at,P);continue}if(G&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!Vt)switch(_.getAttributeType(Bi,tr)){case"TrustedHTML":{ht=G.createHTML(ht);break}case"TrustedScriptURL":{ht=G.createScriptURL(ht);break}}if(ht!==ps)try{Vt?P.setAttributeNS(Vt,at,ht):P.setAttribute(at,ht),Hs(P)?en(P):Dm(e.removed)}catch{on(at,P)}}an(I.afterSanitizeAttributes,P,null)},Ec=function he(P){let Q=null;const le=wn(P);for(an(I.beforeSanitizeShadowDOM,P,null);Q=le.nextNode();)an(I.uponSanitizeShadowNode,Q,null),Gs(Q),Ui(Q),Q.content instanceof i&&he(Q.content);an(I.afterSanitizeShadowDOM,P,null)};return e.sanitize=function(he){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Q=null,le=null,qe=null,mt=null;if(er=!he,er&&(he="<!-->"),typeof he!="string"&&!Mi(he))if(typeof he.toString=="function"){if(he=he.toString(),typeof he!="string")throw no("dirty is not a string, aborting")}else throw no("toString is not a function");if(!e.isSupported)return he;if($||Li(P),e.removed=[],typeof he=="string"&&(me=!1),me){if(he.nodeName){const pn=ut(he.nodeName);if(!Oe[pn]||Be[pn])throw no("root node is forbidden and cannot be sanitized in-place")}}else if(he instanceof l)Q=va("<!---->"),le=Q.ownerDocument.importNode(he,!0),le.nodeType===so.element&&le.nodeName==="BODY"||le.nodeName==="HTML"?Q=le:Q.appendChild(le);else{if(!j&&!w&&!x&&he.indexOf("<")===-1)return G&&W?G.createHTML(he):he;if(Q=va(he),!Q)return j?null:W?oe:""}Q&&U&&en(Q.firstChild);const at=wn(me?he:Q);for(;qe=at.nextNode();)Gs(qe),Ui(qe),qe.content instanceof i&&Ec(qe.content);if(me)return he;if(j){if(z)for(mt=T.call(Q.ownerDocument);Q.firstChild;)mt.appendChild(Q.firstChild);else mt=Q;return(te.shadowroot||te.shadowrootmode)&&(mt=S.call(r,mt,!0)),mt}let Vt=x?Q.outerHTML:Q.innerHTML;return x&&Oe["!doctype"]&&Q.ownerDocument&&Q.ownerDocument.doctype&&Q.ownerDocument.doctype.name&&zt(Kv,Q.ownerDocument.doctype.name)&&(Vt="<!DOCTYPE "+Q.ownerDocument.doctype.name+`>
`+Vt),w&&Ba([A,v,Se],pn=>{Vt=to(Vt,pn," ")}),G&&W?G.createHTML(Vt):Vt},e.setConfig=function(){let he=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Li(he),$=!0},e.clearConfig=function(){br=null,$=!1},e.isValidAttribute=function(he,P,Q){br||Li({});const le=ut(he),qe=ut(P);return Fi(le,qe,Q)},e.addHook=function(he,P){typeof P=="function"&&eo(I[he],P)},e.removeHook=function(he,P){if(P!==void 0){const Q=gD(I[he],P);return Q===-1?void 0:_D(I[he],Q,1)[0]}return Dm(I[he])},e.removeHooks=function(he){I[he]=[]},e.removeAllHooks=function(){I=Mm()},e}var VD=Qv();const LD={class:"forum-topic-page"},xD={class:"breadcrumbs"},MD={class:"topic-header"},FD={class:"topic-meta"},UD={class:"author-info"},BD={key:0,class:"author-avatar"},$D=["src","alt"],jD={class:"author-details"},qD={class:"author-name"},HD={class:"topic-date"},GD={class:"topic-stats"},WD={class:"stat"},zD={class:"stat-value"},KD={class:"stat"},QD={class:"stat-value"},YD={key:0,class:"topic-tags"},XD={class:"topic-content"},JD=["innerHTML"],ZD={class:"comments-section"},ek={class:"comments-header"},tk={key:1,class:"topic-closed"},nk={key:0,class:"comment-form"},rk={class:"form-header"},sk={class:"form-actions"},ik=["disabled"],ok={key:0,class:"spinner-small"},ak={key:1,class:"loading-comments"},lk={key:2,class:"no-comments"},ck={key:3,class:"comments-list"},uk={class:"comment-header"},hk={class:"comment-author"},fk={key:0,class:"author-avatar"},dk=["src","alt"],pk={class:"author-info"},mk={class:"author-name"},gk={key:0,class:"author-role"},_k={class:"comment-date"},yk={key:1,class:"edited-label"},vk={key:0,class:"comment-actions"},Ek=["onClick"],Tk={class:"like-count"},Ik=["onClick"],wk={class:"comment-content"},Ak={key:0,class:"edit-comment-form"},Rk={class:"edit-actions"},Sk=["onClick","disabled"],bk=["innerHTML"],Ck={key:4,class:"load-more-comments"},Pk=["disabled"],Nk={key:0,class:"spinner-small"},Dk={key:0,class:"auth-required-comments"},kk=Si({__name:"ForumTopic",setup(t){const e=Kw(),n=l_(),{user:r,isAuthenticated:s}=vc(),i=_t(()=>{var te;return((te=r.value)==null?void 0:te.uid)||""}),o=_t(()=>{var te;return((te=r.value)==null?void 0:te.role)||"user"}),l=_t(()=>{var te,ne;return((te=r.value)==null?void 0:te.displayName)||((ne=r.value)==null?void 0:ne.email)||"Аноним"}),c=_t(()=>{var te;return((te=r.value)==null?void 0:te.photoURL)||void 0}),u=ke(null),f=ke([]),d=ke(!0),m=ke(!0),_=ke(!1),N=ke(!1),R=ke(!1),C=ke(!1),L=ke(null),B=ke(""),K=ke(null),G=ke(!0),oe=Us({content:""});Xo(()=>{b(),T()});const de=_t(()=>e.params.id),b=async()=>{try{d.value=!0;const te=await UN(de.value);if(!te){n.push("/forum");return}u.value=te}catch(te){console.error("Ошибка загрузки темы:",te),n.push("/forum")}finally{d.value=!1}},T=async(te=!1)=>{try{te?_.value=!0:(m.value=!0,f.value=[]);const{comments:ne,lastVisible:Ie}=await $N(de.value,20,te?K.value:void 0);te?f.value=[...f.value,...ne]:f.value=ne,K.value=Ie,G.value=ne.length===20}catch(ne){console.error("Ошибка загрузки комментариев:",ne)}finally{m.value=!1,_.value=!1}},y=()=>{T(!0)},S=async()=>{if(!s.value||!u.value||!oe.content.trim()){Oe();return}C.value=!0;try{await BN(de.value,oe.content,i.value,l.value,c.value,o.value)&&(await T(),oe.content="",N.value=!1)}catch(te){console.error("Ошибка отправки комментария:",te),alert("Не удалось отправить комментарий. Попробуйте снова.")}finally{C.value=!1}},I=async te=>{if(!s.value||!i.value){Oe();return}try{const ne=await jN(te.id,i.value),Ie=f.value.findIndex(Be=>Be.id===te.id);if(Ie!==-1){const Be=te.likes||[];f.value[Ie].likes=ne?[...Be,i.value]:Be.filter(M=>M!==i.value)}}catch(ne){console.error("Ошибка лайка:",ne)}},A=te=>{Ke(te)&&(L.value=te.id,B.value=te.content)},v=async te=>{if(B.value.trim())try{await qN(te.id,B.value);const ne=f.value.findIndex(Ie=>Ie.id===te.id);ne!==-1&&(f.value[ne].content=B.value,f.value[ne].isEdited=!0,f.value[ne].updatedAt=new Date),Se()}catch(ne){console.error("Ошибка редактирования:",ne),alert("Не удалось сохранить изменения")}},Se=()=>{L.value=null,B.value=""},Ke=te=>!s.value||!i.value?!1:te.authorId===i.value||o.value==="admin",ce=te=>te?{methodology:"Методические вопросы",programs:"Рабочие программы",extracurricular:"Внеурочная деятельность",exams:"Подготовка к ОГЭ/ЕГЭ",inclusive:"Инклюзивное образование",digital:"Цифровые технологии"}[te]||"Неизвестная категория":"",Y=te=>te?{teacher:"Учитель",student:"Ученик",user:"Пользователь",admin:"Администратор"}[te]||te:"",_e=te=>te?new Date(te).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",be=te=>{const ne=new Date(te),Be=new Date().getTime()-ne.getTime(),M=Math.floor(Be/6e4),J=Math.floor(Be/36e5),X=Math.floor(Be/864e5);return M<60?`${M} минут назад`:J<24?`${J} часов назад`:X<7?`${X} дней назад`:_e(ne)},Tt=te=>te?VD.sanitize(te).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/^> (.*$)/gm,"<blockquote>$1</blockquote>").replace(/\n/g,"<br>"):"",Oe=()=>{R.value=!0},ot=()=>{R.value=!1};return(te,ne)=>{var Be,M,J,X,ue,Ce,E,w,k,x,$,U;const Ie=Rg("router-link");return se(),ie("div",LD,[D("nav",xD,[st(Ie,{to:"/forum"},{default:Hn(()=>[...ne[8]||(ne[8]=[St("Форум",-1)])]),_:1}),ne[9]||(ne[9]=D("span",null,"›",-1)),st(Ie,{to:`/forum?category=${(Be=u.value)==null?void 0:Be.categoryId}`},{default:Hn(()=>{var j;return[St(je(ce((j=u.value)==null?void 0:j.categoryId)),1)]}),_:1},8,["to"]),ne[10]||(ne[10]=D("span",null,"›",-1)),ne[11]||(ne[11]=D("span",null,"Тема",-1))]),D("div",MD,[D("h1",null,je((M=u.value)==null?void 0:M.title),1),D("div",FD,[D("div",UD,[(J=u.value)!=null&&J.authorPhoto?(se(),ie("div",BD,[D("img",{src:u.value.authorPhoto,alt:u.value.authorName},null,8,$D)])):xe("",!0),D("div",jD,[D("span",qD,je((X=u.value)==null?void 0:X.authorName),1),D("span",HD,je(_e((ue=u.value)==null?void 0:ue.createdAt)),1)])]),D("div",GD,[D("span",WD,[D("span",zD,je(((Ce=u.value)==null?void 0:Ce.views)||0),1),ne[12]||(ne[12]=D("span",{class:"stat-label"},"просмотров",-1))]),D("span",KD,[D("span",QD,je(((E=u.value)==null?void 0:E.commentCount)||0),1),ne[13]||(ne[13]=D("span",{class:"stat-label"},"комментариев",-1))])])]),(w=u.value)!=null&&w.tags&&u.value.tags.length>0?(se(),ie("div",YD,[(se(!0),ie(bt,null,Ds(((k=u.value)==null?void 0:k.tags)||[],j=>(se(),ie("span",{key:j,class:"topic-tag"},je(j),1))),128))])):xe("",!0)]),D("div",XD,[D("div",{class:"content-container",innerHTML:Tt(((x=u.value)==null?void 0:x.content)||"")},null,8,JD)]),D("div",ZD,[D("div",ek,[D("h2",null,"Комментарии ("+je(f.value.length)+")",1),De(s)&&!(($=u.value)!=null&&$.isClosed)?(se(),ie("button",{key:0,class:"add-comment-btn",onClick:ne[0]||(ne[0]=j=>N.value=!0)}," + Добавить комментарий ")):(U=u.value)!=null&&U.isClosed?(se(),ie("div",tk," 📌 Тема закрыта для комментариев ")):xe("",!0)]),N.value&&De(s)?(se(),ie("div",nk,[D("div",rk,[ne[14]||(ne[14]=D("h3",null,"Ваш комментарий",-1)),D("button",{class:"close-form-btn",onClick:ne[1]||(ne[1]=j=>N.value=!1)},"×")]),$n(D("textarea",{"onUpdate:modelValue":ne[2]||(ne[2]=j=>oe.content=j),placeholder:"Напишите ваш комментарий...",rows:"4",class:"comment-textarea"},null,512),[[ar,oe.content]]),D("div",sk,[D("button",{type:"button",class:"btn-secondary",onClick:ne[3]||(ne[3]=j=>N.value=!1)}," Отмена "),D("button",{type:"submit",class:"btn-primary",onClick:S,disabled:!oe.content.trim()||C.value},[C.value?(se(),ie("span",ok)):xe("",!0),St(" "+je(C.value?"Отправка...":"Отправить"),1)],8,ik)])])):xe("",!0),m.value?(se(),ie("div",ak,[...ne[15]||(ne[15]=[D("div",{class:"spinner"},null,-1),D("p",null,"Загрузка комментариев...",-1)])])):f.value.length===0?(se(),ie("div",lk,[...ne[16]||(ne[16]=[D("p",null,"Пока нет комментариев. Будьте первым!",-1)])])):(se(),ie("div",ck,[(se(!0),ie(bt,null,Ds(f.value,j=>{var z,W,H,pe;return se(),ie("div",{key:j.id,class:rn(["comment-item",{"is-author":j.authorId===((z=u.value)==null?void 0:z.authorId)}])},[D("div",uk,[D("div",hk,[j.authorPhoto?(se(),ie("div",fk,[D("img",{src:j.authorPhoto,alt:j.authorName},null,8,dk)])):xe("",!0),D("div",pk,[D("span",mk,je(j.authorName),1),j.authorRole?(se(),ie("span",gk,je(Y(j.authorRole)),1)):xe("",!0),D("span",_k,je(be(j.createdAt)),1),j.isEdited?(se(),ie("span",yk,"(изменено)")):xe("",!0)])]),De(s)?(se(),ie("div",vk,[D("button",{class:rn(["like-btn",{liked:(H=j.likes)==null?void 0:H.includes(((W=De(r))==null?void 0:W.uid)||"")}]),onClick:re=>I(j)},[ne[17]||(ne[17]=D("span",{class:"like-icon"},"♥",-1)),D("span",Tk,je(((pe=j.likes)==null?void 0:pe.length)||0),1)],10,Ek),Ke(j)?(se(),ie("button",{key:0,class:"edit-btn",onClick:re=>A(j)}," ✎ ",8,Ik)):xe("",!0)])):xe("",!0)]),D("div",wk,[L.value===j.id?(se(),ie("div",Ak,[$n(D("textarea",{"onUpdate:modelValue":ne[4]||(ne[4]=re=>B.value=re),rows:"3",class:"edit-textarea"},null,512),[[ar,B.value]]),D("div",Rk,[D("button",{type:"button",class:"btn-secondary",onClick:Se}," Отмена "),D("button",{type:"button",class:"btn-primary",onClick:re=>v(j),disabled:!B.value.trim()}," Сохранить ",8,Sk)])])):(se(),ie("div",{key:1,innerHTML:Tt(j.content)},null,8,bk))])],2)}),128))])),G.value?(se(),ie("div",Ck,[D("button",{class:"load-more-btn",onClick:y,disabled:_.value},[_.value?(se(),ie("span",Nk)):xe("",!0),St(" "+je(_.value?"Загрузка...":"Загрузить ещё комментарии"),1)],8,Pk)])):xe("",!0)]),De(s)?xe("",!0):(se(),ie("div",Dk,[D("p",null,[ne[18]||(ne[18]=St("Чтобы оставлять комментарии, пожалуйста ",-1)),D("a",{onClick:Oe},"войдите")])])),R.value?(se(),ie("div",{key:1,class:"modal-overlay",onClick:ne[7]||(ne[7]=Wr(j=>R.value=!1,["self"]))},[D("div",{class:"modal-content auth-modal",onClick:ne[6]||(ne[6]=Wr(()=>{},["stop"]))},[st(Af,{onClose:ne[5]||(ne[5]=j=>R.value=!1),onLoginSuccess:ot})])])):xe("",!0)])}}}),Ok=ma(kk,[["__scopeId","data-v-027f5710"]]),Vk=zw({history:bw("/"),routes:[{path:"/",name:"home",component:LN},{path:"/about",name:"about",component:()=>Pm(()=>import("./AboutView-CtJ-NHYI.js"),__vite__mapDeps([0,1]))},{path:"/forum",name:"forum",component:fD},{path:"/forum/topic/:id",name:"forum-topic",component:Ok,props:!0},{path:"/materials",name:"materials",component:()=>Pm(()=>import("./Materials-CRmMAxEM.js"),__vite__mapDeps([2,3]))}]});console.log("Firebase initialized:",If.name);const Yv=BI(PN);Yv.use(Vk);Yv.mount("#app");export{bt as F,Lk as T,ma as _,YT as a,_t as b,ie as c,Si as d,Xo as e,xe as f,D as g,De as h,st as i,MI as j,St as k,Hn as l,Ds as m,rn as n,se as o,Wr as p,OI as q,ke as r,l_ as s,je as t,vc as u,ar as v,$n as w};
