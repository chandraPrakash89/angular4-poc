import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import{
  
  SharedModule,

} from './shared';
import { HomeComponent } from './home/home/home.component';
// import { AppRoutingModule } from './/app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';


//const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
const appRoutes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  //for empty redirect to home
  {path:'', redirectTo:'/home', pathMatch:'full'},
  // /kjkjk redirect to home page
  {path:'**', redirectTo:'/home', pathMatch:'full' },
  {path:'user', children:[
    {path:'list', component:UserListComponent}

  ]}
]

@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
     FooterComponent,
     HomeComponent,
     SigninComponent,
     SignupComponent,
     UserListComponent,
     UserComponent,
     
  ],
  imports: [
    BrowserModule,
    // SharedModule,
    // AppRoutingModule,
   
    RouterModule.forRoot(appRoutes),
    //HomeModule
    //rootRouting
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
