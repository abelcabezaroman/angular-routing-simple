import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersDetailPageComponent } from './pages/users-detail-page/users-detail-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "users", component: UsersPageComponent},
  {path: "users/:idUser", component: UsersDetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
