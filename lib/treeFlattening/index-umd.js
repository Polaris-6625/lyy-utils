!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).treeFlattening={})}(this,(function(e){"use strict";e.treeFlattening=function(e,t){const n=[];return e.forEach((function e(o,i=0){const{[t]:f,...r}=o,s={...r,pid:i};n.push(s),f&&Array.isArray(f)&&f.forEach((t=>{e(t,o.id)}))})),n}}));