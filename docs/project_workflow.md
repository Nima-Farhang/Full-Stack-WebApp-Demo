# Project Workflow: Upgrade Utilez WebApp into a Full-Stack Platform Demonstration

## Purpose

This workflow upgrades the existing Utilez React + Django application into a stronger public portfolio project that demonstrates capability across:

- React + TypeScript frontend engineering
- Modern Django REST backend engineering
- Authentication and secure API design
- Async processing and background workers
- Event-driven ingestion
- Data platform integration with Snowflake and Apache Iceberg
- Docker, CI/CD, Terraform, Kubernetes, and AWS deployment patterns
- Observability and operational readiness
- Architecture documentation and ADRs

The goal is not to over-engineer the application. The goal is to turn it into a credible demonstration of full-stack, cloud, platform, and data engineering capability.

---

# Guiding Principles

## 0. Befre you start

Read the
"README.md"
and "docs/*" documents
Do not produce any code yet. Familiarize yourself with the project, what it is and what it is sopposed to do

## 1. Keep the application realistic

Do not add technology for decoration only. Every new capability should have a clear purpose and should be visible in the repository.

## 2. Prefer incremental refactoring

Modernise the current application step by step rather than replacing everything at once.

## 3. Make the architecture explainable

Every major design choice should be documented in `docs/architecture.md` or an Architecture Decision Record under `docs/adr/`.

## 4. Keep local development simple

The repository should still run locally using Docker Compose.

## 5. Separate demo implementation from production intent

Where something is included as a demonstration pattern, document that clearly.

---

# Target Repository Structure

```text
WebApp-main/
├── README.md
├── docker-compose.yml
├── docs/
│   ├── architecture.md
│   ├── local-development.md
│   ├── deployment.md
│   ├── observability.md
│   ├── data-platform.md
│   ├── security.md
│   └── adr/
│       ├── 0001-use-react-typescript.md
│       ├── 0002-use-django-rest-framework.md
│       ├── 0003-use-cognito-for-authentication.md
│       ├── 0004-use-celery-for-async-processing.md
│       ├── 0005-use-event-driven-ingestion.md
│       ├── 0006-use-snowflake-and-iceberg.md
│       └── 0007-use-terraform-and-kubernetes.md
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── core/
│   ├── apps/
│   │   ├── accounts/
│   │   ├── addresses/
│   │   ├── ingestion/
│   │   ├── analytics/
│   │   └── common/
│   ├── workers/
│   ├── requirements.txt
│   └── Dockerfile
│
├── infra/
│   ├── terraform/
│   │   ├── environments/
│   │   └── modules/
│   └── k8s/
│       ├── base/
│       └── overlays/
│
└── .github/
    └── workflows/
        ├── frontend-ci.yml
        ├── backend-ci.yml
        ├── docker-build.yml
        └── terraform-plan.yml
```

---

# Phase 1 — Documentation Foundation

## Objective

Create complete documentation before major code changes so the repository tells a coherent engineering story.

## Deliverables

- Updated `README.md`
- `docs/architecture.md`
- `docs/local-development.md`
- `docs/deployment.md`
- `docs/security.md`
- `docs/observability.md`
- `docs/data-platform.md`
- `docs/adr/` folder with initial Architecture Decision Records

## Acceptance Criteria

- A reviewer can understand what the system does within five minutes.
- The README clearly explains the project purpose, stack, local setup, and capability demonstrated.
- ADRs explain why key technologies were selected.
- Documentation is honest about what is production-ready and what is demo/reference implementation.

## Codex Prompt 1 — Documentation baseline

```text
You are working in an existing full-stack repository called Utilez WebApp. It currently has a React frontend and Django backend.

Create or update the documentation so the repository is suitable for a public technical portfolio.

Add the following files:

- README.md
- docs/architecture.md
- docs/local-development.md
- docs/deployment.md
- docs/security.md
- docs/observability.md
- docs/data-platform.md

The documentation should explain:

- project purpose
- current architecture
- frontend/backend separation
- REST API communication
- Docker Compose local development
- planned cloud-native enhancements
- how this project demonstrates React, Python, platform, data, and cloud engineering capability

Keep the tone professional and realistic. Do not claim the system is production-grade unless the implementation supports it.
```

