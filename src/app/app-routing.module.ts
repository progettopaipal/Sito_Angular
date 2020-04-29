import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';


const routes: Routes = [
  { path: '', redirectTo: 'primo', pathMatch: 'full' },
  { path: 'primo', component: PrimoComponent },
  { path: 'secondo', component: SecondoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
