import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
