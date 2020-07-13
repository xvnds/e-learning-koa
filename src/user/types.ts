export interface IPostUserBody {
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    phoneNumber?: string;
    userType: number;
}

export interface IPostUserTempBody {
    firstName: string;
    gender?: string;
}

export interface ILoginBody {
    email: string;
    password: string;
}

export interface ICreateUserResponse {
    token: string;
    user: IUser;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    phoneNumber?: string;
    userType: IUserType;
    createdDateTime: string;
}

export interface IUserType {
    id: number;
    name: string;
}