import Calculate from "./components/Calculate/Calculate";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <Provider store={store}>
        <Calculate />
      </Provider>
    </div>
  );
}

export default App;
