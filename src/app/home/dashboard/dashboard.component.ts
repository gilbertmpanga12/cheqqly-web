import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import {MainserviceService} from '../../services/mainservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  revenue: any;
  showTextLoader: any = true;
  totalCustomers: any;
  constructor(private service: MainserviceService) {

  }

  ngOnInit() {
    this.service.getTotalRevenue(this.service.merchantId).subscribe((data: any) => {
      this.revenue = `$${data.total}`;
      this.showTextLoader = false;
      this.totalCustomers = data.numberOfCustomers;
    }, err => {
      console.log('Errored', err);
      this.service.snackNotifications(err.message);
    });
    let colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560'];
    try{
      let options = {
        chart: {
            height: 250,
            width: '100%',
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                    console.log(chart, w, e );
                }
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        series: [{
            data: [100,0,0,0]
        }],
        xaxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week4'],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '14px'
                }
            }
        },
        responsive: [
          {
            breakpoint: 1000
          }
        ]
    };

    let chart = new ApexCharts(
        document.querySelector("#chart"),
        options
    );

    chart.render();
    } catch {
return;
    }
  }

}
