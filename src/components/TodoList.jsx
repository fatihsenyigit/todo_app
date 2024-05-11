



const TodoList = () => {
    const data = ['veli','ali']
  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h1>Todo List</h1>
      <div className="w-50 mt-3">
        {data.map((item)=>{
            <div>
               sas 
            </div>
        })}
      </div>
    </div>
  );
}

export default TodoList