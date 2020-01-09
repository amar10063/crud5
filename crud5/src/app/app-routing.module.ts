import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundngComponent } from './page-not-foundng/page-not-foundng.component';

const routes: Routes = [
 // { path: '', redirectTo: '', pathMatch: 'full' },
// { path: '**', component: PageNotFoundngComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

