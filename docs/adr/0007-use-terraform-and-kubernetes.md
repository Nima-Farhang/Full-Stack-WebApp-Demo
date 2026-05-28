# ADR 0007: Use Terraform and Kubernetes

## Status

Proposed

## Context

The project is intended to grow from a simple React/Django application into a cloud-native platform demo. Infrastructure artifacts can help show how the application would be deployed, configured, secured, and operated in AWS.

At the same time, the repository must remain easy to run locally with Docker Compose. Terraform and Kubernetes should not become prerequisites for basic development.

## Decision

Use Terraform and Kubernetes as reference cloud deployment artifacts after the application foundation is stable.

Terraform should describe AWS infrastructure such as networking, ECS or EKS, Cognito, S3, API Gateway, databases, cache, and observability resources. Kubernetes manifests should demonstrate deployments, services, config, secret templates, ingress, workers, and autoscaling patterns.

The documentation should make clear that a real production system would usually choose one main deployment path rather than maintaining both ECS and EKS.

## Consequences

- The repository can demonstrate infrastructure-as-code and Kubernetes deployment concepts.
- Local development remains Docker Compose based.
- Cloud artifacts must avoid hardcoded account IDs, credentials, and environment-specific values.
- CI can later validate Terraform formatting and Kubernetes manifest structure.
- The project must label these artifacts as reference implementation until deployment workflows are tested.

## Alternatives considered

- **Docker Compose only**: best for local development, but limited as a cloud/platform engineering demonstration.
- **Terraform with ECS only**: practical for many real deployments, but does not demonstrate Kubernetes concepts.
- **Kubernetes only**: useful for platform depth, but may overstate operational needs for this application.
- **Manual cloud setup documentation**: easier to write, but less reviewable than infrastructure code.

