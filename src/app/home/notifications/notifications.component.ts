import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MainserviceService} from '../../services/mainservice.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  displayedColumns: string[] = ['message', 'date'];
  dataSource;
  showLoader: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showEmptyMessage;
  constructor(private service: MainserviceService) {

  }
  ngOnInit() {
    this.service.getAllTransactions(this.service.firebaseId).subscribe((data: any) => {
      this.dataSource =  new MatTableDataSource(data.transactions);
      this.dataSource.paginator = this.paginator;
      this.showLoader = false;
      this.showEmptyMessage = (data.transactions.length < 1) ? true : false;
    }, error => {
      this.dataSource = [];
      this.showLoader = false;
      this.service.snackNotifications(error.message);
    });
  }
}
