import "./App.css";

import Main from "./components/Main";

import { ContextProvider } from "./context/BlockAppContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Main />
      </ContextProvider>
    </div>
  );
}

export default App;
