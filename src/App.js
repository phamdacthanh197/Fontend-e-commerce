import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import CartMenu from "./pages/global/CartMenu";
import Footer from "./pages/global/Footer";
import Navbar from "./pages/global/Navbar";
import Home from "./pages/Home/Home";
import ItemDetail from "./pages/itemDetail/ItemDetail";
import ScrollTopButton from "./components/ScrollTop"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/checkout/success' element={<Confirmation/>} />
          <Route path='/item/:itemId' element={<ItemDetail/>} />
        </Routes>
        <CartMenu />
        <Footer />
        <ScrollTopButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
