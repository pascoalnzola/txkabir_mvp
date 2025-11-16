
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// In this MVP we simulate JWT check: token must be "valid-token" or a signed JWT with secret "secret".
// This demonstrates where you'd put real auth checks.
export function jwtAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.header('authorization');
  if (!auth) return res.status(401).json({ message: 'Missing Authorization header' });
  const parts = auth.split(' ');
  if (parts.length !== 2) return res.status(401).json({ message: 'Malformed Authorization header' });
  const token = parts[1];

  // simple simulated validation
  if (token === 'valid-token') {
    // attach a fake user
    (req as any).user = { id: 'system', name: 'TUDKABIR' };
    return next();
  }

  try {
    const payload = jwt.verify(token, 'secret');
    (req as any).user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
