import { promiselimit } from "../src/promiselimit";

let q = "Task 3Task 1Task 5Task 2Task 4"

async function testFun() {
    let r = "";
    const enqueue = new promiselimit(3);
    const task1 = () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000));
    const promise1 = enqueue(task1).then(result => r += result); // 输出: Task 1
  
    const task2 = () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 2000));
    const promise2 = enqueue(task2).then(result => r += result); // 输出: Task 2
  
    const task3 = () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 500));
    const promise3 = enqueue(task3).then(result => r += result); // 输出: Task 3
  
    const task4 = () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 1500));
    const promise4 = enqueue(task4).then(result => r += result); // 输出: Task 4
  
    const task5 = () => new Promise(resolve => setTimeout(() => resolve('Task 5'), 200));
    const promise5 = enqueue(task5).then(result => r += result); // 输出: Task 5
  
    return Promise.all([promise1, promise2, promise3, promise4, promise5])
      .then(() => r);
  }

  test('promiselimit', async () => {
    const result = await testFun();
    expect(result).toStrictEqual(q);
  });