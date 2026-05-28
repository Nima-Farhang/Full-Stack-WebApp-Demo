# ADR 0007: Add Event-Driven Ingestion and Analytics

## Status

Proposed

## Context

The current application stores user and address data. The portfolio roadmap expands the project into a platform and data engineering demonstration with ingestion events, status lifecycles, and analytics dashboard APIs.

These capabilities should be visible in the repository and not exist as decorative technology.

## Decision

Add an ingestion domain model and analytics API layer when the backend is modularized.

The first implementation should include ingestion sources, events or runs, status transitions, retry/error fields, and summary endpoints that can power a frontend dashboard. External warehouse integrations should be adapter-based and optional for local development.

## Consequences

- The project demonstrates operational traceability and data-product thinking.
- The frontend can show real API-driven dashboard data instead of purely static examples.
- The backend gains a clearer reason for Celery, Redis, and later streaming patterns.
- Snowflake and Iceberg should remain reference/adapters until real credentials or a local implementation exist.
- Tests should cover the ingestion lifecycle once implemented.

## Alternatives Considered

- **Only document data architecture**: useful, but weaker than a small working ingestion lifecycle.
- **Build a full local data lake stack immediately**: too heavy for the current project and risks obscuring the core app.
- **Use mock frontend data only**: acceptable temporarily, but not enough for a credible backend/data demonstration.

