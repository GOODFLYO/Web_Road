const db = require("../db/index");
const bcrypt = require("bcryptjs");

const regUser = (req, res) => {
  // 获取客户端提交到服务器的用户信息
  const userinfo = req.body;

  // 校验数据==用户名是否存在
  if (!userinfo.username || !userinfo.password) {
    // return res.send({ status: 1, message: "用户名或密码不合法！" });
    return res.cc("用户名或密码不合法！");
  }

  const sqlSEL = "select * from env_users where username=?";
  db.query(sqlSEL, userinfo.username, (err, results) => {
    if (err) {
      //   return res.send({ status: 1, message: err.message });
      res.cc(err);
    }
    if (results.length > 0) {
      //   return res.send({
      //     status: 1,
      //     message: "用户名已经被占用 请更换其他用户名",
      //   });
      return res.cc("用户名已经被占用 请更换其他用户名");
    }
  });
  // 加密密码
  userinfo.password = bcrypt.hashSync(userinfo.password, 10);
  // 插入新用户
  const sqlADD = "insert into env_users set ?";
  db.query(
    sqlADD,
    { username: userinfo.username, password: userinfo.password },
    (err, results) => {
      if (err) {
        return res.cc(err);
      }
      if (results.affectedRows !== 1) {
        // return res.send({
        //   status: 1,
        //   message: "用户注册失败，请稍后再试！",
        // });
        return res.cc("用户注册失败，请稍后再试！");
      }
      res.send({ status: 0, message: "注册成功！" });
    }
  );
};

const login = (req, res) => {
  res.send("login ok");
};

module.exports = {
  regUser,
  login,
};
