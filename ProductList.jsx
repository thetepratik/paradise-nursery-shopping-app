import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
// Indoor Plants
{
id: 1,
name: "Snake Plant",
category: "Indoor Plants",
price: 25,
image: "/images/snake-plant.jpg",
},
{
id: 2,
name: "Peace Lily",
category: "Indoor Plants",
price: 30,
image: "/images/peace-lily.jpg",
},
{
id: 3,
name: "Money Plant",
category: "Indoor Plants",
price: 20,
image: "/images/money-plant.jpg",
},
{
id: 4,
name: "Spider Plant",
category: "Indoor Plants",
price: 22,
image: "/images/spider-plant.jpg",
},
{
id: 5,
name: "ZZ Plant",
category: "Indoor Plants",
price: 28,
image: "/images/zz-plant.jpg",
},
{
id: 6,
name: "Areca Palm",
category: "Indoor Plants",
price: 35,
image: "/images/areca-palm.jpg",
},

// Succulents
{
id: 7,
name: "Aloe Vera",
category: "Succulents",
price: 18,
image: "/images/aloe-vera.jpg",
},
{
id: 8,
name: "Echeveria",
category: "Succulents",
price: 15,
image: "/images/echeveria.jpg",
},
{
id: 9,
name: "Jade Plant",
category: "Succulents",
price: 20,
image: "/images/jade-plant.jpg",
},
{
id: 10,
name: "Haworthia",
category: "Succulents",
price: 17,
image: "/images/haworthia.jpg",
},
{
id: 11,
name: "String of Pearls",
category: "Succulents",
price: 25,
image: "/images/string-of-pearls.jpg",
},
{
id: 12,
name: "Burro's Tail",
category: "Succulents",
price: 24,
image: "/images/burros-tail.jpg",
},

// Flowering Plants
{
id: 13,
name: "Rose Plant",
category: "Flowering Plants",
price: 25,
image: "/images/rose.jpg",
},
{
id: 14,
name: "Orchid",
category: "Flowering Plants",
price: 40,
image: "/images/orchid.jpg",
},
{
id: 15,
name: "Hibiscus",
category: "Flowering Plants",
price: 22,
image: "/images/hibiscus.jpg",
},
{
id: 16,
name: "Jasmine",
category: "Flowering Plants",
price: 20,
image: "/images/jasmine.jpg",
},
{
id: 17,
name: "Lavender",
category: "Flowering Plants",
price: 28,
image: "/images/lavender.jpg",
},
{
id: 18,
name: "Geranium",
category: "Flowering Plants",
price: 24,
image: "/images/geranium.jpg",
},
];

function ProductList() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);
const [searchTerm, setSearchTerm] = useState("");

const handleAddToCart = (plant) => {
dispatch(addItem(plant));
};

const isInCart = (id) => {
return cartItems.some((item) => item.id === id);
};

const filteredPlants = plants.filter((plant) =>
plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const categories = [
"Indoor Plants",
"Succulents",
"Flowering Plants",
];

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return ( <div className="product-page">
{/* Navbar */} <nav className="navbar"> <div className="navbar-logo"> <Link to="/">Paradise Nursery</Link> </div>

```
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>

      <Link to="/cart" className="cart-link">
        🛒 Cart
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  </nav>

  {/* Product Listing */}
  <main className="product-container">
    <div className="product-header">
      <h1>Our Plants</h1>

      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
    </div>

    {categories.map((category) => {
      const categoryPlants = filteredPlants.filter(
        (plant) => plant.category === category
      );

      if (categoryPlants.length === 0) {
        return null;
      }

      return (
        <section
          className="plant-category"
          key={category}
        >
          <h2>{category}</h2>

          <div className="plant-grid">
            {categoryPlants.map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <div className="plant-info">
                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ${plant.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                    className="add-to-cart-btn"
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    })}
  </main>
</div>
```

);
}

export default ProductList;
