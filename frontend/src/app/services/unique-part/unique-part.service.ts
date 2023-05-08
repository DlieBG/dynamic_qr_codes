import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniquePart, UniquePartDeleteDto, UniquePartUpdateDto } from 'src/app/types/unique-part.type';

@Injectable({
  providedIn: 'root'
})
export class UniquePartService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUniqueParts(): Observable<UniquePart[]> {
    return this.httpClient.get<UniquePart[]>(`api/unique-part/`);
  }

  getUniquePart(id: string): Observable<UniquePart> {
    return this.httpClient.get<UniquePart>(`api/unique-part/${id}`);
  }

  updateUniquePart(uniquePartUpdateDto: UniquePartUpdateDto): Observable<any> {
    return this.httpClient.post(`api/unique-part/`, uniquePartUpdateDto);
  }

  deleteUniqueParts(uniquePartDeleteDto: UniquePartDeleteDto): Observable<any> {
    return this.httpClient.delete(`api/unique-part/`, { body: uniquePartDeleteDto });
  }

}
