# ADR 0006: Use Celery and Redis for Async Processing

## Status

Proposed

## Context

Planned ingestion workflows should not block HTTP requests. Background processing is also a visible platform engineering capability when paired with status tracking and operational dashboards.

The current Docker Compose stack does not include Redis or a worker service. Those should be added only when a working async task is introduced.

## Decision

Use Celery for background task execution and Redis as the local message broker.

The first task should be a small ingestion demo that persists status changes so the behavior is visible through APIs and eventually the frontend dashboard.

## Consequences

- Long-running ingestion work can move out of request/response handlers.
- Docker Compose will need Redis and worker services.
- Ingestion task status should be modeled in the database for traceability.
- Local development remains practical because Redis is easy to run in Compose.
- Production deployments can map Redis to ElastiCache or another managed broker.

## Alternatives Considered

- **Synchronous processing only**: simpler, but does not demonstrate realistic ingestion behavior.
- **Django management commands only**: useful for batch jobs, but not ideal for API-triggered workflows.
- **RQ or Dramatiq**: viable alternatives, but Celery is widely recognized and fits the Django ecosystem.

