# Simple CI/CD Demo Project

A minimal Node.js application demonstrating a complete CI/CD pipeline with automated testing, linting, and deployment to Vercel.

## Features

- ✨ Simple Node.js HTTP server (no frameworks)
- 🎨 Clean, responsive frontend
- 🔌 RESTful API endpoints
- 🧪 Automated test suite
- 🔍 ESLint code quality checks
- 🚀 CI/CD pipeline with GitHub Actions
- 📦 Automatic deployment to Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm 

### Installation

```bash
npm install
```

### Available Scripts

```bash
npm start          # Start the production server
npm run dev        # Start the development server
npm test           # Run the test suite
npm run lint       # Run ESLint code quality checks
npm run build      # Build the application
```

The server will start on `http://localhost:3000`

## API Endpoints

- `GET /` - Landing page
- `GET /api/status` - Server status and version information
- `GET /api/health` - Health check endpoint (returns uptime)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yaml        # GitHub Actions CI/CD pipeline
├── public/
│   └── index.html         # Frontend page
├── server.js              # Main HTTP server
├── test.js                # Test suite
├── .eslintrc.js           # ESLint configuration
├── package.json           # Dependencies and scripts
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment:

### Pipeline Stages

1. **Test** - Runs automated tests to verify functionality
2. **Lint** - Checks code quality with ESLint
3. **Deploy** - Automatically deploys to Vercel (main branch only)

### Setting Up CI/CD

#### GitHub Actions
The workflow is automatically triggered on:
- Push to `main` branch
- Pull requests to `main` branch

#### Vercel Deployment
To enable Vercel deployment, add these secrets to your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:
   - `VERCEL_TOKEN` - Your Vercel authentication token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

**Getting Vercel credentials:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login and link project
vercel login
vercel link

# Get your org and project IDs from .vercel/project.json
cat .vercel/project.json
```

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# The test suite includes:
# - Server module loading test
# - Health endpoint test
# - Package configuration test
```

### Code Quality

This project uses ESLint for code quality:

```bash
# Run linter
npm run lint

# ESLint checks for:
# - Unused variables
# - Undefined variables
# - Code style consistency
```

## Deployment

### Manual Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Automatic Deployment

Every push to the `main` branch automatically deploys to Vercel after passing tests and linting.

## Testing the CI/CD Pipeline

### Test Success Path
1. Make changes to your code
2. Run `npm test` and `npm run lint` locally
3. Commit and push to `main` branch
4. GitHub Actions will automatically run tests, lint, and deploy

### Test Failure Detection
To verify the pipeline catches errors:

**Lint Failure:**
```javascript
// Add unused variable in server.js
const unusedVariable = 'test';
```

**Test Failure:**
```javascript
// Change expectation in test.js
const expected = 'wrongname';
```

Push these changes and watch the CI pipeline fail appropriately.

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

## License

ISC

## Author

vivek
