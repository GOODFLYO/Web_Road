# 请求方式

1. GET
从服务器端读取数据
2. POST
向服务器添加新数据
3. PUT
更新服务器已经存在的数据
4. DELETE
删除服务器端数据

# 请求参数
1. query参数--查询字符串参数 编码urkencoded
    - 参数包含在请求地址之中 :/xxx?name=tom&age=18
    - 敏感数据不要用query参数，因为参数是地址的一部分

2. params参数
    - 参数包含在请求地址之中 :xxx/admin/18?name=tom
    - 敏感数据不要用query参数，因为参数是地址的一部分

3. 请求体参数
    - 参数包含在请求体中 浏览器开发工具可以查看
    1. urlencoded格式：
        - 对应请求头：content-type:application/x-www-form-erlencoded

    2. json格式
        - {"name":'tom',"age":12}
        - 对应请求头：content-type:application/json

> 开发中请求到底发给谁？用什么请求方式？携带什么参数？
> 要参考项目的API借口文档
