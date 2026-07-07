# Security Guidelines  

## 🔒 Security Practices  
1. **Build Security**  
   - Enable `terser` in `vite.config.js` to minify and obfuscate code  
   - Remove console logs in production builds  

2. **Dependency Security**  
   - Regularly audit dependencies with `npm audit`  
   - Use `snyk` for vulnerability scanning  

3. **Runtime Security**  
   - Sanitize all user inputs (see `src/utils/sanitize.js`)  
   - Implement Content Security Policy (CSP) headers  

## 🛡️ Security Headers  
Add to `public/_headers`:  
```  
Content-Security-Policy default-src 'self';  
X-Content-Type-Options nosniff  
X-Frame-Options DENY  
Referrer-Policy strict-origin-when-cross-origin  
Permissions-Policy camera=(), microphone=()  
```  

## 🧪 Security Testing  
- Run `npm run lint` to catch security-related code issues  
- Use `eslint-plugin-security` for additional checks