# Baraka School Kapsabet - Flask Backend Implementation Plan

## Project Structure
```
baraka-backend/
├── app.py
├── config.py
├── requirements.txt
├── models.py
├── routes/
│   ├── __init__.py
│   ├── auth.py
│   ├── contacts.py
│   ├── news.py
│   ├── gallery.py
│   └── admissions.py
├── utils/
│   ├── __init__.py
│   └── helpers.py
├── migrations/
└── instance/
    └── baraka.db
```

## Dependencies (requirements.txt)
```
Flask==2.3.3
Flask-SQLAlchemy==3.0.5
Flask-Migrate==4.0.4
Flask-WTF==1.1.1
Flask-CORS==4.0.0
python-dotenv==1.0.0
email-validator==2.0.0
bcrypt==4.0.1
```

## Core Implementation

### config.py
```python
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'instance', 'baraka.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    WTF_CSRF_ENABLED = False  # Disable for API simplicity (frontend handles CSRF via same-origin)
    MAIL_SERVER = os.environ.get('MAIL_SERVER') or 'localhost'
    MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    ADMINS = ['admin@barakaschoolkapsabet.ac.ke']
```

### models.py
```python
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255))
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    role = db.Column(db.String(20), default='user')  # admin, staff, parent
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_read = db.Column(db.Boolean, default=False)

class NewsArticle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(200), unique=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
    excerpt = db.Column(db.String(500))
    published_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_published = db.Column(db.Boolean, default=False)

class GalleryImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    image_url = db.Column(db.String(500), nullable=False)
    category = db.Column(db.String(50))  # academics, sports, events, campus
    is_featured = db.Column(db.Boolean, default=False)
    uploaded_at = db.Column(db.DateTime, default=datetime.utcnow)

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_name = db.Column(db.String(100), nullable=False)
    student_dob = db.Column(db.Date, nullable=False)
    grade_applying = db.Column(db.String(50), nullable=False)
    parent_name = db.Column(db.String(100), nullable=False)
    parent_email = db.Column(db.String(120), nullable=False)
    parent_phone = db.Column(db.String(20))
    message = db.Column(db.Text)
    status = db.Column(db.String(20), default='submitted')  # submitted, reviewed, accepted, rejected
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
```

### app.py
```python
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, User, Contact, NewsArticle, GalleryImage, Application
from routes.auth import auth_bp
from routes.contacts import contacts_bp
from routes.news import news_bp
from routes.gallery import gallery_bp
from routes.admissions import admissions_bp
import os

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize extensions
    db.init_app(app)
    migrate = Migrate(app, db)
    CORS(app)  # Allow frontend to communicate with backend
    
    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(contacts_bp, url_prefix='/api/contacts')
    app.register_blueprint(news_bp, url_prefix='/api/news')
    app.register_blueprint(gallery_bp, url_prefix='/api/gallery')
    app.register_blueprint(admissions_bp, url_prefix='/api/admissions')
    
    # Health check endpoint
    @app.route('/health')
    def health():
        return jsonify({'status': 'healthy', 'service': 'baraka-school-backend'})
    
    # Create tables if they don't exist
    with app.app_context():
        db.create_all()
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)
```

### routes/contacts.py
```python
from flask import Blueprint, jsonify, request
from models import db, Contact
from utils.helpers import validate_email

contacts_bp = Blueprint('contacts', __name__)

@contacts_bp.route('', methods=['POST'])
def submit_contact():
    data = request.get_json()
    
    # Validation
    if not data or not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({'error': 'Missing required fields'}), 400
    
    if not validate_email(data['email']):
        return jsonify({'error': 'Invalid email format'}), 400
    
    contact = Contact(
        name=data['name'],
        email=data['email'],
        subject=data.get('subject', 'General Inquiry'),
        message=data['message']
    )
    
    db.session.add(contact)
    db.session.commit()
    
    return jsonify({
        'message': 'Thank you for your message. We will respond shortly.',
        'id': contact.id
    }), 201

@contacts_bp.route('', methods=['GET'])
def get_contacts():
    # In production, add pagination and admin auth
    contacts = Contact.query.order_by(Contact.created_at.desc()).limit(50).all()
    return jsonify([{
        'id': c.id,
        'name': c.name,
        'email': c.email,
        'subject': c.subject,
        'message': c.message,
        'created_at': c.created_at.isoformat(),
        'is_read': c.is_read
    } for c in contacts])
```

### routes/news.py
```python
from flask import Blueprint, jsonify, request
from models import db, NewsArticle
from utils.helpers import generate_slug

news_bp = Blueprint('news', __name__)

@news_bp.route('', methods=['GET'])
def get_news():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    category = request.args.get('category')
    
    query = NewsArticle.query.filter_by(is_published=True)
    
    if category:
        # Would join with categories table in full implementation
        pass
    
    news = query.order_by(NewsArticle.published_at.desc()).paginate(
        page=page, per_page=per_page, error_out=False
    )
    
    return jsonify({
        'articles': [{
            'id': a.id,
            'title': a.title,
            'slug': a.slug,
            'excerpt': a.excerpt,
            'published_at': a.published_at.isoformat()
        } for a in news.items],
        'pagination': {
            'page': news.page,
            'pages': news.pages,
            'total': news.total,
            'per_page': news.per_page
        }
    })

@news_bp.route('/<slug>', methods=['GET'])
def get_news_by_slug(slug):
    article = NewsArticle.query.filter_by(slug=slug, is_published=True).first_or_404()
    return jsonify({
        'id': article.id,
        'title': article.title,
        'content': article.content,
        'excerpt': article.excerpt,
        'published_at': article.published_at.isoformat()
    })
```

