"use strict";exports.arrayToTree=function(r,c){const e={},i=[];return r.forEach((r=>{e[r.id]={...r,children:[]}})),r.forEach((r=>{const n=e[r[c]];n?n.children.push(e[r.id]):i.push(e[r.id])})),i};
