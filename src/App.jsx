//REACT imports
import { Routes, Route } from "react-router-dom";
//PAGE imports
import Header from "./components/header/header";
import MainPage from "./pages/main page/mainPage";

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

      <footer></footer>
    </>
  );
}

export default App;
