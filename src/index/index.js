// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const nowDir = import.meta.url; // 当前模块的绝对路径
// const indexDir = 'index'; // index 目录的名称
// const srcDir = path.resolve(path.dirname(fileURLToPath(nowDir)), '../');
// console.log(srcDir);

// // 获取 src 目录下的所有文件和目录
// const filesAndDirs = fs.readdirSync(srcDir);

// // 过滤出除了 index 目录之外的工具函数目录
// const toolsDir = filesAndDirs.filter((name) => {
//   const filePath = path.join(srcDir, name);
//   const stats = fs.statSync(filePath);
//   return stats.isDirectory() && name !== indexDir;
// });

// // 创建一个空对象 tools 用于存储工具函数
// const tools = {};

// // 动态导入每个工具函数目录下的 index.js 文件并存储到 tools 对象中
// toolsDir.forEach((toolName) => {
//   const toolIndexFile = path.join(srcDir, toolName, 'index.js');
//   const toolFunctions = require(toolIndexFile).default;
//   tools[toolName] = toolFunctions;
// });

// // 导出 tools 对象
// export default tools;

import {arrayToTree} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\arrayToTree';
import {bubbleSort} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\bubbleSort';
import {deepClone} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\deepClone';
import {designateRepeat} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\designateRepeat';
import {insertSort} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\insertSort';
import {promiselimit} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\promiselimit';
import {repeat} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\/repeat';
import {selectSort} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\selectSort';
import {treeFlattening} from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\treeFlattening';
import { calculateAverage } from 'C:\\Users\\l2281\\Desktop\\demo\\rollup-train\\src\\calculateAverage';

export {
  arrayToTree,
  bubbleSort,
  deepClone,
  designateRepeat,
  insertSort,
  promiselimit,
  repeat,
  selectSort,
  treeFlattening,
  calculateAverage
}