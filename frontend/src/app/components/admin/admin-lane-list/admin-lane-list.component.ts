import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LaneService } from 'src/app/services/lane/lane.service';
import { Lane } from 'src/app/types/lane.type';
import { AdminLaneCreateComponent } from '../admin-lane-create/admin-lane-create.component';

@Component({
  selector: 'app-admin-lane-list',
  templateUrl: './admin-lane-list.component.html',
  styleUrls: ['./admin-lane-list.component.scss']
})
export class AdminLaneListComponent implements OnInit {

  lanes$!: Observable<Lane[]>;

  displayedColumns: string[] = ['id', 'fallback_url', 'actions'];

  constructor(
    private laneService: LaneService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.getLanes();
  }

  getLanes() {
    this.lanes$ = this.laneService.getLanes();
  }

  addLane() {
    this.dialog
      .open(AdminLaneCreateComponent)
      .afterClosed()
      .subscribe(
        () => {
          this.getLanes();
        }
      );
  }

}
