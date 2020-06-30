import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import {
    ICreateUserResponse,
    ILoginBody,
    IPostUserBody,
    IUser
} from './types';
import config from '../config';
import { User } from '../entity/User';
import { UserType } from '../entity/UserType';
import errorMsg from '../utils/error';

const UserRepository = () => getRepository(User);
const UserTypeRepository = () => getRepository(UserType);

export default class UserService {
    public async createUser(body: IPostUserBody): Promise<ICreateUserResponse> {
        try {
            const { firstName, lastName, username, password, email, phoneNumber } = body;
            const userType = await UserTypeRepository().findOne(body.userType);
            if (!userType) {
                return Promise.reject(errorMsg(404, "User type does not exist."))
            }
            const user = await UserRepository()
                .createQueryBuilder('User')
                .where('User.email = :email', { email })
                .where('User.username = :username', { username })
                .getOne();
            if (user) {
                return Promise.reject(errorMsg(409, "User with the same email/username already exists!"))
            }

            var salt = await bcrypt.genSaltSync(7);
            var hash = await bcrypt.hashSync(password, salt);

            const data = {
                firstName,
                lastName,
                username,
                email,
                phoneNumber,
                userType,
                password: hash
            }
            const newUser = await UserRepository().save(data);
            const token = await jwt.sign({...newUser}, config.APP_SECRET, { expiresIn: config.TOKEN_EXP });
            return { token, user: newUser };
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public async deleteUser(id: number): Promise<string> {
        try {
            const user = await UserRepository().findOne({ id });
            if (!user) {
                const err: any = await errorMsg(404, "User does not exist.");
                return Promise.reject(err);
            }
            await UserRepository().delete(id)
            return `DELETED`;
        } catch (e) {
            return Promise.reject(e)
        }
    }

    public async login(data: ILoginBody): Promise<ICreateUserResponse> {
        try {
            const { email, password } = data;
            
            const user: any = await UserRepository()
                .createQueryBuilder('User')
                .innerJoinAndSelect('User.userType', 'userType')
                .where('User.email = :email', { email })
                .getOne();
            if (!user) {
                const err: any = await errorMsg(404, "User does not exist.");
                return Promise.reject(err);
            }
        
            const check: boolean = await bcrypt.compareSync(password, user.password);
        
            if (!check) {
                const err: any = await errorMsg(400, "Invalid password.");
                return Promise.reject(err);
            }
        
            const token = await jwt.sign({...user}, config.APP_SECRET, { expiresIn: config.TOKEN_EXP });

            return { user, token };
        } catch(e) {
            return Promise.reject(e);
        }
    }
}