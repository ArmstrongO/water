const axios = require('axios');

const user_input = prompt("请输入需要查询的QQ或者是手机号：");

function cha_ele() {
  const url = `https://zy.xywlapi.cc/qqphone?phone=${user_input}`;
  return axios.get(url).then(res => res.data);
}

function cha_qq() {
  const url = `https://zy.xywlapi.cc/qqapi?qq=${user_input}`;
  return axios.get(url).then(res => res.data);
}

function run() {
  if (!isNaN(user_input) && /^1[3456789]\d{9}$/.test(user_input)) {
    cha_ele().then(data => console.log(data)).catch(reason => console.error(reason));
  } else {
    cha_qq().then(data => console.log(data)).catch(reason => console.error(reason));
  }
}

run();