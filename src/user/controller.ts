import { Context } from 'koa';
import Service from './service';
import handleResponse from '../utils/handleResponse';

export const createUser = async (ctx: Context) => {
    const { body } = ctx.request;
    const Svc = new Service();
    try {
        const result = await Svc.createUser(body);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const createUserTemp = async (ctx: Context) => {
    const { body } = ctx.request;
    const Svc = new Service();
    try {
        const result = await Svc.createUserTemp(body);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const deleteUser = async (ctx: Context) => {
    const { id } = ctx.query;
    const Svc = new Service();
    try {
        const result = await Svc.deleteUser(id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const login = async (ctx: Context) => {
    const { body } = ctx.request;
    const Svc = new Service();
    try {
        const result = await Svc.login(body);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};