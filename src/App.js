import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";


function App() {
  const [dataList, setDataList] = useState([]);
  
  return (
    <div className="App">
      <Header setDataList={setDataList} dataList={dataList} />
      <TodoList dataList={dataList} setDataList={setDataList} />
    </div>
  );
}

export default App;
