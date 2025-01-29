import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Index from "./pages/Index";
import NewsPage from "./pages/News";
import EnglishPlus from "./pages/EnglishPlus";

function App() {
  return (
    <Router>
      <TranslationProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/english-plus" element={<EnglishPlus />} />
        </Routes>
      </TranslationProvider>
    </Router>
  );
}

export default App;