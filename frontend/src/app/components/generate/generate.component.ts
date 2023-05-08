import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { CodeService } from 'src/app/services/code/code.service';
import { LaneService } from 'src/app/services/lane/lane.service';
import { Lane } from 'src/app/types/lane.type';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  lanes$!: Observable<Lane[]>;

  lane!: Lane;

  url!: string;

  png!: string;

  constructor(
    private laneService: LaneService,
    private codeService: CodeService
  ) { }

  ngOnInit(): void {
    this.getLanes();
  }

  getLanes() {
    this.lanes$ = this.laneService.getLanes();
  }

  generateCode() {
    this.url = this.codeService.generateUrl(this.lane);
  }

}
