# mockpostie-backend
mockpostie is a tool to mock API requests. This repo contains backend for mockpostie.


### POST query
<code>
curl --location --request POST 'http://127.0.0.1:8000/create/' \
--header 'Cookie: <put your loggedin cookie here>' \
--form 'customUrl="response"' \
--form 'response="\"response\""'
</code>

### RUN Backend Server
- install dependencies: pip install -r requirements.txt
- start django server: python3 manage.py runserver

### RUN Frontend
- cd frontend
- install dependencies: npm install
- start: npm start

### When Frontend changes form a new React App build
- cd frontend
- npm run build