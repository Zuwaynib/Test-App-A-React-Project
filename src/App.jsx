import "./index.css";
import Pizzas from "./components/Pizzas";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Pizzas />
      </main>
    </div>
  );
}

export default App;
