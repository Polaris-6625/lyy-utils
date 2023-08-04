"use strict";exports.treeFlattening=function(r,t){const n=[];return r.forEach((function r(c,i=0){const{[t]:o,...s}=c,e={...s,pid:i};n.push(e),o&&Array.isArray(o)&&o.forEach((t=>{r(t,c.id)}))})),n};
