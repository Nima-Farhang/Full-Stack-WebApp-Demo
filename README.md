
# Utilez Web Application

## Overview

Utilez is a full-stack web application built using a React frontend and a Django REST backend.  
The project was originally developed as part of the Utilez platform and demonstrates practical full-stack engineering capabilities across:

- React frontend development
- Django REST API development
- Authentication and user management
- AWS/cloud-ready deployment patterns
- Docker-based local development
- API integration
- Redux state management
- Geolocation and address services

This repository is intended to serve as a portfolio/demo project showcasing Python and React engineering capabilities.

---

## Technology Stack

### Frontend
- React 18
- Redux
- React Router
- React Bootstrap
- Axios
- Amazon Cognito SDK
- Google Places Autocomplete

### Backend
- Django
- Django REST Framework
- JWT Authentication
- PostgreSQL-compatible architecture
- Boto3
- Sentry SDK

### Infrastructure / DevOps
- Docker
- Docker Compose
- AWS-ready deployment structure
- Environment-based configuration

---

## High-Level Features

- Full-stack React + Django architecture
- REST API communication
- User registration flow
- Address capture and geolocation handling
- JSON-based coordinate storage
- Modular frontend component structure
- Redux-based state management
- Dockerized local development environment

---

## Project Structure

```text
WebApp-main/
├── frontend/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── reducers/
│   │   ├── screens/
│   │   └── store.js
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── core/
│   ├── userApi/
│   ├── requirements.txt
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## Architecture Summary

The application follows a decoupled frontend/backend architecture.

### Frontend
The React application is responsible for:
- UI rendering
- Routing
- State management
- API communication
- User interaction

### Backend
The Django backend exposes REST APIs responsible for:
- Business logic
- User management
- Data persistence
- Validation
- Address storage and processing

### Communication
The frontend communicates with the backend through REST endpoints exposed under:

```text
/api/users/
```

---

## Docker Setup

### Start Application

```bash
docker-compose up --build
```

### Frontend
Available on:

```text
http://localhost:3000
```

### Backend
Available on:

```text
http://localhost:8000
```

---

## Example Backend Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/users/` | POST | Register user |
| `/admin/` | GET | Django admin |

---

## Key Engineering Concepts Demonstrated

- Full-stack application architecture
- Separation of concerns
- Component-driven frontend design
- REST API development
- Redux state management
- Dockerized development workflows
- Cloud-ready deployment patterns
- Structured backend modularization

---

## Potential Future Enhancements

- Full authentication workflows
- Production-grade CI/CD pipeline
- Kubernetes deployment manifests
- Automated testing
- API documentation via Swagger/OpenAPI
- Role-based access control
- Enhanced frontend UX/UI

---

## Purpose of This Repository

This project is published primarily as a technical showcase and learning/demo repository illustrating:
- Python backend engineering
- React frontend engineering
- API-driven architecture
- Docker-based development workflows
- Modular application structure

---

## License

This repository is provided for portfolio and demonstration purposes.
