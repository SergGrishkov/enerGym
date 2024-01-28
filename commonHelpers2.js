import{E as M,f as B}from"./assets/quote-38cb7248.js";import"./assets/vendor-0fffa566.js";const f=document.querySelector(".backdrop"),b=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let P="64f389465ae26083f39b17a9",h="",a={},R=new M;async function A(e){return h=e,await(await R.getExerciseById(h)).json()}async function W(e){try{const i=await A(e),t=b.querySelector(".js-add-remove-btn");let s="",n="",o;i&&F(i,C())?o=`
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
                      href='./assets/sprite.svg#icon-remove-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `:o=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                'Add to favorites'
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./assets/sprite.svg#icon-add-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `,b.innerHTML=`
    <div class="modal-ex-img-container"
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
          

        <div class="modal-ex-rating-container rating">
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
              ${o}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${i._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`}catch(i){console.error("Error fetching or creating markup:",i)}finally{let n=function(){o(),c()},o=function(){i=document.querySelector("#rating-active"),t=document.querySelector(".rating-value"),console.log("value",t.innerHTML)},c=function(){console.log(t.innerHTML);const $=t.innerHTML/.05;i.style.width=`${$}%`},i,t;document.querySelector(".rating")&&n()}}W(P);function u(e){e.key==="Escape"&&(f.classList.remove("is-open"),window.removeEventListener("keydown",u),window.removeEventListener("click",m))}function m(e){console.log(e.target.classList.value),(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(f.classList.remove("is-open"),window.removeEventListener("click",m),window.removeEventListener("keydown",u)),e.target.classList.value.includes("rating-btn")&&(f.classList.remove("is-open"),window.removeEventListener("click",m),window.removeEventListener("keydown",u))}window.addEventListener("keydown",u);window.addEventListener("click",m);function C(){const e=localStorage.getItem("favorite-exercise");return e?JSON.parse(e):[]}function S(e){e.length===0?localStorage.removeItem("favorite-exercise"):localStorage.setItem("favorite-exercise",JSON.stringify(e))}function F(e,i){return i.some(t=>t._id===e._id)}async function O(){try{a._id||(a=await A(h));const e=C();if(F(a,e)){const t=e.filter(s=>s._id!==a._id);S(t),T(!1),console.log("Exercise removed from favorites:",a)}else e.push(a),S(e),T(!0),console.log("Exercise added to favorites:",a)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&O()});function T(e){const i=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",s=b.querySelector(".js-add-remove-btn");console.log("isFavorite",e),s.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${i}'></use></svg></p></button>`}let I,g;const D=document.querySelector(".rating");D&&N();function N(){U(),J()}function U(){I=document.querySelector("#rating-active"),g=document.querySelector(".rating-value"),console.log("value",g.innerHTML)}function J(){console.log(g.innerHTML);const e=g.innerHTML/.05;I.style.width=`${e}%`}const E=document.getElementById("confirmationModal"),V=document.querySelector(".modal-subscribe-close-btn"),z=document.querySelector(".modal-subscribe-close-button"),Y=document.querySelector(".footer-form"),y=document.getElementById("modalSubscribeText");let v=!1;function d(){E.classList.remove("is-open");const e="You will receive notifications about new exercises.";y.textContent=e,v=!1}V.addEventListener("click",d);z.addEventListener("click",d);document.addEventListener("keydown",function(e){v&&e.key==="Escape"&&d()});window.addEventListener("click",function(e){v&&e.target===E&&d()});function k(){E.classList.add("is-open"),v=!0,setTimeout(d,8e3)}function G(){if(y){const e="You are already subscribed";y.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}Y.addEventListener("submit",function(e){e.preventDefault();const i=document.querySelector('[name="footer-email"]'),t=i.value.trim();fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then(s=>{i.value="",s.ok||(console.error("An error occurred when sending a request to the server:",s.statusText),G()),k()}).catch(s=>{console.error("An error occurred while executing the request:",s),alert("An error occurred while executing the request")})});document.querySelector(".input-container");document.querySelector(".workout-list");document.querySelector(".modal-exercise");const K=window.innerWidth;let Q,X,Z=1,ee;const r={filter:Q,name:X,page:Z,limit:ee};function te(e){return e<1280?r.limit=8:r.limit=9,r.limit}te(K);async function ie(e,i){r.filter=e,r.name=i;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const n=await(await fetch(t)).json();if(n.results){const o=n.results;p.innerHTML=se(o)}}catch(s){console.log(s)}}function se(e){return e.reduce((i,t)=>i+` <li class="list-item" data-exerciseid="${t._id}">
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
            <p class="training-name">${B(t.name)}</p>
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
        </li>`,"")}const L=document.querySelector(".filters-box"),p=document.getElementById("cards-list"),ne=L.querySelector(".filters-list-item"),oe=ne.dataset.filter,q=document.querySelector(".pagination-list"),re=window.innerWidth;let l=null,ae=null;le(re);let H=new M;const w={filter:oe,page:ae,limit:l};async function ce(){let e=await H.init();try{const t=await(await e.getListExercises(w)).json();t.results&&t.results.length>0?(p.innerHTML=j(t.results),_(t.totalPages,1)):console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}function le(e){return e<768?l=8:(e>=768&&e<1024,l=12),l}function _(e,i){q.innerHTML="";const t=Array.from({length:e}).reduce((s,n,o)=>{const c=o+1;return s+`<li class="pagination-element ${c===i?"active_pag_item":""}" value="${c}">${c}</li>`},"");q.innerHTML=t}function de(e){L.querySelectorAll(".filters-list-item").forEach(i=>{i.classList.remove("active_item")}),e.target.classList.add("active_item")}async function ue(e){if(e.target.classList.contains("filters-list-item")){de(e);const i=e.target.dataset.filter;w.filter=i;let t=await H.init();try{const n=await(await t.getListExercises(w)).json();n.results&&n.results.length>0?(p.innerHTML=j(n.results),_(n.totalPages,1)):console.error("No exercises found.")}catch(s){console.error("Error fetching exercises:",s)}}}async function me(e){const i=e.target.dataset.name,t=e.target.dataset.filter;if(i&&t){let s=t;t==="body parts"&&(s="bodypart"),await ie(s,i)}}function j(e){return e.reduce((i,t)=>i+`<li class="cards-list-item" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${B(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",ce);L.addEventListener("click",ue);p.addEventListener("click",me);const x=document.querySelector(".back-to-top");x.addEventListener("click",ge);window.onscroll=()=>{ve()};function ge(){window.scrollTo({top:0,behavior:"smooth"})}function ve(){document.body.scrollTop>20||document.documentElement.scrollTop>20?x.classList.remove("is-hidden"):x.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
