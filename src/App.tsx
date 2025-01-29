import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Index from "./pages/Index";
import NewsPage from "./pages/News";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import EnglishPlus from "./pages/EnglishPlus";

function App() {
  return (
    <Router>
      <TranslationProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/english-plus" element={<EnglishPlus />} />
        </Routes>
      </TranslationProvider>
    </Router>
  );
}

export default App;