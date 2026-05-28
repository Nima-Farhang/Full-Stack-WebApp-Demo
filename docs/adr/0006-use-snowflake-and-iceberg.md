# ADR 0006: Use Snowflake and Iceberg

## Status

Proposed

## Context

The project roadmap includes data platform concepts in addition to the transactional Django application. Snowflake and Apache Iceberg are useful patterns for explaining how product data could flow from application events into analytics and lakehouse-style storage.

The repository should not require live Snowflake credentials or a full local Iceberg stack to run locally.

## Decision

Use Snowflake and Apache Iceberg as reference data platform patterns, introduced through documentation and adapter boundaries before any production integration.

Snowflake integration should be isolated behind an analytics adapter that reads configuration from environment variables and provides safe local fallback behavior. Iceberg should be documented as a table format pattern for object storage, with implementation stubs only if they are clearly marked as reference code.

## Consequences

- The repository can demonstrate data warehouse and lakehouse architecture without blocking local development.
- External analytics dependencies remain isolated from Django views and core application logic.
- Local development can return safe demo analytics when warehouse credentials are unavailable.
- Documentation must clearly distinguish reference patterns from running infrastructure.
- Future tests should cover fallback behavior and adapter interfaces.

## Alternatives considered

- **Use only the application database for analytics**: simpler and useful for local dashboards, but less representative of data platform architecture.
- **Require Snowflake for local development**: unrealistic for a public portfolio repository.
- **Run a full local Iceberg/Spark stack**: technically interesting, but too heavy for the current scope.
- **Skip data platform patterns**: simpler, but weaker for demonstrating platform and data engineering capability.

