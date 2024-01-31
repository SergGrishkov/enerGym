import{E as w,f as b,c as W,r as p}from"./assets/pagination-4550126c.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new w,o;function j(r){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=r,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(r){r.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){j("Email format is incorrect");return}try{const k=(await n.createSubscription({email:c})).info();console.log(k),t.textContent=k.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",o=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(C){console.error("Error:",C)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(r){r.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(o)})}),document.addEventListener("keydown",function(r){r.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(o))}),window.addEventListener("click",function(r){r.target===s&&(s.classList.remove("is-open"),clearTimeout(o))})});const u=document.getElementById("cards-list"),U=document.querySelector(".pagination-list"),E=document.querySelector(".exercsise-pagination-list"),x=new w,M=document.querySelector(".slash"),L=document.querySelector(".home-filters-subtitle"),g=document.querySelector(".form"),O=window.innerWidth;let R=1,_,m="",h;const i={page:R,limit:_},a={filter:"",name:""};function z(e){return e<1280?i.limit=8:i.limit=9,i.limit}z(O);function J(e,s){a.filter=e,a.name=s.toLowerCase()}function q(e,s,t){i.page=t,s==="formSearch"?Y(e,i.page):B(a.filter,a.name)}async function B(e,s){const t={[e]:s,...i};try{const n=await(await x.getListExercisesBySubspecies(t)).json();if(n.results){const o=n.results;M.textContent="/",u.innerHTML=A(o),y(),P.insertAdjacentElement("beforeEnd",g),U.innerHTML="",E.innerHTML=p(n.totalPages,i.page)}}catch(n){console.log(n)}}function A(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
            <p class="training-name">${b(t.name)}</p>
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
        </li>`,"")}function V(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}async function Y(e,s){e.preventDefault(),h=g.elements.delay.value.trim();const t={};h?(t[a.filter]=a.name,t.keyword=h,t.page=s,t.limit=i.limit):(t[a.filter]=a.name,t.page=s,t.limit=i.limit);const n=await(await x.getListExercisesBySubspecies(t)).json();n.results.length>0?(u.innerHTML=A(n.results),y(),E.innerHTML=p(n.totalPages,n.page)):u.innerHTML=V()}u.addEventListener("click",async e=>{const s=Array.from(u.children);if(e.target.classList.contains("cards-list-item")&&(L.textContent=b(`${e.target.dataset.name}`),console.log(L.textContent)),e.target.classList.contains("arrow-btn")){const t=s.filter(o=>o.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await x.getExerciseById(t)).json();W(n)}});E.addEventListener("click",e=>{const s=parseInt(e.target.getAttribute("value"));m="formSearch",q(e,m,s)});g.addEventListener("submit",e=>{e.preventDefault(),m="formSearch",q(e,m,1)});const P=document.querySelector(".search-container"),Z=document.querySelector(".home-filters"),G=document.querySelector(".exercsise-pagination-list"),S=document.querySelector(".filters-box"),T=document.getElementById("cards-list"),K=S.querySelector(".filters-list-item"),Q=K.dataset.filter,f=document.querySelector(".pagination-list"),H=window.innerWidth;let I=new w,d=null,X=1;const l={filter:Q,page:X,limit:d};function ee(){Z.scrollIntoView({behavior:"smooth",block:"start"})}function F(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function te(e){const s=parseInt(e.target.getAttribute("value"));l.page=s,await D(e),ee()}function se(e){S.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function y(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function ne(){try{const s=await(await I.getListExercises(l)).json();s.results&&s.results.length>0?(F(H),T.innerHTML=N(s.results),y(),f.innerHTML=p(s.totalPages,l.page)):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}async function D(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){se(e);const t=e.target.dataset.filter;l.filter=t,l.page=1,F(H)}try{const n=await(await I.getListExercises(l)).json();n.results&&n.results.length>0?(T.innerHTML=N(n.results),P.innerHTML="",M.textContent="",L.textContent="",g.reset(),G.innerHTML="",f.innerHTML="",f.innerHTML=p(n.totalPages,l.page),y()):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}}function N(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${b(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}async function ie(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),i.page=1,await B(n,s),J(n,s)}}document.addEventListener("DOMContentLoaded",ne);S.addEventListener("click",e=>D(e,"filter"));T.addEventListener("click",ie);f.addEventListener("click",e=>te(e));const v=document.querySelector(".back-to-top");v.addEventListener("click",re);window.onscroll=()=>{oe()};function re(){window.scrollTo({top:0,behavior:"smooth"})}function oe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?v.classList.remove("is-hidden"):v.classList.add("is-hidden")}const ae=document.querySelector(".icon-about-sport");let $=0;function ce(){$+=1,ae.style.transform=`rotate(${$}deg)`}setInterval(ce,10);
//# sourceMappingURL=commonHelpers2.js.map
