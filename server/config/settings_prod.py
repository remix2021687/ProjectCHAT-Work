import os

DEBUG = False

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', ['localhost'])

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': f'{os.environ.get('DB_NAME')}',
        'USER': f'{os.environ.get('DB_USER')}',
        'PASSWORD': f'{os.environ.get('DB_PASSWORD')}',
        'HOST': f"{os.environ.get('DB_HOST')}",
        'PORT': f"{os.environ.get('DB_PORT', '5432')}",
    }
}

CORS_ALLOWED_ORIGINS = f"{os.environ.get('CORS_ALLOWED_ORIGINS', ['http://localhost:5173'])}"
