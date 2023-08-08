function t(t,n){if("string"!=typeof t)throw new Error(`${t} is not a string`);const r=new RegExp(n,"g"),e=t.match(r);return e?e.length:0}export{t as designateRepeat};
