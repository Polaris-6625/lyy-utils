function c(c,n){const r={},h=[];return c.forEach((c=>{r[c.id]={...c,children:[]}})),c.forEach((c=>{const i=r[c[n]];i?i.children.push(r[c.id]):h.push(r[c.id])})),h}export{c as arrayToTree};
