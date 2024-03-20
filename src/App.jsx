//REACT imports
import { Routes, Route } from "react-router-dom";
//PAGE imports
import Header from "./components/header/header";
import MainPage from "./pages/main page/mainPage";
import Footer from "./components/footer/footer";
import FAQ from "./pages/FAQs/faq";
import Background from "./components/background/background";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
