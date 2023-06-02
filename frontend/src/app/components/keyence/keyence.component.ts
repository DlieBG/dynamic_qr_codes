import { Component } from '@angular/core';
import { UniquePartService } from 'src/app/services/unique-part/unique-part.service';
import { CodeService } from 'src/app/services/code/code.service';
import { KeyValueData, UniquePart } from 'src/app/types/unique-part.type';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-keyence',
  templateUrl: './keyence.component.html',
  styleUrls: ['./keyence.component.scss']
})
export class KeyenceComponent {

  qr!: string;

  uniquePart!: UniquePart | null;

  customer_order: string = '';

  constructor(
    private uniquePartService: UniquePartService,
    private codeService: CodeService,
    private snackbar: MatSnackBar
  ) { }

  qrChange() {
    let code = this.codeService.resolveCode(this.qr);
    
    if(code.unique_part_id)
      this.uniquePartService
        .getUniquePart(code.unique_part_id)
        .subscribe({
          next: (uniquePart) => {
            this.uniquePart = uniquePart;

            this.uniquePart.data.forEach(
              (data) => {
                if((data as KeyValueData).key && (data as KeyValueData).key == 'Kundenauftrag')
                  this.customer_order = (data as KeyValueData).value;
              }
            )
          },
          error: () => {
            this.uniquePart = {
              id: code.unique_part_id || '',
              data: []
            };

            this.customer_order = '';
          }
        });
      else
        this.uniquePart = null;
  }

  save() {
    if(this.uniquePart) {
      this.uniquePart.data = [
        {
          key: 'Kundenauftrag',
          value: this.customer_order
        }
      ];

      this.uniquePartService
        .updateUniquePart(this.uniquePart)
        .subscribe(
          () => {
            this.snackbar.open('Unique Part saved successfully', '',  { duration: 3000 });
          }
        );
    }
  }

}
