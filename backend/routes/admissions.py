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