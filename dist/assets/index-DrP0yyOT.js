const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-B1Fc4fym.js","assets/AboutView-Bj431zon.css","assets/Materials-BmArWGUG.js","assets/Materials-CLH_Ba5O.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ku(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Xe={},Qs=[],Bn=()=>{},tE=()=>!1,Pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qu=t=>t.startsWith("onUpdate:"),Pt=Object.assign,Yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nE=Object.prototype.hasOwnProperty,We=(t,e)=>nE.call(t,e),ye=Array.isArray,Ys=t=>Ho(t)==="[object Map]",kl=t=>Ho(t)==="[object Set]",Hf=t=>Ho(t)==="[object Date]",Ie=t=>typeof t=="function",dt=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Ze=t=>t!==null&&typeof t=="object",km=t=>(Ze(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),Dm=Object.prototype.toString,Ho=t=>Dm.call(t),rE=t=>Ho(t).slice(8,-1),Nm=t=>Ho(t)==="[object Object]",Xu=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ao=Ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sE=/-(\w)/g,gn=Dl(t=>t.replace(sE,(e,n)=>n?n.toUpperCase():"")),iE=/\B([A-Z])/g,ts=Dl(t=>t.replace(iE,"-$1").toLowerCase()),Nl=Dl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=Dl(t=>t?`on${Nl(t)}`:""),$r=(t,e)=>!Object.is(t,e),xa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Om=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},oE=t=>{const e=dt(t)?Number(t):NaN;return isNaN(e)?t:e};let zf;const Ol=()=>zf||(zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ju(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=dt(r)?uE(r):Ju(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(dt(t)||Ze(t))return t}const aE=/;(?![^(]*\))/g,lE=/:([^]+)/,cE=/\/\*[^]*?\*\//g;function uE(t){const e={};return t.replace(cE,"").split(aE).forEach(n=>{if(n){const r=n.split(lE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tn(t){let e="";if(dt(t))e=t;else if(ye(t))for(let n=0;n<t.length;n++){const r=tn(t[n]);r&&(e+=r+" ")}else if(Ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fE=Ku(hE);function Vm(t){return!!t||t===""}function dE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Vl(t[r],e[r]);return n}function Vl(t,e){if(t===e)return!0;let n=Hf(t),r=Hf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gn(t),r=Gn(e),n||r)return t===e;if(n=ye(t),r=ye(e),n||r)return n&&r?dE(t,e):!1;if(n=Ze(t),r=Ze(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Vl(t[o],e[o]))return!1}}return String(t)===String(e)}function pE(t,e){return t.findIndex(n=>Vl(n,e))}const Lm=t=>!!(t&&t.__v_isRef===!0),je=t=>dt(t)?t:t==null?"":ye(t)||Ze(t)&&(t.toString===Dm||!Ie(t.toString))?Lm(t)?je(t.value):JSON.stringify(t,Mm,2):String(t),Mm=(t,e)=>Lm(e)?Mm(t,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ac(r,i)+" =>"]=s,n),{})}:kl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ac(n))}:Gn(e)?Ac(e):Ze(e)&&!ye(e)&&!Nm(e)?String(e):e,Ac=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class mE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){this._on>0&&--this._on===0&&(Zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gE(){return Zt}let et;const Rc=new WeakSet;class xm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rc.has(this)&&(Rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Um(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wf(this),$m(this);const e=et,n=In;et=this,In=!0;try{return this.fn()}finally{Bm(this),et=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)th(e);this.deps=this.depsTail=void 0,Wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nu(this)&&this.run()}get dirty(){return nu(this)}}let Fm=0,lo,co;function Um(t,e=!1){if(t.flags|=8,e){t.next=co,co=t;return}t.next=lo,lo=t}function Zu(){Fm++}function eh(){if(--Fm>0)return;if(co){let e=co;for(co=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;lo;){let e=lo;for(lo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function $m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),th(r),_E(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function nu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wo)||(t.globalVersion=wo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!nu(t))))return;t.flags|=2;const e=t.dep,n=et,r=In;et=t,In=!0;try{$m(t);const s=t.fn(t._value);(e.version===0||$r(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{et=n,In=r,Bm(t),t.flags&=-3}}function th(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)th(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _E(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const qm=[];function ur(){qm.push(In),In=!1}function hr(){const t=qm.pop();In=t===void 0?!0:t}function Wf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let wo=0;class yE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!et||!In||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new yE(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,Hm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=r)}return n}trigger(e){this.version++,wo++,this.notify(e)}notify(e){Zu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eh()}}}function Hm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Hm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ru=new WeakMap,As=Symbol(""),su=Symbol(""),Io=Symbol("");function jt(t,e,n){if(In&&et){let r=ru.get(t);r||ru.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new nh),s.map=r,s.key=n),s.track()}}function rr(t,e,n,r,s,i){const o=ru.get(t);if(!o){wo++;return}const l=c=>{c&&c.trigger()};if(Zu(),e==="clear")o.forEach(l);else{const c=ye(t),u=c&&Xu(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===Io||!Gn(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Io)),e){case"add":c?u&&l(o.get("length")):(l(o.get(As)),Ys(t)&&l(o.get(su)));break;case"delete":c||(l(o.get(As)),Ys(t)&&l(o.get(su)));break;case"set":Ys(t)&&l(o.get(As));break}}eh()}function js(t){const e=He(t);return e===t?e:(jt(e,"iterate",Io),mn(t)?e:e.map(Vt))}function Ll(t){return jt(t=He(t),"iterate",Io),t}const vE={__proto__:null,[Symbol.iterator](){return Sc(this,Symbol.iterator,Vt)},concat(...t){return js(this).concat(...t.map(e=>ye(e)?js(e):e))},entries(){return Sc(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return Jn(this,"every",t,e,void 0,arguments)},filter(t,e){return Jn(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return Jn(this,"find",t,e,Vt,arguments)},findIndex(t,e){return Jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jn(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return Jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return bc(this,"includes",t)},indexOf(...t){return bc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return bc(this,"lastIndexOf",t)},map(t,e){return Jn(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Gf(this,"reduce",t,e)},reduceRight(t,...e){return Gf(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return Jn(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return Sc(this,"values",Vt)}};function Sc(t,e,n){const r=Ll(t),s=r[e]();return r!==t&&!mn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const EE=Array.prototype;function Jn(t,e,n,r,s,i){const o=Ll(t),l=o!==t&&!mn(t),c=o[e];if(c!==EE[e]){const d=c.apply(t,i);return l?Vt(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,Vt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Gf(t,e,n,r){const s=Ll(t);let i=n;return s!==t&&(mn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Vt(l),c,t)}),s[e](i,...r)}function bc(t,e,n){const r=He(t);jt(r,"iterate",Io);const s=r[e](...n);return(s===-1||s===!1)&&ih(n[0])?(n[0]=He(n[0]),r[e](...n)):s}function zi(t,e,n=[]){ur(),Zu();const r=He(t)[e].apply(t,n);return eh(),hr(),r}const TE=Ku("__proto__,__v_isRef,__isVue"),zm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function wE(t){Gn(t)||(t=String(t));const e=He(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Wm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?NE:Ym:i?Qm:Km).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ye(e);if(!s){let c;if(o&&(c=vE[n]))return c;if(n==="hasOwnProperty")return wE}const l=Reflect.get(e,n,Ht(e)?e:r);return(Gn(n)?zm.has(n):TE(n))||(s||jt(e,"get",n),i)?l:Ht(l)?o&&Xu(n)?l:l.value:Ze(l)?s?Jm(l):Os(l):l}}class Gm extends Wm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Gr(i);if(!mn(r)&&!Gr(r)&&(i=He(i),r=He(r)),!ye(e)&&Ht(i)&&!Ht(r))return c?!1:(i.value=r,!0)}const o=ye(e)&&Xu(n)?Number(n)<e.length:We(e,n),l=Reflect.set(e,n,r,Ht(e)?e:s);return e===He(s)&&(o?$r(r,i)&&rr(e,"set",n,r):rr(e,"add",n,r)),l}deleteProperty(e,n){const r=We(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!zm.has(n))&&jt(e,"has",n),r}ownKeys(e){return jt(e,"iterate",ye(e)?"length":As),Reflect.ownKeys(e)}}class IE extends Wm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const AE=new Gm,RE=new IE,SE=new Gm(!0);const iu=t=>t,Aa=t=>Reflect.getPrototypeOf(t);function bE(t,e,n){return function(...r){const s=this.__v_raw,i=He(s),o=Ys(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?iu:e?el:Vt;return!e&&jt(i,"iterate",c?su:As),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function Ra(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function CE(t,e){const n={get(s){const i=this.__v_raw,o=He(i),l=He(s);t||($r(s,l)&&jt(o,"get",s),jt(o,"get",l));const{has:c}=Aa(o),u=e?iu:t?el:Vt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&jt(He(s),"iterate",As),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=He(i),l=He(s);return t||($r(s,l)&&jt(o,"has",s),jt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=He(l),u=e?iu:t?el:Vt;return!t&&jt(c,"iterate",As),l.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return Pt(n,t?{add:Ra("add"),set:Ra("set"),delete:Ra("delete"),clear:Ra("clear")}:{add(s){!e&&!mn(s)&&!Gr(s)&&(s=He(s));const i=He(this);return Aa(i).has.call(i,s)||(i.add(s),rr(i,"add",s,s)),this},set(s,i){!e&&!mn(i)&&!Gr(i)&&(i=He(i));const o=He(this),{has:l,get:c}=Aa(o);let u=l.call(o,s);u||(s=He(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?$r(i,f)&&rr(o,"set",s,i):rr(o,"add",s,i),this},delete(s){const i=He(this),{has:o,get:l}=Aa(i);let c=o.call(i,s);c||(s=He(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&rr(i,"delete",s,void 0),u},clear(){const s=He(this),i=s.size!==0,o=s.clear();return i&&rr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bE(s,t,e)}),n}function rh(t,e){const n=CE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(We(n,s)&&s in r?n:r,s,i)}const PE={get:rh(!1,!1)},kE={get:rh(!1,!0)},DE={get:rh(!0,!1)};const Km=new WeakMap,Qm=new WeakMap,Ym=new WeakMap,NE=new WeakMap;function OE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VE(t){return t.__v_skip||!Object.isExtensible(t)?0:OE(rE(t))}function Os(t){return Gr(t)?t:sh(t,!1,AE,PE,Km)}function Xm(t){return sh(t,!1,SE,kE,Qm)}function Jm(t){return sh(t,!0,RE,DE,Ym)}function sh(t,e,n,r,s){if(!Ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=VE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Xs(t){return Gr(t)?Xs(t.__v_raw):!!(t&&t.__v_isReactive)}function Gr(t){return!!(t&&t.__v_isReadonly)}function mn(t){return!!(t&&t.__v_isShallow)}function ih(t){return t?!!t.__v_raw:!1}function He(t){const e=t&&t.__v_raw;return e?He(e):t}function LE(t){return!We(t,"__v_skip")&&Object.isExtensible(t)&&Om(t,"__v_skip",!0),t}const Vt=t=>Ze(t)?Os(t):t,el=t=>Ze(t)?Jm(t):t;function Ht(t){return t?t.__v_isRef===!0:!1}function De(t){return Zm(t,!1)}function ME(t){return Zm(t,!0)}function Zm(t,e){return Ht(t)?t:new xE(t,e)}class xE{constructor(e,n){this.dep=new nh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:He(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||mn(e)||Gr(e);e=r?e:He(e),$r(e,n)&&(this._rawValue=e,this._value=r?e:Vt(e),this.dep.trigger())}}function ke(t){return Ht(t)?t.value:t}const FE={get:(t,e,n)=>e==="__v_raw"?t:ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ht(s)&&!Ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function eg(t){return Xs(t)?t:new Proxy(t,FE)}class UE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new nh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return Um(this,!0),!0}get value(){const e=this.dep.track();return jm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $E(t,e,n=!1){let r,s;return Ie(t)?r=t:(r=t.get,s=t.set),new UE(r,s,n)}const Sa={},tl=new WeakMap;let ys;function BE(t,e=!1,n=ys){if(n){let r=tl.get(n);r||tl.set(n,r=[]),r.push(t)}}function jE(t,e,n=Xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=H=>s?H:mn(H)||s===!1||s===0?sr(H,1):sr(H);let f,d,m,g,D=!1,R=!1;if(Ht(t)?(d=()=>t.value,D=mn(t)):Xs(t)?(d=()=>u(t),D=!0):ye(t)?(R=!0,D=t.some(H=>Xs(H)||mn(H)),d=()=>t.map(H=>{if(Ht(H))return H.value;if(Xs(H))return u(H);if(Ie(H))return c?c(H,2):H()})):Ie(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){ur();try{m()}finally{hr()}}const H=ys;ys=f;try{return c?c(t,3,[g]):t(g)}finally{ys=H}}:d=Bn,e&&s){const H=d,oe=s===!0?1/0:s;d=()=>sr(H(),oe)}const b=gE(),L=()=>{f.stop(),b&&b.active&&Yu(b.effects,f)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),L()}}let $=R?new Array(t.length).fill(Sa):Sa;const K=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const oe=f.run();if(s||D||(R?oe.some((pe,C)=>$r(pe,$[C])):$r(oe,$))){m&&m();const pe=ys;ys=f;try{const C=[oe,$===Sa?void 0:R&&$[0]===Sa?[]:$,g];c?c(e,3,C):e(...C),$=oe}finally{ys=pe}}}else f.run()};return l&&l(K),f=new xm(d),f.scheduler=o?()=>o(K,!1):K,g=H=>BE(H,!1,f),m=f.onStop=()=>{const H=tl.get(f);if(H){if(c)c(H,4);else for(const oe of H)oe();tl.delete(f)}},e?r?K(!0):$=f.run():o?o(K.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function sr(t,e=1/0,n){if(e<=0||!Ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ht(t))sr(t.value,e,n);else if(ye(t))for(let r=0;r<t.length;r++)sr(t[r],e,n);else if(kl(t)||Ys(t))t.forEach(r=>{sr(r,e,n)});else if(Nm(t)){for(const r in t)sr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&sr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ml(s,e,n)}}function bn(t,e,n,r){if(Ie(t)){const s=zo(t,e,n,r);return s&&km(s)&&s.catch(i=>{Ml(i,e,n)}),s}if(ye(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bn(t[i],e,n,r));return s}}function Ml(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){ur(),zo(i,null,10,[t,c,u]),hr();return}}qE(t,n,s,r,o)}function qE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Kt=[];let Mn=-1;const Js=[];let Nr=null,qs=0;const tg=Promise.resolve();let nl=null;function oh(t){const e=nl||tg;return t?e.then(this?t.bind(this):t):e}function HE(t){let e=Mn+1,n=Kt.length;for(;e<n;){const r=e+n>>>1,s=Kt[r],i=Ao(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ah(t){if(!(t.flags&1)){const e=Ao(t),n=Kt[Kt.length-1];!n||!(t.flags&2)&&e>=Ao(n)?Kt.push(t):Kt.splice(HE(e),0,t),t.flags|=1,ng()}}function ng(){nl||(nl=tg.then(sg))}function zE(t){ye(t)?Js.push(...t):Nr&&t.id===-1?Nr.splice(qs+1,0,t):t.flags&1||(Js.push(t),t.flags|=1),ng()}function Kf(t,e,n=Mn+1){for(;n<Kt.length;n++){const r=Kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rg(t){if(Js.length){const e=[...new Set(Js)].sort((n,r)=>Ao(n)-Ao(r));if(Js.length=0,Nr){Nr.push(...e);return}for(Nr=e,qs=0;qs<Nr.length;qs++){const n=Nr[qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nr=null,qs=0}}const Ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sg(t){try{for(Mn=0;Mn<Kt.length;Mn++){const e=Kt[Mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mn<Kt.length;Mn++){const e=Kt[Mn];e&&(e.flags&=-2)}Mn=-1,Kt.length=0,rg(),nl=null,(Kt.length||Js.length)&&sg()}}let rn=null,ig=null;function rl(t){const e=rn;return rn=t,ig=t&&t.type.__scopeId||null,e}function $n(t,e=rn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&id(-1);const i=rl(e);let o;try{o=t(...s)}finally{rl(i),r._d&&id(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xn(t,e){if(rn===null)return t;const n=Bl(rn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Xe]=e[s];i&&(Ie(i)&&(i={mounted:i,updated:i}),i.deep&&sr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ps(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(ur(),bn(c,n,8,[t.el,l,t,e]),hr())}}const WE=Symbol("_vte"),og=t=>t.__isTeleport,Or=Symbol("_leaveCb"),ba=Symbol("_enterCb");function GE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wo(()=>{t.isMounted=!0}),pg(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],ag={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},lg=t=>{const e=t.subTree;return e.component?lg(e.component):e},KE={name:"BaseTransition",props:ag,setup(t,{slots:e}){const n=zT(),r=GE();return()=>{const s=e.default&&hg(e.default(),!0);if(!s||!s.length)return;const i=cg(s),o=He(t),{mode:l}=o;if(r.isLeaving)return Cc(i);const c=Qf(i);if(!c)return Cc(i);let u=ou(c,o,r,n,d=>u=d);c.type!==Qt&&Ro(c,u);let f=n.subTree&&Qf(n.subTree);if(f&&f.type!==Qt&&!Es(c,f)&&lg(n).type!==Qt){let d=ou(f,o,r,n);if(Ro(f,d),l==="out-in"&&c.type!==Qt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},Cc(i);l==="in-out"&&c.type!==Qt?d.delayLeave=(m,g,D)=>{const R=ug(r,f);R[String(f.key)]=f,m[Or]=()=>{g(),m[Or]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{D(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function cg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Qt){e=n;break}}return e}const QE=KE;function ug(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ou(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:D,onLeaveCancelled:R,onBeforeAppear:b,onAppear:L,onAfterAppear:$,onAppearCancelled:K}=e,H=String(t.key),oe=ug(n,t),pe=(y,S)=>{y&&bn(y,r,9,S)},C=(y,S)=>{const I=S[1];pe(y,S),ye(y)?y.every(A=>A.length<=1)&&I():y.length<=1&&I()},E={mode:o,persisted:l,beforeEnter(y){let S=c;if(!n.isMounted)if(i)S=b||c;else return;y[Or]&&y[Or](!0);const I=oe[H];I&&Es(t,I)&&I.el[Or]&&I.el[Or](),pe(S,[y])},enter(y){let S=u,I=f,A=d;if(!n.isMounted)if(i)S=L||u,I=$||f,A=K||d;else return;let v=!1;const Re=y[ba]=Ke=>{v||(v=!0,Ke?pe(A,[y]):pe(I,[y]),E.delayedLeave&&E.delayedLeave(),y[ba]=void 0)};S?C(S,[y,Re]):Re()},leave(y,S){const I=String(t.key);if(y[ba]&&y[ba](!0),n.isUnmounting)return S();pe(m,[y]);let A=!1;const v=y[Or]=Re=>{A||(A=!0,S(),Re?pe(R,[y]):pe(D,[y]),y[Or]=void 0,oe[I]===t&&delete oe[I])};oe[I]=t,g?C(g,[y,v]):v()},clone(y){const S=ou(y,e,n,r,s);return s&&s(S),S}};return E}function Cc(t){if(xl(t))return t=Kr(t),t.children=null,t}function Qf(t){if(!xl(t))return og(t.type)&&t.children?cg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ie(n.default))return n.default()}}function Ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ct?(o.patchFlag&128&&s++,r=r.concat(hg(o.children,e,l))):(e||o.type!==Qt)&&r.push(l!=null?Kr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ei(t,e){return Ie(t)?Pt({name:t.name},e,{setup:t}):t}function fg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sl(t,e,n,r,s=!1){if(ye(t)){t.forEach((D,R)=>sl(D,e&&(ye(e)?e[R]:e),n,r,s));return}if(uo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&sl(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Bl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Xe?l.refs={}:l.refs,d=l.setupState,m=He(d),g=d===Xe?()=>!1:D=>We(m,D);if(u!=null&&u!==c&&(dt(u)?(f[u]=null,g(u)&&(d[u]=null)):Ht(u)&&(u.value=null)),Ie(c))zo(c,l,12,[o,f]);else{const D=dt(c),R=Ht(c);if(D||R){const b=()=>{if(t.f){const L=D?g(c)?d[c]:f[c]:c.value;s?ye(L)&&Yu(L,i):ye(L)?L.includes(i)||L.push(i):D?(f[c]=[i],g(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else D?(f[c]=o,g(c)&&(d[c]=o)):R&&(c.value=o,t.k&&(f[t.k]=o))};o?(b.id=-1,ln(b,n)):b()}}}Ol().requestIdleCallback;Ol().cancelIdleCallback;const uo=t=>!!t.type.__asyncLoader,xl=t=>t.type.__isKeepAlive;function YE(t,e){dg(t,"a",e)}function XE(t,e){dg(t,"da",e)}function dg(t,e,n=Lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xl(s.parent.vnode)&&JE(r,e,n,s),s=s.parent}}function JE(t,e,n,r){const s=Fl(e,t,r,!0);lh(()=>{Yu(r[e],s)},n)}function Fl(t,e,n=Lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ur();const l=Go(n),c=bn(e,n,t,o);return l(),hr(),c});return r?s.unshift(i):s.push(i),i}}const gr=t=>(e,n=Lt)=>{(!bo||t==="sp")&&Fl(t,(...r)=>e(...r),n)},ZE=gr("bm"),Wo=gr("m"),eT=gr("bu"),tT=gr("u"),pg=gr("bum"),lh=gr("um"),nT=gr("sp"),rT=gr("rtg"),sT=gr("rtc");function iT(t,e=Lt){Fl("ec",t,e)}const oT="components";function mg(t,e){return lT(oT,t,!0,e)||t}const aT=Symbol.for("v-ndc");function lT(t,e,n=!0,r=!1){const s=rn||Lt;if(s){const i=s.type;{const l=YT(i,!1);if(l&&(l===e||l===gn(e)||l===Nl(gn(e))))return i}const o=Yf(s[t]||i[t],e)||Yf(s.appContext[t],e);return!o&&r?i:o}}function Yf(t,e){return t&&(t[e]||t[gn(e)]||t[Nl(gn(e))])}function Rs(t,e,n,r){let s;const i=n,o=ye(t);if(o||dt(t)){const l=o&&Xs(t);let c=!1,u=!1;l&&(c=!mn(t),u=Gr(t),t=Ll(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(c?u?el(Vt(t[f])):Vt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ze(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const au=t=>t?Lg(t)?Bl(t):au(t.parent):null,ho=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>au(t.parent),$root:t=>au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_g(t),$forceUpdate:t=>t.f||(t.f=()=>{ah(t.update)}),$nextTick:t=>t.n||(t.n=oh.bind(t.proxy)),$watch:t=>PT.bind(t)}),Pc=(t,e)=>t!==Xe&&!t.__isScriptSetup&&We(t,e),cT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pc(r,e))return o[e]=1,r[e];if(s!==Xe&&We(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&We(u,e))return o[e]=3,i[e];if(n!==Xe&&We(n,e))return o[e]=4,n[e];lu&&(o[e]=0)}}const f=ho[e];let d,m;if(f)return e==="$attrs"&&jt(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Xe&&We(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,We(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pc(s,e)?(s[e]=n,!0):r!==Xe&&We(r,e)?(r[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Xe&&We(t,o)||Pc(e,o)||(l=i[0])&&We(l,o)||We(r,o)||We(ho,o)||We(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xf(t){return ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lu=!0;function uT(t){const e=_g(t),n=t.proxy,r=t.ctx;lu=!1,e.beforeCreate&&Jf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:g,updated:D,activated:R,deactivated:b,beforeDestroy:L,beforeUnmount:$,destroyed:K,unmounted:H,render:oe,renderTracked:pe,renderTriggered:C,errorCaptured:E,serverPrefetch:y,expose:S,inheritAttrs:I,components:A,directives:v,filters:Re}=e;if(u&&hT(u,r,null),o)for(const Y in o){const _e=o[Y];Ie(_e)&&(r[Y]=_e.bind(n))}if(s){const Y=s.call(n,n);Ze(Y)&&(t.data=Os(Y))}if(lu=!0,i)for(const Y in i){const _e=i[Y],Se=Ie(_e)?_e.bind(n,n):Ie(_e.get)?_e.get.bind(n,n):Bn,Et=!Ie(_e)&&Ie(_e.set)?_e.set.bind(n):Bn,Ne=gt({get:Se,set:Et});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ot=>Ne.value=ot})}if(l)for(const Y in l)gg(l[Y],r,n,Y);if(c){const Y=Ie(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(_e=>{Fa(_e,Y[_e])})}f&&Jf(f,t,"c");function ce(Y,_e){ye(_e)?_e.forEach(Se=>Y(Se.bind(n))):_e&&Y(_e.bind(n))}if(ce(ZE,d),ce(Wo,m),ce(eT,g),ce(tT,D),ce(YE,R),ce(XE,b),ce(iT,E),ce(sT,pe),ce(rT,C),ce(pg,$),ce(lh,H),ce(nT,y),ye(S))if(S.length){const Y=t.exposed||(t.exposed={});S.forEach(_e=>{Object.defineProperty(Y,_e,{get:()=>n[_e],set:Se=>n[_e]=Se})})}else t.exposed||(t.exposed={});oe&&t.render===Bn&&(t.render=oe),I!=null&&(t.inheritAttrs=I),A&&(t.components=A),v&&(t.directives=v),y&&fg(t)}function hT(t,e,n=Bn){ye(t)&&(t=cu(t));for(const r in t){const s=t[r];let i;Ze(s)?"default"in s?i=An(s.from||r,s.default,!0):i=An(s.from||r):i=An(s),Ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Jf(t,e,n){bn(ye(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gg(t,e,n,r){let s=r.includes(".")?kg(n,r):()=>n[r];if(dt(t)){const i=e[t];Ie(i)&&fo(s,i)}else if(Ie(t))fo(s,t.bind(n));else if(Ze(t))if(ye(t))t.forEach(i=>gg(i,e,n,r));else{const i=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(i)&&fo(s,i,t)}}function _g(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>il(c,u,o,!0)),il(c,e,o)),Ze(e)&&i.set(e,c),c}function il(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&il(t,i,n,!0),s&&s.forEach(o=>il(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=fT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const fT={data:Zf,props:ed,emits:ed,methods:Zi,computed:Zi,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Zi,directives:Zi,watch:pT,provide:Zf,inject:dT};function Zf(t,e){return e?t?function(){return Pt(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function dT(t,e){return Zi(cu(t),cu(e))}function cu(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zi(t,e){return t?Pt(Object.create(null),t,e):e}function ed(t,e){return t?ye(t)&&ye(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Xf(t),Xf(e??{})):e}function pT(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Gt(t[r],e[r]);return n}function yg(){return{app:null,config:{isNativeTag:tE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mT=0;function gT(t,e){return function(r,s=null){Ie(r)||(r=Pt({},r)),s!=null&&!Ze(s)&&(s=null);const i=yg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:mT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:JT,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&Ie(f.install)?(o.add(f),f.install(u,...d)):Ie(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const g=u._ceVNode||st(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,f,m),c=!0,u._container=f,f.__vue_app__=u,Bl(g.component)}},onUnmount(f){l.push(f)},unmount(){c&&(bn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Zs;Zs=u;try{return f()}finally{Zs=d}}};return u}}let Zs=null;function Fa(t,e){if(Lt){let n=Lt.provides;const r=Lt.parent&&Lt.parent.provides;r===n&&(n=Lt.provides=Object.create(r)),n[t]=e}}function An(t,e,n=!1){const r=Lt||rn;if(r||Zs){const s=Zs?Zs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ie(e)?e.call(r&&r.proxy):e}}const vg={},Eg=()=>Object.create(vg),Tg=t=>Object.getPrototypeOf(t)===vg;function _T(t,e,n,r=!1){const s={},i=Eg();t.propsDefaults=Object.create(null),wg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=He(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Ul(t.emitsOptions,m))continue;const g=e[m];if(c)if(We(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const D=gn(m);s[D]=uu(c,l,D,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{wg(t,e,s,i)&&(u=!0);let f;for(const d in l)(!e||!We(e,d)&&((f=ts(d))===d||!We(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=uu(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!We(e,d))&&(delete i[d],u=!0)}u&&rr(t.attrs,"set","")}function wg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ao(c))continue;const u=e[c];let f;s&&We(s,f=gn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ul(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=He(n),u=l||Xe;for(let f=0;f<i.length;f++){const d=i[f];n[d]=uu(s,c,d,u[d],t,!We(u,d))}}return o}function uu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=We(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Go(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ts(n))&&(r=!0))}return r}const vT=new WeakMap;function Ig(t,e,n=!1){const r=n?vT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ie(t)){const f=d=>{c=!0;const[m,g]=Ig(d,e,!0);Pt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ze(t)&&r.set(t,Qs),Qs;if(ye(i))for(let f=0;f<i.length;f++){const d=gn(i[f]);td(d)&&(o[d]=Xe)}else if(i)for(const f in i){const d=gn(f);if(td(d)){const m=i[f],g=o[d]=ye(m)||Ie(m)?{type:m}:Pt({},m),D=g.type;let R=!1,b=!0;if(ye(D))for(let L=0;L<D.length;++L){const $=D[L],K=Ie($)&&$.name;if(K==="Boolean"){R=!0;break}else K==="String"&&(b=!1)}else R=Ie(D)&&D.name==="Boolean";g[0]=R,g[1]=b,(R||We(g,"default"))&&l.push(d)}}const u=[o,l];return Ze(t)&&r.set(t,u),u}function td(t){return t[0]!=="$"&&!ao(t)}const ch=t=>t[0]==="_"||t==="$stable",uh=t=>ye(t)?t.map(Un):[Un(t)],ET=(t,e,n)=>{if(e._n)return e;const r=$n((...s)=>uh(e(...s)),n);return r._c=!1,r},Ag=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ch(s))continue;const i=t[s];if(Ie(i))e[s]=ET(s,i,r);else if(i!=null){const o=uh(i);e[s]=()=>o}}},Rg=(t,e)=>{const n=uh(e);t.slots.default=()=>n},Sg=(t,e,n)=>{for(const r in e)(n||!ch(r))&&(t[r]=e[r])},TT=(t,e,n)=>{const r=t.slots=Eg();if(t.vnode.shapeFlag&32){const s=e._;s?(Sg(r,e,n),n&&Om(r,"_",s,!0)):Ag(e,r)}else e&&Rg(t,e)},wT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Sg(s,e,n):(i=!e.$stable,Ag(e,s)),o=e}else e&&(Rg(t,e),o={default:1});if(i)for(const l in s)!ch(l)&&o[l]==null&&delete s[l]},ln=MT;function IT(t){return AT(t)}function AT(t,e){const n=Ol();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:g=Bn,insertStaticContent:D}=t,R=(T,w,N,x=null,B=null,U=null,j=void 0,W=null,z=!!w.dynamicChildren)=>{if(T===w)return;T&&!Es(T,w)&&(x=M(T),ot(T,B,U,!0),T=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:G,ref:he,shapeFlag:Z}=w;switch(G){case $l:b(T,w,N,x);break;case Qt:L(T,w,N,x);break;case Ua:T==null&&$(w,N,x,j);break;case Ct:A(T,w,N,x,B,U,j,W,z);break;default:Z&1?oe(T,w,N,x,B,U,j,W,z):Z&6?v(T,w,N,x,B,U,j,W,z):(Z&64||Z&128)&&G.process(T,w,N,x,B,U,j,W,z,ue)}he!=null&&B&&sl(he,T&&T.ref,U,w||T,!w)},b=(T,w,N,x)=>{if(T==null)r(w.el=l(w.children),N,x);else{const B=w.el=T.el;w.children!==T.children&&u(B,w.children)}},L=(T,w,N,x)=>{T==null?r(w.el=c(w.children||""),N,x):w.el=T.el},$=(T,w,N,x)=>{[T.el,T.anchor]=D(T.children,w,N,x,T.el,T.anchor)},K=({el:T,anchor:w},N,x)=>{let B;for(;T&&T!==w;)B=m(T),r(T,N,x),T=B;r(w,N,x)},H=({el:T,anchor:w})=>{let N;for(;T&&T!==w;)N=m(T),s(T),T=N;s(w)},oe=(T,w,N,x,B,U,j,W,z)=>{w.type==="svg"?j="svg":w.type==="math"&&(j="mathml"),T==null?pe(w,N,x,B,U,j,W,z):y(T,w,B,U,j,W,z)},pe=(T,w,N,x,B,U,j,W)=>{let z,G;const{props:he,shapeFlag:Z,transition:fe,dirs:me}=T;if(z=T.el=o(T.type,U,he&&he.is,he),Z&8?f(z,T.children):Z&16&&E(T.children,z,null,x,B,kc(T,U),j,W),me&&ps(T,null,x,"created"),C(z,T,T.scopeId,j,x),he){for(const Ce in he)Ce!=="value"&&!ao(Ce)&&i(z,Ce,null,he[Ce],U,x);"value"in he&&i(z,"value",null,he.value,U),(G=he.onVnodeBeforeMount)&&Vn(G,x,T)}me&&ps(T,null,x,"beforeMount");const we=RT(B,fe);we&&fe.beforeEnter(z),r(z,w,N),((G=he&&he.onVnodeMounted)||we||me)&&ln(()=>{G&&Vn(G,x,T),we&&fe.enter(z),me&&ps(T,null,x,"mounted")},B)},C=(T,w,N,x,B)=>{if(N&&g(T,N),x)for(let U=0;U<x.length;U++)g(T,x[U]);if(B){let U=B.subTree;if(w===U||Ng(U.type)&&(U.ssContent===w||U.ssFallback===w)){const j=B.vnode;C(T,j,j.scopeId,j.slotScopeIds,B.parent)}}},E=(T,w,N,x,B,U,j,W,z=0)=>{for(let G=z;G<T.length;G++){const he=T[G]=W?Vr(T[G]):Un(T[G]);R(null,he,w,N,x,B,U,j,W)}},y=(T,w,N,x,B,U,j)=>{const W=w.el=T.el;let{patchFlag:z,dynamicChildren:G,dirs:he}=w;z|=T.patchFlag&16;const Z=T.props||Xe,fe=w.props||Xe;let me;if(N&&ms(N,!1),(me=fe.onVnodeBeforeUpdate)&&Vn(me,N,w,T),he&&ps(w,T,N,"beforeUpdate"),N&&ms(N,!0),(Z.innerHTML&&fe.innerHTML==null||Z.textContent&&fe.textContent==null)&&f(W,""),G?S(T.dynamicChildren,G,W,N,x,kc(w,B),U):j||_e(T,w,W,null,N,x,kc(w,B),U,!1),z>0){if(z&16)I(W,Z,fe,N,B);else if(z&2&&Z.class!==fe.class&&i(W,"class",null,fe.class,B),z&4&&i(W,"style",Z.style,fe.style,B),z&8){const we=w.dynamicProps;for(let Ce=0;Ce<we.length;Ce++){const Ve=we[Ce],Rt=Z[Ve],Tt=fe[Ve];(Tt!==Rt||Ve==="value")&&i(W,Ve,Rt,Tt,B,N)}}z&1&&T.children!==w.children&&f(W,w.children)}else!j&&G==null&&I(W,Z,fe,N,B);((me=fe.onVnodeUpdated)||he)&&ln(()=>{me&&Vn(me,N,w,T),he&&ps(w,T,N,"updated")},x)},S=(T,w,N,x,B,U,j)=>{for(let W=0;W<w.length;W++){const z=T[W],G=w[W],he=z.el&&(z.type===Ct||!Es(z,G)||z.shapeFlag&70)?d(z.el):N;R(z,G,he,null,x,B,U,j,!0)}},I=(T,w,N,x,B)=>{if(w!==N){if(w!==Xe)for(const U in w)!ao(U)&&!(U in N)&&i(T,U,w[U],null,B,x);for(const U in N){if(ao(U))continue;const j=N[U],W=w[U];j!==W&&U!=="value"&&i(T,U,W,j,B,x)}"value"in N&&i(T,"value",w.value,N.value,B)}},A=(T,w,N,x,B,U,j,W,z)=>{const G=w.el=T?T.el:l(""),he=w.anchor=T?T.anchor:l("");let{patchFlag:Z,dynamicChildren:fe,slotScopeIds:me}=w;me&&(W=W?W.concat(me):me),T==null?(r(G,N,x),r(he,N,x),E(w.children||[],N,he,B,U,j,W,z)):Z>0&&Z&64&&fe&&T.dynamicChildren?(S(T.dynamicChildren,fe,N,B,U,j,W),(w.key!=null||B&&w===B.subTree)&&bg(T,w,!0)):_e(T,w,N,he,B,U,j,W,z)},v=(T,w,N,x,B,U,j,W,z)=>{w.slotScopeIds=W,T==null?w.shapeFlag&512?B.ctx.activate(w,N,x,j,z):Re(w,N,x,B,U,j,z):Ke(T,w,z)},Re=(T,w,N,x,B,U,j)=>{const W=T.component=HT(T,x,B);if(xl(T)&&(W.ctx.renderer=ue),WT(W,!1,j),W.asyncDep){if(B&&B.registerDep(W,ce,j),!T.el){const z=W.subTree=st(Qt);L(null,z,w,N)}}else ce(W,T,w,N,B,U,j)},Ke=(T,w,N)=>{const x=w.component=T.component;if(VT(T,w,N))if(x.asyncDep&&!x.asyncResolved){Y(x,w,N);return}else x.next=w,x.update();else w.el=T.el,x.vnode=w},ce=(T,w,N,x,B,U,j)=>{const W=()=>{if(T.isMounted){let{next:Z,bu:fe,u:me,parent:we,vnode:Ce}=T;{const Ft=Cg(T);if(Ft){Z&&(Z.el=Ce.el,Y(T,Z,j)),Ft.asyncDep.then(()=>{T.isUnmounted||W()});return}}let Ve=Z,Rt;ms(T,!1),Z?(Z.el=Ce.el,Y(T,Z,j)):Z=Ce,fe&&xa(fe),(Rt=Z.props&&Z.props.onVnodeBeforeUpdate)&&Vn(Rt,we,Z,Ce),ms(T,!0);const Tt=rd(T),kt=T.subTree;T.subTree=Tt,R(kt,Tt,d(kt.el),M(kt),T,B,U),Z.el=Tt.el,Ve===null&&LT(T,Tt.el),me&&ln(me,B),(Rt=Z.props&&Z.props.onVnodeUpdated)&&ln(()=>Vn(Rt,we,Z,Ce),B)}else{let Z;const{el:fe,props:me}=w,{bm:we,m:Ce,parent:Ve,root:Rt,type:Tt}=T,kt=uo(w);ms(T,!1),we&&xa(we),!kt&&(Z=me&&me.onVnodeBeforeMount)&&Vn(Z,Ve,w),ms(T,!0);{Rt.ce&&Rt.ce._injectChildStyle(Tt);const Ft=T.subTree=rd(T);R(null,Ft,N,x,T,B,U),w.el=Ft.el}if(Ce&&ln(Ce,B),!kt&&(Z=me&&me.onVnodeMounted)){const Ft=w;ln(()=>Vn(Z,Ve,Ft),B)}(w.shapeFlag&256||Ve&&uo(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&T.a&&ln(T.a,B),T.isMounted=!0,w=N=x=null}};T.scope.on();const z=T.effect=new xm(W);T.scope.off();const G=T.update=z.run.bind(z),he=T.job=z.runIfDirty.bind(z);he.i=T,he.id=T.uid,z.scheduler=()=>ah(he),ms(T,!0),G()},Y=(T,w,N)=>{w.component=T;const x=T.vnode.props;T.vnode=w,T.next=null,yT(T,w.props,x,N),wT(T,w.children,N),ur(),Kf(T),hr()},_e=(T,w,N,x,B,U,j,W,z=!1)=>{const G=T&&T.children,he=T?T.shapeFlag:0,Z=w.children,{patchFlag:fe,shapeFlag:me}=w;if(fe>0){if(fe&128){Et(G,Z,N,x,B,U,j,W,z);return}else if(fe&256){Se(G,Z,N,x,B,U,j,W,z);return}}me&8?(he&16&&$e(G,B,U),Z!==G&&f(N,Z)):he&16?me&16?Et(G,Z,N,x,B,U,j,W,z):$e(G,B,U,!0):(he&8&&f(N,""),me&16&&E(Z,N,x,B,U,j,W,z))},Se=(T,w,N,x,B,U,j,W,z)=>{T=T||Qs,w=w||Qs;const G=T.length,he=w.length,Z=Math.min(G,he);let fe;for(fe=0;fe<Z;fe++){const me=w[fe]=z?Vr(w[fe]):Un(w[fe]);R(T[fe],me,N,null,B,U,j,W,z)}G>he?$e(T,B,U,!0,!1,Z):E(w,N,x,B,U,j,W,z,Z)},Et=(T,w,N,x,B,U,j,W,z)=>{let G=0;const he=w.length;let Z=T.length-1,fe=he-1;for(;G<=Z&&G<=fe;){const me=T[G],we=w[G]=z?Vr(w[G]):Un(w[G]);if(Es(me,we))R(me,we,N,null,B,U,j,W,z);else break;G++}for(;G<=Z&&G<=fe;){const me=T[Z],we=w[fe]=z?Vr(w[fe]):Un(w[fe]);if(Es(me,we))R(me,we,N,null,B,U,j,W,z);else break;Z--,fe--}if(G>Z){if(G<=fe){const me=fe+1,we=me<he?w[me].el:x;for(;G<=fe;)R(null,w[G]=z?Vr(w[G]):Un(w[G]),N,we,B,U,j,W,z),G++}}else if(G>fe)for(;G<=Z;)ot(T[G],B,U,!0),G++;else{const me=G,we=G,Ce=new Map;for(G=we;G<=fe;G++){const Qe=w[G]=z?Vr(w[G]):Un(w[G]);Qe.key!=null&&Ce.set(Qe.key,G)}let Ve,Rt=0;const Tt=fe-we+1;let kt=!1,Ft=0;const Ut=new Array(Tt);for(G=0;G<Tt;G++)Ut[G]=0;for(G=me;G<=Z;G++){const Qe=T[G];if(Rt>=Tt){ot(Qe,B,U,!0);continue}let nt;if(Qe.key!=null)nt=Ce.get(Qe.key);else for(Ve=we;Ve<=fe;Ve++)if(Ut[Ve-we]===0&&Es(Qe,w[Ve])){nt=Ve;break}nt===void 0?ot(Qe,B,U,!0):(Ut[nt-we]=G+1,nt>=Ft?Ft=nt:kt=!0,R(Qe,w[nt],N,null,B,U,j,W,z),Rt++)}const vn=kt?ST(Ut):Qs;for(Ve=vn.length-1,G=Tt-1;G>=0;G--){const Qe=we+G,nt=w[Qe],Yn=Qe+1<he?w[Qe+1].el:x;Ut[G]===0?R(null,nt,N,Yn,B,U,j,W,z):kt&&(Ve<0||G!==vn[Ve]?Ne(nt,N,Yn,2):Ve--)}}},Ne=(T,w,N,x,B=null)=>{const{el:U,type:j,transition:W,children:z,shapeFlag:G}=T;if(G&6){Ne(T.component.subTree,w,N,x);return}if(G&128){T.suspense.move(w,N,x);return}if(G&64){j.move(T,w,N,ue);return}if(j===Ct){r(U,w,N);for(let Z=0;Z<z.length;Z++)Ne(z[Z],w,N,x);r(T.anchor,w,N);return}if(j===Ua){K(T,w,N);return}if(x!==2&&G&1&&W)if(x===0)W.beforeEnter(U),r(U,w,N),ln(()=>W.enter(U),B);else{const{leave:Z,delayLeave:fe,afterLeave:me}=W,we=()=>{T.ctx.isUnmounted?s(U):r(U,w,N)},Ce=()=>{Z(U,()=>{we(),me&&me()})};fe?fe(U,we,Ce):Ce()}else r(U,w,N)},ot=(T,w,N,x=!1,B=!1)=>{const{type:U,props:j,ref:W,children:z,dynamicChildren:G,shapeFlag:he,patchFlag:Z,dirs:fe,cacheIndex:me}=T;if(Z===-2&&(B=!1),W!=null&&(ur(),sl(W,null,N,T,!0),hr()),me!=null&&(w.renderCache[me]=void 0),he&256){w.ctx.deactivate(T);return}const we=he&1&&fe,Ce=!uo(T);let Ve;if(Ce&&(Ve=j&&j.onVnodeBeforeUnmount)&&Vn(Ve,w,T),he&6)be(T.component,N,x);else{if(he&128){T.suspense.unmount(N,x);return}we&&ps(T,null,w,"beforeUnmount"),he&64?T.type.remove(T,w,N,ue,x):G&&!G.hasOnce&&(U!==Ct||Z>0&&Z&64)?$e(G,w,N,!1,!0):(U===Ct&&Z&384||!B&&he&16)&&$e(z,w,N),x&&ne(T)}(Ce&&(Ve=j&&j.onVnodeUnmounted)||we)&&ln(()=>{Ve&&Vn(Ve,w,T),we&&ps(T,null,w,"unmounted")},N)},ne=T=>{const{type:w,el:N,anchor:x,transition:B}=T;if(w===Ct){re(N,x);return}if(w===Ua){H(T);return}const U=()=>{s(N),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:j,delayLeave:W}=B,z=()=>j(N,U);W?W(T.el,U,z):z()}else U()},re=(T,w)=>{let N;for(;T!==w;)N=m(T),s(T),T=N;s(w)},be=(T,w,N)=>{const{bum:x,scope:B,job:U,subTree:j,um:W,m:z,a:G,parent:he,slots:{__:Z}}=T;nd(z),nd(G),x&&xa(x),he&&ye(Z)&&Z.forEach(fe=>{he.renderCache[fe]=void 0}),B.stop(),U&&(U.flags|=8,ot(j,T,w,N)),W&&ln(W,w),ln(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},$e=(T,w,N,x=!1,B=!1,U=0)=>{for(let j=U;j<T.length;j++)ot(T[j],w,N,x,B)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),N=w&&w[WE];return N?m(N):w};let J=!1;const X=(T,w,N)=>{T==null?w._vnode&&ot(w._vnode,null,null,!0):R(w._vnode||null,T,w,null,null,null,N),w._vnode=T,J||(J=!0,Kf(),rg(),J=!1)},ue={p:R,um:ot,m:Ne,r:ne,mt:Re,mc:E,pc:_e,pbc:S,n:M,o:t};return{render:X,hydrate:void 0,createApp:gT(X)}}function kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ms({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function RT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bg(t,e,n=!1){const r=t.children,s=e.children;if(ye(r)&&ye(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Vr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&bg(o,l)),l.type===$l&&(l.el=o.el),l.type===Qt&&!l.el&&(l.el=o.el)}}function ST(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Cg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cg(e)}function nd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const bT=Symbol.for("v-scx"),CT=()=>An(bT);function fo(t,e,n){return Pg(t,e,n)}function Pg(t,e,n=Xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(bo){if(i==="sync"){const g=CT();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Bn,g.resume=Bn,g.pause=Bn,g}}const f=Lt;l.call=(g,D,R)=>bn(g,f,D,R);let d=!1;i==="post"?l.scheduler=g=>{ln(g,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,D)=>{D?g():ah(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const m=jE(t,e,l);return bo&&(u?u.push(m):c&&m()),m}function PT(t,e,n){const r=this.proxy,s=dt(t)?t.includes(".")?kg(r,t):()=>r[t]:t.bind(r,r);let i;Ie(e)?i=e:(i=e.handler,n=e);const o=Go(this),l=Pg(s,i.bind(r),n);return o(),l}function kg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const kT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gn(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function DT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Xe;let s=n;const i=e.startsWith("update:"),o=i&&kT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>dt(f)?f.trim():f)),o.number&&(s=n.map(Za)));let l,c=r[l=Ic(e)]||r[l=Ic(gn(e))];!c&&i&&(c=r[l=Ic(ts(e))]),c&&bn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,bn(u,t,6,s)}}function Dg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ie(t)){const c=u=>{const f=Dg(u,e,!0);f&&(l=!0,Pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ze(t)&&r.set(t,null),null):(ye(i)?i.forEach(c=>o[c]=null):Pt(o,i),Ze(t)&&r.set(t,o),o)}function Ul(t,e){return!t||!Pl(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,ts(e))||We(t,e))}function rd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:g,ctx:D,inheritAttrs:R}=t,b=rl(t);let L,$;try{if(n.shapeFlag&4){const H=s||r,oe=H;L=Un(u.call(oe,H,f,d,g,m,D)),$=l}else{const H=e;L=Un(H.length>1?H(d,{attrs:l,slots:o,emit:c}):H(d,null)),$=e.props?l:NT(l)}}catch(H){po.length=0,Ml(H,t,1),L=st(Qt)}let K=L;if($&&R!==!1){const H=Object.keys($),{shapeFlag:oe}=K;H.length&&oe&7&&(i&&H.some(Qu)&&($=OT($,i)),K=Kr(K,$,!1,!0))}return n.dirs&&(K=Kr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&Ro(K,n.transition),L=K,rl(b),L}const NT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pl(n))&&((e||(e={}))[n]=t[n]);return e},OT=(t,e)=>{const n={};for(const r in t)(!Qu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function VT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?sd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!Ul(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?sd(r,o,u):!0:!!o;return!1}function sd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ul(n,i))return!0}return!1}function LT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ng=t=>t.__isSuspense;function MT(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):zE(t)}const Ct=Symbol.for("v-fgt"),$l=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),po=[];let un=null;function se(t=!1){po.push(un=t?null:[])}function xT(){po.pop(),un=po[po.length-1]||null}let So=1;function id(t,e=!1){So+=t,t<0&&un&&e&&(un.hasOnce=!0)}function Og(t){return t.dynamicChildren=So>0?un||Qs:null,xT(),So>0&&un&&un.push(t),t}function ie(t,e,n,r,s,i){return Og(k(t,e,n,r,s,i,!0))}function hu(t,e,n,r,s){return Og(st(t,e,n,r,s,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const Vg=({key:t})=>t??null,$a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||Ht(t)||Ie(t)?{i:rn,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===Ct?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vg(e),ref:e&&$a(e),scopeId:ig,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rn};return l?(hh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=dt(n)?8:16),So>0&&!o&&un&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&un.push(c),c}const st=FT;function FT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===aT)&&(t=Qt),ol(t)){const l=Kr(t,e,!0);return n&&hh(l,n),So>0&&!i&&un&&(l.shapeFlag&6?un[un.indexOf(t)]=l:un.push(l)),l.patchFlag=-2,l}if(XT(t)&&(t=t.__vccOpts),e){e=UT(e);let{class:l,style:c}=e;l&&!dt(l)&&(e.class=tn(l)),Ze(c)&&(ih(c)&&!ye(c)&&(c=Pt({},c)),e.style=Ju(c))}const o=dt(t)?1:Ng(t)?128:og(t)?64:Ze(t)?4:Ie(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function UT(t){return t?ih(t)||Tg(t)?Pt({},t):t:null}function Kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?BT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Vg(u),ref:e&&e.ref?n&&i?ye(i)?i.concat($a(e)):[i,$a(e)]:$a(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ro(f,c.clone(f)),f}function It(t=" ",e=0){return st($l,null,t,e)}function $T(t,e){const n=st(Ua,null,t);return n.staticCount=e,n}function Le(t="",e=!1){return e?(se(),hu(Qt,null,t)):st(Qt,null,t)}function Un(t){return t==null||typeof t=="boolean"?st(Qt):ye(t)?st(Ct,null,t.slice()):ol(t)?Vr(t):st($l,null,String(t))}function Vr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function hh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ye(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Tg(e)?e._ctx=rn:s===3&&rn&&(rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:rn},n=32):(e=String(e),r&64?(n=16,e=[It(e)]):n=8);t.children=e,t.shapeFlag|=n}function BT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tn([e.class,r.class]));else if(s==="style")e.style=Ju([e.style,r.style]);else if(Pl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ye(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Vn(t,e,n,r=null){bn(t,e,7,[n,r])}const jT=yg();let qT=0;function HT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jT,i={uid:qT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ig(r,s),emitsOptions:Dg(r,s),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:r.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=DT.bind(null,i),t.ce&&t.ce(i),i}let Lt=null;const zT=()=>Lt||rn;let al,fu;{const t=Ol(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};al=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),fu=e("__VUE_SSR_SETTERS__",n=>bo=n)}const Go=t=>{const e=Lt;return al(t),t.scope.on(),()=>{t.scope.off(),al(e)}},od=()=>{Lt&&Lt.scope.off(),al(null)};function Lg(t){return t.vnode.shapeFlag&4}let bo=!1;function WT(t,e=!1,n=!1){e&&fu(e);const{props:r,children:s}=t.vnode,i=Lg(t);_T(t,r,i,e),TT(t,s,n||e);const o=i?GT(t,e):void 0;return e&&fu(!1),o}function GT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cT);const{setup:r}=n;if(r){ur();const s=t.setupContext=r.length>1?QT(t):null,i=Go(t),o=zo(r,t,0,[t.props,s]),l=km(o);if(hr(),i(),(l||t.sp)&&!uo(t)&&fg(t),l){if(o.then(od,od),e)return o.then(c=>{ad(t,c)}).catch(c=>{Ml(c,t,0)});t.asyncDep=o}else ad(t,o)}else Mg(t)}function ad(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ze(e)&&(t.setupState=eg(e)),Mg(t)}function Mg(t,e,n){const r=t.type;t.render||(t.render=r.render||Bn);{const s=Go(t);ur();try{uT(t)}finally{hr(),s()}}}const KT={get(t,e){return jt(t,"get",""),t[e]}};function QT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,KT),slots:t.slots,emit:t.emit,expose:e}}function Bl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(eg(LE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ho)return ho[n](t)},has(e,n){return n in e||n in ho}})):t.proxy}function YT(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function XT(t){return Ie(t)&&"__vccOpts"in t}const gt=(t,e)=>$E(t,e,bo);function fh(t,e,n){const r=arguments.length;return r===2?Ze(e)&&!ye(e)?ol(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ol(n)&&(n=[n]),st(t,e,n))}const JT="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let du;const ld=typeof window<"u"&&window.trustedTypes;if(ld)try{du=ld.createPolicy("vue",{createHTML:t=>t})}catch{}const xg=du?t=>du.createHTML(t):t=>t,ZT="http://www.w3.org/2000/svg",ew="http://www.w3.org/1998/Math/MathML",tr=typeof document<"u"?document:null,cd=tr&&tr.createElement("template"),tw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tr.createElementNS(ZT,t):e==="mathml"?tr.createElementNS(ew,t):n?tr.createElement(t,{is:n}):tr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tr.createTextNode(t),createComment:t=>tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cd.innerHTML=xg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=cd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pr="transition",Wi="animation",Co=Symbol("_vtc"),Fg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nw=Pt({},ag,Fg),rw=t=>(t.displayName="Transition",t.props=nw,t),IN=rw((t,{slots:e})=>fh(QE,sw(t),e)),gs=(t,e=[])=>{ye(t)?t.forEach(n=>n(...e)):t&&t(...e)},ud=t=>t?ye(t)?t.some(e=>e.length>1):t.length>1:!1;function sw(t){const e={};for(const A in t)A in Fg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,D=iw(s),R=D&&D[0],b=D&&D[1],{onBeforeEnter:L,onEnter:$,onEnterCancelled:K,onLeave:H,onLeaveCancelled:oe,onBeforeAppear:pe=L,onAppear:C=$,onAppearCancelled:E=K}=e,y=(A,v,Re,Ke)=>{A._enterCancelled=Ke,_s(A,v?f:l),_s(A,v?u:o),Re&&Re()},S=(A,v)=>{A._isLeaving=!1,_s(A,d),_s(A,g),_s(A,m),v&&v()},I=A=>(v,Re)=>{const Ke=A?C:$,ce=()=>y(v,A,Re);gs(Ke,[v,ce]),hd(()=>{_s(v,A?c:i),Zn(v,A?f:l),ud(Ke)||fd(v,r,R,ce)})};return Pt(e,{onBeforeEnter(A){gs(L,[A]),Zn(A,i),Zn(A,o)},onBeforeAppear(A){gs(pe,[A]),Zn(A,c),Zn(A,u)},onEnter:I(!1),onAppear:I(!0),onLeave(A,v){A._isLeaving=!0;const Re=()=>S(A,v);Zn(A,d),A._enterCancelled?(Zn(A,m),md()):(md(),Zn(A,m)),hd(()=>{A._isLeaving&&(_s(A,d),Zn(A,g),ud(H)||fd(A,r,b,Re))}),gs(H,[A,Re])},onEnterCancelled(A){y(A,!1,void 0,!0),gs(K,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),gs(E,[A])},onLeaveCancelled(A){S(A),gs(oe,[A])}})}function iw(t){if(t==null)return null;if(Ze(t))return[Dc(t.enter),Dc(t.leave)];{const e=Dc(t);return[e,e]}}function Dc(t){return oE(t)}function Zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Co]||(t[Co]=new Set)).add(e)}function _s(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Co];n&&(n.delete(e),n.size||(t[Co]=void 0))}function hd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ow=0;function fd(t,e,n,r){const s=t._endId=++ow,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=aw(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,m)}function aw(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),s=r(`${Pr}Delay`),i=r(`${Pr}Duration`),o=dd(s,i),l=r(`${Wi}Delay`),c=r(`${Wi}Duration`),u=dd(l,c);let f=null,d=0,m=0;e===Pr?o>0&&(f=Pr,d=o,m=i.length):e===Wi?u>0&&(f=Wi,d=u,m=c.length):(d=Math.max(o,u),f=d>0?o>u?Pr:Wi:null,m=f?f===Pr?i.length:c.length:0);const g=f===Pr&&/\b(transform|all)(,|$)/.test(r(`${Pr}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:g}}function dd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>pd(n)+pd(t[r])))}function pd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function md(){return document.body.offsetHeight}function lw(t,e,n){const r=t[Co];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gd=Symbol("_vod"),cw=Symbol("_vsh"),uw=Symbol(""),hw=/(^|;)\s*display\s*:/;function fw(t,e,n){const r=t.style,s=dt(n);let i=!1;if(n&&!s){if(e)if(dt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ba(r,l,"")}else for(const o in e)n[o]==null&&Ba(r,o,"");for(const o in n)o==="display"&&(i=!0),Ba(r,o,n[o])}else if(s){if(e!==n){const o=r[uw];o&&(n+=";"+o),r.cssText=n,i=hw.test(n)}}else e&&t.removeAttribute("style");gd in t&&(t[gd]=i?r.display:"",t[cw]&&(r.display="none"))}const _d=/\s*!important$/;function Ba(t,e,n){if(ye(n))n.forEach(r=>Ba(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dw(t,e);_d.test(n)?t.setProperty(ts(r),n.replace(_d,""),"important"):t[r]=n}}const yd=["Webkit","Moz","ms"],Nc={};function dw(t,e){const n=Nc[e];if(n)return n;let r=gn(e);if(r!=="filter"&&r in t)return Nc[e]=r;r=Nl(r);for(let s=0;s<yd.length;s++){const i=yd[s]+r;if(i in t)return Nc[e]=i}return e}const vd="http://www.w3.org/1999/xlink";function Ed(t,e,n,r,s,i=fE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vd,e.slice(6,e.length)):t.setAttributeNS(vd,e,n):n==null||i&&!Vm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gn(n)?String(n):n)}function Td(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ts(t,e,n,r){t.addEventListener(e,n,r)}function pw(t,e,n,r){t.removeEventListener(e,n,r)}const wd=Symbol("_vei");function mw(t,e,n,r,s=null){const i=t[wd]||(t[wd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=gw(e);if(r){const u=i[e]=vw(r,s);Ts(t,l,u,c)}else o&&(pw(t,l,o,c),i[e]=void 0)}}const Id=/(?:Once|Passive|Capture)$/;function gw(t){let e;if(Id.test(t)){e={};let r;for(;r=t.match(Id);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let Oc=0;const _w=Promise.resolve(),yw=()=>Oc||(_w.then(()=>Oc=0),Oc=Date.now());function vw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bn(Ew(r,n.value),e,5,[r])};return n.value=t,n.attached=yw(),n}function Ew(t,e){if(ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?lw(t,r,o):e==="style"?fw(t,n,r):Pl(e)?Qu(e)||mw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ww(t,e,r,o))?(Td(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ed(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!dt(r))?Td(t,gn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ed(t,e,r,o))};function ww(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ad(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ad(e)&&dt(n)?!1:e in t}const ll=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?n=>xa(e,n):e};function Iw(t){t.target.composing=!0}function Rd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ei=Symbol("_assign"),nr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ei]=ll(s);const i=r||s.props&&s.props.type==="number";Ts(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Za(l)),t[ei](l)}),n&&Ts(t,"change",()=>{t.value=t.value.trim()}),e||(Ts(t,"compositionstart",Iw),Ts(t,"compositionend",Rd),Ts(t,"change",Rd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ei]=ll(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Za(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Aw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=kl(e);Ts(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Za(cl(o)):cl(o));t[ei](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,oh(()=>{t._assigning=!1})}),t[ei]=ll(r)},mounted(t,{value:e}){Sd(t,e)},beforeUpdate(t,e,n){t[ei]=ll(n)},updated(t,{value:e}){t._assigning||Sd(t,e)}};function Sd(t,e){const n=t.multiple,r=ye(e);if(!(n&&!r&&!kl(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=cl(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=pE(e,l)>-1}else o.selected=e.has(l);else if(Vl(cl(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function cl(t){return"_value"in t?t._value:t.value}const Rw=["ctrl","shift","alt","meta"],Sw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rw.some(n=>t[`${n}Key`]&&!e.includes(n))},Br=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Sw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},bw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ts(s.key);if(e.some(o=>o===i||bw[o]===i))return t(s)})},Pw=Pt({patchProp:Tw},tw);let bd;function kw(){return bd||(bd=IT(Pw))}const Dw=(...t)=>{const e=kw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ow(r);if(!s)return;const i=e._component;!Ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Nw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ow(t){return dt(t)?document.querySelector(t):t}const Vw="/assets/Logo%20m_k-DM-xNOLj.png";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Hs=typeof document<"u";function Ug(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ug(t.default)}const ze=Object.assign;function Vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Cn(s)?s.map(t):t(s)}return n}const mo=()=>{},Cn=Array.isArray,$g=/#/g,Mw=/&/g,xw=/\//g,Fw=/=/g,Uw=/\?/g,Bg=/\+/g,$w=/%5B/g,Bw=/%5D/g,jg=/%5E/g,jw=/%60/g,qg=/%7B/g,qw=/%7C/g,Hg=/%7D/g,Hw=/%20/g;function dh(t){return encodeURI(""+t).replace(qw,"|").replace($w,"[").replace(Bw,"]")}function zw(t){return dh(t).replace(qg,"{").replace(Hg,"}").replace(jg,"^")}function pu(t){return dh(t).replace(Bg,"%2B").replace(Hw,"+").replace($g,"%23").replace(Mw,"%26").replace(jw,"`").replace(qg,"{").replace(Hg,"}").replace(jg,"^")}function Ww(t){return pu(t).replace(Fw,"%3D")}function Gw(t){return dh(t).replace($g,"%23").replace(Uw,"%3F")}function Kw(t){return t==null?"":Gw(t).replace(xw,"%2F")}function Po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Qw=/\/$/,Yw=t=>t.replace(Qw,"");function Lc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=eI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Po(o)}}function Xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ai(e.matched[r],n.matched[s])&&zg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ai(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zw(t[n],e[n]))return!1;return!0}function Zw(t,e){return Cn(t)?Pd(t,e):Cn(e)?Pd(e,t):t===e}function Pd(t,e){return Cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const kr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var go;(function(t){t.back="back",t.forward="forward",t.unknown=""})(go||(go={}));function tI(t){if(!t)if(Hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yw(t)}const nI=/^[^#]+#/;function rI(t,e){return t.replace(nI,"#")+e}function sI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jl=()=>({left:window.scrollX,top:window.scrollY});function iI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kd(t,e){return(history.state?history.state.position-e:-1)+t}const mu=new Map;function oI(t,e){mu.set(t,e)}function aI(t){const e=mu.get(t);return mu.delete(t),e}let lI=()=>location.protocol+"//"+location.host;function Wg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Cd(c,"")}return Cd(n,t)+r+s}function cI(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=Wg(t,location),D=n.value,R=e.value;let b=0;if(m){if(n.value=g,e.value=m,o&&o===D){o=null;return}b=R?m.position-R.position:0}else r(g);s.forEach(L=>{L(n.value,D,{delta:b,type:ko.pop,direction:b?b>0?go.forward:go.back:go.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const D=s.indexOf(m);D>-1&&s.splice(D,1)};return i.push(g),g}function f(){const{history:m}=window;m.state&&m.replaceState(ze({},m.state,{scroll:jl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Dd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?jl():null}}function uI(t){const{history:e,location:n}=window,r={value:Wg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:lI()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(c,u){const f=ze({},e.state,Dd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=ze({},s.value,e.state,{forward:c,scroll:jl()});i(f.current,f,!0);const d=ze({},Dd(r.value,c,null),{position:f.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function hI(t){t=tI(t);const e=uI(t),n=cI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ze({location:"",base:t,go:r,createHref:rI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fI(t){return typeof t=="string"||t&&typeof t=="object"}function Gg(t){return typeof t=="string"||typeof t=="symbol"}const Kg=Symbol("");var Nd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nd||(Nd={}));function li(t,e){return ze(new Error,{type:t,[Kg]:!0},e)}function er(t,e){return t instanceof Error&&Kg in t&&(e==null||!!(t.type&e))}const Od="[^/]+?",dI={sensitive:!1,strict:!1,start:!0,end:!0},pI=/[.+*?^${}()[\]/\\]/g;function mI(t,e){const n=ze({},dI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(pI,"\\$&"),g+=40;else if(m.type===1){const{value:D,repeatable:R,optional:b,regexp:L}=m;i.push({name:D,repeatable:R,optional:b});const $=L||Od;if($!==Od){g+=10;try{new RegExp(`(${$})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${D}" (${$}): `+H.message)}}let K=R?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;d||(K=b&&u.length<2?`(?:/${K})`:"/"+K),b&&(K+="?"),s+=K,g+=20,b&&(g+=-8),R&&(g+=-20),$===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",D=i[m-1];d[D.name]=g&&D.repeatable?g.split("/"):g}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of m)if(g.type===0)f+=g.value;else if(g.type===1){const{value:D,repeatable:R,optional:b}=g,L=D in u?u[D]:"";if(Cn(L)&&!R)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const $=Cn(L)?L.join("/"):L;if(!$)if(b)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${D}"`);f+=$}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function gI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vd(r))return 1;if(Vd(s))return-1}return s.length-r.length}function Vd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _I={type:0,value:""},yI=/[a-zA-Z0-9_]/;function vI(t){if(!t)return[[]];if(t==="/")return[[_I]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:yI.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function EI(t,e,n){const r=mI(vI(t.path),n),s=ze(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function TI(t,e){const n=[],r=new Map;e=Fd({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const D=!g,R=Md(d);R.aliasOf=g&&g.record;const b=Fd(e,d),L=[R];if("alias"in d){const H=typeof d.alias=="string"?[d.alias]:d.alias;for(const oe of H)L.push(Md(ze({},R,{components:g?g.record.components:R.components,path:oe,aliasOf:g?g.record:R})))}let $,K;for(const H of L){const{path:oe}=H;if(m&&oe[0]!=="/"){const pe=m.record.path,C=pe[pe.length-1]==="/"?"":"/";H.path=m.record.path+(oe&&C+oe)}if($=EI(H,m,b),g?g.alias.push($):(K=K||$,K!==$&&K.alias.push($),D&&d.name&&!xd($)&&o(d.name)),Yg($)&&c($),R.children){const pe=R.children;for(let C=0;C<pe.length;C++)i(pe[C],$,g&&g.children[C])}g=g||$}return K?()=>{o(K)}:mo}function o(d){if(Gg(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=AI(d,n);n.splice(m,0,d),d.record.name&&!xd(d)&&r.set(d.record.name,d)}function u(d,m){let g,D={},R,b;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw li(1,{location:d});b=g.record.name,D=ze(Ld(m.params,g.keys.filter(K=>!K.optional).concat(g.parent?g.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),d.params&&Ld(d.params,g.keys.map(K=>K.name))),R=g.stringify(D)}else if(d.path!=null)R=d.path,g=n.find(K=>K.re.test(R)),g&&(D=g.parse(R),b=g.record.name);else{if(g=m.name?r.get(m.name):n.find(K=>K.re.test(m.path)),!g)throw li(1,{location:d,currentLocation:m});b=g.record.name,D=ze({},m.params,d.params),R=g.stringify(D)}const L=[];let $=g;for(;$;)L.unshift($.record),$=$.parent;return{name:b,path:R,params:D,matched:L,meta:II(L)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Ld(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:wI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function wI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function II(t){return t.reduce((e,n)=>ze(e,n.meta),{})}function Fd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function AI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Qg(t,e[i])<0?r=i:n=i+1}const s=RI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function RI(t){let e=t;for(;e=e.parent;)if(Yg(e)&&Qg(t,e)===0)return e}function Yg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function SI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Bg," "),o=i.indexOf("="),l=Po(o<0?i:i.slice(0,o)),c=o<0?null:Po(i.slice(o+1));if(l in e){let u=e[l];Cn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Ud(t){let e="";for(let n in t){const r=t[n];if(n=Ww(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Cn(r)?r.map(i=>i&&pu(i)):[r&&pu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CI=Symbol(""),$d=Symbol(""),ql=Symbol(""),ph=Symbol(""),gu=Symbol("");function Gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Lr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(li(4,{from:n,to:e})):m instanceof Error?c(m):fI(m)?c(li(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Mc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Ug(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Lr(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Lw(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&Lr(g,n,r,o,l,s)()}))}}return i}function Bd(t){const e=An(ql),n=An(ph),r=gt(()=>{const c=ke(t.to);return e.resolve(c)}),s=gt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(ai.bind(null,f));if(m>-1)return m;const g=jd(c[u-2]);return u>1&&jd(f)===g&&d[d.length-1].path!==g?d.findIndex(ai.bind(null,c[u-2])):m}),i=gt(()=>s.value>-1&&NI(n.params,r.value.params)),o=gt(()=>s.value>-1&&s.value===n.matched.length-1&&zg(n.params,r.value.params));function l(c={}){if(DI(c)){const u=e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(mo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:gt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function PI(t){return t.length===1?t[0]:t}const kI=Ei({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bd,setup(t,{slots:e}){const n=Os(Bd(t)),{options:r}=An(ql),s=gt(()=>({[qd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&PI(e.default(n));return t.custom?i:fh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eo=kI;function DI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qd=(t,e,n)=>t??e??n,OI=Ei({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=An(gu),s=gt(()=>t.route||r.value),i=An($d,0),o=gt(()=>{let u=ke(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=gt(()=>s.value.matched[o.value]);Fa($d,gt(()=>o.value+1)),Fa(CI,l),Fa(gu,s);const c=De();return fo(()=>[c.value,l.value,t.name],([u,f,d],[m,g,D])=>{f&&(f.instances[d]=u,g&&g!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!ai(f,g)||!m)&&(f.enterCallbacks[d]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return Hd(n.default,{Component:m,route:u});const g=d.props[f],D=g?g===!0?u.params:typeof g=="function"?g(u):g:null,b=fh(m,ze({},D,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Hd(n.default,{Component:b,route:u})||b}}});function Hd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xg=OI;function VI(t){const e=TI(t.routes,t),n=t.parseQuery||SI,r=t.stringifyQuery||Ud,s=t.history,i=Gi(),o=Gi(),l=Gi(),c=ME(kr);let u=kr;Hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Vc.bind(null,M=>""+M),d=Vc.bind(null,Kw),m=Vc.bind(null,Po);function g(M,J){let X,ue;return Gg(M)?(X=e.getRecordMatcher(M),ue=J):ue=M,e.addRoute(ue,X)}function D(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function R(){return e.getRoutes().map(M=>M.record)}function b(M){return!!e.getRecordMatcher(M)}function L(M,J){if(J=ze({},J||c.value),typeof M=="string"){const N=Lc(n,M,J.path),x=e.resolve({path:N.path},J),B=s.createHref(N.fullPath);return ze(N,x,{params:m(x.params),hash:Po(N.hash),redirectedFrom:void 0,href:B})}let X;if(M.path!=null)X=ze({},M,{path:Lc(n,M.path,J.path).path});else{const N=ze({},M.params);for(const x in N)N[x]==null&&delete N[x];X=ze({},M,{params:d(N)}),J.params=d(J.params)}const ue=e.resolve(X,J),Ue=M.hash||"";ue.params=f(m(ue.params));const T=Xw(r,ze({},M,{hash:zw(Ue),path:ue.path})),w=s.createHref(T);return ze({fullPath:T,hash:Ue,query:r===Ud?bI(M.query):M.query||{}},ue,{redirectedFrom:void 0,href:w})}function $(M){return typeof M=="string"?Lc(n,M,c.value.path):ze({},M)}function K(M,J){if(u!==M)return li(8,{from:J,to:M})}function H(M){return C(M)}function oe(M){return H(ze($(M),{replace:!0}))}function pe(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:X}=J;let ue=typeof X=="function"?X(M):X;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=$(ue):{path:ue},ue.params={}),ze({query:M.query,hash:M.hash,params:ue.path!=null?{}:M.params},ue)}}function C(M,J){const X=u=L(M),ue=c.value,Ue=M.state,T=M.force,w=M.replace===!0,N=pe(X);if(N)return C(ze($(N),{state:typeof N=="object"?ze({},Ue,N.state):Ue,force:T,replace:w}),J||X);const x=X;x.redirectedFrom=J;let B;return!T&&Jw(r,ue,X)&&(B=li(16,{to:x,from:ue}),Ne(ue,ue,!0,!1)),(B?Promise.resolve(B):S(x,ue)).catch(U=>er(U)?er(U,2)?U:Et(U):_e(U,x,ue)).then(U=>{if(U){if(er(U,2))return C(ze({replace:w},$(U.to),{state:typeof U.to=="object"?ze({},Ue,U.to.state):Ue,force:T}),J||x)}else U=A(x,ue,!0,w,Ue);return I(x,ue,U),U})}function E(M,J){const X=K(M,J);return X?Promise.reject(X):Promise.resolve()}function y(M){const J=re.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function S(M,J){let X;const[ue,Ue,T]=LI(M,J);X=Mc(ue.reverse(),"beforeRouteLeave",M,J);for(const N of ue)N.leaveGuards.forEach(x=>{X.push(Lr(x,M,J))});const w=E.bind(null,M,J);return X.push(w),$e(X).then(()=>{X=[];for(const N of i.list())X.push(Lr(N,M,J));return X.push(w),$e(X)}).then(()=>{X=Mc(Ue,"beforeRouteUpdate",M,J);for(const N of Ue)N.updateGuards.forEach(x=>{X.push(Lr(x,M,J))});return X.push(w),$e(X)}).then(()=>{X=[];for(const N of T)if(N.beforeEnter)if(Cn(N.beforeEnter))for(const x of N.beforeEnter)X.push(Lr(x,M,J));else X.push(Lr(N.beforeEnter,M,J));return X.push(w),$e(X)}).then(()=>(M.matched.forEach(N=>N.enterCallbacks={}),X=Mc(T,"beforeRouteEnter",M,J,y),X.push(w),$e(X))).then(()=>{X=[];for(const N of o.list())X.push(Lr(N,M,J));return X.push(w),$e(X)}).catch(N=>er(N,8)?N:Promise.reject(N))}function I(M,J,X){l.list().forEach(ue=>y(()=>ue(M,J,X)))}function A(M,J,X,ue,Ue){const T=K(M,J);if(T)return T;const w=J===kr,N=Hs?history.state:{};X&&(ue||w?s.replace(M.fullPath,ze({scroll:w&&N&&N.scroll},Ue)):s.push(M.fullPath,Ue)),c.value=M,Ne(M,J,X,w),Et()}let v;function Re(){v||(v=s.listen((M,J,X)=>{if(!be.listening)return;const ue=L(M),Ue=pe(ue);if(Ue){C(ze(Ue,{replace:!0,force:!0}),ue).catch(mo);return}u=ue;const T=c.value;Hs&&oI(kd(T.fullPath,X.delta),jl()),S(ue,T).catch(w=>er(w,12)?w:er(w,2)?(C(ze($(w.to),{force:!0}),ue).then(N=>{er(N,20)&&!X.delta&&X.type===ko.pop&&s.go(-1,!1)}).catch(mo),Promise.reject()):(X.delta&&s.go(-X.delta,!1),_e(w,ue,T))).then(w=>{w=w||A(ue,T,!1),w&&(X.delta&&!er(w,8)?s.go(-X.delta,!1):X.type===ko.pop&&er(w,20)&&s.go(-1,!1)),I(ue,T,w)}).catch(mo)}))}let Ke=Gi(),ce=Gi(),Y;function _e(M,J,X){Et(M);const ue=ce.list();return ue.length?ue.forEach(Ue=>Ue(M,J,X)):console.error(M),Promise.reject(M)}function Se(){return Y&&c.value!==kr?Promise.resolve():new Promise((M,J)=>{Ke.add([M,J])})}function Et(M){return Y||(Y=!M,Re(),Ke.list().forEach(([J,X])=>M?X(M):J()),Ke.reset()),M}function Ne(M,J,X,ue){const{scrollBehavior:Ue}=t;if(!Hs||!Ue)return Promise.resolve();const T=!X&&aI(kd(M.fullPath,0))||(ue||!X)&&history.state&&history.state.scroll||null;return oh().then(()=>Ue(M,J,T)).then(w=>w&&iI(w)).catch(w=>_e(w,M,J))}const ot=M=>s.go(M);let ne;const re=new Set,be={currentRoute:c,listening:!0,addRoute:g,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:R,resolve:L,options:t,push:H,replace:oe,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ce.add,isReady:Se,install(M){const J=this;M.component("RouterLink",eo),M.component("RouterView",Xg),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),Hs&&!ne&&c.value===kr&&(ne=!0,H(s.location).catch(Ue=>{}));const X={};for(const Ue in kr)Object.defineProperty(X,Ue,{get:()=>c.value[Ue],enumerable:!0});M.provide(ql,J),M.provide(ph,Xm(X)),M.provide(gu,c);const ue=M.unmount;re.add(M),M.unmount=function(){re.delete(M),re.size<1&&(u=kr,v&&v(),v=null,c.value=kr,ne=!1,Y=!1),ue()}}};function $e(M){return M.reduce((J,X)=>J.then(()=>y(X)),Promise.resolve())}return be}function LI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ai(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ai(u,c))||s.push(c))}return[n,r,s]}function Jg(){return An(ql)}function MI(t){return An(ph)}const xI=()=>{};var zd={};/**
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
 */const Zg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[f],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new UI;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const D=u<<6&192|d;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $I=function(t){const e=Zg(t);return e_.encodeByteArray(e,!0)},ul=function(t){return $I(t).replace(/\./g,"")},t_=function(t){try{return e_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jI=()=>BI().__FIREBASE_DEFAULTS__,qI=()=>{if(typeof process>"u"||typeof zd>"u")return;const t=zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&t_(t[1]);return e&&JSON.parse(e)},Hl=()=>{try{return xI()||jI()||qI()||HI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},n_=t=>{var e,n;return(n=(e=Hl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},zI=t=>{const e=n_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r_=()=>{var t;return(t=Hl())==null?void 0:t.config},s_=t=>{var e;return(e=Hl())==null?void 0:e[`_${t}`]};/**
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
 */class WI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ti(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function i_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ul(JSON.stringify(n)),ul(JSON.stringify(o)),""].join(".")}const _o={};function KI(){const t={prod:[],emulator:[]};for(const e of Object.keys(_o))_o[e]?t.emulator.push(e):t.prod.push(e);return t}function QI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wd=!1;function o_(t,e){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||_o[t]===e||_o[t]||Wd)return;_o[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=KI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Wd=!0,o()},m}function f(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=QI(r),g=n("text"),D=document.getElementById(g)||document.createElement("span"),R=n("learnmore"),b=document.getElementById(R)||document.createElement("a"),L=n("preprendIcon"),$=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const K=m.element;l(K),f(b,R);const H=u();c($,L),K.append($,D,b,H),document.body.appendChild(K)}i?(D.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function XI(){var e;const t=(e=Hl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tA(){const t=zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nA(){return!XI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rA(){try{return typeof indexedDB=="object"}catch{return!1}}function sA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const iA="FirebaseError";class _r extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iA,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new _r(s,l,r)}}function oA(t,e){return t.replace(aA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aA=/\{\$([^}]+)}/g;function lA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gd(i)&&Gd(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gd(t){return t!==null&&typeof t=="object"}/**
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
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function no(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cA(t,e){const n=new uA(t,e);return n.subscribe.bind(n)}class uA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xc),s.error===void 0&&(s.error=xc),s.complete===void 0&&(s.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class Cs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vs="[DEFAULT]";/**
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
 */class fA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pA(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dA(t){return t===vs?void 0:t}function pA(t){return t.instantiationMode==="EAGER"}/**
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
 */class mA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Me||(Me={}));const gA={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},_A=Me.INFO,yA={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},vA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=_A,this._logHandler=vA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const EA=(t,e)=>e.some(n=>t instanceof n);let Kd,Qd;function TA(){return Kd||(Kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wA(){return Qd||(Qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a_=new WeakMap,_u=new WeakMap,l_=new WeakMap,Fc=new WeakMap,gh=new WeakMap;function IA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a_.set(n,t)}).catch(()=>{}),gh.set(e,t),e}function AA(t){if(_u.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_u.set(t,e)}let yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RA(t){yu=t(yu)}function SA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return l_.set(r,e.sort?e.sort():[e]),jr(r)}:wA().includes(t)?function(...e){return t.apply(Uc(this),e),jr(a_.get(this))}:function(...e){return jr(t.apply(Uc(this),e))}}function bA(t){return typeof t=="function"?SA(t):(t instanceof IDBTransaction&&AA(t),EA(t,TA())?new Proxy(t,yu):t)}function jr(t){if(t instanceof IDBRequest)return IA(t);if(Fc.has(t))return Fc.get(t);const e=bA(t);return e!==t&&(Fc.set(t,e),gh.set(e,t)),e}const Uc=t=>gh.get(t);function CA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=jr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jr(o.result),c.oldVersion,c.newVersion,jr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const PA=["get","getKey","getAll","getAllKeys","count"],kA=["put","add","delete","clear"],$c=new Map;function Yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return $c.set(e,i),i}RA(t=>({...t,get:(e,n,r)=>Yd(e,n)||t.get(e,n,r),has:(e,n)=>!!Yd(e,n)||t.has(e,n)}));/**
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
 */class DA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",Xd="0.14.6";/**
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
 */const fr=new mh("@firebase/app"),OA="@firebase/app-compat",VA="@firebase/analytics-compat",LA="@firebase/analytics",MA="@firebase/app-check-compat",xA="@firebase/app-check",FA="@firebase/auth",UA="@firebase/auth-compat",$A="@firebase/database",BA="@firebase/data-connect",jA="@firebase/database-compat",qA="@firebase/functions",HA="@firebase/functions-compat",zA="@firebase/installations",WA="@firebase/installations-compat",GA="@firebase/messaging",KA="@firebase/messaging-compat",QA="@firebase/performance",YA="@firebase/performance-compat",XA="@firebase/remote-config",JA="@firebase/remote-config-compat",ZA="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/ai",rR="@firebase/firestore-compat",sR="firebase",iR="12.6.0";/**
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
 */const Eu="[DEFAULT]",oR={[vu]:"fire-core",[OA]:"fire-core-compat",[LA]:"fire-analytics",[VA]:"fire-analytics-compat",[xA]:"fire-app-check",[MA]:"fire-app-check-compat",[FA]:"fire-auth",[UA]:"fire-auth-compat",[$A]:"fire-rtdb",[BA]:"fire-data-connect",[jA]:"fire-rtdb-compat",[qA]:"fire-fn",[HA]:"fire-fn-compat",[zA]:"fire-iid",[WA]:"fire-iid-compat",[GA]:"fire-fcm",[KA]:"fire-fcm-compat",[QA]:"fire-perf",[YA]:"fire-perf-compat",[XA]:"fire-rc",[JA]:"fire-rc-compat",[ZA]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[rR]:"fire-fst-compat",[nR]:"fire-vertex","fire-js":"fire-js",[sR]:"fire-js-all"};/**
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
 */const hl=new Map,aR=new Map,Tu=new Map;function Jd(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(Tu.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Tu.set(e,t);for(const n of hl.values())Jd(n,t);for(const n of aR.values())Jd(n,t);return!0}function _h(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const lR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Ko("app","Firebase",lR);/**
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
 */class cR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const wi=iR;function c_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Eu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw qr.create("bad-app-name",{appName:String(s)});if(n||(n=r_()),!n)throw qr.create("no-options");const i=hl.get(s);if(i){if(bs(n,i.options)&&bs(r,i.config))return i;throw qr.create("duplicate-app",{appName:s})}const o=new mA(s);for(const c of Tu.values())o.addComponent(c);const l=new cR(n,r,o);return hl.set(s,l),l}function u_(t=Eu){const e=hl.get(t);if(!e&&t===Eu&&r_())return c_();if(!e)throw qr.create("no-app",{appName:t});return e}function Hr(t,e,n){let r=oR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(o.join(" "));return}ci(new Cs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uR="firebase-heartbeat-database",hR=1,Do="firebase-heartbeat-store";let Bc=null;function h_(){return Bc||(Bc=CA(uR,hR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function fR(t){try{const n=(await h_()).transaction(Do),r=await n.objectStore(Do).get(f_(t));return await n.done,r}catch(e){if(e instanceof _r)fr.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Zd(t,e){try{const r=(await h_()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,f_(t)),await r.done}catch(n){if(n instanceof _r)fr.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function f_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dR=1024,pR=30;class mR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _R(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ep();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pR){const o=yR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ep(),{heartbeatsToSend:r,unsentEntries:s}=gR(this._heartbeatsCache.heartbeats),i=ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fr.warn(n),""}}}function ep(){return new Date().toISOString().substring(0,10)}function gR(t,e=dR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rA()?sA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tp(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}function yR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function vR(t){ci(new Cs("platform-logger",e=>new DA(e),"PRIVATE")),ci(new Cs("heartbeat",e=>new mR(e),"PRIVATE")),Hr(vu,Xd,t),Hr(vu,Xd,"esm2020"),Hr("fire-js","")}vR("");function d_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ER=d_,p_=new Ko("auth","Firebase",d_());/**
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
 */const fl=new mh("@firebase/auth");function TR(t,...e){fl.logLevel<=Me.WARN&&fl.warn(`Auth (${wi}): ${t}`,...e)}function ja(t,...e){fl.logLevel<=Me.ERROR&&fl.error(`Auth (${wi}): ${t}`,...e)}/**
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
 */function _n(t,...e){throw vh(t,...e)}function Rn(t,...e){return vh(t,...e)}function yh(t,e,n){const r={...ER(),[e]:n};return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return yh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_n(t,"argument-error"),yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p_.create(t,...e)}function ve(t,e,...n){if(!t)throw vh(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function dr(t,e){t||or(e)}/**
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
 */function wu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function IR(){return np()==="http:"||np()==="https:"}function np(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function AR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IR()||ZI()||"connection"in navigator)?navigator.onLine:!0}function RR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=YI()||eA()}get(){return AR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eh(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class m_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CR=new Yo(3e4,6e4);function ns(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function yr(t,e,n,r,s={}){return g_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Qo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return JI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(u.credentials="include"),m_.fetch()(await __(t,t.config.apiHost,n,l),u)})}async function g_(t,e,n){t._canInitEmulator=!1;const r={...SR,...e};try{const s=new kR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ca(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ca(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ca(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yh(t,f,u);_n(t,f)}}catch(s){if(s instanceof _r)throw s;_n(t,"network-request-failed",{message:String(s)})}}async function Xo(t,e,n,r,s={}){const i=await yr(t,e,n,r,s);return"mfaPendingCredential"in i&&_n(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function __(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Eh(t.config,s):`${t.config.apiScheme}://${s}`;return bR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function PR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),CR.get())})}}function Ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Rn(t,e,r);return s.customData._tokenResponse=n,s}function rp(t){return t!==void 0&&t.enterprise!==void 0}class DR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NR(t,e){return yr(t,"GET","/v2/recaptchaConfig",ns(t,e))}/**
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
 */async function OR(t,e){return yr(t,"POST","/v1/accounts:delete",e)}async function dl(t,e){return yr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VR(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Th(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:yo(jc(s.auth_time)),issuedAtTime:yo(jc(s.iat)),expirationTime:yo(jc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jc(t){return Number(t)*1e3}function Th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const s=t_(n);return s?JSON.parse(s):(ja("Failed to decode base64 JWT payload"),null)}catch(s){return ja("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sp(t){const e=Th(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _r&&LR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yo(this.lastLoginAt),this.creationTime=yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ui(t,dl(e,{idToken:n}));ve(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?y_(s.providerUserInfo):[],o=FR(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Iu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function xR(t){const e=vt(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function y_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function UR(t,e){const n=await g_(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await __(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(c.credentials="include"),m_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $R(t,e){return yr(t,"POST","/v2/accounts:revokeToken",ns(t,e))}/**
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
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await UR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ti;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
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
 */function Dr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new MR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Iu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VR(this,e)}reload(){return xR(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await ui(this,OR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:g,providerData:D,stsTokenManager:R}=n;ve(d&&R,e,"internal-error");const b=ti.fromJSON(this.name,R);ve(typeof d=="string",e,"internal-error"),Dr(r,e.name),Dr(s,e.name),ve(typeof m=="boolean",e,"internal-error"),ve(typeof g=="boolean",e,"internal-error"),Dr(i,e.name),Dr(o,e.name),Dr(l,e.name),Dr(c,e.name),Dr(u,e.name),Dr(f,e.name);const L=new wn({uid:d,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:f});return D&&Array.isArray(D)&&(L.providerData=D.map($=>({...$}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new ti;s.updateFromServerResponse(n);const i=new wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ti;l.updateFromIdToken(r);const c=new wn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Iu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ip=new Map;function ar(t){dr(t instanceof Function,"Expected a class definition");let e=ip.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ip.set(t,e),e)}/**
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
 */class v_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v_.type="NONE";const op=v_;/**
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
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qa(this.userKey,s.apiKey,i),this.fullPersistenceKey=qa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dl(this.auth,{idToken:e}).catch(()=>{});return n?wn._fromGetAccountInfoResponse(this.auth,n,e):null}return wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ni(ar(op),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ar(op);const o=qa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await dl(e,{idToken:f}).catch(()=>{});if(!m)break;d=await wn._fromGetAccountInfoResponse(e,m,f)}else d=wn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ni(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ni(i,e,r))}}/**
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
 */function ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R_(e))return"Blackberry";if(S_(e))return"Webos";if(T_(e))return"Safari";if((e.includes("chrome/")||w_(e))&&!e.includes("edge/"))return"Chrome";if(A_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E_(t=zt()){return/firefox\//i.test(t)}function T_(t=zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w_(t=zt()){return/crios\//i.test(t)}function I_(t=zt()){return/iemobile/i.test(t)}function A_(t=zt()){return/android/i.test(t)}function R_(t=zt()){return/blackberry/i.test(t)}function S_(t=zt()){return/webos/i.test(t)}function wh(t=zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BR(t=zt()){var e;return wh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function jR(){return tA()&&document.documentMode===10}function b_(t=zt()){return wh(t)||A_(t)||S_(t)||R_(t)||/windows phone/i.test(t)||I_(t)}/**
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
 */function C_(t,e=[]){let n;switch(t){case"Browser":n=ap(zt());break;case"Worker":n=`${ap(zt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${r}`}/**
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
 */class qR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HR(t,e={}){return yr(t,"GET","/v2/passwordPolicy",ns(t,e))}/**
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
 */const zR=6;class WR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new qR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dl(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(lr(this));const n=e?vt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HR(this),n=new WR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $R(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&TR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rs(t){return vt(t)}class lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=cA(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KR(t){zl=t}function P_(t){return zl.loadJS(t)}function QR(){return zl.recaptchaEnterpriseScript}function YR(){return zl.gapiScript}function XR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JR{constructor(){this.enterprise=new ZR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eS="recaptcha-enterprise",k_="NO_RECAPTCHA";class tS{constructor(e){this.type=eS,this.auth=rs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{NR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new DR(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;rp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(k_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&rp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=QR();c.length!==0&&(c+=l),P_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function cp(t,e,n,r=!1,s=!1){const i=new tS(t);let o;if(s)o=k_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Au(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cp(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function nS(t,e){const n=_h(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bs(i,e??{}))return s;_n(s,"already-initialized")}return n.initialize({options:e})}function rS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sS(t,e,n){const r=rs(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=D_(e),{host:o,port:l}=iS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(bs(u,r.config.emulator)&&bs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ti(o)?(i_(`${i}//${o}${c}`),o_("Auth",!0)):oS()}function D_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iS(t){const e=D_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:up(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:up(o)}}}function up(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}async function aS(t,e){return yr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lS(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",ns(t,e))}/**
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
 */async function cS(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}async function uS(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}/**
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
 */class No extends Ih{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Au(e,n,"signInWithPassword",lS);case"emailLink":return cS(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Au(e,r,"signUpPassword",aS);case"emailLink":return uS(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ri(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",ns(t,e))}/**
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
 */const hS="http://localhost";class Ps extends Ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:hS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
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
 */function fS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dS(t){const e=to(no(t)).link,n=e?to(no(e)).deep_link_id:null,r=to(no(t)).deep_link_id;return(r?to(no(r)).link:null)||r||n||e||t}class Ah{constructor(e){const n=to(no(e)),r=n.apiKey??null,s=n.oobCode??null,i=fS(n.mode??null);ve(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=dS(e);try{return new Ah(n)}catch{return null}}}/**
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
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ah.parseLink(n);return ve(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jo extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mr extends Jo{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ps._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class xr extends Jo{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */class Fr extends Jo{constructor(){super("twitter.com")}static credential(e,n){return Ps._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
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
 */async function pS(t,e){return Xo(t,"POST","/v1/accounts:signUp",ns(t,e))}/**
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
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wn._fromIdTokenResponse(e,r,s),o=hp(r);return new ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hp(r);return new ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ml extends _r{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ml(e,n,r,s)}}function N_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,i,e,r):i})}async function mS(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",r)}/**
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
 */async function gS(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(lr(r));const s="reauthenticate";try{const i=await ui(t,N_(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=Th(i.idToken);ve(o,r,"internal-error");const{sub:l}=o;return ve(t.uid===l,r,"user-mismatch"),ks._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),i}}/**
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
 */async function O_(t,e,n=!1){if(cn(t.app))return Promise.reject(lr(t));const r="signIn",s=await N_(t,r,e),i=await ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _S(t,e){return O_(rs(t),e)}/**
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
 */async function V_(t){const e=rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yS(t,e,n){if(cn(t.app))return Promise.reject(lr(t));const r=rs(t),o=await Au(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&V_(t),c}),l=await ks._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function vS(t,e,n){return cn(t.app)?Promise.reject(lr(t)):_S(vt(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}/**
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
 */async function ES(t,e){return yr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function TS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=vt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ui(r,ES(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wS(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function IS(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function AS(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function RS(t){return vt(t).signOut()}const gl="__sak";/**
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
 */class L_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SS=1e3,bS=10;class M_ extends L_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}M_.type="LOCAL";const CS=M_;/**
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
 */class x_ extends L_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x_.type="SESSION";const F_=x_;/**
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
 */function PS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await PS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
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
 */function Sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Sh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function DS(t){jn().location.href=t}/**
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
 */function U_(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function NS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function VS(){return U_()?self:null}/**
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
 */const $_="firebaseLocalStorageDb",LS=1,_l="firebaseLocalStorage",B_="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gl(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function MS(){const t=indexedDB.deleteDatabase($_);return new Zo(t).toPromise()}function Ru(){const t=indexedDB.open($_,LS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_l,{keyPath:B_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await MS(),e(await Ru()))})})}async function fp(t,e,n){const r=Gl(t,!0).put({[B_]:e,value:n});return new Zo(r).toPromise()}async function xS(t,e){const n=Gl(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function dp(t,e){const n=Gl(t,!0).delete(e);return new Zo(n).toPromise()}const FS=800,US=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>US)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(VS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await NS(),!this.activeServiceWorker)return;this.sender=new kS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ru();return await fp(e,gl,"1"),await dp(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gl(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const $S=j_;new Yo(3e4,6e4);/**
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
 */function q_(t,e){return e?ar(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bh extends Ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BS(t){return O_(t.auth,new bh(t),t.bypassAuthState)}function jS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),gS(n,new bh(t),t.bypassAuthState)}async function qS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),mS(n,new bh(t),t.bypassAuthState)}/**
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
 */class H_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BS;case"linkViaPopup":case"linkViaRedirect":return qS;case"reauthViaPopup":case"reauthViaRedirect":return jS;default:_n(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const HS=new Yo(2e3,1e4);async function zS(t,e,n){if(cn(t.app))return Promise.reject(Rn(t,"operation-not-supported-in-this-environment"));const r=rs(t);wR(t,e,Rh);const s=q_(r,n);return new ws(r,"signInViaPopup",e,s).executeNotNull()}class ws extends H_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HS.get())};e()}}ws.currentPopupAction=null;/**
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
 */const WS="pendingRedirect",Ha=new Map;class GS extends H_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ha.get(this.auth._key());if(!e){try{const r=await KS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ha.set(this.auth._key(),e)}return this.bypassAuthState||Ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KS(t,e){const n=XS(e),r=YS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function QS(t,e){Ha.set(t._key(),e)}function YS(t){return ar(t._redirectPersistence)}function XS(t){return qa(WS,t.config.apiKey,t.name)}async function JS(t,e,n=!1){if(cn(t.app))return Promise.reject(lr(t));const r=rs(t),s=q_(r,e),o=await new GS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ZS=10*60*1e3;class eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!z_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZS&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(e))}saveEventToCache(e){this.cachedEventUids.add(pp(e)),this.lastProcessedEventTime=Date.now()}}function pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(t);default:return!1}}/**
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
 */async function nb(t,e={}){return yr(t,"GET","/v1/projects",e)}/**
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
 */const rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sb=/^https?/;async function ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nb(t);for(const n of e)try{if(ob(n))return}catch{}_n(t,"unauthorized-domain")}function ob(t){const e=wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sb.test(n))return!1;if(rb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ab=new Yo(3e4,6e4);function mp(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lb(t){return new Promise((e,n)=>{var s,i,o;function r(){mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mp(),n(Rn(t,"network-request-failed"))},timeout:ab.get()})}if((i=(s=jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=jn().gapi)!=null&&o.load)r();else{const l=XR("iframefcb");return jn()[l]=()=>{gapi.load?r():n(Rn(t,"network-request-failed"))},P_(`${YR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw za=null,e})}let za=null;function cb(t){return za=za||lb(t),za}/**
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
 */const ub=new Yo(5e3,15e3),hb="__/auth/iframe",fb="emulator/auth/iframe",db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mb(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,fb):`https://${t.config.authDomain}/${hb}`,r={apiKey:e.apiKey,appName:t.name,v:wi},s=pb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qo(r).slice(1)}`}async function gb(t){const e=await cb(t),n=jn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:db,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=jn().setTimeout(()=>{i(o)},ub.get());function c(){jn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const _b={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yb=500,vb=600,Eb="_blank",Tb="http://localhost";class gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wb(t,e,n,r=yb,s=vb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={..._b,width:r.toString(),height:s.toString(),top:i,left:o},u=zt().toLowerCase();n&&(l=w_(u)?Eb:n),E_(u)&&(e=e||Tb,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[g,D])=>`${m}${g}=${D},`,"");if(BR(u)&&l!=="_self")return Ib(e||"",l),new gp(null);const d=window.open(e||"",l,f);ve(d,t,"popup-blocked");try{d.focus()}catch{}return new gp(d)}function Ib(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ab="__/auth/handler",Rb="emulator/auth/handler",Sb=encodeURIComponent("fac");async function _p(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wi,eventId:s};if(e instanceof Rh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Jo){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Sb}=${encodeURIComponent(c)}`:"";return`${bb(t)}?${Qo(l).slice(1)}${u}`}function bb({config:t}){return t.emulator?Eh(t,Rb):`https://${t.authDomain}/${Ab}`}/**
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
 */const qc="webStorageSupport";class Cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=JS,this._overrideRedirectResult=QS}async _openPopup(e,n,r,s){var o;dr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _p(e,n,r,wu(),s);return wb(e,i,Sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _p(e,n,r,wu(),s);return DS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gb(e),r=new eb(e);return n.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[qc];i!==void 0&&n(!!i),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b_()||T_()||wh()}}const Pb=Cb;var yp="@firebase/auth",vp="1.11.1";/**
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
 */class kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Db(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nb(t){ci(new Cs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C_(t)},u=new GR(r,s,i,c);return rS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ci(new Cs("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(r=>new kb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(yp,vp,Db(t)),Hr(yp,vp,"esm2020")}/**
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
 */const Ob=5*60,Vb=s_("authIdTokenMaxAge")||Ob;let Ep=null;const Lb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vb)return;const s=n==null?void 0:n.token;Ep!==s&&(Ep=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mb(t=u_()){const e=_h(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nS(t,{popupRedirectResolver:Pb,persistence:[$S,CS,F_]}),r=s_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lb(i.toString());IS(n,o,()=>o(n.currentUser)),wS(n,l=>o(l))}}const s=n_("auth");return s&&sS(n,`http://${s}`),n}function xb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}KR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nb("Browser");var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,W_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,E){function y(){}y.prototype=E.prototype,C.F=E.prototype,C.prototype=new y,C.prototype.constructor=C,C.D=function(S,I,A){for(var v=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)v[Re-2]=arguments[Re];return E.prototype[I].apply(S,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,E,y){y||(y=0);const S=Array(16);if(typeof E=="string")for(var I=0;I<16;++I)S[I]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(I=0;I<16;++I)S[I]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=C.g[0],y=C.g[1],I=C.g[2];let A=C.g[3],v;v=E+(A^y&(I^A))+S[0]+3614090360&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(I^E&(y^I))+S[1]+3905402710&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(y^A&(E^y))+S[2]+606105819&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(E^I&(A^E))+S[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=E+(A^y&(I^A))+S[4]+4118548399&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(I^E&(y^I))+S[5]+1200080426&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(y^A&(E^y))+S[6]+2821735955&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(E^I&(A^E))+S[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=E+(A^y&(I^A))+S[8]+1770035416&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(I^E&(y^I))+S[9]+2336552879&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(y^A&(E^y))+S[10]+4294925233&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(E^I&(A^E))+S[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=E+(A^y&(I^A))+S[12]+1804603682&4294967295,E=y+(v<<7&4294967295|v>>>25),v=A+(I^E&(y^I))+S[13]+4254626195&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(y^A&(E^y))+S[14]+2792965006&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(E^I&(A^E))+S[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=E+(I^A&(y^I))+S[1]+4129170786&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(E^y))+S[6]+3225465664&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^y&(A^E))+S[11]+643717713&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(I^A))+S[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=E+(I^A&(y^I))+S[5]+3593408605&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(E^y))+S[10]+38016083&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^y&(A^E))+S[15]+3634488961&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(I^A))+S[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=E+(I^A&(y^I))+S[9]+568446438&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(E^y))+S[14]+3275163606&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^y&(A^E))+S[3]+4107603335&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(I^A))+S[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=E+(I^A&(y^I))+S[13]+2850285829&4294967295,E=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(E^y))+S[2]+4243563512&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^y&(A^E))+S[7]+1735328473&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^E&(I^A))+S[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=E+(y^I^A)+S[5]+4294588738&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^I)+S[8]+2272392833&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^y)+S[11]+1839030562&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^E)+S[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=E+(y^I^A)+S[1]+2763975236&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^I)+S[4]+1272893353&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^y)+S[7]+4139469664&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^E)+S[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=E+(y^I^A)+S[13]+681279174&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^I)+S[0]+3936430074&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^y)+S[3]+3572445317&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^E)+S[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=E+(y^I^A)+S[9]+3654602809&4294967295,E=y+(v<<4&4294967295|v>>>28),v=A+(E^y^I)+S[12]+3873151461&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^y)+S[15]+530742520&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^E)+S[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=E+(I^(y|~A))+S[0]+4096336452&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~I))+S[7]+1126891415&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~y))+S[14]+2878612391&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~E))+S[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=E+(I^(y|~A))+S[12]+1700485571&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~I))+S[3]+2399980690&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~y))+S[10]+4293915773&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~E))+S[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=E+(I^(y|~A))+S[8]+1873313359&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~I))+S[15]+4264355552&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~y))+S[6]+2734768916&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~E))+S[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=E+(I^(y|~A))+S[4]+4149444226&4294967295,E=y+(v<<6&4294967295|v>>>26),v=A+(y^(E|~I))+S[11]+3174756917&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~y))+S[2]+718787259&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~E))+S[9]+3951481745&4294967295,C.g[0]=C.g[0]+E&4294967295,C.g[1]=C.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+A&4294967295}r.prototype.v=function(C,E){E===void 0&&(E=C.length);const y=E-this.blockSize,S=this.C;let I=this.h,A=0;for(;A<E;){if(I==0)for(;A<=y;)s(this,C,A),A+=this.blockSize;if(typeof C=="string"){for(;A<E;)if(S[I++]=C.charCodeAt(A++),I==this.blockSize){s(this,S),I=0;break}}else for(;A<E;)if(S[I++]=C[A++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=E},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var E=1;E<C.length-8;++E)C[E]=0;E=this.o*8;for(var y=C.length-8;y<C.length;++y)C[y]=E&255,E/=256;for(this.v(C),C=Array(16),E=0,y=0;y<4;++y)for(let S=0;S<32;S+=8)C[E++]=this.g[y]>>>S&255;return C};function i(C,E){var y=l;return Object.prototype.hasOwnProperty.call(y,C)?y[C]:y[C]=E(C)}function o(C,E){this.h=E;const y=[];let S=!0;for(let I=C.length-1;I>=0;I--){const A=C[I]|0;S&&A==E||(y[I]=A,S=!1)}this.g=y}var l={};function c(C){return-128<=C&&C<128?i(C,function(E){return new o([E|0],E<0?-1:0)}):new o([C|0],C<0?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return d;if(C<0)return b(u(-C));const E=[];let y=1;for(let S=0;C>=y;S++)E[S]=C/y|0,y*=4294967296;return new o(E,0)}function f(C,E){if(C.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C.charAt(0)=="-")return b(f(C.substring(1),E));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(E,8));let S=d;for(let A=0;A<C.length;A+=8){var I=Math.min(8,C.length-A);const v=parseInt(C.substring(A,A+I),E);I<8?(I=u(Math.pow(E,I)),S=S.j(I).add(u(v))):(S=S.j(y),S=S.add(u(v)))}return S}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();let C=0,E=1;for(let y=0;y<this.g.length;y++){const S=this.i(y);C+=(S>=0?S:4294967296+S)*E,E*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(D(this))return"0";if(R(this))return"-"+b(this).toString(C);const E=u(Math.pow(C,6));var y=this;let S="";for(;;){const I=H(y,E).g;y=L(y,I.j(E));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(C);if(y=I,D(y))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function D(C){if(C.h!=0)return!1;for(let E=0;E<C.g.length;E++)if(C.g[E]!=0)return!1;return!0}function R(C){return C.h==-1}t.l=function(C){return C=L(this,C),R(C)?-1:D(C)?0:1};function b(C){const E=C.g.length,y=[];for(let S=0;S<E;S++)y[S]=~C.g[S];return new o(y,~C.h).add(m)}t.abs=function(){return R(this)?b(this):this},t.add=function(C){const E=Math.max(this.g.length,C.g.length),y=[];let S=0;for(let I=0;I<=E;I++){let A=S+(this.i(I)&65535)+(C.i(I)&65535),v=(A>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);S=v>>>16,A&=65535,v&=65535,y[I]=v<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function L(C,E){return C.add(b(E))}t.j=function(C){if(D(this)||D(C))return d;if(R(this))return R(C)?b(this).j(b(C)):b(b(this).j(C));if(R(C))return b(this.j(b(C)));if(this.l(g)<0&&C.l(g)<0)return u(this.m()*C.m());const E=this.g.length+C.g.length,y=[];for(var S=0;S<2*E;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(let I=0;I<C.g.length;I++){const A=this.i(S)>>>16,v=this.i(S)&65535,Re=C.i(I)>>>16,Ke=C.i(I)&65535;y[2*S+2*I]+=v*Ke,$(y,2*S+2*I),y[2*S+2*I+1]+=A*Ke,$(y,2*S+2*I+1),y[2*S+2*I+1]+=v*Re,$(y,2*S+2*I+1),y[2*S+2*I+2]+=A*Re,$(y,2*S+2*I+2)}for(C=0;C<E;C++)y[C]=y[2*C+1]<<16|y[2*C];for(C=E;C<2*E;C++)y[C]=0;return new o(y,0)};function $(C,E){for(;(C[E]&65535)!=C[E];)C[E+1]+=C[E]>>>16,C[E]&=65535,E++}function K(C,E){this.g=C,this.h=E}function H(C,E){if(D(E))throw Error("division by zero");if(D(C))return new K(d,d);if(R(C))return E=H(b(C),E),new K(b(E.g),b(E.h));if(R(E))return E=H(C,b(E)),new K(b(E.g),E.h);if(C.g.length>30){if(R(C)||R(E))throw Error("slowDivide_ only works with positive integers.");for(var y=m,S=E;S.l(C)<=0;)y=oe(y),S=oe(S);var I=pe(y,1),A=pe(S,1);for(S=pe(S,2),y=pe(y,2);!D(S);){var v=A.add(S);v.l(C)<=0&&(I=I.add(y),A=v),S=pe(S,1),y=pe(y,1)}return E=L(C,I.j(E)),new K(I,E)}for(I=d;C.l(E)>=0;){for(y=Math.max(1,Math.floor(C.m()/E.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=u(y),v=A.j(E);R(v)||v.l(C)>0;)y-=S,A=u(y),v=A.j(E);D(A)&&(A=m),I=I.add(A),C=L(C,v)}return new K(I,C)}t.B=function(C){return H(this,C).h},t.and=function(C){const E=Math.max(this.g.length,C.g.length),y=[];for(let S=0;S<E;S++)y[S]=this.i(S)&C.i(S);return new o(y,this.h&C.h)},t.or=function(C){const E=Math.max(this.g.length,C.g.length),y=[];for(let S=0;S<E;S++)y[S]=this.i(S)|C.i(S);return new o(y,this.h|C.h)},t.xor=function(C){const E=Math.max(this.g.length,C.g.length),y=[];for(let S=0;S<E;S++)y[S]=this.i(S)^C.i(S);return new o(y,this.h^C.h)};function oe(C){const E=C.g.length+1,y=[];for(let S=0;S<E;S++)y[S]=C.i(S)<<1|C.i(S-1)>>>31;return new o(y,C.h)}function pe(C,E){const y=E>>5;E%=32;const S=C.g.length-y,I=[];for(let A=0;A<S;A++)I[A]=E>0?C.i(A+y)>>>E|C.i(A+y+1)<<32-E:C.i(A+y);return new o(I,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,W_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,zr=o}).apply(typeof Tp<"u"?Tp:typeof self<"u"?self:typeof window<"u"?window:{});var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G_,ro,K_,Wa,Su,Q_,Y_,X_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pa=="object"&&Pa];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in p))break e;p=p[O]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function d(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,O,V){for(var ee=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)ee[Pe-2]=arguments[Pe];return h.prototype[O].apply(_,ee)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function g(a){const h=a.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function D(a,h){for(let _=1;_<arguments.length;_++){const O=arguments[_];var p=typeof O;if(p=p!="object"?p:O?Array.isArray(O)?"array":p:"null",p=="array"||p=="object"&&typeof O.length=="number"){p=a.length||0;const V=O.length||0;a.length=p+V;for(let ee=0;ee<V;ee++)a[p+ee]=O[ee]}else a.push(O)}}class R{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function L(){var a=C;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,p){const _=K.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var K=new R(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,pe=!1,C=new $,E=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(y)}};function y(){for(var a;a=L();){try{a.h.call(a.g)}catch(p){b(p)}var h=K;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}pe=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function Re(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}d(Re,I),Re.prototype.init=function(a,h){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),ce=0;function Y(a,h,p,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=O,this.key=++ce,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function Et(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function Ne(a){const h={};for(const p in a)h[p]=a[p];return h}const ot="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(a,h){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)a[p]=_[p];for(let V=0;V<ot.length;V++)p=ot[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function re(a){this.src=a,this.g={},this.h=0}re.prototype.add=function(a,h,p,_,O){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const ee=$e(a,h,_,O);return ee>-1?(h=a[ee],p||(h.fa=!1)):(h=new Y(h,this.src,V,!!_,O),h.fa=p,a.push(h)),h};function be(a,h){const p=h.type;if(p in a.g){var _=a.g[p],O=Array.prototype.indexOf.call(_,h,void 0),V;(V=O>=0)&&Array.prototype.splice.call(_,O,1),V&&(_e(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function $e(a,h,p,_){for(let O=0;O<a.length;++O){const V=a[O];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return O}return-1}var M="closure_lm_"+(Math.random()*1e6|0),J={};function X(a,h,p,_,O){if(Array.isArray(h)){for(let V=0;V<h.length;V++)X(a,h[V],p,_,O);return null}return p=j(p),a&&a[Ke]?a.J(h,p,l(_)?!!_.capture:!1,O):ue(a,h,p,!1,_,O)}function ue(a,h,p,_,O,V){if(!h)throw Error("Invalid event type");const ee=l(O)?!!O.capture:!!O;let Pe=B(a);if(Pe||(a[M]=Pe=new re(a)),p=Pe.add(h,p,_,ee,V),p.proxy)return p;if(_=Ue(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)A||(O=ee),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(N(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ue(){function a(p){return h.call(a.src,a.listener,p)}const h=x;return a}function T(a,h,p,_,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)T(a,h[V],p,_,O);else _=l(_)?!!_.capture:!!_,p=j(p),a&&a[Ke]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=$e(h,p,_,O),p>-1&&(_e(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=B(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$e(h,p,_,O)),(p=a>-1?h[a]:null)&&w(p))}function w(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ke])be(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(N(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=B(h))?(be(p,a),p.h==0&&(p.src=null,h[M]=null)):_e(a)}}}function N(a){return a in J?J[a]:J[a]="on"+a}function x(a,h){if(a.da)a=!0;else{h=new Re(h,this);const p=a.listener,_=a.ha||a.src;a.fa&&w(a),a=p.call(_,h)}return a}function B(a){return a=a[M],a instanceof re?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function j(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function W(){S.call(this),this.i=new re(this),this.M=this,this.G=null}d(W,S),W.prototype[Ke]=!0,W.prototype.removeEventListener=function(a,h,p,_){T(this,a,h,p,_)};function z(a,h){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var O=h;h=new I(_,a),ne(h,O)}O=!0;let V,ee;if(p)for(ee=p.length-1;ee>=0;ee--)V=h.g=p[ee],O=G(V,_,!0,h)&&O;if(V=h.g=a,O=G(V,_,!0,h)&&O,O=G(V,_,!1,h)&&O,p)for(ee=0;ee<p.length;ee++)V=h.g=p[ee],O=G(V,_,!1,h)&&O}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let _=0;_<p.length;_++)_e(p[_]);delete a.g[h],a.h--}}this.G=null},W.prototype.J=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},W.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function G(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let V=0;V<h.length;++V){const ee=h[V];if(ee&&!ee.da&&ee.capture==p){const Pe=ee.listener,wt=ee.ha||ee.src;ee.fa&&be(a.i,ee),O=Pe.call(wt,_)!==!1&&O}}return O&&!_.defaultPrevented}function he(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Z(a){a.g=he(()=>{a.g=null,a.i&&(a.i=!1,Z(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class fe extends S{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(a){S.call(this),this.h=a,this.g={}}d(me,S);var we=[];function Ce(a){Se(a.g,function(h,p){this.g.hasOwnProperty(p)&&w(h)},a),a.g={}}me.prototype.N=function(){me.Z.N.call(this),Ce(this)},me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ve=o.JSON.stringify,Rt=o.JSON.parse,Tt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kt(){}function Ft(){}var Ut={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vn(){I.call(this,"d")}d(vn,I);function Qe(){I.call(this,"c")}d(Qe,I);var nt={},Yn=null;function Er(){return Yn=Yn||new W}nt.Ia="serverreachability";function ha(a){I.call(this,nt.Ia,a)}d(ha,I);function Dn(a){const h=Er();z(h,new ha(h))}nt.STAT_EVENT="statevent";function os(a,h){I.call(this,nt.STAT_EVENT,a),this.stat=h}d(os,I);function Dt(a){const h=Er();z(h,new os(h,a))}nt.Ja="timingevent";function Tr(a,h){I.call(this,nt.Ja,a),this.size=h}d(Tr,I);function as(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ls(){this.g=!0}ls.prototype.ua=function(){this.g=!1};function ct(a,h,p,_,O,V){a.info(function(){if(a.g)if(V){var ee="",Pe=V.split("&");for(let Ye=0;Ye<Pe.length;Ye++){var wt=Pe[Ye].split("=");if(wt.length>1){const St=wt[0];wt=wt[1];const On=St.split("_");ee=On.length>=2&&On[1]=="type"?ee+(St+"="+wt+"&"):ee+(St+"=redacted&")}}}else ee=null;else ee=V;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+p+`
`+ee})}function wr(a,h,p,_,O,V,ee){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+p+`
`+V+" "+ee})}function Ir(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Pi(a,p)+(_?" "+_:"")})}function fa(a,h){a.info(function(){return"TIMEOUT: "+h})}ls.prototype.info=function(){};function Pi(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var O=_[0];if(O!="noop"&&O!="stop"&&O!="close")for(let ee=1;ee<_.length;ee++)_[ee]=""}}}}return Ve(V)}catch{return h}}var cs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ki={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},da;function Jt(){}d(Jt,kt),Jt.prototype.g=function(){return new XMLHttpRequest},da=new Jt;function sn(a){return encodeURIComponent(String(a))}function pa(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function En(a,h,p,_){this.j=a,this.i=h,this.l=p,this.S=_||1,this.V=new me(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fs}function Fs(){this.i=null,this.g="",this.h=!1}var Di={},on={};function Us(a,h,p){a.M=1,a.A=ga(Nn(h)),a.u=p,a.R=!0,Ni(a,null)}function Ni(a,h){a.F=Date.now(),de(a),a.B=Nn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),wf(p.i,"t",_),a.C=0,p=a.j.L,a.h=new Fs,a.g=$f(a.j,p?h:null,!a.u),a.P>0&&(a.O=new fe(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,_=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(we[0]=O.toString()),O=we);for(let V=0;V<O.length;V++){const ee=X(p,O[V],_||h.handleEvent,!1,h.h||h);if(!ee)break;h.g[ee.key]=ee}h=a.J?Ne(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Dn(),ct(a.i,a.v,a.B,a.l,a.S,a.u)}En.prototype.ba=function(a){a=a.target;const h=this.O;h&&Sr(a)==3?h.j():this.Y(a)},En.prototype.Y=function(a){try{if(a==this.g)e:{const Pe=Sr(this.g),wt=this.g.ya(),Ye=this.g.ca();if(!(Pe<3)&&(Pe!=3||this.g&&(this.h.h||this.g.la()||Pf(this.g)))){this.K||Pe!=4||wt==7||(wt==8||Ye<=0?Dn(3):Dn(2)),Q(this);var h=this.g.ca();this.X=h;var p=ma(this);if(this.o=h==200,wr(this.i,this.v,this.B,this.l,this.S,Pe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,O=this.g;if((_=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(_)){var V=_;break t}}V=null}if(a=V)Ir(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pt(this,a);else{this.o=!1,this.m=3,Dt(12),qe(this),le(this);break e}}if(this.R){a=!0;let St;for(;!this.K&&this.C<p.length;)if(St=mc(this,p),St==on){Pe==4&&(this.m=4,Dt(14),a=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Di){this.m=4,Dt(15),Ir(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Ir(this.i,this.l,St,null),pt(this,St);if(Oi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||p.length!=0||this.h.h||(this.m=1,Dt(16),a=!1),this.o=this.o&&a,!a)Ir(this.i,this.l,p,"[Invalid Chunked Response]"),qe(this),le(this);else if(p.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Tc(ee),ee.P=!0,Dt(11))}}else Ir(this.i,this.l,p,null),pt(this,p);Pe==4&&qe(this),this.o&&!this.K&&(Pe==4?Mf(this.j,this):(this.o=!1,de(this)))}else Zv(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Dt(12)):(this.m=0,Dt(13)),qe(this),le(this)}}}catch{}finally{}};function ma(a){if(!Oi(a))return a.g.la();const h=Pf(a.g);if(h==="")return"";let p="";const _=h.length,O=Sr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return qe(a),le(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<_;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(O&&V==_-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Oi(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function mc(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?on:(p=Number(h.substring(p,_)),isNaN(p)?Di:(_+=1,_+p>h.length?on:(h=h.slice(_,_+p),a.C=_+p,h)))}En.prototype.cancel=function(){this.K=!0,qe(this)};function de(a){a.T=Date.now()+a.H,P(a,a.H)}function P(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=as(u(a.aa,a),h)}function Q(a){a.D&&(o.clearTimeout(a.D),a.D=null)}En.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(fa(this.i,this.B),this.M!=2&&(Dn(),Dt(17)),qe(this),this.m=2,le(this)):P(this,this.T-a)};function le(a){a.j.I==0||a.K||Mf(a.j,a)}function qe(a){Q(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ce(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function pt(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||us(p.h,a))){if(!a.L&&us(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ta(p),va(p);else break e;Ec(p),Dt(18)}}else p.xa=O[1],0<p.xa-p.K&&O[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=as(u(p.Va,p),6e3));Xn(p.h)<=1&&p.ta&&(p.ta=void 0)}else fs(p,11)}else if((a.L||p.g==a)&&Ta(p),!v(h))for(O=p.Ba.g.parse(h),h=0;h<O.length;h++){let Ye=O[h];const St=Ye[0];if(!(St<=p.K))if(p.K=St,Ye=Ye[1],p.I==2)if(Ye[0]=="c"){p.M=Ye[1],p.ba=Ye[2];const On=Ye[3];On!=null&&(p.ka=On,p.j.info("VER="+p.ka));const ds=Ye[4];ds!=null&&(p.za=ds,p.j.info("SVER="+p.za));const br=Ye[5];br!=null&&typeof br=="number"&&br>0&&(_=1.5*br,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Cr=a.g;if(Cr){const Ia=Cr.g?Cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var V=_.h;V.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ut(V,V.h),V.h=null))}if(_.G){const wc=Cr.g?Cr.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(_.wa=wc,rt(_.J,_.G,wc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var ee=a;if(_.na=Uf(_,_.L?_.ba:null,_.W),ee.L){Vi(_.h,ee);var Pe=ee,wt=_.O;wt&&(Pe.H=wt),Pe.D&&(Q(Pe),de(Pe)),_.g=ee}else Vf(_);p.i.length>0&&Ea(p)}else Ye[0]!="stop"&&Ye[0]!="close"||fs(p,7);else p.I==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?fs(p,7):vc(p):Ye[0]!="noop"&&p.l&&p.l.qa(Ye),p.A=0)}}Dn(4)}catch{}}var at=class{constructor(a,h){this.g=a,this.map=h}};function Nt(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fn(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xn(a){return a.h?1:a.g?a.g.size:0}function us(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ut(a,h){a.g?a.g.add(h):a.h=h}function Vi(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Nt.prototype.cancel=function(){if(this.i=Li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Li(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return g(a.i)}var _f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bv(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let O,V=null;_>=0?(O=a[p].substring(0,_),V=a[p].substring(_+1)):O=a[p],h(O,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Ar(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ar?(this.l=a.l,Mi(this,a.j),this.o=a.o,this.g=a.g,xi(this,a.u),this.h=a.h,gc(this,If(a.i)),this.m=a.m):a&&(h=String(a).match(_f))?(this.l=!1,Mi(this,h[1]||"",!0),this.o=Fi(h[2]||""),this.g=Fi(h[3]||"",!0),xi(this,h[4]),this.h=Fi(h[5]||"",!0),gc(this,h[6]||"",!0),this.m=Fi(h[7]||"")):(this.l=!1,this.i=new $i(null,this.l))}Ar.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ui(h,yf,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ui(h,yf,!0),"@"),a.push(sn(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ui(p,p.charAt(0)=="/"?Hv:qv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ui(p,Wv)),a.join("")},Ar.prototype.resolve=function(a){const h=Nn(this);let p=!!a.j;p?Mi(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var _=a.h;if(p)xi(h,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var O=h.h.lastIndexOf("/");O!=-1&&(_=h.h.slice(0,O+1)+_)}if(O=_,O==".."||O==".")_="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){_=O.lastIndexOf("/",0)==0,O=O.split("/");const V=[];for(let ee=0;ee<O.length;){const Pe=O[ee++];Pe=="."?_&&ee==O.length&&V.push(""):Pe==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),_&&ee==O.length&&V.push("")):(V.push(Pe),_=!0)}_=V.join("/")}else _=O}return p?h.h=_:p=a.i.toString()!=="",p?gc(h,If(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Nn(a){return new Ar(a)}function Mi(a,h,p){a.j=p?Fi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function xi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function gc(a,h,p){h instanceof $i?(a.i=h,Gv(a.i,a.l)):(p||(h=Ui(h,zv)),a.i=new $i(h,a.l))}function rt(a,h,p){a.i.set(h,p)}function ga(a){return rt(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ui(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,jv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yf=/[#\/\?@]/g,qv=/[#\?:]/g,Hv=/[#\?]/g,zv=/[#\?@]/g,Wv=/#/g;function $i(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hs(a){a.g||(a.g=new Map,a.h=0,a.i&&Bv(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=$i.prototype,t.add=function(a,h){hs(this),this.i=null,a=$s(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function vf(a,h){hs(a),h=$s(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ef(a,h){return hs(a),h=$s(a,h),a.g.has(h)}t.forEach=function(a,h){hs(this),this.g.forEach(function(p,_){p.forEach(function(O){a.call(h,O,_,this)},this)},this)};function Tf(a,h){hs(a);let p=[];if(typeof h=="string")Ef(a,h)&&(p=p.concat(a.g.get($s(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return hs(this),this.i=null,a=$s(this,a),Ef(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Tf(this,a),a.length>0?String(a[0]):h):h};function wf(a,h,p){vf(a,h),p.length>0&&(a.i=null,a.g.set($s(a,h),g(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const O=sn(p);p=Tf(this,p);for(let V=0;V<p.length;V++){let ee=O;p[V]!==""&&(ee+="="+sn(p[V])),a.push(ee)}}return this.i=a.join("&")};function If(a){const h=new $i;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function $s(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Gv(a,h){h&&!a.j&&(hs(a),a.i=null,a.g.forEach(function(p,_){const O=_.toLowerCase();_!=O&&(vf(this,_),wf(this,O,p))},a)),a.j=h}function Kv(a,h){const p=new ls;if(o.Image){const _=new Image;_.onload=f(Rr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Rr,p,"TestLoadImage: error",!1,h,_),_.onabort=f(Rr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Rr,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Qv(a,h){const p=new ls,_=new AbortController,O=setTimeout(()=>{_.abort(),Rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(O),V.ok?Rr(p,"TestPingServer: ok",!0,h):Rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Rr(p,"TestPingServer: error",!1,h)})}function Rr(a,h,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function Yv(){this.g=new Tt}function _c(a){this.i=a.Sb||null,this.h=a.ab||!1}d(_c,kt),_c.prototype.g=function(){return new _a(this.i,this.h)};function _a(a,h){W.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(_a,W),t=_a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Af(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Af(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Bi(this):ji(this),this.readyState==3&&Af(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Bi(this))},t.Na=function(a){this.g&&(this.response=a,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ji(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rf(a){let h="";return Se(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function yc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Rf(p),typeof a=="string"?p!=null&&sn(p):rt(a,h,p))}function lt(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(lt,W);var Xv=/^https?$/i,Jv=["POST","PUT"];t=lt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():da.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Sf(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Jv,h,void 0)>=0)||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,ee]of p)this.g.setRequestHeader(V,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Sf(this,V)}};function Sf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,bf(a),ya(a)}function bf(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,z(this,"complete"),z(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),lt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cf(this):this.Xa())},t.Xa=function(){Cf(this)};function Cf(a){if(a.h&&typeof i<"u"){if(a.v&&Sr(a)==4)setTimeout(a.Ca.bind(a),0);else if(z(a,"readystatechange"),Sr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=V===0){let ee=String(a.D).match(_f)[1]||null;!ee&&o.self&&o.self.location&&(ee=o.self.location.protocol.slice(0,-1)),_=!Xv.test(ee?ee.toLowerCase():"")}p=_}if(p)z(a,"complete"),z(a,"success");else{a.o=6;try{var O=Sr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",bf(a)}}finally{ya(a)}}}}function ya(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||z(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Sr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Rt(h)}};function Pf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zv(a){const h={};a=(a.g&&Sr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var p=pa(a[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[O]||[];h[O]=V,V.push(p)}Et(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function kf(a){this.za=0,this.i=[],this.j=new ls,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qi("baseRetryDelayMs",5e3,a),this.Za=qi("retryDelaySeedMs",1e4,a),this.Ta=qi("forwardChannelMaxRetries",2,a),this.va=qi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Nt(a&&a.concurrentRequestLimit),this.Ba=new Yv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=kf.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,_){Dt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=Uf(this,null,this.W),Ea(this)};function vc(a){if(Df(a),a.I==3){var h=a.V++,p=Nn(a.J);if(rt(p,"SID",a.M),rt(p,"RID",h),rt(p,"TYPE","terminate"),Hi(a,p),h=new En(a,a.j,h),h.M=2,h.A=ga(Nn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=$f(h.j,null),h.g.ea(h.A)),h.F=Date.now(),de(h)}Ff(a)}function va(a){a.g&&(Tc(a),a.g.cancel(),a.g=null)}function Df(a){va(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ta(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ea(a){if(!fn(a.h)&&!a.m){a.m=!0;var h=a.Ea;oe||E(),pe||(oe(),pe=!0),C.add(h,a),a.D=0}}function eE(a,h){return Xn(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=as(u(a.Ea,a,h),xf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new En(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Ne(V),ne(V,this.U)):V=this.U),this.u!==null||this.R||(O.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Of(this,O,h),p=Nn(this.J),rt(p,"RID",a),rt(p,"CVER",22),this.G&&rt(p,"X-HTTP-Session-Id",this.G),Hi(this,p),V&&(this.R?h="headers="+sn(Rf(V))+"&"+h:this.u&&yc(p,this.u,V)),ut(this.h,O),this.Ra&&rt(p,"TYPE","init"),this.S?(rt(p,"$req",h),rt(p,"SID","null"),O.U=!0,Us(O,p,null)):Us(O,p,h),this.I=2}}else this.I==3&&(a?Nf(this,a):this.i.length==0||fn(this.h)||Nf(this))};function Nf(a,h){var p;h?p=h.l:p=a.V++;const _=Nn(a.J);rt(_,"SID",a.M),rt(_,"RID",p),rt(_,"AID",a.K),Hi(a,_),a.u&&a.o&&yc(_,a.u,a.o),p=new En(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Of(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ut(a.h,p),Us(p,_,h)}function Hi(a,h){a.H&&Se(a.H,function(p,_){rt(h,_,p)}),a.l&&Se({},function(p,_){rt(h,_,p)})}function Of(a,h,p){p=Math.min(a.i.length,p);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let Pe=-1;for(;;){const wt=["count="+p];Pe==-1?p>0?(Pe=O[0].g,wt.push("ofs="+Pe)):Pe=0:wt.push("ofs="+Pe);let Ye=!0;for(let St=0;St<p;St++){var V=O[St].g;const On=O[St].map;if(V-=Pe,V<0)Pe=Math.max(0,O[St].g-100),Ye=!1;else try{V="req"+V+"_"||"";try{var ee=On instanceof Map?On:Object.entries(On);for(const[ds,br]of ee){let Cr=br;l(br)&&(Cr=Ve(br)),wt.push(V+ds+"="+encodeURIComponent(Cr))}}catch(ds){throw wt.push(V+"type="+encodeURIComponent("_badmap")),ds}}catch{_&&_(On)}}if(Ye){ee=wt.join("&");break e}}ee=void 0}return a=a.i.splice(0,p),h.G=a,ee}function Vf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;oe||E(),pe||(oe(),pe=!0),C.add(h,a),a.A=0}}function Ec(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=as(u(a.Da,a),xf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Lf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=as(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Dt(10),va(this),Lf(this))};function Tc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Lf(a){a.g=new En(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Nn(a.na);rt(h,"RID","rpc"),rt(h,"SID",a.M),rt(h,"AID",a.K),rt(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&rt(h,"TO",a.ia),rt(h,"TYPE","xmlhttp"),Hi(a,h),a.u&&a.o&&yc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ga(Nn(h)),p.u=null,p.R=!0,Ni(p,a)}t.Va=function(){this.C!=null&&(this.C=null,va(this),Ec(this),Dt(19))};function Ta(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Mf(a,h){var p=null;if(a.g==h){Ta(a),Tc(a),a.g=null;var _=2}else if(us(a.h,h))p=h.G,Vi(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;_=Er(),z(_,new Tr(_,p)),Ea(a)}else Vf(a);else if(O=h.m,O==3||O==0&&h.X>0||!(_==1&&eE(a,h)||_==2&&Ec(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),O){case 1:fs(a,5);break;case 4:fs(a,10);break;case 3:fs(a,6);break;default:fs(a,2)}}}function xf(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function fs(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),_=a.Ua;const O=!_;_=new Ar(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Mi(_,"https"),ga(_),O?Kv(_.toString(),p):Qv(_.toString(),p)}else Dt(2);a.I=0,a.l&&a.l.pa(h),Ff(a),Df(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Ff(a){if(a.I=0,a.ja=[],a.l){const h=Li(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ja,h),D(a.ja,a.i),a.h.i.length=0,g(a.i),a.i.length=0),a.l.oa()}}function Uf(a,h,p){var _=p instanceof Ar?Nn(p):new Ar(p);if(_.g!="")h&&(_.g=h+"."+_.g),xi(_,_.u);else{var O=o.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const V=new Ar(null);_&&Mi(V,_),h&&(V.g=h),O&&xi(V,O),p&&(V.h=p),_=V}return p=a.G,h=a.wa,p&&h&&rt(_,p,h),rt(_,"VER",a.ka),Hi(a,_),_}function $f(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new lt(new _c({ab:p})):new lt(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bf(){}t=Bf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wa(){}wa.prototype.g=function(a,h){return new an(a,h)};function an(a,h){W.call(this),this.g=new kf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Bs(this)}d(an,W),an.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){vc(this.g)},an.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Ve(a),a=p);h.i.push(new at(h.Ya++,a)),h.I==3&&Ea(h)},an.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,an.Z.N.call(this)};function jf(a){vn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}d(jf,vn);function qf(){Qe.call(this),this.status=1}d(qf,Qe);function Bs(a){this.g=a}d(Bs,Bf),Bs.prototype.ra=function(){z(this.g,"a")},Bs.prototype.qa=function(a){z(this.g,new jf(a))},Bs.prototype.pa=function(a){z(this.g,new qf)},Bs.prototype.oa=function(){z(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,X_=function(){return new wa},Y_=function(){return Er()},Q_=nt,Su={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,Wa=cs,ki.COMPLETE="complete",K_=ki,Ft.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",W.prototype.listen=W.prototype.J,ro=Ft,lt.prototype.listenOnce=lt.prototype.K,lt.prototype.getLastError=lt.prototype.Ha,lt.prototype.getLastErrorCode=lt.prototype.ya,lt.prototype.getStatus=lt.prototype.ca,lt.prototype.getResponseJson=lt.prototype.La,lt.prototype.getResponseText=lt.prototype.la,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Fa,G_=lt}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});const wp="@firebase/firestore",Ip="4.9.2";/**
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
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let Ai="12.3.0";/**
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
 */const Ds=new mh("@firebase/firestore");function zs(){return Ds.logLevel}function ae(t,...e){if(Ds.logLevel<=Me.DEBUG){const n=e.map(Ch);Ds.debug(`Firestore (${Ai}): ${t}`,...n)}}function pr(t,...e){if(Ds.logLevel<=Me.ERROR){const n=e.map(Ch);Ds.error(`Firestore (${Ai}): ${t}`,...n)}}function hi(t,...e){if(Ds.logLevel<=Me.WARN){const n=e.map(Ch);Ds.warn(`Firestore (${Ai}): ${t}`,...n)}}function Ch(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,J_(t,r,n)}function J_(t,e,n){let r=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw pr(r),new Error(r)}function Ge(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||J_(e,s,r)}function Ae(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends _r{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class Ub{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $b{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string",31837,{l:r}),new Z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class Bb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Bb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ap{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0,3512);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ap(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ap(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Hb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ph{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Hb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function bu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Hc(s)===Hc(i)?xe(s,i):Hc(s)?1:-1}return xe(t.length,e.length)}const zb=55296,Wb=57343;function Hc(t){const e=t.charCodeAt(0);return e>=zb&&e<=Wb}function fi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Rp="__name__";class Fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return xe(e.length,n.length)}static compareSegments(e,n){const r=Fn.isNumericId(e),s=Fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Fn.extractNumericId(e).compare(Fn.extractNumericId(n)):bu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zr.fromString(e.substring(4,e.length-2))}}class Je extends Fn{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const Gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Fn{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return Gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rp}static keyField(){return new Mt([Rp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Je.fromString(e))}static fromName(e){return new ge(Je.fromString(e).popFirst(5))}static empty(){return new ge(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Je(e.slice()))}}/**
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
 */function ey(t,e,n){if(!n)throw new te(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Kb(t,e,n,r){if(e===!0&&r===!0)throw new te(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sp(t){if(!ge.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bp(t){if(ge.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ty(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ee(12329,{type:typeof t})}function Kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kl(t);throw new te(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Qb(t,e){if(e<=0)throw new te(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function yt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ea(t,e){if(!ty(t))throw new te(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new te(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cp=-62135596800,Pp=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Pp);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cp)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pp}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ea(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:yt("string",tt._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */const Oo=-1;function Yb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Qr(s,ge.empty(),e)}function Xb(t){return new Qr(t.readTime,t.key,Oo)}class Qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qr(Te.min(),ge.empty(),Oo)}static max(){return new Qr(Te.max(),ge.empty(),Oo)}}function Jb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Zb)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Si(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ql{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ql.ce=-1;/**
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
 */const kh=-1;function Yl(t){return t==null}function yl(t){return t===0&&1/t==-1/0}function nC(t){return typeof t=="number"&&Number.isInteger(t)&&!yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ny="";function rC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kp(e)),e=sC(t.get(n),e);return kp(e)}function sC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ny:n+="";break;default:n+=i}}return n}function kp(t){return t+ny+""}/**
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
 */function Dp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class it{constructor(e,n){this.comparator=e,this.root=n||Ot.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ka(this.root,e,this.comparator,!0)}}class ka{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ot.RED,this.left=s??Ot.EMPTY,this.right=i??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Np(this.data.getIterator())}getIteratorFrom(e){return new Np(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class Np{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new hn([])}unionWith(e){let n=new At(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sy("Invalid base64 string: "+i):i}}(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const iC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(Ge(!!t,39018),typeof t=="string"){let e=0;const n=iC.exec(t);if(Ge(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */const iy="server_timestamp",oy="__type__",ay="__previous_value__",ly="__local_write_time__";function Xl(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[oy])==null?void 0:r.stringValue)===iy}function Jl(t){const e=t.mapValue.fields[ay];return Xl(e)?Jl(e):e}function Vo(t){const e=Yr(t.mapValue.fields[ly].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class oC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const vl="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||vl}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===vl}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cy="__type__",aC="__max__",Da={mapValue:{}},uy="__vector__",El="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xl(t)?4:cC(t)?9007199254740991:lC(t)?10:11:Ee(28295,{value:t})}function Qn(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Yr(s.timestampValue),l=Yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xr(s.bytesValue).isEqual(Xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ht(s.doubleValue),l=ht(i.doubleValue);return o===l?yl(o)===yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Dp(o)!==Dp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Qn(o[c],l[c])))return!1;return!0}(t,e);default:return Ee(52216,{left:t})}}function Mo(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ht(i.integerValue||i.doubleValue),c=ht(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Op(t.timestampValue,e.timestampValue);case 4:return Op(Vo(t),Vo(e));case 5:return bu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Xr(i),c=Xr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=xe(l[u],c[u]);if(f!==0)return f}return xe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=xe(ht(i.latitude),ht(o.latitude));return l!==0?l:xe(ht(i.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,g,D,R;const l=i.fields||{},c=o.fields||{},u=(m=l[El])==null?void 0:m.arrayValue,f=(g=c[El])==null?void 0:g.arrayValue,d=xe(((D=u==null?void 0:u.values)==null?void 0:D.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return d!==0?d:Vp(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Da.mapValue&&o===Da.mapValue)return 0;if(i===Da.mapValue)return 1;if(o===Da.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=bu(c[d],f[d]);if(m!==0)return m;const g=di(l[c[d]],u[f[d]]);if(g!==0)return g}return xe(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Ee(23264,{he:n})}}function Op(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Yr(t),r=Yr(e),s=xe(n.seconds,r.seconds);return s!==0?s:xe(n.nanos,r.nanos)}function Vp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=di(n[s],r[s]);if(i)return i}return xe(n.length,r.length)}function pi(t){return Cu(t)}function Cu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ge.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cu(n.fields[o])}`;return s+"}"}(t.mapValue):Ee(61005,{value:t})}function Ga(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jl(t);return e?16+Ga(e):16;case 5:return 2*t.stringValue.length;case 6:return Xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ga(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ss(r.fields,(i,o)=>{s+=i.length+Ga(o)}),s}(t.mapValue);default:throw Ee(13486,{value:t})}}function Tl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pu(t){return!!t&&"integerValue"in t}function Dh(t){return!!t&&"arrayValue"in t}function Lp(t){return!!t&&"nullValue"in t}function Mp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function lC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[cy])==null?void 0:r.stringValue)===uy}function vo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return{...t}}function cC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aC}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Mt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=vo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ka(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new nn(vo(this.value))}}function hy(t){const e=[];return ss(t.fields,(n,r)=>{const s=new Mt([n]);if(Ka(r)){const i=hy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new hn(e)}/**
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
 */class qt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new qt(e,0,Te.min(),Te.min(),Te.min(),nn.empty(),0)}static newFoundDocument(e,n,r,s){return new qt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new qt(e,2,n,Te.min(),Te.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,Te.min(),Te.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mi{constructor(e,n){this.position=e,this.inclusive=n}}function xp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ge.comparator(ge.fromName(o.referenceValue),n.key):r=di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function uC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fy{}class _t extends fy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fC(e,n,r):n==="array-contains"?new mC(e,r):n==="in"?new gC(e,r):n==="not-in"?new _C(e,r):n==="array-contains-any"?new yC(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dC(e,r):new pC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(di(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends fy{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Pn(e,n)}matches(e){return dy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function dy(t){return t.op==="and"}function py(t){return hC(t)&&dy(t)}function hC(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function ku(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(py(t))return t.filters.map(e=>ku(e)).join(",");{const e=t.filters.map(n=>ku(n)).join(",");return`${t.op}(${e})`}}function my(t,e){return t instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.field.isEqual(s.field)&&Qn(r.value,s.value)}(t,e):t instanceof Pn?function(r,s){return s instanceof Pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&my(o,s.filters[l]),!0):!1}(t,e):void Ee(19439)}function gy(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(gy).join(" ,")+"}"}(t):"Filter"}class fC extends _t{constructor(e,n,r){super(e,n,r),this.key=ge.fromName(r.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class dC extends _t{constructor(e,n){super(e,"in",n),this.keys=_y("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pC extends _t{constructor(e,n){super(e,"not-in",n),this.keys=_y("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _y(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ge.fromName(r.referenceValue))}class mC extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dh(n)&&Mo(n.arrayValue,this.value)}}class gC extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class _C extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Mo(this.value.arrayValue,n)}}class yC extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
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
 */class vC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Up(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vC(t,e,n,r,s,i,o)}function Nh(t){const e=Ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ku(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.Te=n}return e.Te}function Oh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!my(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fp(t.startAt,e.startAt)&&Fp(t.endAt,e.endAt)}function Du(t){return ge.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function EC(t,e,n,r,s,i,o,l){return new Vs(t,e,n,r,s,i,o,l)}function Vh(t){return new Vs(t)}function $p(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lh(t){return t.collectionGroup!==null}function si(t){const e=Ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new At(Mt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new xo(i,r))}),n.has(Mt.keyField().canonicalString())||e.Ie.push(new xo(Mt.keyField(),r))}return e.Ie}function qn(t){const e=Ae(t);return e.Ee||(e.Ee=TC(e,si(t))),e.Ee}function TC(t,e){if(t.limitType==="F")return Up(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xo(s.field,i)});const n=t.endAt?new mi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mi(t.startAt.position,t.startAt.inclusive):null;return Up(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nu(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wl(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zl(t,e){return Oh(qn(t),qn(e))&&t.limitType===e.limitType}function yy(t){return`${Nh(qn(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gy(s)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(qn(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ge.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of si(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=xp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,si(r),s)||r.endAt&&!function(o,l,c){const u=xp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,si(r),s))}(t,e)}function wC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vy(t){return(e,n)=>{let r=!1;for(const s of si(t)){const i=IC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IC(t,e,n){const r=t.field.isKeyField()?ge.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?di(c,u):Ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ee(19790,{direction:t.dir})}}/**
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
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ry(this.inner)}size(){return this.innerSize}}/**
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
 */const AC=new it(ge.comparator);function mr(){return AC}const Ey=new it(ge.comparator);function so(...t){let e=Ey;for(const n of t)e=e.insert(n.key,n);return e}function Ty(t){let e=Ey;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Is(){return Eo()}function wy(){return Eo()}function Eo(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const RC=new it(ge.comparator),SC=new At(ge.comparator);function Fe(...t){let e=SC;for(const n of t)e=e.add(n);return e}const bC=new At(xe);function CC(){return bC}/**
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
 */function Mh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yl(e)?"-0":e}}function Iy(t){return{integerValue:""+t}}function Ay(t,e){return nC(e)?Iy(e):Mh(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function PC(t,e,n){return t instanceof Fo?function(s,i){const o={fields:{[oy]:{stringValue:iy},[ly]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xl(i)&&(i=Jl(i)),i&&(o.fields[ay]=i),{mapValue:o}}(n,e):t instanceof Uo?Sy(t,e):t instanceof $o?by(t,e):function(s,i){const o=Ry(s,i),l=Bp(o)+Bp(s.Ae);return Pu(o)&&Pu(s.Ae)?Iy(l):Mh(s.serializer,l)}(t,e)}function kC(t,e,n){return t instanceof Uo?Sy(t,e):t instanceof $o?by(t,e):n}function Ry(t,e){return t instanceof Bo?function(r){return Pu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fo extends tc{}class Uo extends tc{constructor(e){super(),this.elements=e}}function Sy(t,e){const n=Cy(e);for(const r of t.elements)n.some(s=>Qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends tc{constructor(e){super(),this.elements=e}}function by(t,e){let n=Cy(e);for(const r of t.elements)n=n.filter(s=>!Qn(s,r));return{arrayValue:{values:n}}}class Bo extends tc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Bp(t){return ht(t.integerValue||t.doubleValue)}function Cy(t){return Dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Py{constructor(e,n){this.field=e,this.transform=n}}function DC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Uo&&s instanceof Uo||r instanceof $o&&s instanceof $o?fi(r.elements,s.elements,Qn):r instanceof Bo&&s instanceof Bo?Qn(r.Ae,s.Ae):r instanceof Fo&&s instanceof Fo}(t.transform,e.transform)}class NC{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function ky(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ny(t.key,Sn.none()):new ta(t.key,t.data,Sn.none());{const n=t.data,r=nn.empty();let s=new At(Mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new hn(s.toArray()),Sn.none())}}function OC(t,e,n){t instanceof ta?function(s,i,o){const l=s.value.clone(),c=qp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,o){if(!Qa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dy(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,r){return t instanceof ta?function(i,o,l,c){if(!Qa(i.precondition,o))return l;const u=i.value.clone(),f=Hp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(i,o,l,c){if(!Qa(i.precondition,o))return l;const u=Hp(i.fieldTransforms,c,o),f=o.data;return f.setAll(Dy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return Qa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ry(r.transform,s||null);i!=null&&(n===null&&(n=nn.empty()),n.set(r.field,i))}return n||null}function jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fi(r,s,(i,o)=>DC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends nc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends nc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qp(t,e,n){const r=new Map;Ge(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,kC(o,l,n[s]))}return r}function Hp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,PC(i,o,e))}return r}class Ny extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LC extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=ky(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Fe())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,r)=>jp(n,r))&&fi(this.baseMutations,e.baseMutations,(n,r)=>jp(n,r))}}class xh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ge(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return RC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xh(e,n,r,s)}}/**
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
 */class xC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var mt,Be;function UC(t){switch(t){case F.OK:return Ee(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Ee(15467,{code:t})}}function Oy(t){if(t===void 0)return pr("GRPC error has no .code"),F.UNKNOWN;switch(t){case mt.OK:return F.OK;case mt.CANCELLED:return F.CANCELLED;case mt.UNKNOWN:return F.UNKNOWN;case mt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case mt.INTERNAL:return F.INTERNAL;case mt.UNAVAILABLE:return F.UNAVAILABLE;case mt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case mt.NOT_FOUND:return F.NOT_FOUND;case mt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case mt.ABORTED:return F.ABORTED;case mt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case mt.DATA_LOSS:return F.DATA_LOSS;default:return Ee(39323,{code:t})}}(Be=mt||(mt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $C(){return new TextEncoder}/**
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
 */const BC=new zr([4294967295,4294967295],0);function zp(t){const e=$C().encode(t),n=new W_;return n.update(e),new Uint8Array(n.digest())}function Wp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zr([n,r],0),new zr([s,i],0)]}class Fh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=zr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(zr.fromNumber(r)));return s.compare(BC)===1&&(s=new zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=zp(e),[r,s]=Wp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=zp(e),[r,s]=Wp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(Te.min(),s,new it(xe),mr(),Fe())}}class na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,Fe(),Fe(),Fe())}}/**
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
 */class Ya{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Vy{constructor(e,n){this.targetId=e,this.Ce=n}}class Ly{constructor(e,n,r=xt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gp{constructor(){this.ve=0,this.Fe=Kp(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Fe(),n=Fe(),r=Fe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Ee(38017,{changeType:i})}}),new na(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Kp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ge(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jC{constructor(e){this.Ge=e,this.ze=new Map,this.je=mr(),this.Je=Na(),this.He=Na(),this.Ye=new it(xe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Du(i))if(r===0){const o=new ge(i.path);this.et(n,o,qt.newNoDocument(o,Te.min()))}else Ge(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Xr(r).toUint8Array()}catch(c){if(c instanceof sy)return hi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fh(o,s,i)}catch(c){return hi(c instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Du(l.target)){const c=new ge(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,qt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Fe();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new rc(e,n,this.Ye,this.je,r);return this.je=mr(),this.Je=Na(),this.He=Na(),this.Ye=new it(xe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Gp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new At(xe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new At(xe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gp),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Na(){return new it(ge.comparator)}function Kp(){return new it(ge.comparator)}const qC={asc:"ASCENDING",desc:"DESCENDING"},HC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zC={and:"AND",or:"OR"};class WC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ou(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function My(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GC(t,e){return Il(t,e.toTimestamp())}function Hn(t){return Ge(!!t,49232),Te.fromTimestamp(function(n){const r=Yr(n);return new tt(r.seconds,r.nanos)}(t))}function Uh(t,e){return Vu(t,e).canonicalString()}function Vu(t,e){const n=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xy(t){const e=Je.fromString(t);return Ge(jy(e),10190,{key:e.toString()}),e}function Lu(t,e){return Uh(t.databaseId,e.path)}function zc(t,e){const n=xy(e);if(n.get(1)!==t.databaseId.projectId)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ge(Uy(n))}function Fy(t,e){return Uh(t.databaseId,e)}function KC(t){const e=xy(t);return e.length===4?Je.emptyPath():Uy(e)}function Mu(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uy(t){return Ge(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qp(t,e,n){return{name:Lu(t,e),fields:n.value.mapValue.fields}}function QC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ee(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ge(f===void 0||typeof f=="string",58123),xt.fromBase64String(f||"")):(Ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),xt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:Oy(u.code);return new te(f,u.message||"")}(o);n=new Ly(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zc(t,r.document.name),i=Hn(r.document.updateTime),o=r.document.createTime?Hn(r.document.createTime):Te.min(),l=new nn({mapValue:{fields:r.document.fields}}),c=qt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ya(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zc(t,r.document),i=r.readTime?Hn(r.readTime):Te.min(),o=qt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ya([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zc(t,r.document),i=r.removedTargetIds||[];n=new Ya([],i,s,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FC(s,i),l=r.targetId;n=new Vy(l,o)}}return n}function YC(t,e){let n;if(e instanceof ta)n={update:Qp(t,e.key,e.value)};else if(e instanceof Ny)n={delete:Lu(t,e.key)};else if(e instanceof is)n={update:Qp(t,e.key,e.data),updateMask:iP(e.fieldMask)};else{if(!(e instanceof LC))return Ee(16599,{Vt:e.type});n={verify:Lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:GC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ee(27497)}(t,e.precondition)),n}function XC(t,e){return t&&t.length>0?(Ge(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Hn(s.updateTime):Hn(i);return o.isEqual(Te.min())&&(o=Hn(i)),new NC(o,s.transformResults||[])}(n,e))):[]}function JC(t,e){return{documents:[Fy(t,e.path)]}}function ZC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fy(t,s);const i=function(u){if(u.length!==0)return By(Pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Gs(m.field),direction:nP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ou(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function eP(t){let e=KC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ge(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=$y(d);return m instanceof Pn&&py(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(D){return new xo(Ks(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Yl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new mi(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new mi(g,m)}(n.endAt)),EC(e,s,o,i,l,"F",c,u)}function tP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $y(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(n.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ks(n.unaryFilter.field);return _t.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return _t.create(Ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(r=>$y(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}}(n.compositeFilter.op))}(t):Ee(30097,{filter:t})}function nP(t){return qC[t]}function rP(t){return HC[t]}function sP(t){return zC[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return Mt.fromServerFormat(t.fieldPath)}function By(t){return t instanceof _t?function(n){if(n.op==="=="){if(Mp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(Lp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(Lp(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:rP(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const r=n.getFilters().map(s=>By(s));return r.length===1?r[0]:{compositeFilter:{op:sP(n.op),filters:r}}}(t):Ee(54877,{filter:t})}function iP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ur{constructor(e,n,r,s,i=Te.min(),o=Te.min(),l=xt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oP{constructor(e){this.yt=e}}function aP(t){const e=eP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wl(e,e.limit,"L"):e}/**
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
 */class lP{constructor(){this.Cn=new cP}addToCollectionParentIndex(e,n){return this.Cn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Qr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Qr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class cP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new At(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new At(Je.comparator)).toArray()}}/**
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
 */const Yp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qy=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(qy,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class gi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new gi(0)}static cr(){return new gi(-1)}}/**
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
 */const Xp="LruGarbageCollector",uP=1048576;function Jp([t,e],[n,r]){const s=xe(t,n);return s===0?xe(e,r):s}class hP{constructor(e){this.Ir=e,this.buffer=new At(Jp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Jp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(Xp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Si(n)?ae(Xp,"Ignoring IndexedDB error during garbage collection: ",n):await Ri(n)}await this.Vr(3e5)})}}class dP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return q.resolve(Ql.ce);const r=new hP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Yp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yp):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),zs()<=Me.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function pP(t,e){return new dP(t,e)}/**
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
 */class mP{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _P{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&To(r.mutation,s,hn.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Fe()){const s=Is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=so();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=mr();const o=Eo(),l=function(){return Eo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof is)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),To(f.mutation,u,f.mutation.getFieldMask(),tt.now())):o.set(u.key,hn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new gP(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Eo();let s=new it((o,l)=>o-l),i=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||hn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const d=(s.get(l.batchId)||Fe()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=wy();f.forEach(m=>{if(!i.has(m)){const g=ky(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Is());let l=Oo,c=i;return o.next(u=>q.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Fe())).next(f=>({batchId:l,changes:Ty(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(r=>{let s=so();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=so();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(d,m){return new Vs(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,qt.newInvalidDocument(f)))});let l=so();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&To(f.mutation,u,hn.empty(),tt.now()),ec(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class yP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return q.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Hn(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:aP(s.bundledQuery),readTime:Hn(s.readTime)}}(n)),q.resolve()}}/**
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
 */class vP{constructor(){this.overlays=new it(ge.comparator),this.qr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Is();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Is(),i=n.length+1,o=new ge(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new it((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Is(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Is(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return q.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xC(n,r));let i=this.qr.get(n);i===void 0&&(i=Fe(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class EP{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
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
 */class $h{constructor(){this.Qr=new At(bt.$r),this.Ur=new At(bt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new bt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new bt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ge(new Je([])),r=new bt(n,e),s=new bt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new Je([])),r=new bt(n,e),s=new bt(n,e+1);let i=Fe();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new bt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||xe(e.Yr,n.Yr)}static Kr(e,n){return xe(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
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
 */class TP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new At(bt.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new bt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?kh:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new bt(n,0),s=new bt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(xe);return n.forEach(s=>{const i=new bt(s,0),o=new bt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),q.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ge.isDocumentKey(i)||(i=i.child(""));const o=new bt(new ge(i),0);let l=new At(xe);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)},o),q.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ge(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return q.forEach(n.mutations,s=>{const i=new bt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new bt(n,0),s=this.Zr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wP{constructor(e){this.ri=e,this.docs=function(){return new it(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mr();const o=n.path,l=new ge(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jb(Xb(f),r)<=0||(s.has(f.key)||ec(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Ee(9500)}ii(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IP(this)}getSize(e){return q.resolve(this.size)}}class IP extends mP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class AP{constructor(e){this.persistence=e,this.si=new Ls(n=>Nh(n),Oh),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new $h,this.targetCount=0,this.ai=gi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),q.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Pr(n),q.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this._i.containsKey(n))}}/**
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
 */class Hy{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ql(0),this.li=!1,this.li=!0,this.hi=new EP,this.referenceDelegate=e(this),this.Pi=new AP(this),this.indexManager=new lP,this.remoteDocumentCache=function(s){return new wP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new oP(n),this.Ii=new yP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new TP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new RP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return q.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class RP extends eC{constructor(e){super(),this.currentSequenceNumber=e}}class Bh{constructor(e){this.persistence=e,this.Ri=new $h,this.Vi=null}static mi(e){return new Bh(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,r=>{const s=ge.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,Te.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return q.or([()=>q.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Al{constructor(e,n){this.persistence=e,this.pi=new Ls(r=>rC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pP(this,n)}static mi(e,n){return new Al(e,n)}Ei(){}di(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return q.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?q.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ga(e.data.value)),n}br(e,n,r){return q.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class jh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Fe(),s=Fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jh(e,n.fromCache,r,s)}}/**
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
 */class SP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return nA()?8:tC(zt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SP;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(zs()<=Me.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(zs()<=Me.DEBUG&&ae("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(zs()<=Me.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(n))):q.resolve())}ys(e,n){if($p(n))return q.resolve(null);let r=qn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wl(n,null,"F"),r=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Fe(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,wl(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return $p(n)||s.isEqual(Te.min())?q.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?q.resolve(null):(zs()<=Me.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.vs(e,o,n,Yb(s,Oo)).next(l=>l))})}Ds(e,n){let r=new At(vy(e));return n.forEach((s,i)=>{ec(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return zs()<=Me.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.ps.getDocumentsMatchingQuery(e,n,Qr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const qh="LocalStore",CP=3e8;class PP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new it(xe),this.xs=new Ls(i=>Nh(i),Oh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _P(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function kP(t,e,n,r){return new PP(t,e,n,r)}async function zy(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Fe();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function DP(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,m=d.keys();let g=q.resolve();return m.forEach(D=>{g=g.next(()=>f.getEntry(c,D)).next(R=>{const b=u.docVersions.get(D);Ge(b!==null,48541),R.version.compareTo(b)<0&&(d.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),f.addEntry(R)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Fe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Wy(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function NP(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(d,g),function(R,b,L){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=CP?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,g,f)&&l.push(n.Pi.updateTargetData(i,g))});let c=mr(),u=Fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(OP(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(Te.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function OP(t,e,n){let r=Fe(),s=Fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ae(qh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function VP(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=kh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LP(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function xu(t,e,n){const r=Ae(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Si(o))throw o;ae(qh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Zp(t,e,n){const r=Ae(t);let s=Te.min(),i=Fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=Ae(c),m=d.xs.get(f);return m!==void 0?q.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,f)}(r,o,qn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:Fe())).next(l=>(MP(r,wC(e),l),{documents:l,Qs:i})))}function MP(t,e,n){let r=t.Os.get(e)||Te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class em{constructor(){this.activeTargetIds=CC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xP{constructor(){this.Mo=new em,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new em,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FP{Oo(e){}shutdown(){}}/**
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
 */const tm="ConnectivityMonitor";class nm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(tm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(tm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oa=null;function Fu(){return Oa===null?Oa=function(){return 268435456+Math.round(2147483648*Math.random())}():Oa++,"0x"+Oa.toString(16)}/**
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
 */const Wc="RestConnection",UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $P{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===vl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Fu(),l=this.zo(e,n.toUriEncodedString());ae(Wc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=Ti(u);return this.Jo(e,l,c,r,f).then(d=>(ae(Wc,`Received RPC '${e}' ${o}: `,d),d),d=>{throw hi(Wc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=UP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class BP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const $t="WebChannelConnection";class jP extends $P{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Fu();return new Promise((l,c)=>{const u=new G_;u.setWithCredentials(!0),u.listenOnce(K_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wa.NO_ERROR:const d=u.getResponseJson();ae($t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Wa.TIMEOUT:ae($t,`RPC '${e}' ${o} timed out`),c(new te(F.DEADLINE_EXCEEDED,"Request time out"));break;case Wa.HTTP_ERROR:const m=u.getStatus();if(ae($t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const D=g==null?void 0:g.error;if(D&&D.status&&D.message){const R=function(L){const $=L.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf($)>=0?$:F.UNKNOWN}(D.status);c(new te(R,D.message))}else c(new te(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new te(F.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ae($t,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ae($t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Fu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=X_(),l=Y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ae($t,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);this.I_(d);let m=!1,g=!1;const D=new BP({Yo:b=>{g?ae($t,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(m||(ae($t,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ae($t,`RPC '${e}' stream ${s} sending:`,b),d.send(b))},Zo:()=>d.close()}),R=(b,L,$)=>{b.listen(L,K=>{try{$(K)}catch(H){setTimeout(()=>{throw H},0)}})};return R(d,ro.EventType.OPEN,()=>{g||(ae($t,`RPC '${e}' stream ${s} transport opened.`),D.o_())}),R(d,ro.EventType.CLOSE,()=>{g||(g=!0,ae($t,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(d))}),R(d,ro.EventType.ERROR,b=>{g||(g=!0,hi($t,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),D.a_(new te(F.UNAVAILABLE,"The operation could not be completed")))}),R(d,ro.EventType.MESSAGE,b=>{var L;if(!g){const $=b.data[0];Ge(!!$,16349);const K=$,H=(K==null?void 0:K.error)||((L=K[0])==null?void 0:L.error);if(H){ae($t,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let pe=function(y){const S=mt[y];if(S!==void 0)return Oy(S)}(oe),C=H.message;pe===void 0&&(pe=F.INTERNAL,C="Unknown error status: "+oe+" with message "+H.message),g=!0,D.a_(new te(pe,C)),d.close()}else ae($t,`RPC '${e}' stream ${s} received:`,$),D.u_($)}}),R(l,Q_.STAT_EVENT,b=>{b.stat===Su.PROXY?ae($t,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Su.NOPROXY&&ae($t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Gc(){return typeof document<"u"?document:null}/**
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
 */function sc(t){return new WC(t,!0)}/**
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
 */class Gy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const rm="PersistentStream";class Ky{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new te(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ae(rm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ae(rm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qP extends Ky{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=QC(this.serializer,e),r=function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Hn(o.readTime):Te.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Mu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Du(c)?{documents:JC(i,c)}:{query:ZC(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=My(i,o.resumeToken);const u=Ou(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=Il(i,o.snapshotVersion.toTimestamp());const u=Ou(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=tP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Mu(this.serializer),n.removeTarget=e,this.q_(n)}}class HP extends Ky{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=XC(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Mu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YC(this.serializer,r))};this.q_(n)}}/**
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
 */class zP{}class WP extends zP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Vu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(F.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Vu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class GP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(pr(n),this.aa=!1):ae("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ns="RemoteStore";class KP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(ae(Ns,"Restarting streams for network reachability change."),await async function(c){const u=Ae(c);u.Ea.add(4),await ra(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ic(u)}(this))})}),this.Ra=new GP(r,s)}}async function ic(t){if(Ms(t))for(const e of t.da)await e(!0)}async function ra(t){for(const e of t.da)await e(!1)}function Qy(t,e){const n=Ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Gh(n)?Wh(n):bi(n).O_()&&zh(n,e))}function Hh(t,e){const n=Ae(t),r=bi(n);n.Ia.delete(e),r.O_()&&Yy(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ms(n)&&n.Ra.set("Unknown"))}function zh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bi(t).Y_(e)}function Yy(t,e){t.Va.Ue(e),bi(t).Z_(e)}function Wh(t){t.Va=new jC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),bi(t).start(),t.Ra.ua()}function Gh(t){return Ms(t)&&!bi(t).x_()&&t.Ia.size>0}function Ms(t){return Ae(t).Ea.size===0}function Xy(t){t.Va=void 0}async function QP(t){t.Ra.set("Online")}async function YP(t){t.Ia.forEach((e,n)=>{zh(t,e)})}async function XP(t,e){Xy(t),Gh(t)?(t.Ra.ha(e),Wh(t)):t.Ra.set("Unknown")}async function JP(t,e,n){if(t.Ra.set("Online"),e instanceof Ly&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){ae(Ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rl(t,r)}else if(e instanceof Ya?t.Va.Ze(e):e instanceof Vy?t.Va.st(e):t.Va.tt(e),!n.isEqual(Te.min()))try{const r=await Wy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(xt.EMPTY_BYTE_STRING,f.snapshotVersion)),Yy(i,c);const d=new Ur(f.target,c,u,f.sequenceNumber);zh(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ae(Ns,"Failed to raise snapshot:",r),await Rl(t,r)}}async function Rl(t,e,n){if(!Si(e))throw e;t.Ea.add(1),await ra(t),t.Ra.set("Offline"),n||(n=()=>Wy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae(Ns,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ic(t)})}function Jy(t,e){return e().catch(n=>Rl(t,n,e))}async function oc(t){const e=Ae(t),n=Zr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:kh;for(;ZP(e);)try{const s=await VP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,e0(e,s)}catch(s){await Rl(e,s)}Zy(e)&&ev(e)}function ZP(t){return Ms(t)&&t.Ta.length<10}function e0(t,e){t.Ta.push(e);const n=Zr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Zy(t){return Ms(t)&&!Zr(t).x_()&&t.Ta.length>0}function ev(t){Zr(t).start()}async function t0(t){Zr(t).ra()}async function n0(t){const e=Zr(t);for(const n of t.Ta)e.ea(n.mutations)}async function r0(t,e,n){const r=t.Ta.shift(),s=xh.from(r,e,n);await Jy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oc(t)}async function s0(t,e){e&&Zr(t).X_&&await async function(r,s){if(function(o){return UC(o)&&o!==F.ABORTED}(s.code)){const i=r.Ta.shift();Zr(r).B_(),await Jy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oc(r)}}(t,e),Zy(t)&&ev(t)}async function sm(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),ae(Ns,"RemoteStore received new credentials");const r=Ms(n);n.Ea.add(3),await ra(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ic(n)}async function i0(t,e){const n=Ae(t);e?(n.Ea.delete(2),await ic(n)):e||(n.Ea.add(2),await ra(n),n.Ra.set("Unknown"))}function bi(t){return t.ma||(t.ma=function(n,r,s){const i=Ae(n);return i.sa(),new qP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:QP.bind(null,t),t_:YP.bind(null,t),r_:XP.bind(null,t),H_:JP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Gh(t)?Wh(t):t.Ra.set("Unknown")):(await t.ma.stop(),Xy(t))})),t.ma}function Zr(t){return t.fa||(t.fa=function(n,r,s){const i=Ae(n);return i.sa(),new HP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:t0.bind(null,t),r_:s0.bind(null,t),ta:n0.bind(null,t),na:r0.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await oc(t)):(await t.fa.stop(),t.Ta.length>0&&(ae(Ns,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Kh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Kh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qh(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Si(t))return new te(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ii{static emptySet(e){return new ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ge.comparator(n.key,r.key):(n,r)=>ge.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class im{constructor(){this.ga=new it(ge.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _i(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class o0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class a0{constructor(){this.queries=om(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=om(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new te(F.ABORTED,"Firestore shutting down"))}}function om(){return new Ls(t=>yy(t),Zl)}async function tv(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new o0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qh(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Yh(n)}async function nv(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function l0(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Yh(n)}function c0(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Yh(t){t.Ca.forEach(e=>{e.next()})}var Uu,am;(am=Uu||(Uu={})).Ma="default",am.Cache="cache";class rv{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Uu.Cache}}/**
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
 */class sv{constructor(e){this.key=e}}class iv{constructor(e){this.key=e}}class u0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Fe(),this.mutatedKeys=Fe(),this.eu=vy(e),this.tu=new ii(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new im,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),g=ec(this.query,d)?d:null,D=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;m&&g?m.data.isEqual(g.data)?D!==R&&(r.track({type:3,doc:g}),b=!0):this.su(m,g)||(r.track({type:2,doc:g}),b=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),b=!0):m&&!g&&(r.track({type:1,doc:m}),b=!0,(c||u)&&(l=!0)),b&&(g?(o=o.add(g),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,d)=>function(g,D){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:b})}};return R(g)-R(D)}(f.type,d.type)||this.eu(f.doc,d.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new _i(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new im,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new iv(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new sv(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return _i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xh="SyncEngine";class h0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class f0{constructor(e){this.key=e,this.hu=!1}}class d0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ls(l=>yy(l),Zl),this.Iu=new Map,this.Eu=new Set,this.du=new it(ge.comparator),this.Au=new Map,this.Ru=new $h,this.Vu={},this.mu=new Map,this.fu=gi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p0(t,e,n=!0){const r=hv(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ov(r,e,n,!0),s}async function m0(t,e){const n=hv(t);await ov(n,e,!0,!1)}async function ov(t,e,n,r){const s=await LP(t.localStore,qn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await g0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qy(t.remoteStore,s),l}async function g0(t,e,n,r,s){t.pu=(d,m,g)=>async function(R,b,L,$){let K=b.view.ru(L);K.Cs&&(K=await Zp(R.localStore,b.query,!1).then(({documents:C})=>b.view.ru(C,K)));const H=$&&$.targetChanges.get(b.targetId),oe=$&&$.targetMismatches.get(b.targetId)!=null,pe=b.view.applyChanges(K,R.isPrimaryClient,H,oe);return cm(R,b.targetId,pe.au),pe.snapshot}(t,d,m,g);const i=await Zp(t.localStore,e,!0),o=new u0(e,i.Qs),l=o.ru(i.documents),c=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);cm(t,n,u.au);const f=new h0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function _0(t,e,n){const r=Ae(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Zl(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hh(r.remoteStore,s.targetId),$u(r,s.targetId)}).catch(Ri)):($u(r,s.targetId),await xu(r.localStore,s.targetId,!0))}async function y0(t,e){const n=Ae(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hh(n.remoteStore,r.targetId))}async function v0(t,e,n){const r=S0(t);try{const s=await function(o,l){const c=Ae(o),u=tt.now(),f=l.reduce((g,D)=>g.add(D.key),Fe());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let D=mr(),R=Fe();return c.Ns.getEntries(g,f).next(b=>{D=b,D.forEach((L,$)=>{$.isValidDocument()||(R=R.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,D)).next(b=>{d=b;const L=[];for(const $ of l){const K=VC($,d.get($.key).overlayedDocument);K!=null&&L.push(new is($.key,K,hy(K.value.mapValue),Sn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,L,l)}).next(b=>{m=b;const L=b.applyToLocalDocumentSet(d,R);return c.documentOverlayCache.saveOverlays(g,b.batchId,L)})}).then(()=>({batchId:m.batchId,changes:Ty(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new it(xe)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await sa(r,s.changes),await oc(r.remoteStore)}catch(s){const i=Qh(s,"Failed to persist write");n.reject(i)}}async function av(t,e){const n=Ae(t);try{const r=await NP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ge(o.hu,14607):s.removedDocuments.size>0&&(Ge(o.hu,42227),o.hu=!1))}),await sa(n,r,e)}catch(r){await Ri(r)}}function lm(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Ae(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.Sa)m.va(l)&&(u=!0)}),u&&Yh(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E0(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new it(ge.comparator);o=o.insert(i,qt.newNoDocument(i,Te.min()));const l=Fe().add(i),c=new rc(Te.min(),new Map,new it(xe),o,l);await av(r,c),r.du=r.du.remove(i),r.Au.delete(e),Jh(r)}else await xu(r.localStore,e,!1).then(()=>$u(r,e,n)).catch(Ri)}async function T0(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await DP(n.localStore,e);cv(n,r,null),lv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,s)}catch(s){await Ri(s)}}async function w0(t,e,n){const r=Ae(t);try{const s=await function(o,l){const c=Ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Ge(d!==null,37113),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);cv(r,e,n),lv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,s)}catch(s){await Ri(s)}}function lv(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function cv(t,e,n){const r=Ae(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function $u(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||uv(t,r)})}function uv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Hh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Jh(t))}function cm(t,e,n){for(const r of n)r instanceof sv?(t.Ru.addReference(r.key,e),I0(t,r)):r instanceof iv?(ae(Xh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||uv(t,r.key)):Ee(19791,{wu:r})}function I0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ae(Xh,"New document in limbo: "+n),t.Eu.add(r),Jh(t))}function Jh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ge(Je.fromString(e)),r=t.fu.next();t.Au.set(r,new f0(n)),t.du=t.du.insert(n,r),Qy(t.remoteStore,new Ur(qn(Vh(n.path)),r,"TargetPurposeLimboResolution",Ql.ce))}}async function sa(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=jh.As(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=Ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>q.forEach(u,m=>q.forEach(m.Es,g=>f.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>q.forEach(m.ds,g=>f.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Si(d))throw d;ae(qh,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=f.Ms.get(m),D=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(D);f.Ms=f.Ms.insert(m,R)}}}(r.localStore,i))}async function A0(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){ae(Xh,"User change. New user:",e.toKey());const r=await zy(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new te(F.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.Ls)}}function R0(t,e){const n=Ae(t),r=n.Au.get(e);if(r&&r.hu)return Fe().add(r.key);{let s=Fe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function hv(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=av.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E0.bind(null,e),e.Pu.H_=l0.bind(null,e.eventManager),e.Pu.yu=c0.bind(null,e.eventManager),e}function S0(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w0.bind(null,e),e}class Sl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return kP(this.persistence,new bP,e.initialUser,this.serializer)}Cu(e){return new Hy(Bh.mi,this.serializer)}Du(e){return new xP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sl.provider={build:()=>new Sl};class b0 extends Sl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ge(this.persistence.referenceDelegate instanceof Al,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Hy(r=>Al.mi(r,n),this.serializer)}}class Bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A0.bind(null,this.syncEngine),await i0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a0}()}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=function(i){return new jP(i)}(e.databaseInfo);return function(i,o,l,c){return new WP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new KP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>lm(this.syncEngine,n,0),function(){return nm.v()?new nm:new FP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const d=new d0(s,i,o,l,c,u);return f&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ae(s);ae(Ns,"RemoteStore shutting down."),i.Ea.add(5),await ra(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Bu.provider={build:()=>new Bu};/**
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
 */class fv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const es="FirestoreClient";class C0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Bt.UNAUTHENTICATED,this.clientId=Ph.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ae(es,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae(es,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),ae(es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function um(t,e){t.asyncQueue.verifyOperationInProgress();const n=await P0(t);ae(es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sm(e.remoteStore,s)),t._onlineComponents=e}async function P0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae(es,"Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new Sl)}}else ae(es,"Using default OfflineComponentProvider"),await Kc(t,new b0(void 0));return t._offlineComponents}async function dv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae(es,"Using user provided OnlineComponentProvider"),await um(t,t._uninitializedComponentsProvider._online)):(ae(es,"Using default OnlineComponentProvider"),await um(t,new Bu))),t._onlineComponents}function k0(t){return dv(t).then(e=>e.syncEngine)}async function pv(t){const e=await dv(t),n=e.eventManager;return n.onListen=p0.bind(null,e.syncEngine),n.onUnlisten=_0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=m0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=y0.bind(null,e.syncEngine),n}function D0(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new fv({next:m=>{f.Nu(),o.enqueueAndForget(()=>nv(i,d));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new te(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new te(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new rv(Vh(l.path),f,{includeMetadataChanges:!0,qa:!0});return tv(i,d)}(await pv(t),t.asyncQueue,e,n,r)),r.promise}function N0(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new fv({next:m=>{f.Nu(),o.enqueueAndForget(()=>nv(i,d)),m.fromCache&&c.source==="server"?u.reject(new te(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new rv(l,f,{includeMetadataChanges:!0,qa:!0});return tv(i,d)}(await pv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function mv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hm=new Map;/**
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
 */const gv="firestore.googleapis.com",fm=!0;class dm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gv,this.ssl=fm}else this.host=e.host,this.ssl=e.ssl??fm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uP)throw new te(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mv(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fb;switch(r.type){case"firstParty":return new jb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hm.get(n);r&&(ae("ComponentProvider","Removing Datastore"),hm.delete(n),r.terminate())}(this),Promise.resolve()}}function O0(t,e,n,r={}){var u;t=Kn(t,ac);const s=Ti(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(i_(`https://${l}`),o_("Firestore",!0)),i.host!==gv&&i.host!==l&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!bs(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Bt.MOCK_USER;else{f=GI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new te(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Bt(m)}t._authCredentials=new Ub(new Z_(f,d))}}/**
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
 */class vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ea(n,ft._jsonSchema))return new ft(e,r||null,new ge(Je.fromString(n.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:yt("string",ft._jsonSchemaVersion),referencePath:yt("string")};class Wr extends vr{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new ge(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function ia(t,e,...n){if(t=vt(t),ey("collection","path",e),t instanceof ac){const r=Je.fromString(e,...n);return bp(r),new Wr(t,null,r)}{if(!(t instanceof ft||t instanceof Wr))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return bp(r),new Wr(t.firestore,null,r)}}function xs(t,e,...n){if(t=vt(t),arguments.length===1&&(e=Ph.newId()),ey("doc","path",e),t instanceof ac){const r=Je.fromString(e,...n);return Sp(r),new ft(t,null,new ge(r))}{if(!(t instanceof ft||t instanceof Wr))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return Sp(r),new ft(t.firestore,t instanceof Wr?t.converter:null,new ge(r))}}/**
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
 */const pm="AsyncQueue";class mm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gy(this,"async_queue_retry"),this._c=()=>{const r=Gc();r&&ae(pm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new cr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Si(e))throw e;ae(pm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,pr("INTERNAL UNHANDLED ERROR: ",gm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Kh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Ee(47125,{Pc:gm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function gm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ci extends ac{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new mm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mm(e),this._firestoreClient=void 0,await e}}}function V0(t,e){const n=typeof t=="object"?t:u_(),r=typeof t=="string"?t:vl,s=_h(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zI("firestore");i&&O0(s,...i)}return s}function Zh(t){if(t._terminated)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||L0(t),t._firestoreClient}function L0(t){var r,s,i;const e=t._freezeSettings(),n=function(l,c,u,f){return new oC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new C0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(xt.fromBase64String(e))}catch(n){throw new te(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ea(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:yt("string",pn._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class lc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oa{constructor(e){this._methodName=e}}/**
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
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(ea(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:yt("string",zn._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class Wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ea(e,Wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wn(e.vectorValues);throw new te(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wn._jsonSchemaVersion="firestore/vectorValue/1.0",Wn._jsonSchema={type:yt("string",Wn._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const M0=/^__.*__$/;class x0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class _v{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:t})}}class ef{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ef({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(yv(this.Ac)&&M0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class F0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}Cc(e,n,r,s=!1){return new ef({Ac:e,methodName:n,Dc:r,path:Mt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new F0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vv(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);rf("Data must be an object, but it was:",o,r);const l=Tv(r,o);let c,u;if(i.merge)c=new hn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=ju(e,d,n);if(!o.contains(m))throw new te(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Iv(f,m)||f.push(m)}c=new hn(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new x0(new nn(l),c,u)}class cc extends oa{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}class tf extends oa{_toFieldTransform(e){return new Py(e.path,new Fo)}isEqual(e){return e instanceof tf}}class nf extends oa{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Bo(e.serializer,Ay(e.serializer,this.Fc));return new Py(e.path,n)}isEqual(e){return e instanceof nf&&this.Fc===e.Fc}}function U0(t,e,n,r){const s=t.Cc(1,e,n);rf("Data must be an object, but it was:",s,r);const i=[],o=nn.empty();ss(r,(c,u)=>{const f=sf(e,c,n);u=vt(u);const d=s.yc(f);if(u instanceof cc)i.push(f);else{const m=la(u,d);m!=null&&(i.push(f),o.set(f,m))}});const l=new hn(i);return new _v(o,l,s.fieldTransforms)}function $0(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[ju(e,r,n)],c=[s];if(i.length%2!=0)throw new te(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ju(e,i[m])),c.push(i[m+1]);const u=[],f=nn.empty();for(let m=l.length-1;m>=0;--m)if(!Iv(u,l[m])){const g=l[m];let D=c[m];D=vt(D);const R=o.yc(g);if(D instanceof cc)u.push(g);else{const b=la(D,R);b!=null&&(u.push(g),f.set(g,b))}}const d=new hn(u);return new _v(f,d,o.fieldTransforms)}function Ev(t,e,n,r=!1){return la(n,t.Cc(r?4:3,e))}function la(t,e){if(wv(t=vt(t)))return rf("Unsupported field value:",e,t),Tv(t,e);if(t instanceof oa)return function(r,s){if(!yv(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=la(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ay(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Il(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Il(s.serializer,i)}}if(r instanceof zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:My(s.serializer,r._byteString)};if(r instanceof ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wn)return function(o,l){return{mapValue:{fields:{[cy]:{stringValue:uy},[El]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Mh(l.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Kl(r)}`)}(t,e)}function Tv(t,e){const n={};return ry(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,s)=>{const i=la(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof zn||t instanceof pn||t instanceof ft||t instanceof oa||t instanceof Wn)}function rf(t,e,n){if(!wv(n)||!ty(n)){const r=Kl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function ju(t,e,n){if((e=vt(e))instanceof lc)return e._internalPath;if(typeof e=="string")return sf(t,e);throw bl("Field path arguments must be of type string or ",t,!1,void 0,n)}const B0=new RegExp("[~\\*/\\[\\]]");function sf(t,e,n){if(e.search(B0)>=0)throw bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lc(...e.split("."))._internalPath}catch{throw bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(F.INVALID_ARGUMENT,l+t+c)}function Iv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class of{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class j0 extends of{data(){return super.data()}}function uc(t,e){return typeof e=="string"?sf(t,e):e instanceof lc?e._internalPath:e._delegate._internalPath}/**
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
 */function q0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class af{}class hc extends af{}function yi(t,e,...n){let r=[];e instanceof af&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof lf).length,l=i.filter(c=>c instanceof fc).length;if(o>1||o>0&&l>0)throw new te(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fc extends hc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fc(e,n,r)}_apply(e){const n=this._parse(e);return Rv(e._query,n),new vr(e.firestore,e.converter,Nu(e._query,n))}_parse(e){const n=aa(e.firestore);return function(i,o,l,c,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new te(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ym(d,f);const D=[];for(const R of d)D.push(_m(c,i,R));m={arrayValue:{values:D}}}else m=_m(c,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ym(d,f),m=Ev(l,o,d,f==="in"||f==="not-in");return _t.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Cl(t,e,n){const r=e,s=uc("where",t);return fc._create(s,r,n)}class lf extends af{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Rv(o,c),o=Nu(o,c)}(e._query,n),new vr(e.firestore,e.converter,Nu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cf extends hc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new cf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xo(i,o)}(e._query,this._field,this._direction);return new vr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function vi(t,e="asc"){const n=e,r=uc("orderBy",t);return cf._create(r,n)}class uf extends hc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new uf(e,n,r)}_apply(e){return new vr(e.firestore,e.converter,wl(e._query,this._limit,this._limitType))}}function jo(t){return Qb("limit",t),uf._create("limit",t,"F")}class hf extends hc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new hf(e,n,r)}_apply(e){const n=H0(e,this.type,this._docOrFields,this._inclusive);return new vr(e.firestore,e.converter,function(s,i){return new Vs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function Av(...t){return hf._create("startAfter",t,!1)}function H0(t,e,n,r){if(n[0]=vt(n[0]),n[0]instanceof of)return function(i,o,l,c,u){if(!c)throw new te(F.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const d of si(i))if(d.field.isKeyField())f.push(Tl(o,c.key));else{const m=c.data.field(d.field);if(Xl(m))throw new te(F.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=d.field.canonicalString();throw new te(F.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}f.push(m)}return new mi(f,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=aa(t.firestore);return function(o,l,c,u,f,d){const m=o.explicitOrderBy;if(f.length>m.length)throw new te(F.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let D=0;D<f.length;D++){const R=f[D];if(m[D].field.isKeyField()){if(typeof R!="string")throw new te(F.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof R}`);if(!Lh(o)&&R.indexOf("/")!==-1)throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${R}' contains a slash.`);const b=o.path.child(Je.fromString(R));if(!ge.isDocumentKey(b))throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const L=new ge(b);g.push(Tl(l,L))}else{const b=Ev(c,u,R);g.push(b)}}return new mi(g,d)}(t._query,t.firestore._databaseId,s,e,n,r)}}function _m(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new te(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lh(e)&&n.indexOf("/")!==-1)throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Je.fromString(n));if(!ge.isDocumentKey(r))throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tl(t,new ge(r))}if(n instanceof ft)return Tl(t,n._key);throw new te(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kl(n)}.`)}function ym(t,e){if(!Array.isArray(t)||t.length===0)throw new te(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rv(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class z0{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[El].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ht(o.doubleValue));return new Wn(n)}convertGeoPoint(e){return new zn(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Yr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);Ge(jy(r),9688,{name:e});const s=new Lo(r.get(1),r.get(3)),i=new ge(r.popFirst(5));return s.isEqual(n)||pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Sv(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ss extends of{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ss._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ss._jsonSchema={type:yt("string",Ss._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class Xa extends Ss{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xa(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Xa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Xa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:W0(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ph.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function W0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:t})}}/**
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
 */function ff(t){t=Kn(t,ft);const e=Kn(t.firestore,Ci);return D0(Zh(e),t._key).then(n=>Q0(e,t,n))}oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:yt("string",oi._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class bv extends z0{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function dc(t){t=Kn(t,vr);const e=Kn(t.firestore,Ci),n=Zh(e),r=new bv(e);return q0(t._query),N0(n,t._query).then(s=>new oi(e,r,t,s))}function G0(t,e,n){t=Kn(t,ft);const r=Kn(t.firestore,Ci),s=Sv(t.converter,e);return df(r,[vv(aa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Sn.none())])}function qo(t,e,n,...r){t=Kn(t,ft);const s=Kn(t.firestore,Ci),i=aa(s);let o;return o=typeof(e=vt(e))=="string"||e instanceof lc?$0(i,"updateDoc",t._key,e,n,r):U0(i,"updateDoc",t._key,e),df(s,[o.toMutation(t._key,Sn.exists(!0))])}function K0(t,e){const n=Kn(t.firestore,Ci),r=xs(t),s=Sv(t.converter,e);return df(n,[vv(aa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Sn.exists(!1))]).then(()=>r)}function df(t,e){return function(r,s){const i=new cr;return r.asyncQueue.enqueueAndForget(async()=>v0(await k0(r),s,i)),i.promise}(Zh(t),e)}function Q0(t,e,n){const r=n.docs.get(e._key),s=new bv(t);return new Ss(t,s,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}function Y0(){return new tf("serverTimestamp")}function Cv(t){return new nf("increment",t)}(function(e,n=!0){(function(s){Ai=s})(wi),ci(new Cs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ci(new $b(r.getProvider("auth-internal")),new qb(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Hr(wp,Ip,e),Hr(wp,Ip,"esm2020")})();var X0="firebase",J0="12.6.0";/**
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
 */Hr(X0,J0,"app");const Z0={apiKey:"AIzaSyCd6xl_cD_xPEmjDRsv5Oef0Rjtxxpl3Js",authDomain:"kopilka-b00b0.firebaseapp.com",projectId:"kopilka-b00b0",storageBucket:"kopilka-b00b0.firebasestorage.app",messagingSenderId:"802634786752",appId:"1:802634786752:web:8670ef754677d8ebe00a25"},pf=c_(Z0),kn=V0(pf);let Qc=null,Va=null;const ca=()=>(Qc||(Qc=Mb(pf)),Qc),e1=()=>(Va||(Va=new ir,Va.setCustomParameters({prompt:"select_account"})),Va),mf=async()=>typeof navigator<"u"&&!navigator.onLine?(console.warn("Приложение работает в оффлайн режиме"),!1):!0,Pv=async(t,e,n,r="user",s,i,o)=>{const l=ca();try{console.log("Регистрация пользователя:",t,"Роль:",r);const c=await mf(),u=await yS(l,t,e);return u.user&&l.currentUser&&(await TS(l.currentUser,{displayName:n}),c?await kv(u.user.uid,{email:t,displayName:n,role:r,school:s,grade:i,subjects:o?o.split(",").map(f=>f.trim()):[],createdAt:new Date}):Dv(u.user.uid,{email:t,displayName:n,role:r,school:s,grade:i,subjects:o?o.split(",").map(f=>f.trim()):[],createdAt:new Date().toISOString()}),console.log("Профиль создан:",n,"Роль:",r)),{user:u.user,error:null}}catch(c){return console.error("Ошибка регистрации:",c),{user:null,error:c}}},kv=async(t,e)=>{try{await G0(xs(kn,"users",t),e),console.log("Пользователь сохранен в Firestore:",t),localStorage.removeItem(`pending_user_${t}`)}catch(n){throw console.error("Ошибка сохранения в Firestore:",n),Dv(t,e),n}},Dv=(t,e)=>{try{localStorage.setItem(`pending_user_${t}`,JSON.stringify(e)),localStorage.setItem("pending_sync","true")}catch(n){console.error("Ошибка локального сохранения:",n)}},Nv=async t=>{try{const e=localStorage.getItem(`user_${t}`);if(e)return JSON.parse(e);if(!await mf())return qu(t);const r=await ff(xs(kn,"users",t));if(r.exists()){const s=r.data();return localStorage.setItem(`user_${t}`,JSON.stringify(s)),s}return null}catch(e){return console.error("Ошибка получения данных пользователя:",e),qu(t)}},qu=t=>{try{const e=localStorage.getItem(`user_${t}`);return e?JSON.parse(e):null}catch{return null}},Ov=async(t,e)=>{const n=ca();try{return{user:(await vS(n,t,e)).user,error:null}}catch(r){return console.error("Ошибка входа:",r),{user:null,error:r}}},Vv=async()=>{const t=ca(),e=e1();try{const n=await zS(t,e);return n.user&&await mf()&&(await Nv(n.user.uid)||await kv(n.user.uid,{email:n.user.email,displayName:n.user.displayName,role:"user",photoURL:n.user.photoURL,createdAt:new Date})),{user:n.user,error:null}}catch(n){return console.error("Ошибка Google входа:",n),{user:null,error:n}}},t1=()=>{const t=ca();return localStorage.removeItem("pending_sync"),RS(t)},n1=t=>{const e=ca();return AS(e,async n=>{if(n){let r=null;try{r=await Nv(n.uid)}catch{console.warn("Используем кэшированные данные пользователя"),r=qu(n.uid)}const s={uid:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,emailVerified:n.emailVerified,role:(r==null?void 0:r.role)||"user"};t(s)}else t(null)})};let vm=null,Lv=De(null),Hu=De(!1);typeof window<"u"&&(vm||(vm=n1(t=>{if(console.log("Auth change detected:",!!t),Lv.value=t,Hu.value=!0,t){sessionStorage.setItem("auth_checked","true"),sessionStorage.setItem("user_id",t.uid);const e={uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:t.role};sessionStorage.setItem("user_profile",JSON.stringify(e))}else sessionStorage.setItem("auth_checked","true"),sessionStorage.removeItem("user_id"),sessionStorage.removeItem("user_profile")})));const pc=()=>{const t=De(null),e=De(!0),n=De(null),r=De(!1);if(t.value=Lv.value,r.value=Hu.value,typeof window<"u"){const g=sessionStorage.getItem("user_profile"),D=sessionStorage.getItem("auth_checked")==="true";if(g&&!t.value)try{t.value=JSON.parse(g),r.value=!0}catch(R){console.warn("Ошибка парсинга кэшированного профиля:",R)}(D&&r.value||Hu.value)&&(e.value=!1),setTimeout(()=>{e.value&&(console.warn("Auth loading timeout - falling back to cached state"),e.value=!1,r.value=!0)},3e3)}const s=gt(()=>!!t.value),i=()=>typeof window>"u"?!1:sessionStorage.getItem("auth_checked")==="true",o=()=>{if(typeof window>"u")return null;try{const g=sessionStorage.getItem("user_profile");return g?JSON.parse(g):null}catch{return null}},l=async(g,D)=>{e.value=!0,n.value=null;try{const{user:R,error:b}=await Ov(g,D);if(b)throw b;return t.value=o(),{success:!0,error:null}}catch(R){return n.value=d(R),{success:!1,error:n.value}}finally{e.value=!1}},c=async(g,D,R,b,L,$,K)=>{e.value=!0,n.value=null;try{const{user:H,error:oe}=await Pv(g,D,R,b,L,$,K);if(oe)throw oe;return t.value=o(),{success:!0,error:null}}catch(H){return n.value=d(H),{success:!1,error:n.value}}finally{e.value=!1}},u=async()=>{e.value=!0,n.value=null;try{const{user:g,error:D}=await Vv();if(D)throw D;return t.value=o(),{success:!0,error:null}}catch(g){return n.value=d(g),{success:!1,error:n.value}}finally{e.value=!1}},f=async()=>{e.value=!0;try{await t1(),t.value=null,r.value=!0,sessionStorage.setItem("auth_checked","true"),sessionStorage.removeItem("user_profile")}catch(g){n.value=d(g)}finally{e.value=!1}},d=g=>{switch((g==null?void 0:g.code)||""){case"auth/invalid-email":return"Неверный формат email";case"auth/user-disabled":return"Аккаунт заблокирован";case"auth/user-not-found":return"Пользователь не найден";case"auth/wrong-password":return"Неверный пароль";case"auth/email-already-in-use":return"Email уже используется";case"auth/weak-password":return"Пароль должен содержать минимум 6 символов";case"auth/network-request-failed":return"Ошибка сети. Проверьте подключение к интернету";case"auth/too-many-requests":return"Слишком много попыток. Попробуйте позже";case"auth/operation-not-allowed":return"Регистрация по email отключена";default:return(g==null?void 0:g.message)||"Произошла ошибка при авторизации"}};return{user:t,isAuthenticated:s,isLoading:e,hasCheckedAuth:r,isAuthChecked:i,error:n,login:l,register:c,googleLogin:u,signOut:f,getAuthErrorMessage:d,stopLoading:()=>{e.value=!1,r.value=!0},getCurrentUser:()=>t.value}},r1={class:"auth-modal"},s1={class:"modal-header"},i1={class:"auth-content"},o1={class:"auth-switch single-mode"},a1={class:"switch-track"},l1={class:"form-section"},c1={class:"form-row"},u1={class:"form-group full-width"},h1={class:"input-wrapper"},f1={class:"form-row"},d1={class:"form-group full-width"},p1={class:"input-wrapper"},m1=["placeholder","minlength"],g1={key:0,class:"password-hint"},_1={key:0,class:"registration-fields"},y1={class:"form-row"},v1={class:"form-group full-width"},E1={class:"input-wrapper"},T1={key:0,class:"form-section"},w1={class:"role-selection"},I1=["onClick"],A1={class:"role-header"},R1={class:"role-icon"},S1={key:0,class:"role-badge"},b1={class:"role-content"},C1={class:"role-title"},P1={class:"role-description"},k1={class:"role-features"},D1={class:"role-check"},N1={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},O1={key:1,class:"form-section"},V1={key:0,class:"additional-fields"},L1={class:"form-row"},M1={class:"form-group full-width"},x1={class:"input-wrapper"},F1={class:"form-row"},U1={class:"form-group full-width"},$1={class:"input-wrapper"},B1={key:1,class:"additional-fields"},j1={class:"form-row"},q1={class:"form-group full-width"},H1={class:"input-wrapper"},z1={class:"form-row"},W1={class:"form-group full-width"},G1={class:"select-wrapper"},K1=["value"],Q1={key:2,class:"additional-fields"},Y1=["disabled"],X1={key:0,class:"btn-spinner"},J1={key:1},Z1={key:0,class:"divider"},ek=["disabled"],tk={class:"auth-footer"},nk={key:0,class:"error-message"},rk={class:"error-content"},sk=Ei({__name:"AuthModal",emits:["close","loginSuccess"],setup(t,{emit:e}){const{isLoading:n,error:r}=pc(),s=De(!1),i=()=>{s.value=!s.value,r.value=null,s.value||(c.role="",c.displayName="",c.school="",c.grade="",c.subjects="")},o=[{value:"teacher",name:"Учитель",icon:"👨‍🏫",description:"Для преподавателей и педагогов",features:["Доступ ко всем методическим материалам","Участие в педагогическом форуме","Загрузка собственных материалов","Создание тем для обсуждения"]},{value:"student",name:"Ученик",icon:"🎓",description:"Для учащихся и студентов",features:["Просмотр методических материалов","Доступ к учебным ресурсам","Участие в обсуждениях","Личный кабинет"]},{value:"user",name:"Пользователь",icon:"👤",description:"Для всех интересующихся",features:["Базовый доступ к материалам","Просмотр открытых ресурсов","Участие в сообществе","Гибкие настройки профиля"]}],l=["1","2","3","4","5","6","7","8","9","10","11"],c=Os({email:"",password:"",displayName:"",role:"",school:"",grade:"",subjects:""}),u=e,f=R=>({teacher:"учительский",student:"ученический",user:"пользовательский"})[R]||"",d=async()=>{n.value=!0,r.value=null;try{if(s.value){if(!c.role){r.value="Пожалуйста, выберите роль",n.value=!1;return}const R=await Pv(c.email,c.password,c.displayName,c.role,c.school||void 0,c.grade||void 0,c.subjects||void 0);if(R.error)throw R.error;R.user&&(u("loginSuccess"),u("close"),D())}else{const R=await Ov(c.email,c.password);if(R.error)throw R.error;R.user&&(u("loginSuccess"),u("close"),D())}}catch(R){r.value=g(R)}finally{n.value=!1}},m=async()=>{n.value=!0,r.value=null;try{const R=await Vv();if(R.error)throw R.error;R.user&&(u("loginSuccess"),u("close"))}catch(R){r.value=g(R)}finally{n.value=!1}},g=R=>{switch((R==null?void 0:R.code)||""){case"auth/invalid-email":return"Неверный формат email";case"auth/user-disabled":return"Аккаунт заблокирован";case"auth/user-not-found":return"Пользователь не найден";case"auth/wrong-password":return"Неверный пароль";case"auth/email-already-in-use":return"Email уже используется";case"auth/weak-password":return"Пароль должен содержать минимум 6 символов";case"auth/network-request-failed":return"Ошибка сети. Проверьте подключение к интернету";case"auth/too-many-requests":return"Слишком много попыток. Попробуйте позже";case"auth/operation-not-allowed":return"Регистрация по email отключена";default:return(R==null?void 0:R.message)||"Произошла ошибка при авторизации"}},D=()=>{Object.assign(c,{email:"",password:"",displayName:"",role:"",school:"",grade:"",subjects:""})};return(R,b)=>(se(),ie("div",r1,[k("div",s1,[b[9]||(b[9]=k("div",{class:"header-content"},[k("div",{class:"logo-placeholder"},[k("span",{class:"logo-icon"},"📚")]),k("h2",null,"Добро пожаловать в Кабинет Методиста"),k("p",{class:"header-subtitle"},"Присоединяйтесь к сообществу педагогов")],-1)),k("button",{class:"close-btn",onClick:b[0]||(b[0]=L=>R.$emit("close"))},b[8]||(b[8]=[k("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},[k("path",{d:"M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),k("path",{d:"M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),k("div",i1,[k("div",o1,[k("button",{class:tn(["switch-btn",{active:!s.value}]),onClick:i},je(s.value?"Войти в существующий аккаунт":"Создать новый аккаунт"),3),k("div",a1,[k("div",{class:tn(["switch-slider",{toRegister:s.value}])},null,2)])]),k("form",{onSubmit:Br(d,["prevent"]),class:"auth-form"},[k("div",l1,[k("div",c1,[k("div",u1,[b[11]||(b[11]=k("label",null,"Email адрес",-1)),k("div",h1,[b[10]||(b[10]=k("span",{class:"input-icon"},"📧",-1)),xn(k("input",{type:"email","onUpdate:modelValue":b[1]||(b[1]=L=>c.email=L),placeholder:"your.email@example.com",required:"",class:"modern-input"},null,512),[[nr,c.email]])])])]),k("div",f1,[k("div",d1,[b[13]||(b[13]=k("label",null,"Пароль",-1)),k("div",p1,[b[12]||(b[12]=k("span",{class:"input-icon"},"🔒",-1)),xn(k("input",{type:"password","onUpdate:modelValue":b[2]||(b[2]=L=>c.password=L),placeholder:s.value?"Минимум 6 символов":"Введите ваш пароль",required:"",minlength:s.value?6:void 0,class:"modern-input"},null,8,m1),[[nr,c.password]])]),s.value?(se(),ie("div",g1," Используйте надежный пароль с буквами и цифрами ")):Le("",!0)])]),s.value?(se(),ie("div",_1,[k("div",y1,[k("div",v1,[b[15]||(b[15]=k("label",null,"Полное имя",-1)),k("div",E1,[b[14]||(b[14]=k("span",{class:"input-icon"},"👤",-1)),xn(k("input",{type:"text","onUpdate:modelValue":b[3]||(b[3]=L=>c.displayName=L),placeholder:"Иван Иванов",required:"",class:"modern-input"},null,512),[[nr,c.displayName]])])])]),s.value?(se(),ie("div",T1,[b[17]||(b[17]=k("h3",{class:"section-title"},"Выберите вашу роль",-1)),k("div",w1,[(se(),ie(Ct,null,Rs(o,L=>k("div",{key:L.value,class:tn(["role-card",{active:c.role===L.value,recommended:L.value==="teacher"}]),onClick:$=>c.role=L.value},[k("div",A1,[k("div",R1,je(L.icon),1),L.value==="teacher"?(se(),ie("div",S1,"Рекомендуется")):Le("",!0)]),k("div",b1,[k("h4",C1,je(L.name),1),k("p",P1,je(L.description),1),k("ul",k1,[(se(!0),ie(Ct,null,Rs(L.features,$=>(se(),ie("li",{key:$},"✓ "+je($),1))),128))])]),k("div",D1,[k("div",{class:tn(["check-circle",{checked:c.role===L.value}])},[c.role===L.value?(se(),ie("svg",N1,b[16]||(b[16]=[k("path",{d:"M20 6L9 17L4 12",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):Le("",!0)],2)])],10,I1)),64))])])):Le("",!0),s.value&&c.role?(se(),ie("div",O1,[b[30]||(b[30]=k("h3",{class:"section-title"},"Дополнительная информация",-1)),c.role==="teacher"?(se(),ie("div",V1,[k("div",L1,[k("div",M1,[b[19]||(b[19]=k("label",null,"Учебное заведение",-1)),k("div",x1,[b[18]||(b[18]=k("span",{class:"input-icon"},"🏫",-1)),xn(k("input",{type:"text","onUpdate:modelValue":b[4]||(b[4]=L=>c.school=L),placeholder:"Название школы или учреждения",class:"modern-input"},null,512),[[nr,c.school]])])])]),k("div",F1,[k("div",U1,[b[21]||(b[21]=k("label",null,"Преподаваемые предметы",-1)),k("div",$1,[b[20]||(b[20]=k("span",{class:"input-icon"},"📝",-1)),xn(k("input",{type:"text","onUpdate:modelValue":b[5]||(b[5]=L=>c.subjects=L),placeholder:"Математика, Русский язык, Физика...",class:"modern-input"},null,512),[[nr,c.subjects]])]),b[22]||(b[22]=k("div",{class:"field-hint"},"Перечислите предметы через запятую",-1))])])])):Le("",!0),c.role==="student"?(se(),ie("div",B1,[k("div",j1,[k("div",q1,[b[24]||(b[24]=k("label",null,"Учебное заведение",-1)),k("div",H1,[b[23]||(b[23]=k("span",{class:"input-icon"},"🏫",-1)),xn(k("input",{type:"text","onUpdate:modelValue":b[6]||(b[6]=L=>c.school=L),placeholder:"Название вашей школы",class:"modern-input"},null,512),[[nr,c.school]])])])]),k("div",z1,[k("div",W1,[b[28]||(b[28]=k("label",null,"Класс обучения",-1)),k("div",G1,[b[26]||(b[26]=k("span",{class:"input-icon"},"🎓",-1)),xn(k("select",{"onUpdate:modelValue":b[7]||(b[7]=L=>c.grade=L),class:"modern-select"},[b[25]||(b[25]=k("option",{value:""},"Выберите класс",-1)),(se(),ie(Ct,null,Rs(l,L=>k("option",{key:L,value:L},je(L)+" класс ",9,K1)),64))],512),[[Aw,c.grade]]),b[27]||(b[27]=k("span",{class:"select-arrow"},"▼",-1))])])])])):Le("",!0),c.role==="user"?(se(),ie("div",Q1,b[29]||(b[29]=[k("div",{class:"info-message"},[k("div",{class:"info-icon"},"💡"),k("div",{class:"info-content"},[k("p",null,"Как обычный пользователь вы получите базовый доступ к платформе. Вы всегда сможете изменить свою роль позже в настройках профиля.")])],-1)]))):Le("",!0)])):Le("",!0)])):Le("",!0)]),k("button",{type:"submit",class:tn(["submit-btn primary large",{disabled:s.value&&!c.role}]),disabled:ke(n)||s.value&&!c.role},[ke(n)?(se(),ie("span",X1)):(se(),ie("span",J1,je(s.value?c.role?`Создать ${f(c.role)} аккаунт`:"Выберите роль":"Войти в аккаунт"),1))],10,Y1),s.value?Le("",!0):(se(),ie("div",Z1,b[31]||(b[31]=[k("span",null,"или продолжите с",-1)]))),s.value?Le("",!0):(se(),ie("button",{key:1,type:"button",class:"social-btn google",onClick:m,disabled:ke(n)},b[32]||(b[32]=[$T('<span class="social-icon" data-v-e2fb5397><svg width="18" height="18" viewBox="0 0 24 24" data-v-e2fb5397><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" data-v-e2fb5397></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" data-v-e2fb5397></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" data-v-e2fb5397></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" data-v-e2fb5397></path></svg></span> Войти через Google ',2)]),8,ek)),k("div",tk,[k("p",null,[It(je(s.value?"Уже есть аккаунт?":"Нет аккаунта?")+" ",1),k("a",{href:"#",onClick:Br(i,["prevent"])},je(s.value?"Войдите здесь":"Зарегистрируйтесь здесь"),1)])])],32),ke(r)?(se(),ie("div",nk,[b[33]||(b[33]=k("div",{class:"error-icon"},"⚠️",-1)),k("div",rk,je(ke(r)),1)])):Le("",!0)])]))}}),ua=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},gf=ua(sk,[["__scopeId","data-v-e2fb5397"]]),ik={class:"wrapper"},ok={key:0,class:"loading-section"},ak={key:1,class:"user-section"},lk={class:"user-info"},ck=["src"],uk={key:1,class:"avatar-placeholder"},hk={class:"user-details"},fk={class:"user-name"},dk={class:"user-email"},pk={key:0,class:"user-role"},mk={key:2,class:"auth-section"},gk=Ei({__name:"App",setup(t){const{user:e,isAuthenticated:n,signOut:r,isLoading:s,stopLoading:i}=pc(),o=De(!1),l=De(!0),c=De(!1);let u=null;const f=D=>({teacher:"Учитель",student:"Ученик",user:"Пользователь",admin:"Администратор"})[D]||"Пользователь",d=()=>{o.value=!1},m=D=>{D.key==="Escape"&&(o.value=!1)},g=()=>{i(),l.value=!1,c.value=!1,u&&clearTimeout(u)};return Wo(()=>{document.addEventListener("keydown",m),u=setTimeout(()=>{s.value&&(console.warn("Loading timeout reached"),c.value=!0)},5e3)}),lh(()=>{u&&clearTimeout(u),document.removeEventListener("keydown",m)}),(D,R)=>(se(),ie(Ct,null,[k("header",null,[R[13]||(R[13]=k("img",{alt:"Логотип Кабинета Методиста",class:"logo",src:Vw,width:"260px",height:"200px"},null,-1)),k("div",ik,[R[12]||(R[12]=k("h1",{class:"app-title"},"Кабинет Методиста",-1)),ke(s)&&l.value?(se(),ie("div",ok,[R[5]||(R[5]=k("div",{class:"loading-spinner"},null,-1)),R[6]||(R[6]=k("p",null,"Загрузка данных...",-1)),c.value?(se(),ie("button",{key:0,onClick:g,class:"skip-loading-btn"}," Пропустить загрузку ")):Le("",!0)])):ke(n)&&ke(e)?(se(),ie("div",ak,[k("div",lk,[k("div",{class:tn(["user-avatar",{"has-photo":ke(e).photoURL}])},[ke(e).photoURL?(se(),ie("img",{key:0,src:ke(e).photoURL,alt:"Аватар"},null,8,ck)):(se(),ie("span",uk,je(ke(e).displayName?ke(e).displayName.charAt(0).toUpperCase():"U"),1))],2),k("div",hk,[k("div",fk,je(ke(e).displayName||"Пользователь"),1),k("div",dk,je(ke(e).email),1),ke(e).role?(se(),ie("div",pk,[k("span",{class:tn(["role-badge",ke(e).role])},je(f(ke(e).role)),3)])):Le("",!0)])]),k("button",{class:"logout-btn",onClick:R[0]||(R[0]=(...b)=>ke(r)&&ke(r)(...b))}," Выйти ")])):ke(s)?Le("",!0):(se(),ie("div",mk,[k("button",{class:"auth-btn",onClick:R[1]||(R[1]=b=>o.value=!0)},R[7]||(R[7]=[k("span",{class:"auth-icon"},"🔐",-1),It(" Войти / Регистрация ")]))])),k("nav",null,[st(ke(eo),{to:"/"},{default:$n(()=>R[8]||(R[8]=[It("Главная")])),_:1,__:[8]}),st(ke(eo),{to:"/about"},{default:$n(()=>R[9]||(R[9]=[It("О проекте")])),_:1,__:[9]}),st(ke(eo),{to:"/forum"},{default:$n(()=>R[10]||(R[10]=[It("Педагогический форум")])),_:1,__:[10]}),st(ke(eo),{to:"/materials"},{default:$n(()=>R[11]||(R[11]=[It("Банк методических материалов")])),_:1,__:[11]})])])]),k("main",null,[st(ke(Xg))]),o.value?(se(),ie("div",{key:0,class:"modal-overlay",onClick:R[4]||(R[4]=b=>o.value=!1)},[k("div",{class:"modal-content auth-modal",onClick:R[3]||(R[3]=Br(()=>{},["stop"]))},[st(gf,{onClose:R[2]||(R[2]=b=>o.value=!1),onLoginSuccess:d})])])):Le("",!0)],64))}}),_k=ua(gk,[["__scopeId","data-v-ca776674"]]),yk="modulepreload",vk=function(t){return"/"+t},Em={},Tm=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=vk(u),u in Em)return;Em[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":yk,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((g,D)=>{m.addEventListener("load",g),m.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Ek={},Tk={class:"home"};function wk(t,e){return se(),ie("div",Tk,e[0]||(e[0]=[k("h1",null,"Добро пожаловать в Кабинет Методиста",-1),k("p",null,"Профессиональное сообщество педагогов",-1)]))}const Ik=ua(Ek,[["render",wk],["__scopeId","data-v-3002f550"]]),Ak=[{id:"methodology",name:"Методические вопросы",description:"Обсуждение методик преподавания и образовательных технологий",icon:"📚",order:1},{id:"programs",name:"Рабочие программы",description:"Обмен рабочими программами и календарно-тематическим планированием",icon:"📅",order:2},{id:"extracurricular",name:"Внеурочная деятельность",description:"Кружки, мероприятия, проектная деятельность",icon:"🌟",order:3},{id:"exams",name:"Подготовка к ОГЭ/ЕГЭ",description:"Материалы и советы по подготовке к экзаменам",icon:"🎯",order:4},{id:"inclusive",name:"Инклюзивное образование",description:"Работа с детьми с ОВЗ, адаптированные программы",icon:"❤️",order:5},{id:"digital",name:"Цифровые технологии",description:"Использование ИКТ в образовательном процессе",icon:"💻",order:6}],Rk=async()=>{try{const t=ia(kn,"forum_categories"),e=yi(t,vi("order"));return(await dc(e)).docs.map(r=>{var s;return{id:r.id,...r.data(),createdAt:((s=r.data().createdAt)==null?void 0:s.toDate())||new Date}})}catch(t){return console.error("Ошибка получения категорий:",t),[]}},Sk=async(t,e=20,n)=>{try{const r=ia(kn,"forum_topics");let s=yi(r,Cl("categoryId","==",t),vi("createdAt","desc"),jo(e));n&&(s=yi(r,Cl("categoryId","==",t),vi("createdAt","desc"),Av(n),jo(e)));const i=await dc(s),o=i.docs[i.docs.length-1];return{topics:i.docs.map(c=>{var u,f,d;return{id:c.id,...c.data(),createdAt:((u=c.data().createdAt)==null?void 0:u.toDate())||new Date,updatedAt:((f=c.data().updatedAt)==null?void 0:f.toDate())||new Date,lastCommentAt:(d=c.data().lastCommentAt)==null?void 0:d.toDate()}}),lastVisible:o}}catch(r){return console.error("Ошибка получения тем:",r),{topics:[],lastVisible:null}}},bk=async t=>{var e,n,r;try{const s=xs(kn,"forum_topics",t),i=await ff(s);return i.exists()?(await qo(s,{views:Cv(1)}),{id:i.id,...i.data(),createdAt:((e=i.data().createdAt)==null?void 0:e.toDate())||new Date,updatedAt:((n=i.data().updatedAt)==null?void 0:n.toDate())||new Date,lastCommentAt:(r=i.data().lastCommentAt)==null?void 0:r.toDate()}):null}catch(s){return console.error("Ошибка получения темы:",s),null}},Ck=async(t,e,n,r,s,i)=>{try{const o=ia(kn,"forum_comments"),l=tt.now(),u=await K0(o,{topicId:t,content:e,authorId:n,authorName:r,authorPhoto:s,authorRole:i,createdAt:l,updatedAt:l,likes:[],isEdited:!1}),f=xs(kn,"forum_topics",t);return await qo(f,{commentCount:Cv(1),lastCommentAt:l,lastCommentBy:r}),u.id}catch(o){return console.error("Ошибка создания комментария:",o),null}},Pk=async(t,e=50,n)=>{try{const r=ia(kn,"forum_comments");let s=yi(r,Cl("topicId","==",t),vi("createdAt","asc"),jo(e));n&&(s=yi(r,Cl("topicId","==",t),vi("createdAt","asc"),Av(n),jo(e)));const i=await dc(s),o=i.docs[i.docs.length-1];return{comments:i.docs.map(c=>{var u,f;return{id:c.id,...c.data(),createdAt:((u=c.data().createdAt)==null?void 0:u.toDate())||new Date,updatedAt:((f=c.data().updatedAt)==null?void 0:f.toDate())||new Date}}),lastVisible:o}}catch(r){return console.error("Ошибка получения комментариев:",r),{comments:[],lastVisible:null}}},kk=async(t,e)=>{try{const n=xs(kn,"forum_comments",t),r=await ff(n);if(!r.exists())return!1;const i=r.data().likes||[];return i.includes(e)?(await qo(n,{likes:i.filter(o=>o!==e)}),!1):(await qo(n,{likes:[...i,e]}),!0)}catch(n){return console.error("Ошибка лайка комментария:",n),!1}},Dk=async(t,e)=>{try{const n=xs(kn,"forum_comments",t);return await qo(n,{content:e,isEdited:!0,updatedAt:Y0()}),!0}catch(n){return console.error("Ошибка обновления комментария:",n),!1}},Nk=async(t,e,n=20)=>{try{const r=ia(kn,"forum_topics"),i=yi(r,...[],vi("createdAt","desc"),jo(n)),l=(await dc(i)).docs.map(u=>{var f,d;return{id:u.id,...u.data(),createdAt:((f=u.data().createdAt)==null?void 0:f.toDate())||new Date,updatedAt:((d=u.data().updatedAt)==null?void 0:d.toDate())||new Date}}),c=t.toLowerCase();return l.filter(u=>u.title.toLowerCase().includes(c)||u.content.toLowerCase().includes(c))}catch(r){return console.error("Ошибка поиска тем:",r),[]}},Ok={class:"forum-page"},Vk={class:"forum-header"},Lk={class:"forum-nav"},Mk={key:0,class:"loading-section"},xk={key:1},Fk={key:0,class:"forum-actions"},Uk={class:"search-box"},$k={key:1,class:"auth-required"},Bk={key:2,class:"search-results"},jk={key:3,class:"forum-content"},qk={key:0,class:"loading-section"},Hk={key:1,class:"categories-section"},zk={class:"categories-grid"},Wk=["onClick"],Gk={class:"category-icon"},Kk={class:"category-content"},Qk={class:"category-stats"},Yk={class:"topic-count"},Xk={class:"comment-count"},Jk={key:0,class:"category-topics"},Zk=Ei({__name:"Forum",setup(t){Jg();const{user:e,isAuthenticated:n,isLoading:r,hasCheckedAuth:s,isAuthChecked:i}=pc(),o=De([]),l=De([]),c=De(""),u=De(!1),f=De([]);De("newest");const d=De(!1),m=De(!1);De(!1);const g=De(!1),D=De(!1),R=De({}),b=De({}),L=De({}),$=De({}),K=De({}),H=Os({categoryId:"",title:"",content:"",tagsInput:""}),oe=gt(()=>r.value&&!D.value),pe=async()=>{D.value||(D.value=!0,await C())};fo(()=>s.value,ce=>{ce&&!D.value&&pe()}),Wo(()=>{i()&&!D.value&&pe()}),gt(()=>o.value.map(ce=>{const Y=R.value[ce.id]||[],_e=Y.length,Se=Y.reduce((Et,Ne)=>Et+Ne.commentCount,0);return{...ce,topicCount:_e,commentCount:Se}}));const C=async()=>{if(!oe.value){g.value=!0;try{const ce=await Rk();ce.length===0?o.value=Ak.map((Y,_e)=>({id:Y.id,name:Y.name,description:Y.description,icon:Y.icon,order:Y.order,createdAt:new Date,createdBy:"system"})):o.value=ce,o.value.length>0&&(l.value=[o.value[0].id],await E(o.value[0].id))}catch(ce){console.error("Ошибка загрузки категорий:",ce)}finally{g.value=!1}}},E=async(ce,Y=!1)=>{try{Y?$.value[ce]=!0:(L.value[ce]=!0,R.value[ce]=[]);const{topics:_e,lastVisible:Se}=await Sk(ce,10,Y?b.value[ce]:void 0);Y?R.value[ce]=[...R.value[ce]||[],..._e]:R.value[ce]=_e,b.value[ce]=Se,K.value[ce]=_e.length===10}catch(_e){console.error("Ошибка загрузки тем:",_e)}finally{L.value[ce]=!1,$.value[ce]=!1}},y=async ce=>{l.value.includes(ce)?l.value=l.value.filter(Y=>Y!==ce):(l.value.push(ce),R.value[ce]||await E(ce))},S=ce=>l.value.includes(ce),I=ce=>{const Y=R.value[ce];return Y?Y.length:0},A=ce=>{const Y=R.value[ce];return Y?Y.reduce((_e,Se)=>_e+Se.commentCount,0):0},v=async()=>{if(c.value.trim()){u.value=!0;try{f.value=await Nk(c.value)}catch(ce){console.error("Ошибка поиска:",ce)}}};gt(()=>H.categoryId&&H.title.length>=10&&H.content.length>=30);const Re=()=>{m.value=!0},Ke=()=>{m.value=!1};return(ce,Y)=>{const _e=mg("router-link");return se(),ie("div",Ok,[k("div",Vk,[Y[9]||(Y[9]=k("h1",null,"Педагогический форум",-1)),k("div",Lk,[st(_e,{to:"/forum",class:tn(["nav-link",{active:ce.$route.path==="/forum"}])},{default:$n(()=>Y[6]||(Y[6]=[It(" Все категории ")])),_:1,__:[6]},8,["class"]),ke(e)?(se(),hu(_e,{key:0,to:"/forum/my-topics",class:"nav-link"},{default:$n(()=>Y[7]||(Y[7]=[It(" Мои темы ")])),_:1,__:[7]})):Le("",!0),ke(e)?(se(),hu(_e,{key:1,to:"/forum/my-comments",class:"nav-link"},{default:$n(()=>Y[8]||(Y[8]=[It(" Мои комментарии ")])),_:1,__:[8]})):Le("",!0)])]),oe.value?(se(),ie("div",Mk,Y[10]||(Y[10]=[k("div",{class:"loading-spinner"},null,-1),k("p",null,"Проверка авторизации...",-1)]))):oe.value?Le("",!0):(se(),ie("div",xk,[ke(n)?(se(),ie("div",Fk,[k("div",Uk,[xn(k("input",{type:"text","onUpdate:modelValue":Y[0]||(Y[0]=Se=>c.value=Se),onKeyup:Cw(v,["enter"]),placeholder:"Поиск по форуму...",class:"search-input"},null,544),[[nr,c.value]]),k("button",{class:"search-btn",onClick:v},"Найти")]),k("button",{class:"create-topic-btn",onClick:Y[1]||(Y[1]=Se=>d.value=!0)},Y[11]||(Y[11]=[k("span",{class:"plus-icon"},"+",-1),It(" Новая тема ")]))])):(se(),ie("div",$k,[k("p",null,[Y[12]||(Y[12]=It("Чтобы создавать темы и участвовать в обсуждениях, пожалуйста ")),k("a",{onClick:Re},"войдите")])])),u.value?(se(),ie("div",Bk)):(se(),ie("div",jk,[g.value?(se(),ie("div",qk,Y[13]||(Y[13]=[k("div",{class:"loading-spinner"},null,-1),k("p",null,"Загрузка категорий...",-1)]))):(se(),ie("div",Hk,[Y[16]||(Y[16]=k("h2",null,"Категории обсуждений",-1)),k("div",zk,[(se(!0),ie(Ct,null,Rs(o.value,Se=>(se(),ie("div",{key:Se.id,class:"category-card",onClick:Et=>y(Se.id)},[k("div",Gk,[k("span",null,je(Se.icon),1)]),k("div",Kk,[k("h3",null,je(Se.name),1),k("p",null,je(Se.description),1),k("div",Qk,[k("span",Yk,[k("strong",null,je(I(Se.id)),1),Y[14]||(Y[14]=It(" тем "))]),k("span",Xk,[k("strong",null,je(A(Se.id)),1),Y[15]||(Y[15]=It(" сообщений "))])])]),k("div",{class:tn(["category-arrow",{rotated:S(Se.id)}])}," ▼ ",2)],8,Wk))),128))])])),(se(!0),ie(Ct,null,Rs(o.value,Se=>(se(),ie("div",{key:Se.id},[S(Se.id)?(se(),ie("div",Jk)):Le("",!0)]))),128))]))])),d.value?(se(),ie("div",{key:2,class:"modal-overlay",onClick:Y[2]||(Y[2]=Br(Se=>d.value=!1,["self"]))})):Le("",!0),m.value?(se(),ie("div",{key:3,class:"modal-overlay",onClick:Y[5]||(Y[5]=Br(Se=>m.value=!1,["self"]))},[k("div",{class:"modal-content auth-modal",onClick:Y[4]||(Y[4]=Br(()=>{},["stop"]))},[st(gf,{onClose:Y[3]||(Y[3]=Se=>m.value=!1),onLoginSuccess:Ke})])])):Le("",!0)])}}}),eD=ua(Zk,[["__scopeId","data-v-5500797e"]]);/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Mv,setPrototypeOf:wm,isFrozen:tD,getPrototypeOf:nD,getOwnPropertyDescriptor:rD}=Object;let{freeze:Yt,seal:yn,create:zu}=Object,{apply:Wu,construct:Gu}=typeof Reflect<"u"&&Reflect;Yt||(Yt=function(e){return e});yn||(yn=function(e){return e});Wu||(Wu=function(e,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),i=2;i<r;i++)s[i-2]=arguments[i];return e.apply(n,s)});Gu||(Gu=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return new e(...r)});const La=Xt(Array.prototype.forEach),sD=Xt(Array.prototype.lastIndexOf),Im=Xt(Array.prototype.pop),Ki=Xt(Array.prototype.push),iD=Xt(Array.prototype.splice),Ja=Xt(String.prototype.toLowerCase),Yc=Xt(String.prototype.toString),Xc=Xt(String.prototype.match),Qi=Xt(String.prototype.replace),oD=Xt(String.prototype.indexOf),aD=Xt(String.prototype.trim),Tn=Xt(Object.prototype.hasOwnProperty),Wt=Xt(RegExp.prototype.test),Yi=lD(TypeError);function Xt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return Wu(t,e,r)}}function lD(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Gu(t,n)}}function Oe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ja;wm&&wm(t,null);let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const i=n(s);i!==s&&(tD(e)||(e[r]=i),s=i)}t[s]=!0}return t}function cD(t){for(let e=0;e<t.length;e++)Tn(t,e)||(t[e]=null);return t}function Ln(t){const e=zu(null);for(const[n,r]of Mv(t))Tn(t,n)&&(Array.isArray(r)?e[n]=cD(r):r&&typeof r=="object"&&r.constructor===Object?e[n]=Ln(r):e[n]=r);return e}function Xi(t,e){for(;t!==null;){const r=rD(t,e);if(r){if(r.get)return Xt(r.get);if(typeof r.value=="function")return Xt(r.value)}t=nD(t)}function n(){return null}return n}const Am=Yt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Jc=Yt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Zc=Yt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),uD=Yt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),eu=Yt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hD=Yt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Rm=Yt(["#text"]),Sm=Yt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),tu=Yt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),bm=Yt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ma=Yt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),fD=yn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dD=yn(/<%[\w\W]*|[\w\W]*%>/gm),pD=yn(/\$\{[\w\W]*/gm),mD=yn(/^data-[\-\w.\u00B7-\uFFFF]+$/),gD=yn(/^aria-[\-\w]+$/),xv=yn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_D=yn(/^(?:\w+script|data):/i),yD=yn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fv=yn(/^html$/i),vD=yn(/^[a-z][.\w]*(-[.\w]+)+$/i);var Cm=Object.freeze({__proto__:null,ARIA_ATTR:gD,ATTR_WHITESPACE:yD,CUSTOM_ELEMENT:vD,DATA_ATTR:mD,DOCTYPE_NAME:Fv,ERB_EXPR:dD,IS_ALLOWED_URI:xv,IS_SCRIPT_OR_DATA:_D,MUSTACHE_EXPR:fD,TMPLIT_EXPR:pD});const Ji={element:1,text:3,progressingInstruction:7,comment:8,document:9},ED=function(){return typeof window>"u"?null:window},TD=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(r=n.getAttribute(s));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Pm=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Uv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ED();const e=de=>Uv(de);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Ji.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const r=n,s=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:c,NodeFilter:u,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:m,trustedTypes:g}=t,D=c.prototype,R=Xi(D,"cloneNode"),b=Xi(D,"remove"),L=Xi(D,"nextSibling"),$=Xi(D,"childNodes"),K=Xi(D,"parentNode");if(typeof o=="function"){const de=n.createElement("template");de.content&&de.content.ownerDocument&&(n=de.content.ownerDocument)}let H,oe="";const{implementation:pe,createNodeIterator:C,createDocumentFragment:E,getElementsByTagName:y}=n,{importNode:S}=r;let I=Pm();e.isSupported=typeof Mv=="function"&&typeof K=="function"&&pe&&pe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:A,ERB_EXPR:v,TMPLIT_EXPR:Re,DATA_ATTR:Ke,ARIA_ATTR:ce,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:_e,CUSTOM_ELEMENT:Se}=Cm;let{IS_ALLOWED_URI:Et}=Cm,Ne=null;const ot=Oe({},[...Am,...Jc,...Zc,...eu,...Rm]);let ne=null;const re=Oe({},[...Sm,...tu,...bm,...Ma]);let be=Object.seal(zu(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$e=null,M=null;const J=Object.seal(zu(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let X=!0,ue=!0,Ue=!1,T=!0,w=!1,N=!0,x=!1,B=!1,U=!1,j=!1,W=!1,z=!1,G=!0,he=!1;const Z="user-content-";let fe=!0,me=!1,we={},Ce=null;const Ve=Oe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Rt=null;const Tt=Oe({},["audio","video","img","source","image","track"]);let kt=null;const Ft=Oe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ut="http://www.w3.org/1998/Math/MathML",vn="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml";let nt=Qe,Yn=!1,Er=null;const ha=Oe({},[Ut,vn,Qe],Yc);let Dn=Oe({},["mi","mo","mn","ms","mtext"]),os=Oe({},["annotation-xml"]);const Dt=Oe({},["title","style","font","a","script"]);let Tr=null;const as=["application/xhtml+xml","text/html"],ls="text/html";let ct=null,wr=null;const Ir=n.createElement("form"),fa=function(P){return P instanceof RegExp||P instanceof Function},Pi=function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(wr&&wr===P)){if((!P||typeof P!="object")&&(P={}),P=Ln(P),Tr=as.indexOf(P.PARSER_MEDIA_TYPE)===-1?ls:P.PARSER_MEDIA_TYPE,ct=Tr==="application/xhtml+xml"?Yc:Ja,Ne=Tn(P,"ALLOWED_TAGS")?Oe({},P.ALLOWED_TAGS,ct):ot,ne=Tn(P,"ALLOWED_ATTR")?Oe({},P.ALLOWED_ATTR,ct):re,Er=Tn(P,"ALLOWED_NAMESPACES")?Oe({},P.ALLOWED_NAMESPACES,Yc):ha,kt=Tn(P,"ADD_URI_SAFE_ATTR")?Oe(Ln(Ft),P.ADD_URI_SAFE_ATTR,ct):Ft,Rt=Tn(P,"ADD_DATA_URI_TAGS")?Oe(Ln(Tt),P.ADD_DATA_URI_TAGS,ct):Tt,Ce=Tn(P,"FORBID_CONTENTS")?Oe({},P.FORBID_CONTENTS,ct):Ve,$e=Tn(P,"FORBID_TAGS")?Oe({},P.FORBID_TAGS,ct):Ln({}),M=Tn(P,"FORBID_ATTR")?Oe({},P.FORBID_ATTR,ct):Ln({}),we=Tn(P,"USE_PROFILES")?P.USE_PROFILES:!1,X=P.ALLOW_ARIA_ATTR!==!1,ue=P.ALLOW_DATA_ATTR!==!1,Ue=P.ALLOW_UNKNOWN_PROTOCOLS||!1,T=P.ALLOW_SELF_CLOSE_IN_ATTR!==!1,w=P.SAFE_FOR_TEMPLATES||!1,N=P.SAFE_FOR_XML!==!1,x=P.WHOLE_DOCUMENT||!1,j=P.RETURN_DOM||!1,W=P.RETURN_DOM_FRAGMENT||!1,z=P.RETURN_TRUSTED_TYPE||!1,U=P.FORCE_BODY||!1,G=P.SANITIZE_DOM!==!1,he=P.SANITIZE_NAMED_PROPS||!1,fe=P.KEEP_CONTENT!==!1,me=P.IN_PLACE||!1,Et=P.ALLOWED_URI_REGEXP||xv,nt=P.NAMESPACE||Qe,Dn=P.MATHML_TEXT_INTEGRATION_POINTS||Dn,os=P.HTML_INTEGRATION_POINTS||os,be=P.CUSTOM_ELEMENT_HANDLING||{},P.CUSTOM_ELEMENT_HANDLING&&fa(P.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(be.tagNameCheck=P.CUSTOM_ELEMENT_HANDLING.tagNameCheck),P.CUSTOM_ELEMENT_HANDLING&&fa(P.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(be.attributeNameCheck=P.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),P.CUSTOM_ELEMENT_HANDLING&&typeof P.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(be.allowCustomizedBuiltInElements=P.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),w&&(ue=!1),W&&(j=!0),we&&(Ne=Oe({},Rm),ne=[],we.html===!0&&(Oe(Ne,Am),Oe(ne,Sm)),we.svg===!0&&(Oe(Ne,Jc),Oe(ne,tu),Oe(ne,Ma)),we.svgFilters===!0&&(Oe(Ne,Zc),Oe(ne,tu),Oe(ne,Ma)),we.mathMl===!0&&(Oe(Ne,eu),Oe(ne,bm),Oe(ne,Ma))),P.ADD_TAGS&&(typeof P.ADD_TAGS=="function"?J.tagCheck=P.ADD_TAGS:(Ne===ot&&(Ne=Ln(Ne)),Oe(Ne,P.ADD_TAGS,ct))),P.ADD_ATTR&&(typeof P.ADD_ATTR=="function"?J.attributeCheck=P.ADD_ATTR:(ne===re&&(ne=Ln(ne)),Oe(ne,P.ADD_ATTR,ct))),P.ADD_URI_SAFE_ATTR&&Oe(kt,P.ADD_URI_SAFE_ATTR,ct),P.FORBID_CONTENTS&&(Ce===Ve&&(Ce=Ln(Ce)),Oe(Ce,P.FORBID_CONTENTS,ct)),P.ADD_FORBID_CONTENTS&&(Ce===Ve&&(Ce=Ln(Ce)),Oe(Ce,P.ADD_FORBID_CONTENTS,ct)),fe&&(Ne["#text"]=!0),x&&Oe(Ne,["html","head","body"]),Ne.table&&(Oe(Ne,["tbody"]),delete $e.tbody),P.TRUSTED_TYPES_POLICY){if(typeof P.TRUSTED_TYPES_POLICY.createHTML!="function")throw Yi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof P.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Yi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');H=P.TRUSTED_TYPES_POLICY,oe=H.createHTML("")}else H===void 0&&(H=TD(g,s)),H!==null&&typeof oe=="string"&&(oe=H.createHTML(""));Yt&&Yt(P),wr=P}},cs=Oe({},[...Jc,...Zc,...uD]),ki=Oe({},[...eu,...hD]),da=function(P){let Q=K(P);(!Q||!Q.tagName)&&(Q={namespaceURI:nt,tagName:"template"});const le=Ja(P.tagName),qe=Ja(Q.tagName);return Er[P.namespaceURI]?P.namespaceURI===vn?Q.namespaceURI===Qe?le==="svg":Q.namespaceURI===Ut?le==="svg"&&(qe==="annotation-xml"||Dn[qe]):!!cs[le]:P.namespaceURI===Ut?Q.namespaceURI===Qe?le==="math":Q.namespaceURI===vn?le==="math"&&os[qe]:!!ki[le]:P.namespaceURI===Qe?Q.namespaceURI===vn&&!os[qe]||Q.namespaceURI===Ut&&!Dn[qe]?!1:!ki[le]&&(Dt[le]||!cs[le]):!!(Tr==="application/xhtml+xml"&&Er[P.namespaceURI]):!1},Jt=function(P){Ki(e.removed,{element:P});try{K(P).removeChild(P)}catch{b(P)}},sn=function(P,Q){try{Ki(e.removed,{attribute:Q.getAttributeNode(P),from:Q})}catch{Ki(e.removed,{attribute:null,from:Q})}if(Q.removeAttribute(P),P==="is")if(j||W)try{Jt(Q)}catch{}else try{Q.setAttribute(P,"")}catch{}},pa=function(P){let Q=null,le=null;if(U)P="<remove></remove>"+P;else{const at=Xc(P,/^[\r\n\t ]+/);le=at&&at[0]}Tr==="application/xhtml+xml"&&nt===Qe&&(P='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+P+"</body></html>");const qe=H?H.createHTML(P):P;if(nt===Qe)try{Q=new m().parseFromString(qe,Tr)}catch{}if(!Q||!Q.documentElement){Q=pe.createDocument(nt,"template",null);try{Q.documentElement.innerHTML=Yn?oe:qe}catch{}}const pt=Q.body||Q.documentElement;return P&&le&&pt.insertBefore(n.createTextNode(le),pt.childNodes[0]||null),nt===Qe?y.call(Q,x?"html":"body")[0]:x?Q.documentElement:pt},En=function(P){return C.call(P.ownerDocument||P,P,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Fs=function(P){return P instanceof d&&(typeof P.nodeName!="string"||typeof P.textContent!="string"||typeof P.removeChild!="function"||!(P.attributes instanceof f)||typeof P.removeAttribute!="function"||typeof P.setAttribute!="function"||typeof P.namespaceURI!="string"||typeof P.insertBefore!="function"||typeof P.hasChildNodes!="function")},Di=function(P){return typeof l=="function"&&P instanceof l};function on(de,P,Q){La(de,le=>{le.call(e,P,Q,wr)})}const Us=function(P){let Q=null;if(on(I.beforeSanitizeElements,P,null),Fs(P))return Jt(P),!0;const le=ct(P.nodeName);if(on(I.uponSanitizeElement,P,{tagName:le,allowedTags:Ne}),N&&P.hasChildNodes()&&!Di(P.firstElementChild)&&Wt(/<[/\w!]/g,P.innerHTML)&&Wt(/<[/\w!]/g,P.textContent)||P.nodeType===Ji.progressingInstruction||N&&P.nodeType===Ji.comment&&Wt(/<[/\w]/g,P.data))return Jt(P),!0;if(!(J.tagCheck instanceof Function&&J.tagCheck(le))&&(!Ne[le]||$e[le])){if(!$e[le]&&ma(le)&&(be.tagNameCheck instanceof RegExp&&Wt(be.tagNameCheck,le)||be.tagNameCheck instanceof Function&&be.tagNameCheck(le)))return!1;if(fe&&!Ce[le]){const qe=K(P)||P.parentNode,pt=$(P)||P.childNodes;if(pt&&qe){const at=pt.length;for(let Nt=at-1;Nt>=0;--Nt){const fn=R(pt[Nt],!0);fn.__removalCount=(P.__removalCount||0)+1,qe.insertBefore(fn,L(P))}}}return Jt(P),!0}return P instanceof c&&!da(P)||(le==="noscript"||le==="noembed"||le==="noframes")&&Wt(/<\/no(script|embed|frames)/i,P.innerHTML)?(Jt(P),!0):(w&&P.nodeType===Ji.text&&(Q=P.textContent,La([A,v,Re],qe=>{Q=Qi(Q,qe," ")}),P.textContent!==Q&&(Ki(e.removed,{element:P.cloneNode()}),P.textContent=Q)),on(I.afterSanitizeElements,P,null),!1)},Ni=function(P,Q,le){if(G&&(Q==="id"||Q==="name")&&(le in n||le in Ir))return!1;if(!(ue&&!M[Q]&&Wt(Ke,Q))){if(!(X&&Wt(ce,Q))){if(!(J.attributeCheck instanceof Function&&J.attributeCheck(Q,P))){if(!ne[Q]||M[Q]){if(!(ma(P)&&(be.tagNameCheck instanceof RegExp&&Wt(be.tagNameCheck,P)||be.tagNameCheck instanceof Function&&be.tagNameCheck(P))&&(be.attributeNameCheck instanceof RegExp&&Wt(be.attributeNameCheck,Q)||be.attributeNameCheck instanceof Function&&be.attributeNameCheck(Q,P))||Q==="is"&&be.allowCustomizedBuiltInElements&&(be.tagNameCheck instanceof RegExp&&Wt(be.tagNameCheck,le)||be.tagNameCheck instanceof Function&&be.tagNameCheck(le))))return!1}else if(!kt[Q]){if(!Wt(Et,Qi(le,_e,""))){if(!((Q==="src"||Q==="xlink:href"||Q==="href")&&P!=="script"&&oD(le,"data:")===0&&Rt[P])){if(!(Ue&&!Wt(Y,Qi(le,_e,"")))){if(le)return!1}}}}}}}return!0},ma=function(P){return P!=="annotation-xml"&&Xc(P,Se)},Oi=function(P){on(I.beforeSanitizeAttributes,P,null);const{attributes:Q}=P;if(!Q||Fs(P))return;const le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne,forceKeepAttr:void 0};let qe=Q.length;for(;qe--;){const pt=Q[qe],{name:at,namespaceURI:Nt,value:fn}=pt,Xn=ct(at),us=fn;let ut=at==="value"?us:aD(us);if(le.attrName=Xn,le.attrValue=ut,le.keepAttr=!0,le.forceKeepAttr=void 0,on(I.uponSanitizeAttribute,P,le),ut=le.attrValue,he&&(Xn==="id"||Xn==="name")&&(sn(at,P),ut=Z+ut),N&&Wt(/((--!?|])>)|<\/(style|title|textarea)/i,ut)){sn(at,P);continue}if(Xn==="attributename"&&Xc(ut,"href")){sn(at,P);continue}if(le.forceKeepAttr)continue;if(!le.keepAttr){sn(at,P);continue}if(!T&&Wt(/\/>/i,ut)){sn(at,P);continue}w&&La([A,v,Re],Li=>{ut=Qi(ut,Li," ")});const Vi=ct(P.nodeName);if(!Ni(Vi,Xn,ut)){sn(at,P);continue}if(H&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!Nt)switch(g.getAttributeType(Vi,Xn)){case"TrustedHTML":{ut=H.createHTML(ut);break}case"TrustedScriptURL":{ut=H.createScriptURL(ut);break}}if(ut!==us)try{Nt?P.setAttributeNS(Nt,at,ut):P.setAttribute(at,ut),Fs(P)?Jt(P):Im(e.removed)}catch{sn(at,P)}}on(I.afterSanitizeAttributes,P,null)},mc=function de(P){let Q=null;const le=En(P);for(on(I.beforeSanitizeShadowDOM,P,null);Q=le.nextNode();)on(I.uponSanitizeShadowNode,Q,null),Us(Q),Oi(Q),Q.content instanceof i&&de(Q.content);on(I.afterSanitizeShadowDOM,P,null)};return e.sanitize=function(de){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Q=null,le=null,qe=null,pt=null;if(Yn=!de,Yn&&(de="<!-->"),typeof de!="string"&&!Di(de))if(typeof de.toString=="function"){if(de=de.toString(),typeof de!="string")throw Yi("dirty is not a string, aborting")}else throw Yi("toString is not a function");if(!e.isSupported)return de;if(B||Pi(P),e.removed=[],typeof de=="string"&&(me=!1),me){if(de.nodeName){const fn=ct(de.nodeName);if(!Ne[fn]||$e[fn])throw Yi("root node is forbidden and cannot be sanitized in-place")}}else if(de instanceof l)Q=pa("<!---->"),le=Q.ownerDocument.importNode(de,!0),le.nodeType===Ji.element&&le.nodeName==="BODY"||le.nodeName==="HTML"?Q=le:Q.appendChild(le);else{if(!j&&!w&&!x&&de.indexOf("<")===-1)return H&&z?H.createHTML(de):de;if(Q=pa(de),!Q)return j?null:z?oe:""}Q&&U&&Jt(Q.firstChild);const at=En(me?de:Q);for(;qe=at.nextNode();)Us(qe),Oi(qe),qe.content instanceof i&&mc(qe.content);if(me)return de;if(j){if(W)for(pt=E.call(Q.ownerDocument);Q.firstChild;)pt.appendChild(Q.firstChild);else pt=Q;return(ne.shadowroot||ne.shadowrootmode)&&(pt=S.call(r,pt,!0)),pt}let Nt=x?Q.outerHTML:Q.innerHTML;return x&&Ne["!doctype"]&&Q.ownerDocument&&Q.ownerDocument.doctype&&Q.ownerDocument.doctype.name&&Wt(Fv,Q.ownerDocument.doctype.name)&&(Nt="<!DOCTYPE "+Q.ownerDocument.doctype.name+`>
`+Nt),w&&La([A,v,Re],fn=>{Nt=Qi(Nt,fn," ")}),H&&z?H.createHTML(Nt):Nt},e.setConfig=function(){let de=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pi(de),B=!0},e.clearConfig=function(){wr=null,B=!1},e.isValidAttribute=function(de,P,Q){wr||Pi({});const le=ct(de),qe=ct(P);return Ni(le,qe,Q)},e.addHook=function(de,P){typeof P=="function"&&Ki(I[de],P)},e.removeHook=function(de,P){if(P!==void 0){const Q=sD(I[de],P);return Q===-1?void 0:iD(I[de],Q,1)[0]}return Im(I[de])},e.removeHooks=function(de){I[de]=[]},e.removeAllHooks=function(){I=Pm()},e}var wD=Uv();const ID={class:"forum-topic-page"},AD={class:"breadcrumbs"},RD={class:"topic-header"},SD={class:"topic-meta"},bD={class:"author-info"},CD={key:0,class:"author-avatar"},PD=["src","alt"],kD={class:"author-details"},DD={class:"author-name"},ND={class:"topic-date"},OD={class:"topic-stats"},VD={class:"stat"},LD={class:"stat-value"},MD={class:"stat"},xD={class:"stat-value"},FD={key:0,class:"topic-tags"},UD={class:"topic-content"},$D=["innerHTML"],BD={class:"comments-section"},jD={class:"comments-header"},qD={key:1,class:"topic-closed"},HD={key:0,class:"comment-form"},zD={class:"form-header"},WD={class:"form-actions"},GD=["disabled"],KD={key:0,class:"spinner-small"},QD={key:1,class:"loading-comments"},YD={key:2,class:"no-comments"},XD={key:3,class:"comments-list"},JD={class:"comment-header"},ZD={class:"comment-author"},eN={key:0,class:"author-avatar"},tN=["src","alt"],nN={class:"author-info"},rN={class:"author-name"},sN={key:0,class:"author-role"},iN={class:"comment-date"},oN={key:1,class:"edited-label"},aN={key:0,class:"comment-actions"},lN=["onClick"],cN={class:"like-count"},uN=["onClick"],hN={class:"comment-content"},fN={key:0,class:"edit-comment-form"},dN={class:"edit-actions"},pN=["onClick","disabled"],mN=["innerHTML"],gN={key:4,class:"load-more-comments"},_N=["disabled"],yN={key:0,class:"spinner-small"},vN={key:0,class:"auth-required-comments"},EN=Ei({__name:"ForumTopic",setup(t){const e=MI(),n=Jg(),{user:r,isAuthenticated:s}=pc(),i=gt(()=>{var ne;return((ne=r.value)==null?void 0:ne.uid)||""}),o=gt(()=>{var ne;return((ne=r.value)==null?void 0:ne.role)||"user"}),l=gt(()=>{var ne,re;return((ne=r.value)==null?void 0:ne.displayName)||((re=r.value)==null?void 0:re.email)||"Аноним"}),c=gt(()=>{var ne;return((ne=r.value)==null?void 0:ne.photoURL)||void 0}),u=De(null),f=De([]),d=De(!0),m=De(!0),g=De(!1),D=De(!1),R=De(!1),b=De(!1),L=De(null),$=De(""),K=De(null),H=De(!0),oe=Os({content:""});Wo(()=>{C(),E()});const pe=gt(()=>e.params.id),C=async()=>{try{d.value=!0;const ne=await bk(pe.value);if(!ne){n.push("/forum");return}u.value=ne}catch(ne){console.error("Ошибка загрузки темы:",ne),n.push("/forum")}finally{d.value=!1}},E=async(ne=!1)=>{try{ne?g.value=!0:(m.value=!0,f.value=[]);const{comments:re,lastVisible:be}=await Pk(pe.value,20,ne?K.value:void 0);ne?f.value=[...f.value,...re]:f.value=re,K.value=be,H.value=re.length===20}catch(re){console.error("Ошибка загрузки комментариев:",re)}finally{m.value=!1,g.value=!1}},y=()=>{E(!0)},S=async()=>{if(!s.value||!u.value||!oe.content.trim()){Ne();return}b.value=!0;try{await Ck(pe.value,oe.content,i.value,l.value,c.value,o.value)&&(await E(),oe.content="",D.value=!1)}catch(ne){console.error("Ошибка отправки комментария:",ne),alert("Не удалось отправить комментарий. Попробуйте снова.")}finally{b.value=!1}},I=async ne=>{if(!s.value||!i.value){Ne();return}try{const re=await kk(ne.id,i.value),be=f.value.findIndex($e=>$e.id===ne.id);if(be!==-1){const $e=ne.likes||[];f.value[be].likes=re?[...$e,i.value]:$e.filter(M=>M!==i.value)}}catch(re){console.error("Ошибка лайка:",re)}},A=ne=>{Ke(ne)&&(L.value=ne.id,$.value=ne.content)},v=async ne=>{if($.value.trim())try{await Dk(ne.id,$.value);const re=f.value.findIndex(be=>be.id===ne.id);re!==-1&&(f.value[re].content=$.value,f.value[re].isEdited=!0,f.value[re].updatedAt=new Date),Re()}catch(re){console.error("Ошибка редактирования:",re),alert("Не удалось сохранить изменения")}},Re=()=>{L.value=null,$.value=""},Ke=ne=>!s.value||!i.value?!1:ne.authorId===i.value||o.value==="admin",ce=ne=>ne?{methodology:"Методические вопросы",programs:"Рабочие программы",extracurricular:"Внеурочная деятельность",exams:"Подготовка к ОГЭ/ЕГЭ",inclusive:"Инклюзивное образование",digital:"Цифровые технологии"}[ne]||"Неизвестная категория":"",Y=ne=>ne?{teacher:"Учитель",student:"Ученик",user:"Пользователь",admin:"Администратор"}[ne]||ne:"",_e=ne=>ne?new Date(ne).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",Se=ne=>{const re=new Date(ne),$e=new Date().getTime()-re.getTime(),M=Math.floor($e/6e4),J=Math.floor($e/36e5),X=Math.floor($e/864e5);return M<60?`${M} минут назад`:J<24?`${J} часов назад`:X<7?`${X} дней назад`:_e(re)},Et=ne=>ne?wD.sanitize(ne).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/^> (.*$)/gm,"<blockquote>$1</blockquote>").replace(/\n/g,"<br>"):"",Ne=()=>{R.value=!0},ot=()=>{R.value=!1};return(ne,re)=>{var $e,M,J,X,ue,Ue,T,w,N,x,B,U;const be=mg("router-link");return se(),ie("div",ID,[k("nav",AD,[st(be,{to:"/forum"},{default:$n(()=>re[8]||(re[8]=[It("Форум")])),_:1,__:[8]}),re[9]||(re[9]=k("span",null,"›",-1)),st(be,{to:`/forum?category=${($e=u.value)==null?void 0:$e.categoryId}`},{default:$n(()=>{var j;return[It(je(ce((j=u.value)==null?void 0:j.categoryId)),1)]}),_:1},8,["to"]),re[10]||(re[10]=k("span",null,"›",-1)),re[11]||(re[11]=k("span",null,"Тема",-1))]),k("div",RD,[k("h1",null,je((M=u.value)==null?void 0:M.title),1),k("div",SD,[k("div",bD,[(J=u.value)!=null&&J.authorPhoto?(se(),ie("div",CD,[k("img",{src:u.value.authorPhoto,alt:u.value.authorName},null,8,PD)])):Le("",!0),k("div",kD,[k("span",DD,je((X=u.value)==null?void 0:X.authorName),1),k("span",ND,je(_e((ue=u.value)==null?void 0:ue.createdAt)),1)])]),k("div",OD,[k("span",VD,[k("span",LD,je(((Ue=u.value)==null?void 0:Ue.views)||0),1),re[12]||(re[12]=k("span",{class:"stat-label"},"просмотров",-1))]),k("span",MD,[k("span",xD,je(((T=u.value)==null?void 0:T.commentCount)||0),1),re[13]||(re[13]=k("span",{class:"stat-label"},"комментариев",-1))])])]),(w=u.value)!=null&&w.tags&&u.value.tags.length>0?(se(),ie("div",FD,[(se(!0),ie(Ct,null,Rs(((N=u.value)==null?void 0:N.tags)||[],j=>(se(),ie("span",{key:j,class:"topic-tag"},je(j),1))),128))])):Le("",!0)]),k("div",UD,[k("div",{class:"content-container",innerHTML:Et(((x=u.value)==null?void 0:x.content)||"")},null,8,$D)]),k("div",BD,[k("div",jD,[k("h2",null,"Комментарии ("+je(f.value.length)+")",1),ke(s)&&!((B=u.value)!=null&&B.isClosed)?(se(),ie("button",{key:0,class:"add-comment-btn",onClick:re[0]||(re[0]=j=>D.value=!0)}," + Добавить комментарий ")):(U=u.value)!=null&&U.isClosed?(se(),ie("div",qD," 📌 Тема закрыта для комментариев ")):Le("",!0)]),D.value&&ke(s)?(se(),ie("div",HD,[k("div",zD,[re[14]||(re[14]=k("h3",null,"Ваш комментарий",-1)),k("button",{class:"close-form-btn",onClick:re[1]||(re[1]=j=>D.value=!1)},"×")]),xn(k("textarea",{"onUpdate:modelValue":re[2]||(re[2]=j=>oe.content=j),placeholder:"Напишите ваш комментарий...",rows:"4",class:"comment-textarea"},null,512),[[nr,oe.content]]),k("div",WD,[k("button",{type:"button",class:"btn-secondary",onClick:re[3]||(re[3]=j=>D.value=!1)}," Отмена "),k("button",{type:"submit",class:"btn-primary",onClick:S,disabled:!oe.content.trim()||b.value},[b.value?(se(),ie("span",KD)):Le("",!0),It(" "+je(b.value?"Отправка...":"Отправить"),1)],8,GD)])])):Le("",!0),m.value?(se(),ie("div",QD,re[15]||(re[15]=[k("div",{class:"spinner"},null,-1),k("p",null,"Загрузка комментариев...",-1)]))):f.value.length===0?(se(),ie("div",YD,re[16]||(re[16]=[k("p",null,"Пока нет комментариев. Будьте первым!",-1)]))):(se(),ie("div",XD,[(se(!0),ie(Ct,null,Rs(f.value,j=>{var W,z,G,he;return se(),ie("div",{key:j.id,class:tn(["comment-item",{"is-author":j.authorId===((W=u.value)==null?void 0:W.authorId)}])},[k("div",JD,[k("div",ZD,[j.authorPhoto?(se(),ie("div",eN,[k("img",{src:j.authorPhoto,alt:j.authorName},null,8,tN)])):Le("",!0),k("div",nN,[k("span",rN,je(j.authorName),1),j.authorRole?(se(),ie("span",sN,je(Y(j.authorRole)),1)):Le("",!0),k("span",iN,je(Se(j.createdAt)),1),j.isEdited?(se(),ie("span",oN,"(изменено)")):Le("",!0)])]),ke(s)?(se(),ie("div",aN,[k("button",{class:tn(["like-btn",{liked:(G=j.likes)==null?void 0:G.includes(((z=ke(r))==null?void 0:z.uid)||"")}]),onClick:Z=>I(j)},[re[17]||(re[17]=k("span",{class:"like-icon"},"♥",-1)),k("span",cN,je(((he=j.likes)==null?void 0:he.length)||0),1)],10,lN),Ke(j)?(se(),ie("button",{key:0,class:"edit-btn",onClick:Z=>A(j)}," ✎ ",8,uN)):Le("",!0)])):Le("",!0)]),k("div",hN,[L.value===j.id?(se(),ie("div",fN,[xn(k("textarea",{"onUpdate:modelValue":re[4]||(re[4]=Z=>$.value=Z),rows:"3",class:"edit-textarea"},null,512),[[nr,$.value]]),k("div",dN,[k("button",{type:"button",class:"btn-secondary",onClick:Re}," Отмена "),k("button",{type:"button",class:"btn-primary",onClick:Z=>v(j),disabled:!$.value.trim()}," Сохранить ",8,pN)])])):(se(),ie("div",{key:1,innerHTML:Et(j.content)},null,8,mN))])],2)}),128))])),H.value?(se(),ie("div",gN,[k("button",{class:"load-more-btn",onClick:y,disabled:g.value},[g.value?(se(),ie("span",yN)):Le("",!0),It(" "+je(g.value?"Загрузка...":"Загрузить ещё комментарии"),1)],8,_N)])):Le("",!0)]),ke(s)?Le("",!0):(se(),ie("div",vN,[k("p",null,[re[18]||(re[18]=It("Чтобы оставлять комментарии, пожалуйста ")),k("a",{onClick:Ne},"войдите")])])),R.value?(se(),ie("div",{key:1,class:"modal-overlay",onClick:re[7]||(re[7]=Br(j=>R.value=!1,["self"]))},[k("div",{class:"modal-content auth-modal",onClick:re[6]||(re[6]=Br(()=>{},["stop"]))},[st(gf,{onClose:re[5]||(re[5]=j=>R.value=!1),onLoginSuccess:ot})])])):Le("",!0)])}}}),TN=ua(EN,[["__scopeId","data-v-027f5710"]]),wN=VI({history:hI("/"),routes:[{path:"/",name:"home",component:Ik},{path:"/about",name:"about",component:()=>Tm(()=>import("./AboutView-B1Fc4fym.js"),__vite__mapDeps([0,1]))},{path:"/forum",name:"forum",component:eD},{path:"/forum/topic/:id",name:"forum-topic",component:TN,props:!0},{path:"/materials",name:"materials",component:()=>Tm(()=>import("./Materials-BmArWGUG.js"),__vite__mapDeps([2,3]))}]});console.log("Firebase initialized:",pf.name);const $v=Dw(_k);$v.use(wN);$v.mount("#app");export{Ct as F,IN as T,ua as _,$T as a,gt as b,ie as c,Ei as d,Wo as e,Le as f,k as g,ke as h,st as i,Cw as j,It as k,$n as l,Rs as m,tn as n,se as o,Br as p,Aw as q,De as r,Jg as s,je as t,pc as u,nr as v,xn as w};
