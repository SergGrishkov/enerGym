import{E as T,f as k}from"./assets/quote-9123a51a.js";import"./assets/vendor-0fffa566.js";const q=document.querySelector(".backdrop"),p=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let j="64f389465ae26083f39b17a9",v="",o={},W=new T;async function M(e){return v=e,await(await W.getExerciseById(v)).json()}async function _(e){try{const i=await M(e),t=p.querySelector(".js-add-remove-btn");let s="",n="";i&&F(i,C())?(s="./img/sprite/sprite.svg#icon-remove-favorites",n="Remove from favorites"):(s="./img/sprite/sprite.svg#icon-add-favorites",n="Add to favorites"),p.innerHTML=`<div
        class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${i.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${i.name}</h2>
          

        <div class="rating">
          <div class="rating-value">${i.rating}</div>
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
          <p class="value-description">${i.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${i.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${i.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${i.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${i.burnedCalories}/${i.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${i.description}
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
                      href='${s}'
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
      </div>`}catch(i){console.error("Error fetching or creating markup:",i)}finally{let n=function(){a(),c()},a=function(){i=document.querySelector("#rating-active"),t=document.querySelector(".rating-value"),console.log("value",t.innerHTML)},c=function(){console.log(t.innerHTML);const w=t.innerHTML/.05;i.style.width=`${w}%`},i,t;document.querySelector(".rating")&&n()}}_(j);function A(e){e.key==="Escape"&&(q.classList.remove("is-open"),window.removeEventListener("keydown",A))}window.addEventListener("keydown",A);function B(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(q.classList.remove("is-open"),window.removeEventListener("click",B))}window.addEventListener("click",B);function C(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function E(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function F(e,i){return i.some(t=>t._id===e._id)}async function O(){try{o._id||(o=await M(v));const e=C();if(F(o,e)){const t=e.filter(s=>s._id!==o._id);E(t),L(!1),console.log("Exercise removed from favorites:",o)}else e.push(o),E(e),L(!0),console.log("Exercise added to favorites:",o)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&O()});function L(e){const i=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",s=p.querySelector(".js-add-remove-btn");console.log("isFavorite",e),s.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${i}'></use></svg></p></button>`}let H,u;const D=document.querySelector(".rating");D&&N();function N(){U(),J()}function U(){H=document.querySelector("#rating-active"),u=document.querySelector(".rating-value"),console.log("value",u.innerHTML)}function J(){console.log(u.innerHTML);const e=u.innerHTML/.05;H.style.width=`${e}%`}const y=document.getElementById("confirmationModal"),V=document.querySelector(".modal-subscribe-close-btn"),z=document.querySelector(".modal-subscribe-close-button"),Y=document.querySelector(".footer-form"),f=document.getElementById("modalSubscribeText");let m=!1;function d(){y.classList.remove("is-open");const e="You will receive notifications about new exercises.";f.textContent=e,m=!1}V.addEventListener("click",d);z.addEventListener("click",d);document.addEventListener("keydown",function(e){m&&e.key==="Escape"&&d()});window.addEventListener("click",function(e){m&&e.target===y&&d()});function $(){y.classList.add("is-open"),m=!0,setTimeout(d,8e3)}function G(){if(f){const e="You are already subscribed";f.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}Y.addEventListener("submit",function(e){e.preventDefault();const i=document.querySelector('[name="footer-email"]'),t=i.value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then(s=>{i.value="",s.ok||(console.error("An error occurred when sending a request to the server:",s.statusText),G()),$()}).catch(s=>{console.error("An error occurred while executing the request:",s),alert("An error occurred while executing the request")})});document.querySelector(".input-container");document.querySelector(".workout-list");document.querySelector(".modal-exercise");const K=window.innerWidth;let Q,X,Z=1,ee;const r={filter:Q,name:X,page:Z,limit:ee};function te(e){return e<1280?r.limit=8:r.limit=9,r.limit}te(K);async function ie(e,i){r.filter=e,r.name=i;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const n=await(await fetch(t)).json();if(n.results){const a=n.results;g.innerHTML=se(a)}}catch(s){console.log(s)}}function se(e){return e.reduce((i,t)=>i+` <li class="list-item">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${t.rating}</p>
                <svg class="star-icon" width="18" height="18">
                  <use href="./img/sprite/sprite.svg#icon-modal-rating-star"></use>
                </svg>
              </div>
            </div>
            <div class="start-cont">
              <button class="arrow-btn" type="button">
                Start
                <svg class="arrow" width="14" height="14">
                  <use href="./img/sprite/sprite.svg#icon-exercises-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="training-title">
            <svg class="icon-man" width="24" height="24">
              <use href="./img/sprite/sprite.svg#icon-exercises-man"></use>
            </svg>
            <p class="training-name">${k(t.name)}</p>
          </div>
          <div class="indicators-cont">
            <p class="indicators">
              Burned calories:
              <span class="indicators-item">
                ${t.burnedCalories} / ${t.time} min
              </span>
            </p>
            <p class="indicators">
              Body part:
              <span class="indicators-item">${t.bodyPart}</span>
            </p>
            <p class="indicators">
              Target: <span class="indicators-item">${t.target}</span>
            </p>
          </div>
        </li>`,"")}const x=document.querySelector(".filters-box"),g=document.getElementById("cards-list"),ne=x.querySelector(".filters-list-item"),re=ne.dataset.filter,S=document.querySelector(".pagination-list"),oe=window.innerWidth;let l=null,ae=null;le(oe);let I=new T;const b={filter:re,page:ae,limit:l};async function ce(){let e=await I.init();try{const t=await(await e.getListExercises(b)).json();t.results&&t.results.length>0?(g.innerHTML=R(t.results),P(t.totalPages,1)):console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}function le(e){return e<768?l=8:(e>=768&&e<1024,l=12),l}function P(e,i){S.innerHTML="";const t=Array.from({length:e}).reduce((s,n,a)=>{const c=a+1;return s+`<li class="pagination-element ${c===i?"active_pag_item":""}" value="${c}">${c}</li>`},"");S.innerHTML=t}function de(e){x.querySelectorAll(".filters-list-item").forEach(i=>{i.classList.remove("active_item")}),e.target.classList.add("active_item")}async function ue(e){if(e.target.classList.contains("filters-list-item")){de(e);const i=e.target.dataset.filter;b.filter=i;let t=await I.init();try{const n=await(await t.getListExercises(b)).json();n.results&&n.results.length>0?(g.innerHTML=R(n.results),P(n.totalPages,1)):console.error("No exercises found.")}catch(s){console.error("Error fetching exercises:",s)}}}async function me(e){const i=e.target.dataset.name,t=e.target.dataset.filter;if(i&&t){let s=t;t==="body parts"&&(s="bodypart"),await ie(s,i)}}function R(e){return e.reduce((i,t)=>i+`<li class="cards-list-item" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${k(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",ce);x.addEventListener("click",ue);g.addEventListener("click",me);const h=document.querySelector(".back-to-top");h.addEventListener("click",ge);window.onscroll=()=>{pe()};function ge(){window.scrollTo({top:0,behavior:"smooth"})}function pe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?h.classList.remove("is-hidden"):h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
