type FunctionExecution = {
  id: number;
  status: "start" | "end";
  timestamp: number;
};

const parseLog = (log: string): FunctionExecution => {
  const [idString, status, timestampString] = log.split(":");

  const id = Number(idString);
  const timestamp = Number(timestampString);

  return {
    id,
    status: status as FunctionExecution["status"],
    timestamp,
  };
};

// 1h14m
function exclusiveTime(n: number, logs: string[]): number[] {
  if (n === 0) {
    return [];
  }

  let answer = new Array(n).fill(0);

  let previousFn = parseLog(logs[0]);
  const stack: FunctionExecution[] = [previousFn];

  for (let i = 1; i < logs.length; i++) {
    const fn = parseLog(logs[i]);

    const timeSincePreviousLogMessage = fn.timestamp - previousFn.timestamp;

    if (fn.status === "start") {
      if (stack.length > 0) {
        const interruptedFn = stack.pop()!;
        answer[interruptedFn.id] +=
          previousFn.status === "end"
            ? timeSincePreviousLogMessage - 1
            : timeSincePreviousLogMessage;
        stack.push(interruptedFn);
      }

      stack.push(fn);
    } else if (fn.status === "end") {
      if (previousFn.id === fn.id && previousFn.status === "start") {
        stack.pop();
        answer[fn.id] += timeSincePreviousLogMessage + 1;
      } else {
        let tempStack: FunctionExecution[] = [];

        while (stack.length > 0) {
          const interruptedFn = stack.pop()!;

          if (fn.id === interruptedFn.id) {
            answer[interruptedFn.id] += timeSincePreviousLogMessage;
            break;
          } else {
            tempStack.push(interruptedFn);
          }
        }

        while (tempStack.length > 0) {
          stack.push(tempStack.pop()!);
        }
      }
    }

    previousFn = fn;
  }

  return answer;
}

// ["0:start:0","1:start:2","1:end:5","0:end:6"]
// i = 0, previous = 0:start:0
// i = 1, previous = 0:start:0, current = 1:start:2, [2, 0]
// i = 2, previous = 1:start:2, current = 1:end:5, [2, 4]
// i = 3, previous = 1:end:5, current = 0:end:6, [3, 4]
