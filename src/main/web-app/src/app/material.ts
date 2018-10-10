import { NgModule } from '@angular/core';
import{MatDividerModule,MatTableModule,MatFormFieldModule,MatIconModule,MatDialogModule,
    MatSortModule,MatPaginatorModule,MatSelectModule,MatOptionModule,MatTooltipModule,
    MatButtonModule,MatInputModule,MatTabsModule, MatCardModule, MatToolbarModule,
    MatSidenavModule } from '@angular/material';
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
      MatCardModule,
      MatToolbarModule,
      MatSidenavModule
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
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule
      ]
  })
export class MaterialModules{

}