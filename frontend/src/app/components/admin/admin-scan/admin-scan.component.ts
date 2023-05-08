import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CodeService } from 'src/app/services/code/code.service';

@Component({
  selector: 'app-admin-scan',
  templateUrl: './admin-scan.component.html',
  styleUrls: ['./admin-scan.component.scss']
})
export class AdminScanComponent {

  constructor(
    private codeService: CodeService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  scanSuccess(url: string) {
    navigator.vibrate(100);

    let code = this.codeService.resolveCode(url);

    if(code.lane_id && code.unique_part_id && code.same_origin) {
      this.snackbar.open('Found valid QR code', '', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });

      this.router.navigate([ { outlets: { unique_parts: [code.unique_part_id] } } ]);
    }
    else
      this.snackbar.open('QR code not valid!', '', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
  }

}
