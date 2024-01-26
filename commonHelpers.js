(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const l=document.querySelector(".js-menu"),f=document.querySelector(".js-open-menu"),p=document.querySelector(".js-close-menu"),a=()=>{const t=l.classList.toggle("is-open");document.body.style.overflow=t?"hidden":""};f.addEventListener("click",a);p.addEventListener("click",a);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(l.classList.remove("is-open"),document.body.style.overflow="")});function m(t){return t.split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()).join(" ")}const c=document.querySelector(".filters-box"),d=document.getElementById("cards-list"),g=c.querySelector(".filters-list-item"),y=g.dataset.filter,h=`https://energyflow.b.goit.study/api/filters?filter=${y}&page=1&limit=8`;document.addEventListener("DOMContentLoaded",async()=>{try{const r=await(await fetch(h)).json();r.results&&r.results.length>0?u(d,r.results):console.error("No exercises found.")}catch(t){console.error("Error fetching exercises:",t)}});c.addEventListener("click",async t=>{if(t.target.classList.contains("filters-list-item")){c.querySelectorAll(".filters-list-item").forEach(o=>{o.classList.remove("active_item")}),t.target.classList.add("active_item");const i=`https://energyflow.b.goit.study/api/filters?filter=${t.target.dataset.filter}&page=1&limit=8`;try{const e=await(await fetch(i)).json();e.results&&e.results.length>0?u(d,e.results):console.error("No exercises found.")}catch(o){console.error("Error fetching exercises:",o)}}});function u(t,r){const i=r.reduce((o,e)=>o+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${e.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${m(e.name)}</h3>
      <p class="card-subtitle">${e.filter}</p>
    </li>`,"");t.innerHTML=i}
//# sourceMappingURL=commonHelpers.js.map
