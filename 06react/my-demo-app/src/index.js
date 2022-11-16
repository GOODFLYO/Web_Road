import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css"

const isloading = true
const loaddata = ()=>{
  if(isloading){
    return <div>loading...</div>
  }
  return <div>数据加载完成。。。</div>
}

class APP extends React.Component{
  // var a;
  handleClick(){
    
    // console.log(a++,'单击事件触发了')
    // console.log(a)
  }

  render(){
    return(
      <button onMouseEnter={this.handleClick}>DIANWO</button>
    )
  }
}

//这是一个map
const songs = [
  {id: 1,_name: 'zyn'},
  {id: 2,_name: 'cc'}
]
  


// const title = (
//   <h1 className="title">
//     条件渲染：
//     {<APP/>}
    
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);

ReactDOM.createRoot(document.getElementById("root")).render(<APP/>);
// ReactDOM.render(title,document.getElementById('root'))
