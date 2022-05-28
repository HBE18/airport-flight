

export enum HttpCode 
{
    Success = 200,
    Created = 201,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    Forbidden = 403,
    Timeout = 504
}
export enum ExpressConfig
{
    Port = 3000,
}

export const dbConfig = {
    host : "localhost",
    port: 5432,
    database : "airport",
    user : "airliner",
    password : "123456",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

export const TokenConfig =  {
    token: {
        expireTime: 36000,
        issuer: 'coolIssuer',
        secret: 'superencryptedsecret'
    }

}