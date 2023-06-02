import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateComponent } from './components/generate/generate.component';
import { LookupScanComponent } from './components/lookup/lookup-scan/lookup-scan.component';
import { LookupInformationComponent } from './components/lookup/lookup-information/lookup-information.component';
import { AdminScanComponent } from './components/admin/admin-scan/admin-scan.component';
import { AdminLaneComponent } from './components/admin/admin-lane/admin-lane.component';
import { AdminLaneListComponent } from './components/admin/admin-lane-list/admin-lane-list.component';
import { AdminLaneCreateComponent } from './components/admin/admin-lane-create/admin-lane-create.component';
import { AdminUniquePartListComponent } from './components/admin/admin-unique-part-list/admin-unique-part-list.component';
import { AdminUniquePartComponent } from './components/admin/admin-unique-part/admin-unique-part.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { KeyenceComponent } from './components/keyence/keyence.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    LookupScanComponent,
    LookupInformationComponent,
    AdminScanComponent,
    AdminLaneComponent,
    AdminLaneListComponent,
    AdminLaneCreateComponent,
    AdminUniquePartListComponent,
    AdminUniquePartComponent,
    AdminComponent,
    HomeComponent,
    KeyenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZXingScannerModule,
    QRCodeModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
