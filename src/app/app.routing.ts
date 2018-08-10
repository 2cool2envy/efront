import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { EditComponent } from './edit/edit.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'stats',
      component: StatsComponent 
    },
    {
      path: 'dashboard',
      component: DashboardComponent 
    },
    {
      path: 'add',
      component: AddComponent 
    },
    {
      path: 'feedback',
      component: FeedbackComponent 
    },
    {
      path: 'quick',
      component:NavbarComponent
    },
    {
      path: 'edit',
      component:EditComponent  
      },
      {
        path:'image',
        component :ImagesliderComponent
      }

];
export const appRouterModule = RouterModule.forRoot(routes);
