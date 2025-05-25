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
import soundPad from "./components/pads";
import Pad from "./components/Pad";

const App = () => {
  const [pads, setPads] = useState(soundPad);

  return (
    <main>
      <div>
        {pads.map((pad) => {
          return <Pad key={pad.id} color={pad.color} />;
        })}
      </div>
    </main>
  );
};

export default App;
