import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [page, setPage] = useState("/");
  function onMenu(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }

  return (
    <div className="app">
      <Header onMenu={onMenu} />
      <Main page={page} onMenu={onMenu} />
      <Footer />
    </div>
  );
}

export default App;
