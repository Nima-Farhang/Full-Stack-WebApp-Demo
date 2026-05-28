# Data Platform

## Current State

The current application stores user and address data in the Django application database. Address records can include a physical address, coordinates, and a JSON payload from an external address lookup provider.

The repository does not yet include a working data platform, ingestion service, Snowflake integration, Iceberg tables, streaming pipeline, or analytics API. Those are planned as incremental portfolio enhancements.

## Data Platform Purpose

The planned data platform layer should demonstrate how a full-stack product can evolve from basic transactional storage into operational analytics and data engineering patterns.

The goal is not to add data technology for decoration. Each addition should support a visible capability, such as:

- Tracking ingestion events.
- Showing ingestion status in a dashboard.
- Summarizing address or user activity.
- Demonstrating clean adapter boundaries for external data systems.
- Documenting cloud-native ingestion and analytics tradeoffs.

## Planned Ingestion Flow

```text
External file or event
        |
        v
+-------------------+
| Ingestion API     |
+---------+---------+
          |
          v
+-------------------+        +-------------------+
| IngestionEvent    | -----> | Celery task       |
| persisted in DB   |        | processes event   |
+---------+---------+        +---------+---------+
          |                            |
          v                            v
+-------------------+        +-------------------+
| Status lifecycle  |        | Analytics summary |
| received/failed   |        | API/dashboard     |
+-------------------+        +-------------------+
```

Planned statuses:

- `RECEIVED`
- `PROCESSING`
- `COMPLETED`
- `FAILED`

## Planned Analytics Layer

Future analytics endpoints should expose practical dashboard data:

- Ingestion run summary.
- Successful versus failed ingestion counts.
- Latest ingestion events.
- Source-level metrics.
- Demo business metrics relevant to the Utilez domain.

If external warehouse credentials are not configured, the backend should return safe local/demo data rather than failing local development.

## Snowflake Reference Pattern

Snowflake integration is planned as an adapter layer, not as a hard dependency for local development.

Expected behavior:

- Read connection settings from environment variables.
- Provide safe fallback responses for local development.
- Keep warehouse queries isolated from Django views.
- Avoid committing credentials or account identifiers.

This should be documented as a reference pattern until a real connection and tests are added.

## Apache Iceberg Reference Pattern

Iceberg support is planned as architecture documentation and adapter design unless a working local implementation is added.

The intended pattern:

- S3 or compatible object storage holds table data.
- Iceberg metadata tracks snapshots and schema evolution.
- Query engines such as Snowflake, Spark, or DuckDB can read curated datasets.
- The Django app exposes only the operational API surface needed by the product.

## Streaming Reference Pattern

A lightweight local implementation could use Redis streams once Redis is introduced for Celery. A production deployment might map the same event producer abstraction to EventBridge, Kafka, or Kinesis.

The first implementation should be small:

- Event producer interface.
- Local producer implementation.
- Consumer or worker pattern.
- Connection to the ingestion event lifecycle.

## Demo vs Production Intent

The data platform layer is currently roadmap documentation. When implemented, each piece should be marked clearly:

- Local implementation when it runs in Docker Compose.
- Reference implementation when it demonstrates architecture but does not connect to live cloud systems.
- Roadmap when it is only planned.
