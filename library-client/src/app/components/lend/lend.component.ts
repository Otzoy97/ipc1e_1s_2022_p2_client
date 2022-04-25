import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { INewLend, INewPerson, IReadLend, IReadPerson } from 'src/app/interface/ILend';
import { LendService } from 'src/app/services/lend.service';
import { isURL } from 'src/app/services/url';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html'
})
export class LendComponent implements OnInit {

  newPersonDialog: boolean = false;
  newLendDialog: boolean = false;
  newReturnDialog: boolean = false;

  submitted: boolean = false;

  newPerson: INewPerson;
  readPerson: IReadPerson;
  lendList : IReadLend[];
  newLend: INewLend;
  cuiPersonToFind: string;
  uuidToReturn: string;

  uploadedFiles: any; 
  isLoading : boolean = false;

  constructor(
    private lendSvc : LendService,
    private msgSvc : MessageService
  ) { }

  ngOnInit(): void {
  }

  hideDialog() : void {
    this.newLendDialog = false;
    this.newPersonDialog = false;
    this.newReturnDialog = false;
    this.submitted = false;
  }

  showNewPersonDialog() : void {
    this.newPersonDialog = true,
    this.newPerson = { }
    this.submitted = false;
  }

  showNewLendDialog() : void {
    this.newLendDialog = true;
    this.newLend = { };
    this.submitted = false;
  }

  showNewReturnDialog() : void {
    this.newReturnDialog = true;
    this.uuidToReturn = "";
    this.submitted = false;
  }

  createPerson() : void {
    if (!this.checkURL()) {
      return;
    }
    this.submitted = true;
    //this.lendSvc
  }

  findPerson(): void {
    if (!this.checkURL) {
      return;
    }
    
  }

  lendBook() : void {
    if (!this.checkURL()) {
      return;
    }
    this.submitted = true;
  }

  returnBook() : void {
    if(!this.checkURL()) {
      return;
    }
    this.submitted = false;
  }

  handleSubmit(event: any, fileUpload: any): void {
    if (!this.checkURL()) {
      return;
    }
    for(let file of event.files) {
      this.uploadedFiles = file
    }
    if (this.uploadedFiles) {
      let fileReader = new FileReader();
      fileReader.onload = () => {


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
