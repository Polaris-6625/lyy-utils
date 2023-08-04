// export function treeFlattening(tree) {
//     let res = [];
//     for (const item of tree) {
//         const { children , ...i } = item;
//         if (children && children.length) {
//             res = res.concat(treeFlattening(children));
//         }
//         res.push(i);
//     }
//     return res;
// }

// export function treeFlattening(tree) {
//     let res = [];
//     for (const item of tree) {
//         for (const it in item) {
//             let Temp = null;
//             let json = new Object();
//             if (item[it] instanceof Array && item[it]) {
//                 res = res.concat(treeFlattening(item[it]));
//                 json.it = item[it];
//             }
//             else {
//                 json.it = item[it];
//             }
//             res.push(json);
//         }
//     }
//     return res;
// }

// export function treeFlattening(tree) {
//     const result = [];
  
//     function flatten(node) {
//       const keys = Object.keys(node);
//       const hasChildren = keys.some(key => Array.isArray(node[key]));
  
//       if (hasChildren) {
//         keys.forEach(key => {
//           if (Array.isArray(node[key])) {
//             node[key].forEach(flatten);
//           }
//         });
//       } else {
//         result.push(node);
//       }
//     }
  
//     tree.forEach(flatten);
//     return result;
//   }
  
export function treeFlattening(tree, childProperty) {
  const result = [];

  function flatten(node, parentPid = 0) {
    const { [childProperty]: children, ...rest } = node;
    const newNode = { ...rest, pid: parentPid };
    result.push(newNode);

    if (children && Array.isArray(children)) {
      children.forEach(child => {
        flatten(child, node.id);
      });
    }
  }

  tree.forEach(flatten);
  return result;
}

