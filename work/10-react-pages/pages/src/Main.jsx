import React from "react";
import Home from "./Home";
import Foxes from "./Foxes";
import About from "./About";

function Main({ page, setPage }) {
  return (
    <main className="content" id="main">
      {(page === "#/" || page === "/" || page === "") && <Home />}
      {page === "#/foxes" && <Foxes setPage={setPage} />}
      {page === "#/about" && <About />}
    </main>
  );
}

export default Main;