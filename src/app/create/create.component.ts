import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
ticket:any=FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  createTicket(){

    console.log("task created");
  }
}
