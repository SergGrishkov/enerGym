import{f,s as l,g as r,r as u,i as g,a as b,c as L,E as p}from"./assets/pagination-0e1a19b4.js";import"./assets/vendor-6fe7236c.js";function i(e){return e?e.reduce((a,t)=>a+`
    <li class="favorite-item" data-exerciseId="${t._id}">
                <div class="favorite-label-drop-start">
                    <p class="favorite-label-workout">WORKOUT</p>
                    <button class="favorite-remove-btn">
                        <svg class="remove-favorites" width="16" height="16" aria-label="icon-bucket">
                          <use href="./sprite.svg#icon-remove-favorites"></use>
                        </svg>
                    </button>
                    <button class="favorite-start-btn">Start
                        <svg class="favorites-icon" width="14" height="14" aria-label="start-arrow">
                            <use href="./sprite.svg#icon-exercises-arrow"></use>
                        </svg>
                    </button>
                </div>
                <div class="favorite-label-icon-run">
                    <svg class="favorite-icon-run" width="24" height="24" aria-label="icon-bucket">
                        <use href="./sprite.svg#icon-exercises-man"></use>
                    </svg>
                    <p>${f(t.name)}</p>
                </div>
                <div class="favorite-label-burn">
                    <p>Burned calories:</p>
                    <span>${t.burnedCalories} / ${t.time} min</span>
                    <p>Body part:</p>
                    <span>${f(t.bodyPart)}</span>
                    <p>Target:</p>
                    <span>${f(t.target)}</span>
                </div>
            </li>
    `,""):`
    <div class="missing-cards">
            <img src="./dumbbell@1x.png" alt="dumbbell-img">
            <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add
                exercises that you
                like to your favorites for easier access in the future.</p>
        </div>
    `}const w=new p,n=8,s=document.querySelector(".favorites-container-content-items"),o=document.querySelector(".pagination-list"),h=document.querySelector(".backdrop"),y=document.body;let m;const d=l(r(),n);document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth<=767){let e=l(r(),n)[0];s.innerHTML=i(e),o.innerHTML=u(d.length,1)}else{const e=i(r());s.innerHTML=e}});window.addEventListener("resize",()=>{if(window.matchMedia("(max-width: 767px)").matches){let e=l(r(),n),a=l(r(),n)[0];s.innerHTML=i(a),o.innerHTML=u(e.length,1)}else{const e=i(r());s.innerHTML=e,o.innerHTML=""}});s.addEventListener("click",async e=>{if(e.target.ariaLabel!=="icon-bucket"&&e.target.className!=="favorite-remove-btn"&&e.target.className!=="favorite-start-btn"&&e.target.ariaLabel!=="start-arrow")return;let a=Object.values(e.target.closest("[data-exerciseId]").dataset)[0];if(e.target.ariaLabel==="icon-bucket"||e.target.className==="favorite-remove-btn"){let t;try{g(a)&&(b(a),document.querySelector(`[data-exerciseId="${a}"]`).remove(),t=r()?r().length:0,t%n===0&&(o.innerHTML=u(d.length,1),window.location.reload()),t===0&&(o.innerHTML="",window.location.reload()))}catch(c){console.log(`Exercise with ${a} can't be removed`,c)}}if(e.target.className==="favorite-start-btn"||e.target.ariaLabel==="start-arrow"){const t=await w.getExerciseById(a);L(t.json()),m=document.querySelector(".js-add-remove-btn"),m.addEventListener("click",c=>{window.location.pathname!=="/favorites.html"&&c.target.classList.contains("js-add-remove-btn")||c.target.innerText.trim()==="Remove from favorites"&&document.querySelector(`[data-exerciseId="${a}"]`).remove()})}});o.addEventListener("click",x);function x(e){e.target.tagName==="LI"&&(o.innerHTML=u(d.length,e.target.value),s.innerHTML=i(d[e.target.value-1]))}const k=document.querySelector(".modal-close-icon use");function E(e){e.key==="Escape"&&v()}function v(){h.classList.remove("is-open"),y.classList.remove("modal-open"),window.removeEventListener("keydown",E),window.removeEventListener("click",M);const e=i(r());s.innerHTML=e}function M(e){e.preventDefault(),(e.target.classList.value==="close-btn"||e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&v()}k.addEventListener("click",function(){v()});window.addEventListener("keydown",function(){v()});
//# sourceMappingURL=commonHelpers.js.map
