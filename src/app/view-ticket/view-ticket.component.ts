import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';
import { DeleteTicketComponent } from '../delete-ticket/delete-ticket.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';
import { ForwardTicketComponent } from '../forward-ticket/forward-ticket.component';

interface Priority {
  value: string;
  viewValue: string;
}
declare var $: any;
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
  
})
export class ViewTicketComponent  {

  constructor(public dialog: MatDialog) {}

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  
  panelOpenState = false;
  foods: Priority[] = [
    {value: 'green', viewValue: 'Low'},
    {value: 'yellow', viewValue: 'Medium'},
    {value: 'orange', viewValue: 'High'},
    {value:"red",viewValue:'Critical'}
  ];


  openDialog(): void {
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '250px',
      height:'100%',
      data: {},
      position: { right: 0 + 'vh', top: 30 + 'vh' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  openAddbox():void{

    const dialogRef = this.dialog.open(AddNoteComponent, {
      width: '450px',
      height:'100%',
      data: {},
      position: { left: 0 + 'vh', top: 30 + 'vh' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  openEditbox():void{

    const dialogRef = this.dialog.open(EditTicketComponent, {
      width: '550px',
      height:'100%',
      data: {},
      position: { left: 0 + 'vh', top: 30 + 'vh' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  openForwardbox(){


    const dialogRef = this.dialog.open(ForwardTicketComponent, {
      width: '450px',
      height:'50%',
      data: {},
      position: { left: 40 + 'vh', top: 20 + 'vh' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDeletebox(){

    const dialogRef = this.dialog.open(DeleteTicketComponent, {
      width: '450px',
      height:'30%',
      data: {},
      position: { left: 40 + 'vh', top: 25 + 'vh' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}


