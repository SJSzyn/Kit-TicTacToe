#  HTTP response code meaning and significance 

- 1xx = Information
- 2xx = access
- 3xx = Redirecting
- 4xx = Client Error
- 5xx = Server Error 

## 200 OK 

- The request has succeeded. 
- When you visit a webpage and it loads successfully, the server has responded with a 200 OK status.
- No action is needed as this indicates successful communication.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200


## 301 Moved Permanently

- 301 redirect indicates that a page has permanently moved to a new location,
- If a website has changed its domain name, visiting the old URL might automatically redirect you to the new domain with a 301 status code.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301

## 302 Found

- Says that the page has moved to a new location, but that it is only temporary
- A product page might temporarily redirect to a promotional page during a sale, using a 302 status.
- No action is typically required for users. Web developers should use this status for temporary redirections only.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302

## 404 Not FOund

- The server cannot find the requested resource. This is often due to a broken or dead link.
- If you click on a link that points to a deleted or moved page, you'll get a 404 error.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404

## 500 Internal Server Error

- The server encountered an unexpected condition that prevented it from fulfilling the request.
- A misconfiguration on the server or an error in a web application can lead to a 500 error.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500