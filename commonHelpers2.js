import{i as M,r as U,a as W,E as w,f as A}from"./assets/quote-13dbbd1a.js";import"./assets/vendor-ebddff4e.js";const E=document.body,y=document.querySelector(".backdrop"),B=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let c;function O(e){c=e,e._id,y.classList.add("is-open"),E.style.overflow="hidden",window.addEventListener("keydown",b),window.addEventListener("click",h);let n;M(e._id)?n=`
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
      `:n=`
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
      `,B.innerHTML=`
    <div class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${e.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${e.name}</h2>
          

        <div class="modal-ex-rating-container rating">
          <div class="rating-value">${e.rating}</div>
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
          <p class="value-description">${e.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${e.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${e.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${e.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${e.burnedCalories}/${e.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${e.description}
          </p>
        </div>

        <div class="ex-modal-btn-container">
          <ul class="button ex-modal-btn-list">
            <li class="ex-modal-btn-list-item">
              ${n}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${e._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;let t,i;document.querySelector(".rating")&&o();function o(){L(),a()}function L(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value")}function a(){const l=i.innerHTML/.05;t.style.width=`${l}%`}}function b(e){e.key==="Escape"&&(y.classList.remove("is-open"),window.removeEventListener("keydown",b),window.removeEventListener("click",h))}function h(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(y.classList.remove("is-open"),E.style.overflow="auto",window.removeEventListener("click",h),window.removeEventListener("keydown",b)),e.target.classList.value.includes("rating-btn")&&(y.classList.remove("is-open"),E.style.overflow="auto",window.removeEventListener("click",h),window.removeEventListener("keydown",b))}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&(console.log(c),M(c._id)?(U(c._id),console.log("Remove exercise from favorites:",c,c._id),k(!1)):(W(c),console.log("Exercise added to favorites:",c),k(!0)))});function k(e){const n=e?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",i=B.querySelector(".js-add-remove-btn");i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${n}'></use></svg></p></button>`}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),n=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let i=new w,s;function o(a){const l=document.createElement("div");l.classList.add("error-message"),l.textContent=a,e.parentNode.insertBefore(l,e.nextSibling),setTimeout(function(){l.remove()},2e3)}e.addEventListener("submit",async function(a){a.preventDefault();const l=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(l)){o("Email format is incorrect");return}try{const u=await i.createSubscription({email:l}),P=u&&u.data?JSON.parse(u.data).message:"";console.log("Server Response:",u),t.textContent=P,n.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",s=setTimeout(function(){n.classList.remove("is-open")},8e3)}catch(u){console.error("Error:",u)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(a){a.addEventListener("click",function(){n.classList.remove("is-open"),clearTimeout(s)})}),document.addEventListener("keydown",function(a){a.key==="Escape"&&n.classList.contains("is-open")&&(n.classList.remove("is-open"),clearTimeout(s))}),window.addEventListener("click",function(a){a.target===n&&(n.classList.remove("is-open"),clearTimeout(s))})});const D=new w,p=document.querySelector(".form");document.querySelector(".modal-exercise");const V=window.innerWidth;p.elements.delay;let z,J,G=1,Y;const r={filter:z,name:J,page:G,limit:Y};function Z(e){return e<1280?r.limit=8:r.limit=9,r.limit}Z(V);async function K(e,n){r.filter=e,r.name=n;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const s=await(await fetch(t)).json();if(s.results){const o=s.results;m.innerHTML=C(o),I.insertAdjacentElement("beforeEnd",p)}}catch(i){console.log(i)}}function C(e){return e.reduce((n,t)=>n+`<li class="list-item" data-exerciseid="${t._id}">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${t.rating}</p>
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
            <p class="training-name">${A(t.name)}</p>
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
        </li>`,"")}function Q(){return"<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}p.addEventListener("submit",async e=>{e.preventDefault();const n={[r.filter]:r.name,page:1,limit:10},t=p.elements.delay.value.trim();n.keyword=t;const i=await(await D.getListExercisesBySubspecies(n)).json();t&&i.results.length>0?(m.innerHTML=C(i.results),p.reset()):m.innerHTML=Q()});function R(e,n){return Array.from({length:e}).reduce((t,i,s)=>{const o=s+1;return t+`<li class="pagination-element ${o===n?"active_pag_item":""}" value="${o}">${o}</li>`},"")}const X=document.querySelector(".home-filters"),I=document.querySelector(".search-container"),S=document.querySelector(".filters-box"),m=document.getElementById("cards-list"),ee=S.querySelector(".filters-list-item"),te=ee.dataset.filter,f=document.querySelector(".pagination-list"),ne=window.innerWidth;let g=null,ie=1;ae(ne);function se(){X.scrollIntoView({behavior:"smooth",block:"start"})}let H=new w;const d={filter:te,page:ie,limit:g};async function oe(){let e=await H.init();try{const t=await(await e.getListExercises(d)).json();if(t.results&&t.results.length>0){m.innerHTML=F(t.results),f.innerHTML="";let i=R(t.totalPages,d.page);f.innerHTML=i}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}function ae(e){return e<768?g=8:(e>=768&&e<1024,g=12),g}async function re(e){const n=parseInt(e.target.getAttribute("value"));d.page=n,await j(e),se()}function le(e){S.querySelectorAll(".filters-list-item").forEach(n=>{n.classList.remove("active_item")}),e.target.classList.add("active_item")}function ce(){const e=document.querySelectorAll(".animated-card");e.forEach(n=>{n.style.opacity="0"}),e.forEach((n,t)=>{setTimeout(()=>{n.style.opacity="1"},t*100)})}async function j(e,n){if(n==="filter"||e.target.classList.contains("filters-list-item")){le(e);const i=e.target.dataset.filter;d.filter=i,d.page=1}let t=await H.init();try{const s=await(await t.getListExercises(d)).json();if(s.results&&s.results.length>0){m.innerHTML=F(s.results),I.innerHTML="",f.innerHTML="";let o=R(s.totalPages,d.page);f.innerHTML=o,ce()}else console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}async function de(e){const n=e.target.dataset.name,t=e.target.dataset.filter;if(n&&t){let i=t;t==="body parts"&&(i="bodypart"),await K(i,n)}}function F(e){return e.reduce((n,t)=>n+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${A(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",oe);S.addEventListener("click",e=>j(e,"filter"));m.addEventListener("click",de);f.addEventListener("click",e=>re(e));const ue=document.querySelector(".js-modal"),me=document.querySelector(".js-close"),ge=document.querySelector(".mrating"),pe=document.querySelector(".rating-form");document.querySelector(".js-sbutton");const fe=document.querySelector(".message");function N(){ue.classList.remove("is-open")}me.addEventListener("click",N);let _,$;ve(ge);function ve(e){x(e),v(),e.classList.contains("rating-set")&&ye(e)}function x(e){_=e.querySelector(".mrating-active"),$=e.querySelector(".mrating-value")}function v(e=$.innerHTML){const n=e/.05;_.style.width=`${n}%`}function ye(e){const n=e.querySelectorAll(".mrating-item");for(let t=0;t<n.length;t+=1){const i=n[t];i.addEventListener("mouseenter",function(s){x(e),v(i.value)}),i.addEventListener("mouseleave",function(s){v()}),i.addEventListener("click",function(s){x(e);const o=t+1;$.innerHTML=o,v()})}}let be=new w;pe.addEventListener("click",he);async function he(e){if(e.preventDefault(),!e.target.tagName!=="BUTTON"&&e.target.tagName==="BUTTON"){if(+e.currentTarget.children[0].innerText.trim()<=0)return;const n=e.currentTarget.elements.ratbtn.dataset.exerciseId,t={};t.rate=+e.currentTarget.children[0].innerText.trim(),t.email=e.currentTarget.elements.email.value,t.review=e.currentTarget.elements.comment.value;try{const i=await be.addRating(n,t),s=i.info();s.status===200?(N(),O(i.json())):fe.textContent=s.message}catch(i){console.error(i)}}}const T=document.querySelector(".back-to-top");T.addEventListener("click",we);window.onscroll=()=>{Le()};function we(){window.scrollTo({top:0,behavior:"smooth"})}function Le(){document.body.scrollTop>20||document.documentElement.scrollTop>20?T.classList.remove("is-hidden"):T.classList.add("is-hidden")}const Ee=document.querySelector(".icon-about-sport");let q=0;function xe(){q+=1,Ee.style.transform=`rotate(${q}deg)`}setInterval(xe,10);
//# sourceMappingURL=commonHelpers2.js.map
