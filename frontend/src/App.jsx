import { useState } from "react"
import Navigation from "./components/Navigation"

function App() {
  const [active, setActive] = useState(1);
  

  return (
    <div className="App">
      <main className="main-layout">
        <Navigation active={active} setActive={setActive} />
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default App
