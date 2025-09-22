# Shopping Cart UI 🛒

This project is a simple shopping cart user interface built with React.It demonstrates the practical use of the **useContext** hook for global state management, along with **useState** for local state. Additionally, it integrates with a **JSON Server** to simulate a backend, providing a more realistic environment for testing product data and cart functionalities.

---

## ✨ Features

- **Global State Management:** Uses the `useContext` hook to manage shopping cart items and totals across components.
- **Add to Cart:** Add products to the cart with dynamic updates.
- **Remove from Cart:** Remove products easily with state reflecting instantly.
- **Real-time Updates:** The cart’s item count and total update automatically.
- **Component Communication:** Demonstrates clean state sharing without prop drilling.
- **Mock Backend with JSON Server:** Simulates fetching products and working with APIs.

---

## 🛠️ Technologies Used

- **Frontend Framework:** React
- **State Management:** useContext & useState hooks
- **Routing/Build Tool:** Vite
- **Mock Backend:** JSON Server
- **Language:** JavaScript

---

## 📚 Learning Points

- **useContext**: Simplifies state sharing across components by avoiding prop drilling.
- **Component Structure**: Demonstrates clean design patterns for UI with shared global state.
- **JSON Server**: Provides a simple way to test API requests locally without setting up a real backend.
- **Vite**: Ensures a fast and modern development experience.

---

## 🚀 Installation

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ninadshirsat/shopping-cart-ui.git
   ```

2. **Navigate into the project folder**

   ```bash
   cd shopping-cart-ui
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run JSON Server (to serve mock product data, if set up)**

   ```bash
   npx json-server --watch db.json --port 5000
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open in browser**
   Go to the URL shown in your terminal (e.g., http://localhost:5173)

🤝 Contributing
Contributions are welcome!
**To contribute:**

1. **Fork the project.**

2. **Create your feature branch:**

```bash
   git checkout -b feature/AmazingFeature
```

3. **Commit your changes:**

```bash
   git commit -m 'Add some AmazingFeature'
```

4. **Push to the branch:**

```bash
   git push origin feature/AmazingFeature
```

5. **Open a Pull Request**
   For issues or feature requests, open an issue in the repo.

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.
