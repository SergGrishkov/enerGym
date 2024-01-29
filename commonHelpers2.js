import{i as A,r as U,a as W,E as h,f as B}from"./assets/quote-13dbbd1a.js";import"./assets/vendor-ebddff4e.js";const L=document.body,v=document.querySelector(".backdrop"),C=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let c;function D(e){c=e,e._id,v.classList.add("is-open"),L.style.overflow="hidden",window.addEventListener("keydown",y),window.addEventListener("click",b);let n;A(e._id)?n=`
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
      `,C.innerHTML=`
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
      </div>`;let t,i;document.querySelector(".rating")&&s();function s(){w(),a()}function w(){t=document.querySelector("#rating-active"),i=document.querySelector(".rating-value")}function a(){const l=i.innerHTML/.05;t.style.width=`${l}%`}}function y(e){e.key==="Escape"&&(v.classList.remove("is-open"),window.removeEventListener("keydown",y),window.removeEventListener("click",b))}function b(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(v.classList.remove("is-open"),L.style.overflow="auto",window.removeEventListener("click",b),window.removeEventListener("keydown",y)),e.target.classList.value.includes("rating-btn")&&(v.classList.remove("is-open"),L.style.overflow="auto",window.removeEventListener("click",b),window.removeEventListener("keydown",y))}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&(console.log(c),A(c._id)?(U(c._id),console.log("Remove exercise from favorites:",c,c._id),q(!1)):(W(c),console.log("Exercise added to favorites:",c),q(!0)))});function q(e){const n=e?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",i=C.querySelector(".js-add-remove-btn");i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${n}'></use></svg></p></button>`}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),n=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let i=new h,o;function s(a){const l=document.createElement("div");l.classList.add("error-message"),l.textContent=a,e.parentNode.insertBefore(l,e.nextSibling),setTimeout(function(){l.remove()},2e3)}e.addEventListener("submit",async function(a){a.preventDefault();const l=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(l)){s("Email format is incorrect");return}try{const k=(await i.createSubscription({email:l})).info();console.log(k),t.textContent=k.message,n.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",o=setTimeout(function(){n.classList.remove("is-open")},8e3)}catch(S){console.error("Error:",S)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(a){a.addEventListener("click",function(){n.classList.remove("is-open"),clearTimeout(o)})}),document.addEventListener("keydown",function(a){a.key==="Escape"&&n.classList.contains("is-open")&&(n.classList.remove("is-open"),clearTimeout(o))}),window.addEventListener("click",function(a){a.target===n&&(n.classList.remove("is-open"),clearTimeout(o))})});const O=new h,g=document.querySelector(".form");document.querySelector(".modal-exercise");const V=window.innerWidth;g.elements.delay;let z,G,J=1,Y;const r={filter:z,name:G,page:J,limit:Y};function Z(e){return e<1280?r.limit=8:r.limit=9,r.limit}Z(V);async function K(e,n){r.filter=e,r.name=n;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const o=await(await fetch(t)).json();if(o.results){const s=o.results;u.innerHTML=I(s),H.insertAdjacentElement("beforeEnd",g)}}catch(i){console.log(i)}}function I(e){return e.reduce((n,t)=>n+`<li class="list-item" data-exerciseid="${t._id}">
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
        </li>`,"")}function Q(){return"<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}g.addEventListener("submit",async e=>{e.preventDefault();const n={[r.filter]:r.name,page:1,limit:10},t=g.elements.delay.value.trim();n.keyword=t;const i=await(await O.getListExercisesBySubspecies(n)).json();t&&i.results.length>0?(u.innerHTML=I(i.results),g.reset()):u.innerHTML=Q()});function R(e,n){return Array.from({length:e}).reduce((t,i,o)=>{const s=o+1;return t+`<li class="pagination-element ${s===n?"active_pag_item":""}" value="${s}">${s}</li>`},"")}const X=document.querySelector(".home-filters"),H=document.querySelector(".search-container"),T=document.querySelector(".filters-box"),u=document.getElementById("cards-list"),ee=T.querySelector(".filters-list-item"),te=ee.dataset.filter,f=document.querySelector(".pagination-list"),ne=window.innerWidth;let m=null,ie=1;ae(ne);function oe(){X.scrollIntoView({behavior:"smooth",block:"start"})}let j=new h;const d={filter:te,page:ie,limit:m};async function se(){let e=await j.init();try{const t=await(await e.getListExercises(d)).json();if(t.results&&t.results.length>0){u.innerHTML=_(t.results),f.innerHTML="";let i=R(t.totalPages,d.page);f.innerHTML=i}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}function ae(e){return e<768?m=8:(e>=768&&e<1024,m=12),m}async function re(e){const n=parseInt(e.target.getAttribute("value"));d.page=n,await F(e),oe()}function le(e){T.querySelectorAll(".filters-list-item").forEach(n=>{n.classList.remove("active_item")}),e.target.classList.add("active_item")}function ce(){const e=document.querySelectorAll(".animated-card");e.forEach(n=>{n.style.opacity="0"}),e.forEach((n,t)=>{setTimeout(()=>{n.style.opacity="1"},t*100)})}async function F(e,n){if(n==="filter"||e.target.classList.contains("filters-list-item")){le(e);const i=e.target.dataset.filter;d.filter=i,d.page=1}let t=await j.init();try{const o=await(await t.getListExercises(d)).json();if(o.results&&o.results.length>0){u.innerHTML=_(o.results),H.innerHTML="",f.innerHTML="";let s=R(o.totalPages,d.page);f.innerHTML=s,ce()}else console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}async function de(e){const n=e.target.dataset.name,t=e.target.dataset.filter;if(n&&t){let i=t;t==="body parts"&&(i="bodypart"),await K(i,n)}}function _(e){return e.reduce((n,t)=>n+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${B(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",se);T.addEventListener("click",e=>F(e,"filter"));u.addEventListener("click",de);f.addEventListener("click",e=>re(e));const ue=document.querySelector(".js-modal"),me=document.querySelector(".js-close"),ge=document.querySelector(".mrating"),fe=document.querySelector(".rating-form");document.querySelector(".js-sbutton");const pe=document.querySelector(".message");function N(){ue.classList.remove("is-open")}me.addEventListener("click",N);let P,$;ve(ge);function ve(e){E(e),p(),e.classList.contains("rating-set")&&ye(e)}function E(e){P=e.querySelector(".mrating-active"),$=e.querySelector(".mrating-value")}function p(e=$.innerHTML){const n=e/.05;P.style.width=`${n}%`}function ye(e){const n=e.querySelectorAll(".mrating-item");for(let t=0;t<n.length;t+=1){const i=n[t];i.addEventListener("mouseenter",function(o){E(e),p(i.value)}),i.addEventListener("mouseleave",function(o){p()}),i.addEventListener("click",function(o){E(e);const s=t+1;$.innerHTML=s,p()})}}let be=new h;fe.addEventListener("click",he);async function he(e){if(e.preventDefault(),!e.target.tagName!=="BUTTON"&&e.target.tagName==="BUTTON"){if(+e.currentTarget.children[0].innerText.trim()<=0)return;const n=e.currentTarget.elements.ratbtn.dataset.exerciseId,t={};t.rate=+e.currentTarget.children[0].innerText.trim(),t.email=e.currentTarget.elements.email.value,t.review=e.currentTarget.elements.comment.value;try{const i=await be.addRating(n,t),o=i.info();o.status===200?(N(),D(i.json())):pe.textContent=o.message}catch(i){console.error(i)}}}const x=document.querySelector(".back-to-top");x.addEventListener("click",we);window.onscroll=()=>{Le()};function we(){window.scrollTo({top:0,behavior:"smooth"})}function Le(){document.body.scrollTop>20||document.documentElement.scrollTop>20?x.classList.remove("is-hidden"):x.classList.add("is-hidden")}const Ee=document.querySelector(".icon-about-sport");let M=0;function xe(){M+=1,Ee.style.transform=`rotate(${M}deg)`}setInterval(xe,10);
//# sourceMappingURL=commonHelpers2.js.map
