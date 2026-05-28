# ADR 0002: Use Django REST Framework for Backend APIs

## Status

Accepted

## Context

The backend needs to expose API endpoints for user registration, address persistence, and future ingestion and analytics workflows. The repository already uses Django, Django REST Framework, serializers, and function-based API views.

The project should demonstrate Python backend engineering while keeping local development approachable.

## Decision

Use Django REST Framework as the API layer for the backend.

The current backend can continue with existing views while being refactored toward clearer app boundaries, serializers, permissions, and viewsets where appropriate.

## Consequences

- Django remains responsible for business logic, persistence, validation, and API responses.
- DRF serializers provide a clear boundary between models and JSON responses.
- Future APIs can use DRF permissions and authentication classes consistently.
- The backend can grow into modular apps without changing the frontend/backend contract style.

## Alternatives Considered

- **FastAPI**: strong for typed APIs, but adopting it would replace the existing Django application and admin capabilities.
- **Flask**: lightweight, but would require more hand-rolled API structure.
- **GraphQL**: flexible for complex clients, but unnecessary for the current REST-style workflows.

