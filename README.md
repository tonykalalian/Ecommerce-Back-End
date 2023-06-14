# Grocery Store Project

This is a web application for a grocery store. It provides features such as user authentication, product management, shopping cart functionality, and order processing.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Users can sign up, log in, and manage their profiles.
- Product management: Admin users can add, update, and delete products.
- Shopping cart: Users can add products to their cart, update quantities, and proceed to checkout.
- Order processing: Users can place orders, view their order history, and track order status.

## Technologies

- Node.js: Backend JavaScript runtime environment.
- Express.js: Web framework for building the server.
- MongoDB: NoSQL database for storing product, user, and order data.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.
- JWT: JSON Web Tokens for user authentication and authorization.
- Stripe: Payment processing integration for handling transactions.
- HTML, CSS, JavaScript: Frontend web technologies for the user interface.

## Installation

1. Clone the repository:


2. Navigate to the project directory:


3. Install the dependencies:


4. Set up environment variables:

- Create a `.env` file in the project root directory.
- Add the following environment variables to the file:
  ```
  PORT=3000
  MONGO_URL=your-mongodb-connection-string
  JWT_SECRET=your-jwt-secret
  STRIPE_SECRET_KEY=your-stripe-secret-key
  ```

5. Start the application:


6. Open your web browser and access the application at `http://localhost:3000`.

## Usage

- Register a new user account or log in with an existing account.
- Browse the product catalog, search for items, and add them to your cart.
- View and manage your cart by adjusting quantities or removing items.
- Proceed to checkout and enter your payment information.
- Place an order and view your order history.
- Admin users can access additional features like product management.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
