# Security

## Current Security Posture

The current repository demonstrates foundational application security concepts but is not production-hardened. It includes Django, Django REST Framework, SimpleJWT dependencies, CORS configuration, environment-based settings, and a backend-owned data model.

Security work should be improved incrementally as the application architecture matures.

## Current Authentication Pattern

The backend includes SimpleJWT configuration and serializer logic that can generate an access token for a registered user. The current user registration flow is minimal and should be treated as a demo implementation.

Current limitations:

- Authentication endpoints are not yet a complete login/logout/refresh flow.
- Password handling and user lifecycle behavior need review.
- Token storage strategy on the frontend should be revisited.
- Endpoint permissions need to be made explicit as APIs are expanded.

## Secrets and Configuration

Secrets must not be committed to source control. Local values should live in `.env`, and cloud deployments should use a managed secret store.

Current hardening needs:

- Move Django `SECRET_KEY` to an environment variable.
- Make Sentry configuration optional for local development.
- Add `.env.example` with safe placeholder values.
- Split local, test, and production settings.
- Avoid committing real cloud credentials, API keys, or database passwords.

## CORS and Browser Security

The current backend allows specific local frontend origins. Production deployment should use an explicit allowlist for the deployed frontend domain.

Future production settings should also include:

- HTTPS enforcement.
- Secure cookies where cookies are used.
- CSRF strategy documented for session or token-based flows.
- Strict transport security.
- Content security policy review.

## Planned Authentication Direction

The roadmap includes two authentication modes:

- Local/demo JWT authentication implemented directly by Django REST Framework and SimpleJWT.
- AWS Cognito reference architecture for cloud deployments.

These should be documented separately so reviewers can tell what runs locally and what is a cloud integration pattern.

## Authorization

As the API grows, endpoints should use explicit permission classes. Address, ingestion, and analytics data should not be exposed without a clear access model.

Planned improvements:

- Current user endpoint.
- Login and refresh endpoints.
- Protected API routes.
- Frontend protected route wrapper.
- Role or permission model if administrative dashboards are added.

## Production Checklist

Before production use, the project would need:

- Dependency and vulnerability scanning.
- Automated security checks in CI.
- Secrets managed outside the repository.
- Principle-of-least-privilege cloud IAM roles.
- Rate limiting and abuse protection.
- Audit logging for sensitive workflows.
- Backup and restore validation.
