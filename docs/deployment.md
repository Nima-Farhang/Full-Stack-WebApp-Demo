# Deployment

## Current State

The repository currently supports local development through Docker Compose. It does not yet include production-ready deployment automation.

This document describes the intended deployment direction for the portfolio project and separates implemented behavior from reference architecture.

## Current Deployment Capability

Implemented:

- Dockerfiles for frontend and backend.
- Docker Compose for local orchestration.
- Environment-based configuration pattern.
- Postgres/PostGIS service for local persistence.

Not yet implemented:

- Production web server configuration.
- CI/CD deployment workflows.
- Terraform-managed cloud infrastructure.
- Kubernetes manifests.
- Managed database, cache, secrets, and observability services.

## Reference AWS Architecture

The planned cloud architecture is intended to demonstrate realistic deployment thinking. A production project would typically choose either ECS or EKS rather than maintaining both paths.

```text
Users
  |
  v
CloudFront / Load Balancer
  |
  v
+-------------------+       +-------------------+
| React frontend    |       | Django REST API   |
| Static hosting or | ----> | ECS or EKS        |
| container service |       | container service |
+-------------------+       +---------+---------+
                                      |
                                      v
                            +-------------------+
                            | RDS Postgres      |
                            +-------------------+
                                      |
                                      v
                            +-------------------+
                            | S3 ingestion zone |
                            +-------------------+
```

## Deployment Options

### ECS Fargate

ECS Fargate is a good fit for a containerized Django API, frontend container, and worker service without requiring Kubernetes operations overhead.

Planned supporting services:

- Application Load Balancer.
- ECS services for backend, frontend, and worker.
- RDS Postgres.
- ElastiCache Redis for Celery.
- CloudWatch logs and metrics.
- Secrets Manager or SSM Parameter Store.

### EKS

EKS is useful as a reference path for Kubernetes deployment patterns, including Deployments, Services, Ingress, ConfigMaps, Secrets, and Horizontal Pod Autoscalers.

For this repository, EKS artifacts should be treated as reference implementation until the manifests are added and validated.

### API Gateway and Cognito

API Gateway and Cognito are planned reference patterns for authenticated API access in AWS.

Planned responsibilities:

- API Gateway handles routing, throttling, CORS, and request logging.
- Cognito handles user pools and hosted authentication flows.
- The Django API validates JWTs and applies application-level authorization.

## Production Readiness Requirements

Before deploying this application as a real service, the project would need:

- Environment-specific Django settings.
- Secure secret management.
- HTTPS enforcement.
- Static asset build and hosting strategy.
- Database migrations as part of deployment.
- Backup and restore procedures.
- Health and readiness endpoints.
- Centralized logs, metrics, traces, and alerts.
- CI/CD workflows with tests and image scanning.

## Documentation Intent

Deployment artifacts added later should be clearly labeled as local, reference, or production-oriented. The repository should avoid implying that a cloud deployment is complete until infrastructure code and deployment workflows are present.