## Codex Prompt 2 — ADR template and initial ADRs

```text
Add an Architecture Decision Record structure under docs/adr/.

Create these ADR files:

- 0001-use-react-typescript.md
- 0002-use-django-rest-framework.md
- 0003-use-cognito-for-authentication.md
- 0004-use-celery-for-async-processing.md
- 0005-use-event-driven-ingestion.md
- 0006-use-snowflake-and-iceberg.md
- 0007-use-terraform-and-kubernetes.md

Each ADR should include:

- Status
- Context
- Decision
- Consequences
- Alternatives considered

Use a realistic engineering tone. These ADRs should explain why the project is being evolved from a simple React/Django app into a cloud-native full-stack platform demo.
```

---

# Phase 2 — Frontend Modernisation

## Objective

Upgrade the frontend from JavaScript React to React + TypeScript with a modern, maintainable structure.

## Deliverables

- TypeScript configuration
- `.tsx` components
- Typed API clients
- Modern folder structure
- Auth flow screens
- Dashboard pages
- Reusable layout components

## Acceptance Criteria

- Frontend compiles successfully with TypeScript.
- Existing user-facing functionality still works.
- API request/response types are defined.
- Dashboard screens demonstrate practical UI/data application capability.
- Components are separated into layout, features, pages, and reusable components.

## Codex Prompt 3 — Convert React JavaScript to TypeScript

```text
Refactor the frontend from JavaScript React to React + TypeScript.

Tasks:

1. Add TypeScript support to the frontend.
2. Rename React component files from .js to .tsx where appropriate.
3. Add shared types under frontend/src/types/.
4. Type API responses, user objects, address objects, dashboard metrics, and authentication state.
5. Preserve existing functionality.
6. Update package.json scripts if needed.
7. Ensure the app builds successfully.

Do not redesign the UI yet. Focus only on safe migration to TypeScript and typed interfaces.
```

## Codex Prompt 4 — Modern frontend architecture

```text
Refactor the frontend into a modern feature-based architecture.

Target structure:

frontend/src/
├── app/
├── components/
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── addresses/
│   └── ingestion/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── types/
└── utils/

Tasks:

1. Move existing components into appropriate folders.
2. Create a typed API service layer using Axios.
3. Create reusable layout components.
4. Create route definitions in a central route module.
5. Keep the code readable and avoid unnecessary abstraction.
6. Update imports and ensure the frontend still builds.
```

## Codex Prompt 5 — Auth flows

```text
Add frontend authentication flow screens and state handling.

Implement:

- Login page
- Register page
- Logout action
- Protected route wrapper
- Current user state
- Token storage strategy
- Basic error handling

Assume the backend exposes JWT authentication endpoints. If backend endpoints do not exist yet, create the frontend service layer with clearly named functions and TODO comments showing the expected API contract.

Keep the UI simple, professional, and suitable for a technical demo.
```

## Codex Prompt 6 — Dashboards

```text
Add dashboard pages that demonstrate data-product style frontend capability.

Create:

- Main dashboard page
- Ingestion status panel
- User/address summary panel
- Analytics metrics cards
- Recent ingestion events table
- Simple chart component using a lightweight charting library already suitable for React

Use typed mock data if backend endpoints are not yet available. Clearly isolate mock data so it can later be replaced by API calls.

The dashboard should demonstrate that this application can support analytics and operational use cases.
```

---

# Phase 3 — Backend Modernisation

## Objective

Refactor the Django backend into a cleaner modern Django REST structure with apps, serializers, viewsets, authentication, async tasks, and background workers.

## Deliverables

- Modular Django apps
- REST viewsets
- JWT authentication
- Celery worker
- Redis broker
- Async ingestion task examples
- API health endpoints
- Structured configuration

## Acceptance Criteria

- Backend runs locally via Docker Compose.
- APIs are documented or clearly discoverable.
- Background worker starts locally.
- A demo async task can be triggered and observed.
- The backend structure supports future scale.

## Codex Prompt 7 — Backend app refactor

