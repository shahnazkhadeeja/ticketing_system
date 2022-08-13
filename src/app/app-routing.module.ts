import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'main',
    component:MainComponent,

    children: [
      {
         path: 'create',
         component: CreateComponent,
      },

      {
        path: 'list',
        component: TicketListComponent,


        // redirectTo: 'view-ticket', pathMatch: 'full'
        // children: [
        //   {
        //      path: 'view-ticket',
        //      component: ViewTicketComponent,
        //   }
        // ]

     },

     {
      path: 'dashboard',
      component:DashboardComponent,
   },

   {
    path:'view-ticket',
   component: ViewTicketComponent,
  }
      
   ]
  },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
