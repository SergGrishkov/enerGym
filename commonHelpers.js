import{f as c,s as l,g as r,r as d,i as v,a as g,c as f,E as m}from"./assets/pagination-03b27d93.js";import"./assets/vendor-6fe7236c.js";function n(e){return e?e.reduce((a,t)=>a+`
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
                    <p>${c(t.name)}</p>
                </div>
                <div class="favorite-label-burn">
                    <p>Burned calories:</p>
                    <span>${t.burnedCalories} / ${t.time} min</span>
                    <p>Body part:</p>
                    <span>${c(t.bodyPart)}</span>
                    <p>Target:</p>
                    <span>${c(t.target)}</span>
                </div>
            </li>
    `,""):`
    <div class="missing-cards">
            <img src="./dumbbell@1x.png" alt="dumbbell-img">
            <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add
                exercises that you
                like to your favorites for easier access in the future.</p>
        </div>
    `}const b=new m,u=8,s=document.querySelector(".favorites-container-content-items"),i=document.querySelector(".pagination-list"),o=l(r(),u);document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth<=767){let e=l(r(),u)[0];s.innerHTML=n(e),i.innerHTML=d(o.length,1)}else{const e=n(r());s.innerHTML=e}});window.addEventListener("resize",()=>{if(window.matchMedia("(max-width: 767px)").matches){let e=l(r(),u)[0];s.innerHTML=n(e),i.innerHTML=d(o.length,1)}else{const e=n(r());s.innerHTML=e,i.innerHTML=""}});s.addEventListener("click",async e=>{if(e.target.ariaLabel!=="icon-bucket"&&e.target.className!=="favorite-remove-btn"&&e.target.className!=="favorite-start-btn"&&e.target.ariaLabel!=="start-arrow")return;let a=Object.values(e.target.closest("[data-exerciseId]").dataset)[0];if(e.target.ariaLabel==="icon-bucket"||e.target.className==="favorite-remove-btn")try{v(a)&&(g(a),document.querySelector(`[data-exerciseId="${a}"]`).remove()),r()||(i.innerHTML="",window.location.reload())}catch(t){console.log(`Exercise with ${a} can't be removed`,t)}if(e.target.className==="favorite-start-btn"||e.target.ariaLabel==="start-arrow"){const t=await b.getExerciseById(a);f(t.json())}});i.addEventListener("click",p);function p(e){e.target.tagName==="LI"&&(console.log(e.target.value),i.innerHTML=d(o.length,e.target.value),s.innerHTML=n(o[e.target.value-1]))}
//# sourceMappingURL=commonHelpers.js.map
