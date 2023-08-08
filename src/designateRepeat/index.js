/* 计算某一值在字符串中出现的次数 */
export function designateRepeat (str, target) {
    if (typeof str !== "string") {
      throw new Error(`${str} is not a string`);
    }
    const regex = new RegExp(target, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
  }
  