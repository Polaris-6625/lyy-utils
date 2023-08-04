export function arrayToTree(arr, pidProperty) {
    const map = {};
    const result = [];
  
    arr.forEach(item => {
      map[item.id] = { ...item, children: [] };
    });
  
    arr.forEach(item => {
      const parent = map[item[pidProperty]];
      if (parent) {
        parent.children.push(map[item.id]);
      } else {
        result.push(map[item.id]);
      }
    });
  
    return result;
  }