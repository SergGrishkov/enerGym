import{E as L,f as q}from"./assets/quote-624a5b6d.js";import"./assets/vendor-0fffa566.js";const h=document.querySelector(".backdrop"),w=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let W="64f389465ae26083f39b17a9",x="",l={},D=new L;async function M(e){return x=e,await(await D.getExerciseById(x)).json()}async function N(e){try{const t=await M(e),i=w.querySelector(".js-add-remove-btn");let n="",s="",o;t&&B(t,A())?o=`
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
      `,w.innerHTML=`
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
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}finally{let s=function(){o(),b()},o=function(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value"),console.log("value",i.innerHTML)},b=function(){console.log(i.innerHTML);const r=i.innerHTML/.05;t.style.width=`${r}%`},t,i;document.querySelector(".rating")&&s()}}N(W);function v(e){e.key==="Escape"&&(h.classList.remove("is-open"),window.removeEventListener("keydown",v),window.removeEventListener("click",p))}function p(e){console.log(e.target.classList.value),(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(h.classList.remove("is-open"),window.removeEventListener("click",p),window.removeEventListener("keydown",v)),e.target.classList.value.includes("rating-btn")&&(h.classList.remove("is-open"),window.removeEventListener("click",p),window.removeEventListener("keydown",v))}window.addEventListener("keydown",v);window.addEventListener("click",p);function A(){const e=localStorage.getItem("favorite-exercise");return e?JSON.parse(e):[]}function S(e){e.length===0?localStorage.removeItem("favorite-exercise"):localStorage.setItem("favorite-exercise",JSON.stringify(e))}function B(e,t){return t.some(i=>i._id===e._id)}async function O(){try{l._id||(l=await M(x));const e=A();if(B(l,e)){const i=e.filter(n=>n._id!==l._id);S(i),T(!1),console.log("Exercise removed from favorites:",l)}else e.push(l),S(e),T(!0),console.log("Exercise added to favorites:",l)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&O()});function T(e){const t=e?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",i=e?"Remove from favorites":"Add to favorites",n=w.querySelector(".js-add-remove-btn");console.log("isFavorite",e),n.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${i}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}let C,f;const U=document.querySelector(".rating");U&&V();function V(){J(),z()}function J(){C=document.querySelector("#rating-active"),f=document.querySelector(".rating-value"),console.log("value",f.innerHTML)}function z(){console.log(f.innerHTML);const e=f.innerHTML/.05;C.style.width=`${e}%`}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),t=document.getElementById("confirmationModal"),i=document.getElementById("modalSubscribeText");let n=new L,s;function o(r){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=r,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(r){r.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){o("Email format is incorrect");return}try{const u=await n.createSubscription({email:c}),P=u&&u.data?JSON.parse(u.data).message:"";console.log("Server Response:",u),i.textContent=P,t.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",s=setTimeout(function(){t.classList.remove("is-open")},8e3)}catch(u){console.error("Error:",u)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(r){r.addEventListener("click",function(){t.classList.remove("is-open"),clearTimeout(s)})}),document.addEventListener("keydown",function(r){r.key==="Escape"&&t.classList.contains("is-open")&&(t.classList.remove("is-open"),clearTimeout(s))}),window.addEventListener("click",function(r){r.target===t&&(t.classList.remove("is-open"),clearTimeout(s))})});const I=document.querySelector(".form");document.querySelector(".modal-exercise");const G=window.innerWidth;let Z,K,Q=1,X;const a={filter:Z,name:K,page:Q,limit:X};function Y(e){return e<1280?a.limit=8:a.limit=9,a.limit}Y(G);async function ee(e,t){a.filter=e,a.name=t;const i=`https://energyflow.b.goit.study/api/exercises?${a.filter}=${a.name}&page=${a.page}&limit=${a.limit}`;try{const s=await(await fetch(i)).json();if(s.results){const o=s.results;y.innerHTML=te(o),R.insertAdjacentElement("beforeEnd",I)}}catch(n){console.log(n)}}function te(e){return e.reduce((t,i)=>t+`<li class="list-item" data-exerciseid="${i._id}">
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
        </li>`,"")}I.addEventListener("submit",e=>{e.preventDefault(),e.target.value.trim()});function H(e,t){return Array.from({length:e}).reduce((i,n,s)=>{const o=s+1;return i+`<li class="pagination-element ${o===t?"active_pag_item":""}" value="${o}">${o}</li>`},"")}const ie=document.querySelector(".home-filters"),R=document.querySelector(".search-container"),$=document.querySelector(".filters-box"),y=document.getElementById("cards-list"),ne=$.querySelector(".filters-list-item"),se=ne.dataset.filter,g=document.querySelector(".pagination-list"),oe=window.innerWidth;let m=null,re=1;le(oe);function ae(){ie.scrollIntoView({behavior:"smooth",block:"start"})}let F=new L;const d={filter:se,page:re,limit:m};async function ce(){let e=await F.init();try{const i=await(await e.getListExercises(d)).json();if(i.results&&i.results.length>0){y.innerHTML=j(i.results),g.innerHTML="";let n=H(i.totalPages,d.page);g.innerHTML=n}else console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function le(e){return e<768?m=8:(e>=768&&e<1024,m=12),m}async function de(e){const t=parseInt(e.target.getAttribute("value"));d.page=t,await _(e),ae()}function ue(e){$.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}function me(){const e=document.querySelectorAll(".animated-card");e.forEach(t=>{t.style.opacity="0"}),e.forEach((t,i)=>{setTimeout(()=>{t.style.opacity="1"},i*100)})}async function _(e,t){if(t==="filter"||e.target.classList.contains("filters-list-item")){ue(e);const n=e.target.dataset.filter;d.filter=n,d.page=1}let i=await F.init();try{const s=await(await i.getListExercises(d)).json();if(s.results&&s.results.length>0){y.innerHTML=j(s.results),R.innerHTML="",g.innerHTML="";let o=H(s.totalPages,d.page);g.innerHTML=o,me()}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}async function ge(e){const t=e.target.dataset.name,i=e.target.dataset.filter;if(t&&i){let n=i;i==="body parts"&&(n="bodypart"),await ee(n,t)}}function j(e){return e.reduce((t,i)=>t+`<li class="cards-list-item animated-card" data-filter="${i.filter.toLowerCase()}" data-name="${i.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${i.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${i.filter.toLowerCase()}" data-name="${i.name}">${q(i.name)}</h3>
      <p class="card-subtitle" data-filter="${i.filter.toLowerCase()}" data-name="${i.name}">${i.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",ce);$.addEventListener("click",e=>_(e,"filter"));y.addEventListener("click",ge);g.addEventListener("click",e=>de(e));const E=document.querySelector(".back-to-top");E.addEventListener("click",ve);window.onscroll=()=>{pe()};function ve(){window.scrollTo({top:0,behavior:"smooth"})}function pe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?E.classList.remove("is-hidden"):E.classList.add("is-hidden")}const fe=document.querySelector(".icon-about-sport");let k=0;function ye(){k+=1,fe.style.transform=`rotate(${k}deg)`}setInterval(ye,10);
//# sourceMappingURL=commonHelpers2.js.map
