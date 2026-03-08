DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'WORKDB',
        'USER': 'ROOT',
        'PASSWORD': '2010665KE',
        'HOST': '172.18.0.2',
        'PORT': '5432',
    }
}

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
]