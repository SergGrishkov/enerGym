var Y=Object.defineProperty;var Z=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(Z(t,typeof e!="symbol"?e+"":e,n),n),j=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var o=(t,e,n)=>(j(t,e,"read from private field"),n?n.call(t):e.get(t)),r=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},U=(t,e,n,i)=>(j(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);import{A as K,_ as tt}from"./vendor-6fe7236c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var u;class A{constructor(e){r(this,u,void 0);U(this,u,e)}json(){return JSON.parse(o(this,u).data)}info(){return{status:JSON.parse(o(this,u).status),message:JSON.parse(o(this,u).data).message,data:JSON.parse(o(this,u).data)}}}u=new WeakMap;class et{constructor(e){$(this,"axiosInstance");const n={accept:"application/json","content-type":"application/json"};this.axiosInstance=new K({baseURL:e,headers:{...n}})}async get(e,n){const i=await this.axiosInstance.get(e,n);return new A(i)}async patch(e,n){const i=await this.axiosInstance.patch(e,n);return new A(i)}async post(e,n){const i=await this.axiosInstance.post(e,n);return new A(i)}}var E,l;class nt{constructor(){r(this,E,"https://energyflow.b.goit.study/api/");r(this,l,new et(o(this,E)))}async get(e,n=""){return n?await o(this,l).get(e,n):await o(this,l).get(e)}async patch(e,n=""){return n?await o(this,l).patch(e,n):await o(this,l).patch(e)}async post(e,n=""){return n?await o(this,l).post(e,n):await o(this,l).post(e)}setPathParameters(e,n){let i=e;for(const a in n)i=i.replace(`{${a}}`,n[a]);return i}}E=new WeakMap,l=new WeakMap;var S,w,b,L,x,I;const k=class k extends nt{constructor(){super(...arguments);r(this,S,"filters");r(this,w,"exercises");r(this,b,"exercises/{exerciseID}");r(this,L,"exercises/{exerciseID}/rating");r(this,x,"quote/");r(this,I,"subscription")}async init(){return new k}async getListExercises(n){return await this.get(o(this,S),{params:n})}async getListExercisesBySubspecies(n){return await this.get(o(this,w),{params:n})}async getQuote(){return await this.get(o(this,x))}async getExerciseById(n){return await this.get(this.setPathParameters(o(this,b),{exerciseID:n}))}async addRating(n,i){return await this.patch(this.setPathParameters(o(this,L),{exerciseID:n}),JSON.stringify(i))}async createSubscription(n){return await this.post(o(this,I),JSON.stringify(n))}};S=new WeakMap,w=new WeakMap,b=new WeakMap,L=new WeakMap,x=new WeakMap,I=new WeakMap;let v=k;function Tt(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function it(t){return t===new Date().setHours(0,0,0,0)}function Q(t){return new Date(t).setHours(0,0,0,0)}function Ot(t,e){return tt.chunk(t,e)}const at=new v,D=at.init(),d={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};function st(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))localStorage.setItem(e,JSON.stringify([t]));else{const n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}function ot(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return;let n=C(e);if(n.length>0){let i=n.filter(a=>a._id!==t);localStorage.setItem(e,JSON.stringify(i)),i.length===0&&localStorage.removeItem(e)}}function At(t=d.FAVORITE_EXERCISE){return C(t)}function F(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return!1;let n=C(e);return n.length>0?n.filter(a=>a._id===t).length>0:!1}async function rt(){const t=(await(await D).getQuote()).json();t.timeStamp=Q(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(t))}async function H(){if(!localStorage.getItem(d.QUOTE))await rt();else{const t=JSON.parse(localStorage.getItem(d.QUOTE)).timeStamp;if(!it(t)){const i=(await(await D).getQuote()).json();i.timeStamp=Q(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(i))}const{author:e,quote:n}=JSON.parse(localStorage.getItem(d.QUOTE));return{author:e,quote:n}}}function C(t){try{return JSON.parse(localStorage.getItem(t))}catch{console.error("Parsing Error")}}function ct(t){gt(),lt(t)}function lt(t){mt.dataset.exerciseId=t}const T=document.querySelector(".js-modal"),dt=document.querySelector(".js-close"),ut=document.querySelector(".mrating"),N=document.querySelector(".rating-form"),mt=document.querySelector(".js-sbutton"),q=document.querySelector(".message");dt.addEventListener("click",V);window.addEventListener("click",function(t){t.target===T&&V()});function gt(){T.classList.add("is-open")}function V(){T.classList.remove("is-open"),N.reset(),p.innerHTML=0,m(0),q.textContent="",yt()}let X,p;pt(ut);function pt(t){R(t),m(),t.classList.contains("rating-set")&&ft(t)}function R(t){X=t.querySelector(".mrating-active"),p=t.querySelector(".mrating-value")}function m(t=p.innerHTML){const e=t/.05;X.style.width=`${e}%`}function ft(t){const e=t.querySelectorAll(".mrating-item");for(let n=0;n<e.length;n+=1){const i=e[n];i.addEventListener("mouseenter",function(a){R(t),m(i.value)}),i.addEventListener("mouseleave",function(a){m()}),i.addEventListener("click",function(a){R(t);const s=(n+1).toFixed(1);p.innerHTML=s,m()})}}let vt=new v;N.addEventListener("click",ht);async function ht(t){if(t.preventDefault(),!t.target.tagName!=="BUTTON"&&t.target.tagName==="BUTTON"){if(+t.currentTarget.children[0].innerText.trim()<=0)return;const e=t.currentTarget.elements.ratbtn.dataset.exerciseId,n={};n.rate=+t.currentTarget.children[0].innerText.trim(),n.email=t.currentTarget.elements.email.value,n.review=t.currentTarget.elements.comment.value;try{const i=await vt.addRating(e,n),a=i.info();a.status===200?(T.classList.remove("is-open"),N.reset(),m(0),p.innerHTML=0,q.textContent="",Et(i.json())):q.textContent=a.message}catch(i){console.error(i)}}}const M=document.body,g=document.querySelector(".backdrop"),P=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let f;function yt(){g.classList.add("is-open")}function Et(t){f=t,t._id,g.classList.add("is-open"),M.style.overflow="hidden",window.addEventListener("keydown",h),window.addEventListener("click",y);let e;F(t._id)?e=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Remove from favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-remove-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `:e=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Add to favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-add-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `,P.innerHTML=`
    <div class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${t.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${t.name}</h2>
          

        <div class="modal-ex-rating-container rating">
          <div class="rating-value">${t.rating}</div>
          <div class="rating-body">
            <div id="rating-active" class="rating-active"></div>
              <div class="rating-items">
                 <input type="radio" class="rating-item" value="1" name="rating">
                 <input type="radio" class="rating-item" value="2" name="rating">
                 <input type="radio" class="rating-item" value="3" name="rating">
                 <input type="radio" class="rating-item" value="4" name="rating">
                 <input type="radio" class="rating-item" value="5" name="rating">
              </div>
          </div>
        </div>
          
          
         

        <div class="modal-ex-about-exercise-container">
          <ul class="about-exercise-list">
        <li>
          <h3 class="title-description">Target</h3>
          <p class="value-description">${t.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${t.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${t.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${t.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${t.burnedCalories}/${t.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${t.description}
          </p>
        </div>

        <div class="ex-modal-btn-container">
          <ul class="button ex-modal-btn-list">
            <li class="ex-modal-btn-list-item">
              ${e}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${t._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;let n,i;document.querySelector(".rating")&&s();function s(){c(),O()}function c(){n=document.querySelector("#rating-active"),i=document.querySelector(".rating-value")}function O(){const z=i.innerHTML/.05;n.style.width=`${z}%`}}function h(t){t.key==="Escape"&&(g.classList.remove("is-open"),window.removeEventListener("keydown",h),window.removeEventListener("click",y))}function y(t){console.log(t.target.classList.value),(t.target.classList.value==="close-btn"||t.target.classList.value==="modal-close-icon"||t.target.classList.value==="backdrop is-open")&&(g.classList.remove("is-open"),M.style.overflow="auto",window.removeEventListener("click",y),window.removeEventListener("keydown",h)),t.target.classList.value.includes("rating-btn")&&(g.classList.remove("is-open"),M.style.overflow="auto",ct(t.target.dataset.rating),window.removeEventListener("keydown",h),document.removeEventListener("click",y))}P.addEventListener("click",function(t){t.target.classList.contains("add-favorite")&&(F(f._id)?(ot(f._id),B(!1)):(st(f),B(!0)))});function B(t){const e=t?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",n=t?"Remove from favorites":"Add to favorites",i=P.querySelector(".js-add-remove-btn");i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${n}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${e}'></use></svg></p></button>`}const W=document.querySelector(".js-menu"),St=document.querySelector(".js-open-menu"),wt=document.querySelector(".js-close-menu"),G=()=>{const t=W.classList.toggle("is-open");document.body.style.overflow=t?"hidden":""};St.addEventListener("click",G);wt.addEventListener("click",G);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(W.classList.remove("is-open"),document.body.style.overflow="")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname,e=t==="/"||t==="/enerGym/"?"index.html":t.split("/").pop(),n=i=>{document.querySelectorAll(i).forEach(s=>{const c=s.getAttribute("href");if(c.includes(e)){const O=c.includes("index.html")?"active-home":"active-favorites";s.classList.add(O)}})};["header-menu-link","mobile-menu-link"].forEach(i=>n(`.${i}`))});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".hero-text");t&&(t.style.display="none",setTimeout(function(){t.style.display="block"},500))});const _=document.querySelector(".quote-info-content");async function bt(){const{author:t,quote:e}=await H();await J(e,"favorites-text"),await J(t,"favorites-author")}function J(t,e){return new Promise(n=>{let i=0;const a=document.createElement(e==="favorites-text"?"p":"h3");a.id=e,e==="favorites-text"?a.classList.add("quote-text"):a.classList.add("quote-author"),_.appendChild(a);function s(){i<t.length?(a.textContent+=t.charAt(i),i++,setTimeout(s,40)):n()}s()})}const Lt=new IntersectionObserver((t,e)=>{t.forEach(n=>{n.isIntersecting&&(bt(),e.unobserve(n.target))})},{threshold:.5});document.addEventListener("DOMContentLoaded",async()=>{await H(),_&&Lt.observe(_)});function qt(t,e){return Array.from({length:t}).reduce((n,i,a)=>{const s=a+1;return n+`<li class="pagination-element ${s===e?"active_pag_item":""}" value="${s}">${s}</li>`},"")}export{v as E,ot as a,Et as c,Tt as f,At as g,F as i,qt as r,Ot as s};
//# sourceMappingURL=pagination-ed53ae39.js.map
