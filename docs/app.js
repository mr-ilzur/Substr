let input_str_in = document.querySelector('.str_in');
let input_index_in = document.querySelector('.index_in');
let input_length_in = document.querySelector('.length_in');
let button = document.querySelector('button');
let out_result = document.querySelector('.data_obtained');

button.onclick = function(){
  let str = input_str_in.value;
  str = String(str);
  let index = input_index_in.value;
  index = Number(index);
  let strL = input_length_in.value;
  strL = Number(strL);
  const substr = (str, index = 0, strL) => {
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
  if( index + strL > str.length ){
  strL = str.length - index;
  };
  for(let i = index; i < index+strL; i++){
    result += str[i];
  };
  return result;
  };
  const result_out = substr(str, index, strL);
  out_result.innerHTML = result_out;
  navigator.clipboard.writeText(result_out);
};
