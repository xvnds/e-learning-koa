import { Context } from 'koa';
import Service from './service';
import handleResponse from '../utils/handleResponse';

export const createStory = async (ctx: Context) => {
    const { body } = ctx.request;
    const { user: { id }} = ctx.state;
    const Svc = new Service();
    try {
        const result = await Svc.createStory(body, id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const deleteStory = async (ctx: Context) => {
    const { id } = ctx.query;
    const Svc = new Service();
    try {
        const result = await Svc.deleteStory(id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};

export const getStory = async (ctx: Context) => {
    const { id } = ctx.params;
    const Svc = new Service();
    try {
        const result = await Svc.getStory(id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};