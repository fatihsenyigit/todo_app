import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ dataList, setDataList }) => {
  const handleClick = (item) => {
    setDataList(dataList.filter((e)=>e!==item))
  };
  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h1>Todo List</h1>
      <div className="w-50 mt-3">
        {dataList.length === 0
          ? "there is no list"
          : dataList.map((item, index) => (
              <div
                key={crypto.randomUUID()}
                className="w-100 bg-warning mb-3 px-4 py-2 rounded-3 d-flex justify-content-between align-items-center"
              >
                <h5>
                  {index + 1}- {item}
                </h5>
                <div>
                  <Button variant="dark" onClick={() => handleClick(item)}>
                    <FaTrashAlt />
                  </Button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TodoList;
