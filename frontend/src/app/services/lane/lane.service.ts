import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lane, LaneDeleteDto, LaneUpdateDto } from 'src/app/types/lane.type';

@Injectable({
  providedIn: 'root'
})
export class LaneService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLanes(): Observable<Lane[]> {
    return this.httpClient.get<Lane[]>(`api/lane/`);
  }

  getLane(id: string): Observable<Lane> {
    return this.httpClient.get<Lane>(`api/lane/${id}`);
  }

  updateLane(laneUpdateDto: LaneUpdateDto): Observable<any> {
    return this.httpClient.post(`api/lane/`, laneUpdateDto);
  }

  deleteLane(laneDeleteDto: LaneDeleteDto): Observable<any> {
    return this.httpClient.delete(`api/lane/`, { body: laneDeleteDto });
  }

}
