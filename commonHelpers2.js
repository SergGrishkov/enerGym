import{E as k,f as M}from"./assets/quote-4a12272a.js";import"./assets/vendor-0fffa566.js";const f=document.querySelector(".backdrop"),l=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let A="64f389465ae26083f39b17a9",d="",o={},T=new k;async function p(e){return d=e,await(await T.getExerciseById(d)).json()}async function B(e){try{const t=await p(e),i=l.querySelector(".js-add-remove-btn");let r="",n="";t&&x(t,h())?(r="./img/sprite/sprite.svg#icon-remove-favorites",n="Remove from favorites"):(r="./img/sprite/sprite.svg#icon-add-favorites",n="Add to favorites"),l.innerHTML=`<div
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
                ${n}
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='${r}'
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
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let n=function(){S(),q()},S=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},q=function(){console.log(i.innerHTML);const $=i.innerHTML/.05;t.style.width=`${$}%`},t,i;document.querySelector(".rating")&&n()}}B(A);function y(e){e.key==="Escape"&&(f.classList.remove("is-open"),window.removeEventListener("keydown",y))}window.addEventListener("keydown",y);function b(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(f.classList.remove("is-open"),window.removeEventListener("click",b))}window.addEventListener("click",b);function h(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function g(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function x(e,t){return t.some(i=>i._id===e._id)}async function I(){try{o._id||(o=await p(d));const e=h();if(x(o,e)){const i=e.filter(r=>r._id!==o._id);g(i),v(!1),console.log("Exercise removed from favorites:",o)}else e.push(o),g(e),v(!0),console.log("Exercise added to favorites:",o)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&I()});function v(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",r=l.querySelector(".js-add-remove-btn");console.log("isFavorite",e),r.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let E,c;const C=document.querySelector(".rating");C&&F();function F(){H(),j()}function H(){E=document.querySelector("#rating-active"),c=document.querySelector(".rating-value"),console.log("value",c.innerHTML)}function j(){console.log(c.innerHTML);const e=c.innerHTML/.05;E.style.width=`${e}%`}const u=document.getElementById("confirmationModal"),R=document.querySelector(".modal-subscribe-close-btn"),U=document.querySelector(".modal-subscribe-close-button"),D=document.querySelector(".footer-form");function a(){u.classList.remove("is-open")}R.addEventListener("click",a);U.addEventListener("click",a);document.addEventListener("keydown",function(e){e.key==="Escape"&&a()});setTimeout(a,8e3);window.addEventListener("click",function(e){e.target===u&&a()});function O(){u.classList.add("is-open")}D.addEventListener("submit",function(e){e.preventDefault();const i=document.querySelector('[name="footer-email"]').value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then(r=>{r.ok?O():(console.error("An error occurred when sending a request to the server:",r.statusText),alert("You are already subscribed"))}).catch(r=>{console.error("An error occurred while executing the request:",r),alert("An error occurred while executing the request")})});const m=document.querySelector(".filters-box"),w=document.getElementById("cards-list"),_=m.querySelector(".filters-list-item"),W=_.dataset.filter,N=window.innerWidth;let s;V(N);const P=`https://energyflow.b.goit.study/api/filters?filter=${W}&page=1&limit=${s}`;function V(e){return e<768?s=8:(e>=768&&e<1024,s=12),s}async function J(){try{const t=await(await fetch(P)).json();t.results&&t.results.length>0?w.innerHTML=L(t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}function z(e){m.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function G(e){if(e.target.classList.contains("filters-list-item")){z(e);const i=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=${s}`;try{const n=await(await fetch(i)).json();n.results&&n.results.length>0?w.innerHTML=L(n.results):console.error("No exercises found.")}catch(r){console.error("Error fetching exercises:",r)}}}function L(e){return e.reduce((t,i)=>t+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${M(i.name)}</h3>
      <p class="card-subtitle">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",J);m.addEventListener("click",G);
//# sourceMappingURL=commonHelpers2.js.map
