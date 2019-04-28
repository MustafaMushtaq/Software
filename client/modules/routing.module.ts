import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-menu',
    pathMatch: 'full'
  },
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path: 'style-guide',
    component: StyleGuideComponent
  },
  {
    path: 'header-footer',
    component: HeaderFooterComponent
  },
  {
    path: 'main-screen',
    component: MainScreenComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
