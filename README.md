# 🛒 Amazon Clone – Full Stack E-Commerce Application

A full-stack e-commerce web application inspired by **Amazon’s UI and shopping workflow**, built using **React, Node.js, Express, and MySQL**.
The project focuses on product browsing, cart management, wishlist, and order placement with a clean, Amazon-like user experience.


---

##  Tech Stack

**Frontend**

* React.js (SPA)
* React Router
* Context API (Cart, Wishlist, Orders)
* CSS (Amazon-inspired layout)

**Backend**

* Node.js
* Express.js
* REST APIs

**Database**

* MySQL (Relational schema)

---

##  Features

### Product Listing

* Grid layout similar to Amazon
* Product cards with image, name, price
* Search products by name
* Filter products by category
* Add to Cart & Buy Now actions

### Product Detail Page

* Dedicated product page
* Multiple product images (carousel-style)
* Product description & specifications
* Price and stock availability
* Add to Cart, Buy Now, Wishlist

### Shopping Cart

* View all added products
* Increase / decrease quantity
* Remove items from cart
* Cart summary with **subtotal & total**
* Checkout flow

### Order Placement

* Shipping address form
* Order summary review
* Place order functionality
* Order confirmation with Order ID
* View order history

### 

* Wishlist with heart toggle
* Toast notifications (add to cart, order placed)
* Clean, Amazon-inspired UI

---

##  Database Design

* Normalized relational schema
* Separate tables for:

  * Products
  * Product Images
  * Categories
  * Cart Items
  * Orders & Order Items
  * Wishlist
* Proper foreign key relationships

---

##  Key Learnings

* Building a full e-commerce flow end-to-end
* State management using React Context API
* Designing scalable database schemas
* Integrating frontend and backend cleanly
* Handling real-world UI edge cases

---

##  AI Tools Usage

AI tools (ChatGPT and copilot) were used for:

* Debugging runtime issues
* Refactoring components
* Improving UI logic

*All code was reviewed, tested, and fully understood.*

---

##  How to Run Locally

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm start
```

Configure MySQL credentials in backend before running.

---

##  Assumptions

* Authentication not implemented (default user assumed)
* Payment gateway simulated
* Focus is on e-commerce functionality and UI

