# Full-Stack App: Thoughtful AI Support Agent

This project is a full-stack application that consists of a **React frontend** and a **Node.js backend**. The app provides a simple support agent that answers basic questions using hardcoded responses.

## Features

- **React Frontend**: User interface for asking questions and displaying responses.
- **Node.js Backend**: Handles incoming requests and returns hardcoded responses.

## Installation

Follow the steps below to clone and set up the project:

1. **Clone the repository**:

   ```
   git clone https://github.com/MattLui/simple-customer-support.git
   cd simple-customer-support
   ```

2. **Install dependencies for both frontend and backend**:

   Run the following command from the root directory. This will install dependencies for both the frontend and backend in one step:

   ```
   npm install
   ```

   This command will:

   - Install dependencies for the **backend** (located in `backend/`).
   - Install dependencies for the **frontend** (located in `frontend/`).

## Running the App

Once the dependencies are installed, you can run both the backend and frontend simultaneously using the following command:

```
npm start
```

This will:

- Start the **backend** server at `http://localhost:4000` (or another port if specified in the code).
- Start the **frontend** development server at `http://localhost:3000`.

## How to Use

1. Open your browser and navigate to `http://localhost:3000`.
2. Type in a question in the input field and press Enter or click the "Ask" button.
3. The app will display a response from the backend.

## API Endpoints

The backend provides the following API endpoint:

- **POST** `/ask`
  - **Request**:
    - JSON object containing the user's question.
    - Example:
      ```
      {
      "question": "What does the eligibility verification agent (EVA) do?"
      }
      ```
  - **Response**:
    - JSON object containing the answer to the question.
    - Example:
      ```
      {
      "answer": "EVA automates the process of verifying a patient’s eligibility and benefits information in real-time."
      }
      ```

## Available Scripts

In the project directory, you can run:

- **`npm install`**: Installs the project dependencies for both frontend and backend.
- **`npm start`**: Starts both the backend and frontend servers simultaneously.
