import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LaneService } from 'src/app/services/lane/lane.service';
import { UniquePartService } from 'src/app/services/unique-part/unique-part.service';
import { Lane } from 'src/app/types/lane.type';
import { UniquePart } from 'src/app/types/unique-part.type';

@Component({
  selector: 'app-lookup-information',
  templateUrl: './lookup-information.component.html',
  styleUrls: ['./lookup-information.component.scss']
})
export class LookupInformationComponent implements OnInit {

  lane$!: Observable<Lane>;
  uniquePart$!: Observable<UniquePart>;

  constructor(
    private route: ActivatedRoute,
    private laneService: LaneService,
    private uniquePartService: UniquePartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.getLane(params['lane_id']);
        this.getUniquePart(params['unique_part_id']);
      }
    );
  }

  getLane(id: string) {
    this.lane$ = this.laneService.getLane(id);
  }

  getUniquePart(id: string) {
    this.uniquePart$ = this.uniquePartService.getUniquePart(id);
  }

}
