import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LaneService } from 'src/app/services/lane/lane.service';
import { Lane } from 'src/app/types/lane.type';

@Component({
  selector: 'app-admin-lane',
  templateUrl: './admin-lane.component.html',
  styleUrls: ['./admin-lane.component.scss']
})
export class AdminLaneComponent implements OnInit {

  lane$!: Observable<Lane>;

  constructor(
    private route: ActivatedRoute,
    private laneSerivce: LaneService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.getLane(params['lane_id']);
      }
    );
  }

  getLane(id: string) {
    this.lane$ = this.laneSerivce.getLane(id);
  }

  update(lane: Lane) {
    this.laneSerivce
      .updateLane(lane)
      .subscribe(
        () => {
          this.snackbar.open('Lane updated successfully', '', { duration: 3000 });
        }
      );
  }

}
