export interface IBook {
  isbn?: number,
  author?: string,
  title?: string,
  year?: number,
  no_copies?: number,
  no_available_copies?: number
}

export interface IEditBook {
  isbn?: number,
  author?: string,
  title?: string,
  year?: number,
}