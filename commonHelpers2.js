import{E as g,c as A,f as L,r as x}from"./assets/pagination-e08e4f08.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new g,i;function f(o){const a=document.createElement("div");a.classList.add("error-message"),a.textContent=o,e.parentNode.insertBefore(a,e.nextSibling),setTimeout(function(){a.remove()},2e3)}e.addEventListener("submit",async function(o){o.preventDefault();const a=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(a)){f("Email format is incorrect");return}try{const b=(await n.createSubscription({email:a})).info();console.log(b),t.textContent=b.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",i=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(w){console.error("Error:",w)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(o){o.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(i)})}),document.addEventListener("keydown",function(o){o.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(i))}),window.addEventListener("click",function(o){o.target===s&&(s.classList.remove("is-open"),clearTimeout(i))})});const T=new g,d=document.querySelector(".form"),u=document.getElementById("cards-list"),I=window.innerWidth;let H,P,j=1,D;const r={filter:H,name:P,page:j,limit:D};function F(e){return e<1280?r.limit=8:r.limit=9,r.limit}F(I);async function N(e,s){r.filter=e,r.name=s;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const i=await(await fetch(t)).json();if(i.results){const f=i.results;u.innerHTML=S(f),$.insertAdjacentElement("beforeEnd",d)}}catch(n){console.log(n)}}function S(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${t.rating.toFixed(1)}</p>
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
            <p class="training-name">${L(t.name)}</p>
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
        </li>`,"")}function U(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}d.addEventListener("submit",async e=>{e.preventDefault();const s={[r.filter]:r.name,page:1,limit:10},t=d.elements.delay.value.trim();s.keyword=t;const n=await(await T.getListExercisesBySubspecies(s)).json();t&&n.results.length>0?(u.innerHTML=S(n.results),v(),d.reset()):u.innerHTML=U()});u.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(u.children).filter(i=>i.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await T.getExerciseById(t)).json();A(n)}});const $=document.querySelector(".search-container"),W=document.querySelector(".home-filters"),O=document.querySelector(".exercsise-pagination-list"),y=document.querySelector(".filters-box"),h=document.getElementById("cards-list"),R=y.querySelector(".filters-list-item"),_=R.dataset.filter,m=document.querySelector(".pagination-list"),k=window.innerWidth;let C=new g,l=null,z=1;const c={filter:_,page:z,limit:l};function J(){W.scrollIntoView({behavior:"smooth",block:"start"})}function M(e){return e<768?l=8:(e>=768&&e<1024,l=12),l}async function V(e){const s=parseInt(e.target.getAttribute("value"));c.page=s,await B(e),J()}function Y(e){y.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function v(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function Z(){try{const s=await(await C.getListExercises(c)).json();s.results&&s.results.length>0?(M(k),h.innerHTML=q(s.results),v(),m.innerHTML=x(s.totalPages,c.page)):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}async function B(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){Y(e);const t=e.target.dataset.filter;c.filter=t,c.page=1,M(k)}try{const n=await(await C.getListExercises(c)).json();n.results&&n.results.length>0?(h.innerHTML=q(n.results),$.innerHTML="",d.reset(),O.innerHTML="",m.innerHTML="",m.innerHTML=x(n.totalPages,c.page),v()):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function q(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${L(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}async function G(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),await N(n,s)}}document.addEventListener("DOMContentLoaded",Z);y.addEventListener("click",e=>B(e,"filter"));h.addEventListener("click",G);m.addEventListener("click",e=>V(e));const p=document.querySelector(".back-to-top");p.addEventListener("click",K);window.onscroll=()=>{Q()};function K(){window.scrollTo({top:0,behavior:"smooth"})}function Q(){document.body.scrollTop>20||document.documentElement.scrollTop>20?p.classList.remove("is-hidden"):p.classList.add("is-hidden")}const X=document.querySelector(".icon-about-sport");let E=0;function ee(){E+=1,X.style.transform=`rotate(${E}deg)`}setInterval(ee,10);
//# sourceMappingURL=commonHelpers2.js.map
