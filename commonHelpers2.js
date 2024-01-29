import{i as A,r as C,a as M,E as y,f as E}from"./assets/quote-290f6346.js";import"./assets/vendor-ebddff4e.js";document.querySelector(".backdrop");const I=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let l;document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&(console.log(l),A(l._id)?(C(l._id),console.log("Remove exercise from favorites:",l,l._id),b(!1)):(M(l),console.log("Exercise added to favorites:",l),b(!0)))});function b(e){const s=e?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",o=I.querySelector(".js-add-remove-btn");o.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${s}'></use></svg></p></button>`}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),s=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let o=new y,n;function i(a){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=a,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(a){a.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){i("Email format is incorrect");return}try{const u=await o.createSubscription({email:c}),B=u&&u.data?JSON.parse(u.data).message:"";console.log("Server Response:",u),t.textContent=B,s.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",n=setTimeout(function(){s.classList.remove("is-open")},8e3)}catch(u){console.error("Error:",u)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(a){a.addEventListener("click",function(){s.classList.remove("is-open"),clearTimeout(n)})}),document.addEventListener("keydown",function(a){a.key==="Escape"&&s.classList.contains("is-open")&&(s.classList.remove("is-open"),clearTimeout(n))}),window.addEventListener("click",function(a){a.target===s&&(s.classList.remove("is-open"),clearTimeout(n))})});const F=new y,p=document.querySelector(".form");document.querySelector(".modal-exercise");const H=window.innerWidth;p.elements.delay;let _,j,N=1,P;const r={filter:_,name:j,page:N,limit:P};function R(e){return e<1280?r.limit=8:r.limit=9,r.limit}R(H);async function U(e,s){r.filter=e,r.name=s;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const n=await(await fetch(t)).json();if(n.results){const i=n.results;m.innerHTML=L(i),S.insertAdjacentElement("beforeEnd",p)}}catch(o){console.log(o)}}function L(e){return e.reduce((s,t)=>s+`<li class="list-item" data-exerciseid="${t._id}">
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
        </li>`,"")}function D(){return"<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}p.addEventListener("submit",async e=>{e.preventDefault();const s={[r.filter]:r.name,page:1,limit:10},t=p.elements.delay.value.trim();s.keyword=t;const o=await(await F.getListExercisesBySubspecies(s)).json();t&&o.results.length>0?(m.innerHTML=L(o.results),p.reset()):m.innerHTML=D()});function x(e,s){return Array.from({length:e}).reduce((t,o,n)=>{const i=n+1;return t+`<li class="pagination-element ${i===s?"active_pag_item":""}" value="${i}">${i}</li>`},"")}const W=document.querySelector(".home-filters"),S=document.querySelector(".search-container"),h=document.querySelector(".filters-box"),m=document.getElementById("cards-list"),O=h.querySelector(".filters-list-item"),z=O.dataset.filter,g=document.querySelector(".pagination-list"),J=window.innerWidth;let f=null,V=1;G(J);function Y(){W.scrollIntoView({behavior:"smooth",block:"start"})}let T=new y;const d={filter:z,page:V,limit:f};async function Z(){let e=await T.init();try{const t=await(await e.getListExercises(d)).json();if(t.results&&t.results.length>0){m.innerHTML=k(t.results),g.innerHTML="";let o=x(t.totalPages,d.page);g.innerHTML=o}else console.error("No exercises found.")}catch(s){console.error("Error fetching exercises:",s)}}function G(e){return e<768?f=8:(e>=768&&e<1024,f=12),f}async function K(e){const s=parseInt(e.target.getAttribute("value"));d.page=s,await $(e),Y()}function Q(e){h.querySelectorAll(".filters-list-item").forEach(s=>{s.classList.remove("active_item")}),e.target.classList.add("active_item")}function X(){const e=document.querySelectorAll(".animated-card");e.forEach(s=>{s.style.opacity="0"}),e.forEach((s,t)=>{setTimeout(()=>{s.style.opacity="1"},t*100)})}async function $(e,s){if(s==="filter"||e.target.classList.contains("filters-list-item")){Q(e);const o=e.target.dataset.filter;d.filter=o,d.page=1}let t=await T.init();try{const n=await(await t.getListExercises(d)).json();if(n.results&&n.results.length>0){m.innerHTML=k(n.results),S.innerHTML="",g.innerHTML="";let i=x(n.totalPages,d.page);g.innerHTML=i,X()}else console.error("No exercises found.")}catch(o){console.error("Error fetching exercises:",o)}}async function ee(e){const s=e.target.dataset.name,t=e.target.dataset.filter;if(s&&t){let o=t;t==="body parts"&&(o="bodypart"),await U(o,s)}}function k(e){return e.reduce((s,t)=>s+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${E(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",Z);h.addEventListener("click",e=>$(e,"filter"));m.addEventListener("click",ee);g.addEventListener("click",e=>K(e));const v=document.querySelector(".back-to-top");v.addEventListener("click",te);window.onscroll=()=>{se()};function te(){window.scrollTo({top:0,behavior:"smooth"})}function se(){document.body.scrollTop>20||document.documentElement.scrollTop>20?v.classList.remove("is-hidden"):v.classList.add("is-hidden")}const oe=document.querySelector(".icon-about-sport");let w=0;function ne(){w+=1,oe.style.transform=`rotate(${w}deg)`}setInterval(ne,10);
//# sourceMappingURL=commonHelpers2.js.map
