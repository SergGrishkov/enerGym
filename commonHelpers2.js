import{f as c,g as l}from"./assets/mobile-menu-bcb73d7c.js";import"./assets/vendor-0fffa566.js";document.querySelector(".js-modal-container");const d=document.querySelector(".backdrop");window.addEventListener("keydown",function(e){e.key==="Escape"&&d.classList.remove("is-open"),window.removeEventListener("keydown")});const n=document.querySelector(".filters-box"),i=document.getElementById("cards-list"),u=n.querySelector(".filters-list-item"),f=u.dataset.filter,m=`https://energyflow.b.goit.study/api/filters?filter=${f}&page=1&limit=8`;document.addEventListener("DOMContentLoaded",async()=>{try{const t=await(await fetch(m)).json();t.results&&t.results.length>0?a(i,t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}});n.addEventListener("click",async e=>{if(e.target.classList.contains("filters-list-item")){n.querySelectorAll(".filters-list-item").forEach(r=>{r.classList.remove("active_item")}),e.target.classList.add("active_item");const o=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=8`;try{const s=await(await fetch(o)).json();s.results&&s.results.length>0?a(i,s.results):console.error("No exercises found.")}catch(r){console.error("Error fetching exercises:",r)}}});function a(e,t){const o=t.reduce((r,s)=>r+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${s.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${c(s.name)}</h3>
      <p class="card-subtitle">${s.filter}</p>
    </li>`,"");e.innerHTML=o}async function g(){document.querySelector(".favorites-info-container");const e=document.getElementById("favorites-text"),t=document.querySelector(".favorites-author");try{const{author:o,quote:r}=await l();e.textContent=r,t.textContent=`${o}`}catch(o){console.error("Error fetching or updating the quote:",o)}}g();
//# sourceMappingURL=commonHelpers2.js.map
