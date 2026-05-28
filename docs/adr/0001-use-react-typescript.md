# ADR 0001: Use React and TypeScript

## Status

Proposed

## Context

The current frontend is a React application written in JavaScript. It already demonstrates component composition, routing, Redux state management, API calls, and address capture. As the application grows into a fuller platform demo, the frontend will need to model authentication state, dashboard data, ingestion events, API request payloads, and API response contracts more explicitly.

A full rewrite would create unnecessary risk. The project needs an incremental modernization path that preserves the existing React implementation while improving maintainability.

## Decision

Adopt React with TypeScript for the frontend and migrate incrementally.

The migration should begin with shared types, typed API service functions, and data contracts for users, addresses, authentication state, ingestion events, and dashboard metrics. Existing React components can then move from JavaScript to TypeScript in small steps.

## Consequences

- Frontend data contracts become easier to review and test.
- API integration errors can be caught earlier through type checking.
- The codebase better demonstrates modern React engineering practices.
- The migration will require TypeScript configuration, dependency review, and CI type checks.
- Some existing components and third-party integrations may require type definitions or small refactors.

## Alternatives considered

- **Keep JavaScript only**: lower immediate effort, but weaker for a portfolio project demonstrating maintainable frontend architecture.
- **Rewrite the frontend all at once**: reaches the target faster, but increases regression risk and conflicts with the incremental modernization principle.
- **Switch to another framework**: unnecessary because React already fits the project and is present in the repository.

