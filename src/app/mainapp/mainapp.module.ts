import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { MainappRoutingModule } from './mainapp-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


import { MatFormFieldModule , MatInputModule , MatCardModule} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MainappRoutingModule ,
    MatFormFieldModule ,
    MatInputModule ,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NavigationComponent, MainappComponent, PagenotfoundComponent, UserProfileComponent]
})
export class MainappModule { }
