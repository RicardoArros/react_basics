import StateOne from "./components/useState/StateOne";
import StateTwo from "./components/useState/StateTwo";
import ErrorApp from "./components/useState/ErrorApp";
import ProductApp from "./components/useState/ProductApp";
import ShoppingCart from "./components/useState/ShoppingCart";

function App() {
  return (
    <div className="">
      <StateOne />
      <StateTwo />
      <ErrorApp />
      <ProductApp />
      <ShoppingCart />
    </div>
  );
}

export default App;
