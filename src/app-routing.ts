import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelandingComponent } from './homelanding/homelanding.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [{ path: 'home', component: HomelandingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
