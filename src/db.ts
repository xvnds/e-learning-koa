import { createConnection } from 'typeorm';
import config from './config'
import { Button } from "./entity/Button";
import { ButtonType } from "./entity/ButtonType";
import { Frame } from "./entity/Frame";
import { FrameType } from "./entity/FrameType";
import { PersonalityType } from "./entity/PersonalityType";
import { Story } from "./entity/Story";
import { StoryType } from "./entity/StoryType";
import { User } from "./entity/User";
import { UserResponse } from "./entity/UserResponse";
import { UserStory } from "./entity/UserStory";
import { UserType } from "./entity/UserType";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME} = config;

const entities = [
    Button,
    ButtonType,
    Frame,
    FrameType,
    PersonalityType,
    Story,
    StoryType,
    User,
    UserResponse,
    UserStory,
    UserType
];

const dbConnection = () => {
    return createConnection({
        entities,
        database: DB_NAME,
        host: DB_HOST,
        password: DB_PASSWORD,
        port: DB_PORT,
        username: DB_USERNAME,
        logging: false,
        type: 'postgres',
        migrationsRun: true,
    });
};
export default dbConnection;