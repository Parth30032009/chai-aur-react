import Card from "./components/Card";

function App() {
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 rounded-xl mb-4">Tailwind Test</h1>

      <Card title="Chai aur Code" myArr={myArr} />
      <Card title="Parth" />
    </>
  );
}

export default App;
