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