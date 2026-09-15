// backend/middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

// ---------- General API limiter ----------
// 100 requests per 15 min per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests. Please try again later.',
  },
});

// ---------- Strict limiter for login ----------
// 5 attempts per 15 min per IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true, // don't count successful logins
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many login attempts. Please wait 15 minutes and try again.',
  },
});

// ---------- Form submission limiter ----------
// 5 submissions per hour per IP
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many submissions. Please wait and try again later.',
  },
});

// ---------- Admin API limiter ----------
// 300 requests per 15 min per IP
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many admin requests.',
  },
});

module.exports = {
  apiLimiter,
  loginLimiter,
  formLimiter,
  adminLimiter,
};