import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormControl,Validators} from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
  vcolor:string;
}

interface Animal {
  name: string;
 
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  animalControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Today'},
    {name: 'Tomorrow'},
    {name: 'Next 1 hour'},
    {name: 'Next 8 hours'},
  ];
  
  priority: Food[] = [
    {value: 'low', viewValue: 'low', vcolor:'#ffff'},
    {value: 'medium', viewValue: 'medium',vcolor:'#FFBE96'},
    {value: 'high', viewValue: 'High',vcolor:'#2ED0B9'
  },
  ];
  created = new FormControl('');
createdList: string[] = ['Ann Mathew', 'Matt Rogers', 'Emily Garcia', 'Pepperoni', 'Sausage', 'Tomato'];

groups=new FormControl("");
groupList:string [] =['Admin','Sales','Telecalling','IT','Accounts']
  selectedFood = this.priority[2].value;

  skills: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California']
    status: string[] = [
      'Open',
      'Pending',
      'Resolved',
      'Closed',
      'California']
      Type:string[]=[
        'Question',
        'Incident',
        'Problem',
        'Feature Request',
        'Refund'
      ]
      Source:string[]=[
        'Email',
        "phone",
        'Message'
      ]
      items = [
        {id: 1, name: 'Python'},
        {id: 2, name: 'Node Js'},
        {id: 3, name: 'Java'},
        {id: 4, name: 'PHP', disabled: true},
        {id: 5, name: 'Django'},
        {id: 6, name: 'Angular'},
        {id: 7, name: 'Vue'},
        {id: 8, name: 'ReactJs'},
      ];
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
selectCar(events: Event) {
    this.selectedFood = (events.target as HTMLSelectElement).value;
  }

//   onMouseEnter(event: any): void {
//     console.log(event)
//      event.target.click();
    
//  }
//  onmouseleave(event: any): void {
//    event.target.click();
//  }

goTo(){
  this.router.navigate (['main/list/view-ticket'])
}
}
