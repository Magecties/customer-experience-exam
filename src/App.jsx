import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FAQPage from "./pages/FAQPage";
import ReturnPage from "./pages/ReturnPage";
import NewsletterPopup from "./components/NewsLetterPopup";

export default function App() {
  return (
    <>
      <NewsletterPopup />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
