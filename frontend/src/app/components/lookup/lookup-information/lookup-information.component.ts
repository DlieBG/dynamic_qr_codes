import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
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

  laneId!: string;
  uniquePartId!: string;

  lane$!: Observable<Lane>;
  uniquePart$!: Observable<UniquePart | null>;

  constructor(
    private route: ActivatedRoute,
    private laneService: LaneService,
    private uniquePartService: UniquePartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.laneId = params['lane_id'];
        this.uniquePartId = params['unique_part_id'];
        
        this.getLane(this.laneId);
        this.getUniquePart(this.uniquePartId);
      }
    );
  }

  getLane(id: string) {
    this.lane$ = this.laneService.getLane(id);
  }

  getUniquePart(id: string) {
    this.uniquePart$ = this.uniquePartService
      .getUniquePart(id)
      .pipe(
        catchError(
          () => {
            return of(null);
          }
        )
      );
  }
  
  dataArray(uniquePart: UniquePart) {
    return uniquePart.data as any[];
  }

  isKeyValueData(data: any): boolean {
    if(data['key'] || data['key'] == '' && data['value'] || data['value'] == '')
      return true;

    return false;
  }

  isLinkData(data: any): boolean {
    if(data['name'] || data['name'] == '' && data['url'] || data['url'] == '')
      return true;

    return false;
  }

  isImageData(data: any): boolean {
    if(data['alt'] || data['alt'] == '' && data['src'] || data['src'] == '')
      return true;

    return false;
  }

}
