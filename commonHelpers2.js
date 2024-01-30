import{E as y,c as I,r as v,f as x}from"./assets/pagination-33992e92.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new y,r;function p(o){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=o,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(o){o.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){p("Email format is incorrect");return}try{const L=(await n.createSubscription({email:c})).info();console.log(L),t.textContent=L.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",r=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(w){console.error("Error:",w)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(o){o.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(r)})}),document.addEventListener("keydown",function(o){o.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(r))}),window.addEventListener("click",function(o){o.target===s&&(s.classList.remove("is-open"),clearTimeout(r))})});const T=new y,h=document.querySelector(".exercsise-pagination-list"),u=document.querySelector(".form"),H=window.innerWidth;let P,j,D=1,N;const i={filter:P,name:j,page:D,limit:N};function F(e){return e<1280?i.limit=8:i.limit=9,i.limit}F(H);function U(e=1){i.page=e,S(i.filter,i.name)}async function S(e,s){i.filter=e,i.name=s;const t=`https://energyflow.b.goit.study/api/exercises?${i.filter}=${i.name}&page=${i.page}&limit=${i.limit}`;try{const r=await(await fetch(t)).json();if(r.results){const p=r.results;a.innerHTML=$(p),f(),k.insertAdjacentElement("beforeEnd",u),m.innerHTML="",h.innerHTML=v(r.totalPages,i.page)}}catch(n){console.log(n)}}function $(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
            <p class="training-name">${x(t.name)}</p>
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
        </li>`,"")}function W(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}u.addEventListener("submit",async e=>{e.preventDefault();const s={[i.filter]:i.name,page:1,limit:10},t=u.elements.delay.value.trim();s.keyword=t;const n=await(await T.getListExercisesBySubspecies(s)).json();t&&n.results.length>0?(a.innerHTML=$(n.results),f(),u.reset()):a.innerHTML=W()});a.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(a.children).filter(r=>r.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await T.getExerciseById(t)).json();I(n)}});h.addEventListener("click",function(e){const s=parseInt(e.target.getAttribute("value"));U(s)});const k=document.querySelector(".search-container"),a=document.getElementById("cards-list"),O=document.querySelector(".home-filters"),b=document.querySelector(".filters-box"),R=b.querySelector(".filters-list-item"),_=R.dataset.filter,m=document.querySelector(".pagination-list"),C=window.innerWidth;let M=new y,d=null,z=1;const l={filter:_,page:z,limit:d};function J(){O.scrollIntoView({behavior:"smooth",block:"start"})}function A(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function V(e){const s=parseInt(e.target.getAttribute("value"));l.page=s,await B(e),J()}function Y(e){b.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function f(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function Z(){try{const e=(await M.getListExercises(l)).json();e.results&&e.results.length>0?(A(C),a.innerHTML=q(e.results),f(),m.innerHTML=v(e.totalPages,l.page)):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}async function B(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){Y(e);const t=e.target.dataset.filter;l.filter=t,l.page=1,A(C)}try{const n=await(await M.getListExercises(l)).json();n.results&&n.results.length>0?(a.innerHTML=q(n.results),h.innerHTML="",k.innerHTML="",u.reset(),m.innerHTML=v(n.totalPages,l.page),f()):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function q(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${x(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}async function G(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),await S(n,s)}}document.addEventListener("DOMContentLoaded",Z);b.addEventListener("click",e=>B(e,"filter"));a.addEventListener("click",G);m.addEventListener("click",e=>V(e));const g=document.querySelector(".back-to-top");g.addEventListener("click",K);window.onscroll=()=>{Q()};function K(){window.scrollTo({top:0,behavior:"smooth"})}function Q(){document.body.scrollTop>20||document.documentElement.scrollTop>20?g.classList.remove("is-hidden"):g.classList.add("is-hidden")}const X=document.querySelector(".icon-about-sport");let E=0;function ee(){E+=1,X.style.transform=`rotate(${E}deg)`}setInterval(ee,10);
//# sourceMappingURL=commonHelpers2.js.map
