const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入要查询的 QQ 号码或手机号码：', async (answer) => {
  try {
    const url = `https://api.uomg.com/api/rand.qq.php?format=json&sort=Rand&tel=${answer}`;
    const res = await axios.get(url);
    console.log(`查询结果：${res.data.code === 1 ? '无法查询到' : res.data.result.data}`);
  } catch (err) {
    console.error('查询出错：', err.message);
  } finally {
    rl.close();
  }
});