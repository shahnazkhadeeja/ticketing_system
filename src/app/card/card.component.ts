import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
// HC_exporting(Highcharts);``

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  total!: string;

  @Input()
  percentage!: string;

  Highcharts=Highcharts;
  chartOptions={};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
          type: 'area',
          backgroundcolor:null,
          borderWidth:0,
          margin:[2,2,2,2],
          height:60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
     
      tooltip: {
          split: true,
          outside:true,
      },
      legend:{
        enabled:false,
      },
     exporting:{
      enabled:false,
     },
     xAxis:{
     labels:{
      enabled:false,
     },
     title:{
      text:null,
     },
     startOnTick:false,
     endOnTick:false,
     tickOptions:[]
     },
     yAxis:{
      labels:{
       enabled:false,
      },
      title:{
       text:null,
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
      },

     credits:{
      enabled:false,
     },
      series: [{
          data:[71,78,39,66]
      }]
  };
  HC_exporting(Highcharts);
     
  
  setTimeout( () =>{
    window.dispatchEvent(new Event('resize')
    );
  } ,300);
    }
  
  }


