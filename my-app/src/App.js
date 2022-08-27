import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;
