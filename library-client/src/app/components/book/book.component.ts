import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError, finalize, of, throwError } from 'rxjs';
import { IBook, IEditBook, ISearchBook } from 'src/app/interface/IBook';
import { BookService } from 'src/app/services/book.service';
import { isURL } from 'src/app/services/url';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  books: IBook[];
  newBook: IBook;
  editBook: IEditBook;
  searchBook: ISearchBook = {};
  isLoading: boolean = false;
  newBookDialog: boolean = false;
  editBookDialog: boolean = false;
  submitted: boolean;
  uploadedFiles: any;

  constructor(
    private bookService: BookService,
    private msgSvc: MessageService,
    private conSvc: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  showNewBookDialog(): void {
    this.newBookDialog = true;
    this.submitted = false;
    this.newBook = {}
  }

  showEditBookDialog(book: IBook): void {
    this.editBookDialog = true;
    this.submitted = false;
    this.editBook = book;
  }

  hideDialog(): void {
    this.editBookDialog = false;
    this.newBookDialog = false;
    this.submitted = false;
  }

  createBook(): void {
    if (!this.checkURL()) {
      return;
    }
    this.submitted = true;
    this.bookService.createBook(this.newBook).pipe(
      finalize(() => {
        this.newBookDialog = false;
        this.newBook = {};
      })
    ).subscribe({
      next: res => {
        this.msgSvc.add({
          severity: 'success',
          summary: `${res.status} - ${res.statusText}`,
          detail: res.body!.msg
        })
      },
      error: error => {
        this.msgSvc.add({
          severity: 'error',
          summary: `${error.status} - ${error.statusText}`,
          detail: error.error.msg ? error.error.msg : '',
          life: 4000
        })
      }
    });
  }

  modifyBook(): void {
    if (!this.checkURL()) {
      return;
    }
    this.submitted = true;
    this.bookService.modifyBook(this.editBook).pipe(
      finalize(() => {
        this.editBookDialog = false;
        this.editBook = {};
      })
    ).subscribe({
      next: res => {
        this.msgSvc.add({
          severity: 'success',
          summary: `${res.status} - ${res.statusText}`,
          detail: res.body!.msg
        })
      },
      error: error => {
        this.msgSvc.add({
          severity: 'error',
          summary: `${error.status} - ${error.statusText}`,
          detail: error.error.msg ? error.error.msg : '',
          life: 4000
        })
      }
    });
  }

  findBook(): void {
    if (!this.checkURL()) {
      return;
    }
    this.bookService.findBook(this.searchBook).subscribe({
      next: res => {
        this.msgSvc.add({
          severity: 'success',
          summary: `${res.status} - ${res.statusText}`,
          detail: "Búsqueda exitosa"
        });
        this.books = res.body!;
      },
      error: error => {
        this.msgSvc.add({
          severity: 'error',
          summary: `${error.status} - ${error.statusText}`,
          detail: error.error.msg ? error.error.msg : '',
          life: 4000
        })
      }
    });
  }

  handleSubmit(event: any, fileUpload: any): void {
    if (!this.checkURL()) {
      return;
    }
    for (let file of event.files) {
      this.uploadedFiles = file
    }
    if (this.uploadedFiles) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          const json_data: [] = JSON.parse(fileReader.result.toString());
          json_data.forEach(e => {
            this.bookService.createBook(e).pipe(
              finalize(() => {
                this.newBookDialog = false;
                this.newBook = {};
              })
            ).subscribe({
              next: res => {
                this.msgSvc.add({
                  severity: 'success',
                  summary: `${res.status} - ${res.statusText}`,
                  detail: res.body!.msg
                })
              },
              error: error => {
                this.msgSvc.add({
                  severity: 'error',
                  summary: `${error.status} - ${error.statusText}`,
                  detail: error.error.msg ? error.error.msg : '',
                  life: 4000
                })
              }
            });
          })
          this.msgSvc.add({
            severity: 'info',
            summary: 'Carga finalizada',
            detail: 'Se terminó de cargar el archivo'
          })
          fileUpload.clear();
        } else {
          this.msgSvc.add({
            severity: 'warn',
            summary: 'Error',
            detail: 'No se pudo leer el archivo .json'
          })
        }
      }
      fileReader.readAsText(this.uploadedFiles);
    }
  }

  checkURL(): boolean {
    if (isURL()) {
      return true;
    } else {
      this.msgSvc.add(
        {
          severity: "warn",
          summary: "Advertencia",
          detail: "No hay URL establecida",
          life: 3000
        }
      )
      return false;
    }
  }
}
