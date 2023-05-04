import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeService } from 'src/app/services/code/code.service';
import { LaneService } from 'src/app/services/lane/lane.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  // lanes$!: Observable<Lane>;

  url!: string;

  constructor(
    private laneService: LaneService,
    private codeService: CodeService
  ) { }

  ngOnInit(): void {
    this.url = 'http://localhost:4200/test/123aksfdhaksdjhfasdafsdfasdfasdf';
  }

  getLanes() {
    
  }

}
