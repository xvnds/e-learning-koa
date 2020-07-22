import { getRepository } from 'typeorm';
import { Conclusion } from '../entity/Conclusion';
import errorMsg from '../utils/error';

const ConclusionRepository = () => getRepository(Conclusion);

export default class ConclusionService {
    public async getConclusion(conclusionId: number): Promise<any> {
        try {
            const conclusion = await ConclusionRepository().findOne(conclusionId);
            if (!conclusion) {
                const err: any = await errorMsg(404, "Conclusion does not exist.");
                return Promise.reject(err);
            }
            return conclusion;
        } catch (err) {
            return Promise.reject(err);
        }
    }
}