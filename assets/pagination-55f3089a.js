var z=Object.defineProperty;var Y=(t,e,n)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>(Y(t,typeof e!="symbol"?e+"":e,n),n),$=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var o=(t,e,n)=>($(t,e,"read from private field"),n?n.call(t):e.get(t)),r=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},j=(t,e,n,i)=>($(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);import{A as Z,_ as K}from"./vendor-6fe7236c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var u;class T{constructor(e){r(this,u,void 0);j(this,u,e)}json(){return JSON.parse(o(this,u).data)}info(){return{status:JSON.parse(o(this,u).status),message:JSON.parse(o(this,u).data).message,data:JSON.parse(o(this,u).data)}}}u=new WeakMap;class tt{constructor(e){k(this,"axiosInstance");const n={accept:"application/json","content-type":"application/json"};this.axiosInstance=new Z({baseURL:e,headers:{...n}})}async get(e,n){const i=await this.axiosInstance.get(e,n);return new T(i)}async patch(e,n){const i=await this.axiosInstance.patch(e,n);return new T(i)}async post(e,n){const i=await this.axiosInstance.post(e,n);return new T(i)}}var y,l;class et{constructor(){r(this,y,"https://energyflow.b.goit.study/api/");r(this,l,new tt(o(this,y)))}async get(e,n=""){return n?await o(this,l).get(e,n):await o(this,l).get(e)}async patch(e,n=""){return n?await o(this,l).patch(e,n):await o(this,l).patch(e)}async post(e,n=""){return n?await o(this,l).post(e,n):await o(this,l).post(e)}setPathParameters(e,n){let i=e;for(const a in n)i=i.replace(`{${a}}`,n[a]);return i}}y=new WeakMap,l=new WeakMap;var E,S,w,b,L,x;const P=class P extends et{constructor(){super(...arguments);r(this,E,"filters");r(this,S,"exercises");r(this,w,"exercises/{exerciseID}");r(this,b,"exercises/{exerciseID}/rating");r(this,L,"quote/");r(this,x,"subscription")}async init(){return new P}async getListExercises(n){return await this.get(o(this,E),{params:n})}async getListExercisesBySubspecies(n){return await this.get(o(this,S),{params:n})}async getQuote(){return await this.get(o(this,L))}async getExerciseById(n){return await this.get(this.setPathParameters(o(this,w),{exerciseID:n}))}async addRating(n,i){return await this.patch(this.setPathParameters(o(this,b),{exerciseID:n}),JSON.stringify(i))}async createSubscription(n){return await this.post(o(this,x),JSON.stringify(n))}};E=new WeakMap,S=new WeakMap,w=new WeakMap,b=new WeakMap,L=new WeakMap,x=new WeakMap;let f=P;function Ot(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function nt(t){return t===new Date().setHours(0,0,0,0)}function J(t){return new Date(t).setHours(0,0,0,0)}function Tt(t,e){return K.chunk(t,e)}const it=new f,Q=it.init(),d={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};function at(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))localStorage.setItem(e,JSON.stringify([t]));else{const n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}function st(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return;let n=M(e);if(n.length>0){let i=n.filter(a=>a._id!==t);localStorage.setItem(e,JSON.stringify(i)),i.length===0&&localStorage.removeItem(e)}}function At(t=d.FAVORITE_EXERCISE){return M(t)}function D(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return!1;let n=M(e);return n.length>0?n.filter(a=>a._id===t).length>0:!1}async function ot(){const t=(await(await Q).getQuote()).json();t.timeStamp=J(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(t))}async function F(){if(!localStorage.getItem(d.QUOTE))await ot();else{const t=JSON.parse(localStorage.getItem(d.QUOTE)).timeStamp;if(!nt(t)){const i=(await(await Q).getQuote()).json();i.timeStamp=J(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(i))}const{author:e,quote:n}=JSON.parse(localStorage.getItem(d.QUOTE));return{author:e,quote:n}}}function M(t){try{return JSON.parse(localStorage.getItem(t))}catch{console.error("Parsing Error")}}function rt(t){gt(),ct(t)}function ct(t){ut.dataset.exerciseId=t}const I=document.querySelector(".js-modal"),lt=document.querySelector(".js-close"),dt=document.querySelector(".mrating"),_=document.querySelector(".rating-form"),ut=document.querySelector(".js-sbutton"),mt=document.querySelector(".message");lt.addEventListener("click",V);window.addEventListener("click",function(t){t.target===I&&V()});function gt(){I.classList.add("is-open")}function V(){I.classList.remove("is-open"),_.reset(),yt()}let X,C;pt(dt);function pt(t){A(t),g(),t.classList.contains("rating-set")&&ft(t)}function A(t){X=t.querySelector(".mrating-active"),C=t.querySelector(".mrating-value")}function g(t=C.innerHTML){const e=t/.05;X.style.width=`${e}%`}function ft(t){const e=t.querySelectorAll(".mrating-item");for(let n=0;n<e.length;n+=1){const i=e[n];i.addEventListener("mouseenter",function(a){A(t),g(i.value)}),i.addEventListener("mouseleave",function(a){g()}),i.addEventListener("click",function(a){A(t);const s=(n+1).toFixed(1);C.innerHTML=s,g()})}}let vt=new f;_.addEventListener("click",ht);async function ht(t){if(t.preventDefault(),!t.target.tagName!=="BUTTON"&&t.target.tagName==="BUTTON"){if(+t.currentTarget.children[0].innerText.trim()<=0)return;const e=t.currentTarget.elements.ratbtn.dataset.exerciseId,n={};n.rate=+t.currentTarget.children[0].innerText.trim(),n.email=t.currentTarget.elements.email.value,n.review=t.currentTarget.elements.comment.value;try{const i=await vt.addRating(e,n),a=i.info();a.status===200?(I.classList.remove("is-open"),_.reset(),Et(i.json())):mt.textContent=a.message}catch(i){console.error(i)}}}const q=document.body,m=document.querySelector(".backdrop"),N=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let p;function yt(){m.classList.add("is-open")}function Et(t){p=t,t._id,m.classList.add("is-open"),q.style.overflow="hidden",window.addEventListener("keydown",v),window.addEventListener("click",h);let e;D(t._id)?e=`
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
      `,N.innerHTML=`
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
      </div>`;let n,i;document.querySelector(".rating")&&s();function s(){c(),O()}function c(){n=document.querySelector("#rating-active"),i=document.querySelector(".rating-value")}function O(){const G=i.innerHTML/.05;n.style.width=`${G}%`}}function v(t){t.key==="Escape"&&(m.classList.remove("is-open"),window.removeEventListener("keydown",v),window.removeEventListener("click",h))}function h(t){(t.target.classList.value==="modal-close-icon"||t.target.classList.value==="backdrop is-open")&&(m.classList.remove("is-open"),q.style.overflow="auto",window.removeEventListener("click",h),window.removeEventListener("keydown",v)),t.target.classList.value.includes("rating-btn")&&(m.classList.remove("is-open"),q.style.overflow="auto",rt(t.target.dataset.rating),window.removeEventListener("keydown",v),document.removeEventListener("click",h))}N.addEventListener("click",function(t){t.target.classList.contains("add-favorite")&&(D(p._id)?(st(p._id),U(!1)):(at(p),U(!0)))});function U(t){const e=t?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",n=t?"Remove from favorites":"Add to favorites",i=N.querySelector(".js-add-remove-btn");i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${n}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${e}'></use></svg></p></button>`}const W=document.querySelector(".js-menu"),St=document.querySelector(".js-open-menu"),wt=document.querySelector(".js-close-menu"),H=()=>{const t=W.classList.toggle("is-open");document.body.style.overflow=t?"hidden":""};St.addEventListener("click",H);wt.addEventListener("click",H);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(W.classList.remove("is-open"),document.body.style.overflow="")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname,e=t==="/"||t==="/enerGym/"?"index.html":t.split("/").pop(),n=i=>{document.querySelectorAll(i).forEach(s=>{const c=s.getAttribute("href");if(c.includes(e)){const O=c.includes("index.html")?"active-home":"active-favorites";s.classList.add(O)}})};["header-menu-link","mobile-menu-link"].forEach(i=>n(`.${i}`))});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".hero-text");t&&(t.style.display="none",setTimeout(function(){t.style.display="block"},500))});const R=document.querySelector(".quote-info-content");async function bt(){const{author:t,quote:e}=await F();await B(e,"favorites-text"),await B(t,"favorites-author")}function B(t,e){return new Promise(n=>{let i=0;const a=document.createElement(e==="favorites-text"?"p":"h3");a.id=e,e==="favorites-text"?a.classList.add("quote-text"):a.classList.add("quote-author"),R.appendChild(a);function s(){i<t.length?(a.textContent+=t.charAt(i),i++,setTimeout(s,40)):n()}s()})}const Lt=new IntersectionObserver((t,e)=>{t.forEach(n=>{n.isIntersecting&&(bt(),e.unobserve(n.target))})},{threshold:.5});document.addEventListener("DOMContentLoaded",async()=>{await F(),R&&Lt.observe(R)});function qt(t,e){return Array.from({length:t}).reduce((n,i,a)=>{const s=a+1;return n+`<li class="pagination-element ${s===e?"active_pag_item":""}" value="${s}">${s}</li>`},"")}export{f as E,st as a,Et as c,Ot as f,At as g,D as i,qt as r,Tt as s};
//# sourceMappingURL=pagination-55f3089a.js.map
