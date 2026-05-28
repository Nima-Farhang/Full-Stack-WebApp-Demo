# ADR 0003: Use Docker Compose for Local Development

## Status

Accepted

## Context

The application includes a React frontend, Django backend, Postgres/PostGIS database, and pgAdmin. Contributors and reviewers should be able to run the repository locally without manually installing every service.

Docker Compose is already present in the repository.

## Decision

Use Docker Compose as the primary local development workflow.

The local stack currently includes frontend, backend, Postgres/PostGIS, and pgAdmin. Additional services should be added only when the implementation requires them.

## Consequences

- Local setup remains visible and repeatable.
- The frontend and backend can be developed as separate services while sharing one local network.
- The database dependency is explicit.
- Future Redis and Celery services can be added when asynchronous processing is implemented.

## Alternatives Considered

- **Manual local setup only**: less infrastructure overhead, but more fragile onboarding.
- **Kubernetes for local development**: closer to some production environments, but too heavy for this repository's current state.
- **Hosted development dependencies**: useful in teams, but less suitable for a public portfolio repo that should run locally.