```text
Refactor the Django backend into a modern modular structure.

Target structure:

backend/apps/
├── accounts/
├── addresses/
├── ingestion/
├── analytics/
└── common/

Tasks:

1. Move the existing user/address functionality into appropriate apps.
2. Use Django REST Framework serializers and viewsets where suitable.
3. Add clean URL routing per app.
4. Add a health check endpoint.
5. Keep migrations safe and explain any migration changes in comments or documentation.
6. Ensure existing API behaviour remains compatible where possible.
```

## Codex Prompt 8 — JWT authentication backend

```text
Add modern JWT-based authentication to the Django REST backend.

Tasks:

1. Add Django REST Framework JWT authentication using a standard package.
2. Add login, refresh token, and current user endpoints.
3. Protect appropriate API endpoints.
4. Add permissions classes where needed.
5. Update backend documentation with the authentication flow.
6. Add example API requests in docs/security.md.

Keep the implementation simple and suitable for local development and demo deployment.
```

## Codex Prompt 9 — Async tasks and background workers

```text
Add async task processing to the backend using Celery and Redis.

Tasks:

1. Add Celery configuration to Django.
2. Add Redis as the broker in Docker Compose.
3. Add a Celery worker service to Docker Compose.
4. Create an ingestion task in apps/ingestion/tasks.py.
5. Add an API endpoint that triggers a demo ingestion task.
6. Add a task status endpoint or basic task result pattern.
7. Update docs/architecture.md and docs/local-development.md.

The demo task should simulate ingesting an external file/event and writing ingestion metadata to the database.
```

---

# Phase 4 — Platform Engineering Layer

## Objective

Add credible platform engineering artifacts: Docker Compose, GitHub Actions, Terraform, Kubernetes manifests, and observability.

## Deliverables

- Improved Docker Compose
- CI workflows
- Docker build workflow
- Terraform structure
- Kubernetes manifests
- Observability documentation and sample instrumentation

## Acceptance Criteria

- Local stack runs with frontend, backend, worker, Redis, and database.
- CI runs linting/tests/builds.
- Terraform is structured into modules and environments.
- Kubernetes manifests are valid reference deployment artifacts.
- Observability is represented through logging, health checks, metrics design, and documentation.

## Codex Prompt 10 — Docker Compose platform stack

```text
Improve docker-compose.yml so it supports a realistic local platform stack.

Include services for:

- frontend
- backend
- postgres
- redis
- celery worker
- celery beat if useful

Tasks:

1. Add environment variable support using .env.example.
2. Add health checks where useful.
3. Add named volumes for database persistence.
4. Ensure frontend can call backend through a local API URL.
5. Document the local startup flow in docs/local-development.md.
```

## Codex Prompt 11 — GitHub Actions CI/CD

```text
Add GitHub Actions workflows for this repository.

Create workflows under .github/workflows/:

- frontend-ci.yml
- backend-ci.yml
- docker-build.yml
- terraform-plan.yml

The workflows should:

1. Install dependencies.
2. Run linting where configured.
3. Run tests where configured.
4. Build the frontend.
5. Validate the backend.
6. Build Docker images.
7. Run terraform fmt and terraform validate.

Use sensible placeholders where cloud credentials would be required. Do not include real secrets.
```

## Codex Prompt 12 — Terraform foundation

```text
Add Terraform infrastructure structure under infra/terraform/.

Create:

infra/terraform/
├── environments/
│   ├── dev/
│   └── prod/
└── modules/
    ├── network/
    ├── ecs/
    ├── eks/
    ├── s3/
    ├── api-gateway/
    ├── cognito/
    └── observability/

Tasks:

1. Add minimal but realistic Terraform module files.
2. Include variables.tf, outputs.tf, and main.tf where appropriate.
3. Add README files explaining each module.
4. Keep resources safe and clearly marked as demo/reference infrastructure.
5. Do not hardcode account IDs or secrets.
6. Add terraform.tfvars.example files.
```

## Codex Prompt 13 — Kubernetes manifests

