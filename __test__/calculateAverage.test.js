import { calculateAverage } from '../src/calculateAverage';

test('calculateAverage',() => {
    expect(calculateAverage([1,2,3,4,5,6,7,8,9,10])).toStrictEqual(5.5);
})