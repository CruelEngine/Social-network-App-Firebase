import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainappRoutingModule } from './mainapp-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainappComponent } from './mainapp/mainapp.component';

@NgModule({
  imports: [
    CommonModule,
    MainappRoutingModule
  ],
  declarations: [NavigationComponent, MainappComponent]
})
export class MainappModule { }
