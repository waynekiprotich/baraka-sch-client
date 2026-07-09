export const authService = {
  login: (email, password) => {
    // Mock authentication
    if (email === 'admin@barakaschool.test' && password === 'password123') {
      const fakeToken = 'mock-jwt-token';
      localStorage.setItem('baraka-admin-token', fakeToken);
      return Promise.resolve({ token: fakeToken, user: { email, role: 'admin' } });
    }
    return Promise.reject(new Error('Invalid credentials'));
  },
  logout: () => {
    localStorage.removeItem('baraka-admin-token');
    return Promise.resolve();
  },
  isAuthenticated: () => {
    return localStorage.getItem('baraka-admin-token') !== null;
  },
};