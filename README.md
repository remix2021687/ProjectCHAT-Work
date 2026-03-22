# ProjectCHAT-Work

YouTube + Instagram в одном приложении **Paradox** (Django Channels + React).

## Стек
- Backend: Django 6 + Channels + DRF + django-allauth
- Frontend: React + TypeScript + Vite
- БД: PostgreSQL

## Быстрый запуск
```bash
# 1. Клонируй
git clone https://github.com/remix2021687/ProjectCHAT-Work.git
cd ProjectCHAT-Work

# 2. Server
cd server
cp ../.env.example .env
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# 3. Client (в новом терминале)
cd ../client
cp ../.env.example .env
pnpm install
pnpm dev
