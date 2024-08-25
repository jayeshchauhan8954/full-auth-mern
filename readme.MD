project/
├── backend/               # Backend (Node.js + Express.js)
│   ├── config/            # Configuration files (Database, JWT secret, etc.)
│   ├── controllers/       # Controller functions to handle API logic
│   ├── middlewares/       # Custom middlewares (e.g., authentication, error handling)
│   ├── models/            # Mongoose models for MongoDB collections
│   ├── routes/            # Express route definitions
│   ├── services/          # Utility services (e.g., encryption, token generation)
│   ├── validations/       # Validation logic using express-validator
│   ├── utils/             # Common utility functions (e.g., error handling)
│   └── server.js          # Main entry point for the backend server
│
└── frontend/              # Frontend (React.js)
    ├── src/
    │   ├── components/    # Reusable UI components (e.g., forms, buttons)
    │   ├── pages/         # Page components (e.g., Register, Login, Home)
    │   ├── services/      # API services for data fetching and submission
    │   ├── utils/         # Utility functions (e.g., token handling, form validation)
    │   └── App.js         # Main app entry point and route handling
    └── public/            # Public assets (e.g., index.html)
