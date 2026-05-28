# ADR 0005: Use Event-Driven Ingestion

## Status

Proposed

## Context

The current application stores user and address data. The modernization roadmap expands the repository into a platform and data engineering demo with ingestion events, lifecycle tracking, and analytics summaries.

The ingestion design should be small enough to run locally but structured enough to map to cloud services later.

## Decision

Add an event-driven ingestion model with persisted ingestion sources, events or runs, status transitions, retry/error fields, and API endpoints for creating and listing ingestion activity.

The local implementation should connect ingestion events to Celery tasks. The cloud architecture can later map the same pattern to EventBridge, Kinesis, Kafka, S3 notifications, or another event source.

## Consequences

- The backend gains a visible platform capability beyond basic CRUD.
- Ingestion activity can be shown in dashboard APIs and frontend screens.
- Statuses such as `RECEIVED`, `PROCESSING`, `COMPLETED`, and `FAILED` provide operational traceability.
- The design creates a practical reason for Celery, Redis, observability, and analytics endpoints.
- Tests will be needed for event creation, status transitions, and failure handling.

## Alternatives considered

- **Document ingestion only**: easier, but weaker for a credible portfolio demo.
- **Build a full streaming platform immediately**: too heavy for the current application and local development workflow.
- **Use frontend mock data only**: useful temporarily, but does not demonstrate backend or platform engineering.
- **Treat ingestion as simple CRUD**: easier, but misses lifecycle and operational concerns.

