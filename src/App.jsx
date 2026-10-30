import { useState } from "react";
import { products } from "./data.js";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartPanel from "./components/CartPanel.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // 👈 ເພີ່ມ state ໝວດໝູ່

  function addToCart(product, qty = 1) {
    const existing = cart.find((i) => i.id === product.id);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: qty }]);
    }
  }

  function increase(id) {
    setCart(
      cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  }

  function decrease(id) {
    setCart(
      cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((i) => i.id !== id));
  }

  // 👈 กອງສິນຄ້າຕາມໝວດໝູ່ທີ່ເລືອກ
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="wrap">
      <Header shopName="ຮ້ານ Lao Handmade" itemCount={itemCount} />
      <div className="layout">
        <div>
          <FilterBar 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
          {/* ส่ง products ที่กรองแล้วไปแสดง */}
          <ProductGrid products={filteredProducts} onAdd={addToCart} />
        </div>
        <CartPanel
          cart={cart}
          total={total}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;