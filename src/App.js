import "./App.css";
import Hazardous from "./components/Hazardous";
import Moderate from "./components/Moderate";
import Unhealthy from "./components/Unhealthy";

function App() {
  return (
    <div className="App">
      <Unhealthy />
      <Moderate />
      <Hazardous />
    </div>
  );
}

export default App;
