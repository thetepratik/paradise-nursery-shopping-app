# Paradise Nursery Shopping Application

## Project Name

**Paradise Nursery Shopping Application**

## Project Description

Paradise Nursery is a dynamic online plant shopping application that allows users to browse and purchase a variety of houseplants through a simple and user-friendly interface.

The application provides multiple plant categories, product information, shopping cart functionality, and dynamic price and quantity updates.

## Features

* 🌱 Browse different categories of houseplants
* 🪴 Display plant thumbnails, names, descriptions, and prices
* 🛒 Add plants to the shopping cart
* 🔢 Dynamically display the number of items in the cart
* ➕ Increase plant quantity in the shopping cart
* ➖ Decrease plant quantity in the shopping cart
* 🗑️ Remove plants from the shopping cart
* 💰 Calculate individual and total cart costs
* 🏠 Navigate between Home, Plants, and Cart pages
* 📱 User-friendly and responsive interface
* 🔔 Checkout button with a "Coming Soon" message

## Technologies Used

* React.js
* Redux Toolkit
* React Redux
* JavaScript
* HTML5
* CSS3
* Git
* GitHub

## Application Pages

### Home Page

The landing page introduces **Paradise Nursery** and provides a **Get Started** button that takes users to the plant listing page.

### About Us

The About Us page provides information about Paradise Nursery and the company.

### Plants / Product Listing

Users can browse houseplants organized into different categories. Each plant displays:

* Plant thumbnail
* Plant name
* Plant description
* Plant price
* Add to Cart button

### Shopping Cart

The cart page allows users to:

* View selected plants
* Increase or decrease quantities
* Remove products
* View unit prices
* View total cost for each product
* View the total cart amount
* Continue shopping
* Proceed to checkout

## Redux State Management

Redux Toolkit is used to manage the shopping cart state. The cart stores information about selected plants and their quantities and dynamically updates the cart count and total price.

## Project Structure

```text
paradise-nursery-shopping-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   │
│   ├── redux/
│   │   └── CartSlice.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── README.md
└── .gitignore
```

## Purpose of the Project

The purpose of this project is to demonstrate the development of a dynamic e-commerce web application using React and Redux. It demonstrates component-based development, state management, routing, user interaction, and dynamic shopping cart calculations.

## Repository

**Paradise Nursery Shopping Application**

Built as a final project for a React/Redux web development course.
