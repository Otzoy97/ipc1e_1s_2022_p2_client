import { Component, OnInit } from '@angular/core';
import { IBook, IEditBook } from 'src/app/interface/IBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  books: IBook[];
  newBook: IBook;
  editBook: IEditBook;
  isLoading: boolean = false;
  newBookDialog: boolean = false;
  editBookDialog: boolean = false;
  submitted: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showNewBookDialog(): void {
    this.newBookDialog = true;
    this.submitted = false;
    this.newBook = {}
  }

  showEditBookDialog(): void {
    this.editBookDialog = true;
    this.submitted = false;
    this.editBook = {}
  }

  hideDialog(): void {
    this.editBookDialog = false;
    this.newBookDialog = false;
    this.submitted = false;
  }

  createBook(): void {
    this.submitted = true;
  }

  modifyBook(): void {
    this.submitted = true;
  }

}
