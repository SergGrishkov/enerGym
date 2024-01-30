var H=Object.defineProperty;var G=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var N=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n),P=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var o=(t,e,n)=>(P(t,e,"read from private field"),n?n.call(t):e.get(t)),r=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},k=(t,e,n,i)=>(P(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);import{A as z,_ as Y}from"./vendor-6fe7236c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var u;class O{constructor(e){r(this,u,void 0);k(this,u,e)}json(){return JSON.parse(o(this,u).data)}info(){return{status:JSON.parse(o(this,u).status),message:JSON.parse(o(this,u).data).message,data:JSON.parse(o(this,u).data)}}}u=new WeakMap;class Z{constructor(e){N(this,"axiosInstance");const n={accept:"application/json","content-type":"application/json"};this.axiosInstance=new z({baseURL:e,headers:{...n}})}async get(e,n){const i=await this.axiosInstance.get(e,n);return new O(i)}async patch(e,n){const i=await this.axiosInstance.patch(e,n);return new O(i)}async post(e,n){const i=await this.axiosInstance.post(e,n);return new O(i)}}var y,l;class K{constructor(){r(this,y,"https://energyflow.b.goit.study/api/");r(this,l,new Z(o(this,y)))}async get(e,n=""){return n?await o(this,l).get(e,n):await o(this,l).get(e)}async patch(e,n=""){return n?await o(this,l).patch(e,n):await o(this,l).patch(e)}async post(e,n=""){return n?await o(this,l).post(e,n):await o(this,l).post(e)}setPathParameters(e,n){let i=e;for(const a in n)i=i.replace(`{${a}}`,n[a]);return i}}y=new WeakMap,l=new WeakMap;var E,S,w,b,L,I;const C=class C extends K{constructor(){super(...arguments);r(this,E,"filters");r(this,S,"exercises");r(this,w,"exercises/{exerciseID}");r(this,b,"exercises/{exerciseID}/rating");r(this,L,"quote/");r(this,I,"subscription")}async init(){return new C}async getListExercises(n){return await this.get(o(this,E),{params:n})}async getListExercisesBySubspecies(n){return await this.get(o(this,S),{params:n})}async getQuote(){return await this.get(o(this,L))}async getExerciseById(n){return await this.get(this.setPathParameters(o(this,w),{exerciseID:n}))}async addRating(n,i){return await this.patch(this.setPathParameters(o(this,b),{exerciseID:n}),JSON.stringify(i))}async createSubscription(n){return await this.post(o(this,I),JSON.stringify(n))}};E=new WeakMap,S=new WeakMap,w=new WeakMap,b=new WeakMap,L=new WeakMap,I=new WeakMap;let p=C;function xt(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function tt(t){return t===new Date().setHours(0,0,0,0)}function U(t){return new Date(t).setHours(0,0,0,0)}function Ot(t,e){return Y.chunk(t,e)}const et=new p,B=et.init(),d={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};function nt(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))localStorage.setItem(e,JSON.stringify([t]));else{const n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}function it(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return;let n=R(e);if(n.length>0){let i=n.filter(a=>a._id!==t);localStorage.setItem(e,JSON.stringify(i)),i.length===0&&localStorage.removeItem(e)}}function Tt(t=d.FAVORITE_EXERCISE){return R(t)}function J(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return!1;let n=R(e);return n.length>0?n.filter(a=>a._id===t).length>0:!1}async function at(){const t=(await(await B).getQuote()).json();t.timeStamp=U(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(t))}async function st(){if(!localStorage.getItem(d.QUOTE))await at();else{const t=JSON.parse(localStorage.getItem(d.QUOTE)).timeStamp;if(!tt(t)){const i=(await(await B).getQuote()).json();i.timeStamp=U(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(i))}const{author:e,quote:n}=JSON.parse(localStorage.getItem(d.QUOTE));return{author:e,quote:n}}}function R(t){try{return JSON.parse(localStorage.getItem(t))}catch{console.error("Parsing Error")}}function ot(t){gt(),rt(t)}function rt(t){ut.dataset.exerciseId=t}const Q=document.querySelector(".js-modal"),ct=document.querySelector(".js-close"),lt=document.querySelector(".mrating"),dt=document.querySelector(".rating-form"),ut=document.querySelector(".js-sbutton"),mt=document.querySelector(".message");function gt(){Q.classList.add("is-open")}function D(){Q.classList.remove("is-open")}ct.addEventListener("click",D);let F,_;pt(lt);function pt(t){T(t),m(),t.classList.contains("rating-set")&&ft(t)}function T(t){F=t.querySelector(".mrating-active"),_=t.querySelector(".mrating-value")}function m(t=_.innerHTML){const e=t/.05;F.style.width=`${e}%`}function ft(t){const e=t.querySelectorAll(".mrating-item");for(let n=0;n<e.length;n+=1){const i=e[n];i.addEventListener("mouseenter",function(a){T(t),m(i.value)}),i.addEventListener("mouseleave",function(a){m()}),i.addEventListener("click",function(a){T(t);const s=n+1;_.innerHTML=s,m()})}}let vt=new p;dt.addEventListener("click",ht);async function ht(t){if(t.preventDefault(),!t.target.tagName!=="BUTTON"&&t.target.tagName==="BUTTON"){if(+t.currentTarget.children[0].innerText.trim()<=0)return;const e=t.currentTarget.elements.ratbtn.dataset.exerciseId,n={};n.rate=+t.currentTarget.children[0].innerText.trim(),n.email=t.currentTarget.elements.email.value,n.review=t.currentTarget.elements.comment.value;try{const i=await vt.addRating(e,n),a=i.info();a.status===200?(D(),yt(i.json())):mt.textContent=a.message}catch(i){console.error(i)}}}const A=document.body,f=document.querySelector(".backdrop"),M=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let g;function yt(t){g=t,t._id,f.classList.add("is-open"),A.style.overflow="hidden",window.addEventListener("keydown",v),window.addEventListener("click",h);let e;J(t._id)?e=`
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
      `,M.innerHTML=`
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
      </div>`;let n,i;document.querySelector(".rating")&&s();function s(){c(),x()}function c(){n=document.querySelector("#rating-active"),i=document.querySelector(".rating-value")}function x(){const W=i.innerHTML/.05;n.style.width=`${W}%`}}function v(t){t.key==="Escape"&&(f.classList.remove("is-open"),window.removeEventListener("keydown",v),window.removeEventListener("click",h))}function h(t){(t.target.classList.value==="modal-close-icon"||t.target.classList.value==="backdrop is-open")&&(f.classList.remove("is-open"),A.style.overflow="auto",window.removeEventListener("click",h),window.removeEventListener("keydown",v)),t.target.classList.value.includes("rating-btn")&&(f.classList.remove("is-open"),A.style.overflow="auto",ot(t.target.dataset.rating),window.removeEventListener("keydown",v),document.removeEventListener("click",h))}M.addEventListener("click",function(t){t.target.classList.contains("add-favorite")&&(J(g._id)?(it(g._id),$(!1)):(nt(g),$(!0)))});function $(t){const e=t?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",n=t?"Remove from favorites":"Add to favorites",i=M.querySelector(".js-add-remove-btn");i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${n}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${e}'></use></svg></p></button>`}const V=document.querySelector(".js-menu"),Et=document.querySelector(".js-open-menu"),St=document.querySelector(".js-close-menu"),X=()=>{const t=V.classList.toggle("is-open");document.body.style.overflow=t?"hidden":""};Et.addEventListener("click",X);St.addEventListener("click",X);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(V.classList.remove("is-open"),document.body.style.overflow="")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname,e=t==="/"||t==="/enerGym/"?"index.html":t.split("/").pop(),n=i=>{document.querySelectorAll(i).forEach(s=>{const c=s.getAttribute("href");if(c.includes(e)){const x=c.includes("index.html")?"active-home":"active-favorites";s.classList.add(x)}})};["header-menu-link","mobile-menu-link"].forEach(i=>n(`.${i}`))});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".hero-text");t&&(t.style.display="none",setTimeout(function(){t.style.display="block"},500))});const q=document.querySelector(".quote-info-content");async function wt(){const{author:t,quote:e}=await st();await j(e,"favorites-text"),await j(t,"favorites-author")}function j(t,e){return new Promise(n=>{let i=0;const a=document.createElement(e==="favorites-text"?"p":"h3");a.id=e,e==="favorites-text"?a.classList.add("quote-text"):a.classList.add("quote-author"),q.appendChild(a);function s(){i<t.length?(a.textContent+=t.charAt(i),i++,setTimeout(s,40)):n()}s()})}const bt=new IntersectionObserver((t,e)=>{t.forEach(n=>{n.isIntersecting&&(wt(),e.unobserve(n.target))})},{threshold:.5});document.addEventListener("DOMContentLoaded",()=>{q&&bt.observe(q)});function At(t,e){return Array.from({length:t}).reduce((n,i,a)=>{const s=a+1;return n+`<li class="pagination-element ${s===e?"active_pag_item":""}" value="${s}">${s}</li>`},"")}export{p as E,it as a,yt as c,xt as f,Tt as g,J as i,At as r,Ot as s};
//# sourceMappingURL=pagination-e63cb1b4.js.map
