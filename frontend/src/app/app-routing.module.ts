import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './components/generate/generate.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LookupInformationComponent } from './components/lookup/lookup-information/lookup-information.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':lane_id/:unique_part_id', component: LookupInformationComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
