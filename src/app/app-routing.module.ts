import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LiverComponent } from './components/liver/liver.component';
import { KidneyComponent } from './components/kidney/kidney.component';
import { DiabetesComponent } from './components/diabetes/diabetes.component';
import { HeartComponent } from './components/heart/heart.component';
import { PneumoniaComponent } from './components/pneumonia/pneumonia.component';
import { MalariaComponent } from './components/malaria/malaria.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'services', component: OurServicesComponent, title: 'services' },
  { path: 'doctors', component: OurDoctorsComponent, title: 'doctors' },
  { path: 'feedbacks', component: FeedbacksComponent, title: 'feedbacks' },
  { path: 'liver', component: LiverComponent, title: 'liver' },
  { path: 'kidney', component: KidneyComponent, title: 'kidney' },
  { path: 'diabetes', component: DiabetesComponent, title: 'diabetes' },
  { path: 'heart', component: HeartComponent, title: 'heart' },
  { path: 'Pneumonia', component: PneumoniaComponent, title: 'Pneumonia' },
  { path: 'Malaria', component: MalariaComponent, title: 'Malaria' },
  { path: '**', component: NotFoundComponent, title: 'notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
