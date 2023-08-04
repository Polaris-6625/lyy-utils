import { repeat } from "../src/repeat";

let cs = "ceshi";
let result = "ceshiceshiceshi"
test('repeat fun',() => {
    expect(repeat(cs,3)).toStrictEqual(result);
});