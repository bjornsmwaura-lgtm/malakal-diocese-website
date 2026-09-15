// backend/middleware/honeypot.js

/**
 * Honeypot middleware.
 * If a hidden field (default: 'website') contains a value, 
 * the request is silently dropped (returns 200 but saves nothing).
 */
const honeypot = (fieldName = 'website') => {
  return (req, res, next) => {
    const trapValue = req.body?.[fieldName];

    // If the field has a value → it's a bot
    if (trapValue && String(trapValue).trim().length > 0) {
      console.log(`🤖 Honeypot triggered on ${req.originalUrl} (IP: ${req.ip})`);

      // Return 200 to fool the bot into thinking it succeeded
      return res.status(200).json({
        success: true,
        message: 'Thank you for your submission.',
      });
    }

    // Clean: remove the field so it never reaches the DB
    if (req.body?.[fieldName] !== undefined) {
      delete req.body[fieldName];
    }

    next();
  };
};

module.exports = honeypot;