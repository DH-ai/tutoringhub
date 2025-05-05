Installing django 
pip install Django
pip install psycopg2-binary
psycopg2, which is the PostgreSQL adapter for Python

creating django porject 
django-admin startproject backendtutorhub


Configure Database Connection

before that installing postgresql
sudo apt update
sudo apt install postgresql postgresql-contrib

access the postgresql 

sudo -u postgres psql

creating database and user for django

postgres=# CREATE DATABASE mytutoringhubdb;
postgres-# CREATE USER gautam WITH PASSWORD '0penmypsql';
postgres-# GRANT ALL PRIVILEGES ON DATABASE mytutoringhubdb TO  gautam;
postgres-# \q

```

setting up the db

# backendtutorhub/settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mytutoringdb',       # Replace with your PostgreSQL database name
        'USER': 'gautam',   # Replace with your PostgreSQL username
        'PASSWORD': '0penmypsql',   # Replace with your PostgreSQL password
        'HOST': 'localhost',        # Or the hostname/IP of your PostgreSQL server
        'PORT': '',                 # Leave empty for default port (5432)
    }
}

```



Created a admin user 
user - admin_user
pass - 0pendhruv
email- dhruvastro67@gmail.com


Setup 
users_service
install drf

setup course
setup course reg  table M2m

setup  authentication for users get a token
install pip install djangorestframework-simplejwt
