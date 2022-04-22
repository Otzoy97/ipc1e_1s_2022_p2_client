import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { IBook, IEditBook, ISearchBook } from '../interface/IBook';
import { getURL } from './url';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  createBook(book: IBook): Observable<HttpResponse<{ msg: string }>> {
    return this.http.post<{ msg: string }>(`${getURL()}/book`, book, { observe: 'response' })
  }

  findBook(parameters: ISearchBook): Observable<HttpResponse<IBook[]>> {
    let params = new HttpParams();
    if (parameters.author) {
      params = params.append('author', parameters.author)
    }
    if (parameters.title) {
      params = params.append('title', parameters.title)
    }
    if (parameters.year_from) {
      params = params.append('year_from', parameters.year_from)
    }
    if (parameters.year_to) {
      params = params.append('year_to', parameters.year_to)
    }
    return this.http.get<IBook[]>(`${getURL()}/book`, { params: params, observe: 'response' })
  }

  modifyBook(book: IEditBook): Observable<HttpResponse<{ msg: string }>> {
    return this.http.put<{ msg: string }>(`${getURL()}/book`, book, { observe: 'response' });
  }
}
