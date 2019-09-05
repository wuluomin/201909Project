function isValidSudoku(inputArr) {
    // 定义三个二维数组，hashset
    var rowFlag = new Boolean(9)
    var colFlag = new Boolean(9)
    var BlockFlag = new Boolean(9)
    for (var i = 0; i < 9; i++) {
        //例如 rowFlag[0][8]=true就代表第0行的数字8是存在的
        //js是弱类型语言 无法直接定义二维数组，只能在定义一维数组后再定义
        //也就是数组的数组
        rowFlag[i] = new Boolean()
        colFlag[i] = new Boolean()
        BlockFlag[i] = new Boolean()
    }
    // 分别放数独的数字标志
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            var blockId = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (inputArr[i][j] >= '1' && inputArr[i][j] <= 9) {
                var num = inputArr[i][j] - 1;
                if (rowFlag[i][num]) {
                    //使用字符串的模板字面量方式写 更优雅
                    console.log(`row======${i+1}=======${num + 1}`)
                    return false
                }
                if (colFlag[j][num]) {
                    console.log(`col======${j+1}=======${num + 1}`)
                    return false
                }
                if (BlockFlag[blockId][num]) {
                    console.log(`block======${blockId+1}=====${num + 1}`)
                    return false
                }
                rowFlag[i][num] = !rowFlag[i][num]
                colFlag[j][num] = !colFlag[j][num]
                BlockFlag[blockId][num] = !BlockFlag[blockId][num]
            }
        }
    }
    return true
}

var input1 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "9", ".", ".", ".", ".", "6", "."],
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