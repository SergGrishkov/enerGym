import{f as u,s as c,g as r,r as d,i as g,a as f,c as m,E as b}from"./assets/pagination-e5c47ec1.js";import"./assets/vendor-6fe7236c.js";function n(e){return e?e.reduce((t,a)=>t+`
    <li class="favorite-item" data-exerciseId="${a._id}">
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
                    <p>${u(a.name)}</p>
                </div>
                <div class="favorite-label-burn">
                    <p>Burned calories:</p>
                    <span>${a.burnedCalories} / ${a.time} min</span>
                    <p>Body part:</p>
                    <span>${u(a.bodyPart)}</span>
                    <p>Target:</p>
                    <span>${u(a.target)}</span>
                </div>
            </li>
    `,""):`
    <div class="missing-cards">
            <img src="./dumbbell@1x.png" alt="dumbbell-img">
            <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add
                exercises that you
                like to your favorites for easier access in the future.</p>
        </div>
    `}const h=new b,o=8,s=document.querySelector(".favorites-container-content-items"),i=document.querySelector(".pagination-list"),l=c(r(),o);document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth<=767){let e=c(r(),o)[0];s.innerHTML=n(e),i.innerHTML=d(l.length,1)}else{const e=n(r());s.innerHTML=e}});window.addEventListener("resize",()=>{if(window.matchMedia("(max-width: 767px)").matches){let e=c(r(),o),t=c(r(),o)[0];s.innerHTML=n(t),i.innerHTML=d(e.length,1)}else{const e=n(r());s.innerHTML=e,i.innerHTML=""}});s.addEventListener("click",async e=>{if(!(e.target.ariaLabel!=="icon-bucket"&&e.target.className!=="favorite-remove-btn"&&e.target.className!=="favorite-start-btn"&&e.target.ariaLabel!=="start-arrow")){if(e.target.ariaLabel==="icon-bucket"||e.target.className==="favorite-remove-btn"){let t=Object.values(e.target.closest("[data-exerciseId]").dataset)[0],a;try{g(t)&&(f(t),document.querySelector(`[data-exerciseId="${t}"]`).remove(),a=r()?r().length:0,a%o===0&&(i.innerHTML=d(l.length,1),window.location.reload()),a===0&&(i.innerHTML="",window.location.reload()))}catch(v){console.log(`Exercise with ${t} can't be removed`,v)}}if(e.target.className==="favorite-start-btn"||e.target.ariaLabel==="start-arrow"){const t=await h.getExerciseById(id);m(t.json())}}});i.addEventListener("click",p);function p(e){e.target.tagName==="LI"&&(i.innerHTML=d(l.length,e.target.value),s.innerHTML=n(l[e.target.value-1]))}
//# sourceMappingURL=commonHelpers.js.map
