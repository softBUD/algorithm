/*** 5. 네번째 좌표 ***/

/* user code */
function answer(x_arr, y_arr) {
  let result = [];
  
  function arrayRemove(arr) {
    for(let i=0; i<arr.length; i++) {
      for(let j= i+1; j<arr.length; j++) {
        if(arr[i] == arr[j]) {
          arr.splice(j, 1);
          arr.splice(i, 1);
          break; // 두 값을 삭제했으므로 더 이상 비교할 필요 없음
        }
      }
    }
    result.push(arr[0])
  }

  arrayRemove(x_arr)
  arrayRemove(y_arr)
  

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
