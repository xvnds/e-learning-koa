import { Context } from 'koa';
import Service from './service';
import handleResponse from '../utils/handleResponse';

export const createFrame = async (ctx: Context) => {
    const { body } = ctx.request;
    const { user: { id }} = ctx.state;
    const Svc = new Service();
    try {
        const result = await Svc.createFrame(body, id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const getFrame = async (ctx: Context) => {
    const { id } = ctx.params;
    const Svc = new Service();
    try {
        const result = await Svc.getFrame(id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};