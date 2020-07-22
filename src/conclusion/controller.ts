import { Context } from 'koa';
import Service from './service';
import handleResponse from '../utils/handleResponse';

export const getConclusion = async (ctx: Context) => {
    const { id } = ctx.params;
    const Svc = new Service();
    try {
        const result = await Svc.getConclusion(id);
        return handleResponse(ctx, result, 200);
    } catch (error) {
        return handleResponse(ctx, error, 500);
    }
};