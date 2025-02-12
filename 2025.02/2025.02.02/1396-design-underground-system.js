var UndergroundSystem = function () {
  this.registerMap = new Map();
  this.averageMap = new Map();
  this.medianMap = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.registerMap.set(id, { from: stationName, startTime: t });
};

UndergroundSystem.prototype.getHash = function (startStation, endStation) {
  return `from:${startStation};to:${endStation}`;
};

const addToSorted = (elements, element) => {
  for (let i = 0; i < elements.length; i++) {
    if (element <= elements[i]) {
      [elements[i], element] = [element, elements[i]];
    }
  }
  elements.push(element);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const { from, startTime } = this.registerMap.get(id);
  const hash = this.getHash(from, stationName);
  const time = t - startTime;
  this.registerMap.delete(id);

  if (this.averageMap.has(hash)) {
    const { average, n } = this.averageMap.get(hash);
    const multiplier = n / (n + 1);
    // pro: avoids overflows
    // con: minor miscalculations around floating point are possible
    const nextAverage = (average + time / n) * multiplier;
    this.averageMap.set(hash, { average: nextAverage, n: n + 1 });
  } else {
    this.averageMap.set(hash, { average: time, n: 1 });
  }

  if (this.medianMap.has(hash)) {
    const { elements } = this.medianMap.get(hash);
    addToSorted(elements, time);
  } else {
    this.medianMap.set(hash, { elements: [time] });
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const { average } = this.averageMap.get(
    this.getHash(startStation, endStation)
  );
  return average;
};

UndergroundSystem.prototype.getMedianTime = function (
  startStation,
  endStation
) {
  const { elements } = this.medianMap.get(
    this.getHash(startStation, endStation)
  );
  if (elements.length % 2 === 1) {
    return elements[(elements.length - 1) / 2];
  }
  return (
    (elements[elements.length / 2 - 1] + elements[elements.length / 2]) / 2
  );
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

const test = (description, actions, inputs, expected) => {
  if (actions.length !== inputs.length) {
    throw new Error(
      `Expected actions with ${inputs.length} elements, but got ${actions.length}`
    );
  }

  let system;
  const actual = [];

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i]) {
      case "UndergroundSystem":
        system = new UndergroundSystem();
        break;
      case "checkIn":
        system.checkIn(...inputs[i]);
        break;
      case "checkOut":
        system.checkOut(...inputs[i]);
        break;
      case "getAverageTime":
        actual.push(system.getAverageTime(...inputs[i]));
        break;
      case "getMedianTime":
        actual.push(system.getMedianTime(...inputs[i]));
        break;
    }
  }

  if (!expected) {
    console.log(description, actual);
    return;
  }

  if (actual.length !== expected.length) {
    throw new Error(
      `Expected getAverageTime output to have ${expected.length} elements but got ${actual.length}`
    );
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        `Expected ${i}-th element to equal to ${actual[i]} but got ${expected[i]}`
      );
    }
  }
};

console.log(">>> UndergroundSystem");

test(
  "case #1 (average)",
  [
    "UndergroundSystem",
    "checkIn",
    "checkIn",
    "checkIn",
    "checkOut",
    "checkOut",
    "checkOut",
    "getAverageTime",
    "getAverageTime",
    "checkIn",
    "getAverageTime",
    "checkOut",
    "getAverageTime",
  ],
  [
    [],
    [45, "Leyton", 3],
    [32, "Paradise", 8],
    [27, "Leyton", 10],
    [45, "Waterloo", 15],
    [27, "Waterloo", 20],
    [32, "Cambridge", 22],
    ["Paradise", "Cambridge"],
    ["Leyton", "Waterloo"],
    [10, "Leyton", 24],
    ["Leyton", "Waterloo"],
    [10, "Waterloo", 38],
    ["Leyton", "Waterloo"],
  ]
);

test(
  "case #2 (median)",
  [
    "UndergroundSystem",
    "checkIn",
    "checkIn",
    "checkIn",
    "checkOut",
    "checkOut",
    "checkOut",
    "getMedianTime",
    "getMedianTime",
    "checkIn",
    "getMedianTime",
    "checkOut",
    "getMedianTime",
  ],
  [
    [],
    [45, "Leyton", 3],
    [32, "Paradise", 8],
    [27, "Leyton", 10],
    [45, "Waterloo", 15],
    [27, "Waterloo", 20],
    [32, "Cambridge", 22],
    ["Paradise", "Cambridge"],
    ["Leyton", "Waterloo"],
    [10, "Leyton", 24],
    ["Leyton", "Waterloo"],
    [10, "Waterloo", 38],
    ["Leyton", "Waterloo"],
  ]
);

test(
  "case #3 (average)",
  [
    "UndergroundSystem",
    "checkIn",
    "checkOut",
    "getAverageTime",
    "checkIn",
    "checkOut",
    "getAverageTime",
    "checkIn",
    "checkOut",
    "getAverageTime",
  ],
  [
    [],
    [10, "Leyton", 3],
    [10, "Paradise", 8],
    ["Leyton", "Paradise"],
    [5, "Leyton", 10],
    [5, "Paradise", 16],
    ["Leyton", "Paradise"],
    [2, "Leyton", 21],
    [2, "Paradise", 30],
    ["Leyton", "Paradise"],
  ]
);

test(
  "case #4 (median)",
  [
    "UndergroundSystem",
    "checkIn",
    "checkOut",
    "getMedianTime",
    "checkIn",
    "checkOut",
    "getMedianTime",
    "checkIn",
    "checkOut",
    "getMedianTime",
  ],
  [
    [],
    [10, "Leyton", 3],
    [10, "Paradise", 8],
    ["Leyton", "Paradise"],
    [5, "Leyton", 10],
    [5, "Paradise", 16],
    ["Leyton", "Paradise"],
    [2, "Leyton", 21],
    [2, "Paradise", 30],
    ["Leyton", "Paradise"],
  ]
);
