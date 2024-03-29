import { useState } from "react"
import Navigation from "./components/Navigation"
import Dashboard from "./components/Dashboard";
import Incomes from "./components/Incomes";
import Expenses from "./components/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard /> ;
      case 3: 
        return <Incomes /> ;
      case 4: 
        return <Expenses /> ;
      default:
        return <Dashboard /> ;
    }
  }
  

  return (
    <div className="App">
      <main className="main-layout">
        <Navigation active={active} setActive={setActive} />
        <section>
          {displayData()}
        </section>
      </main>
    </div>
  )
}

export default App
