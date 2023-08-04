export const selectSort = (arr,order) => {
    let typeBool = arr instanceof Array;
    if (typeBool) {
      if (order === "DESC") {
        for(let i = 0;i < arr.length;i++) {
          let index = i;
          for (let j = i;j < arr.length;j++) {
            if (arr[j] > arr[index]) {
              index = j;
            }
            let Temp = arr[index];
            arr[index] = arr[i];
            arr[i] = Temp;
          }
        }
        return arr;
      }
      else {
        for(let i = 0;i < arr.length;i++) {
          let index = i;
          for (let j = i;j < arr.length;j++) {
            if (arr[j] < arr[index]) {
              index = j;
            }
            let Temp = arr[index];
            arr[index] = arr[i];
            arr[i] = Temp;
          }
        }
        return arr;
      }
    }
    else {
      throw new Error(`${arr} is not a Array`);
    }
  }