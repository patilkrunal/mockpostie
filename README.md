# mockpostie-backend
mockpostie is a tool to mock API requests. This repo contains backend for mockpostie.


### Before starting RUN Backend Server
- rename `.env.sample` to `.env` and update your credentials
- install dependencies: `pip install -r requirements.txt`
- make migrations: `python3 manage.py makemigrations`
- migrate: `python3 manage.py migrate`


- start virtualenv: `source env/bin/activate` or `./venv/bin/activate`
- start django server in development: `DJANGO_ENV=development python3 manage.py runserver`
- start django server in production: `python3 manage.py runserver`

### RUN Frontend
- `cd frontend`
- install dependencies: `npm install`
- start: `npm start`

### When Frontend changes form a new React App build
- `cd frontend`
- `npm run build`