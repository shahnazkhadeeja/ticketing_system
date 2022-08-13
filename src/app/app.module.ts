import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { HighchartsChartModule } from 'highcharts-angular';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { LinechartAreaComponent } from './linechart-area/linechart-area.component';
import { CardComponent } from './card/card.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';

import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { ForwardTicketComponent } from './forward-ticket/forward-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    CreateComponent,
    DashboardComponent,
    TicketListComponent,
    LinechartAreaComponent,
    CardComponent,
    PieChartComponent,
    TableComponent,
    
    ViewTicketComponent,
    EditContactComponent,
    AddNoteComponent,
    EditTicketComponent,
    ForwardTicketComponent,
    DeleteTicketComponent
  ],
  
  imports:[
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule ,
    MatButtonModule ,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    // NgSelectModule ,
    FormsModule ,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatDialogModule,
    AngularEditorModule,
    HttpClientModule,
    NgxMatSelectSearchModule,
    MatChipsModule,
    MatAutocompleteModule
  
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
