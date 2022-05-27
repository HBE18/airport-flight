import { Pool } from 'pg';
import dbConfig from '../configs';

const pool = new Pool(dbConfig);


module.exports({
    query : (text:string,params:Array<string>) => {
        pool.query(text,params);
    }
});