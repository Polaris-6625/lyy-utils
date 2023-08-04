import { designateRepeat } from "../src/designateRepeat";

let cs = "ceshiceshi";
let tg = "ce";

test('designateRepeat', () => { 
    expect(designateRepeat(cs,tg)).toStrictEqual(2);
 });