import{f as r,g as o,i as n,r as c,E as l}from"./assets/quote-0359a058.js";import"./assets/vendor-0fffa566.js";function d(e){return e?e.reduce((a,t)=>a+`
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
                    <p>${r(t.name)}</p>
                </div>
                <div class="favorite-label-burn">
                    <p>Burned calories:</p>
                    <span>${t.burnedCalories} / ${t.time} min</span>
                    <p>Body part:</p>
                    <span>${r(t.bodyPart)}</span>
                    <p>Target:</p>
                    <span>${r(t.target)}</span>
                </div>
            </li>
    `,""):`
    <div class="missing-cards">
            <img src="./img/favorites/dumbbell@1x.png" alt="dumbbell">
            <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add
                exercises that you
                like to your favorites for easier access in the future.</p>
        </div>
    `}const v=new l;let s;const i=document.querySelector(".favorites-container-content-items");document.addEventListener("DOMContentLoaded",async()=>{const e=d(o());i.innerHTML=e,s=await v.init()});i.addEventListener("click",async e=>{if(e.target.ariaLabel!=="icon-bucket"&&e.target.className!=="favorite-remove-btn"&&e.target.className!=="favorite-start-btn"&&e.target.ariaLabel!=="start-arrow")return;let a=Object.values(e.target.closest("[data-exerciseId]").dataset)[0];if(e.target.ariaLabel==="icon-bucket"||e.target.className==="favorite-remove-btn")try{n(a)&&(c(a),document.querySelector(`[data-exerciseId="${a}"]`).remove()),window.location.reload()}catch(t){console.log(`Exercise with ${a} can't be removed`,t)}if(e.target.className==="favorite-start-btn"||e.target.ariaLabel==="start-arrow"){const t=await s.getExerciseById(a);console.log(t.json())}});
//# sourceMappingURL=commonHelpers.js.map
