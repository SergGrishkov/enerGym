import{E as A,f as B}from"./assets/quote-1e984866.js";import"./assets/vendor-0fffa566.js";const y=document.querySelector(".backdrop"),l=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let I="64f389465ae26083f39b17a9",d="",r={},C=new A;async function h(e){return d=e,await(await C.getExerciseById(d)).json()}async function F(e){try{const t=await h(e),i=l.querySelector(".js-add-remove-btn");let o="",n="";t&&L(t,w())?(o="./img/sprite/sprite.svg#icon-remove-favorites",n="Remove from favorites"):(o="./img/sprite/sprite.svg#icon-add-favorites",n="Add to favorites"),l.innerHTML=`<div
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
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let n=function(){q(),$()},q=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},$=function(){console.log(i.innerHTML);const M=i.innerHTML/.05;t.style.width=`${M}%`},t,i;document.querySelector(".rating")&&n()}}F(I);function x(e){e.key==="Escape"&&(y.classList.remove("is-open"),window.removeEventListener("keydown",x))}window.addEventListener("keydown",x);function E(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(y.classList.remove("is-open"),window.removeEventListener("click",E))}window.addEventListener("click",E);function w(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function g(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function L(e,t){return t.some(i=>i._id===e._id)}async function H(){try{r._id||(r=await h(d));const e=w();if(L(r,e)){const i=e.filter(o=>o._id!==r._id);g(i),p(!1),console.log("Exercise removed from favorites:",r)}else e.push(r),g(e),p(!0),console.log("Exercise added to favorites:",r)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&H()});function p(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",o=l.querySelector(".js-add-remove-btn");console.log("isFavorite",e),o.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let S,c;const j=document.querySelector(".rating");j&&R();function R(){U(),D()}function U(){S=document.querySelector("#rating-active"),c=document.querySelector(".rating-value"),console.log("value",c.innerHTML)}function D(){console.log(c.innerHTML);const e=c.innerHTML/.05;S.style.width=`${e}%`}const f=document.getElementById("confirmationModal"),O=document.querySelector(".modal-subscribe-close-btn"),_=document.querySelector(".modal-subscribe-close-button"),W=document.querySelector(".footer-form"),u=document.getElementById("modalSubscribeText");function a(){f.classList.remove("is-open");const e="You will receive notifications about new exercises.";u.textContent=e}O.addEventListener("click",a);_.addEventListener("click",a);document.addEventListener("keydown",function(e){e.key==="Escape"&&a()});setTimeout(a,8e3);window.addEventListener("click",function(e){e.target===f&&a()});function b(){f.classList.add("is-open")}function N(){if(u){const e="You are already subscribed";u.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}W.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector('[name="footer-email"]'),i=t.value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then(o=>{o.ok?(t.value="",b()):(console.error("An error occurred when sending a request to the server:",o.statusText),N(),t.value="",b())}).catch(o=>{console.error("An error occurred while executing the request:",o),alert("An error occurred while executing the request")})});const v=document.querySelector(".filters-box"),T=document.getElementById("cards-list"),P=v.querySelector(".filters-list-item"),V=P.dataset.filter,J=window.innerWidth;let s;Y(J);const z=`https://energyflow.b.goit.study/api/filters?filter=${V}&page=1&limit=${s}`;function Y(e){return e<768?s=8:(e>=768&&e<1024,s=12),s}async function G(){try{const t=await(await fetch(z)).json();t.results&&t.results.length>0?T.innerHTML=k(t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}function K(e){v.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function Q(e){if(e.target.classList.contains("filters-list-item")){K(e);const i=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=${s}`;try{const n=await(await fetch(i)).json();n.results&&n.results.length>0?T.innerHTML=k(n.results):console.error("No exercises found.")}catch(o){console.error("Error fetching exercises:",o)}}}function k(e){return e.reduce((t,i)=>t+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${B(i.name)}</h3>
      <p class="card-subtitle">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",G);v.addEventListener("click",Q);const m=document.querySelector(".back-to-top");m.addEventListener("click",X);window.onscroll=()=>{Z()};function X(){window.scrollTo({top:0,behavior:"smooth"})}function Z(){document.body.scrollTop>20||document.documentElement.scrollTop>20?m.classList.remove("is-hidden"):m.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
