import{j as f}from"./index-40ca6956.js";const o={}.VITE_API_HOST||"http://localhost:8080",a=o+"/pois",h=f([]);async function e(){h.value=await(await fetch(a)).json()}async function l(t,i,n,s,c,p,r){await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:t,tipologia:i,descrizione:n,posizione:s,stato:c,orari_apertura:p,immagine:r})}),e()}async function m(t){await fetch(o+"/"+t.self,{method:"DELETE",headers:{"Content-Type":"application/json"}}),e()}export{l as c,m as d,e as f,h as p};