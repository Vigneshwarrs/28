import "./App.css";
import CartPage from "./component/CartPage";
import { CartProvider } from "./component/CartContext";
function App() {
  return (
    <CartProvider>
      <div className="App">
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
