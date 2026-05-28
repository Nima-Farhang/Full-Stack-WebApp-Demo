# Architecture

## Purpose

Utilez WebApp is a decoupled React and Django application used as a public technical portfolio project. The current implementation focuses on a practical full-stack foundation: frontend screens, reusable components, Redux state, REST API calls, Django REST Framework serialization, address persistence, and Docker Compose local development.

The architecture is intentionally being modernized incrementally. The near-term goal is not to replace the application with a new system, but to evolve it into a credible demonstration of full-stack, platform, data, and cloud engineering.

## Current System Context

```text
User
 |
 | Browser
 v
+---------------------+       HTTP / JSON       +----------------------+
| React frontend     | -----------------------> | Django REST backend  |
| localhost:3000     |                          | localhost:8000       |
|                     | <----------------------- |                      |
| - Components       |                          | - DRF views          |
| - Redux store      |                          | - Serializers        |
| - React Router     |                          | - Django models      |
+---------------------+                          +----------+-----------+
                                                        |
                                                        v
                                             +----------------------+
                                             | Postgres/PostGIS     |
                                             | Docker container     |
                                             +----------------------+
```

## Current Responsibilities

### Frontend

The frontend is a React 18 application located under `frontend/`. It currently uses JavaScript, React Router, React Bootstrap, Redux, Redux Thunk, Axios, and Google Places Autocomplete.

Responsibilities:

- Render the browser user experience.
- Capture user and address input.
- Maintain client-side state in Redux and local storage.
- Call backend REST endpoints.
- Display loading, message, and layout components.

### Backend

The backend is a Django application located under `backend/`. It uses Django REST Framework, SimpleJWT, CORS middleware, Postgres-compatible configuration, and Sentry SDK dependencies.

Responsibilities:

- Expose REST API endpoints.
- Serialize user and address data.
- Persist application data.
- Generate JWT access tokens for registered users.
- Serve Django admin and static/media configuration for local development.

### Data Layer

The current data model is small. The primary domain object is an `Address` model linked one-to-one with Django's built-in `User` model.

| Field | Purpose |
| --- | --- |
| `user` | One-to-one relationship with the Django user. |
| `physical_address` | Human-readable address text. |
| `coordinates` | JSON coordinate payload. |
| `apiResults` | JSON payload from the address lookup provider. |

## REST API Communication

The frontend communicates with the backend through HTTP and JSON. Current API routing is centered under:

```text
/api/users/
```

The application should continue to preserve this separation as it grows:

- Browser concerns remain in React.
- Business logic, validation, and persistence remain in Django.
- Shared contracts should become explicit through typed frontend services and backend API documentation.

## Local Development Architecture

Docker Compose currently starts:

- `frontend`: React development server.
- `backend`: Django development server.
- `pgdb`: Postgres/PostGIS database.
- `pgadmin`: database administration UI.

This keeps local development simple and visible. Future services such as Redis and Celery should be added only when background processing is implemented.

## Modernization Direction

The target architecture is documented in `docs/project_workflow.md`. The intended direction is:

- React + TypeScript frontend with feature-based folders.
- Modular Django backend under `backend/apps/`.
- Dedicated apps for accounts, addresses, ingestion, analytics, and shared utilities.
- JWT authentication with clear local and cloud authentication paths.
- Celery and Redis for asynchronous processing.
- Ingestion event tracking and analytics summary endpoints.
- CI workflows for frontend, backend, Docker, and Terraform validation.
- Observability through structured logs, health checks, metrics design, and documented alerting.
- Terraform and Kubernetes reference artifacts for AWS deployment patterns.

## Demo vs Production Intent

Some future artifacts are intended to demonstrate architecture rather than provide a ready-to-run production platform. Examples include Terraform modules, Kubernetes manifests, Cognito integration placeholders, Snowflake adapters, and Apache Iceberg references.

When those artifacts are added, they should be labeled clearly as one of:

- **Implemented locally**: runs through Docker Compose or local commands.
- **Reference implementation**: realistic structure, but not wired to live cloud services.
- **Roadmap**: documented design that has not been implemented yet.

## Design Principles

- Keep local development runnable with Docker Compose.
- Prefer incremental refactoring over wholesale replacement.
- Add technology only when it supports a visible capability.
- Document major choices in this file or in Architecture Decision Records.
- Keep claims aligned with the repository's actual implementation.

## Architecture Decision Records

Major decisions are tracked in `docs/adr/`. Django REST Framework is recorded as an accepted decision because it reflects the current backend architecture. Planned modernization decisions, such as React TypeScript, Cognito, Celery, event-driven ingestion, Snowflake/Iceberg, Terraform, and Kubernetes, are recorded as proposed until implemented.
