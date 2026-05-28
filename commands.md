# Utilez WebApp Development Commands

These commands are intended for GitHub Codespaces and local Docker-based development. Run them from the repository root unless a section says otherwise.

## 1. First-Time Codespaces Setup

Codespaces will use `.devcontainer/devcontainer.json` and run `.devcontainer/post-create.sh` automatically when the container is created.

The setup script:

- Installs frontend dependencies with `npm install --legacy-peer-deps`.
- Creates `backend/.venv`.
- Installs backend dependencies from `backend/requirements.txt`.
- Creates `.env` from `.env.example` if `.env` does not exist.

If you need to rerun the setup manually:

```bash
bash .devcontainer/post-create.sh
```

## 2. Environment File

Docker Compose expects a `.env` file in the repository root.

Create it from the example if it does not already exist:

```bash
cp .env.example .env
```

For local development, the example values are safe placeholders. Do not commit real secrets or cloud credentials.

## 3. Start the Application

Build and start all services:

```bash
docker compose up --build
```

Run in the background:

```bash
docker compose up --build -d
```

Open the app through the forwarded Codespaces ports:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`
- Django admin: `http://localhost:8000/admin/`
- pgAdmin: `http://localhost:8080`

In Codespaces, use the **Ports** tab if GitHub provides forwarded URLs instead of local URLs.

## 4. Stop the Application

Stop containers:

```bash
docker compose down
```

Stop containers and remove local database volumes created by Compose:

```bash
docker compose down --volumes
```

Use the volume command only when you intentionally want to reset local database state.

## 5. View Logs

All services:

```bash
docker compose logs -f
```

Backend only:

```bash
docker compose logs -f backend
```

Frontend only:

```bash
docker compose logs -f frontend
```

Database only:

```bash
docker compose logs -f pgdb
```

## 6. Open Shells in Containers

Backend container:

```bash
docker compose exec backend bash
```

Frontend container:

```bash
docker compose exec frontend sh
```

Postgres shell:

```bash
docker compose exec pgdb psql -U postgres -d backend-db
```

## 7. Django Commands

Run Django commands inside the backend service so they use the same environment as the application.

Apply migrations:

```bash
docker compose exec backend python manage.py migrate
```

Create migrations:

```bash
docker compose exec backend python manage.py makemigrations
```

Create a Django superuser:

```bash
docker compose exec backend python manage.py createsuperuser
```

Open a Django shell:

```bash
docker compose exec backend python manage.py shell
```

## 8. Frontend Commands

Run frontend commands inside the frontend service:

```bash
docker compose exec frontend npm install --legacy-peer-deps
docker compose exec frontend npm run build
docker compose exec frontend npm test
```

The frontend service already runs `npm start` when you start Docker Compose. Restart the service if you need to restart the React development server:

```bash
docker compose restart frontend
```

For Codespaces, the frontend already uses polling through the `WATCHPACK_POLLING=true` start script in `frontend/package.json`.

## 9. Rebuild After Dependency Changes

If `frontend/package.json` or `backend/requirements.txt` changes, rebuild the relevant images:

```bash
docker compose build frontend
docker compose build backend
docker compose up -d
```

To rebuild everything from scratch:

```bash
docker compose build --no-cache
docker compose up -d
```

## 10. Clean Local Generated Data

The repository stores local Postgres and pgAdmin data under `data/`, which is ignored by Git.

To stop services and remove Compose volumes:

```bash
docker compose down --volumes
```

If local bind-mounted `data/` directories exist and you intentionally want a full reset, remove them from the host after stopping Compose:

```bash
rm -rf data/
```

Only run the remove command when you are sure you do not need the local database state.

## 11. Common Troubleshooting

Check running containers:

```bash
docker compose ps
```

Restart one service:

```bash
docker compose restart backend
docker compose restart frontend
```

Recreate one service:

```bash
docker compose up -d --force-recreate backend
docker compose up -d --force-recreate frontend
```

If the backend fails on missing environment variables, confirm `.env` exists and contains the values from `.env.example`.

If frontend changes are not reflected in Codespaces, confirm the app was started through Docker Compose and that `WATCHPACK_POLLING=true` is present in the frontend start script.
