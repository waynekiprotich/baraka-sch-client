from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, User, Contact, NewsArticle, GalleryImage, Application
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