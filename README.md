# Product Management System

This is a Product Management System built using React.js for the frontend, Spring Boot for the backend, and MySQL for the database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Admin Dashboard:** Allows the admin to add, update, and delete products.
- **User Authentication:** Provides user authentication through registration and login functionality.
- **Responsive UI:** The frontend is designed to be responsive, ensuring a seamless experience across devices.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Spring Boot
- **Database:** MySQL

## Setup Instructions

1. **Clone the repository:**


2. **Backend Setup:**

- Navigate to the `backend` directory:


- Install dependencies:


- Run the Spring Boot application:


3. **Database Setup:**

- Create a MySQL database named `product_management_system`.
- Configure the database connection settings in `backend/src/main/resources/application.properties`.

4. **Frontend Setup:**

- Navigate to the `frontend` directory:


- Install dependencies:


- Run the React application:


5. **Accessing the Application:**

- Once the backend and frontend servers are running, you can access the application at `http://localhost:3000` in your web browser.

## Usage

- As an admin, you can log in to the admin dashboard using your credentials.
- From the dashboard, you can manage products by adding, updating, and deleting them.
- Make sure to log out after you finish your session.

## API Endpoints

- **GET /products:** Get all products.
- **GET /products/{id}:** Get a specific product by ID.
- **POST /products:** Add a new product.
- **PUT /products/{id}:** Update an existing product.
- **DELETE /products/{id}:** Delete a product.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
