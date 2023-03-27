const mysql = require("mysql");
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "mydb_front",
});

const student = { id: 1, name: "aa", age: 16 };
const student1 = { id: 2, name: "bb", age: 17 };
// sqlStr = "insert into test1 (id,name,age) values(?,?,?)";
sqlStr = "update test1 set name=?,age=? where id=?";
db.query(sqlStr,["dd",19,1], (err, results) => {
  if (err) {
    console.log(err.message);
  }
  console.log(results);
});
