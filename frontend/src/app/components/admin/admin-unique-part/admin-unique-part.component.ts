import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { UniquePartService } from 'src/app/services/unique-part/unique-part.service';
import { KeyValueData, LinkData, ImageData, UniquePart } from 'src/app/types/unique-part.type';

@Component({
  selector: 'app-admin-unique-part',
  templateUrl: './admin-unique-part.component.html',
  styleUrls: ['./admin-unique-part.component.scss']
})
export class AdminUniquePartComponent implements OnInit {

  uniquePart$!: Observable<UniquePart>;

  constructor(
    private route: ActivatedRoute,
    private uniquePartService: UniquePartService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.getUniquePart(params['unique_part_id']);
      }
    );
  }

  getUniquePart(id: string) {
    this.uniquePart$ = this.uniquePartService
      .getUniquePart(id)
      .pipe(
        catchError(
          () => {
            return of({
              id,
              data: []
            } as UniquePart);
          }
        )
      );
  }

  update(uniquePart: UniquePart) {
    this.uniquePartService
      .updateUniquePart(uniquePart)
      .subscribe(
        () => {
          this.snackbar.open('Unique Part updated successfully', '', { duration: 3000 });
        }
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

  addKeyValueData(uniquePart: UniquePart) {
    uniquePart.data.push({
      key: '',
      value: ''
    } as KeyValueData as any);
  }
  
  addLinkData(uniquePart: UniquePart) {
    uniquePart.data.push({
      name: '',
      url: ''
    } as LinkData as any);
  }
  
  addImageData(uniquePart: UniquePart) {
    uniquePart.data.push({
      alt: '',
      src: ''
    } as ImageData as any);
  }

}
