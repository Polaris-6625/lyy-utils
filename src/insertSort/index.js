export function insertSort(arr,order) {
    if (arr instanceof Array) {
        if (order === "DESC") {
            for (let i = 1; i < arr.length; i++) {
                let current = arr[i];
                let j = i - 1;        
                while (j >= 0 && arr[j] < current) { // 修改此处的比较条件
                  arr[j + 1] = arr[j];
                  j--;
                }
                
                arr[j + 1] = current;
              }
              return arr;
        }
        else {
            for (let i = 1; i < arr.length; i++) {
                let current = arr[i];
                let j = i - 1;        
                while (j >= 0 && arr[j] > current) { // 修改此处的比较条件
                  arr[j + 1] = arr[j];
                  j--;
                }
                
                arr[j + 1] = current;
              }
              return arr;
        }
    }
    else {
      throw new Error(`${arr} is not a Array`);
    }
}