import { Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'game', component: GamePageComponent }
];
