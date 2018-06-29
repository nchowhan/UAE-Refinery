import { Component, OnInit } from '@angular/core';
import {MapChart} from 'angular-highcharts';


@Component({
  selector: 'app-uaerefinery',
  templateUrl: './uaerefinery.component.html',
  styleUrls: ['./uaerefinery.component.css']
})
export class UAERefineryComponent implements OnInit {
  mapChart: MapChart;
  constructor() {
    var columnList = ["Region","Investment","RegionFactor1", "RegionFactor2","RegionFactor3", "InterRegionInfluence", "OverAllRegionPerformance", "SiteName","Site Factor 1","Site Factor 2","Site Factor 3",
"Location", "Political Influence","Locality Influence", "OverAllSitePerformance","RefinaryName","CrudeOil","Temperature",
"AnilinePoint","APIgravity","SulphurContent","Viscosity","ReidVaporPressure","AsphaltenesCarbonResidue","OilQuality",
"RefinaryNodePerformace","type"];
   }

  ngOnInit() {
    this.init();
  }

  init() {
    var data = [
      ['ae-az', 0],
      ['ae-du', 1],
      ['ae-sh', 2],
      ['ae-rk', 3],
      ['ae-uq', 4],
      ['ae-fu', 5],
      ['ae-740', 6],
      ['ae-aj', 7],
      ['ae-742', 8]
  ];
  
   let mapChart = new MapChart({
      chart: {
          map: 'countries/ae/ae-all',
          backgroundColor : null,
  
      },
  
      title: {
          text: 'United Arab Emirates',
                style: {
           color: '#FFF',
           font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
  
      },
  
  mapNavigation: {
      enabled: false,
    },
  
  labels:
  {
    enabled: false
  },
  
  legend:
  {
    enabled: false
  },
  
      colorAxis: {
          min: 0
      },
  
        xAxis: {  
                visible : false ,
            }, 
  
                    credits: {
          enabled: false
      },
  
      exporting: {
           enabled: false
  },
  
  tooltip: { enabled: false },
  
      series: [{
        showInLegend: false,
          data: data,
          name: '',
  
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }]
  });

}
}
