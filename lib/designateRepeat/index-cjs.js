"use strict";exports.designateRepeat=function(t,e){if("string"!=typeof t)throw new Error(`${t} is not a string`);const n=new RegExp(e,"g"),r=t.match(n);return r?r.length:0};
