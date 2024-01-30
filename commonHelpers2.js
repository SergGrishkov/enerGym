import{E as g,c as B,f as E,r as L}from"./assets/pagination-03b27d93.js";import"./assets/vendor-6fe7236c.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new g,i;function l(o){const a=document.createElement("div");a.classList.add("error-message"),a.textContent=o,e.parentNode.insertBefore(a,e.nextSibling),setTimeout(function(){a.remove()},2e3)}e.addEventListener("submit",async function(o){o.preventDefault();const a=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(a)){l("Email format is incorrect");return}try{const w=(await n.createSubscription({email:a})).info();console.log(w),t.textContent=w.message,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",i=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(v){console.error("Error:",v)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(o){o.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(i)})}),document.addEventListener("keydown",function(o){o.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(i))}),window.addEventListener("click",function(o){o.target===s&&(s.classList.remove("is-open"),clearTimeout(i))})});const x=new g,f=document.querySelector(".form"),u=document.getElementById("cards-list"),A=window.innerWidth;let q,I,H=1,F;const r={filter:q,name:I,page:H,limit:F};function P(e){return e<1280?r.limit=8:r.limit=9,r.limit}P(A);async function j(e,s){r.filter=e,r.name=s;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const i=await(await fetch(t)).json();if(i.results){const l=i.results;u.innerHTML=T(l),$.insertAdjacentElement("beforeEnd",f)}}catch(n){console.log(n)}}function T(e){return e.reduce((s,t)=>s+`<li class="list-item animated-card" data-exerciseid="${t._id}">
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
            <p class="training-name">${E(t.name)}</p>
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
        </li>`,"")}function D(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}f.addEventListener("submit",async e=>{e.preventDefault();const s={[r.filter]:r.name,page:1,limit:10},t=f.elements.delay.value.trim();s.keyword=t;const n=await(await x.getListExercisesBySubspecies(s)).json();t&&n.results.length>0?(u.innerHTML=T(n.results),k(),f.reset()):u.innerHTML=D()});u.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(u.children).filter(i=>i.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await x.getExerciseById(t)).json();B(n)}});const N=document.querySelector(".home-filters"),$=document.querySelector(".search-container"),y=document.querySelector(".filters-box"),h=document.getElementById("cards-list"),U=y.querySelector(".filters-list-item"),R=U.dataset.filter,m=document.querySelector(".pagination-list"),W=window.innerWidth;let d=null,O=1;J(W);function _(){N.scrollIntoView({behavior:"smooth",block:"start"})}let S=new g;const c={filter:R,page:O,limit:d};async function z(){let e=await S.init();try{const t=await(await e.getListExercises(c)).json();if(t.results&&t.results.length>0){h.innerHTML=M(t.results),m.innerHTML="";let n=L(t.totalPages,c.page);m.innerHTML=n}else console.error("No exercises found.")}catch(s){console.error("Error fetching exercises:",s)}}function J(e){return e<768?d=8:(e>=768&&e<1024,d=12),d}async function V(e){const s=parseInt(e.target.getAttribute("value"));c.page=s,await C(e),_()}function Y(e){y.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function k(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function C(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){Y(e);const n=e.target.dataset.filter;c.filter=n,c.page=1}let t=await S.init();try{const i=await(await t.getListExercises(c)).json();if(i.results&&i.results.length>0){h.innerHTML=M(i.results),$.innerHTML="",m.innerHTML="";let l=L(i.totalPages,c.page);m.innerHTML=l,k()}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}async function Z(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let n=t;t==="body parts"&&(n="bodypart"),await j(n,s)}}function M(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${E(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",z);y.addEventListener("click",e=>C(e,"filter"));h.addEventListener("click",Z);m.addEventListener("click",e=>V(e));const p=document.querySelector(".back-to-top");p.addEventListener("click",G);window.onscroll=()=>{K()};function G(){window.scrollTo({top:0,behavior:"smooth"})}function K(){document.body.scrollTop>20||document.documentElement.scrollTop>20?p.classList.remove("is-hidden"):p.classList.add("is-hidden")}const Q=document.querySelector(".icon-about-sport");let b=0;function X(){b+=1,Q.style.transform=`rotate(${b}deg)`}setInterval(X,10);
//# sourceMappingURL=commonHelpers2.js.map
