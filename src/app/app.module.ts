import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UsersDetailPageComponent } from './pages/users-detail-page/users-detail-page.component';
import { ListComponent } from './shared/components/list/list.component';
import { BtnComponent } from './shared/components/btn/btn.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    ContactPageComponent,
    UsersDetailPageComponent,
    ListComponent,
    BtnComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
