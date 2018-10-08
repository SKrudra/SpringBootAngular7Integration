import { NgModule } from '@angular/core';
import{MatDividerModule,MatTableModule,MatFormFieldModule,MatIconModule,MatDialogModule,
    MatSortModule,MatPaginatorModule,MatSelectModule,MatOptionModule,MatTooltipModule,
    MatButtonModule,MatInputModule,MatTabsModule, MatCardModule } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  @NgModule({
    imports: [
      BrowserAnimationsModule,
      MatDividerModule,
      MatTableModule,
      MatFormFieldModule,
      MatSortModule,
      MatPaginatorModule,
      MatSelectModule,
      MatOptionModule,
      MatTooltipModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatInputModule,
      MatTabsModule,
      MatCardModule
    ],
    exports:[BrowserAnimationsModule,
        MatDividerModule,
        MatTableModule,
        MatFormFieldModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        MatOptionModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule
      ]
  })
export class MaterialModules{

}