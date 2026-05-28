# ADR 0003: Use Cognito for Authentication

## Status

Proposed

## Context

The backend currently includes SimpleJWT configuration and serializer logic that can generate an access token. That is useful for local development, but the project roadmap includes demonstrating cloud-native authentication patterns for AWS deployments.

Authentication should be realistic without making local development dependent on live AWS resources.

## Decision

Use AWS Cognito as the reference cloud authentication provider while retaining a local JWT-based development path until Cognito is implemented.

The documentation and future implementation should clearly separate:

- Local/demo authentication using Django REST Framework and SimpleJWT.
- Cloud authentication using Cognito user pools, app clients, and JWT validation.

## Consequences

- The repository can demonstrate an AWS-aligned authentication architecture.
- Local development can remain simple and runnable through Docker Compose.
- Backend authorization remains responsible for protecting application data.
- Terraform can later define Cognito user pool and app client resources.
- The docs must avoid implying Cognito is implemented until configuration, validation, and deployment artifacts exist.

## Alternatives considered

- **SimpleJWT only**: simpler and sufficient locally, but less useful for demonstrating AWS cloud architecture.
- **Cognito only**: realistic for AWS, but would make local development harder and require cloud setup.
- **Django sessions**: appropriate for server-rendered applications, but less aligned with a decoupled React frontend.
- **Custom authentication service**: unnecessary complexity for this project.

