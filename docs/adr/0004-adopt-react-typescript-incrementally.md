# ADR 0004: Adopt React TypeScript Incrementally

## Status

Proposed

## Context

The current frontend is written in JavaScript. As the application grows to include authentication, dashboard data, ingestion status, and typed API clients, implicit object shapes will become harder to maintain.

The modernization roadmap calls for a React + TypeScript frontend, but replacing the frontend all at once would increase risk.

## Decision

Migrate the frontend to React + TypeScript incrementally.

The migration should start with shared types and API service contracts, then convert components and Redux-related code in small steps. Existing behavior should be preserved during the migration.

## Consequences

- API request and response shapes become easier to review.
- Dashboard and authentication state can be modeled explicitly.
- Migration work can be split into small pull requests.
- Build and CI configuration will need to include type checking.
- Some dependencies may need type packages or replacement if they do not support TypeScript cleanly.

## Alternatives Considered

- **Keep JavaScript only**: lower immediate effort, but weaker for a portfolio project emphasizing maintainable full-stack engineering.
- **Full rewrite to TypeScript in one step**: faster end-state, but higher regression risk.
- **Move to a different frontend framework**: unnecessary because React already fits the project.

