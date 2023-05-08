import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminScanComponent } from '../admin-scan/admin-scan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  openScanner() {
    this.dialog.open(AdminScanComponent);
  }

}
