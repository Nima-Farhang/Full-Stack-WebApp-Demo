# ADR 0004: Use Celery for Async Processing

## Status

Proposed

## Context

The current application handles simple request/response workflows. Planned ingestion features will require work that should not block HTTP requests, such as processing incoming events, simulating external file ingestion, updating run status, and recording failures.

Asynchronous processing is also a visible platform engineering capability when paired with status tracking, retries, and operational dashboards.

## Decision

Use Celery for background task processing, with Redis as the local broker when the async workflow is implemented.

The first use case should be a small ingestion task that updates persisted status records. Docker Compose should add Redis and a Celery worker only when a working task exists.

## Consequences

- Long-running ingestion work can run outside API request handlers.
- The project gains a realistic foundation for retries, task status, and worker observability.
- Docker Compose will need Redis and worker services.
- Deployment documentation can map local Redis to managed cloud services such as ElastiCache.
- Celery should be introduced with a narrow use case to avoid decorative infrastructure.

## Alternatives considered

- **Synchronous processing only**: simpler, but unrealistic for ingestion workflows and platform demonstration.
- **Django management commands**: useful for manual jobs, but not ideal for API-triggered background work.
- **RQ or Dramatiq**: viable, but Celery is widely used with Django and has strong ecosystem support.
- **Cloud-native queues only**: useful in AWS, but would make local development harder at this stage.

