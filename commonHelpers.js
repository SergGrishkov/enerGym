import{f as u,s as c,g as r,r as d,i as g,a as f,c as m,E as b}from"./assets/pagination-be535560.js";import"./assets/vendor-6fe7236c.js";function n(e){return e?e.reduce((a,t)=>a+`
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
                    <p>${u(t.name)}</p>
                </div>
                <div class="favorite-label-burn">
                    <p>Burned calories:</p>
                    <span>${t.burnedCalories} / ${t.time} min</span>
                    <p>Body part:</p>
                    <span>${u(t.bodyPart)}</span>
                    <p>Target:</p>
                    <span>${u(t.target)}</span>
                </div>
            </li>
    `,""):`
    <div class="missing-cards">
            <img src="./dumbbell@1x.png" alt="dumbbell-img">
            <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add
                exercises that you
                like to your favorites for easier access in the future.</p>
        </div>
    `}const h=new b,o=8,s=document.querySelector(".favorites-container-content-items"),i=document.querySelector(".pagination-list"),l=c(r(),o);document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth<=767){let e=c(r(),o)[0];s.innerHTML=n(e),i.innerHTML=d(l.length,1)}else{const e=n(r());s.innerHTML=e}});window.addEventListener("resize",()=>{if(window.matchMedia("(max-width: 767px)").matches){let e=c(r(),o),a=c(r(),o)[0];s.innerHTML=n(a),i.innerHTML=d(e.length,1)}else{const e=n(r());s.innerHTML=e,i.innerHTML=""}});s.addEventListener("click",async e=>{if(e.target.ariaLabel!=="icon-bucket"&&e.target.className!=="favorite-remove-btn"&&e.target.className!=="favorite-start-btn"&&e.target.ariaLabel!=="start-arrow")return;let a=Object.values(e.target.closest("[data-exerciseId]").dataset)[0];if(e.target.ariaLabel==="icon-bucket"||e.target.className==="favorite-remove-btn"){let t;try{g(a)&&(f(a),document.querySelector(`[data-exerciseId="${a}"]`).remove(),t=r()?r().length:0,t%o===0&&(i.innerHTML=d(l.length,1),window.location.reload()),t===0&&(i.innerHTML="",window.location.reload()))}catch(v){console.log(`Exercise with ${a} can't be removed`,v)}}if(e.target.className==="favorite-start-btn"||e.target.ariaLabel==="start-arrow"){const t=await h.getExerciseById(a);m(t.json())}});i.addEventListener("click",p);function p(e){e.target.tagName==="LI"&&(i.innerHTML=d(l.length,e.target.value),s.innerHTML=n(l[e.target.value-1]))}
//# sourceMappingURL=commonHelpers.js.map
