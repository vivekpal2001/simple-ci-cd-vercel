# Simple CI/CD Demo Project

A minimal Node.js application with a frontend for testing CI/CD pipelines.

## Features

- ✨ Simple Node.js HTTP server
- 🎨 Clean, responsive frontend
- 🔌 RESTful API endpoints
- 🧪 Basic test suite
- 🚀 Ready for CI/CD integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### Running Tests

```bash
npm test
```

## API Endpoints

- `GET /` - Landing page
- `GET /api/status` - Server status information
- `GET /api/health` - Health check endpoint

## Project Structure

```
.
├── server.js           # Main server file
├── public/
│   └── index.html     # Frontend page
├── test.js            # Test suite
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## CI/CD

This project is configured for GitHub Actions workflows. See `.github/workflows/ci.yaml` for the CI configuration.

## License

ISC
