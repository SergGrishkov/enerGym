import{E as S,f as H}from"./assets/quote-ec7c8bac.js";import"./assets/vendor-0fffa566.js";const T=document.querySelector(".backdrop"),m=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let R="64f389465ae26083f39b17a9",g="",r={},_=new S;async function k(e){return g=e,await(await _.getExerciseById(g)).json()}async function j(e){try{const t=await k(e),i=m.querySelector(".js-add-remove-btn");let n="",o="";t&&A(t,M())?(n="./img/sprite/sprite.svg#icon-remove-favorites",o="Remove from favorites"):(n="./img/sprite/sprite.svg#icon-add-favorites",o="Add to favorites"),m.innerHTML=`<div
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
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let o=function(){u(),s()},u=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},s=function(){console.log(i.innerHTML);const y=i.innerHTML/.05;t.style.width=`${y}%`},t,i;document.querySelector(".rating")&&o()}}j(R);function $(e){e.key==="Escape"&&(T.classList.remove("is-open"),window.removeEventListener("keydown",$))}window.addEventListener("keydown",$);function q(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(T.classList.remove("is-open"),window.removeEventListener("click",q))}window.addEventListener("click",q);function M(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function h(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function A(e,t){return t.some(i=>i._id===e._id)}async function P(){try{r._id||(r=await k(g));const e=M();if(A(r,e)){const i=e.filter(n=>n._id!==r._id);h(i),E(!1),console.log("Exercise removed from favorites:",r)}else e.push(r),h(e),E(!0),console.log("Exercise added to favorites:",r)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&P()});function E(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",n=m.querySelector(".js-add-remove-btn");console.log("isFavorite",e),n.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let B,l;const D=document.querySelector(".rating");D&&N();function N(){O(),U()}function O(){B=document.querySelector("#rating-active"),l=document.querySelector(".rating-value"),console.log("value",l.innerHTML)}function U(){console.log(l.innerHTML);const e=l.innerHTML/.05;B.style.width=`${e}%`}const p=document.getElementById("confirmationModal"),W=document.querySelector(".modal-subscribe-close-btn"),V=document.querySelector(".modal-subscribe-close-button"),J=document.querySelector(".footer-form"),v=document.getElementById("modalSubscribeText");function c(){p.classList.remove("is-open");const e="You will receive notifications about new exercises.";v.textContent=e}W.addEventListener("click",c);V.addEventListener("click",c);document.addEventListener("keydown",function(e){e.key==="Escape"&&c()});setTimeout(c,8e3);window.addEventListener("click",function(e){e.target===p&&c()});function w(){p.classList.add("is-open")}function z(){if(v){const e="You are already subscribed";v.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}J.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector('[name="footer-email"]'),i=t.value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then(n=>{n.ok?(t.value="",w()):(console.error("An error occurred when sending a request to the server:",n.statusText),z(),t.value="",w())}).catch(n=>{console.error("An error occurred while executing the request:",n),alert("An error occurred while executing the request")})});const b=document.querySelector(".filters-box"),x=document.getElementById("cards-list"),Y=b.querySelector(".filters-list-item"),G=Y.dataset.filter,L=document.querySelector(".pagination-list"),K=window.innerWidth;let a=null,Q=null;Z(K);let C=new S;const d={filter:G,page:Q,limit:a};async function X(){let e=await C.init();try{const i=await(await e.getListExercises(d)).json();i.results&&i.results.length>0?(x.innerHTML=I(i.results),F(i.totalPages,1)):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function Z(e){return e<768?a=8:(e>=768&&e<1024,a=12),a}function F(e,t){L.innerHTML="";const i=Array.from({length:e}).reduce((n,o,u)=>{const s=u+1;return n+`<li class="pagination-element ${s===t?"active_pag_item":""}" value="${s}">${s}</li>`},"");L.innerHTML=i}function ee(e){b.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function te(e){if(e.target.classList.contains("filters-list-item")){ee(e);const t=e.target.dataset.filter;d.filter=t;let i=await C.init();try{const o=await(await i.getListExercises(d)).json();o.results&&o.results.length>0?(x.innerHTML=I(o.results),F(o.totalPages,1)):console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}}async function ie(e){const t=e.target.dataset.name;t&&getExercisesFromApi(d.filter,t)}function I(e){return e.reduce((t,i)=>t+`<li class="cards-list-item" data-name="${i.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-name="${i.name}">${H(i.name)}</h3>
      <p class="card-subtitle" data-name="${i.name}">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",X);b.addEventListener("click",te);x.addEventListener("click",ie);const f=document.querySelector(".back-to-top");f.addEventListener("click",ne);window.onscroll=()=>{oe()};function ne(){window.scrollTo({top:0,behavior:"smooth"})}function oe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?f.classList.remove("is-hidden"):f.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
