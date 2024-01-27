import{E as T,f as R}from"./assets/quote-89129620.js";import"./assets/vendor-0fffa566.js";const k=document.querySelector(".backdrop"),g=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let _="64f389465ae26083f39b17a9",v="",s={},j=new T;async function $(e){return v=e,await(await j.getExerciseById(v)).json()}async function P(e){try{const t=await $(e),i=g.querySelector(".js-add-remove-btn");let n="",o="";t&&B(t,A())?(n="./img/sprite/sprite.svg#icon-remove-favorites",o="Remove from favorites"):(n="./img/sprite/sprite.svg#icon-add-favorites",o="Add to favorites"),g.innerHTML=`<div
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
                ${o}
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='${n}'
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
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let o=function(){m(),r()},m=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},r=function(){console.log(i.innerHTML);const h=i.innerHTML/.05;t.style.width=`${h}%`},t,i;document.querySelector(".rating")&&o()}}P(_);function q(e){e.key==="Escape"&&(k.classList.remove("is-open"),window.removeEventListener("keydown",q))}window.addEventListener("keydown",q);function M(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(k.classList.remove("is-open"),window.removeEventListener("click",M))}window.addEventListener("click",M);function A(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function E(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function B(e,t){return t.some(i=>i._id===e._id)}async function O(){try{s._id||(s=await $(v));const e=A();if(B(s,e)){const i=e.filter(n=>n._id!==s._id);E(i),w(!1),console.log("Exercise removed from favorites:",s)}else e.push(s),E(e),w(!0),console.log("Exercise added to favorites:",s)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&O()});function w(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",n=g.querySelector(".js-add-remove-btn");console.log("isFavorite",e),n.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let C,l;const D=document.querySelector(".rating");D&&N();function N(){U(),W()}function U(){C=document.querySelector("#rating-active"),l=document.querySelector(".rating-value"),console.log("value",l.innerHTML)}function W(){console.log(l.innerHTML);const e=l.innerHTML/.05;C.style.width=`${e}%`}const b=document.getElementById("confirmationModal"),V=document.querySelector(".modal-subscribe-close-btn"),J=document.querySelector(".modal-subscribe-close-button"),z=document.querySelector(".footer-form"),f=document.getElementById("modalSubscribeText");let u=!1;function c(){b.classList.remove("is-open");const e="You will receive notifications about new exercises.";f.textContent=e,u=!1}V.addEventListener("click",c);J.addEventListener("click",c);document.addEventListener("keydown",function(e){u&&e.key==="Escape"&&c()});window.addEventListener("click",function(e){u&&e.target===b&&c()});function L(){b.classList.add("is-open"),u=!0,setTimeout(c,8e3)}function Y(){if(f){const e="You are already subscribed";f.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}z.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector('[name="footer-email"]'),i=t.value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then(n=>{t.value="",n.ok||(console.error("An error occurred when sending a request to the server:",n.statusText),Y()),L()}).catch(n=>{console.error("An error occurred while executing the request:",n),alert("An error occurred while executing the request")})});const x=document.querySelector(".filters-box"),y=document.getElementById("cards-list"),G=x.querySelector(".filters-list-item"),K=G.dataset.filter,S=document.querySelector(".pagination-list"),Q=window.innerWidth;let a=null,X=null;ee(Q);let F=new T;const d={filter:K,page:X,limit:a};async function Z(){let e=await F.init();try{const i=await(await e.getListExercises(d)).json();i.results&&i.results.length>0?(y.innerHTML=H(i.results),I(i.totalPages,1)):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function ee(e){return e<768?a=8:(e>=768&&e<1024,a=12),a}function I(e,t){S.innerHTML="";const i=Array.from({length:e}).reduce((n,o,m)=>{const r=m+1;return n+`<li class="pagination-element ${r===t?"active_pag_item":""}" value="${r}">${r}</li>`},"");S.innerHTML=i}function te(e){x.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function ie(e){if(e.target.classList.contains("filters-list-item")){te(e);const t=e.target.dataset.filter;d.filter=t;let i=await F.init();try{const o=await(await i.getListExercises(d)).json();o.results&&o.results.length>0?(y.innerHTML=H(o.results),I(o.totalPages,1)):console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}}async function ne(e){const t=e.target.dataset.name;t&&getExercisesFromApi(d.filter,t)}function H(e){return e.reduce((t,i)=>t+`<li class="cards-list-item" data-name="${i.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-name="${i.name}">${R(i.name)}</h3>
      <p class="card-subtitle" data-name="${i.name}">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",Z);x.addEventListener("click",ie);y.addEventListener("click",ne);const p=document.querySelector(".back-to-top");p.addEventListener("click",oe);window.onscroll=()=>{se()};function oe(){window.scrollTo({top:0,behavior:"smooth"})}function se(){document.body.scrollTop>20||document.documentElement.scrollTop>20?p.classList.remove("is-hidden"):p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
