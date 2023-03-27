//定义格式化时间的函数
function dataFormat() {
  const dt = new Date();

  const y = padzero(dt.getFullYear());
  const m = padzero(dt.getMonth() + 1);
  const d = padzero(dt.getDate());

  const hh = padzero(dt.getHours());
  const mm = padzero(dt.getMinutes());
  const ss = padzero(dt.getSeconds());
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 定义一个补零的函数
function padzero(n) {
  return n > 9 ? n : "0" + n;
}

module.exports = {
  dataFormat,
};
