import * as dotEnv from 'dotenv';
dotEnv.config();

const {
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_NAME,
  PORT,
  APP_SECRET,
  TOKEN_EXP
} = process.env;

const config = {
  DB_HOST: DB_HOST || 'localhost',
  DB_NAME: DB_NAME || '',
  DB_PASSWORD: DB_PASSWORD || '',
  DB_PORT: parseInt(DB_PORT) || 5432,
  DB_USERNAME: DB_USERNAME || '',
  PORT: PORT || 8099,
  APP_SECRET: APP_SECRET || 'bcdpinpoint',
  TOKEN_EXP: TOKEN_EXP || '30d'
};

export default config;