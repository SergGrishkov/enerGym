import{E as h,i as C,r as z,a as G,f as I}from"./assets/quote-e74d49c2.js";import"./assets/vendor-0fffa566.js";function J(e){te(),Y(e)}function Y(e){X.dataset.exerciseId=e}const R=document.querySelector(".js-modal"),Z=document.querySelector(".js-close"),K=document.querySelector(".mrating"),Q=document.querySelector(".rating-form"),X=document.querySelector(".js-sbutton"),ee=document.querySelector(".message");function te(){R.classList.add("is-open")}function j(){R.classList.remove("is-open")}Z.addEventListener("click",j);let H,T;ie(K);function ie(e){L(e),g(),e.classList.contains("rating-set")&&ne(e)}function L(e){H=e.querySelector(".mrating-active"),T=e.querySelector(".mrating-value")}function g(e=T.innerHTML){const i=e/.05;H.style.width=`${i}%`}function ne(e){const i=e.querySelectorAll(".mrating-item");for(let t=0;t<i.length;t+=1){const n=i[t];n.addEventListener("mouseenter",function(s){L(e),g(n.value)}),n.addEventListener("mouseleave",function(s){g()}),n.addEventListener("click",function(s){L(e);const a=t+1;T.innerHTML=a,g()})}}let se=new h;Q.addEventListener("click",ae);async function ae(e){if(e.preventDefault(),!e.target.tagName!=="BUTTON"&&e.target.tagName==="BUTTON"){if(+e.currentTarget.children[0].innerText.trim()<=0)return;const i=e.currentTarget.elements.ratbtn.dataset.exerciseId,t={};t.rate=+e.currentTarget.children[0].innerText.trim(),t.email=e.currentTarget.elements.email.value,t.review=e.currentTarget.elements.comment.value;try{const n=await se.addRating(i,t),s=n.info();s.status===200?(j(),F(n.json())):ee.textContent=s.message}catch(n){console.error(n)}}}const E=document.body,v=document.querySelector(".backdrop"),$=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let p;function F(e){p=e,e._id,v.classList.add("is-open"),E.style.overflow="hidden",window.addEventListener("keydown",y),window.addEventListener("click",b);let i;C(e._id)?i=`
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
      `:i=`
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
      `,$.innerHTML=`
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
              ${i}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${e._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;let t,n;document.querySelector(".rating")&&a();function a(){w(),o()}function w(){t=document.querySelector("#rating-active"),n=document.querySelector(".rating-value")}function o(){const c=n.innerHTML/.05;t.style.width=`${c}%`}}function y(e){e.key==="Escape"&&(v.classList.remove("is-open"),window.removeEventListener("keydown",y),window.removeEventListener("click",b))}function b(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(v.classList.remove("is-open"),E.style.overflow="auto",window.removeEventListener("click",b),window.removeEventListener("keydown",y)),e.target.classList.value.includes("rating-btn")&&(v.classList.remove("is-open"),E.style.overflow="auto",J(e.target.dataset.rating),window.removeEventListener("keydown",y),document.removeEventListener("click",b))}$.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&(C(p._id)?(z(p._id),A(!1)):(G(p),A(!0)))});function A(e){const i=e?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",n=$.querySelector(".js-add-remove-btn");n.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${i}'></use></svg></p></button>`}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),i=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new h,s;function a(o){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=o,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(o){o.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){a("Email format is incorrect");return}try{const q=(await n.createSubscription({email:c})).info();console.log(q),t.textContent=q.message,i.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",s=setTimeout(function(){i.classList.remove("is-open")},8e3)}catch(M){console.error("Error:",M)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(o){o.addEventListener("click",function(){i.classList.remove("is-open"),clearTimeout(s)})}),document.addEventListener("keydown",function(o){o.key==="Escape"&&i.classList.contains("is-open")&&(i.classList.remove("is-open"),clearTimeout(s))}),window.addEventListener("click",function(o){o.target===i&&(i.classList.remove("is-open"),clearTimeout(s))})});const N=new h,f=document.querySelector(".form"),u=document.getElementById("cards-list"),oe=window.innerWidth;let re,ce,le=1,de;const r={filter:re,name:ce,page:le,limit:de};function ue(e){return e<1280?r.limit=8:r.limit=9,r.limit}ue(oe);async function me(e,i){r.filter=e,r.name=i;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const s=await(await fetch(t)).json();if(s.results){const a=s.results;u.innerHTML=P(a),U.insertAdjacentElement("beforeEnd",f)}}catch(n){console.log(n)}}function P(e){return e.reduce((i,t)=>i+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
            <p class="training-name">${I(t.name)}</p>
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
        </li>`,"")}function ge(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}f.addEventListener("submit",async e=>{e.preventDefault();const i={[r.filter]:r.name,page:1,limit:10},t=f.elements.delay.value.trim();i.keyword=t;const n=await(await N.getListExercisesBySubspecies(i)).json();t&&n.results.length>0?(u.innerHTML=P(n.results),D(),f.reset()):u.innerHTML=ge()});u.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(u.children).filter(s=>s.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await N.getExerciseById(t)).json();F(n)}});function _(e,i){return Array.from({length:e}).reduce((t,n,s)=>{const a=s+1;return t+`<li class="pagination-element ${a===i?"active_pag_item":""}" value="${a}">${a}</li>`},"")}const pe=document.querySelector(".home-filters"),U=document.querySelector(".search-container"),S=document.querySelector(".filters-box"),k=document.getElementById("cards-list"),fe=S.querySelector(".filters-list-item"),ve=fe.dataset.filter,m=document.querySelector(".pagination-list"),ye=window.innerWidth;let d=null,be=1;Le(ye);function he(){pe.scrollIntoView({behavior:"smooth",block:"start"})}let W=new h;const l={filter:ve,page:be,limit:d};async function we(){let e=await W.init();try{const t=await(await e.getListExercises(l)).json();if(t.results&&t.results.length>0){k.innerHTML=V(t.results),m.innerHTML="";let n=_(t.totalPages,l.page);m.innerHTML=n}else console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}function Le(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function Ee(e){const i=parseInt(e.target.getAttribute("value"));l.page=i,await O(e),he()}function xe(e){S.querySelectorAll(".filters-list-item").forEach(i=>{i.classList.remove("active_item")}),e.target.classList.add("active_item")}function D(){const e=document.querySelectorAll(".animated-card");e.forEach(i=>{i.style.opacity="0"}),e.forEach((i,t)=>{setTimeout(()=>{i.style.opacity="1"},t*100)})}async function O(e,i){if(i==="filter"||e.target.classList.contains("filters-list-item")){xe(e);const n=e.target.dataset.filter;l.filter=n,l.page=1}let t=await W.init();try{const s=await(await t.getListExercises(l)).json();if(s.results&&s.results.length>0){k.innerHTML=V(s.results),U.innerHTML="",m.innerHTML="";let a=_(s.totalPages,l.page);m.innerHTML=a,D()}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}async function Te(e){const i=e.target.dataset.name,t=e.target.dataset.filter;if(i&&t){let n=t;t==="body parts"&&(n="bodypart"),await me(n,i)}}function V(e){return e.reduce((i,t)=>i+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${I(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",we);S.addEventListener("click",e=>O(e,"filter"));k.addEventListener("click",Te);m.addEventListener("click",e=>Ee(e));const x=document.querySelector(".back-to-top");x.addEventListener("click",$e);window.onscroll=()=>{Se()};function $e(){window.scrollTo({top:0,behavior:"smooth"})}function Se(){document.body.scrollTop>20||document.documentElement.scrollTop>20?x.classList.remove("is-hidden"):x.classList.add("is-hidden")}const ke=document.querySelector(".icon-about-sport");let B=0;function Me(){B+=1,ke.style.transform=`rotate(${B}deg)`}setInterval(Me,10);
//# sourceMappingURL=commonHelpers2.js.map
