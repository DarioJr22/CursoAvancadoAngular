import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { data } from 'cypress/types/jquery';
import Swiper from 'swiper';
import {} from 'swiper';

@Component({
  selector: 'mv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {


  //Ng2 Charts

  //$---------Bar charts-------$
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData:ChartConfiguration<'bar'>['data'] = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    }

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: false,
    };

  //$---------Pie charts-------$
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];



randomValueNg2Charts(){
  let chartData = this.barChartData
  chartData.datasets  = this.barChartData.datasets.map(i =>{
        let chatsRandom = i['data'].map( item=> {
              item = Math.random() * 120
              return  item
            }
          )
        i.data = chatsRandom
      return  i
    }
  )
  this.barChartData = chartData


  console.log(this.barChartData);
}


//$-----------Line Charts---------------$
public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      fill: true,
      tension: 0.5,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ]
};
public lineChartOptions: ChartOptions<'line'> = {
  responsive: false
};
public lineChartLegend = true;

//$---------Scater Plot-------------$
public scatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] = [
  {
    data: [
      { x: 1, y: 1 },
      { x: 2, y: 3 },
      { x: 3, y: -2 },
      { x: 4, y: 4 },
      { x: 5, y: -3},
    ],
    label: 'Series A',
    pointRadius: 10,
  },
];

public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
  responsive: false,
};


  //NgxCharts
  legendPosition:LegendPosition = LegendPosition.Below

  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "UoA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
    ,
    {
      "name": "Mexico",
      "value": 7200000
    }
    ,
    {
      "name": "Brasil",
      "value": 7200000
    }
  ];

  multi: any[] = [
    {
    "name": "Germany",
    "series": [
      {
        "name": "1990",
        "value": 62000000
      },
      {
        "name": "2010",
        "value": 73000000
      },
      {
        "name": "2011",
        "value": 89400000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "1990",
        "value": 250000000
      },
      {
        "name": "2010",
        "value": 309000000
      },
      {
        "name": "2011",
        "value": 311000000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "1990",
        "value": 58000000
      },
      {
        "name": "2010",
        "value": 50000020
      },
      {
        "name": "2011",
        "value": 58000000
      }
    ]
  },
  {
    "name": "UK",
    "series": [
      {
        "name": "1990",
        "value": 57000000
      },
      {
        "name": "2010",
        "value": 62000000
      },
      {
        "name": "2011",
        "value": 72000000
      }
    ]
  }
  ];

  randomValueNgxCharts(e:any){
   let valueRandomize:any[] = []
   this.single.forEach(i=>{
          i.value = 1000 * Math.random()
          valueRandomize.push(i)
        }
      )
        this.single = valueRandomize
  valueRandomize = []


  valueRandomize = this.multi.map(i=>{
    let random = []
       random = i.series.map((de:any)=>{
           return {
            'name':de.name,
            'value': de.value = 1000 * Math.random()
            }
        }
      )
      return {
        'name':i.name,
        'series':random
      }
    }
  )
      this.multi = valueRandomize

    }


  view: [number,number] = [300, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


  colorScheme: Color = {
    name: 'Emotions',
    selectable: true,
    domain: ['#03221c', '#042921', '#06614f', '#063b31', '#042921'],
    group: ScaleType.Ordinal,
  }

  constructor() {

  console.log(this.barChartData);
  }

  onSelect(event:any) {
    console.log(event);
  }



}