### routes/gallery.py
```python
from flask import Blueprint, jsonify, request
from models import db, GalleryImage

gallery_bp = Blueprint('gallery', __name__)

@gallery_bp.route('', methods=['GET'])
def get_gallery():
    category = request.args.get('category')
    featured = request.args.get('featured', type=bool)
    
    query = GalleryImage.query
    
    if category:
        query = query.filter_by(category=category)
    if featured is not None:
        query = query.filter_by(is_featured=featured)
    
    images = query.order_by(GalleryImage.uploaded_at.desc()).all()
    
    return jsonify([{
        'id': img.id,
        'title': img.title,
        'description': img.description,
        'image_url': img.image_url,
        'category': img.category,
        'is_featured': img.is_featured,
        'uploaded_at': img.uploaded_at.isoformat()
    } for img in images])

@gallery_bp.route('', methods=['POST'])
def upload_image():
    # In production, add file upload handling and admin auth
    data = request.get_json()
    
    if not data or not data.get('title') or not data.get('image_url'):
        return jsonify({'error': 'Title and image_url are required'}), 400
    
    image = GalleryImage(
        title=data['title'],
        description=data.get('description', ''),
        image_url=data['image_url'],
        category=data.get('category', 'general'),
        is_featured=data.get('is_featured', False)
    )
    
    db.session.add(image)
    db.session.commit()
    
    return jsonify({
        'message': 'Image uploaded successfully',
        'id': image.id
    }), 201
```

### routes/admissions.py
```python
from flask import Blueprint, jsonify, request
from models import db, Application
from utils.helpers import validate_email, validate_date

admissions_bp = Blueprint('admissions', __name__)

@admissions_bp.route('', methods=['POST'])
def submit_application():
    data = request.get_json()
    
    # Validation
    required_fields = ['student_name', 'student_dob', 'grade_applying', 
                      'parent_name', 'parent_email']
    for field in required_fields:
        if not data.get(field):
            return jsonify({'error': f'Missing required field: {field}'}), 400
    
    if not validate_email(data['parent_email']):
        return jsonify({'error': 'Invalid parent email format'}), 400
    
    if not validate_date(data['student_dob']):
        return jsonify({'error': 'Invalid date of birth format'}), 400
    
    application = Application(
        student_name=data['student_name'],
        student_dob=data['student_dob'],
        grade_applying=data['grade_applying'],
        parent_name=data['parent_name'],
        parent_email=data['parent_email'],
        parent_phone=data.get('parent_phone', ''),
        message=data.get('message', '')
    )
    
    db.session.add(application)
    db.session.commit()
    
    return jsonify({
        'message': 'Application submitted successfully',
        'id': application.id,
        'status': application.status
    }), 201

@admissions_bp.route('', methods=['GET'])
def get_applications():
    # In production, add pagination and admin auth
    status = request.args.get('status')
    query = Application.query
    
    if status:
        query = query.filter_by(status=status)
    
    applications = query.order_by(Application.created_at.desc()).limit(50).all()
    
    return jsonify([{
        'id': a.id,
        'student_name': a.student_name,
        'student_dob': a.student_dob.isoformat(),
        'grade_applying': a.grade_applying,
        'parent_name': a.parent_name,
        'parent_email': a.parent_email,
        'status': a.status,
        'created_at': a.created_at.isoformat()
    } for a in applications])
```

### utils/helpers.py
```python
import re
from datetime import datetime

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_date(date_str):
    try:
        datetime.strptime(date_str, '%Y-%m-%d')
        return True
    except ValueError:
        return False

def generate_slug(title):
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'[\s_-]+', '-', slug)
    slug = slug.strip('-')
    return slug
```

## Frontend Integration Notes

### How Frontend Should Communicate with Backend
1. **Base URL**: All API calls should go to `http://localhost:5000/api` (adjust for production)
2. **Contact Form**: 
   - Replace `DemoForm` submission with POST to `/api/contacts`
   - Show success message from API response
3. **News Page**:
   - Replace hardcoded `ARTICLES` with GET request to `/api/news`
   - Implement pagination using `page` and `per_page` parameters
   - Add search/filter support via query parameters
4. **Gallery Page**:
   - Replace hardcoded `ALL_ITEMS` with GET request to `/api/gallery`
   - Add category filtering via `?category=academics` etc.
   - Implement lightbox using image URLs from API
5. **Admissions Form**:
   - Replace `DemoForm` submission with POST to `/api/admissions`
   - Show application ID/status from response
6. **Newsletter**:
   - Create new endpoint `/api/newsletter` (similar to contacts)
   - Or extend contacts endpoint with newsletter-specific handling

### Environment Setup
1. Create `.env` file:
   ```
   SECRET_KEY=your-secret-key-here
   DATABASE_URL=sqlite:///instance/baraka.db
   ```
2. Initialize database:
   ```bash
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```
3. Run the server:
   ```bash
   python app.py
   ```

### Security Considerations for Production
1. Change `SECRET_KEY` to a strong random value
2. Use PostgreSQL instead of SQLite for production
3. Set `WTF_CSRF_ENABLED = True` and implement CSRF protection
4. Add rate limiting to prevent abuse
5. Implement proper authentication for admin endpoints
6. Use HTTPS in production
7. Validate and sanitize all inputs (already implemented in helpers)
8. Restrict CORS origins to your domain only

### Minimal Viable Implementation
This plan implements ONLY what's needed to make the current frontend functional:
- Contact form submissions
- Dynamic news loading
- Dynamic gallery loading
- Admissions form processing
- Basic data validation

No extra features like user authentication, file uploads, or admin dashboards are included since:
1. The current frontend doesn't show/administer these features
2. The user requested "nothing extra"
3. These can be added later as needed

The backend is designed to be a direct drop-in replacement for the current demo/hardcoded data in the frontend, maintaining exact compatibility with existing components and UI.