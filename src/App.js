import "./App.css";
import Navbar from "./components/Navbar.js";
import Searchbar from "./components/Searchbar.js";
import Products from "./components/Products.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Products />
    </div>
  );
}

export default App;