```text
Add Kubernetes reference manifests under infra/k8s/.

Create manifests for:

- frontend deployment/service
- backend deployment/service
- worker deployment
- configmap
- secret template
- ingress
- horizontal pod autoscaler

Use a base/overlay structure if appropriate.

The manifests should be suitable as a reference implementation and should not include real secrets.

Update docs/deployment.md to explain how these manifests relate to ECS/EKS deployment options.
```

## Codex Prompt 14 — Observability

```text
Add basic observability patterns to the application.

Tasks:

1. Add structured logging to the Django backend.
2. Add request logging middleware if appropriate.
3. Add health check and readiness endpoints.
4. Add basic metrics endpoint or document where Prometheus/OpenTelemetry would be integrated.
5. Add frontend error boundary.
6. Add docs/observability.md explaining logs, metrics, traces, alerts, and operational dashboards.

Keep the implementation lightweight but credible.
```

---

# Phase 5 — Data Engineering Layer

## Objective

Extend the application into a data platform demonstration by adding event-driven ingestion, Snowflake/Iceberg integration patterns, streaming concepts, and an analytics layer.

## Deliverables

- Ingestion app
- Event model
- File ingestion simulation
- S3 ingestion pattern
- Snowflake connector module
- Iceberg table integration documentation
- Streaming reference architecture
- Analytics API endpoints
- Dashboard integration

## Acceptance Criteria

- The backend can simulate ingestion events.
- Ingestion metadata is persisted.
- Analytics endpoints expose summary metrics to the frontend dashboard.
- Snowflake/Iceberg integration is represented by clean adapter modules and documentation.
- The system demonstrates platform thinking without requiring real cloud credentials to run locally.

## Codex Prompt 15 — Event-driven ingestion app

```text
Add an ingestion app to the Django backend.

Implement:

- IngestionSource model
- IngestionEvent model
- IngestionRun model
- API endpoints to create and list ingestion events
- Celery task to process a demo ingestion event
- Status lifecycle: RECEIVED, PROCESSING, COMPLETED, FAILED
- Basic retry/error capture fields

The purpose is to demonstrate event-driven ingestion and operational traceability.

Update docs/data-platform.md with the ingestion flow.
```

## Codex Prompt 16 — S3-style file ingestion pattern

```text
Add an S3-style ingestion adapter to the backend.

Tasks:

1. Create a storage adapter interface.
2. Add a local filesystem implementation for local development.
3. Add an S3 implementation using boto3, configured by environment variables.
4. Add safe placeholder configuration in .env.example.
5. Add documentation explaining local vs AWS behavior.

Do not require real AWS credentials for local development.
```

## Codex Prompt 17 — Snowflake integration layer

```text
Add a Snowflake integration layer to demonstrate data warehouse connectivity.

Tasks:

1. Create backend/apps/analytics/adapters/snowflake_adapter.py.
2. Add configuration using environment variables.
3. Add a safe connection wrapper.
4. Add an example query function for analytics metrics.
5. Add mocked fallback behavior for local development if Snowflake credentials are not configured.
6. Add tests or sample usage.
7. Update docs/data-platform.md.

Do not include real credentials. Keep the adapter clean and production-aware.
```

## Codex Prompt 18 — Iceberg integration reference

```text
Add an Apache Iceberg integration reference to the repository.

The goal is to demonstrate architecture and adapter design, not necessarily to run a full Iceberg stack locally.

Tasks:

1. Add backend/apps/analytics/adapters/iceberg_adapter.py.
2. Include interfaces for reading table metadata and querying sample records.
3. Add documentation explaining how Iceberg tables on S3 could be queried by Snowflake, Spark, or DuckDB.
4. Add a sample table layout under docs/data-platform.md.
5. Add clear TODOs for production implementation.

Keep this honest as a reference/demo pattern unless a working local Iceberg implementation is added.
```

## Codex Prompt 19 — Streaming reference pattern

```text
Add a streaming reference pattern to the repository.

Options:

- Lightweight local implementation using Redis streams
- Or documentation-first Kafka/EventBridge architecture

Implement the safest practical option for this repository.

Tasks:

1. Add an event producer abstraction.
2. Add a local event producer implementation.
3. Add a consumer/background worker pattern.
4. Connect streaming events to the ingestion task lifecycle.
5. Document how this maps to AWS EventBridge, Kafka, or Kinesis in production.

Update docs/data-platform.md and docs/architecture.md.
```

