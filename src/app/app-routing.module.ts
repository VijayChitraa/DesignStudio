import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import  { contactResolver } from './Resolver/contact.resolver';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageResolver } from './Resolver/homepage.resolver';
import { AboutResolver } from './Resolver/about.resolver'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, resolve: {home: HomepageResolver }},
  {path: 'about', component: AboutComponent, resolve: {contact: AboutResolver}},
  {path: 'contact', component: ContactComponent, resolve: {contact: contactResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
