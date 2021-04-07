import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/app.scss";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import ProductPage from "./assets/pages/ProductPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <ProductPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