## Codex Prompt 20 — Analytics layer and dashboard API

```text
Add an analytics API layer to support frontend dashboards.

Implement endpoints for:

- ingestion run summary
- successful vs failed ingestion count
- latest ingestion events
- source-level metrics
- mock business metrics suitable for the Utilez demo domain

The frontend dashboard should consume these endpoints using typed API clients.

If real Snowflake credentials are not configured, the backend should return safe local/demo data.
```

---

# Phase 6 — Cloud Architecture Layer

## Objective

Add AWS deployment patterns that demonstrate cloud architecture capability without requiring immediate live deployment.

## Deliverables

- AWS architecture documentation
- Terraform modules for AWS resources
- ECS deployment option
- EKS deployment option
- API Gateway pattern
- Cognito authentication pattern
- S3 ingestion pattern

## Acceptance Criteria

- AWS design is clear and credible.
- Terraform modules show practical infrastructure thinking.
- ECS and EKS are documented as alternative deployment paths.
- Cognito is integrated into the auth architecture.
- S3 is integrated into ingestion architecture.

## Codex Prompt 21 — AWS deployment documentation

```text
Create docs/deployment.md with a clear AWS deployment strategy.

Cover:

- Local development using Docker Compose
- Container deployment using ECS Fargate
- Kubernetes deployment using EKS
- API Gateway in front of backend APIs
- Cognito for authentication
- S3 for ingestion landing zone
- Redis/ElastiCache for background task broker
- RDS Postgres for application data
- CloudWatch for logs and metrics

Include architecture diagrams using Mermaid syntax.
```

## Codex Prompt 22 — Cognito integration plan

```text
Add a Cognito integration plan and optional implementation stubs.

Tasks:

1. Document Cognito auth flow in docs/security.md.
2. Add frontend configuration placeholders for Cognito.
3. Add backend JWT validation configuration placeholders.
4. Add Terraform module skeleton for Cognito user pool and app client.
5. Clearly document local JWT auth vs AWS Cognito auth.

Do not include real AWS identifiers or secrets.
```

## Codex Prompt 23 — API Gateway pattern

```text
Add an API Gateway reference architecture.

Tasks:

1. Add Terraform module skeleton for API Gateway.
2. Document routing from API Gateway to ECS or EKS backend service.
3. Explain authentication integration with Cognito.
4. Explain logging, throttling, and CORS considerations.
5. Update docs/deployment.md.
```

## Codex Prompt 24 — ECS/EKS deployment artifacts

```text
Add deployment artifacts for both ECS and EKS reference paths.

For ECS:
- Terraform module skeleton
- task definition template
- service definition pattern
- load balancer notes

For EKS:
- Kubernetes manifests already under infra/k8s
- documentation explaining deployment flow

Make it clear that a real project would typically choose one path, but this repository includes both to demonstrate deployment tradeoffs.
```

---

# Phase 7 — Testing and Quality

## Objective

Add enough testing and quality checks to make the project credible as a public engineering demo.

## Deliverables

- Backend unit tests
- API tests
- Frontend component tests
- Type checking
- Linting
- CI enforcement

## Acceptance Criteria

- CI runs meaningful checks.
- Tests cover core backend logic and API behavior.
- Frontend has basic component and service tests.
- README includes test instructions.

## Codex Prompt 25 — Backend tests

```text
Add backend tests for the Django application.

Cover:

- health endpoint
- authentication endpoints
- address APIs
- ingestion event lifecycle
- analytics summary endpoints
- Celery task logic where practical

Use pytest or Django test framework consistently.

Update backend CI workflow to run tests.
```

## Codex Prompt 26 — Frontend tests

```text
Add frontend tests for the React TypeScript application.

Cover:

- rendering of main layout
- login/register form behavior
- protected route behavior
- dashboard metrics rendering
- API service mocking

Use the testing framework already suitable for the frontend stack.

Update frontend CI workflow to run tests and type checks.
```

## Codex Prompt 27 — Linting and formatting

