import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRegisterComponent } from './pages/edit-register/edit-register.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit/:id', component: EditRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
