import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation/documentation.component';
import {RouterModule, Routes} from '@angular/router';
import {  MatCardModule,
  MatIconModule, MatButtonModule, MatDividerModule,
  MatProgressSpinnerModule, MatToolbarModule
  } from '@angular/material';

  const documentationRoutes: Routes = [{
    path: '',
    component: DocumentationComponent
    }];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  MatIconModule, MatButtonModule, MatDividerModule,
  MatProgressSpinnerModule, MatToolbarModule,
  RouterModule.forChild(documentationRoutes)
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule { }
