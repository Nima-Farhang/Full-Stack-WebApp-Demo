# Utilez WebApp

Utilez WebApp is a full-stack portfolio project built around a React frontend and a Django REST backend. The current application demonstrates a practical web application foundation: a browser-based user experience, REST API communication, user registration, address capture, geolocation-oriented data storage, and Docker Compose based local development.

The repository is being evolved incrementally into a broader full-stack platform demonstration. Planned additions include stronger authentication flows, a more modular Django API, background processing, event-driven ingestion, analytics endpoints, observability patterns, and reference cloud deployment artifacts. Those capabilities are documented as roadmap or reference implementation until they are present in the code.

## What This Project Demonstrates

- React application structure, routing, component composition, and Redux state management.
- Django and Django REST Framework for API development.
- Frontend/backend separation over HTTP and JSON.
- Address and coordinate persistence using backend models and serializers.
- Docker Compose based local development for frontend, backend, and Postgres/PostGIS.
- A realistic modernization path toward platform, data, cloud, and operational engineering patterns.

## Current Stack

| Area | Technology |
| --- | --- |
| Frontend | React 18, Redux, React Router, React Bootstrap, Axios |
| Backend | Django, Django REST Framework, SimpleJWT, django-cors-headers |
| Data | Postgres/PostGIS container, Django models, JSON fields |
| Integrations | Google Places Autocomplete pattern, Boto3 dependency, Sentry SDK dependency |
| Local development | Docker, Docker Compose |

## Current Architecture

```text
---------------------+       HTTP / JSON       +----------------------+
| React frontend     | -----------------------> | Django REST backend  |
| - Components       |                          | - Views              |
| - Redux store      | <----------------------- | - Serializers        |
| - Route handling   |       API responses      | - Models             |
+----------+----------+                          +----------+-----------+
                                                        |
                                                        v
                                             +----------------------+
                                             | Postgres/PostGIS     |
                                             | - User data          |
                                             | - Address data       |
                                             | - Coordinates JSON   |
                                             +----------------------+
```

The frontend is responsible for presentation, browser routing, local UI state, and API calls. The backend owns validation, persistence, token generation patterns, and REST API responses. The main application API surface currently lives under `/api/users/`.

## Repository Structure

```text
.
├── README.md
├── docker-compose.yml
├── docs/
│   ├── adr/
│   ├── architecture.md
│   ├── data-platform.md
│   ├── deployment.md
│   ├── local-development.md
│   ├── observability.md
│   ├── project_workflow.md
│   ├── security.md
│   └── setup.md
├── frontend/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── reducers/
│   │   ├── screens/
│   │   └── store.js
│   ├── package.json
│   └── Dockerfile
└── backend/
    ├── core/
    ├── userApi/
    ├── requirements.txt
    └── Dockerfile
```

The target modernization structure is documented in `docs/project_workflow.md`. The current structure is intentionally retained until each refactor is implemented and tested.

## Local Development

Create a local `.env` file with the variables required by Docker Compose and the Django settings, then start the stack:

```bash
docker-compose up --build
```

Default local services:

| Service | URL |
| --- | --- |
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8000 |
| Django admin | http://localhost:8000/admin/ |
| pgAdmin | http://localhost:8080 |

See `docs/local-development.md` for the current local workflow and configuration notes.

## API Communication

The React frontend calls the Django backend over REST. The current user registration flow posts to the backend under:

```text
/api/users/
```

The backend serializes user and address data with Django REST Framework and returns JSON responses to the browser. Future work should add an explicit API contract, endpoint examples, and automated API tests as the backend is modularized.

## Documentation

- `docs/architecture.md`: current architecture and planned modernization path.
- `docs/local-development.md`: Docker Compose and local setup notes.
- `docs/deployment.md`: deployment strategy and reference cloud options.
- `docs/security.md`: current security posture and planned auth improvements.
- `docs/observability.md`: logging, monitoring, and operations plan.
- `docs/data-platform.md`: planned ingestion, analytics, Snowflake, and Iceberg patterns.
- `docs/adr/`: Architecture Decision Records for accepted and proposed design choices.
- `docs/project_workflow.md`: implementation roadmap for the portfolio upgrade.

## Modernization Roadmap

The project should be modernized in small, reviewable steps:

1. Documentation baseline and Architecture Decision Records.
2. Docker Compose cleanup and local environment simplification.
3. Modular Django app structure for accounts, addresses, ingestion, analytics, and common utilities.
4. React TypeScript migration and feature-based frontend structure.
5. JWT authentication endpoints and protected frontend routes.
6. Celery and Redis for background processing.
7. Ingestion event models and analytics APIs.
8. CI, testing, linting, and build validation.
9. Observability patterns and operational documentation.
10. Terraform and Kubernetes reference artifacts for cloud deployment.

## Production Readiness

This repository is a portfolio and learning/demo project. It is not currently production-grade. Before production use, it would need hardened secret management, environment-specific settings, automated tests, CI/CD enforcement, input validation review, dependency review, HTTPS and secure cookie configuration, backup/restore planning, and operational monitoring.

## License

This repository is provided for portfolio and demonstration purposes.
