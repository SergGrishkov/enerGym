import{E,f as x,c as O,r as y}from"./assets/pagination-a1013265.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new E,o;function U(r){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=r,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(r){r.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){U("Email format is incorrect");return}try{const $=(await n.createSubscription({email:c})).info();console.log($),t.textContent=$.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",o=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(C){console.error("Error:",C)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(r){r.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(o)})}),document.addEventListener("keydown",function(r){r.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(o))}),window.addEventListener("click",function(r){r.target===s&&(s.classList.remove("is-open"),clearTimeout(o))})});const u=document.getElementById("cards-list"),R=document.querySelector(".pagination-list"),h=document.querySelector(".exercsise-pagination-list"),S=new E,m=document.querySelector(".slash"),f=document.querySelector(".home-filters-subtitle"),L=document.querySelector(".form"),q=window.innerWidth;let _=1,z,p="",w;const i={page:_,limit:z},a={filter:"",name:""};function B(e){return e<1280?i.limit=8:i.limit=9,i.limit}function J(e,s){a.filter=e,a.name=s.toLowerCase()}function A(e,s,t){i.page=t,s==="formSearch"?Y(e,i.page):P(a.filter,a.name)}async function P(e,s){B(q);const t={[e]:s,...i};try{const n=await(await S.getListExercisesBySubspecies(t)).json();if(n.results){const o=n.results;m.classList.add("opacity-animating"),f.classList.add("opacity-animating"),m.textContent="/",u.innerHTML=H(o),v(),I.insertAdjacentElement("beforeEnd",L),R.innerHTML="",h.innerHTML=y(n.totalPages,i.page)}}catch(n){console.log(n)}}function H(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
        </li>`,"")}function V(){return h.innerHTML="",'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}async function Y(e,s){e.preventDefault(),w=L.elements.delay.value.trim(),B(q);const t={};w?(t[a.filter]=a.name,t.keyword=w,t.page=s,t.limit=i.limit):(t[a.filter]=a.name,t.page=s,t.limit=i.limit);const n=await(await S.getListExercisesBySubspecies(t)).json();n.results.length>0?(u.innerHTML=H(n.results),v(),h.innerHTML=y(n.totalPages,n.page)):u.innerHTML=V()}u.addEventListener("click",async e=>{const s=Array.from(u.children);if(e.target.dataset.name&&(f.textContent=x(`${e.target.dataset.name}`)),e.target.classList.contains("arrow-btn")){const t=s.filter(o=>o.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await S.getExerciseById(t)).json();O(n)}});h.addEventListener("click",e=>{const s=parseInt(e.target.getAttribute("value"));p="formSearch",A(e,p,s)});L.addEventListener("submit",e=>{e.preventDefault(),p="formSearch",A(e,p,1)});const I=document.querySelector(".search-container"),Z=document.querySelector(".home-filters"),G=document.querySelector(".exercsise-pagination-list"),T=document.querySelector(".filters-box"),k=document.getElementById("cards-list"),K=T.querySelector(".filters-list-item"),Q=K.dataset.filter,g=document.querySelector(".pagination-list"),F=window.innerWidth;let D=new E,d=null,X=1;const l={filter:Q,page:X,limit:d};function ee(){Z.scrollIntoView({behavior:"smooth",block:"start"})}function N(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function te(e){const s=parseInt(e.target.getAttribute("value"));l.page=s,await j(e),ee()}function se(e){T.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function v(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function ne(){try{const s=await(await D.getListExercises(l)).json();s.results&&s.results.length>0?(N(F),k.innerHTML=W(s.results),v(),g.innerHTML=y(s.totalPages,l.page)):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}async function j(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){se(e);const t=e.target.dataset.filter;l.filter=t,l.page=1,N(F)}try{const n=await(await D.getListExercises(l)).json();n.results&&n.results.length>0?(k.innerHTML=W(n.results),I.innerHTML="",m.classList.remove("opacity-animating"),f.classList.remove("opacity-animating"),m.textContent="",f.textContent="",L.reset(),G.innerHTML="",g.innerHTML="",g.innerHTML=y(n.totalPages,l.page),v()):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function W(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${x(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}async function ie(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),i.page=1,await P(n,s),J(n,s)}}document.addEventListener("DOMContentLoaded",ne);T.addEventListener("click",e=>j(e,"filter"));k.addEventListener("click",ie);g.addEventListener("click",e=>te(e));const b=document.querySelector(".back-to-top");b.addEventListener("click",re);window.onscroll=()=>{oe()};function re(){window.scrollTo({top:0,behavior:"smooth"})}function oe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?b.classList.remove("is-hidden"):b.classList.add("is-hidden")}const ae=document.querySelector(".icon-about-sport");let M=0;function ce(){M+=1,ae.style.transform=`rotate(${M}deg)`}setInterval(ce,10);
//# sourceMappingURL=commonHelpers2.js.map
