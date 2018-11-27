import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

//Layouts
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/about', pathMatch: 'full' },
            { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
            { path: 'about', loadChildren: './components/home/about.module#AboutModule' },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }