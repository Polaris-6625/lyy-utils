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

          if (running < limit) {
              next();
          }
      });
  }

  return enqueue;
}