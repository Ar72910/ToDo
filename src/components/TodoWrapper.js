import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Fetchdata from "../Fetchdata";

uuidv4();

const TodoWrapper = () => {
  const [data, setData] = useState([]);

  const addTodo = (todo) => {
    setData([
      ...data,
      { id: uuidv4(), todo: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="TodoWrapper">
      <button className="button">{data.length}</button>

      <TodoForm addTodo={addTodo} />
      <Fetchdata data={data} setData={setData} />
      
    </div>
  );
};

export default TodoWrapper;
