import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DocsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

closeDialog() {
this.dialogRef.close();
}
copyToclip() {
const copyText: any = document.getElementById("myInput2");
copyText.select();
document.execCommand('copy');
alert("Copied cheqqly code snippet");
this.closeDialog();
}

}
