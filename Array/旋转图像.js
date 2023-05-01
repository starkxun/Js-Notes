matrix = [[1,2,3],[4,5,6],[7,8,9]];
var rotate = function(matrix) {
    //先上下交换
    for(let i=0;i<matrix.length/2;i++){
        temp = matrix[i];
        matrix[i] = matrix[matrix.length-i-1];
        matrix[matrix.length-i-1] = temp;
    }
    //再对角线交换
    for(let i=0;i<matrix.length;++i){
        for(let j=i+1;j<matrix.length;++j){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;

        }
    }
    return matrix;
}

result = rotate(matrix);
console.log(result);