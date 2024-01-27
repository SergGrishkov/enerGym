import{E as w,f as L}from"./assets/quote-d0d22d6c.js";import"./assets/vendor-0fffa566.js";const g=document.querySelector(".backdrop"),c=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let S="64f389465ae26083f39b17a4",l="",o={},k=new w;async function f(e){return l=e,await(await k.getExerciseById(l)).json()}async function $(e){try{const t=await f(e),s=c.querySelector(".js-add-remove-btn");let i="",r="";t&&x(t,b())?(i="./img/sprite/sprite.svg#icon-remove-favorites",r="Remove from favorites"):(i="./img/sprite/sprite.svg#icon-add-favorites",r="Add to favorites"),c.innerHTML=`<div
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
          <div class="modal-ex-rating-container">
            <p class="mod-ex-rating">${t.rating}</p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
          </div>
        </div>

        <div class="modal-ex-about-exercise-container">
          <ul class="about-exercse-list">
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
                      href='${i}'
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
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}}$(S);function v(e){e.key==="Escape"&&(g.classList.remove("is-open"),window.removeEventListener("keydown",v))}window.addEventListener("keydown",v);function h(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(g.classList.remove("is-open"),window.removeEventListener("click",h))}window.addEventListener("click",h);function b(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function m(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function x(e,t){return t.some(s=>s._id===e._id)}async function q(){try{o._id||(o=await f(l));const e=b();if(x(o,e)){const s=e.filter(i=>i._id!==o._id);m(s),p(!1),console.log("Exercise removed from favorites:",o)}else e.push(o),m(e),p(!0),console.log("Exercise added to favorites:",o)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&q()});function p(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",s=e?"Remove from favorites":"Add to favorites",i=c.querySelector(".js-add-remove-btn");console.log("isFavorite",e),i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${s}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}const d=document.getElementById("confirmationModal"),B=document.querySelector(".modal-subscribe-close-btn"),M=document.querySelector(".modal-subscribe-close-button"),I=document.querySelector(".footer-form");function n(){d.classList.remove("is-open")}B.addEventListener("click",n);M.addEventListener("click",n);document.addEventListener("keydown",function(e){e.key==="Escape"&&n()});setTimeout(n,8e3);window.addEventListener("click",function(e){e.target===d&&n()});function A(){d.classList.add("is-open")}I.addEventListener("submit",function(e){e.preventDefault();const s=document.querySelector('[name="footer-email"]').value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}).then(i=>{i.ok?A():(console.error("An error occurred when sending a request to the server:",i.statusText),alert("You are already subscribed"))}).catch(i=>{console.error("An error occurred while executing the request:",i),alert("An error occurred while executing the request")})});const u=document.querySelector(".filters-box"),y=document.getElementById("cards-list"),C=u.querySelector(".filters-list-item"),F=C.dataset.filter,T=window.innerWidth;let a;U(T);const j=`https://energyflow.b.goit.study/api/filters?filter=${F}&page=1&limit=${a}`;function U(e){return e<768?a=8:(e>=768&&e<1024,a=12),a}async function D(){try{const t=await(await fetch(j)).json();t.results&&t.results.length>0?y.innerHTML=E(t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}function O(e){u.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function _(e){if(e.target.classList.contains("filters-list-item")){O(e);const s=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=${a}`;try{const r=await(await fetch(s)).json();r.results&&r.results.length>0?y.innerHTML=E(r.results):console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}}function E(e){return e.reduce((t,s)=>t+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${s.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${L(s.name)}</h3>
      <p class="card-subtitle">${s.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",D);u.addEventListener("click",_);
//# sourceMappingURL=commonHelpers2.js.map
