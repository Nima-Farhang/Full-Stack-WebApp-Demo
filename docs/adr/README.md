# Architecture Decision Records

This directory records major architecture decisions for Utilez WebApp.

ADR statuses used in this project:

- **Accepted**: the decision reflects the current implemented architecture.
- **Proposed**: the decision is part of the planned modernization path and should not be described as fully implemented yet.
- **Superseded**: the decision has been replaced by a later ADR.

## Records

| ADR | Status | Decision |
| --- | --- | --- |
| [0001](0001-use-react-for-the-frontend.md) | Accepted | Use React for the frontend application. |
| [0002](0002-use-django-rest-framework.md) | Accepted | Use Django REST Framework for backend APIs. |
| [0003](0003-use-docker-compose-for-local-development.md) | Accepted | Use Docker Compose for local development. |
| [0004](0004-adopt-react-typescript-incrementally.md) | Proposed | Incrementally migrate the frontend to React + TypeScript. |
| [0005](0005-use-jwt-and-cognito-authentication-paths.md) | Proposed | Use local JWT auth and document Cognito as the cloud auth path. |
| [0006](0006-use-celery-and-redis-for-async-processing.md) | Proposed | Add Celery and Redis for background processing. |
| [0007](0007-add-event-driven-ingestion-and-analytics.md) | Proposed | Add ingestion events and analytics APIs as visible platform/data capabilities. |
| [0008](0008-use-terraform-and-kubernetes-as-reference-artifacts.md) | Proposed | Add Terraform and Kubernetes as reference deployment artifacts. |

