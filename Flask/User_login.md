# User Login

When a user logs in, their username is stored in a Flask session.

A session in Flask is server-side storage (on your machine where Flask runs).

To make this work, Flask uses a secret key to cryptographically sign the session cookie.

The browser only gets a session cookie (a small identifier), not the actual username/password.

Flask then uses that cookie to match the request with session data stored on the server.
