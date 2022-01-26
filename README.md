# mockpostie-backend
mockpostie is a tool to mock API requests. This repo contains backend for mockpostie.


### POST query
<code>
curl --location --request POST 'http://127.0.0.1:8000/addurl/' \
--header 'Cookie: <put your loggedin cookie here>' \
--form 'customUrl="response"' \
--form 'response="\"response\""'
</code>