📂 You started by setting up your Flask project structure.

app.py to run the app.

templates/ folder with HTML files (index.html, user.html, yit.html).

static/ folder with an images/ subfolder to hold things like sample.jpg.

🖥️ Next, you wanted to demo authentication.

We added a simple login / logout system using Flask sessions.

Created a login.html page for users to enter credentials.

Updated index.html to greet the logged-in user and show a logout option.

🔑 For testing purposes:

Username is set to admin.

Password is set to 1234.

💾 How it works:

When a user logs in, their info is stored in a Flask session (server-side).

The browser just keeps a signed session cookie.

Logging out clears the session.
