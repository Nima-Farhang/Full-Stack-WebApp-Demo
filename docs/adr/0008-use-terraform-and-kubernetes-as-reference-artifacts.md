# ADR 0008: Use Terraform and Kubernetes as Reference Artifacts

## Status

Proposed

## Context

The portfolio roadmap includes cloud and platform engineering artifacts. The repository should show how the application could be deployed to AWS, while avoiding claims that a production deployment exists before it is implemented.

Terraform and Kubernetes are useful for demonstrating infrastructure design, but they should not make local development harder.

## Decision

Add Terraform and Kubernetes artifacts as reference implementation assets after the application foundation is stronger.

Terraform should model AWS resources such as network, ECS or EKS, S3, Cognito, API Gateway, and observability modules. Kubernetes manifests should model frontend, backend, worker, config, secrets templates, ingress, and autoscaling.

The documentation must make clear that a real product would typically choose one deployment path rather than operating both ECS and EKS in parallel.

## Consequences

- The repository can demonstrate cloud architecture thinking without requiring reviewers to deploy cloud infrastructure.
- Infrastructure code must avoid hardcoded account IDs, secrets, or environment-specific values.
- Terraform validation and formatting can be added to CI once the files exist.
- Kubernetes manifests should be treated as reference until tested against a cluster.
- Local Docker Compose remains the primary development workflow.

## Alternatives Considered

- **Skip infrastructure artifacts**: simpler, but weaker for platform engineering demonstration.
- **Implement only ECS**: practical for production simplicity, but shows fewer Kubernetes concepts.
- **Implement only Kubernetes**: useful for platform depth, but may overstate the needs of the current app.

