System.register("treeFlattening",[],(function(t){"use strict";return{execute:function(){t("treeFlattening",(function(t,n){const e=[];return t.forEach((function t(r,i=0){const{[n]:c,...u}=r,o={...u,pid:i};e.push(o),c&&Array.isArray(c)&&c.forEach((n=>{t(n,r.id)}))})),e}))}}}));