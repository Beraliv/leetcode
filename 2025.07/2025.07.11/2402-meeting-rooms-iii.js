import { PriorityQueue } from "@datastructures-js/priority-queue";

const compareTuple = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
};

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  // Solution: 2 Min Heap + Sort + Max
  // Time: O((N + M) * logN)
  // Space: O(N)

  const unusedRooms = new PriorityQueue(
    (a, b) => a - b,
    Array.from({ length: n }, (_, i) => i)
  );

  const usedRooms = new PriorityQueue(compareTuple);

  const meetingCount = Array(n).fill(0);
  meetings.sort(compareTuple);

  for (const [start, end] of meetings) {
    while (!usedRooms.isEmpty() && usedRooms.front()[0] <= start) {
      const room = usedRooms.dequeue()[1];
      unusedRooms.enqueue(room);
    }

    if (!unusedRooms.isEmpty()) {
      const room = unusedRooms.dequeue();
      usedRooms.enqueue([end, room]);
      meetingCount[room]++;
    } else {
      const [roomAvailabilityTime, room] = usedRooms.dequeue();
      usedRooms.enqueue([roomAvailabilityTime + end - start, room]);
      meetingCount[room]++;
    }
  }

  let maxRoomCount = 0;
  let maxRoomIndex = 0;
  for (let i = 0; i < meetingCount.length; i++) {
    if (meetingCount[i] > maxRoomCount) {
      maxRoomCount = meetingCount[i];
      maxRoomIndex = i;
    }
  }

  return maxRoomIndex;
};
