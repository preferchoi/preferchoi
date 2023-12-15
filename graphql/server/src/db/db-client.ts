import { Connection, createConnection } from 'typeorm';
import User from "../entities/User";
import { CutVote } from "../entities/CutVote";

export const createDB = async (): Promise<Connection> => {
  return createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'ghibli_graphql',
    username: 'root',
    password: '1q2w3e4r',
    logging: !(process.env.NODE_ENV === 'production'),
    synchronize: true,
    entities: [User, CutVote],
  });
};
