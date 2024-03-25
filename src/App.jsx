import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initTheme,
  initLanguage,
  portfolioSelector,
} from "./redux/portfolio/portfolioSlice";
import "./App.scss";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
import { Suspense } from "react";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector(portfolioSelector);
  const themeClass = `theme ${theme}`;

  useEffect(() => {
    dispatch(initTheme());
    dispatch(initLanguage());
  }, []);

  return (
    <div className={themeClass}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/portfolio' : '/'}>
        <Routes>
          <Route exact path="/" element={<Portfolio/>} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact/>} />
          <Route path="/work" element={<Work/>} />
        </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
