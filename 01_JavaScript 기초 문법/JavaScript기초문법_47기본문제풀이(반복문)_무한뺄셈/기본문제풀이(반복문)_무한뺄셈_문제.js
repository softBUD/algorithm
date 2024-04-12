/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);


  
  for(let i=0; i<sequence.length; i++) {
    const res = sequence[i] - sequence[i+1];

    // 나온 결과값이 음수만 아니면 값 push
    // 배열 길이가 더 이상 늘어나지 않으면 stop
    if(0 <= res) {
      sequence.push(res)
    }
  }


  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
