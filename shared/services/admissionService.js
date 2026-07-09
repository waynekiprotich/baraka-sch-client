import { applications } from '../mock/admissions.js';

export const admissionService = {
  getAll: () => Promise.resolve(applications),
  getById: (id) => Promise.resolve(applications.find(a => a.id === id)),
  create: (app) => Promise.resolve({ ...app, id: Date.now() }),
  update: (id, updates) => Promise.resolve({ ...updates, updatedAt: new Date().toISOString() }),
  delete: (id) => Promise.resolve(true),
};