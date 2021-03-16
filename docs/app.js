let input_str_in = document.querySelector('.str_in');
let input_index_in = document.querySelector('.index_in');
let input_length_in = document.querySelector('.length_in');
let button = document.querySelector('button');
let out_result = document.querySelector('.data_obtained');

button.onclick = function(){
  let str = input_str_in.value;
  let index = input_index_in.value;
  let strL = input_length_in.value;
  const substr = (str, index = 0, strL = str.length) => {
  let result = '';
  if (strL > str.length) {
    strL = str.length;
  };
  if (strL < 0) {
    strL = 1;
  };
  if (index < 0) {
    index = 0;
  };
  if (index > strL) {
    return '';
  };
  for(let i = index; i < index+strL; i++){
    result += str[i];
  };
  return result;
  };
  const result_out = substr(str, index, strL);
  out_result.innerHTML = result_out;
};
