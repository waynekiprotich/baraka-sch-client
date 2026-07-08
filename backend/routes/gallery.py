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
    
    # Map to expected frontend shape
    items = []
    for img in images:
        items.append({
            'id': img.id,
            'sw': 'p3',
            'bg': img.image_url,
            'tall': img.is_featured,
            'cap': img.title,
            'cat': img.category
        })
    
    return jsonify(items)

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