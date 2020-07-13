import { Context } from 'koa';
import Service from './service';
import handleResponse from '../utils/handleResponse';

export const createResponse = async (ctx: Context) => {
    const { body } = ctx.request;
    const { user: { id }} = ctx.state;
    const Svc = new Service();
    try {
        const result = await Svc.createResponse(body, id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const getUserResponse = async (ctx: Context) => {
    const { storyId } = ctx.params;
    const { user: { id }} = ctx.state;
    const Svc = new Service();
    try {
        const result = await Svc.getUserResponse(id, storyId);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};