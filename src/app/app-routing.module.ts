import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerAppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: ListerAppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
