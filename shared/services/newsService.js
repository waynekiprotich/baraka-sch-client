import { newsArticles } from '../mock/news.js';

export const newsService = {
  getAll: () => Promise.resolve(newsArticles),
  getById: (id) => Promise.resolve(newsArticles.find(a => a.id === id)),
  create: (article) => Promise.resolve({ ...article, id: Date.now() }),
  update: (id, updates) => Promise.resolve({ ...updates, updatedAt: new Date().toISOString() }),
  delete: (id) => Promise.resolve(true),
};