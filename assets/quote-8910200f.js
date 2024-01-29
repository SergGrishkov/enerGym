var D=Object.defineProperty;var j=(t,e,r)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var T=(t,e,r)=>(j(t,typeof e!="symbol"?e+"":e,r),r),v=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var o=(t,e,r)=>(v(t,e,"read from private field"),r?r.call(t):e.get(t)),i=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},A=(t,e,r,s)=>(v(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r);import{A as F}from"./vendor-0fffa566.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const b=document.querySelector(".js-menu"),J=document.querySelector(".js-open-menu"),B=document.querySelector(".js-close-menu"),R=()=>{const t=b.classList.toggle("is-open");document.body.style.overflow=t?"hidden":""};J.addEventListener("click",R);B.addEventListener("click",R);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(b.classList.remove("is-open"),document.body.style.overflow="")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname,e=t==="/"||t==="/enerGym/"?"index.html":t.split("/").pop(),r=s=>{document.querySelectorAll(s).forEach(a=>{const d=a.getAttribute("href");if(d.includes(e)){const U=d.includes("index.html")?"active-home":"active-favorites";a.classList.add(U)}})};["header-menu-link","mobile-menu-link"].forEach(s=>r(`.${s}`))});const P="Transform your physique and embrace a healthier lifestyle with our comprehensive fitness and nutrition support.";let S=0;function N(){const t=document.getElementById("hero-text");t&&S<P.length&&(t.innerHTML+=P.charAt(S),S++,setTimeout(N,40))}document.addEventListener("DOMContentLoaded",N);var l;class w{constructor(e){i(this,l,void 0);A(this,l,e)}json(){return JSON.parse(o(this,l).data)}info(){return{status:JSON.parse(o(this,l).status),message:JSON.parse(o(this,l).data).message}}}l=new WeakMap;class X{constructor(e){T(this,"axiosInstance");const r={accept:"application/json","content-type":"application/json"};this.axiosInstance=new F({baseURL:e,headers:{...r}})}async get(e,r){const s=await this.axiosInstance.get(e,r);return new w(s)}async patch(e,r){const s=await this.axiosInstance.patch(e,r);return new w(s)}async post(e,r){const s=await this.axiosInstance.post(e,r);return new w(s)}}var h,c;class G{constructor(){i(this,h,"https://energyflow.b.goit.study/api/");i(this,c,new X(o(this,h)))}async get(e,r=""){return r?await o(this,c).get(e,r):await o(this,c).get(e)}async patch(e,r=""){return r?await o(this,c).patch(e,r):await o(this,c).patch(e)}async post(e,r=""){return r?await o(this,c).post(e,r):await o(this,c).post(e)}setPathParameters(e,r){let s=e;for(const n in r)s=s.replace(`{${n}}`,r[n]);return s}}h=new WeakMap,c=new WeakMap;var f,p,m,g,E,y;const L=class L extends G{constructor(){super(...arguments);i(this,f,"filters");i(this,p,"exercises");i(this,m,"exercises/{exerciseID}");i(this,g,"exercises/{exerciseID}/rating");i(this,E,"quote/");i(this,y,"subscription")}async init(){return new L}async getListExercises(r){return await this.get(o(this,f),{params:r})}async getListExercisesBySubspecies(r){return await this.get(o(this,p),{params:r})}async getQuote(){return await this.get(o(this,E))}async getExerciseById(r){return await this.get(this.setPathParameters(o(this,m),{exerciseID:r}))}async addRating(r,s){return await this.patch(this.setPathParameters(o(this,g),{exerciseID:r}),JSON.stringify(s))}async createSubscription(r){return await this.post(o(this,y),JSON.stringify(r))}};f=new WeakMap,p=new WeakMap,m=new WeakMap,g=new WeakMap,E=new WeakMap,y=new WeakMap;let I=L;function z(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function H(t){return t===new Date().setHours(0,0,0,0)}function Q(t){return new Date(t).setHours(0,0,0,0)}const V=new I,M=V.init(),u={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};function Y(t,e=u.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return;let r=x(e);if(r.length>0){let s=r.filter(n=>n._id!==t);localStorage.setItem(e,JSON.stringify(s)),s.length===0&&localStorage.removeItem(e)}}function Z(t=u.FAVORITE_EXERCISE){return x(t)}function K(t,e=u.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return!1;let r=x(e);return r.length>0?r.filter(n=>n._id===t).length>0:!1}async function $(){const t=(await(await M).getQuote()).json();t.timeStamp=Q(new Date),localStorage.setItem(u.QUOTE,JSON.stringify(t))}async function O(){if(!localStorage.getItem(u.QUOTE))await $();else{const t=JSON.parse(localStorage.getItem(u.QUOTE)).timeStamp;if(!H(t)){const s=(await(await M).getQuote()).json();s.timeStamp=Q(new Date),localStorage.setItem(u.QUOTE,JSON.stringify(s))}const{author:e,quote:r}=JSON.parse(localStorage.getItem(u.QUOTE));return{author:e,quote:r}}}function x(t){try{return JSON.parse(localStorage.getItem(t))}catch{console.error("Parsing Error")}}const _=document.querySelector(".favorites-info-container"),q=document.querySelector(".quote-info-content");document.addEventListener("DOMContentLoaded",async()=>{if(q)try{await O(),q.insertAdjacentHTML("beforeend",await C())}catch(t){console.error("Error fetching or updating the quote:",t)}else if(_)try{await O(),_.insertAdjacentHTML("beforeend",await C())}catch(t){console.error("Error fetching or updating the quote:",t)}});async function C(){const{author:t,quote:e}=await O();return`
  <p id="favorites-text">${e}</p>
  <h3 class="favorites-author">${t}</h3>
  `}export{I as E,z as f,Z as g,K as i,Y as r};
//# sourceMappingURL=quote-8910200f.js.map
