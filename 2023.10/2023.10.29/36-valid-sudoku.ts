// time - 26m11s

const EMPTY_CELL = ".";
const BOARD_SIZE = 9;

// O(1) space
const createBitmask = () => {
  let n = 0;

  return {
    has(index: number) {
      return n & (1 << index);
    },
    set(index: number) {
      n |= 1 << index;
    },
  };
};

function isRowValid(board: string[][], rowId: number): boolean {
  const row = board[rowId];

  const bitmask = createBitmask();
  for (let i = 0; i < BOARD_SIZE; i++) {
    const rowCell = row[i] === EMPTY_CELL ? -1 : Number(row[i]);

    if (rowCell === -1) {
      continue;
    }

    if (bitmask.has(rowCell)) {
      return false;
    }

    bitmask.set(rowCell);
  }

  return true;
}

function isColumnValid(board: string[][], columnId: number): boolean {
  const bitmask = createBitmask();
  for (let i = 0; i < BOARD_SIZE; i++) {
    const columnCell =
      board[i][columnId] === EMPTY_CELL ? -1 : Number(board[i][columnId]);

    if (columnCell === -1) {
      continue;
    }

    if (bitmask.has(columnCell)) {
      return false;
    }

    bitmask.set(columnCell);
  }

  return true;
}

function is3x3BoxValid(board: string[][], boxId: number): boolean {
  const columnBoxId = boxId % 3;
  const rowBoxId = (boxId - columnBoxId) / 3;

  const bitmask = createBitmask();
  for (let rowId = 3 * rowBoxId; rowId < 3 * (rowBoxId + 1); rowId++) {
    for (
      let columnId = 3 * columnBoxId;
      columnId < 3 * (columnBoxId + 1);
      columnId++
    ) {
      const boxCell =
        board[rowId][columnId] === EMPTY_CELL
          ? -1
          : Number(board[rowId][columnId]);

      if (boxCell === -1) {
        continue;
      }

      if (bitmask.has(boxCell)) {
        return false;
      }

      bitmask.set(boxCell);
    }
  }

  return true;
}

// O(N ** 2) time, O(N) space
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (!isRowValid(board, i)) {
      return false;
    }

    if (!isColumnValid(board, i)) {
      return false;
    }

    if (!is3x3BoxValid(board, i)) {
      return false;
    }
  }

  return true;
}
