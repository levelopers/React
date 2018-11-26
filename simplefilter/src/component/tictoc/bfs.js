let arr = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
]
class coor {
    constructor(x = null, y = null) {
        this.x = x
        this.y = y
    }
}
modules.export=class search {
    constructor() {
        // this.grid = grid
    }
    numIslands(grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }

        let n = grid.length;
        let m = grid[0].length;
        let islands = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j]) {
                    markByBFS(grid, i, j);
                    islands++;
                }
            }
        }

        return islands;
    }

    markByBFS(grid, x, y) {
        // magic numbers!
        let directionX = [0, 1, -1, 0]
        let directionY = [1, 0, 0, -1]

        let queue = []

        queue.unshift(new coor(x, y))
        grid[x][y] = false;

        while (!queue.length == 0) {
            cor = queue.pop()
            for (let i = 0; i < 4; i++) {
                let adj = new coor(
                    cor.x + directionX[i],
                    cor.y + directionY[i]
                );
                if (!inBound(adj, grid)) {
                    continue;
                }
                if (grid[adj.x][adj.y]) {
                    grid[adj.x][adj.y] = false;
                    queue.unshift(adj);
                }
            }
        }
    }

    inBound(coor, grid) {
        let n = grid.length;
        let m = grid[0].length;

        return coor.x >= 0 && coor.x < n && coor.y >= 0 && coor.y < m;
    }
}

console.log(numIslands(arr));
