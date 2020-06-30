/* tslint:disable-next-line */
import * as jwt from 'jsonwebtoken';
import config from '../config';
import { Context } from 'koa';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import handleResponse from './handleResponse';

const UserRepository = () => getRepository(User);

export const authenticateUser = async (ctx: Context, next: () => void) => {
  // parse 'token' out of authorization header. where token is jwt token
  const authHeader = ctx.headers.authorization || '';
  const splitToken = authHeader.split(' ');
  if (splitToken.length >= 2) {
    const token = splitToken[1];
    try {
      const payload: any = verifyJwt(token);
      const user = await UserRepository()
        .createQueryBuilder('user')
        .where('user.id = :userId', { userId: payload.id })
        .select([
          'user.id',
          'user.firstName',
          'user.lastName',
          'user.username',
          'user.phoneNumber',
          'user.email',
          'user.createdDateTime',
        ])
        .leftJoinAndSelect('user.userType', 'userType')
        .getOne();
      if (!user) {
        return handleResponse(ctx, 'Unable to find authenticated user', 401);
      }
      ctx.state.user = user;
      return next();
    } catch (error) {
      return handleResponse(ctx, 'Invalid token provided', 401);
    }
  } else {
    return handleResponse(ctx, 'Missing token in request header', 401);
  }
};

function verifyJwt(token: string) {
  const secretKey = config.APP_SECRET;
  return jwt.verify(
    token,
    secretKey,
    (err: jwt.VerifyErrors, decodedToken: any) => {
      if (err) {
        throw err;
      }
      return decodedToken;
    }
  );
}