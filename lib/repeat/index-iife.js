var repeat=function(r){"use strict";return r.repeat=function(r,e){if(Number.isFinite(e)){let t="";for(let n=0;n<e;n++)t+=r;return t}throw new Error(`${e} is not a Number`)},r}({});
