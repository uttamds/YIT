

### 🔹 Basic Single-File App

* Small apps can run from a single file `app.py`.
* Example:

  ```python
  from flask import Flask
  app = Flask(__name__)

  @app.route("/")
  def home():
      return "Hello, Flask!"
  ```

---

### 🔹 Standard Project Structure

When app grows, organize files like this:

```
project/
│
├── app/                  # Main application package
│   ├── __init__.py       # Initializes Flask app
│   ├── routes.py         # Application routes (views)
│   ├── models.py         # Database models
│   ├── forms.py          # Web forms (optional)
│   └── templates/        # HTML templates (Jinja2)
│       └── index.html
│   └── static/           # CSS, JS, Images
│       └── style.css
│
├── venv/                 # Virtual environment (optional)
├── config.py             # Configurations (debug, database, secret key, etc.)
├── run.py                # Entry point to run the app
└── requirements.txt      # Dependencies
```

---

### 🔹 Key Points

* **`__init__.py`** → creates Flask app, loads config, registers blueprints.
* **`routes.py`** → defines endpoints with `@app.route`.
* **`templates/`** → stores HTML files with Jinja2 placeholders.
* **`static/`** → stores CSS, JavaScript, and images.
* **`config.py`** → stores settings like `DEBUG=True`, database URIs.
* **`run.py`** → simple script to start the server (`app.run()`).

---

<img width="1556" height="743" alt="image" src="https://github.com/user-attachments/assets/d06e92ed-02e6-415c-a5c9-4904c8762de7" />

# Summary

This Flask project is a **simple web application** that demonstrates a basic project structure with separate folders for `templates` and `static` files. The `app.py` file serves as the entry point, rendering an HTML form stored in the `templates` folder. The form includes common input elements like text fields, dropdowns, radio buttons, and checkboxes, while a sample image is loaded from the `static/images` directory. The CSS is embedded within the HTML template to give the form a neat and minimal look. This setup shows how Flask cleanly organizes templates, static assets, and application logic, making it easy to scale from a simple demo to a larger project.
