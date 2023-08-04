import { selectSort } from "../src/selectSort";

test('order By DESC',() => {
    expect(selectSort([1,2,3,4,6,8,5,16,19,23,100],"DESC")).toStrictEqual([100,23,19,16,8,6,5,4,3,2,1]);
});

test('order By ASC',() => {
    expect(selectSort([1,2,3,4,6,8,5,16,19,23,100],"ASC")).toStrictEqual([1,2,3,4,5,6,8,16,19,23,100]);
});