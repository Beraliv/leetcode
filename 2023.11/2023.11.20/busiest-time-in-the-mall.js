// N data points
// data point - [ timestamp, count of visitors, 0 - exit | 1 - entrance ]
function findBusiestPeriod(data) {
  if (data.length < 1) {
    return -1;
  }
  // returns the time at which the mall reached its busiest moment last year
  // 1. have a window of data points within last year - DONE
  // time complexity = O(N), space complexity - O(1)
  // 2. max count of visitors, max timestamp
  let maxCount = -Infinity;
  let maxTimestamp = null;
  // 3. iterate over data points
  let index = 0;
  let globalCount = 0;
  while (index < data.length) {
    let localTimestamp = data[index][0];
    let localCount = (data[index][2] === 0 ? -1 : 1) * data[index][1];
    // 3.1. merge same timestamps to find out the count of visited
    while (index + 1 < data.length && localTimestamp === data[index + 1][0]) {
      localCount += (data[index + 1][2] === 0 ? -1 : 1) * data[index + 1][1];
      index++;
    }
    globalCount += localCount;
    // 3.2. update max count, max timestamp
    if (globalCount > maxCount) {
      maxCount = globalCount;
      maxTimestamp = localTimestamp;
    }

    index++;
  }
  // 4. return max timestamp
  return maxTimestamp;
}

const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
];

// 1487800378
console.log(findBusiestPeriod(data));

/* 
  
  
  function findBusiestPeriod(data):
      n = data.length
      count = 0
      maxCount = 0
      maxPeriodTime = 0
  
      for i from 0 to n-1:
          # update count
          if (data[i][2] == 1): # visitors entered the mall  
              count += data[i][1]
          else if (data[i][2] == 0): # visitors existed the mall
              count -= data[i][1]
  
          # check for other data points with the same timestamp
          if (i < n-1 AND data[i][0] == data[i+1][0]):
              continue
  
          # update maximum
          if (count > maxCount):
              maxCount = count
              maxPeriodTime = data[i][0]
  
      return maxPeriodTime
      
   */
