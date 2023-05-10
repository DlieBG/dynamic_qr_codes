import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './components/generate/generate.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LookupInformationComponent } from './components/lookup/lookup-information/lookup-information.component';
import { AdminLaneListComponent } from './components/admin/admin-lane-list/admin-lane-list.component';
import { AdminUniquePartListComponent } from './components/admin/admin-unique-part-list/admin-unique-part-list.component';
import { AdminLaneComponent } from './components/admin/admin-lane/admin-lane.component';
import { AdminUniquePartComponent } from './components/admin/admin-unique-part/admin-unique-part.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: ':lane_id/:unique_part_id',
    component: LookupInformationComponent
  },
  {
    path: 'generate',
    component: GenerateComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminLaneListComponent,
        outlet: 'lanes'
      },
      {
        path: ':lane_id',
        component: AdminLaneComponent,
        outlet: 'lanes'
      },
      {
        path: '',
        component: AdminUniquePartListComponent,
        outlet: 'unique_parts'
      },
      {
        path: ':unique_part_id',
        component: AdminUniquePartComponent,
        outlet: 'unique_parts'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
