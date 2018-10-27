import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path : 'profile' , component : UserProfileComponent},
  { path : '**' , component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainappRoutingModule { }
