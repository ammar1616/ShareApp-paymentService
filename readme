# ShareApp-paymentService

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Testing](#testing)
8. [Contributing](#contributing)


## Overview

PaymentApp-Service is a Node.js backend application designed to facilitate payment transactions in a sharing economy application. It handles escrow transactions and payment methods for users, ensuring secure and reliable financial operations. The application utilizes Firebase for data storage and authentication.

## Features

1. **Escrow Transactions:**
   - Create and manage escrow transactions between lenders and borrowers.
   - Update transaction status (release or refund) based on the transaction's lifecycle.

2. **Payment Methods:**
   - Add, retrieve, update, and delete payment methods for users.
   - Ensure secure handling of sensitive payment information.

3. **Balance Management:**
   - Update user balances after each transaction to maintain accurate financial records.
   - Prevent transactions with insufficient funds.

4. **Middleware Architecture:**
   - Implement middleware functions for error handling and asynchronous operations.
   - Secure user routes with authentication middleware using JWT tokens.

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Firebase credentials file (`share-7b17f-firebase-adminsdk-vh7sw-9738641bea.json`)
- [Other dependencies, tools, or services]

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ammar1616/ShareApp-paymentService
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy the `.env.example` file to `.env`.
   - Update the `.env` file with your configuration details.

4. **Run the Application:**
   ```bash
   npm start
   ```

## Project Structure

The project follows a modular structure:

- **controllers:** Handle business logic for different routes.
- **middlewares:** Custom middleware functions, including error handling.
- **validations:** Data validation using Joi.
- **routes:** Define API routes for escrow transactions and payment methods.
- **startup:** Initialization scripts for Firebase and route setup.

## Usage

To make use of the functionalities provided by **PaymentApp-Service**, follow the instructions below:

### 1. Escrow Transactions:

- **Add Transaction:**
  - Use the `/` endpoint with a POST request, providing details like `requestId`, `lenderId`, `borrowerId`, and `amount`.
  - Example:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"requestId": "123456", "lenderId": "user1", "borrowerId": "user2", "amount": 50}' http://localhost:5000/payment-service/escrowTransaction/
    ```

- **Update Transaction Status:**
  - Use the `/:id` endpoint with a PATCH request, providing the transaction ID and the desired `status` (release or refund).
  - Example:
    ```bash
    curl -X PATCH -H "Content-Type: application/json" -d '{"status": "released"}' http://localhost:5000/payment-service/escrowTransaction/123456
    ```

### 2. Payment Methods:

- **Add Payment Method:**
  - Register a new payment method by making a POST request to the `/` endpoint with details like `cardNumber`, `cardHolderName`, `expirationDate`, and `cvv`.
  - Example:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"cardNumber": "1234567890123456", "cardHolderName": "John Doe", "expirationDate": "12/25", "cvv": "123"}' http://localhost:5000/payment-service/paymentMethod/
    ```

- **Retrieve Payment Method:**
  - Retrieve user payment method details by making a GET request to the `/` endpoint.
  - Example:
    ```bash
    curl -X GET -H "x-auth-token: [your_token_here]" http://localhost:5000/payment-service/paymentMethod/
    ```

- **Update Payment Method:**
  - Update payment method details by making a PATCH request to the `/` endpoint with the desired changes.
  - Example:
    ```bash
    curl -X PATCH -H "x-auth-token: [your_token_here]" -H "Content-Type: application/json" -d '{"cardHolderName": "Updated Name", "expirationDate": "12/26"}' http://localhost:5000/payment-service/paymentMethod/
    ```

- **Delete Payment Method:**
  - Remove a payment method by making a DELETE request to the `/` endpoint.
  - Example:
    ```bash
    curl -X DELETE -H "x-auth-token: [your_token_here]" http://localhost:5000/payment-service/paymentMethod/
    ```

## Testing

To run tests, execute the following command:

```bash
npm test
```

The testing strategy includes unit tests for individual components, ensuring robustness and reliability.

## Contributing

We welcome contributions! Follow these guidelines to contribute to the project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit.
4. Submit a pull request.

Thanks for Your Interest