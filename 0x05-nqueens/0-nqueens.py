#!/usr/bin/env python3
"""The N queens puzzle is the challenge of placing
N non-attacking queens on an NxN chessboard. 
Usage: nqueens N - If the user called the program
with the wrong number of arguments, print Usage: nqueens
N, where N must be an integer greater or equal to 4. If 
N is not an integer, print N must be a number. If N is
smaller than 4, print N must be at least 4. The program
should print every possible solution to the problem"""


import sys


def nqueens(n: int):
    """Backtracking"""
    matrix = [[0 for x in range(n)] for y in range(n)]
    print(str(matrix))


    if __name__ == "__main__":
        if len(sys.argv) > 2 or len(sys.argv) < 2:
            print("Usage: nqueens N")
            exit(1)

        if not sys.argv[1].isdigit():
            print("N must be a number")
            exit(1)

        if int(sys.argv[1]) < 4:
            print("N must be at least 4")
            exit(1)

        nqueens(int(sys.argv[1]))
