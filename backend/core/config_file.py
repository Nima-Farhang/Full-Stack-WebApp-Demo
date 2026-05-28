import os

if os.environ['stage'] == 'build':
    DATABASE = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'backend-db',
            'USER':  os.environ['POSTGRES_USER'],
            'PASSWORD':  os.environ['POSTGRES_PASSWORD'],
            'HOST': 'pgdb',
            'port': 5432
        }
    }
sentry_dsn = os.environ['sentry_dsn']
