export {};

const canReplace = (from: string, to: string): boolean => {
  let errors = 0;

  for (let i = 0; i < from.length; i++) {
    let fromCh = from[i];
    let toCh = to[i];

    if (fromCh !== toCh) {
      errors++;
    }

    if (errors > 1) {
      return false;
    }
  }

  return true;
};

// ple, pale
// 0 0, p p (0)
// 1 1, l a (0)
// 1 2, l l (1)
// 2 3, e e (1)
// return true

// pale, pales
// 0 0, p p (0)
// 1 1, a a (0)
// 2 2, l l (0)
// 3 3, e e (0)
// 4 4
// 0 + 5 - 4 = 1
// return true

const canRemove = (less: string, more: string): boolean => {
  let errors = 0;

  let j = 0;
  for (let i = 0; i < less.length && j < more.length; ) {
    if (less[i] !== more[j]) {
      j++;
      errors++;

      if (errors > 1) {
        return false;
      }
    } else {
      i++;
      j++;
    }
  }

  errors += more.length - j;

  return errors <= 1;
};

const oneAway = (from: string, to: string): boolean => {
  if (from.length === to.length) {
    return canReplace(from, to);
  }

  if (Math.abs(from.length - to.length) > 1) {
    return false;
  }

  let less = from.length === to.length + 1 ? to : from;
  let more = from.length === to.length + 1 ? from : to;

  return canRemove(less, more);
};

const examples = [
  ["pale", "ple"],
  ["pales", "pale"],
  ["pale", "bale"],
  ["pale", "bake"],
];

examples.forEach(([from, to]) => {
  console.log(
    `${oneAway(from, to) ? "<=" : ">"} 1 actions from ${from} to ${to}`
  );
});
