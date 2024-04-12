let input = ['A', 'B', 'C'];
let count = 0;

function permutation(arr, s, r) {
  // 1.재귀함수를 멈춰야할 조건
  // s가 2가되면 멈춘다.
  if (s == r) {
    count++;
    console.log(arr);
    return;
  }
  // 2.재귀를 돌면서 변경되어야 할 부분
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; //원상복귀
  }
}
// 0은 첫번째 요소를 선택하는 인덱스, 2는 마지막요소를 선택하는 인덱스
permutation(input, 0, 2);
console.log(count);

// s=0, r= 2, i=0 ["A"]
// s=1, r=2, i=1 ["A", "B"]
//// s=2, r=2 , ["A","B","C"]

// s=1, r=2, i=2, ["A","C", "B"] 1번자리와 2번자리 swap
// s=2, r=2 ["A","C", "B"]
//// s=1, r=2, i=2, ["A","C", "B"]

//  s=0, r= 2, i=1 ["B", "A", "C"]
// s=1, r=2, i=1 ["B", "C", "A"]
//// s=1, r=2, i=2 ["B", "C", "A"]
