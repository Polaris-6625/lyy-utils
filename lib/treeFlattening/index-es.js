function r(r,n){const o=[];return r.forEach((function r(c,t=0){const{[n]:i,...a}=c,f={...a,pid:t};o.push(f),i&&Array.isArray(i)&&i.forEach((n=>{r(n,c.id)}))})),o}export{r as treeFlattening};
