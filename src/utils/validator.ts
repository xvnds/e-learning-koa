import * as Joi from 'joi';
import { Context } from 'koa';
import handleResponse from './handleResponse';

export const validateBodyPayload = (schema: object) => async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    const regData = ctx.request.body;
    const result = await Joi.validate(regData, schema, { abortEarly: false });
    ctx.request.body = result;
    await next();
  } catch (error) {
    const errors = error.details as Joi.ValidationErrorItem[];
    const details = errors.map((err: any) => ({
      key: err.context.key,
      message: err.message,
    }));
    return handleResponse(ctx, details, 400);
  }
};

export const validateQueryPayload = (schema: object) => async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    const regData = ctx.request.query;
    const result = await Joi.validate(regData, schema, {
      abortEarly: false,
      allowUnknown: true,
    });
    ctx.request.query = result;
    await next();
  } catch (error) {
    const errors = error.details as Joi.ValidationErrorItem[];
    const details = errors.map((err: any) => ({
      key: err.context.key,
      message: err.message,
    }));
    return handleResponse(ctx, details, 400);
  }
};

export const validateParamsPayload = (schema: object) => async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    const regData = ctx.params;
    const result = await Joi.validate(regData, schema, { abortEarly: false });
    ctx.params = result;
    await next();
  } catch (error) {
    const errors = error.details as Joi.ValidationErrorItem[];
    const details = errors.map((err: any) => ({
      key: err.context.key,
      message: err.message,
    }));
    return handleResponse(ctx, details, 400);
  }
};
