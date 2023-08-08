export function calculateAverage(arr) {
    if (!(arr instanceof Array)) {
        throw new Error(`${arr} is not a Array`);
    }
    let num = 0;
    arr.map((i)=>{
        num+=i;
    })
    return num/arr.length;
}