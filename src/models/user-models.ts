export type User = UserUpdate & {id: number};

export interface UserInsert{
    id : number,
    name : string,
    midname ?: string,
    surname : string,
    password : string,
    email : string
}

export interface UserUpdate {
    email: string;
    password?: string;
    firstName?: string;
    lastName?: string;
}

export interface UserPatch extends Partial<UserInsert>{}

/*export interface CRUD {
    list: (limit: number, page: number) => Promise<any>;
    create: (resource: any) => Promise<any>;
    putById: (id: string, resource: any) => Promise<string>;
    readById: (id: string) => Promise<any>;
    deleteById: (id: string) => Promise<string>;
    patchById: (id: string, resource: any) => Promise<string>;
}*/

export interface Ticket {
    id: number;
    flightid : string;
    seat : string;
    flightname?:string;
}