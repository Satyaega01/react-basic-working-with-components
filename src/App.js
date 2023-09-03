import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2023, 2, 28) },
    { id: 2, title: "Car Insurance", amount: 294.67, date: new Date(2023, 2, 28) },
    { id: 3, title: "Car Insurance", amount: 294.67, date: new Date(2023, 2, 28) },
  ];

  return (
    <div>
      <h1>Testing React App</h1>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
