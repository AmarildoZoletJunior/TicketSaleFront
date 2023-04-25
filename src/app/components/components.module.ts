import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialHeaderComponent } from './initial-header/initial-header.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
  
    InitialHeaderComponent,
       HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    InitialHeaderComponent
  ]
})
export class ComponentsModule { }
