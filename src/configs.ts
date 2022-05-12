export enum HttpCode 
{
    Success = 200,
    Created = 201,
    NoContent = 204,
    BadRequest = 400,
    Forbidden = 403,
    Timeout = 504
}
export enum ExpressConfig
{
    Port = 3000,
}

export enum dbConfig 
{
    user = "postgres",
    password = "123456",
    database = "airline",
    host = "localhost",
    port = 5432
}