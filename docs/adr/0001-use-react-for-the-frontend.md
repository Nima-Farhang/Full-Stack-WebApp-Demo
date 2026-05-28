# ADR 0001: Use React for the Frontend Application

## Status

Accepted

## Context

Utilez WebApp needs a browser-based interface for user interaction, address capture, navigation, and API-driven workflows. The existing repository already contains a React frontend using React Router, Redux, React Bootstrap, and Axios.

The project is a portfolio application, so the frontend should remain understandable to reviewers and easy to run locally.

## Decision

Use React as the frontend application framework and continue evolving the existing React implementation rather than replacing it.

The current implementation remains JavaScript-based. A separate ADR covers the proposed TypeScript migration.

## Consequences

- The frontend remains decoupled from the Django backend and communicates over HTTP/JSON.
- Existing React components, Redux state, and routing can be modernized incrementally.
- The repository continues to demonstrate practical React engineering without a full rewrite.
- Future frontend work should improve structure, typing, tests, and API client boundaries.

## Alternatives Considered

- **Server-rendered Django templates**: simpler for small apps, but weaker for demonstrating a decoupled full-stack architecture.
- **Next.js**: useful for production React applications, but would add framework migration scope before the current app is stabilized.
- **Vue or Angular**: viable frontend frameworks, but switching would replace working code without a clear project benefit.

