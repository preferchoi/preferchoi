import { AuthenticationError } from 'apollo-server-express';
import { IncomingHttpHeaders } from 'http';
import jwt from 'jsonwebtoken';
import User from '../entities/User';

export const DEFAULT_JWT_SECRET_KEY = 'secret';

export interface JwtVerifiedUser {
  userId: User['id'];
}

export const createAccessToken = (user: User): string => {
  const userData: JwtVerifiedUser = { userId: user.id };
  const accessToken = jwt.sign(
    userData,
    process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    { expiresIn: '30m' },
  );
  return accessToken;
};

export const verifyAccessToken = (
  accessTokken?: string,
): JwtVerifiedUser | null => {
  if (!accessTokken) return null;

  try {
    const verified = jwt.verify(
      accessTokken,
      process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    ) as JwtVerifiedUser;
    return verified;
  } catch (error) {
    console.log('access_token expired: ', error.expiredAt);
    throw new AuthenticationError('access token expired');
  }
};

export const verifyAccessTokenFromReqHeaders = (
  headers: IncomingHttpHeaders,
): JwtVerifiedUser | null => {
  const { authorization } = headers;
  if (!authorization) return null;

  const accessToken = authorization.split(' ')[1];
  try {
    return verifyAccessToken(accessToken);
  } catch {
    return null;
  }
};
