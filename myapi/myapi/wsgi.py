

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myapi.settings')

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()