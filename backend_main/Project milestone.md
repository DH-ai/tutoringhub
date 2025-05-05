Installing django 
pip install Django
pip install psycopg2-binary
psycopg2, which is the PostgreSQL adapter for Python

creating django porject 
django-admin startproject backendtutorhub


Configure Database Connection

```
# backendtutorhub/settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydatabase',       # Replace with your PostgreSQL database name
        'USER': 'mydatabaseuser',   # Replace with your PostgreSQL username
        'PASSWORD': 'mypassword',   # Replace with your PostgreSQL password
        'HOST': 'localhost',        # Or the hostname/IP of your PostgreSQL server
        'PORT': '',                 # Leave empty for default port (5432)
    }
}

```