
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const TodoList = ({ dataList, setDataList }) => {
  console.log(dataList);
  const handleRemove = (item) => {
    setDataList(dataList.filter((e) => e !== item));
    localStorage.setItem("dataLocal", JSON.stringify(dataList));
  };
  const handleTick = (item) => {
    setDataList(dataList.map((e)=> e===item ? {...item, completed:!item.completed}:e))
    localStorage.setItem("dataLocal", JSON.stringify(dataList));
  }
  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h1>Todo List</h1>
      <div className="w-50 mt-3">
        {dataList?.length === 0
          ? "there is no list"
          : dataList?.map((item, index) => (
              <div
                key={crypto.randomUUID()}
                className="w-100 bg-warning mb-3 px-4 py-2 rounded-3 d-flex justify-content-between align-items-center"
              >
                <h5
                  className={
                    item.completed ? "text-decoration-line-through" : ""
                  }
                >
                  {index + 1}- {item.text}
                </h5>
                <div>
                  <TiTick
                    className=" fs-3 tickBtn me-2 text-success"
                    onClick={() => handleTick(item)}
                  />

                  <FaTrashAlt
                    className="removeBtn text-danger"
                    onClick={() => handleRemove(item)}
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TodoList;
