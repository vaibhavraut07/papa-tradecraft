# Papa Trading Platform

A full-stack trading education and tools platform built for traders in India.

## Project Structure

```
papa-tradecraft/
├── frontend/       # React + TypeScript frontend
└── backend/        # FastAPI backend (optional)
```

## Quick Start

### Frontend Only (Recommended)

The frontend is a standalone application that doesn't require the backend to run.

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Full Stack Setup

If you want to run the backend as well:

1. **Backend Setup:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   # Create .env file with MongoDB connection
   uvicorn server:app --reload --port 8000
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Features

- Modern, responsive UI
- Trading tools showcase
- Product pages for Scanner Suite and Pro Trend Indicator
- Contact and enquiry forms
- SEO optimized

## Technologies

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui components

### Backend (Optional)
- FastAPI
- MongoDB
- Python 3.8+

## License

All rights reserved © 2025 Papa Trading
