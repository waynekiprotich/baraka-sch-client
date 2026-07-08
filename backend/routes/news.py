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
    
    # Map to expected frontend shape
    articles = []
    for article in news.items:
        articles.append({
            'id': article.id,
            'sw': 'p2',  # placeholder
            'bg': 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
            'tag': 'Sports',
            'title': article.title,
            'blurb': article.excerpt or article.content,
            'date': article.published_at.strftime('%d %b %Y')
        })
    
    return jsonify({
        'articles': articles,
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
        'sw': 'p2',
        'bg': 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
        'tag': 'Sports',
        'title': article.title,
        'blurb': article.excerpt or article.content,
        'date': article.published_at.strftime('%d %b %Y')
    })