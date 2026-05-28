# Architecture Decision Records

This directory records major architecture decisions for Utilez WebApp as it evolves from a simple React/Django application into a cloud-native full-stack platform demo.

ADR statuses used in this project:

- **Accepted**: the decision reflects the current direction for the repository.
- **Proposed**: the decision is planned but not fully implemented yet.
- **Superseded**: the decision has been replaced by a later ADR.

## Records

| ADR | Status | Decision |
| --- | --- | --- |
| [0001](0001-use-react-typescript.md) | Proposed | Use React with TypeScript for the frontend. |
| [0002](0002-use-django-rest-framework.md) | Accepted | Use Django REST Framework for backend APIs. |
| [0003](0003-use-cognito-for-authentication.md) | Proposed | Use Cognito as the cloud authentication path. |
| [0004](0004-use-celery-for-async-processing.md) | Proposed | Use Celery for asynchronous processing. |
| [0005](0005-use-event-driven-ingestion.md) | Proposed | Add event-driven ingestion patterns. |
| [0006](0006-use-snowflake-and-iceberg.md) | Proposed | Use Snowflake and Iceberg reference patterns for analytics. |
| [0007](0007-use-terraform-and-kubernetes.md) | Proposed | Use Terraform and Kubernetes reference artifacts for cloud deployment. |
