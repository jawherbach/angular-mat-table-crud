import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AnimationComponent } from './animation/animation.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', redirectTo: '/animation', pathMatch: 'full' },
  { path: 'aniamation', component: AnimationComponent }  ,  
  { path: 'notification', component: NotificationComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// // @NgModule({
// //   declarations: [],
// //   imports: [
// //     CommonModule
// //   ]
// })
export class AppRoutingModule { }
