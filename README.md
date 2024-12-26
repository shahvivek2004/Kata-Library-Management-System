# Library Management System
A full-stack library management application built with PostgreSQL, Express, React, and Node.js (PERN stack) and This project includes test-driven development (TDD) with Jest and Supertest to ensure robust and reliable functionality.

## Features

- Book management (add, view, borrow, return)
- Real-time availability tracking
- RESTful API
- Test-driven development
- PostgreSQL database with automated timestamps

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/library-management.git
cd library-management
```

2. Set up the database

```bash
psql -U postgres
CREATE DATABASE library_management;
\c library_management
```

3. Run the schema file

```bash
psql -U postgres -d library_management -f schema.sql
```

4. Install dependencies

```bash
# Backend dependencies
cd server
npm init
npm install
npm install express pg dotenv cors
npm install --save-dev jest supertest nodemon


# Frontend dependencies
cd ../client
npm install
npm install axios
```

5. Configure environment variables

```bash 
# Create .env in server directory
cp .env.example .env

# Update with your PostgreSQL credentials
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=library_management
```
## Running the Application

1. Start the server

```bash
cd server
npm run dev
```

2. Start the client

```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

`GET /show` - Get all available books
`POST /add` - Add a new book
`PUT /borrow/:isbn` - Borrow a book
`PUT /return/:isbn` - Return a book

## Testing
```bash
cd server
NODE_OPTIONS=--experimental-vm-modules npm test
```

## Project Structure
```bash
Copylibrary-management/
├── front-end/
│   ├── src/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── index.js
│   └──  package.json
├── backend/
│   ├── src/
│   │   ├── bookRoutes.test.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## Development Workflow

1. Follow TDD principles
2. Write tests before implementing features
3. Make small, focused commits
4. Keep the main branch stable
5. Use feature branches for development

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -am 'Add YourFeature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Create Pull Request

## Contact
Vivek Shah - vivekshah22042004@gmail.com
Project Link - https://github.com/shahvivek2004/Kata-Library-Management-System
