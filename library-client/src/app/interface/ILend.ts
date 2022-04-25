export interface INewPerson {
    cui?: string,
    last_name?: string,
    first_name?: string
}

export interface IReadPerson {
    cui?: string,
    last_name?: string,
    first_name?: string,
    record?: IReadLend[]
}

export interface IReadLend {
    uuid?: string,
    isbn?: number,
    title?: string,
    lend_date?: string,
    return_date?: string
}

export interface INewLend {
    cui?: string,
    isbn?: number
}

