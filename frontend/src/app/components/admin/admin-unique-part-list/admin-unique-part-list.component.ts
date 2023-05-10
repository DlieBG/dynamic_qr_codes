import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UniquePartService } from 'src/app/services/unique-part/unique-part.service';
import { UniquePart } from 'src/app/types/unique-part.type';

@Component({
  selector: 'app-admin-unique-part-list',
  templateUrl: './admin-unique-part-list.component.html',
  styleUrls: ['./admin-unique-part-list.component.scss']
})
export class AdminUniquePartListComponent {

  uniqueParts$!: Observable<UniquePart[]>;

  displayedColumns: string[] = ['id', 'data', 'actions'];

  constructor(
    private uniquePartService: UniquePartService
  ) { }

  ngOnInit(): void {
      this.getUniqueParts();
  }

  getUniqueParts() {
    this.uniqueParts$ = this.uniquePartService.getUniqueParts();
  }
  
}
