const Node = (x, y) => {
  return {
    x,
    y,
    visited: false,
    prev: null,
  };
};

const Board = function () {
  let board = [[], [], [], [], [], [], [], []];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board[i][j] = Node(i, j);
    }
  }
  return {
    buildBoard: function () {
      board = [[], [], [], [], [], [], [], []];
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          board[i][j] = Node(i, j);
        }
      }
    },

    knightMoves: function (start, end) {
      this.buildBoard();
      this.search(start, end);
      return this.path(start, end);
    },

    search: function (start, end) {
      let queue = [];
      queue.push(board[start[0]][start[1]]);
      board[start[0]][start[1]].visited = true;

      do {
        let node = queue.shift();
        if (node.x === end[0] && node.y === end[1]) break;
        let possibleMoves = this.move(node);
        // console.log("possible moves are: " + possibleMoves)
        for (let i = 0; i < possibleMoves.length; i++) {
          let currentMove = possibleMoves[i];
          if (board[currentMove[0]][currentMove[1]].visited === false) {
            queue.push(board[currentMove[0]][currentMove[1]]);
            board[currentMove[0]][currentMove[1]].visited = true;
            board[currentMove[0]][currentMove[1]].prev = node;
          }
        }
      } while (queue.length !== 0);
    },

    move: function (node) {
      let nextNodes = [];
      const moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
      ];
      for (let i = 0; i < moves.length; i++) {
        if (
          node.x + moves[i][0] >= 0 &&
          node.x + moves[i][0] < 8 &&
          node.y + moves[i][1] >= 0 &&
          node.y + moves[i][1] < 8
        ) {
          let arr = [node.x + moves[i][0], node.y + moves[i][1]];
          nextNodes.push(arr);
        }
      }
      return nextNodes;
    },

    path: function (start, end) {
      let pathArray = [];
      let current = board[end[0]][end[1]];

      while (current !== null)
      {
        pathArray.push([current.x, current.y]);
        current = current.prev;
      }

      pathArray.reverse();

      if (
        pathArray.length > 0 &&
        pathArray[0][0] === start[0] &&
        pathArray[0][1] === start[1]
      )
        return pathArray;
      return [];
    },

    showBoard: () => {
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (i === 0 && j === 1) continue;
          
        }
      }
    },
  };
};

const board1 = Board();
console.log(board1.knightMoves([0, 1], [3, 5]));
console.log(board1.knightMoves([0, 1], [0, 1]));
console.log(board1.knightMoves([7, 7], [0, 0]));
