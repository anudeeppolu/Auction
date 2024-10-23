---

# Online Auction System

## Author
**Anudeep**

## Project Overview
This is a full-stack web application that allows users to bid on auction items. The app supports user registration, login, and enables authenticated users to create, view, update, delete auction items, and place bids. It is built using:

- **Backend**: Node.js with Express and MongoDB.
- **Frontend**: React.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)

---

## Project Structure

```
/frontend                 # React Frontend
    /src
        /components       # React Components
        /pages            # React Pages (Home, Profile, etc.)
        /utils            # Utility functions
    package.json          # Frontend dependencies

/backend                  # Node.js + Express Backend
    /config               # Database and environment config
    /controllers          # API controllers (Auth, Auction, Bids)
    /models               # Mongoose models (User, Auction, Bid)
    /routes               # Express routes (Auth, Auctions, Bids)
    /middleware           # Authentication middleware
    package.json          # Backend dependencies
```

---

## Features

### Backend

- **User Authentication**: Sign up, login, JWT-based authentication.
- **Auction Management**: Users can create, view, update, and delete auctions.
- **Bid System**: Place bids on auction items, view bid history, and the current highest bid.
- **Profile Management**: View and manage user details and auction activities.

### Frontend

- **Home Page**: Lists all auctions with current bids.
- **Auction Detail Page**: Shows detailed information and bid history for an auction.
- **Profile Page**: Displays user-specific data and user auctions.
- **Create Auction**: Users can create new auctions.

---

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing auction and bid data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for secure authentication.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for making API requests.
- **React Router**: For managing navigation between pages.

---

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm (or yarn)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/anudeep-auction-system.git
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:

   ```
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

---

## Running the Application

1. **Backend** will run on `http://localhost:5000`.
2. **Frontend** will run on `http://localhost:3000`.

Make sure both the backend and frontend are running for the full application to work.

---

## API Endpoints

### Auth Routes

- **POST** `http://localhost:5000/api/auth/register`: Register a new user.
- **POST** `http://localhost:5000/api/auth/login`: Log in a user.
- **GET** `http://localhost:5000/api/auth/profile`: Get logged-in user profile.

### Auction Routes

- **GET** `http://localhost:5000/api/auctions`: Get all auctions.
- **GET** `http://localhost:5000/api/auctions/:id`: Get a specific auction by ID.
- **POST** `http://localhost:5000/api/auctions/create`: Create a new auction (Protected).
- **PUT** `http://localhost:5000/api/auctions/edit/:id`: Update an auction (Protected).
- **DELETE** `http://localhost:5000/api/auctions/delete/:id`: Delete an auction (Protected).
- **GET** `http://localhost:5000/api/auctions/my-auctions`: Get auctions created by the logged-in user (Protected).

### Bid Routes

- **POST** `http://localhost:5000/api/bids/:auctionId`: Place a bid on an auction (Protected).
- **GET** `http://localhost:5000/api/bids/:auctionId/history`: Get bid history for an auction (Protected).

---

## License

This project is licensed under the MIT License.

---

This version of the **README** includes the route for fetching bid history: `GET /:auctionId/history` under **Bid Routes**.
