export function promiselimit(limit) {
    let running = 0;
    let queue = [];
    function next() {
        if (queue.length > 0 && running < limit) {
            const task = queue.shift();
            running++;
            task().finally(() => {
                running--;
                next();
              });
              next();
        }
    }
    function enqueue(task) {
        return new Promise((resolve, reject) => {
            queue.push(() => {
              return new Promise((taskResolve, taskReject) => {
                task().then((result) => {
                  taskResolve(result);
                  resolve(result);
                }).catch((error) => {
                  taskReject(error);
                  reject(error);
                });
              });
            });
      
            next();
          });
    }
    return enqueue;
}
/* 
export class promiselimit {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }
  enqueue(promiseFunc) {
    return new Promise((resolve,reject) => {
      const task = this.createTask(promiseFunc,resolve,reject);
      if (this.running >= this.limit) {
        this.queue.push(task);
      }
      else {
        task();
      }
    });
  }
  createTask(promiseFunc,resolve,reject) {
    return () => {
      this.running += 1;
      promiseFunc()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.running -  = 1;
          if (this.queue.length) {
            const nextTask = this.queue.shift();
            nextTask();
          }
        })
    }
  }
}
*/