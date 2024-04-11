
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import ShopPage from "./components/page/ShopPage";
import BlogPage from "./components/page/BlogPage";
import ContactPage from "./components/page/ContactPage"; 
import CartPage from "./components/page/CartPage";
import AuthPage from "./components/page/AuthPage";
import ProductDetailsPage from "./components/page/ProductDetailsPage";
import BlogDetailsPage from "./components/page/BlogDetailsPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactUs" element={<AuthPage />} />
        <Route path="/Product/:id" element={<ProductDetailsPage />} />
        <Route path="/Blog/:id" element={<BlogDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
