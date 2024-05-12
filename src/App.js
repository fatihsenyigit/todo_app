import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [dataList, setDataList] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || [],
  );

// const [dataList, setDataList] = useState(
//   JSON.parse(localStorage.getItem("dataLocal")) || [],
// );

  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(dataList));
  }, [dataList]);

  return (
    <div className="App">
      <Header setDataList={setDataList} dataList={dataList} />
      <TodoList dataList={dataList} setDataList={setDataList} />
    </div>
  );
}

export default App;
