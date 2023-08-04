export function calculateAverage(arr) {
    let num = 0;
    arr.map((i)=>{
        num+=i;
    })
    return num/arr.length;
}