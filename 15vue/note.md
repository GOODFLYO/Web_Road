- {{}}：插值表达式
- v-text:设置标签内容
- v-html：把内容解析成 html
- v-on：:给元素绑定事件 也可以用@表示 v-on
- v-show:根据表达式的真假 切换元素的显示和隐藏：广告 遮罩层
- v-if：根据表达式的真假 切换元素的显示和隐藏 操纵 dom 是 false 时 直接从 dom 树中移除
- v-bind：为元素绑定属性 可以省略 v-bind 直接用冒号代替 ：属性名 动态增删 class 建议使用对象的方式
- v-for：根据数据生成列表结构 (item,index) in array
- v-model:双向绑定 更改任何一方 另一方都跟着更改
- axios:封装好的 ajax
- **axios 如何结合 vue 开发网络应用**
- 生命周期：创建 挂载 更新 销毁
- 组件：实现应用中局部功能代码和资源的整合 对多种资源整合（js css html mp3）
- 模块：把一个文件（js）拆成很多文件
- 模块与组件 模块化与组件化
- vue 组件怎么用？ 创建 注册 使用 ---》 components(组件)
- props:接收组件的参数
  props：{
  name：String，
  age：Number，
  sex：String
  }
- scoped (style里面局部显示样式)

**vuex**
- 多个组件依赖于同一个状态
- 来自不同组件的行为需要变更同一状态