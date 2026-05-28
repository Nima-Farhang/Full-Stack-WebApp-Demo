# Observability

## Current State

The current application has limited observability. The backend includes the Sentry SDK dependency and initialization pattern, but the project does not yet provide a complete logging, metrics, tracing, or alerting setup.

This document defines the intended observability direction for the portfolio project.

## Observability Goals

- Make local development failures easy to diagnose.
- Provide health and readiness signals for container orchestration.
- Capture backend errors in a structured way.
- Track ingestion and background task lifecycle when those features are added.
- Document how logs, metrics, traces, and alerts would operate in cloud deployment.

## Logging

Current logging is mostly framework default behavior. Planned backend improvements:

- Structured JSON-style logs for API requests and application events.
- Request ID or correlation ID support.
- Clear logging around authentication, ingestion, and background task execution.
- Avoid logging secrets, tokens, passwords, or full third-party payloads.

Frontend improvements:

- Error boundary for rendering failures.
- Consistent API error handling.
- Optional reporting hook for production deployments.

## Health and Readiness

Planned endpoints:

| Endpoint | Purpose |
| --- | --- |
| `/health/` | Confirms the API process is running. |
| `/ready/` | Confirms required dependencies, such as the database, are reachable. |

These endpoints should be lightweight and safe to expose through container orchestrators.

## Metrics

Metrics are not implemented yet. Good future metrics include:

- API request count, latency, and error rate.
- Authentication successes and failures.
- Database query health indicators.
- Ingestion events by status.
- Celery task duration, retry count, and failure count.
- Frontend build and bundle size trends in CI.

For local and reference deployments, Prometheus-compatible metrics are a practical option. In AWS, CloudWatch metrics can provide the baseline operational view.

## Tracing

Distributed tracing is not currently implemented. If the application grows to include frontend, backend, worker, cache, database, and external services, OpenTelemetry would be a suitable standard for tracing request flow across components.

## Alerting

Alerts should be tied to user impact and operational risk rather than noise.

Useful future alerts:

- Backend high error rate.
- Backend or worker service unavailable.
- Database unavailable.
- Ingestion failure rate above threshold.
- Task queue backlog growing.
- Authentication failure spikes.

## Demo vs Production Intent

The observability plan is currently documentation-first. Implementation should be added in small steps, starting with health checks and structured backend logs, then frontend error boundaries, then metrics and tracing when there are enough services to justify them.
