

# Frontend Contact Management App

This is a **React-based frontend application** that interacts with a backend server to manage contacts. The frontend fetches contact data from both a MongoDB database and an external JSON file hosted online.

## Features
- Fetches contact data from the backend, which combines data from MongoDB and an online JSON.
- Displays contacts in a list.
- Allows adding, updating, and deleting contacts.

## Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js** (version 14 or above)
- **npm** (Node package manager)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app
```

### 2. Install Dependencies

Once inside the project folder, run the following command to install the required dependencies:

```bash
npm install
```

This will install all necessary packages listed in the `package.json` file, including React and other dependencies.

### 3. Environment Variables

Make sure to set up your environment variables. For local development, you can create a `.env` file in the root of your project and add any necessary configuration (if needed). For this particular project, there are no additional environment variables for the frontend setup.

### 4. Start the Development Server

To start the development server, run:

```bash
npm start
```

This will launch the app in your default web browser, typically at:

```
http://localhost:3000
```

### 5. Accessing the Backend

The frontend will fetch contact data from the backend server, which must be running at `http://localhost:5000`. Make sure your backend server is set up and running (you can refer to the **backend README** for the server setup).

### 6. Build for Production

When you're ready to build your application for production, run the following command:

```bash
npm run build
```

This creates an optimized build of the app in the `build` folder, which you can deploy to any web server.

## File Structure

Here's the breakdown of the key files in the frontend:

```
/src
  /components
    - ContactList.js    # Displays list of contacts.
    - ContactForm.js    # Form for adding/updating contacts.
  App.js                # Main React component that connects the frontend with the backend.
  index.js              # Entry point of the React application.
  api.js                # Functions for API calls to the backend.
  App.css               # Styling for the app.
  App.test.js           # Optional tests for your app.
  .env                  # Environment variables (if any).
  package.json          # Project metadata and dependencies.
```

### Key Components

- **ContactList.js**: Displays a list of contacts fetched from the backend. It displays contact names, emails, and mobile numbers.
  
- **ContactForm.js**: Provides the form for adding and editing contacts. It includes fields for name, email, and mobile number.

- **App.js**: The main component that connects the frontend to the backend API. It fetches and displays contacts, and handles form submission for adding/updating contacts.

- **api.js**: Contains functions for interacting with the backend API. It uses `fetch` or `axios` to call the backend server and get the contact data, as well as to add, update, or delete contacts.

---

## Backend Integration

This frontend application expects the backend API to be running on `http://localhost:5000`. The backend routes used are:

- **GET `/api/contacts`**: Fetches a list of contacts from MongoDB and an online JSON file.
- **POST `/api/contacts`**: Adds a new contact or updates an existing contact.
- **DELETE `/api/contacts/:id`**: Deletes a contact by its `id`.

Make sure the backend server is running when you interact with the frontend.

## Additional Notes

### Error Handling

The frontend handles errors in cases where:
- The backend is not available.
- The fetched data is empty or malformed.

### CORS

Ensure that your backend server has CORS enabled to allow the frontend (which runs on a different port during development) to make requests. If you're using the provided backend code, the `cors` package is already included, so CORS issues should be handled.

---
