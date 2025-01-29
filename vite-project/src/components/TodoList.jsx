import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handelDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handelComplte = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handelEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "completed" : ""}`}
            onChange={(event) => {
              const updatedTodos = todos.map((item) =>
                item.id === todo.id
                  ? { ...item, title: event.target.value }
                  : item
              );
              setTodos(updatedTodos);
            }}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handelComplte(todo)}
            >
              Done
            </button>

            <button
              className="button-edit task-button"
              onClick={() => handelEdit(todo.id)}
            >
              Edit
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handelDelete(todo)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
