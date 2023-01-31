import "./App.css";
import { useState, useEffect } from "react";
import getItems from "./services/Items";
import Header from "./components/header/Header";
import Items from "./components/content/Items";
import Footer from "./components/footer/Footer";
import NotFound from "./components/content/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/content/Navbar";
import Cart from "./components/content/Cart";

const App = () => {
  const itemsList = getItems();

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || itemsList
  );

  const [selectedCategory, setCategory] = useState(
    JSON.parse(localStorage.getItem("selectedCategory")) || "Fashion"
  );

  function handleCategorySelect(event) {
    setCategory(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("selectedCategory", JSON.stringify(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleItemCardClick(event) {
    const trasformedItems = items.map((item) =>
      item.id === parseInt(event.target.id)
        ? item.isCarted === true
          ? { ...item, isCarted: false }
          : { ...item, isCarted: true }
        : { ...item }
    );

    setItems(trasformedItems);
  }

  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Items
              items={items}
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
              handleItemCardClick={handleItemCardClick}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={items}
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
