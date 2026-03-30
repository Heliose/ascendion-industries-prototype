import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IndustryPage from './pages/IndustryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-18">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
