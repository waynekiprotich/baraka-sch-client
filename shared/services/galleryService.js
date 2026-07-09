import { galleryItems } from '../mock/gallery.js';

export const galleryService = {
  getAll: () => Promise.resolve(galleryItems),
  getById: (id) => Promise.resolve(galleryItems.find(i => i.id === id)),
  create: (item) => Promise.resolve({ ...item, id: Date.now() }),
  update: (id, updates) => Promise.resolve({ ...updates, updatedAt: new Date().toISOString() }),
  delete: (id) => Promise.resolve(true),
};