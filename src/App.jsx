import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Product from "./components/Product";
import ProductGrid from "./components/Productgrid";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MostWantedPage from "./pages/MostWantedPage";
import FAQPage from "./pages/FAQPage";
import ReturnPage from "./pages/ReturnPage";

export default function App() {
  return (
    <>
      <Ticker />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/most-wanted" element={<MostWantedPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

