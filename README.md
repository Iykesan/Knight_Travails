# Project: Knight Travails
## Overview

This project finds the shortest path a knight can take between two positions on a chessboard using a graph traversal algorithm.

The chessboard is treated as a graph where:

each square is a node
each valid knight move is an edge

The goal is to compute the shortest path between two nodes.

### Key Concepts Learned
Breadth-First Search (BFS) for shortest path problems
Representing a grid as a graph
Avoiding revisiting nodes using a visited flag
Reconstructing paths using parent (prev) pointers
Managing state and avoiding mutation bugs
### How It Works
The board is initialized as an 8x8 grid of nodes
BFS is used to explore all possible knight moves
Each node stores a reference to the previous node
Once the target is reached, the path is reconstructed by backtracking
### Example
knightMoves([0, 1], [3, 5])
// Output:
// [[0,1], [2,2], [3,4], [1,5], [3,6], [5,5]]
### Challenges Faced
Understanding how BFS guarantees the shortest path
Handling revisiting nodes and preventing infinite loops
Debugging state issues (visited / prev not resetting)
Avoiding null reference errors during path reconstruction
Improvements (Future Work)
Optimize by removing full board storage
Use a queue that stores paths directly
Extend to variable board sizes
Add visualization (optional)
