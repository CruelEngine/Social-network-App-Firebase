import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MainappRoutingModule } from "./mainapp-routing.module";
import { NavigationComponent } from "./navigation/navigation.component";
import { MainappComponent } from "./mainapp/mainapp.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";
import { UserFriendsComponent } from "./user-friends/user-friends.component";
import { FriendsdatePipe } from "./friendsdate.pipe";

@NgModule({
  imports: [
    CommonModule,
    MainappRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [
    NavigationComponent,
    MainappComponent,
    PagenotfoundComponent,
    UserProfileComponent,
    UserFriendsComponent,
    FriendsdatePipe
  ]
})
export class MainappModule {}
