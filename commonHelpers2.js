import{E as $,f as M}from"./assets/quote-e59d53e5.js";import"./assets/vendor-0fffa566.js";const p=document.querySelector(".backdrop"),l=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let A="64f389465ae26083f39b17a9",d="",n={},B=new $;async function b(e){return d=e,await(await B.getExerciseById(d)).json()}async function I(e){try{const t=await b(e),i=l.querySelector(".js-add-remove-btn");let o="",r="";t&&E(t,x())?(o="./img/sprite/sprite.svg#icon-remove-favorites",r="Remove from favorites"):(o="./img/sprite/sprite.svg#icon-add-favorites",r="Add to favorites"),l.innerHTML=`<div
        class="modal-ex-img-container"
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
          

        <div class="rating">
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
              <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                ${r}
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='${o}'
                    ></use>
                  </svg>
                </p>
              </button>
            </li>
            <li class="ex-modal-btn-list-item">
              <button class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let r=function(){k(),T()},k=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},T=function(){console.log(i.innerHTML);const q=i.innerHTML/.05;t.style.width=`${q}%`},t,i;document.querySelector(".rating")&&r()}}I(A);function y(e){e.key==="Escape"&&(p.classList.remove("is-open"),window.removeEventListener("keydown",y))}window.addEventListener("keydown",y);function h(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(p.classList.remove("is-open"),window.removeEventListener("click",h))}window.addEventListener("click",h);function x(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function f(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function E(e,t){return t.some(i=>i._id===e._id)}async function C(){try{n._id||(n=await b(d));const e=x();if(E(n,e)){const i=e.filter(o=>o._id!==n._id);f(i),g(!1),console.log("Exercise removed from favorites:",n)}else e.push(n),f(e),g(!0),console.log("Exercise added to favorites:",n)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&C()});function g(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",o=l.querySelector(".js-add-remove-btn");console.log("isFavorite",e),o.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let w,c;const F=document.querySelector(".rating");F&&H();function H(){j(),R()}function j(){w=document.querySelector("#rating-active"),c=document.querySelector(".rating-value"),console.log("value",c.innerHTML)}function R(){console.log(c.innerHTML);const e=c.innerHTML/.05;w.style.width=`${e}%`}const m=document.getElementById("confirmationModal"),U=document.querySelector(".modal-subscribe-close-btn"),D=document.querySelector(".modal-subscribe-close-button"),O=document.querySelector(".footer-form");function a(){m.classList.remove("is-open")}U.addEventListener("click",a);D.addEventListener("click",a);document.addEventListener("keydown",function(e){e.key==="Escape"&&a()});setTimeout(a,8e3);window.addEventListener("click",function(e){e.target===m&&a()});function _(){m.classList.add("is-open")}O.addEventListener("submit",function(e){e.preventDefault();const i=document.querySelector('[name="footer-email"]').value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then(o=>{o.ok?_():(console.error("An error occurred when sending a request to the server:",o.statusText),alert("You are already subscribed"))}).catch(o=>{console.error("An error occurred while executing the request:",o),alert("An error occurred while executing the request")})});const v=document.querySelector(".filters-box"),L=document.getElementById("cards-list"),W=v.querySelector(".filters-list-item"),N=W.dataset.filter,P=window.innerWidth;let s;J(P);const V=`https://energyflow.b.goit.study/api/filters?filter=${N}&page=1&limit=${s}`;function J(e){return e<768?s=8:(e>=768&&e<1024,s=12),s}async function z(){try{const t=await(await fetch(V)).json();t.results&&t.results.length>0?L.innerHTML=S(t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}function G(e){v.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function Y(e){if(e.target.classList.contains("filters-list-item")){G(e);const i=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=${s}`;try{const r=await(await fetch(i)).json();r.results&&r.results.length>0?L.innerHTML=S(r.results):console.error("No exercises found.")}catch(o){console.error("Error fetching exercises:",o)}}}function S(e){return e.reduce((t,i)=>t+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${M(i.name)}</h3>
      <p class="card-subtitle">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",z);v.addEventListener("click",Y);const u=document.querySelector(".back-to-top");u.addEventListener("click",K);window.onscroll=()=>{Q()};function K(){window.scrollTo({top:0,behavior:"smooth"})}function Q(){document.body.scrollTop>20||document.documentElement.scrollTop>20?u.classList.remove("is-hidden"):u.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
