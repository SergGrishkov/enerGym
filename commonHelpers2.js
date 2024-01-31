import{E as L,c as W,r as p,f as C}from"./assets/pagination-c169ac9c.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new L,i;function j(o){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=o,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(o){o.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){j("Email format is incorrect");return}try{const T=(await n.createSubscription({email:c})).info();console.log(T),t.textContent=T.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",i=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(S){console.error("Error:",S)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(o){o.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(i)})}),document.addEventListener("keydown",function(o){o.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(i))}),window.addEventListener("click",function(o){o.target===s&&(s.classList.remove("is-open"),clearTimeout(i))})});const u=document.getElementById("cards-list"),U=document.querySelector(".pagination-list"),E=document.querySelector(".exercsise-pagination-list"),w=new L,$=document.querySelector(".home-filters-title"),M=document.querySelector(".home-filters-subtitle"),O=document.querySelector(".filters-box"),g=document.querySelector(".form"),R=window.innerWidth;let _=1,z,m="",h;const r={page:_,limit:z},a={filter:"",name:""};function J(e){return e<1280?r.limit=8:r.limit=9,r.limit}J(R);function V(e,s){a.filter=e,a.name=s.toLowerCase()}function q(e,s,t){r.page=t,s==="formSearch"?Z(e,r.page):A(a.filter,a.name)}async function A(e,s){const t={[e]:s,...r};try{const n=await(await w.getListExercisesBySubspecies(t)).json();if(n.results){const i=n.results;$.textContent="Exercises/",M.textContent=`${i[0].target}`,u.innerHTML=B(i),y(),P.insertAdjacentElement("beforeEnd",g),U.innerHTML="",E.innerHTML=p(n.totalPages,r.page)}}catch(n){console.log(n)}}function B(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
            <p class="training-name">${C(t.name)}</p>
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
        </li>`,"")}function Y(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}async function Z(e,s){e.preventDefault(),h=g.elements.delay.value.trim();const t={};h?(t[a.filter]=a.name,t.keyword=h,t.page=s,t.limit=r.limit):(t[a.filter]=a.name,t.page=s,t.limit=r.limit);const n=await(await w.getListExercisesBySubspecies(t)).json();n.results.length>0?(u.innerHTML=B(n.results),y(),E.innerHTML=p(n.totalPages,n.page)):u.innerHTML=Y()}u.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(u.children).filter(i=>i.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await w.getExerciseById(t)).json();W(n)}});E.addEventListener("click",e=>{const s=parseInt(e.target.getAttribute("value"));m="formSearch",q(e,m,s)});g.addEventListener("submit",e=>{e.preventDefault(),m="formSearch",q(e,m,1)});O.addEventListener("click",()=>{$.textContent="Exercises",M.textContent=""});const P=document.querySelector(".search-container"),G=document.querySelector(".home-filters"),K=document.querySelector(".exercsise-pagination-list"),b=document.querySelector(".filters-box"),x=document.getElementById("cards-list"),Q=b.querySelector(".filters-list-item"),X=Q.dataset.filter,f=document.querySelector(".pagination-list"),I=window.innerWidth;let H=new L,d=null,ee=1;const l={filter:X,page:ee,limit:d};function te(){G.scrollIntoView({behavior:"smooth",block:"start"})}function F(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function se(e){const s=parseInt(e.target.getAttribute("value"));l.page=s,await D(e),te()}function ne(e){b.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function y(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function re(){try{const s=await(await H.getListExercises(l)).json();s.results&&s.results.length>0?(F(I),x.innerHTML=N(s.results),y(),f.innerHTML=p(s.totalPages,l.page)):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}async function D(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){ne(e);const t=e.target.dataset.filter;l.filter=t,l.page=1,F(I)}try{const n=await(await H.getListExercises(l)).json();n.results&&n.results.length>0?(x.innerHTML=N(n.results),P.innerHTML="",g.reset(),K.innerHTML="",f.innerHTML="",f.innerHTML=p(n.totalPages,l.page),y()):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function N(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${C(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}async function ie(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),r.page=1,await A(n,s),V(n,s)}}document.addEventListener("DOMContentLoaded",re);b.addEventListener("click",e=>D(e,"filter"));x.addEventListener("click",ie);f.addEventListener("click",e=>se(e));const v=document.querySelector(".back-to-top");v.addEventListener("click",oe);window.onscroll=()=>{ae()};function oe(){window.scrollTo({top:0,behavior:"smooth"})}function ae(){document.body.scrollTop>20||document.documentElement.scrollTop>20?v.classList.remove("is-hidden"):v.classList.add("is-hidden")}const ce=document.querySelector(".icon-about-sport");let k=0;function le(){k+=1,ce.style.transform=`rotate(${k}deg)`}setInterval(le,10);
//# sourceMappingURL=commonHelpers2.js.map
