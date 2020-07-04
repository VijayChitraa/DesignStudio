import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    AboutComponent,
    StickyBarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,

    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
