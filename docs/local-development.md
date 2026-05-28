# Local Development

## Overview

Utilez WebApp is designed to run locally with Docker Compose. The current local stack includes a React frontend, Django backend, Postgres/PostGIS database, and pgAdmin. This keeps setup approachable while still reflecting a realistic frontend/backend/database workflow.

## Prerequisites

- Docker
- Docker Compose
- Git

Node.js and Python can be useful for running individual services outside Docker, but they are not required for the standard local path.

## Environment Configuration

The Compose file expects a local `.env` file. Do not commit real secrets to the repository.

Typical local values include:

```text
stage=build
POSTGRES_DB=backend-db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
sentry_dsn=
```

The current settings are demo-oriented and should be hardened before any production deployment.

## Start the Stack

From the repository root:

```bash
docker-compose up --build
```

Services:

| Service | URL |
| --- | --- |
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8000 |
| Django admin | http://localhost:8000/admin/ |
| pgAdmin | http://localhost:8080 |
| Postgres/PostGIS | localhost:5432 |

## Current Docker Compose Services

- `frontend`: builds `./frontend` and runs `npm start`.
- `backend`: builds `./backend` and runs `python manage.py runserver 0.0.0.0:8000`.
- `pgdb`: runs the PostGIS image for application data.
- `pgadmin`: provides a local database administration UI.

## Local Development Notes

- The frontend development server proxies backend requests to `http://backend:8000` inside Docker.
- The backend reads database configuration from environment variables.
- Database and pgAdmin data are mounted under the local `data/` directory.
- The project currently uses Django's development server, which is appropriate for local development only.

## Running Without Docker

The Docker Compose path is the recommended local workflow. If running services manually, install frontend dependencies in `frontend/` and backend dependencies in `backend/`, then configure the database connection to point at a running Postgres instance.

Frontend:

```bash
cd frontend
npm install
npm start
```

Backend:

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

## Planned Local Stack Enhancements

The roadmap includes Redis and Celery for background processing, plus health checks and clearer environment examples. Those services should be added only when the backend includes a working async task flow.