```text
Add linting and formatting to the repository.

Frontend:
- ESLint
- Prettier
- TypeScript type checking

Backend:
- ruff or flake8
- black
- isort

Add scripts to package.json and backend documentation.
Update GitHub Actions to enforce linting and formatting checks.
```

---

# Phase 8 — Final Portfolio Polish

## Objective

Make the repository easy for recruiters, hiring managers, and senior engineers to review.

## Deliverables

- Final README
- Architecture diagrams
- Screenshots
- Demo walkthrough
- Capability mapping section
- Roadmap section

## Acceptance Criteria

- README clearly explains what the project demonstrates.
- Screenshots or diagrams make the system easy to understand.
- Documentation avoids inflated claims.
- The repository tells a coherent story: full-stack app evolved into cloud-native data platform demo.

## Codex Prompt 28 — Final README polish

```text
Polish README.md for public portfolio presentation.

Add sections for:

- Project overview
- Why this project exists
- Capability demonstrated
- Architecture diagram
- Tech stack
- Local setup
- Demo workflows
- Repository structure
- Data/platform engineering features
- Cloud deployment options
- Screenshots placeholder section
- Roadmap

The README should be professional, concise, and suitable for a senior/principal engineering portfolio.
```

## Codex Prompt 29 — Capability mapping

```text
Add a capability mapping section to README.md.

Map repository features to engineering capabilities:

- React + TypeScript frontend
- Django REST API development
- Authentication and security
- Async background processing
- Event-driven ingestion
- Data platform integration
- Snowflake/Iceberg architecture
- Docker and local development
- CI/CD
- Terraform
- Kubernetes
- AWS deployment patterns
- Observability

Keep the wording factual and avoid overclaiming.
```

## Codex Prompt 30 — Final documentation consistency review

```text
Review all documentation for consistency.

Tasks:

1. Ensure README.md links to all docs files.
2. Ensure architecture diagrams match implemented structure.
3. Ensure ADRs align with actual implementation.
4. Remove outdated references.
5. Mark incomplete features clearly as roadmap or reference implementation.
6. Ensure setup instructions are accurate.
7. Ensure no secrets, credentials, or sensitive values are committed.
```

---

# Recommended Implementation Order

Use this order to avoid creating a confusing half-finished repository:

1. Documentation baseline
2. ADRs
3. Docker Compose cleanup
4. Backend modular refactor
5. Frontend TypeScript migration
6. Auth flow
7. Dashboard screens
8. Celery and Redis background processing
9. Ingestion event model
10. Analytics API
11. GitHub Actions
12. Observability
13. Terraform skeleton
14. Kubernetes manifests
15. AWS deployment documentation
16. Snowflake/Iceberg adapters
17. Streaming reference pattern
18. Tests and linting
19. Final README polish
20. Documentation consistency review

---

# Practical Scope Control

To keep the work realistic, treat the following as implementation tiers.

## Must Implement

- React + TypeScript migration
- Modern frontend structure
- Django REST modular backend
- JWT auth
- Docker Compose stack
- Celery + Redis
- Ingestion event model
- Dashboard API
- GitHub Actions
- Documentation and ADRs

## Reference Implementation Is Acceptable

- Terraform modules
- Kubernetes manifests
- AWS ECS/EKS deployment
- API Gateway
- Cognito
- Snowflake adapter
- Iceberg adapter
- Streaming architecture

## Do Not Fake

Do not claim any of the following unless actually deployed and tested:

- Production deployment
- High availability
- Real Snowflake ingestion
- Real Iceberg table writes
- Real Cognito login
- Real ECS/EKS running environment
- Production-grade observability

---

# Final Repository Story

After these improvements, the repository should tell this story:

> Utilez started as a full-stack React and Django application. It has been modernised into a cloud-native application and data-platform demonstration showing frontend engineering, Python backend engineering, async processing, event-driven ingestion, analytics APIs, Docker-based local development, CI/CD, Terraform, Kubernetes, observability, and AWS deployment patterns.

That story is strong for roles involving:

- Senior Data Engineer
- Principal Data Engineer
- Platform Engineer
- Data Platform Engineer
- Full-stack Data Product Engineer
- Cloud/Data Architect
