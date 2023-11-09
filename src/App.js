import "./App.css";
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import TestCard from "./components/TestCard/TestCard";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <TestCard />
    </div>
  );
}

export default App;
