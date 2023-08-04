// src/index.js
// 冒泡排序法
export function bubbleSort(arr,order) {
    let typeBool = arr instanceof Array;
    let Temp = 0;
    if (typeBool) {
      if (order === "DESC") {
        for (let i = 0;i < arr.length;i++) {
          for (let j = i + 1;j < arr.length;j++) {
            if (arr[i] < arr[j]) {
              Temp = arr[i];
              arr[i] = arr[j];
              arr[j] = Temp;
            }
          }
        }
        return arr;
      }
      else {
        for (let i = 0;i < arr.length;i++) {
          for (let j = i + 1;j < arr.length;j++) {
            if (arr[i] > arr[j]) {
              Temp = arr[i];
              arr[i] = arr[j];
              arr[j] = Temp;
            }
          }
        }
        return arr;
      }
    }
    else {
      throw new Error(`${arr} is not a Array`);
    }
}
