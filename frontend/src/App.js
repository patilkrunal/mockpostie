import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import View from "./viewEndpoints/view";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <View />
    </div>
  );
}

export default App;
