function convert(s: string, numRows: number): string {
  // PAYPALISHIRING, 3
  // 0: P(0), A(4), H(8), N(12) => 4 = 2 * (numRows - 1)
  // 1: A(1), P(3), L(5), S(7), I(9), I(11), G(13) => (2, 2) = numRows
  // 2: Y(2), I(6), R(10) => 4 = numRows + 2

  // PAYPALISHIRING, 4
  // 0: 0, 6 => 6 = 2 * (numRows - 1)
  // 1: 1, 5, 7, 11 => (4, 2) = 2 * (numRows - 1 - row)
  // 2: 2, 4, 8, 10 => (2, 4)
  // 3: 3, 9 => 6 = 2 * (numRows - 1)

  // PAYPALISHIRING, 5
  // 0: 0, 8, 16 => 8
  // 1: 1, 7, 9, 15 => (6, 2)
  // 2: 2, 6, 10, 14 => (4, 4)
  // 3: 3, 5, 11, 13 => (2, 6)
  // 4: 4, 12 => 8

  // PAY, 2
  // ['', '']
  // maxStep = 2
  // row = 0
  // index = 0, counter = 0, step = 2 => ['P', ''], index = 2
  // index = 2, counter = 1, step = 2 => ['PY', ''], index = 4
  // row = 1
  // index = 1, counter = 0, step = 2 => ['PY', 'A'], index = 3
  // ['PYA']

  // TOWER, 3
  // ['', '', '']
  // maxStep = 4
  // row = 0
  // index = 0, counter = 0, step = 4 => ['T', '', ''], index = 4
  // index = 4, counter = 1, step = 4 => ['TR', '', ''], index = 8
  // row = 1
  // index = 1, counter = 0, step = 2 => ['TR', 'O', ''], index = 3
  // index = 3, counter = 1, step = 2 => ['TR', 'OE', ''], index = 5
  // row = 2
  // index = 2, counter = 0, step = 4 => [TR, OE, W], index = 6
  // TROEW

  if (numRows === 1) {
    return s;
  }

  // memory O(R + S)
  let rows = Array(numRows).fill(undefined);
  const maxStep = 2 * (numRows - 1);

  // O(S)
  for (let row = 0; row < numRows; row++) {
    let index = row;

    for (let counter = 0; index < s.length; counter++) {
      let step =
        row === 0 || row === numRows - 1
          ? maxStep
          : counter % 2 === 0
          ? 2 * (numRows - 1 - row)
          : 2 * row;

      rows[row] = (rows[row] || "") + s[index];

      index += step;
    }

    console.log(`row ${row} is`, rows[row]);
  }

  // O(S)
  return rows.join("");
}

// console.log(convert("PAYPALISHIRING", 3));
