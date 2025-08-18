import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="bg-red-400 w-screen h-screen flex flex-col justify-center  items-center">
      <div className="w-fit min-w-1/2 h-fit min-h-1/2">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default App;
