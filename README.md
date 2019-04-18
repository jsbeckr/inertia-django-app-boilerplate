# Installation
Install django and dependencies:

```bash
$ pipenv install django djangorestframework django-webpack-loader inertia-django
```

Start a django project and run migration:

```bash
$ django-admin startproject my_project
$ ./manage.py migrate
```

Start a django app with this template:

```bash
$ ./manage.py startapp --template https://TODO my_app
```

Add apps to INSTALLED_APPS in settings.py:

```python
INSTALLED_APPS = [
  'my_app',

  'webpack_loader',
  'rest_framework',

  # ...
]
```

Add necessary settings to settings.py:

```python
# Tells inertia-django which base template you want to use
# index.html is provided in the boilerplate
INERTIA_TEMPLATE = 'index.html'

# Necessary for django-webpack-loader
WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        # IMPORTANT: change my_app to the name of your django app
        'STATS_FILE': os.path.join(BASE_DIR, 'my_app/inertia/webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': [r'.+\.hot-update.js', r'.+\.map']
    }
}
]
```

Install node dependencies:

```bash
$ cd my_app/inertia
$ npm i
```

# Usage

Start webpack compilation:

```bash
$ cd my_app/inertia
$ npm start
```

Start django:

```bash
$ ./manage.py runserver
```

# App directory structure

The boilerplate provides a basic app directory structure that you should use. If you change it you probably will have to change certain settings (in webpack.config.js, WEBPACK_LOADER dict in settings.py or others).

```
├── README.md
└── app_name
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── inertia <--- inertia dir run npm i and npm start in here
    │   ├── js
    │   │   ├── components
    │   │   │   └── Layout.vue <--- base layout that you can use around every page
    │   │   ├── index.js
    │   │   └── pages
    │   │       └── Index.vue <--- initial page that will be rendered for index route
    │   ├── jsconfig.json <--- used by VS Code, you can delete that if you want
    │   ├── package-lock.json
    │   ├── package.json
    │   └── webpack.config.js <--- webpack fun
    ├── migrations
    │   └── __init__.py
    ├── models.py
    ├── templates
    │   └── index.html <--- provided basic html template that renders that renders the webpack js bundle
    ├── tests.py
    └── views.py
```