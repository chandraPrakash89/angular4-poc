import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { HeaderComponent } from './shared/layout/header/header.component';
 import { FooterComponent } from './shared/layout/footer/footer.component';
import{
  
  SharedModule,

} from './shared';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
     FooterComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
