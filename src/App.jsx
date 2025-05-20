// import "./pizza.css";
// import Pizzas from "./components/Pizzas";
// import Nav from "./components/Nav";

// function App() {
//   return (
//     <div className ="container">
//       <header>
//         <Nav />
//       </header>
//       <main>
//         <Pizzas />
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import Practice from "./components/Practice";
import Form from "./components/Form";
import padsData from "./components/pads";

const App = () => {
  const [pads, setPads] = useState(padsData);
  const padElement = pads.map((pad) => {
    return <button key={pad.id}>{pad.id}</button>;
  });

  return (
    <main>
      <div className="pad-container">{padElement}</div>
    </main>
  );
};

export default App;
