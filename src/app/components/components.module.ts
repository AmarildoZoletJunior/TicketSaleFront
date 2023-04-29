import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialHeaderComponent } from './initial-header/initial-header.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
  
    InitialHeaderComponent,
       HeaderComponent,
       MessageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    InitialHeaderComponent,
    MessageComponent
  ]
})
export class ComponentsModule { }
