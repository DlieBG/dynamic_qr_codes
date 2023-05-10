import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LaneService } from 'src/app/services/lane/lane.service';
import { LaneUpdateDto } from 'src/app/types/lane.type';

@Component({
  selector: 'app-admin-lane-create',
  templateUrl: './admin-lane-create.component.html',
  styleUrls: ['./admin-lane-create.component.scss']
})
export class AdminLaneCreateComponent {

  laneUpdateDto: LaneUpdateDto = {
    id: '',
    fallback_url: ''
  };

  constructor(
    private laneService: LaneService,
    private dialog: MatDialogRef<AdminLaneCreateComponent>
  ) { }

  create() {
    this.laneService
      .updateLane(this.laneUpdateDto)
      .subscribe(
        () => {
          this.dialog.close();
        }
      );
  }

}
