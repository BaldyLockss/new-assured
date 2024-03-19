//REACT imports
import { Routes, Route } from "react-router-dom";
//PAGE imports
import Header from "./components/header/header";
import MainPage from "./pages/main page/mainPage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
