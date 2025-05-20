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

// import Practice from "./components/Practice";
// import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState(["a", "b", "c"]);

  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there's exactly 1 unread message, it should read "You have
   *   1 unread message (singular)"
   * - If there are > 1 unread messages, display "You have <n> unread
   *   messages" (plural)
   */
  const display =
    messages.length === 0
      ? "You're all caught up!"
      : messages.length === 1
      ? `You have ${messages.length} unread message`
      : `You have ${messages.length} unread messages`;
  return (
    <div>
      <h1>{display}</h1>
    </div>
  );
};

export default App;
