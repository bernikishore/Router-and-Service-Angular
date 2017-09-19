import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



import {UserComponent} from './user/user.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';


const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes
);
