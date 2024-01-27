import{f as a,g as f}from"./assets/navigation-906adb7f.js";import"./assets/vendor-0fffa566.js";const n=document.querySelector(".filters-box"),l=document.getElementById("cards-list"),u=n.querySelector(".filters-list-item"),d=u.dataset.filter,g=window.innerWidth;let s;p(g);const m=`https://energyflow.b.goit.study/api/filters?filter=${d}&page=1&limit=${s}`;function p(e){return e<768?s=8:(e>=768&&e<1024,s=12),s}async function h(){try{const t=await(await fetch(m)).json();t.results&&t.results.length>0?l.innerHTML=c(t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}function y(e){n.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function x(e){if(e.target.classList.contains("filters-list-item")){y(e);const r=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=${s}`;try{const i=await(await fetch(r)).json();i.results&&i.results.length>0?l.innerHTML=c(i.results):console.error("No exercises found.")}catch(o){console.error("Error fetching exercises:",o)}}}function c(e){return e.reduce((t,r)=>t+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${r.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${a(r.name)}</h3>
      <p class="card-subtitle">${r.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",h);n.addEventListener("click",x);async function E(){document.querySelector(".favorites-info-container");const e=document.getElementById("favorites-text"),t=document.querySelector(".favorites-author");try{const{author:r,quote:o}=await f();e.textContent=o,t.textContent=`${r}`}catch(r){console.error("Error fetching or updating the quote:",r)}}E();
//# sourceMappingURL=commonHelpers2.js.map
