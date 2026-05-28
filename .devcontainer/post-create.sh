#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

if [ ! -f .env ] && [ -f .env.example ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

if [ -f frontend/package.json ]; then
  cd "$ROOT_DIR/frontend"
  npm install --legacy-peer-deps
fi

if [ -f "$ROOT_DIR/backend/requirements.txt" ]; then
  cd "$ROOT_DIR/backend"
  python -m venv .venv
  . .venv/bin/activate
  python -m pip install --upgrade pip
  pip install -r requirements.txt
fi

echo "Codespaces setup complete. Use commands.md for Docker Compose commands."
