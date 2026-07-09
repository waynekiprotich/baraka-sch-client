import { contactMessages } from '../mock/messages.js';

export const messageService = {
  getAll: () => Promise.resolve(contactMessages),
  getById: (id) => Promise.resolve(contactMessages.find(m => m.id === id)),
  create: (message) => Promise.resolve({ ...message, id: Date.now() }),
  update: (id, updates) => Promise.resolve({ ...updates, updatedAt: new Date().toISOString() }),
  delete: (id) => Promise.resolve(true),
};