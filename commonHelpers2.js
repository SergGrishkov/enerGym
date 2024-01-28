import{E as M,f as q}from"./assets/quote-14f0c5c7.js";import"./assets/vendor-0fffa566.js";const h=document.querySelector(".backdrop"),y=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let R="64f389465ae26083f39b17a9",w="",a={},W=new M;async function A(e){return w=e,await(await W.getExerciseById(w)).json()}async function N(e){try{const t=await A(e),i=y.querySelector(".js-add-remove-btn");let n="",s="",o;t&&C(t,B())?o=`
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
                      href='./sprite.svg#icon-add-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `,y.innerHTML=`
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
              ${o}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${t._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let s=function(){o(),S()},o=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},S=function(){console.log(i.innerHTML);const j=i.innerHTML/.05;t.style.width=`${j}%`},t,i;document.querySelector(".rating")&&s()}}N(R);function m(e){e.key==="Escape"&&(h.classList.remove("is-open"),window.removeEventListener("keydown",m),window.removeEventListener("click",g))}function g(e){console.log(e.target.classList.value),(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(h.classList.remove("is-open"),window.removeEventListener("click",g),window.removeEventListener("keydown",m)),e.target.classList.value.includes("rating-btn")&&(h.classList.remove("is-open"),window.removeEventListener("click",g),window.removeEventListener("keydown",m))}window.addEventListener("keydown",m);window.addEventListener("click",g);function B(){const e=localStorage.getItem("favorite-exercise");return e?JSON.parse(e):[]}function $(e){e.length===0?localStorage.removeItem("favorite-exercise"):localStorage.setItem("favorite-exercise",JSON.stringify(e))}function C(e,t){return t.some(i=>i._id===e._id)}async function O(){try{a._id||(a=await A(w));const e=B();if(C(a,e)){const i=e.filter(n=>n._id!==a._id);$(i),T(!1),console.log("Exercise removed from favorites:",a)}else e.push(a),$(e),T(!0),console.log("Exercise added to favorites:",a)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&O()});function T(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",n=y.querySelector(".js-add-remove-btn");console.log("isFavorite",e),n.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let F,v;const D=document.querySelector(".rating");D&&U();function U(){J(),V()}function J(){F=document.querySelector("#rating-active"),v=document.querySelector(".rating-value"),console.log("value",v.innerHTML)}function V(){console.log(v.innerHTML);const e=v.innerHTML/.05;F.style.width=`${e}%`}const E=document.getElementById("confirmationModal");document.querySelector(".modal-subscribe-close-btn");document.querySelector(".modal-subscribe-close-button");const z=document.querySelector(".footer-form"),d=document.getElementById("modalSubscribeText");let p=!1;function f(){E.classList.remove("is-open");const e="⭐You will receive notifications about new exercises!";d.textContent=e,p=!1}const Y=document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button");Y.forEach(e=>{e.addEventListener("click",f)});document.addEventListener("keydown",function(e){p&&e.key==="Escape"&&f()});window.addEventListener("click",function(e){p&&e.target===E&&f()});function k(){E.classList.add("is-open"),p=!0,setTimeout(f,8e3)}function G(){if(d){const e="You are already subscribed";d.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}function K(){if(d){const e="☝ But you entered a bad or invalid email ✉.  Please try another one! ";d.textContent=e}else console.error('Element with id "modalSubscribeText" not found.')}async function Q(e){e.preventDefault();const t=document.querySelector('[name="footer-email"]'),i=t.value.trim();try{const n=await fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})});if(t.value="",n.ok)k();else{const s=n.status===400?"☝ But you entered a bad or invalid email ✉. Please try another one!":`An error occurred when sending a request to the server: ${n.statusText}`;console.error(s),n.status===400?K(s):G(s),k()}}catch(n){console.error(`An error occurred while executing the request: ${n}`),alert("An error occurred while executing the request")}}z.addEventListener("submit",Q);document.querySelector(".input-container");document.querySelector(".workout-list");document.querySelector(".modal-exercise");const X=window.innerWidth;let Z,ee,te=1,ie;const r={filter:Z,name:ee,page:te,limit:ie};function ne(e){return e<1280?r.limit=8:r.limit=9,r.limit}ne(X);async function se(e,t){r.filter=e,r.name=t;const i=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const s=await(await fetch(i)).json();if(s.results){const o=s.results;b.innerHTML=oe(o)}}catch(n){console.log(n)}}function oe(e){return e.reduce((t,i)=>t+` <li class="list-item" data-exerciseid="${i._id}">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${i.rating}</p>
                <svg class="star-icon" width="18" height="18">
                  <use href="./sprite.svg#icon-modal-rating-star"></use>
                </svg>
              </div>
            </div>
            <div class="start-cont">
              <button class="arrow-btn" type="button">
                Start
                <svg class="arrow" width="14" height="14">
                  <use href="./sprite.svg#icon-exercises-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="training-title">
            <svg class="icon-man" width="24" height="24">
              <use href="./sprite.svg#icon-exercises-man"></use>
            </svg>
            <p class="training-name">${q(i.name)}</p>
          </div>
          <div class="indicators-cont">
            <p class="indicators">
              Burned calories:
              <span class="indicators-item">
                ${i.burnedCalories} / ${i.time} min
              </span>
            </p>
            <p class="indicators">
              Body part:
              <span class="indicators-item">${i.bodyPart}</span>
            </p>
            <p class="indicators">
              Target: <span class="indicators-item">${i.target}</span>
            </p>
          </div>
        </li>`,"")}function H(e,t){return Array.from({length:e}).reduce((i,n,s)=>{const o=s+1;return i+`<li class="pagination-element ${o===t?"active_pag_item":""}" value="${o}">${o}</li>`},"")}const L=document.querySelector(".filters-box"),b=document.getElementById("cards-list"),re=L.querySelector(".filters-list-item"),ae=re.dataset.filter,u=document.querySelector(".pagination-list"),ce=window.innerWidth;let l=null,le=1;ue(ce);let I=new M;const c={filter:ae,page:le,limit:l};async function de(){let e=await I.init();try{const i=await(await e.getListExercises(c)).json();if(i.results&&i.results.length>0){b.innerHTML=_(i.results),u.innerHTML="";let n=H(i.totalPages,c.page);u.innerHTML=n}else console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function ue(e){return e<768?l=8:(e>=768&&e<1024,l=12),l}function me(e){const t=parseInt(e.target.getAttribute("value"));c.page=t,console.log(t),P(e)}function ge(e){L.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function P(e){if(e.target.classList.contains("filters-list-item")){ge(e);const t=e.target.dataset.filter;c.filter=t;let i=await I.init();try{const s=await(await i.getListExercises(c)).json();if(s.results&&s.results.length>0){b.innerHTML=_(s.results),u.innerHTML="";let o=H(s.totalPages,c.page);u.innerHTML=o}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}}async function ve(e){const t=e.target.dataset.name,i=e.target.dataset.filter;if(t&&i){let n=i;i==="body parts"&&(n="bodypart"),await se(n,t)}}function _(e){return e.reduce((t,i)=>t+`<li class="cards-list-item" data-filter="${i.filter.toLowerCase()}" data-name="${i.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${i.filter.toLowerCase()}" data-name="${i.name}">${q(i.name)}</h3>
      <p class="card-subtitle" data-filter="${i.filter.toLowerCase()}" data-name="${i.name}">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",de);L.addEventListener("click",P);b.addEventListener("click",ve);u.addEventListener("click",me);const x=document.querySelector(".back-to-top");x.addEventListener("click",pe);window.onscroll=()=>{fe()};function pe(){window.scrollTo({top:0,behavior:"smooth"})}function fe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?x.classList.remove("is-hidden"):x.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
