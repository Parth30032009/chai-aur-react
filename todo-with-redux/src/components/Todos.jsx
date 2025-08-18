import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="text-center">
      {todos.length == 0 ? (
        <div className="text-4xl text-white mt-4">Add Your Todos</div>
      ) : (
        <div>
          <div className="text-3xl text-white">Todos</div>
          <ul className="list-none">
            {todos.map((todo) => (
              <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={todo.id}
              >
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todos;
