# Cakes N Shapes

Welcome to **Cakes N Shapes**, your premier online bakery for mouth-watering cakes, delicious pastries, and delightful desserts. Whether you're celebrating a special occasion or simply satisfying a craving, our bakery is here to serve you! This project is a fully functional website that allows customers to:

- Browse our extensive menu of baked goods
- Place orders for pickup or delivery
- Reserve a table for an in-store experience
- Learn about our bakery's history, contact information, and more

## Features

### User Authentication
- **Signup & Login**: Secure user authentication system with email/password login, allowing users to create accounts, log in, and manage their personal information.

### Menu Display
- **Interactive Menu**: Display cakes, pastries, drinks, and other baked goods with descriptions, images, and prices.
- **Search & Filters**: Search for specific items and apply filters by category (e.g., cakes, cookies, drinks).

### Order Management
- **Order Placement**: Users can add items to their cart, select quantities, and proceed to checkout.
- **Order History**: Customers can view their past orders and track current orders.

### Table Reservation
- **Booking System**: Reserve a table at the bakery for dine-in. Choose the date, time, and number of people.
- **Availability Check**: Real-time availability check to ensure customers can reserve a table on their preferred date.

### Bakery Information
- **About Us**: Learn about our bakery's history, values, and the team behind Cakes N Shapes.
- **Location & Contact**: View the bakery's address, contact information, and working hours.
- **FAQs**: Common questions about products, services, and policies.

### Admin Dashboard (Backend)
- **Product Management**: Admins can add, edit, and remove products from the menu.
- **Order Management**: Admins can view, manage, and update the status of customer orders.
- **Customer Management**: Admins can view customer profiles, order history, and manage user roles.

## Tech Stack

The project is built with the following technologies:

- **Frontend**: 
  - **React**: A JavaScript library for building user interfaces, used to build the dynamic and responsive UI.
  - **CSS**: Styling handled via traditional CSS or Styled Components for more modular styling.
  - **React Router**: For routing between different pages (e.g., home, menu, order details, etc.).
  - **Axios**: For handling HTTP requests to communicate with the backend server.

- **Backend**: 
  - **Node.js & Express**: The backend server, providing API routes for handling user data, orders, and bakery information.
  - **MongoDB**: A NoSQL database to store data about users, orders, menu items, and reservations.
  - **JWT Authentication**: JSON Web Tokens for secure user authentication.

- **Deployment**:
  - **Frontend**: Deployed on platforms such as Vercel, Netlify, or AWS S3 (depending on your chosen platform).
  - **Backend**: Hosted on platforms like Heroku, AWS, or DigitalOcean.
  
## Setup Instructions

### Prerequisites

To run this project locally, you need to have the following installed:
- **Node.js** (LTS version)
- **npm** or **yarn** (Package managers for Node.js)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Shinkhal/Cakes-N-Shape.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Cakes-N-Shape
   ```

3. Install the dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

4. Install the dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

5. Set up your environment variables:
   - Create a `.env` file in the **backend** folder to store sensitive information such as API keys, database URL, and JWT secret.
   
6. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

7. Start the backend:
   ```bash
   cd backend
   npm start
   ```

8. Open your browser and go to `http://localhost:3000` (or the appropriate port) to view the website.

### Running Tests
- If you’ve set up testing in your project, you can run tests with:
  ```bash
  npm test
  ```

## Contributing

We welcome contributions to **Cakes N Shapes**! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request describing your changes.

### Code of Conduct

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) when contributing to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Acknowledgements

- Special thanks to all contributors and libraries that make this project possible.
- The design inspiration for this website came from a mix of modern and minimalistic styles to provide a pleasant user experience.

## Contact

For any inquiries, feel free to contact us at [info@cakesnshapes.com](mailto:info@cakesnshapes.com).

---

Enjoy browsing and ordering delicious treats from **Cakes N Shapes**!
```

### Enhancements:
1. **Features**: Expanded on the features to give a better sense of what the site offers for both customers and admins.
2. **Tech Stack**: Detailed the frontend and backend technologies used.
3. **Installation**: Detailed step-by-step guide to running the project locally.
4. **Contributing**: Added guidelines for contributing to the project.
5. **License and Acknowledgments**: Added placeholders for a license file and code of conduct if you plan to have one.

