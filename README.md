# Medicine Delivery App Backend

This is the backend part of the Medicine Delivery app, responsible for handling server-side logic, interacting with the MongoDB database, and serving data to the frontend.

## Overview

The backend of the Medicine Delivery app is built using Express, a Node.js web application framework. It handles incoming requests from the frontend, processes them, interacts with the MongoDB database to fetch or update data, and sends the response back to the client.

## Technologies Used

-   **Node.js:** Backend runtime environment.
-   **Express:** Web application framework for Node.js.
-   **MongoDB:** NoSQL database for storing application data.

## Features

-   **API Endpoints:** Define routes to handle various CRUD operations such as fetching shops, managing cart items, retrieving order history, etc.
-   **Database Integration:** Interact with MongoDB database to store and retrieve data related to medicines, users, orders, etc.
-   **Middleware:** Implement middleware functions for request processing, data validation, error handling, etc.

## Getting Started

Follow these steps to set up and run the backend server for the Medicine Delivery app.

### Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (LTS version)
-   [MongoDB](https://www.mongodb.com/) (Installed and running)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/NNaumenko83/med-deliv-test-back
    ```

2. Navigate to the project directory:

    ```bash
    cd med-deliv-test-back
    ```

3. Install the project's dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Define environment variables such as `PORT`, `DB_HOST` in the `.env` file.

### Usage

1. Start the backend server:

    ```bash
    npm run start:dev
    ```

2. The backend server will start running at the specified port.

## Links

-   Repository: [https://github.com/NNaumenko83/med-deliv-test-back](https://github.com/NNaumenko83/med-deliv-test-back)

## Author

-   Mykola Naumenko
-   GitHub: [https://github.com/NNaumenko83](https://github.com/NNaumenko83)
