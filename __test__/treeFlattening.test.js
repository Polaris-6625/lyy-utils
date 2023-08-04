import { treeFlattening } from "../src/treeFlattening";

let arr = [
    {id: 1, name: '1', pid: 0},
    {id: 2, name: '2', pid: 1},
    {id: 3, name: '3', pid: 1},
    {id: 4, name: '4', pid: 3},
   ]
   let tree = [
    {
        "id": 1,
        "name": "1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "3",
                "pid": 1,
                "children": [
                   {
                     "id": 4,
                     "name": "4",
                     "pid": 3,
                     "children": []
                   }
                ]
            }
        ]
    }
]
test('tree -> array',() => {
    expect(treeFlattening(tree,"children")).toStrictEqual(arr);
});