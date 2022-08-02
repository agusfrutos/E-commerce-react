import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";

import CartProvider from "./Context/CartContext";
import FavProvider from "./Context/FavContext";

function App() {
  return (
    <CartProvider>
      <FavProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </FavProvider>
    </CartProvider>
  );
}

export default App;
