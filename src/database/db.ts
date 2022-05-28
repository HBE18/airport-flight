import { Pool } from 'pg';
import {dbConfig} from '../configs';

export const pool = new Pool(dbConfig);

export const query = (text:string,params:Array<string>) => {
    pool.query(text,params);
}
