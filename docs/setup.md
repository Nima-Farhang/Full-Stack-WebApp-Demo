
# Local Development Setup

## Prerequisites

Install the following:

- Docker
- Docker Compose
- Node.js (optional for frontend-only development)
- Python 3.x (optional for backend-only development)

---

# Running With Docker

## Start Services

```bash
docker-compose up --build
```

---

# Frontend

Frontend service runs on:

```text
http://localhost:3000
```

---

# Backend

Backend service runs on:

```text
http://localhost:8000
```

---

# Backend Setup Without Docker

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Environment

### Linux / macOS

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Django Server

```bash
python manage.py runserver
```

---

# Frontend Setup Without Docker

## Install Dependencies

```bash
npm install
```

## Start React Development Server

```bash
npm start
```

---

# Environment Variables

The project uses environment-based configuration.

Typical variables include:
- Database credentials
- Secret keys
- API URLs
- AWS credentials

These should be managed securely and not committed to source control.

---

# Notes

This project was originally built as a practical learning and engineering showcase project demonstrating:
- React development
- Django REST development
- Dockerized workflows
- API integration patterns
