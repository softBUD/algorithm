/* 9. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = '';

  let str_arr = str.split(' ');

  for (let i = 0; i < str_arr.length; i++) {
    let str_ele = str_arr[i].split('');

    str_ele[0] = str_ele[0].toUpperCase();

    str_arr[i] = str_ele.join('');
  }

  fix_str = str_arr.join(' ');

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  'Hello, My name is john',
  // TC: 2
  'This week is closed due to COVID-19',
  // TC: 3
  'fifty percent off this week',
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
