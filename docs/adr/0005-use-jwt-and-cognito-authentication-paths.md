# ADR 0005: Use Local JWT and Cognito Authentication Paths

## Status

Proposed

## Context

The backend currently includes SimpleJWT configuration and can generate an access token in the registration serializer. The authentication flow is not yet complete. The project also aims to demonstrate cloud authentication patterns, including AWS Cognito, without requiring cloud credentials for local development.

Authentication should be realistic, but local development must remain simple.

## Decision

Use Django REST Framework and SimpleJWT for the local/demo authentication path. Document AWS Cognito as the cloud authentication reference path.

Local implementation should include login, refresh, current user, logout/client token clearing, protected routes, and explicit endpoint permissions. Cognito configuration should be introduced as placeholders and documentation until cloud infrastructure is implemented.

## Consequences

- The app can run locally without AWS dependencies.
- Backend authorization remains enforceable in Django.
- The repository can demonstrate how local JWT auth maps to Cognito in a cloud deployment.
- Documentation must clearly distinguish implemented local auth from Cognito reference architecture.
- Token storage and refresh behavior need careful frontend design.

## Alternatives Considered

- **Cognito only**: realistic for AWS, but would complicate local development and require cloud configuration.
- **Django sessions only**: simple for server-rendered apps, but less aligned with a decoupled React frontend.
- **Custom token implementation**: unnecessary when well-maintained packages exist.

