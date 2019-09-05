function isValidSudoku(input) {
    //定义三个二维数组
    var rows = new Array(9);
    var cols = new Array(9);
    var blocks = new Array(9);
    for (var i = 0; i < 9; i++) {
        rows[i] = new Array(9)
        cols[i] = new Array(9)
        blocks[i] = new Array(9)
    }


    //循环遍历数独矩阵
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (input[i][j] != '.') {
                var blockId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i].indexOf(input[i][j]) != -1) { //该行存在该元素
                    return false;
                }
                if (cols[j].indexOf(input[i][j]) != -1) { //该行存在该元素
                    return false;
                }
                if (blocks[blockId].indexOf(input[i][j]) != -1) { //该小方块存在该元素
                    return false;
                }

                //  if的判断可简写到一起
                rows[i].push(input[i][j]);
                cols[j].push(input[i][j]);
                blocks[blockId].push(input[i][j]);
            }
        }
    }
    return true;
}

var input1 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

var input2 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(input1));
console.log(isValidSudoku(input2));