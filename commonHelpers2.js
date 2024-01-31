import{E as L,c as N,r as p,f as $}from"./assets/pagination-48489904.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new L,o;function D(r){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=r,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(r){r.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){D("Email format is incorrect");return}try{const T=(await n.createSubscription({email:c})).info();console.log(T),t.textContent=T.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",o=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(S){console.error("Error:",S)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(r){r.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(o)})}),document.addEventListener("keydown",function(r){r.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(o))}),window.addEventListener("click",function(r){r.target===s&&(s.classList.remove("is-open"),clearTimeout(o))})});const u=document.getElementById("cards-list"),j=document.querySelector(".pagination-list"),w=document.querySelector(".exercsise-pagination-list"),E=new L,g=document.querySelector(".form"),U=window.innerWidth;let W=1,O,m="",h;const i={page:W,limit:O},a={filter:"",name:""};function R(e){return e<1280?i.limit=8:i.limit=9,i.limit}R(U);function _(e,s){a.filter=e,a.name=s.toLowerCase()}function C(e,s,t){i.page=t,s==="formSearch"?J(e,i.page):M(a.filter,a.name)}async function M(e,s){const t={[e]:s,...i};try{const n=await(await E.getListExercisesBySubspecies(t)).json();if(n.results){const o=n.results;u.innerHTML=A(o),y(),B.insertAdjacentElement("beforeEnd",g),j.innerHTML="",w.innerHTML=p(n.totalPages,i.page)}}catch(n){console.log(n)}}function A(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
            <p class="training-name">${$(t.name)}</p>
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
        </li>`,"")}function z(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}async function J(e,s){e.preventDefault(),h=g.elements.delay.value.trim();const t={};h?(t[a.filter]=a.name,t.keyword=h,t.page=s,t.limit=i.limit):(t[a.filter]=a.name,t.page=s,t.limit=i.limit);const n=await(await E.getListExercisesBySubspecies(t)).json();n.results.length>0?(u.innerHTML=A(n.results),y(),w.innerHTML=p(n.totalPages,n.page)):u.innerHTML=z()}u.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(u.children).filter(o=>o.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await E.getExerciseById(t)).json();N(n)}});w.addEventListener("click",e=>{const s=parseInt(e.target.getAttribute("value"));m="formSearch",C(e,m,s)});g.addEventListener("submit",e=>{e.preventDefault(),m="formSearch",C(e,m,1)});const B=document.querySelector(".search-container"),V=document.querySelector(".home-filters"),Y=document.querySelector(".exercsise-pagination-list"),b=document.querySelector(".filters-box"),x=document.getElementById("cards-list"),Z=b.querySelector(".filters-list-item"),G=Z.dataset.filter,f=document.querySelector(".pagination-list"),q=window.innerWidth;let P=new L,d=null,K=1;const l={filter:G,page:K,limit:d};function Q(){V.scrollIntoView({behavior:"smooth",block:"start"})}function I(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function X(e){const s=parseInt(e.target.getAttribute("value"));l.page=s,await H(e),Q()}function ee(e){b.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function y(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function te(){try{const s=await(await P.getListExercises(l)).json();s.results&&s.results.length>0?(I(q),x.innerHTML=F(s.results),y(),f.innerHTML=p(s.totalPages,l.page)):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}async function H(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){ee(e);const t=e.target.dataset.filter;l.filter=t,l.page=1,I(q)}try{const n=await(await P.getListExercises(l)).json();n.results&&n.results.length>0?(x.innerHTML=F(n.results),B.innerHTML="",g.reset(),Y.innerHTML="",f.innerHTML="",f.innerHTML=p(n.totalPages,l.page),y()):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function F(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${$(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}async function se(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),i.page=1,await M(n,s),_(n,s)}}document.addEventListener("DOMContentLoaded",te);b.addEventListener("click",e=>H(e,"filter"));x.addEventListener("click",se);f.addEventListener("click",e=>X(e));const v=document.querySelector(".back-to-top");v.addEventListener("click",ne);window.onscroll=()=>{ie()};function ne(){window.scrollTo({top:0,behavior:"smooth"})}function ie(){document.body.scrollTop>20||document.documentElement.scrollTop>20?v.classList.remove("is-hidden"):v.classList.add("is-hidden")}const re=document.querySelector(".icon-about-sport");let k=0;function oe(){k+=1,re.style.transform=`rotate(${k}deg)`}setInterval(oe,10);
//# sourceMappingURL=commonHelpers2.js.map
