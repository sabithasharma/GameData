import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../app/components/home/home.component';
import { LoginComponent } from './../app/components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
